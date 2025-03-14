// @ts-nocheck
"use client";
import React, { useEffect, useState, Suspense } from "react";
import dynamic from "next/dynamic";
import {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
} from "@/hooks/UseProducts";
import { useGetAllProductReviewsQuery } from "@/hooks/UseReview";
import ProductCard from "@/components/ProductCard";
import { Skeleton } from "@/components/ui/skeleton";
import { Minus, Plus, ShoppingCart, Heart, Loader2 } from "lucide-react";
import Head from "next/head";
import { useParams, useRouter } from "next/navigation";
import { toast } from "sonner";
import {
  useAddToFavouriteMutation,
  useRemoveFromFavouriteProductIdMutation,
} from "@/hooks/UseFavourite";
import { useAddToCartMutation } from "@/hooks/UseCart";
import { useSelector } from "react-redux";
import Link from "next/link";
import { CURRENCY } from "@/lib/constants";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import Gallery from "@/components/products/product/Gallery";
import { Button } from "@/components/ui/button";
import Reviews from "@/components/products/product/Reviews";
import Stars from "@/components/Stars";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// Dynamic imports for heavy components
// const Gallery = dynamic(() => import("@/components/products/product/Gallery"), {
//   ssr: false,
// });
// const TabComponent = dynamic(() => import("@/components/singleProduct/TabContent"), { ssr: false });

const Page = () => {
  const userId = useSelector((state: any) => state.authSlice?.user?.id);
  const isLoggedIn = useSelector((state: any) => state.authSlice.isLoggedIn);
  const { id } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const breadcrumbItems = [{ label: "products" }, { label: product?.name }];
  const [relatedProducts, setRelatedProducts] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [averageRating, setAverageRating] = useState(0);

  const [addToCart, { isLoading: addingToCart }] = useAddToCartMutation();
  const [addToFavourite, { isLoading: addingToFav }] =
    useAddToFavouriteMutation();
  const [removeFromFavourite, { isLoading: removingFromFav }] =
    useRemoveFromFavouriteProductIdMutation();

  const {
    data: productData,
    isLoading: productLoading,
    refetch,
    isError,
  } = useGetProductByIdQuery(id);
  const { data: relatedData, isLoading: relatedLoading } =
    useGetAllProductsQuery({
      pageNo: "1",
      pageSize: "8",
      CategoryId: product?.Category?.id,
    });
  const {
    data: reviewData,
    isLoading: reviewLoading,
    refetch: refetchReview,
  } = useGetAllProductReviewsQuery(id);

  useEffect(() => {
    if (productData) setProduct(productData.data);
    if (relatedData) setRelatedProducts(relatedData.data);
  }, [productData, relatedData, product]);

  const handleIncrement = () => setQuantity((prevQty) => prevQty + 1);
  const handleDecrement = () =>
    setQuantity((prevQty) => (prevQty > 1 ? prevQty - 1 : 1));

  const handleAddToCart = async () => {
    if (!isLoggedIn) {
      toast.error("Not Logged In");
      router.push("/auth/login");
      return;
    }

    if (!product) {
      toast.error("Error", {
        description: "Product information not available.",
      });
      return;
    }

    if (product.baseQuantity < quantity || quantity <= 0) {
      toast.warning("Invalid Quantity", {
        description:
          "Please select a valid quantity that is available in stock.",
      });
      return;
    }

    try {
      await addToCart({ ProductId: product.id, quantity });
      toast.success("Item added to your cart.");
    } catch (error) {
      toast.error("Failed to add item to cart.");
    }
  };

  const handleToggleFavorite = async () => {
    if (!isLoggedIn) {
      toast.error("Not Logged In", {
        action: {
          label: "Login",
          onClick: () => router.push("/auth/login"),
        },
      });
      return;
    }

    try {
      if (product.isFavorite) {
        await removeFromFavourite(product.id);
      } else {
        await addToFavourite({ ProductId: product.id });
      }
      refetch();

      toast.success(
        !product.isFavorite ? "Added to favorites" : "Removed from favorites"
      );
    } catch (error) {
      toast.error("Failed to update favorites.");
    }
  };

  useEffect(() => {
    if (
      reviewData?.data &&
      Array.isArray(reviewData.data) &&
      reviewData.data.length > 0
    ) {
      const totalRating = reviewData.data.reduce((sum, review) => {
        const rating = Number(review.star) || 0;
        return sum + rating;
      }, 0);

      const avgRating = totalRating / reviewData.data.length;

      setAverageRating(Number(avgRating.toFixed(1)));
    } else {
      setAverageRating(0);
    }
  }, [reviewData]);

  useEffect(() => {
    if (product?.name) {
      document.title = `${product.name} | Umazing Official`;
    }
  }, [product]);

  const handleCheckout = () => {
    if (!product || !product.id) {
      toast.error("Product information not available.");
      return;
    }

    // Safeguard: Validate quantity
    if (quantity > product.baseQuantity || quantity <= 0 || isNaN(quantity)) {
      toast("Invalid Quantity", {
        description:
          "Please select a valid quantity that is available in stock.",
      });
      return;
    }

    try {
      // Clear any existing selected items
      localStorage.removeItem("selectedItems");

      // Create and add the current product
      const selectedItem = [{ id: product.id, quantity }];
      localStorage.setItem("selectedItems", selectedItem);

      // Confirm successful addition
      console.log(
        "Added to localStorage:",
        localStorage.getItem("selectedItems")
      );

      // Navigate to the checkout page
      router.push("/checkout");
    } catch (error) {
      console.error("Error saving to localStorage:", error);
      toast.error("Unable to save product selection. Please try again.");
    }
  };

  return (
    <>
      {isError ? (
        <div className="flex flex-col items-center justify-center space-y-4 w-full h-[80vh]">
          <span class="text-4xl text-primary">Product not found!</span>
          <Link href="/">
            {" "}
            <button class="px-6 py-2 bg-primary text-white rounded-full shadow-md hover:bg-primary-dark transition-all duration-200">
              Go to Home
            </button>
          </Link>
        </div>
      ) : (
        <>
          <Head>
            <title>{product?.name || "Loading..."}</title>
            <meta
              property="og:title"
              content={product?.name || "Product Details"}
            />
            <meta
              property="og:description"
              content={product?.description || ""}
            />
            <meta
              property="og:image"
              content={product?.images?.[0]?.imagePath || "/default-image.png"}
            />
            <meta
              property="og:url"
              content={`http://localhost:3000/products/${product?.id}`}
            />
            <meta name="description" content={product?.description || ""} />
            <meta name="robots" content="index, follow" />
          </Head>

          <div className="w-full px-5 py-2 sm:px-6 sm:py-3 md:px-10 md:py-4 lg:px-15 lg:py-6 space-y-4 lg:space-y-6 min-h-[80vh]">
            <Breadcrumbs items={breadcrumbItems} />
            {/* Product Section */}
            <div className="gap-2 md:gap-5 w-full h-fit flex flex-col lg:flex-row justify-center lg:justify-between">
              <div className="w-full lg:w-[50%] overflow-hidden">
                {productLoading ? (
                  <Skeleton className="h-full w-full" />
                ) : (
                  <Gallery data={product?.Product_Images} />
                )}
              </div>

              <div className="w-full lg:w-[50%] h-full space-y-6 lg:space-y-8">
                {/* name and category */}
                <div className="w-full space-y-1">
                  <h1 className="text-black text-lg md:text-2xl lg:text-4xl font-semibold">
                    {product?.name}
                  </h1>
                  <p className="text-base text-secondary">
                    {product?.Category?.name}
                  </p>
                </div>
                {/* price and rating */}
                <div className="w-full space-y-1">
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl md:text-2xl lg:text-3xl">
                      {CURRENCY}
                      {product?.basePrice}
                    </h2>
                    <p className="text-sm lg:text-base">
                      {product?.baseQuantity > 0 ? (
                        <span className="text-green-500">In Stock</span>
                      ) : (
                        <span className="text-destructive">Out of Stock</span>
                      )}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <Stars rating={averageRating} />
                    <p className="text-secondary text-sm">
                      {reviewData?.data?.length || 0}
                    </p>
                  </div>
                </div>

                {/* quantity */}
                <div className="w-full">
                  <div className="h-[50px] w-[25%] border border-[#E6E6E6] p-[8px] rounded-[170px] flex gap-2 lg:gap-0 items-center justify-between py-2">
                    <button
                      className="w-[34px] h-[34px] bg-[#F2F2F2] rounded-full flex justify-center items-center"
                      onClick={handleDecrement}
                      disabled={addingToCart}
                    >
                      <Minus width={10} height={10} />
                    </button>
                    <div>{quantity}</div>
                    <button
                      className="w-[34px] h-[34px] bg-[#F2F2F2] rounded-full flex justify-center items-center"
                      onClick={handleIncrement}
                      disabled={quantity >= product?.baseQuantity}
                    >
                      <Plus width={10} height={10} />
                    </button>
                  </div>
                </div>
                <hr />
                <div className="w-full space-y-8">
                  {/* product details*/}
                  <div className="w-full space-y-1">
                    <h1 className="text-base md:text-lg lg:text-xl font-bold">Product Details</h1>
                    <p className="text-xs md:text-sm">{product?.longDescription}</p>
                  </div>
                  {/* seller Details */}
                  <div className="w-full space-y-1">
                    <h1 className="text-base md:text-lg lg:text-xl font-bold">Seller Details</h1>
                    <p className="text-xs md:text-sm">Sold by: {product?.UserId}</p>
                  </div>
                </div>

                {/* Add to Cart Section */}
                <div className="w-full lg:w-[86%] flex items-center justify-between gap-2">
                  <Button
                    onClick={handleAddToCart}
                    disabled={addingToCart}
                    className="w-[50%] text-xs md:text-sm bg-[#EAB308]"
                  >
                    {addingToCart ? (
                      <Loader2 className="animate-spin" />
                    ) : (
                      <>Add to Cart</>
                    )}
                  </Button>
                  <Button
                    onClick={handleCheckout}
                    disabled={addingToCart}
                    className="w-[50%] text-xs md:text-sm"
                  >
                    Buy Now
                  </Button>
                </div>
              </div>
            </div>

            {/* Reviews */}
            <div className="w-full pt-5">
              {productLoading || reviewLoading ? (
                <Skeleton className="h-24 w-full" />
              ) : (
                <Reviews
                  product={product}
                  review={reviewData}
                  refetch={refetchReview}
                />
              )}
            </div>

            {/* Related Products Section */}
            <div className="w-full mt-8">
              <h1 className="lg:text-[30px] text-[23px] font-medium md:font-bold text-center">
                Related Products
              </h1>
              {relatedLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <Skeleton
                      key={i}
                      className="w-full group lg:h-[360px] rounded-xl sm:h-80"
                    />
                  ))}
                </div>
              ) : (
                <div className="lg:h-auto w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-8">
                  {relatedProducts?.map((product, index) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      index={index}
                      setProducts={setRelatedProducts}
                      products={relatedProducts}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Page;

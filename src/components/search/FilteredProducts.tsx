import { useGetAllProductsQuery } from "@/hooks/UseProducts";
import { X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import FilterProductCard from "./FilterProductCard";
import Pagination from "./Pagination";
import { Skeleton } from "../ui/skeleton";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Searchbar from "./Searchbar";

const FilteredProducts = () => {
  const [triggerFetch, setTriggerFetch] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [products, setProducts] = useState([]);
  const [pageNo, setPageNo] = useState<number>(1);
  const pageSize = 20;
  const [totalPages, setTotalPages] = useState<number>(1);
  const [priceSort, setPriceSort] = useState<string>("");

  const name = searchParams.get("name") || "";
  const condition = searchParams.get("condition") || "";
  const city = searchParams.get("city") || "";
  const minPrice = searchParams.get("minPrice") || "";
  const maxPrice = searchParams.get("maxPrice") || "";
  const claim = searchParams.get("claim") || "";
  const onlyOfferProducts = searchParams.get("onlyOfferProducts") || "";
  const CategoryId = searchParams.get("categoryId") || "";
  const offerId = searchParams.get("offerId") || "";

  const queryParams: any = {
    pageNo,
    pageSize,
  };

  if (name) queryParams.name = name;
  if (condition) queryParams.condition = condition;
  if (city) queryParams.city = city;
  if (minPrice) queryParams.minPrice = minPrice;
  if (maxPrice) queryParams.maxPrice = maxPrice;
  if (claim) queryParams.claim = claim;
  if (onlyOfferProducts) queryParams.onlyOfferProducts = onlyOfferProducts;
  if (CategoryId) queryParams.CategoryId = CategoryId;
  if (offerId) queryParams.offerId = offerId;
  if (priceSort && priceSort !== "Default") {
    queryParams.priceSort = priceSort === "Ascending" ? "ASC" : "DESC";
  }

  const {
    data: productsData,
    isLoading,
    isError,
    refetch,
  } = useGetAllProductsQuery(queryParams);

  useEffect(() => {
    if (productsData?.success) {
      setProducts(productsData.data);
      const pages = Math.ceil(productsData.total / pageSize);
      setTotalPages(pages);
    }
  }, [productsData]);

  useEffect(() => {
    refetch();
  }, [pageNo, refetch]);

  return (
    <div className="w-full space-y-8">
      <div className="w-full flex md:items-center justify-between flex-col md:flex-row gap-5">
        <Searchbar />
        <div className="flex items-center gap-2">
          <p className="hidden md:block text-sm">Sort by: </p>
          <Select
            value={priceSort}
            onValueChange={(value) => {
              setPriceSort(value);
              setPageNo(1);
            }}
          >
            <SelectTrigger className="w-full md:w-30 lg:w-60 h-[50px] flex items-center border-[1px] border-border rounded-sm drop-shadow-xs py-2 px-3 text-sm text-black">
              <SelectValue placeholder="Sort" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Ascending">Ascending</SelectItem>
              <SelectItem value="Descending">Descending</SelectItem>
              <SelectItem value="Default">Default</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      {/* Active filter and total results */}
      <div className="w-full bg-[#F2F4F5] px-6 py-3 text-sm gap-4 flex items-center justify-between">
        {/* Active filters */}
        <div className="flex-1 gap-3 flex items-center justify-start">
          <h5 className="text-[#5F6C72]">Active Filters:</h5>
          <div className="w-[400px] flex-auto overflow-x-scroll no-scrollbar">
            <div className="w-fit flex items-center gap-3">
              {[
                "Electronic Devices",
                "Laptops",
                "Smartphones",
                "Smartphones",
                "Smartphones",
                "Electronic Devices",
                "Laptops",
                "Smartphones",
                "Smartphones",
                "Smartphones",
              ].map((filter, index) => (
                <button
                  key={index}
                  className="gap-2 flex items-center justify-center"
                >
                  <p className="text-nowrap">{filter}</p>
                  <X size={12} />
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="w-fit">
          <p className="text-[#5F6C72]">
            <span className="font-semibold text-black">{products.length}</span>{" "}
            Results found.
          </p>
        </div>
      </div>

      {/* filtered products */}
      {isLoading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-7">
          {Array(6)
            .fill(null)
            .map((_, index) => (
              <Skeleton
                key={index}
                className="w-full h-[240px] md:h-[280px] lg:h-[320px]"
              />
            ))}
        </div>
      ) : products.length === 0 ? (
        <div className="w-full h-[500px] flex items-center justify-center rounded-lg">
          <h2 className="text-2xl font-semibold text-black">
            Product Not Found
          </h2>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-7">
            {products.map((product, index) => (
              <FilterProductCard
                product={product}
                index={index}
                key={product.id}
              />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-6">
              <Pagination
                totalPages={totalPages}
                currentPage={pageNo}
                onPageChange={(page) => setPageNo(page)}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default FilteredProducts;

// @ts-nocheck
import { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ImagePlus, Star, X } from "lucide-react";
import ReviewCards from "./ReviewCards";
import { useAddReviewMutation } from "@/hooks/UseReview";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Image from "next/image";
import { toast } from "sonner";
import Stars from "@/components/Stars";

const Reviews = ({ product, review, refetch }) => {
  const isLoggedIn = useSelector(
    (state: RootState) => state.authSlice.isLoggedIn
  );
  const [activeTab, setActiveTab] = useState("description");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [addReview, { isLoading, data: response }] = useAddReviewMutation();
  // Calculate average rating with better null checks
  const avgRating =
    review?.data?.length > 0
      ? (
          review.data.reduce((acc, curr) => {
            const stars = parseFloat(curr.star) || 0;
            return acc + stars;
          }, 0) / review.data.length
        ).toFixed(1)
      : "0.0";

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);

    if (selectedImages.length + files.length > 3) {
      toast.error("Image limit exceeded");
      return;
    }

    setSelectedImages((prev) => [...prev, ...files]);
  };

  const removeImage = (index: number) => {
    setSelectedImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmitReview = async () => {
    // Validation
    if (rating === 0) {
      toast.error("Rating required");
      return;
    }

    if (!comment.trim()) {
      toast.error("Comment required");
      return;
    }
    const reviewForm = new FormData();
    reviewForm.append("star", rating);
    reviewForm.append("comment", comment);
    reviewForm.append("ProductId", product?.id);

    for (let i = 0; i < selectedImages.length; i++) {
      reviewForm.append("images", selectedImages[i]);
    }

    try {
      const toastId = toast.loading("Adding Review...");

      const result = await addReview(reviewForm).unwrap();
      toast.dismiss(toastId);
      toast.success("Review Added Successfully");

      // Refetch and reset form
      await refetch();
      setRating(0);
      setComment("");
      setSelectedImages([]);
      setIsDialogOpen(false);
    } catch (error: any) {
      toast.error(error?.data?.message || "Something went wrong");
    }
  };

  const handleAddReviewClick = () => {
    if (!isLoggedIn) {
      toast.error("Not Logged In", {
        action: {
          label: "Login",
          onClick: () => router.push("/auth/login"),
        },
      });
      return;
    }
    setIsDialogOpen(true);
  };

  const ratings = [
    { stars: 5, percentage: 92 },
    { stars: 4, percentage: 70 },
    { stars: 3, percentage: 50 },
    { stars: 2, percentage: 30 },
    { stars: 1, percentage: 10 },
  ];

  return (
    <div className="w-full sm:text-md text-sm space-y-4 lg:space-y-5">
      <h1 className="text-base md:text-lg lg:text-xl font-bold">Customer Reviews</h1>
      <div className="w-full flex-col md:flex-row flex items-start justifiy-between space-x-2 md:divide-x-2 lg:divide-x-0">
        <div className="w-full md:w-[44%] lg:w-1/2 space-y-4 py-3 md:px-2 lg-px-0">
          <div className="flex items-center gap-1">
            <h1 className="text-2xl font-semibold text-primary">{avgRating}</h1>
            <div className="space-y-0.5">
              <Stars rating={avgRating} className="md:!size-3" />
              <h3 className="text-sm text-secondary">
                {review?.data?.length || 0} Global Rating
              </h3>
            </div>
          </div>
          {/* progress rating */}
          <div className="space-y-3">
            <h1 className="text-base text-black">{avgRating} of 5</h1>
          <div className="w-fit space-y-2 lg:space-y-3">
          {ratings.map((rating, index) => (
              <div
                key={index}
                className="w flex items-center justify-between gap-2"
              >
                <p className="text-xs lg:text-sm text-secondary">{rating.stars} Stars</p>
                <div className="w-[140px] lg:w-[260px] h-3.5 lg:h-5 bg-gray-200 rounded-sm overflow-hidden mx-2">
                  <div
                    className="h-full bg-primary transition-all"
                    style={{ width: `${rating.percentage}%` }}
                  />
                </div>
                <p className="text-xs lg:text-sm w-10 text-right text-secondary">{rating.percentage}%</p>
              </div>
            ))}
          </div>
          </div>
          <hr />
          {/* add review */}
          <div className="py-3 space-y-2 lg:space-y-3">
            <div className="space-y-1">
              <h1 className="text-sm sm:text-base lg:text-lg font-semibold">Review this product</h1>
              <p className="text-xs md:text-sm">
                Share your thoughts with other customers
              </p>
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  className="w-full lg:w-[390px] text-sm lg:text-sm"
                  onClick={handleAddReviewClick}
                >
                  Write a Customer review
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] !px-0 md:py-10">
                <DialogHeader>
                  <DialogTitle className="text-xl text-center">
                    Write a Review
                  </DialogTitle>
                </DialogHeader>
                <div className="w-full px-4 bg-[#F5F5F5] py-4 flex items-center justify-center flex-col gap-4">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`cursor-pointer size-8 ${
                          star <= (hoveredRating || rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                        onMouseEnter={() => setHoveredRating(star)}
                        onMouseLeave={() => setHoveredRating(0)}
                        onClick={() => setRating(star)}
                      />
                    ))}
                  </div>
                  {/* Comment */}
                  <div className="w-full">
                    <Textarea
                      id="comment"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="Write your review"
                      className="bg-white rounded-xl text-sm h-[140px] p-4"
                    />
                  </div>
                  {/* Image upload */}
                  {/* <div className="grid gap-4 w-full">
                    <Label className="font-medium text-gray-700">
                      Upload Images (Max 3)
                    </Label>

                    <label
                      htmlFor="image-upload"
                      className="cursor-pointer flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <ImagePlus className="w-10 h-10 text-gray-500 mb-2" />
                      <span className="text-gray-600 text-sm">
                        Click or drag & drop to upload
                      </span>
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleImageUpload}
                        className="hidden"
                        id="image-upload"
                      />
                    </label>

                    {selectedImages.length > 0 && (
                      <div className="grid grid-cols-3 gap-2">
                        {selectedImages.map((image, index) => (
                          <div key={index} className="w-20 relative group">
                            <Image
                              src={URL.createObjectURL(image)}
                              alt={`Preview ${index}`}
                              className="size-20 object-cover rounded-md shadow-md group-hover:opacity-80 transition"
                              width={80}
                              height={80}
                            />
                            <button
                              onClick={() => removeImage(index)}
                              className="absolute -top-1 -right-1 bg-destructive text-white rounded-full w-6 h-6 flex items-center justify-center opacity-80 hover:opacity-100 transition"
                            >
                              <X size={16} />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div> */}
                </div>
                <DialogFooter>
                  <div className="w-full px-4 flex items-center justify-end gap-3">
                    <DialogClose asChild>
                      <button
                        className="text-sm rounded-lg px-5 py-2 border border-border text-black"
                        onClick={handleSubmitReview}
                      >
                        Cancel
                      </button>
                    </DialogClose>
                    <button
                      className="text-sm rounded-lg px-5 py-2 bg-primary text-white"
                      onClick={handleSubmitReview}
                    >
                      Submit Review
                    </button>
                  </div>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="w-full md:w-[56%] lg:w-1/2">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-4"></div>
          <ReviewCards review={review} />
        </div>
      </div>
    </div>
  );
};

export default Reviews;

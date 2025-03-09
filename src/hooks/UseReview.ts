import { BASE_URL } from "@/lib/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const review = createApi({
  reducerPath: "review",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/Review/`,
    prepareHeaders: (headers, { getState, endpoint }) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/getAllReview",
    }),

    getAllProductReviews: builder.query({
      query: (id) => {
        return `getAllProductReviews/${id}`;
      },
    }),

    addReview: builder.mutation({
        query: (reviewData) => ({
          url: "/addReview",
          method: "POST",
          body: reviewData,
        }),
      }),
    // getProductById: builder.query({
    //   query: (id) => `/getById/${id}`,
    // }),
    // deleteProductById: builder.mutation({
    //   query: (id) => ({
    //     url: `/deleteById/${id}`,
    //     method: "DELETE",
    //   }),
    // }),
    // getAllVariants: builder.query({
    //   query: () => `getAllVariants`,
    // }),

    // updateProduct: builder.mutation({
    //   query: (updateProduct) => ({
    //     url: "/updateProduct",
    //     method: "POST",
    //     body: updateProduct,
    //   }),
    // }),
  }),
});

export const {
  useGetAllProductReviewsQuery,
  useAddReviewMutation,
} = review;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const userAuthApi = createApi({
  reducerPath: "userAuthApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/api/" }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (user) => {
        console.log("Registering user:", user);
        return {
          url: "register/",
          method: "POST",
          body: user,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
      onSuccess: (data) => {
        console.log("Registration successful:", data);
      },
      onError: (error) => {
        console.error("Error during registration:", error);
      },
    }),
    loginUser: builder.mutation({
      query: (user) => {
        return {
          url: "login/",
          method: "POST",
          body: user,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    getLoggedUser: builder.query({
      query: (access_token) => {
        return {
          url: "profile/",
          method: "GET",
          headers: {
            authorization: `Bearer ${access_token}`,
          },
        };
      },
    }),
    addToCart: builder.mutation({
      query: ({ access_token, addData }) => {
        return {
          url: "addtocart/",
          method: "POST",
          body: {
            medicine_id: addData.Medicine_id,
            qty:addData.qty
          },
          headers: {
            "Content-type": "application/json",
            authorization: `Bearer ${access_token}`,
          },
        };
      },
    }),
    getCartData: builder.query({
      query: (access_token) => {
        return {
          url: "addtocart/",
          method: "GET",
          headers: {
            authorization: `Bearer ${access_token}`,
          },
        };
      },
    }),
    getmedicineData: builder.query({
      query: ({ id, access_token }) => {
        return {
          url: `medicines/${id}`,
          method: "GET",

          headers: {
            authorization: `Bearer ${access_token}`,
          },
        };
      },
    }),
    deleteCartData: builder.mutation({
      query: ({ id, access_token }) => {
        console.log(id, access_token);
        return {
          url: `addtocart/`,
          method: "DELETE",
          body: {
            cart_id: id,
          },
          headers: {
            "Content-type": "application/json",
            authorization: `Bearer ${access_token}`,
          },
        };
      },
    }),
    updateCartData: builder.mutation({
      query: ({ id, access_token, qty }) => {
        console.log(id, access_token);
        return {
          url: `addtocart/`,
          method: "PUT",
          body: {
            cart_id:id,
            qty: qty,
          },
          headers: {
            "Content-type": "application/json",
            authorization: `Bearer ${access_token}`,
          },
        };
      },
    }),
      orderData: builder.mutation({
      query: ({ cart_id, access_token, qty,medicine_id}) => {

        return {
          url: `orderlist/`,
          method: "POST",
          body: {
            cart_id:cart_id,
            qty: qty,
            medicine_id:medicine_id
          },
          headers: {
            "Content-type": "application/json",
            authorization: `Bearer ${access_token}`,
          },
        };
      },
    }),
    getorderData: builder.query({
      query: (access_token) => {
        console.log(access_token);
        return {
          url: `orderlist/`,
          method: "GET",
          headers: {
            authorization: `Bearer ${access_token}`,
          },
        };
      },
    }),
    cancleOrder: builder.mutation({
      query: ({ id, access_token }) => {
        console.log(id, access_token);
        return {
          url: `orderlist/`,
          method: "PUT",
          body: {
            order_id:id,
          },
          headers: {
            "Content-type": "application/json",
            authorization: `Bearer ${access_token}`,
          },
        };
      },
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useGetLoggedUserQuery,
  useAddToCartMutation,
  useGetCartDataQuery,
  useGetmedicineDataQuery,
  useDeleteCartDataMutation,
  useUpdateCartDataMutation,
  useOrderDataMutation,
  useGetorderDataQuery,
  useCancleOrderMutation
} = userAuthApi;

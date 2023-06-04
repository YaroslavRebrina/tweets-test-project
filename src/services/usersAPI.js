import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "users",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://6479a171a455e257fa6373c2.mockapi.io/",
  }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users",
      providesTags: ["Users"],
    }),
    followUser: builder.mutation({
      query: ({ id, isFollowed, followers }) => ({
        url: `/users/${id}`,
        method: "PUT",
        body: { isFollowed, followers: followers + 1 },
      }),
      invalidatesTags: ["Users"],
    }),
    unFollowUser: builder.mutation({
      query: ({ id, isFollowed, followers }) => ({
        url: `/users/${id}`,
        method: "PUT",
        body: { isFollowed, followers: followers - 1 },
      }),
      invalidatesTags: ["Users"],
    }),
    getUsersWithPagination: builder.query({
      query: ({ page, limit }) => `/users?p=${page}&l=${limit}`,
      providesTags: ["Users"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useFollowUserMutation,
  useUnFollowUserMutation,
  useGetUsersWithPaginationQuery,
} = usersApi;

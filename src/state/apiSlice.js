import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi ({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://cultivator-incremental.netlify.app/"})
})
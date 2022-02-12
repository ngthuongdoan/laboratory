// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CharacterResponse } from "types/Character";

// Define a service using a base URL and expected endpoints
export const characterApi = createApi({
  reducerPath: "characterApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://rickandmrtyapi.com/api/character",
  }),
  endpoints: (builder) => ({
    listCharacters: builder.query<CharacterResponse, { page: number }>({
      query: ({ page }) => `?page=${page}`,
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useListCharactersQuery } = characterApi;

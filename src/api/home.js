import useSWR from 'swr';
import { useMemo } from 'react';
// utils
import { fetcher, endpoints } from 'src/utils/axios';

// ----------------------------------------------------------------------

export function useGetHomepage() {
  const URL = endpoints.homepage.list;

  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);

  const memoizedValue = useMemo(
    () => ({
      homepage: data?.data || [],
      homepageLoading: isLoading,
      homepageError: error,
      homepageValidating: isValidating,
      homepageEmpty: !isLoading && !data?.data.length,
    }),
    [data?.data, error, isLoading, isValidating]
  );

  return memoizedValue;
}

// ---------------------------------------------------------------------

export function useGetHomepageWithFilter(filter) {
  let URL;
  if (filter) {
    URL = endpoints.homepage.filterList(filter);
  } else {
    URL = endpoints.homepage.list;
  }

  const { data, isLoading, error, isValidating, mutate } = useSWR(URL, fetcher);

  const refreshFilterHomepage = () => {
    // Use the `mutate` function to trigger a revalidation
    mutate();
  };

  return {
    filteredHomepage: data || [],
    filteredHomepageLoading: isLoading,
    filteredHomepageError: error,
    filteredHomepageValidating: isValidating,
    filteredHomepageEmpty: !isLoading && !data?.length,
    refreshFilterHomepage, // Include the refresh function separately
  };
}
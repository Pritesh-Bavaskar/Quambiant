import useSWR from 'swr';
// utils
import { fetcher, endpoints } from 'src/utils/axios';


export function useGetTagsByFilter(filter) {
  let URL;
  if (filter) {
    URL = endpoints.tags.filterList(filter);
  } else {
    URL = endpoints.tags.list;
  }
  console.log(URL);

  const { data, isLoading, error, isValidating, mutate } = useSWR(URL, fetcher);

  const refreshFilterTags = () => {
    // Use the `mutate` function to trigger a revalidation
    mutate();
  };

  return {
    filteredTags: data || [],
    filteredTagsLoading: isLoading,
    filteredTagsError: error,
    filteredTagsValidating: isValidating,
    filteredTagsEmpty: !isLoading && !data?.length,
    refreshFilterTags,
  };
}

import orderBy from 'lodash/orderBy';
import { useCallback, useState } from 'react';
// @mui
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// routes
import { paths } from 'src/routes/paths';
// hooks
import { useDebounce } from 'src/hooks/use-debounce';
// _mock
import { POST_SORT_OPTIONS } from 'src/_mock';
// api
import { useGetPosts, useSearchPosts } from 'src/api/blog';
// components
import { useSettingsContext } from 'src/components/settings';
import postSliderImg from 'src/assets/media/news/post-slider-img.jpg';
import PostHero from '../post-hero';
import PostSlider from '../post-slider';
//
import PostList from '../post-list';
import PostSort from '../post-sort';
import PostSearch from '../post-search';

// ----------------------------------------------------------------------

export default function PostListHomeView() {
  const settings = useSettingsContext();

  const [sortBy, setSortBy] = useState('latest');

  const [searchQuery, setSearchQuery] = useState('');

  const debouncedQuery = useDebounce(searchQuery);

  const { posts, postsLoading } = useGetPosts();

  const { searchResults, searchLoading } = useSearchPosts(debouncedQuery);

  const dataFiltered = applyFilter({
    inputData: posts,
    sortBy,
  });

  const handleSortBy = useCallback((newValue) => {
    setSortBy(newValue);
  }, []);

  const handleSearch = useCallback((inputValue) => {
    setSearchQuery(inputValue);
  }, []);

  // Sample blog posts data
  const samplePosts = [
    {
      id: '1',
      title: 'The Future of Sustainable Architecture',
      description:
        'Exploring innovative materials and designs that are shaping the future of sustainable architecture and urban development.',
      cover: postSliderImg,
      createdAt: '2025-05-15T12:00:00Z',
      categories: ['Awards'],
    },
    {
      id: '2',
      title: 'Modern Interior Design Trends 2025',
      description:
        'Discover the latest trends in interior design that are transforming living spaces this year.',
      cover: postSliderImg,
      createdAt: '2025-05-10T10:30:00Z',
      categories: ['Awards'],
    },
    {
      id: '3',
      title: 'Smart Home Integration',
      description:
        'How smart home technology is being seamlessly integrated into modern architectural designs.',
      cover: postSliderImg,
      createdAt: '2025-05-05T15:45:00Z',
      categories: ['Awards'],
    },
  ];

  return (
    <Box sx={{ width: '100%', overflow: 'hidden' }}>
      <PostHero />
      <PostSlider posts={samplePosts} />
      <Container maxWidth={settings.themeStretch ? false : 'lg'} sx={{ mt: 4 }}>
        {/* <Typography
        variant="h4"
        sx={{
          my: { xs: 3, md: 5 },
        }}
      >
        Blog
      </Typography> */}

        {/* <Stack
        spacing={3}
        justifyContent="space-between"
        alignItems={{ xs: 'flex-end', sm: 'center' }}
        direction={{ xs: 'column', sm: 'row' }}
        sx={{ mb: { xs: 3, md: 5 } }}
      >
        <PostSearch
          query={debouncedQuery}
          results={searchResults}
          onSearch={handleSearch}
          loading={searchLoading}
          hrefItem={(title) => paths.post.details(title)}
        />

        <PostSort sort={sortBy} onSort={handleSortBy} sortOptions={POST_SORT_OPTIONS} />
      </Stack> */}

        <PostList posts={dataFiltered} loading={postsLoading} />
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

const applyFilter = ({ inputData, sortBy }) => {
  if (sortBy === 'latest') {
    return orderBy(inputData, ['createdAt'], ['desc']);
  }

  if (sortBy === 'oldest') {
    return orderBy(inputData, ['createdAt'], ['asc']);
  }

  if (sortBy === 'popular') {
    return orderBy(inputData, ['totalViews'], ['desc']);
  }

  return inputData;
};

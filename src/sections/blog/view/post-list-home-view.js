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
import { _blogPosts } from 'src/_mock/blog.ts';

import PostHero from '../post-hero';
import PostSlider from '../post-slider';
//
import PostList from '../post-list';
import PostSort from '../post-sort';
import PostSearch from '../post-search';
import PostSubscribe from '../post-subscribe';

// ----------------------------------------------------------------------

export default function PostListHomeView() {
  const settings = useSettingsContext();

  const [sortBy, setSortBy] = useState('latest');

  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

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
      categories: ['Awards'],
      readTime: '5 min read',
    },
    {
      id: '2',
      title: 'Modern Interior Design Trends 2025',
      description:
        'Discover the latest trends in interior design that are transforming living spaces this year.',
      cover: postSliderImg,
      categories: ['Awards'],
      readTime: '5 min read',
    },
    {
      id: '3',
      title: 'Smart Home Integration',
      description:
        'How smart home technology is being seamlessly integrated into modern architectural designs.',
      cover: postSliderImg,
      categories: ['Awards'],
      readTime: '5 min read',
    },
  ];

  return (
    <Box sx={{ width: '100%', overflow: 'hidden' }}>
      <PostHero />
      <PostSlider posts={samplePosts} />
      <PostList posts={_blogPosts} loading={loading} />
      <PostSubscribe />
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

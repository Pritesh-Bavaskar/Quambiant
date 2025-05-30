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
import { useGetPosts, useSearchPosts, useGetPostsByFilter } from 'src/api/blog';
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
  const { filteredPosts } = useGetPostsByFilter(
    `populate[HeroSection][populate]=*&populate[NewsRoomSlider][populate][Tags][populate]=*`
  );

  console.log('filteredPosts', filteredPosts);

  return (
    <Box sx={{ width: '100%', overflow: 'hidden' }}>
      <PostHero hero={filteredPosts?.data?.HeroSection} />
      <PostSlider posts={filteredPosts?.data?.NewsRoomSlider} />
      <PostList posts={_blogPosts} />
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

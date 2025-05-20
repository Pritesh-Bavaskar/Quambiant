import PropTypes from 'prop-types';
import { useState, useRef } from 'react';
// @mui
import { alpha, styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
  ToggleButton,
  ToggleButtonGroup,
  Box,
  Stack,
  Typography,
  Button,
  Grid,
  Pagination,
  PaginationItem,
  IconButton,
  Skeleton,
} from '@mui/material';
// components
import Iconify from 'src/components/iconify';
import PostCard from './post-card';

// ----------------------------------------------------------------------

const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
  padding: theme.spacing(0.75, 2.5),
  border: '1px solid #5B432A !important',
  borderRadius: '0 !important',
  color: '#5B432A',
  textTransform: 'none',
  fontSize: '14px',
  fontWeight: 500,
  margin: '0 4px !important',
  '&:first-of-type': {
    marginLeft: '0 !important',
  },
  '&:last-of-type': {
    marginRight: '0 !important',
  },
  '&.Mui-selected': {
    color: '#FFFFFF',
    backgroundColor: '#5B432A',
    '&:hover': {
      backgroundColor: '#5B432A',
      opacity: 0.9,
    },
  },
  '&:hover': {
    backgroundColor: 'rgba(91, 67, 42, 0.08)',
  },
}));

// ----------------------------------------------------------------------

export default function PostList({ posts = [], loading }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [filter, setFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = isMobile ? 3 : 9; // 3 for mobile, 9 for desktop
  const listRef = useRef(null);

  const handleFilterChange = (event, newFilter) => {
    if (newFilter !== null) {
      setFilter(newFilter);
      setCurrentPage(1); // Reset to first page when filter changes
    }
  };

  const filteredPosts =
    filter === 'all' ? posts : posts.filter((post) => post.categories?.includes(filter));

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
    // Scroll the list container to top smoothly
    if (listRef.current) {
      listRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const categories = ['all', 'design', 'development', 'marketing', 'product'];

  return (
    <Box ref={listRef} sx={{ py: 8 }}>
      <Box
        sx={{
          mb: 5,
          width: '100%',
          overflowX: { xs: 'auto', md: 'visible' },
          '&::-webkit-scrollbar': {
            display: 'none', // Hide scrollbar for Chrome, Safari, and Opera
          },
          msOverflowStyle: 'none', // Hide scrollbar for IE and Edge
          scrollbarWidth: 'none', // Hide scrollbar for Firefox
          display: { xs: 'block', md: 'flex' },
          justifyContent: { md: 'center' },
          px: { xs: 2, md: 3 },
        }}
      >
        <Box
          sx={{
            display: 'inline-flex',
            minWidth: 'min-content',
            '& > *': {
              flexShrink: 0,
            },
          }}
        >
          <ToggleButtonGroup
            value={filter}
            exclusive
            onChange={handleFilterChange}
            aria-label="post filter"
          >
            {categories.map((category) => (
              <StyledToggleButton key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </StyledToggleButton>
            ))}
          </ToggleButtonGroup>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <Grid 
          container 
          spacing={{ xs: 0, sm: 3 }}
          sx={{ 
            width: '100%',
            maxWidth: { xs: '100%', md: 'calc(100% - 32px)' },
            justifyContent: { xs: 'flex-start', md: 'center' },
            margin: { xs: 0, md: '0 auto' },
            px: { xs: 0, sm: 2, md: 3 },
            py: { xs: 2, sm: 3, md: 4 },
            '& .MuiGrid-item': {
              paddingLeft: { xs: 0, sm: '24px !important' },
              paddingTop: { xs: 2, sm: '0 !important' },
              display: 'flex',
              justifyContent: 'center'
            }
          }}
        >
          {loading
            ? // Loading skeleton - 3 items for 3 columns
              [...Array(3)].map((_, index) => (
                <Grid key={index} item xs={12} sm={6} md={4}>
                  <Skeleton variant="rectangular" width="100%" height={320} sx={{ maxWidth: 416 }} />
                </Grid>
              ))
            : currentPosts.map((post) => (
                <Grid key={post.id} item py={4} xs={12} sm={6} md={4}>
                  <PostCard post={post} />
                </Grid>
              ))}
        </Grid>
      </Box>

      <Stack direction="row" justifyContent="center" alignItems="center" spacing={1} sx={{ mt: 8 }}>
        <IconButton
          onClick={() => handlePageChange(null, currentPage - 1)}
          disabled={currentPage === 1}
          sx={{
            width: 52,
            height: 52,
            backgroundColor: 'transparent',
            border: '1px solid',
            borderColor: '#001016',
            borderRadius: '2px',
            color: currentPage === 1 ? 'text.disabled' : '#001016',
            '&:hover': {
              color: 'primary.contrastText',
              backgroundColor: currentPage === 1 ? 'transparent' : '#001016',
              opacity: currentPage === 1 ? 0.5 : 1,
            },
            '&.Mui-disabled': {
              borderColor: 'text.disabled',
              opacity: 0.5,
            },
          }}
        >
          <Iconify icon="eva:arrow-ios-back-fill" width={24} height={24} />
        </IconButton>

        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          hidePrevButton
          hideNextButton
          siblingCount={0}
          boundaryCount={1}
          renderItem={(item) => (
            <PaginationItem
              sx={{
                mx: 0.5,
                minWidth: 52,
                height: 52,
                borderRadius: 0,
                color: 'text.primary',
                border: '1px solid',
                borderColor: 'divider',
                '&.Mui-selected, &:hover.Mui-selected': {
                  bgcolor: '#5B432A',
                  color: 'white',
                  '&:hover': {
                    bgcolor: '#4a3621',
                  },
                },
                '&:hover': {
                  bgcolor: 'rgba(91, 67, 42, 0.08)',
                },
              }}
              {...item}
            />
          )}
        />

        <IconButton
          onClick={() => handlePageChange(null, currentPage + 1)}
          disabled={currentPage === totalPages}
          sx={{
            width: 52,
            height: 52,
            backgroundColor: 'transparent',
            border: '1px solid',
            borderColor: '#001016',
            borderRadius: '2px',
            color: currentPage === totalPages ? 'text.disabled' : '#001016',
            '&:hover': {
              color: 'primary.contrastText',
              backgroundColor: currentPage === totalPages ? 'transparent' : '#001016',
              opacity: currentPage === totalPages ? 0.5 : 1,
            },
            '&.Mui-disabled': {
              borderColor: 'text.disabled',
              opacity: 0.5,
            },
          }}
        >
          <Iconify icon="eva:arrow-ios-forward-fill" width={24} height={24} />
        </IconButton>
      </Stack>
    </Box>
  );
}

PostList.propTypes = {
  loading: PropTypes.bool,
  posts: PropTypes.array,
};

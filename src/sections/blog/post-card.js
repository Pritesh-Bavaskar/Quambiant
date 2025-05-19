import PropTypes from 'prop-types';
// @mui
import { Box, Card, CardContent, Typography, Stack, Avatar, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
// components
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import readMoreImg from 'src/assets/media/news/read-more.svg';

// ----------------------------------------------------------------------

const StyledOverlay = styled('div')({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: '50%',
  background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',
  zIndex: 1,
});

// ----------------------------------------------------------------------

function PostCard({ post }) {
  const { title, cover, categories, description, author, createdAt, readTime } = post;

  return (
    <Card
      sx={{
        width: '100%',
        maxWidth: 416,
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 0,
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
        },
        aspectRatio: '416 / 605',
      }}
    >
      <Box sx={{ position: 'relative', height: 359 }}>
        <Image
          alt={title}
          src={cover}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            aspectRatio: '416 / 359',
          }}
        />
        <StyledOverlay />
        <Stack
          direction="row"
          spacing={1}
          sx={{
            position: 'absolute',
            top: 16,
            left: 16,
            right: 16,
            zIndex: 2,
            overflowX: 'auto',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': { display: 'none' },
          }}
        >
          {categories?.map((category) => (
            <Chip
              key={category}
              label={category}
              size="small"
              sx={{
                backdropFilter: 'blur(6px)',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'white',
                fontSize: '14px',
                fontWeight: 500,
                borderRadius: '4px',
                height: '24px',
                px: 1,
                textTransform: 'uppercase',
                '& .MuiChip-label': { px: 0.5 },
              }}
            />
          ))}
        </Stack>
      </Box>

      <CardContent
        sx={{
          p: 3,
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
          <Avatar alt={author?.name} src={author?.avatarUrl} sx={{ width: 32, height: 32 }} />
          <Typography variant="caption" color="text.secondary">
            {author?.name}
          </Typography>
          <Box sx={{ width: 4, height: 4, bgcolor: 'text.disabled', borderRadius: '50%' }} />
          <Typography variant="caption" color="text.secondary">
            {new Date(createdAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </Typography>
        </Stack> */}
        <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 'auto', mb: 2 }}>
          <Iconify icon="solar:clock-circle-bold" width={16} sx={{ color: 'text.disabled' }} />
          <Typography
            sx={{
              color: '#5C6170',
              fontFamily: 'Satoshi Variable',
              fontSize: '14px',
              fontWeight: 500,
            }}
          >
            {readTime} min read
          </Typography>
        </Stack>

        <Typography
          sx={{
            fontFamily: 'Satoshi Variable',
            fontSize: '20px',
            fontWeight: 500,
            color: '#001016',
          }}
        >
          {title}
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 'auto' }}>
          <Typography
            sx={{
              color: '#454954',
              fontFamily: 'Satoshi Variable',
              fontSize: '16px',
              fontWeight: 500,
            }}
          >
            {description}
          </Typography>
        </Stack>

        <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 'auto' }}>
          <Typography
            sx={{
              color: '#001016',
              fontFamily: 'Satoshi Variable',
              fontSize: '16px',
              fontWeight: 500,
            }}
          >
            Read More
          </Typography>
          <Box component="img" src={readMoreImg} alt="" sx={{ width: 16, height: 16 }} />
        </Stack>
      </CardContent>
    </Card>
  );
}

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    cover: PropTypes.string,
    categories: PropTypes.arrayOf(PropTypes.string),
    author: PropTypes.shape({
      name: PropTypes.string,
      avatarUrl: PropTypes.string,
    }),
    createdAt: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    readTime: PropTypes.number,
  }),
};

export default PostCard;

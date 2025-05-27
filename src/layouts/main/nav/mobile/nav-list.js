import PropTypes from 'prop-types';
// @mui
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
// components
import { usePathname } from 'src/routes/hook';
import Typography from '@mui/material/Typography';
//
import NavItem from './nav-item';

// ----------------------------------------------------------------------

export default function NavList({ item }) {
  const pathname = usePathname();

  const { path, children } = item;

  const nav = useBoolean();

  return (
    <>
      <NavItem
        item={item}
        open={nav.value}
        onClick={nav.onToggle}
        active={pathname === path}
        sx={{
          // Mobile styles (default)
          // Desktop styles
          '@media (min-width: 900px)': {
            my: 3,
            '&:first-of-type': { mt: 0 },
            '&:last-child': { mb: 0 },
          },
        }}
      />

      {!!children && typeof window !== 'undefined' && window.innerWidth < 900 && (
        <Collapse in={nav.value} unmountOnExit>
          <Box sx={{ px: 2, py: 0 }}>
            <Typography
              sx={{
                color: '#666666',
                fontFamily: 'Satoshi Variable',
                fontWeight: 500,
                fontSize: '14px',
                paddingBottom: 2,
              }}
            >
              From vision to reality, we shape homes that inspire
            </Typography>
            {children.map((group) => (
              <Box key={group.title || 'group'} sx={{ mb: 2 }}>
                {group.items?.map((i) => (
                  <Box
                    key={i.path}
                    component="a"
                    href={i.path}
                    sx={{
                      display: 'block',
                      width: '100%',
                      height: 'auto',
                      aspectRatio: '353/90', // Adjust this ratio based on your images (e.g., '4/3', '3/2')
                      mb: 1,
                      backgroundSize: 'contain',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      backgroundImage: i.image ? `url(${i.image})` : 'none',
                      backgroundColor: 'background.neutral',
                      position: 'relative',
                      overflow: 'hidden',
                      '&:hover': {
                        opacity: 0.9,
                      },
                    }}
                  >
                    {/* <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        p: 2,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)',
                        color: 'common.white',
                      }}
                    >
                      {i.title}
                    </Box> */}
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
        </Collapse>
      )}
    </>
  );
}

NavList.propTypes = {
  item: PropTypes.object,
};

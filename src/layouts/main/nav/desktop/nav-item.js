import PropTypes from 'prop-types';
import { m } from 'framer-motion';
import { forwardRef } from 'react';
// @mui
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
// routes
import { RouterLink } from 'src/routes/components';
// components
import Iconify from 'src/components/iconify';
//
import { ListItem } from './styles';
// import { Typography } from '@mui/material';

// ----------------------------------------------------------------------

export const NavItem = forwardRef(
  ({ item, open, offsetTop, active, subItem, externalLink, isAnyMenuOpen, ...other }, ref) => {
    const { title, subtitle, path, children, image } = item;

    const renderContent = (
      <ListItem
        ref={ref}
        disableRipple
        offsetTop={offsetTop}
        subItem={subItem}
        active={active}
        open={open}
        sx={{
          p: 0,
          position: 'relative',
          '&:hover': {
            bgcolor: 'transparent',
          },
        }}
        {...other}
      >
        {subItem ? (
          <Box
            component={RouterLink}
            to={path}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              maxWidth: 320,
              height: '100%',
              borderRadius: 0,
              overflow: 'hidden',
              bgcolor: 'transparent',
              boxShadow: 'none',
              textDecoration: 'none',
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'translateY(-4px)',
              },
            }}
          >
            <Box
              component="img"
              src={image}
              alt={title}
              sx={{
                width: '100%',
                height: 160,
                objectFit: 'cover',
              }}
            />
            <Box sx={{ pt: 2, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
              <Typography
                sx={{
                  fontFamily: 'Satoshi Variable',
                  color: '#18191B',
                  fontWeight: '700',
                  fontSize: '18px',
                }}
              >
                {title}
              </Typography>
              {subtitle && (
                <Typography
                  sx={{
                    fontFamily: 'Satoshi Variable',
                    color: '#333333',
                    fontWeight: '400',
                    fontSize: '14px',
                    lineHeight: '20px',
                    mb: 2,
                    flexGrow: 1,
                  }}
                >
                  {subtitle}
                </Typography>
              )}

              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  color: '#DDAB76',
                  fontWeight: '700',
                  fontFamily: 'Satoshi Variable',
                  fontSize: '14px',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                View Details
                <Iconify icon="eva:arrow-ios-forward-fill" width={16} sx={{ ml: 0.5 }} />
              </Box>
            </Box>
          </Box>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            <Typography
              variant="body2"
              sx={{
                color: (open || isAnyMenuOpen) ? '#000000' : '#FDF8F3',
                fontWeight: '500',
                flexGrow: 1,
                transition: 'color 0.2s ease-in-out',
              }}
            >
              {title}
            </Typography>
            {!!children && (
              <Iconify
                width={16}
                icon="eva:arrow-ios-downward-fill"
                sx={{
                  ml: 1,
                  color: (open || isAnyMenuOpen) ? '#000000' : '#FDF8F3',
                  transition: 'transform 0.2s',
                  ...(open && { transform: 'rotate(180deg)' }),
                }}
              />
            )}
          </Box>
        )}
      </ListItem>
    );

    // External link
    if (externalLink) {
      return (
        <Link href={path} target="_blank" rel="noopener" underline="none">
          {renderContent}
        </Link>
      );
    }

    // Has child
    // if (children) {
    //   return renderContent;
    // }

    // Default
    return (
      <Link component={RouterLink} href={path} underline="none">
        {renderContent}
      </Link>
    );
  }
);

NavItem.propTypes = {
  active: PropTypes.bool,
  externalLink: PropTypes.bool,
  isAnyMenuOpen: PropTypes.bool,
  item: PropTypes.object,
  offsetTop: PropTypes.bool,
  open: PropTypes.bool,
  subItem: PropTypes.bool,
};

// ----------------------------------------------------------------------

export function NavItemDashboard({ item, sx, ...other }) {
  return (
    <Link component={RouterLink} href={item.path} sx={{ width: 1 }} {...other}>
      <CardActionArea
        sx={{
          py: 5,
          px: 10,
          minHeight: 400,
          borderRadius: 0,
          color: 'text.disabled',
          bgcolor: 'background.neutral',

          ...sx,
        }}
      >
        <m.div
          whileTap="tap"
          whileHover="hover"
          variants={{
            hover: { scale: 1.02 },
            tap: { scale: 0.98 },
          }}
        >
          <Box
            component="img"
            alt="illustration_dashboard"
            src="/assets/illustrations/illustration_dashboard.png"
          />
        </m.div>
      </CardActionArea>
    </Link>
  );
}

NavItemDashboard.propTypes = {
  item: PropTypes.object,
  sx: PropTypes.object,
};

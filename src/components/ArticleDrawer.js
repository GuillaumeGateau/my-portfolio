import React from 'react';
import { Drawer, IconButton, useMediaQuery, Box, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const ArticleDrawer = ({ open, onClose, article }) => {
  const isDesktop = useMediaQuery('(min-width:768px)');

  console.log("ArticleDrawer Props:", { open, article });

  if (!article || !article.Component) {
    return (
      <Drawer
        anchor={isDesktop ? 'right' : 'bottom'}
        open={open}
        onClose={onClose}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: 'black',
            color: 'white',
            ...(isDesktop
              ? { width: '50vw' }
              : { height: '90vh', borderRadius: '16px 16px 0 0' }),
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography variant="h6" color="error">
            Unable to load the article. Please try again later.
          </Typography>
        </Box>
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor={isDesktop ? 'right' : 'bottom'}
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': {
          backgroundColor: 'black',
          color: 'white',
          ...(isDesktop
            ? { width: '50vw' }
            : { height: '90vh', borderRadius: '16px 16px 0 0' }),
        },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            color: 'white',
          }}
        >
          <CloseIcon />
        </IconButton>
        <Box sx={{ flex: 1, overflowY: 'auto', p: 2 }}>
          <article.Component />
        </Box>
      </Box>
    </Drawer>
  );
};

export default ArticleDrawer;
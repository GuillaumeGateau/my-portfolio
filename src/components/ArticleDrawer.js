import React from 'react';
import { Drawer, IconButton, useMediaQuery, Box, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ReactMarkdown from 'react-markdown';

const ArticleDrawer = ({ open, onClose, article }) => {
  const isDesktop = useMediaQuery('(min-width:768px)');

  console.log("ArticleDrawer Props:", { open, article });

  if (!article) {
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
          <Typography variant="h4" gutterBottom>
            {article.data.title}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {new Date(article.data.date).toLocaleDateString()}
          </Typography>
          {article.data.image && (
            <img
              src={article.data.image}
              alt={article.data.title}
              style={{ width: '100%', height: 'auto', marginBottom: '16px' }}
            />
          )}
          <ReactMarkdown>{article.content}</ReactMarkdown>
        </Box>
      </Box>
    </Drawer>
  );
};

export default ArticleDrawer;
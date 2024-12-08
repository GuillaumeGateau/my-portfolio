import React, { useEffect } from 'react';
import { Drawer, IconButton, Box, Typography, useMediaQuery } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ReactMarkdown from 'react-markdown';
import '../styles/ArticleDrawer.css';

const ArticleDrawer = ({ open, onClose, article }) => {
  const isDesktop = useMediaQuery('(min-width:768px)');

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [open]);

  return (
    <Drawer
      anchor={isDesktop ? 'right' : 'bottom'}
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': {
          width: isDesktop ? '600px' : '100vw',
          height: isDesktop ? '100vh' : '80vh',
          backgroundColor: 'white',
          color: 'black',
          borderRadius: isDesktop ? '0px' : '16px 16px 0 0',
          overflowY: 'auto',
        },
      }}
    >
      <Box sx={{ position: 'relative', height: '100%', padding: '16px' }}>
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
          }}
        >
          <CloseIcon />
        </IconButton>
        {article && (
          <Box>
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              sx={{ marginTop: '16px' }}
            >
              {article.data.title}
            </Typography>
            <Typography variant="subtitle1" align="center" gutterBottom>
              {new Date(article.data.date).toLocaleDateString()}
            </Typography>
            {article.data.image && (
              <img
                src={article.data.image}
                alt={article.data.title}
                style={{
                  display: 'block',
                  width: '100%',
                  height: 'auto',
                  marginBottom: '16px',
                }}
              />
            )}
            <ReactMarkdown className="markdown-content">{article.content}</ReactMarkdown>
          </Box>
        )}
      </Box>
    </Drawer>
  );
};

export default ArticleDrawer;
/* =========================================
   THEME.JS (ENTIRE FILE) - Key Fix Highlighted
   ========================================= */

   import { createTheme } from "@mui/material/styles";

   const theme = createTheme({
     components: {
       MuiAppBar: {
         styleOverrides: {
           root: {
             backgroundColor: "var(--color-accent)",
             color: "var(--color-secondary-bg)",
             boxShadow: "none",
           },
         },
       },
       MuiButton: {
         styleOverrides: {
           root: {
             textTransform: "none",
             fontSize: "1rem",
             padding: "0.75rem 1.5rem",
             borderRadius: "6px",
             "&:hover": {
               backgroundColor: "var(--color-accent-hover)",
             },
             "&.hero-button": {
               backgroundColor: "white",
               color: "black",
               border: "none",
               padding: "1rem 2rem",
               borderRadius: "5px",
               fontWeight: "bold",
               "&:hover": {
                 backgroundColor: "black",
                 color: "white",
                 border: "1px solid white",
               },
             },
             "&.contact-button": {
               height: "44px",
               fontSize: "0.875rem",
               border: "1px solid var(--color-accent)",
               color: "var(--color-accent)",
               "&:hover": {
                 backgroundColor: "var(--color-accent)",
                 color: "var(--color-card-background)",
               },
             },
             "&.primary-contact-button": {
               backgroundColor: "var(--color-primary-text)",
               color: "var(--color-card-background)",
               "&:hover": {
                 backgroundColor: "var(--color-accent-hover)",
               },
             },
           },
         },
       },
       MuiTextField: {
         defaultProps: {
           variant: "outlined", // Use MUI’s Outlined variant
         },
         styleOverrides: {
           root: {
             /* 
                1. Remove the custom `border: ...` so you do NOT double up 
                   with MUI’s outlined border. Keep color if you want 
                   the input text itself to be var(--color-primary-text).
             */
             "& .MuiInputBase-root": {
               // border: "1px solid var(--color-primary-text)", // <-- Remove this
               color: "var(--color-primary-text)",
             },
             "& .MuiOutlinedInput-root": {
               // Notched outline color (the “cut” border)
               "& .MuiOutlinedInput-notchedOutline": {
                 borderColor: "var(--color-primary-text)",
               },
               "&:hover .MuiOutlinedInput-notchedOutline": {
                 borderColor: "var(--color-primary-text)",
               },
               "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                 borderColor: "var(--color-primary-text)",
               },
               /* Optional: zero out the notch line if you ever want it fully smooth:
                  "& legend": { width: 0, }, */
             },
             "& .MuiInputLabel-root": {
               color: "var(--color-primary-text)",
             },
             "& .MuiInputLabel-root.Mui-focused": {
               color: "var(--color-primary-text)",
             },
           },
         },
       },
       MuiDivider: {
         styleOverrides: {
           root: {
             "&::before, &::after": {
               borderColor: "var(--color-primary-text)",
             },
           },
         },
       },
     },
   });
   
   export default theme;
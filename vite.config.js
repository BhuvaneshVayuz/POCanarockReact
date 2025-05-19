// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'



// export default defineConfig(({ mode }) => {
//   const isProdBuild = mode === 'build-mf'; // our custom prod MF mode

//   return {
//     plugins: [react(), tailwindcss()],
//     build: {
//       lib: {
//         entry: './src/export.js',
//         name: 'noticeBoardMF',
//         fileName: () => `noticeboard-bundle.js`,
//         formats: ['umd'],
//       },
//       rollupOptions: {
//         external: isProdBuild ? [
//           "react",
//           "react-dom",
//           "@mui/material",
//           "@mui/icons-material",
//           "@emotion/react",
//           "@emotion/styled",
//           "react-router-dom",
//           "@mui/material/styles",
//           "mui-tiptap",
//           "@tiptap/starter-kit",
//           "@mui/x-date-pickers",
//           "@mui/x-date-pickers/AdapterDateFns"
//         ] : [],
//         output: {
//           globals: {
//             react: "React",
//             "react-dom": "ReactDOM",
//             "@mui/material": "MaterialUI",
//             "@mui/material/styles": "StylesMUI",
//             "@mui/icons-material": "MuiIcons",
//             "@emotion/react": "EmotionReact",
//             "react-router-dom": "ReactRouterDOM",
//             "@emotion/styled": "EmotionStyled",
//             "mui-tiptap": "TiptapMUI",
//             "@tiptap/starter-kit": "TiptapStarterMUI",
//             "@mui/x-date-pickers": "XDatePickerMUI",
//             "@mui/x-date-pickers/AdapterDateFns": "XDatePickerAdapterMUI"
//           },
//         },
//       },
//       cssCodeSplit: false,
//       define: {
//         'process.env': JSON.stringify({}),
//       },
//       outDir: 'dist',
//     },
//     optimizeDeps: {
//       exclude: isProdBuild ? [
//         "react",
//         "react-dom",
//         "@mui/material",
//         "@mui/icons-material",
//         "@emotion/react",
//         "@emotion/styled",
//         "react-router-dom",
//         "@mui/material/styles",
//         "mui-tiptap",
//         "@tiptap/starter-kit",
//         "@mui/x-date-pickers",
//         "@mui/x-date-pickers/AdapterDateFns"
//       ] : [],
//     },
//   };
// });




import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    build: {
      lib: {
        entry: './src/export.jsx',
        name: 'noticeBoardMF',
        fileName: () => `noticeboard-bundle.js`,
        formats: ['iife'], // IIFE ensures window.noticeBoardMF is exposed
      },
      rollupOptions: {
        // No externals – bundle everything!
        external: [],
        output: {
          globals: {}, // no globals needed since we're not using external
        },
      },
      cssCodeSplit: false,
      define: {
        'process.env': JSON.stringify({}),
      },
      outDir: 'dist',
    },
    optimizeDeps: {
      exclude: [], // include everything in optimizeDeps too
    },
  };
});

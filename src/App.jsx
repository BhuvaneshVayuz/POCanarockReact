import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NoticeBoardListing from './pages/noticeBoard/listing';
import NoticeBoardCreateEdit from './pages/noticeBoard/createEdit';
import BasicNoticeDetail from './pages/noticeBoard/createEdit/basicNoticeDetail';
import NoticeContent from './pages/noticeBoard/createEdit/noticeContent';
import NotificationsAndPermissions from './pages/noticeBoard/createEdit/notificationsAndPermissions';
import NoticeBoardPreview from './pages/noticeBoard/createEdit/preview';
import NoticeBoardDetail from './pages/noticeBoard/detail';
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import { getMuiTheme } from './theme/muiTheme.jsx';
import { ThemeProvider } from "@mui/material/styles";

const App = ({ baseName }) => {
  console.log(baseName, 'basename');

  return (
    <ThemeProvider theme={getMuiTheme()}>
      <CssBaseline />
      <BrowserRouter basename={baseName}>
        <Routes>
          <Route index element={<NoticeBoardListing />} />
          <Route path="listing" element={<NoticeBoardListing />} />
          <Route path="create" element={<NoticeBoardCreateEdit />}>
            <Route index element={<BasicNoticeDetail />} />
            <Route path="notice-content" element={<NoticeContent />} />
            <Route path="notifications-and-permissions" element={<NotificationsAndPermissions />} />
          </Route>
          <Route path="preview" element={<NoticeBoardPreview />} />
          <Route path="detail" element={<NoticeBoardDetail />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>

  );
};

export default App;

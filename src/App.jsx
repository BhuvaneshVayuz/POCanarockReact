import React, { useEffect, useState } from 'react';
import {
  BrowserRouter, Routes, Route, useNavigate, useSearchParams, Link as RouterLink,
} from 'react-router-dom';
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
import { PageHeaderWrapper } from './components/ui/wrapper/pageHeader.jsx';
import { BreadCrumbCustom } from './components/ui/breadCrumb.jsx';
import { Box, Button } from '@mui/material';
import { NoticeCard } from './pages/noticeBoard/listing/noticeCard.jsx';


function Sample() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://dummyjson.com/products?limit=9");
        const data = await res.json();
        setProducts(data.products || []);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <PageHeaderWrapper>
        <BreadCrumbCustom
          links={[
            { label: "Home", to: "/" },
            { label: "Forum", to: "/" },
            { label: "Notice", to: "/" },
          ]}
          pageTitle="Sample API"
        />

        <Box className="flex gap-2">
          <Button LinkComponent={RouterLink} to="/forum" variant="outlined">
            Back to Forum
          </Button>
          <Button LinkComponent={RouterLink} to="/forum/create" variant="contained">
            Post New Notice
          </Button>
        </Box>
      </PageHeaderWrapper>

      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((item, idx) => (
            <NoticeCard
              key={item.id}
              data={{
                title: item.title,
                date: "19-May-2025",
                image: item.thumbnail,
                description: item.description,
                attachments: [],
                emailNotifications: true,
                expiryDate: "31-Dec-2025",
                visibility: "Public",
                approvedBy: "API Bot",
                postedBy: "DummyJSON",
                approvedOn: "19-May-2025",
              }}
            />
          ))}
        </div>
      )}
    </>
  );
}



const App = ({ baseName }) => {
  console.log(baseName, 'basename');

  return (
    <ThemeProvider theme={getMuiTheme()}>
      <CssBaseline />
      <BrowserRouter basename={baseName}>
        <Routes>
          <Route index element={<NoticeBoardListing />} />
          <Route path="listing" element={<NoticeBoardListing />} />
          <Route path="sample" element={<Sample />} />
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

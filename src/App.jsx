import React, { useEffect, useState } from 'react';
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

const Sample = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = async (limit = 10, skip = 0) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
      );
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      setLoading(false);
      return data;
    } catch (err) {
      setLoading(false);
      setError(err.message);
      console.error("Failed to fetch products:", err);
      return null;
    }
  };

  useEffect(() => {
    async function loadData() {
      const prod = await fetchProducts();
      if (prod && prod.products) {
        setData(prod.products);
      }
    }
    loadData();
  }, []);

  return (
    <>
      <h1>Product List</h1>
      {loading && <p>Loading products...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      <ul>
        {data.map((product) => (
          <li key={product.id}>
            <strong>{product.title}</strong> - ${product.price}
          </li>
        ))}
      </ul>
    </>
  );
};


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

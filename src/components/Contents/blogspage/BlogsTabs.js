import "./blog.css"
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useEffect, useState } from 'react';
import { Tab, Box, Container, Grid2 } from '@mui/material';
import { BlogTabContent } from './BlogTabContent';
import blogList from "../../../providers/datas/blogs.json";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import { NewsTabContent } from "./NewsTabContent";
const tabMenuStyle = {
  textTransform: 'none',
  padding: '1rem'
}

export const BlogsTabs = () => {
  const pageParams = useParams();
  const navigate = useNavigate();
  const [value, setValue] = useState('1');
  useEffect(() => {
    console.log(pageParams);
    switch(pageParams['*']) {
      case 'events':
        setValue('2');
        break;
      case 'blog':
          setValue('3');
          break;
      case 'news':
        setValue('4');
        break;
      case 'podcasts':
        setValue('5');
        break;
      default:
        setValue('1');
    }
      
  }, [pageParams]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    switch (newValue) {
      case '1':
        navigate('./');
        break;
      case '2':
        navigate('./events');
        break;
      case '3':
        navigate('./blog');
        break;
      case '4':
        navigate('./news');
        break;
      case '5':
        navigate('./podcasts');
        break;
      default:
        break
    }
  };

  return (
    <Box className="w-full">
      <Container maxWidth="lg">
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList sx={{paddingTop: "1rem", overflowX: 'auto'}} onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="All" value="1" sx={tabMenuStyle} />
              <Tab label="Events" value="2" sx={tabMenuStyle} />
              <Tab label="News" value="4" sx={tabMenuStyle} />
              <Tab label="Podcasts" value="5" sx={tabMenuStyle} />
              <Tab label="Blogs" value="3" sx={tabMenuStyle} />
            </TabList>
          </Box>
          <Routes>
            <Route path="/" element={
              <TabPanel value="1">
                <BlogTabContent title="Featured" tabKey="featured"/>
              </TabPanel>} />
            <Route path="/events" element={
              <TabPanel value="2">
                <BlogTabContent title="Events" tabKey="events"/>
              </TabPanel>} />
            <Route path="/news" element={
              <TabPanel value="4">
                <NewsTabContent />
              </TabPanel>} />
            <Route path="/podcasts" element={
              <TabPanel value="5">
                <BlogTabContent title="Podcasts" tabKey="podcasts" />
              </TabPanel>} />
            <Route path="/blog" element={
              <TabPanel value="3">
                <BlogTabContent title="Blogs" tabKey="blog"/>
              </TabPanel>} />
          </Routes>
        </TabContext>
      </Container>
    </Box>
  )
}
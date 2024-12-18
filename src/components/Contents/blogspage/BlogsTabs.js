import "./blog.css"
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';
import { Tab, Box, Container, Grid2 } from '@mui/material';
import { BlogTabContent } from './BlogTabContent';
import blogList from "../../../providers/datas/blogs.json";
const tabMenuStyle = {
  textTransform: 'none',
  padding: '1rem'
}

export const BlogsTabs = () => {

  const [value, setValue] = useState('1');
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
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
            </TabList>
          </Box>
          <TabPanel value="1">
            <BlogTabContent title="Featured" tabKey="featured"/>
          </TabPanel>
          <TabPanel value="2">
            <BlogTabContent title="Events" tabKey="events"/>
          </TabPanel>
          <TabPanel value="4">
            <BlogTabContent title="News" tabKey="news"/>
          </TabPanel>
          <TabPanel value="5">
            <BlogTabContent title="Podcasts" tabKey="podcasts" />
          </TabPanel>
        </TabContext>
      </Container>
    </Box>
  )
}
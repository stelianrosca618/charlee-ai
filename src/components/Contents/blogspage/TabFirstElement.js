import { Box, Grid2 } from "@mui/material"
import { calculateCreatedAgo } from "../../commonFunc"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { backendHost } from "../../../providers/apis/blogApi";

export const TabFirstElement = ({firstBlog}) => {
  const navigate = useNavigate();
  const [backgroundUrl, setBackgroundUrl] = useState();
  const blogNavigation = (blogPath, postType) => {
     navigate(`/blog/${blogPath}`);
    // if(postType == 'post'){
    //   navigate(`/blog/${blogPath}`);
    // }else{
    //   navigate(`/event/${blogPath}`);
    // }
  }
  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous"; // Enable CORS for the request
    img.src = `${backendHost}${firstBlog?.postMedia}`;

    img.onload = () => {
      console.log("Image loaded with CORS");
      setBackgroundUrl(img.src); // Apply after it is loaded
    };

    img.onerror = (err) => {
      console.error("Failed to load image:", err, firstBlog?.postMedia);
    };
  }, [firstBlog]);
  return (
    <Grid2 container spacing={2} onClick={() => {blogNavigation(firstBlog.postName, firstBlog?.postType)}} >
      <Grid2 size={{xs: 12, sm: 12, md: 9, lg: 9, xl: 9}} className="relative text-start text-white px-6 rounded-2xl min-h-[300px]"
        display={"flex"} flexDirection={"column"} justifyContent={"end"} alignItems={"flex-start"}
      >
        <div className="relative w-full h-full">
          <img src={`${backendHost}${firstBlog?.postMedia}`} alt="event-img" 
            className="w-full aspect-[800/400] rounded-2xl object-cover"
              crossOrigin="anonymous"
          />
          
          <Box sx={{background: 'linear-gradient(0deg, #22c0b1, #22c0b1, #ffffff00)'}} className="absolute bottom-0 w-full p-6 rounded-b-2xl">
            <h4 className="cursor-pointer text-[42px] leading-[54.6px] font-medium">
              {firstBlog?.title}
            </h4>
            <Box className="cursor-pointer w-full py-3" display={'flex'} gap={6}>
              <span>{calculateCreatedAgo(firstBlog)}</span>
              {/* <span>By {firstBlog?.creator}</span> */}
              <span>By Charlee.ai</span>
            </Box>
          </Box>
        </div>
      </Grid2>
      <Grid2 size={{xs: 12, sm: 12, md: 3, lg: 3, xl: 3}}>
        <p className="line-clamp-[12]">
          {firstBlog.content}
        </p>
      </Grid2>
    </Grid2>
  )
}
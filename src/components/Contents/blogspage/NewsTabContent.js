import { Box, Divider, Grid2, List, Pagination, PaginationItem } from "@mui/material"
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";

import { usePagination } from "@mui/lab";
import { useNavigate } from "react-router-dom";
import blogItems from "../../../providers/datas/blogs.json";
import { useEffect, useState } from "react";
import { calculateCreatedAgo, printEventDates, sortArrList } from "../../commonFunc";
import eventlist from "../../../providers/datas/events.json";
import newslist from "../../../providers/datas/news.json";

export const NewsTabContent = () => {
 
  const [blogArr, setBlogArr] = useState(newslist);
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [pageBlogs, setPageBlogs] = useState([]);
  const [totalPages, setTotalPages] = useState(10);
 
  const rebuildPageItems = () => {
    let tmpArr = [];
    blogArr.map((item, key) => {
      if(key >= ((currentPage - 1) * itemsPerPage) && key < ((currentPage * itemsPerPage) + 1)){
        tmpArr.push(item);
      }
    });
    setPageBlogs(tmpArr);
  }
  useEffect(() => {
    const pagelength = Math.ceil(blogArr.length / 8);
    console.log(pagelength);
    setTotalPages(pagelength);
    rebuildPageItems();
  }, [blogArr])
  useEffect(() => {
    rebuildPageItems();
  },[currentPage])
 
  const pageMove = (event, value) => {
    console.log(event, value)
    setCurrentPage(value);
  }
  const { items } = usePagination({
    count: totalPages,
    onChange: pageMove
  });
  const newsNavigation = (newsPath) => {
    window.open(newsPath, '_blank');  
  }
  return (
    <Box className="w-full text-start">
      {/* <h4 className='text-[42px] leading-[54.6px] font-medium my-4'></h4> */}
      <Box className="w-full my-4">
        <Grid2 container spacing={2} >
          <Grid2 size={{xs: 12, sm: 12, md: 12, lg: 12, xl: 12}} className="text-start text-white p-6 rounded-2xl min-h-[400px]"
            display={"flex"} flexDirection={"column"} justifyContent={"end"} alignItems={"flex-start"}
            sx={{background: `url("/blog-photos/News/Natural-Language-Processing-and-Semantic-Analytics-for-Insurance-image4.webp")`, backgroundSize: 'cover', backgroundPosition: 'center'}}
          >
            <h4 className="cursor-pointer text-[42px] leading-[54.6px] font-medium">
              News
            </h4>
            <Box className="cursor-pointer w-full py-3" display={'flex'} gap={6}>
              <p>You can find information about CHARLEE.AI here through CHARLEE.AI and different sources around the Insurtech industry. Stay on top of our latest product launches and upcoming projects.</p>
            </Box>
          </Grid2>
          
        </Grid2>
      </Box>
      <Box className="w-full py-4">
        <Grid2 container spacing={2}>
          {pageBlogs.map((itemData, key) => (
            <Grid2 display={"flex"} flexDirection={"column"} justifyContent={"space-between"} onClick={() => {newsNavigation(itemData.link)}} key={key} size={{xs: 12, sm: 12, md: 3, lg: 3, xl: 3}} marginTop={2}>
              <Box className="w-full">
                <div className="cursor-pointer w-full aspect-[300/200] rounded-2xl blog-card" 
                  style={{background: `url(${itemData.postMedia})`}}>
                    <img src={itemData.postMedia} alt="blog-img" className="w-full aspect-[300/200] rounded-2xl opacity-0"/>
                  </div>
                <h6 className="cursor-pointer line-clamp-2 text-[24px] leading-[32px] font-medium my-3">{itemData.title}</h6>
              </Box>
              <Box className="cursor-pointer w-full mt-9 text-[#949494] text-[16px] leading-[21px]" display={"flex"} justifyContent={"space-between"} alignItems={"center"} gap={4}>
                <h5>{itemData.creator}</h5>
              </Box>
            </Grid2>
            
          ))}
        </Grid2>
      </Box>
      <Divider />
      <Box className="w-full py-5">
      
        <ul className="w-full flex justify-between gap-3" >
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;

          if (type === 'start-ellipsis' || type === 'end-ellipsis') {
            children = '…';
          } else if (type === 'page') {
            children = (
              <button
                type="button"
                style={{
                  fontWeight: selected ? 'bold' : undefined,
                }}
                {...item}
              >
                {page}
              </button>
            );
          } else {
            
            children = (
              <button type="button" className="flex items-center gap-4" {...item}>
                {type === 'previous' && 
                <><FaLongArrowAltLeft /> Previous</>
                }
                {type === 'next' && <>Next <FaLongArrowAltRight /></>}
              </button>
            );
          }

          return <li key={index}>{children}</li>;
        })}
        </ul>
      </Box>
    </Box>
  )
}
import { Box, Divider, Grid2, List, Pagination, PaginationItem } from "@mui/material"
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";

import { usePagination } from "@mui/lab";
import { useNavigate } from "react-router-dom";
import blogItems from "../../../providers/datas/blogs.json";
import { useEffect, useState } from "react";
import { calculateCreatedAgo, eventSort, previousEvents, printEventDates, sortArrList, upcommingEvent } from "../../commonFunc";
import eventlist from "../../../providers/datas/events.json";
import { TabFirstElement } from "./TabFirstElement";
import { TabEventFirstElement } from "./TabEventFirstElement";

// const blogItems = [
//   {
//     blogImg: blog1,
//     title:  `Charlee.ai and Reducing Bias in Artificial Intelligence – Part 2`,
//     postTime: '1 Hour Ago',
//     poster: 'Charlee.ai',
//     link: '/blog/testlink'
//   },
//   {
//     blogImg: blog2,
//     title:  `Charlee.ai and Reducing Bias in Artificial Intelligence – Part 1`,
//     postTime: '1 Hour Ago',
//     poster: 'Charlee.ai',
//     link: '/blog/testlink'
//   },
//   {
//     blogImg: blog3,
//     title: `AI Augments, Not Replaces, Human Experience`,
//     postTime: '1 Hour Ago',
//     poster: 'Charlee.ai',
//     link: '/blog/testlink'
//   },
//   {
//     blogImg: blog4,
//     title: `AI Augments, Not Replaces, Human Experience`,
//     postTime: '1 Hour Ago',
//     poster: 'CNN Indonesia',
//     link: '/blog/testlink'
//   },
//   {
//     blogImg: blog5,
//     title: `Guest Speak Part 1: AI in Claims – Standardization of FNOL`,
//     postTime: '1 Hour Ago',
//     poster: 'CNN Indonesia',
//     link: '/blog/testlink'
//   },
//   {
//     blogImg: blog6,
//     title: `Guest Speak Part 2: AI in Claims – Bridging the Operational Gap`,
//     postTime: '1 Hour Ago',
//     poster: 'CNN Indonesia',
//     link: '/blog/testlink'
//   },
//   {
//     blogImg: blog7,
//     title: `Does Regulation Stand in the Way of Innovation? AI in Insurance`,
//     postTime: '1 Hour Ago',
//     poster: 'CNN Indonesia',
//     link: '/blog/testlink'
//   },
//   {
//     blogImg: blog8,
//     title: `Claims: Competing in a digital first industry`,
//     postTime: '1 Hour Ago',
//     poster: 'CNN Indonesia',
//     link: '/blog/testlink'
//   }
  
// ]

export const BlogTabContent = ({title, tabKey}) => {
  const navigate = useNavigate()
 
  const [firstBlog, setFirstBlog] = useState(blogItems[0]);
  const [blogArr, setBlogArr] = useState([]);
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [pageBlogs, setPageBlogs] = useState([]);
  const [totalPages, setTotalPages] = useState(10);
 
  useEffect(() => {
    loadBlogArr()
  }, [tabKey])
  const loadBlogArr = () => {
    console.log(tabKey, eventlist);
    let tmpBlogs = [];
    if(tabKey == 'featured'){
      const tmpAllArr = blogItems.concat(eventlist);
      tmpBlogs = sortArrList(tmpAllArr)
    }else{
      if(tabKey == 'events'){
        const tmpUpcomingEvs = upcommingEvent(eventlist);
        const tmpPreviousEvs = previousEvents(eventlist);
        tmpBlogs = tmpUpcomingEvs.concat(tmpPreviousEvs);
        // tmpBlogs = previousEvents(eventlist);
      }else if(tabKey == 'blog'){
        blogItems.map(blogItem => {
          tmpBlogs.push(blogItem);
        })
        tmpBlogs = sortArrList(tmpBlogs)
        tmpBlogs = sortArrList(tmpBlogs)
      }else{
        blogItems.map(blogItem => {
          const categoryItem = blogItem.category.find(cItem => cItem.nickName == tabKey);
          if(categoryItem){
            tmpBlogs.push(blogItem) ;
          }
        })
        tmpBlogs = sortArrList(tmpBlogs)
      }
      
    }
    
    const firstItem = tmpBlogs[0];
    console.log(firstItem);
    setFirstBlog(firstItem);
    setBlogArr(tmpBlogs);
  }
  const rebuildPageItems = () => {
    let tmpArr = [];
    blogArr.map((item, key) => {
      if(key > ((currentPage - 1) * itemsPerPage) && key < ((currentPage * itemsPerPage) + 1)){
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
  // const calculateCreatedAgo = (blogItem) => {
  //   let timeAgoStr = '2 days ago';
  //   const nowDate = new Date();
  //   const createDate = new Date(blogItem.postDate);
    
  //   const timeDifferenceMS = nowDate - createDate;
  //   const timeDifferenceHours = Math.floor(timeDifferenceMS / 3600000);
    
  //   if(timeDifferenceHours > 23){
  //     const timeDifferenceDays = Math.floor(timeDifferenceMS / 86400000);
  //     if(timeDifferenceDays > 30){
  //       const timeDifferenceMonths = Math.floor(timeDifferenceDays / 30);
  //       if(timeDifferenceMonths > 12){
  //         const timeDifferenceYears = Math.floor(timeDifferenceMonths / 12);
  //         timeAgoStr = `${timeDifferenceYears} years ago`;  
  //       }else{
  //         timeAgoStr = `${timeDifferenceMonths} months ago`;    
  //       }
  //     }else{
  //       timeAgoStr = `${timeDifferenceDays} days ago`;  
  //     }
  //   }else{
  //     timeAgoStr = `${timeDifferenceHours} hours ago`;
  //   }
    
  //   return timeAgoStr;
  // }
  const pageMove = (event, value) => {
    console.log(event, value)
    setCurrentPage(value);
  }
  const { items } = usePagination({
    count: totalPages,
    onChange: pageMove
  });
  const blogNavigation = (blogPath, postType) => {
    if(postType == 'post'){
      navigate(`/blog/${blogPath}`);
    }else{
      navigate(`/event/${blogPath}`);
    }
    
  }
  return (
    <Box className="w-full text-start">
      <h4 className='text-[42px] leading-[54.6px] font-medium my-4'>{title}</h4>
      <Box className="w-full my-4">
        {firstBlog?.postType == 'post' ? <TabFirstElement firstBlog={firstBlog}/>:<TabEventFirstElement firstBlog={firstBlog}/>}
      </Box>
      <Box className="w-full py-4">
        <Grid2 container spacing={2}>
          {pageBlogs.map((itemData, key) => (
            <Grid2 display={"flex"} flexDirection={"column"} justifyContent={"space-between"} onClick={() => {blogNavigation(itemData.postName, itemData?.postType)}} key={key} size={{xs: 12, sm: 12, md: 3, lg: 3, xl: 3}} marginTop={2}>
              <Box className="w-full">
                <div className="cursor-pointer w-full aspect-[300/200] rounded-2xl blog-card" 
                  style={{background: `url(${itemData.postMedia})`}}>
                    <img src={itemData.postMedia} alt="blog-img" className="w-full aspect-[300/200] rounded-2xl opacity-0"/>
                </div>
                <h6 className="cursor-pointer line-clamp-2 text-[24px] leading-[32px] font-medium my-3">{itemData.title}</h6>
              </Box>
              {itemData.postType == 'post' && 
                <Box className="cursor-pointer w-full mt-4 text-[#949494] text-[12px] leading-[21px]" display={"flex"} justifyContent={"space-between"} alignItems={"center"} gap={4}>
                  <span>{calculateCreatedAgo(itemData)}</span>
                  <span>By Charlee.ai</span>
                </Box>
              }
              {itemData.postType != 'post' && 
                <Box className="cursor-pointer w-full mt-4 text-[#949494] text-[12px] leading-[21px]" display={"flex"} justifyContent={"space-between"} alignItems={"center"} gap={4}>
                  <span>{printEventDates(itemData)}</span>
                </Box>
              }
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
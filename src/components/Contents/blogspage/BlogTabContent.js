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
import { getAllActivities, backendHost, getAllEvents, getAllBlogs, getAllPodcasts } from "../../../providers/apis/blogApi";

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
 
  const [firstBlog, setFirstBlog] = useState();
  const [blogArr, setBlogArr] = useState([]);
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [pageBlogs, setPageBlogs] = useState([]);
  const [totalPages, setTotalPages] = useState(10);
 
  useEffect(() => {
    loadBlogArr()
  }, [tabKey])
  const loadBlogArr = async () => {
    let tmpBlogs = [];
    if(tabKey == 'featured'){
      const tmpBlogsRes = await getAllActivities();
      const tmpAllArr = parseActivitiesArr(tmpBlogsRes);
      tmpBlogs = sortArrList(tmpAllArr)
    }else{
      if(tabKey == 'events'){
        const tmpEvs = await getAllEvents();
        tmpBlogs =parseEventsArr(tmpEvs);
      }else if(tabKey == 'blog'){
        const blogsRes = await getAllBlogs();
        tmpBlogs = parseBlogsArr(blogsRes);
      }else{
        const podcastRes = await getAllPodcasts();
        console.log('getting Podcasts', podcastRes);
        tmpBlogs = parsePodcastsArr(podcastRes);
      }
      const firstItem = tmpBlogs[0];
    
      setFirstBlog(firstItem);
    }
    
    setBlogArr(tmpBlogs);
  }
  const parseActivitiesArr = (activities) => {
    let tmpBlogs = [];
    activities.blogs.map(bItem => {
      tmpBlogs.push({
        postId: bItem.id,
        postType: bItem.Content_Type,
        title: bItem.Title,
        postDate: bItem.DateWritten,
        postMedia: bItem.Graphic1,
        postName: bItem.Relevance,
        creator: bItem.Author,
        content: bItem.Description
      });
    });
    setFirstBlog(tmpBlogs[0]);
    let tmpPodcasts = [];
    activities.podcasts.map(pItem => {
      tmpPodcasts.push({
        postId: pItem.Id,
        postType: pItem.ContentType,
        title: pItem.Title,
        postDate: pItem.DatePublished,
        postMedia: pItem.Graphic1,
        postName: pItem.Relevance,
        creator: pItem.Author,
        content: pItem.Description
      })
    });

    let tmpEvents = [];
    activities.events.map(eItem => {
      tmpEvents.push({
        postId: eItem.id,
        title: eItem.Title,
        postMedia: eItem.Graphic1,
        postType: eItem.ContentType,
        postDate: eItem.LastUpdated,
        postName: eItem.Relevance,
        eventStartDate: eItem.StartDate,
        eventEndDate: eItem.EndDate,
      })
    });

    let tmpNews = [];
    activities.news.map(nItem => {
      tmpNews.push({
        postId: nItem.Id,
        title: nItem.Title,
        postMedia: nItem.Graphic1,
        postDate: nItem.DatePublished,
        postType: nItem.ContentType,
        postName: nItem.Relevance,
        link: nItem.Source
      })
    })
    let allBlogs = tmpBlogs.concat(tmpPodcasts).concat(tmpEvents).concat(tmpNews);
    return allBlogs;
  }
  const parsePodcastsArr = (podcasts) => {
    let tmpPodcasts = [];
    podcasts.map(pItem => {
      tmpPodcasts.push({
        postId: pItem.Id,
        postType: pItem.ContentType,
        title: pItem.Title,
        postDate: pItem.DatePublished,
        postMedia: pItem.Graphic1,
        postName: pItem.Relevance,
        creator: pItem.Author,
        content: pItem.Description
      })
    });
    return tmpPodcasts;
  }
  const parseBlogsArr = (blogs) => {
    let tmpBlogs = [];
    blogs.map(bItem => {
      tmpBlogs.push({
        postId: bItem.id,
        postType: bItem.Content_Type,
        title: bItem.Title,
        postDate: bItem.DateWritten,
        postMedia: bItem.Graphic1,
        postName: bItem.Relevance,
        creator: bItem.Author,
        content: bItem.Description
      });
    });
    return tmpBlogs;
  }
  const parseEventsArr = (events) => {
    let tmpEvents = [];
    events.map(eItem => {
      tmpEvents.push({
        postId: eItem.id,
        title: eItem.Title,
        postMedia: eItem.Graphic1,
        postType: eItem.ContentType,
        postDate: eItem.LastUpdated,
        postName: eItem.Relevance,
        eventStartDate: eItem.StartDate,
        eventEndDate: eItem.EndDate,
      })
    });
    return tmpEvents;
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
    
    setTotalPages(pagelength);
    rebuildPageItems();
  }, [blogArr])
  useEffect(() => {
    rebuildPageItems();
  },[currentPage])
 
  const pageMove = (event, value) => {
    setCurrentPage(value);
  }
  const { items } = usePagination({
    count: totalPages,
    onChange: pageMove
  });
  const blogNavigation = (blogPath, postType) => {
    if(postType == 'Events'){
      navigate(`/event/${blogPath}`);
    }else{
      navigate(`/blog/${blogPath}`);      
    }
  }
  
  return (
    <Box className="w-full text-start">
      <h4 className='text-[42px] leading-[54.6px] font-medium my-4'>{title}</h4>
      <Box className="w-full my-4">
        {firstBlog? firstBlog?.postType == 'Events' ? <TabEventFirstElement firstBlog={firstBlog}/>:<TabFirstElement firstBlog={firstBlog}/> : ''}
      </Box>
      <Box className="w-full py-4">
        <Grid2 container spacing={2}>
          {pageBlogs.map((itemData, key) => (
            <Grid2 display={"flex"} flexDirection={"column"} justifyContent={"space-between"} onClick={() => {blogNavigation(itemData.postName, itemData?.postType)}} key={key} size={{xs: 12, sm: 12, md: 3, lg: 3, xl: 3}} marginTop={2}>
              <Box className="w-full">
                <div className="cursor-pointer w-full aspect-[300/200] rounded-2xl blog-card" 
                  >
                    <img src={`${backendHost}${itemData.postMedia}`} alt="blog-img" 
                      className="w-full aspect-[300/200] rounded-2xl object-cover"
                       crossOrigin="anonymous"
                    />
                </div>
                <h6 className="cursor-pointer line-clamp-2 text-[24px] leading-[32px] font-medium my-3">{itemData.title}</h6>
              </Box>
              {itemData.postType != "Events" && 
                <Box className="cursor-pointer w-full mt-4 text-[#949494] text-[12px] leading-[21px]" display={"flex"} justifyContent={"space-between"} alignItems={"center"} gap={4}>
                  <span>{calculateCreatedAgo(itemData)}</span>
                  <span>By Charlee.ai</span>
                </Box>
              }
              {itemData.postType == "Events" && 
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
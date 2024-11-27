import { Box, Divider, Grid2, List, Pagination, PaginationItem } from "@mui/material"
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";

import blog10 from "../../../assets/imgs/news/blog10.png"
import blog1 from "../../../assets/imgs/news/blog1.png";
import blog2 from "../../../assets/imgs/news/blog2.png";
import blog3 from "../../../assets/imgs/news/blog3.png";
import blog4 from "../../../assets/imgs/news/blog4.png";
import blog5 from "../../../assets/imgs/news/blog5.png";
import blog6 from "../../../assets/imgs/news/blog6.png";
import blog7 from "../../../assets/imgs/news/blog7.png";
import blog8 from "../../../assets/imgs/news/blog8.png";
import blog9 from "../../../assets/imgs/news/blog9.png";
import { usePagination } from "@mui/lab";
import { useNavigate } from "react-router-dom";

const blogItems = [
  {
    blogImg: blog1,
    title:  `Charlee.ai and Reducing Bias in Artificial Intelligence – Part 2`,
    postTime: '1 Hour Ago',
    poster: 'Charlee.ai',
    link: '/blog/testlink'
  },
  {
    blogImg: blog2,
    title:  `Charlee.ai and Reducing Bias in Artificial Intelligence – Part 1`,
    postTime: '1 Hour Ago',
    poster: 'Charlee.ai',
    link: '/blog/testlink'
  },
  {
    blogImg: blog3,
    title: `AI Augments, Not Replaces, Human Experience`,
    postTime: '1 Hour Ago',
    poster: 'Charlee.ai',
    link: '/blog/testlink'
  },
  {
    blogImg: blog4,
    title: `AI Augments, Not Replaces, Human Experience`,
    postTime: '1 Hour Ago',
    poster: 'CNN Indonesia',
    link: '/blog/testlink'
  },
  {
    blogImg: blog5,
    title: `Guest Speak Part 1: AI in Claims – Standardization of FNOL`,
    postTime: '1 Hour Ago',
    poster: 'CNN Indonesia',
    link: '/blog/testlink'
  },
  {
    blogImg: blog6,
    title: `Guest Speak Part 2: AI in Claims – Bridging the Operational Gap`,
    postTime: '1 Hour Ago',
    poster: 'CNN Indonesia',
    link: '/blog/testlink'
  },
  {
    blogImg: blog7,
    title: `Does Regulation Stand in the Way of Innovation? AI in Insurance`,
    postTime: '1 Hour Ago',
    poster: 'CNN Indonesia',
    link: '/blog/testlink'
  },
  {
    blogImg: blog8,
    title: `Claims: Competing in a digital first industry`,
    postTime: '1 Hour Ago',
    poster: 'CNN Indonesia',
    link: '/blog/testlink'
  }
  
]

export const BlogTabContent = ({title}) => {
  const navigate = useNavigate()
  const { items } = usePagination({
    count: 10,
  });
  return (
    <Box className="w-full text-start">
      <h4 className='text-[42px] leading-[54.6px] font-medium my-4'>{title}</h4>
      <Box className="w-full my-4">
        <Grid2 container spacing={2} >
          <Grid2 size={{xs: 12, sm: 12, md: 9, lg: 9, xl: 9}} className="text-start text-white p-6 rounded-2xl"
            display={"flex"} flexDirection={"column"} justifyContent={"end"} alignItems={"flex-end"}
            sx={{background: `url(${blog10})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
          >
            <h4 className="cursor-pointer text-[42px] leading-[54.6px] font-medium">Guest Speak Part 3 - AI in Claims – Workflow Management</h4>
            <Box className="cursor-pointer w-full py-3" display={'flex'} gap={6}>
              <span>2 Hours Ago</span>
              <span>Charlee.ai</span>
            </Box>
          </Grid2>
          <Grid2 size={{xs: 12, sm: 12, md: 3, lg: 3, xl: 3}}>
            <p className="line-clamp-[12]">
              Claims Director Brad Metzger has worked in the P&C Industry for several years, performing diverse roles in Claims Operations, Claims Strategy, and Claims IT. Having seen the rise of technology in claims management, he has a unique perspective in analyzing the potential of AI to significantly transform claims workflow management while validating it against emerging trends and rddddddddddddddddddddddd
            </p>
          </Grid2>
        </Grid2>
      </Box>
      <Box className="w-full py-4">
        <Grid2 container spacing={2}>
          {blogItems.map((itemData, key) => (
            <Grid2 onClick={() => {navigate(itemData.link)}} key={key} size={{xs: 12, sm: 12, md: 3, lg: 3, xl: 3}} marginTop={2}>
              <Box className="w-full">
                <div className="cursor-pointer w-full aspect-[300/200] rounded-2xl" 
                  style={{background: `url(${itemData.blogImg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                    <img src={itemData.blogImg} alt="blog-img" className="w-full aspect-[300/200] rounded-2xl opacity-0"/>
                  </div>
                <h6 className="cursor-pointer line-clamp-2 text-[24px] leading-[32px] font-medium my-3">{itemData.title}</h6>
              </Box>
              <Box className="cursor-pointer w-full mt-9 text-[#949494] text-[12px] leading-[21px]" display={"flex"} justifyContent={"start"} alignItems={"center"} gap={4}>
                <span>{itemData.postTime}</span>
                <span>{itemData.poster}</span>
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
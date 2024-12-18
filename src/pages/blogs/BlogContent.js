import { Box, Container, Divider, Grid2 } from "@mui/material"
import { Footer } from "../../components/footers/Footer"
import { HomeHeader } from "../../components/headers/HomeHeader"
import blog1 from "../../assets/imgs/news/blog1.png"
import blog2 from "../../assets/imgs/news/blog2.png"
import blog3 from "../../assets/imgs/news/blog3.png"
import blog4 from "../../assets/imgs/news/blog4.png"
import blog5 from "../../assets/imgs/news/blog5.png"
import blog6 from "../../assets/imgs/news/blog6.png"
import { Link, useSearchParams, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import blogItems from "../../providers/datas/blogs.json";
import { calculateCreatedAgo, sortArrList } from "../../components/commonFunc"
const relativeBlogs = [
  {
    blogImg: blog3,
    title: 'Charlee.ai and Reducing Bias in Artificial Intelligence – Part 2',
    postTime: '1 Hour Ago',
    poster: 'Charlee.ai'
  },
  {
    blogImg: blog4,
    title: 'Charlee.ai and Reducing Bias in Artificial Intelligence – Part 1',
    postTime: '1 Hour Ago',
    poster: 'Charlee.ai'
  },
  {
    blogImg: blog5,
    title: 'AI Augments, Not Replaces, Human Experience',
    postTime: '1 Hour Ago',
    poster: 'Charlee.ai'
  },
  {
    blogImg: blog6,
    title: 'AI Augments, Not Replaces, Human Experience',
    postTime: '1 Hour Ago',
    poster: 'Charlee.ai'
  },
]

export const BlogContent = () => {
  const searchParams = useParams();
  const [blogData, setBlogData] = useState();
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  useEffect(() => {
    console.log(searchParams.blogid)
    loadBlogData(searchParams.blogid);
  }, [searchParams])
  const loadBlogData = (blogId) => {
    const blogObj = blogItems.find(item => item.postName == blogId);
    setBlogData(blogObj);
    const blogObjCategory = blogObj.category[0].nickName;
    let tempBlogs = blogItems.filter(item => item.category.find(cItem => cItem.nickName == blogObjCategory));
    console.log(tempBlogs);
    tempBlogs = sortArrList(tempBlogs)
    setRelatedBlogs(tempBlogs.splice(0, 4));
  }
  return (
    <div className="w-full overflow-hidden bg-[#F3F4F4]">
      <HomeHeader headerColor={'#F9F9F9'} textColor={'#021744'}/>
      <div className="news-page bg-[#F9F9F9]">
        <Box className="w-full mt-28">
          <Container maxWidth="md">
            <Box className='w-full pt-14'>
              <h2 className="text-[65px] leading-[71.5px] font-medium">
                {blogData?.title}
              </h2>
              <p className="text-[#4B5563] text-[20px] font-normal leading-[31px] pt-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              </p>
              <Box className="w-full text-[#0099B0] " paddingY={1} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <span className="px-3">
                  3 minute read
                </span>
                <span className="px-3 border-l border-l-[#0099B0]">
                  Nov 1, 2024
                </span>
                <span className="px-3 border-l border-l-[#0099B0]">
                  By Jane Doe
                </span>
              </Box>
              <Box className="w-full min-h-[400px] md:min-h-[500px] mt-28 rounded-xl"
                sx={{background: `url(${blog2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
              </Box>
              <Box className="w-full py-10 text-start">
                <h5 className="text-[29px] leading-[40px] font-medium">
                  Lorem Dolor Ipsum
                </h5>
                <p className="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis auctor elit sed vulputate. Convallis convallis tellus id interdum velit. Sed vulputate odio ut enim blandit volutpat. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Mi eget mauris pharetra et ultrices neque ornare. Sit amet tellus cras adipiscing enim eu turpis. Adipiscing commodo elit at imperdiet dui. Nam at lectus urna duis convallis convallis tellus. Id velit ut tortor pretium viverra imperdiet suspendisse.
                A arcu cursus vitae congue mauris rhoncus. Nibh praesent tristique magna sit amet purus gravida quis blandit. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Vitae tempus quam pellentesque nec. Massa ultricies mi quis hendrerit dolor magna eget. Turpis egestas sed tempus urna et pharetra. Sit amet porttitor eget dolor morbi non arcu risus. Viverra aliquet eget sit amet tellus cras. Volutpat blandit aliquam etiam erat velit. Sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Eros in cursus turpis massa tincidunt dui ut. Nisl rhoncus mattis rhoncus urna neque viverra justo nec. Bibendum enim facilisis gravida neque convallis a. Nulla facilisi etiam dignissim diam quis enim lobortis. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Turpis egestas pretium aenean pharetra magna. Egestas sed tempus urna et pharetra pharetra massa massa ultricies. Quam pellentesque nec nam aliquam sem et. Diam vulputate ut pharetra sit amet aliquam. Bibendum enim facilisis gravida neque convallis a.
                </p>
              </Box>
              <Box className="w-full min-h-[400px] md:min-h-[500px] rounded-xl"
                sx={{background: `url(${blog1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
              </Box>
              <Box className="w-full py-10 text-start">
                <h5 className="text-[29px] leading-[40px] font-medium">
                  Lorem Dolor Ipsum
                </h5>
                <p className="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis auctor elit sed vulputate. Convallis convallis tellus id interdum velit. Sed vulputate odio ut enim blandit volutpat. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Mi eget mauris pharetra et ultrices neque ornare. Sit amet tellus cras adipiscing enim eu turpis. Adipiscing commodo elit at imperdiet dui. Nam at lectus urna duis convallis convallis tellus. Id velit ut tortor pretium viverra imperdiet suspendisse.
                </p>
              </Box>
            </Box>
          </Container>
          <Divider />
          <Container maxWidth="md">
            <Box className="w-full py-8">
              <button className="mx-2 px-4 py-2 rounded-full border border-[#D1D5DB] text-[14px] leading-[20px]">Previous</button>
              <button className="mx-2 px-4 py-2 rounded-full border border-[#D1D5DB] text-[14px] leading-[20px]">Next</button>
            </Box>
          </Container>
        </Box>
        <Box className="w-full bg-[#F3F4F4] py-20">
          <Container maxWidth="lg">
            <Box className="w-full">
              <Box className="w-full" display={"flex"} flexDirection={{xs: "column", sm: "column", md: "row", lg: "row", xl: "row"}} justifyContent={"space-between"} alignItems={{xs: "flex-start", sm: "flex-start", md: "center", lg: "center", xl: "center"}}>
                <h4 className="text-[42px] leading-[54.6px] font-medium" >Relevant Articles</h4>
                <Link to={'/blogs'}>
                  <button className="text-[18px] font-medium leading-[24px] rounded-full border border-[#021744] hover:bg-[#021744] hover:text-white px-8 py-4">
                    View all news
                  </button>
                </Link>
              </Box>
              <Box className="w-full py-14">
                <Grid2 container spacing={{xs: 12, sm: 12, md: 3, lg: 3, xl: 3}}>
                  {relatedBlogs.map((blogItem, key) => (
                    <Grid2 key={key} size={{xs: 12, sm: 12, md: 3, lg: 3, xl: 3}}>
                      <div className="w-full aspect-video rounded-xl hover:scale-105" style={{backgroundImage: `url(${blogItem.postMedia})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                      </div>
                      <h5 className="text-start text-[24px] leading-[32px] font-normal line-clamp-2 my-5">
                        {blogItem.title}
                      </h5>
                      <div className="w-full text-start my-6">
                        <span>{calculateCreatedAgo(blogItem)}</span>
                        <span className="mx-4">{blogItem.creator}</span>
                      </div>
                    </Grid2>
                  ))}
                </Grid2>
              </Box>
            </Box>
          </Container>
        </Box>
      </div>
      <Footer />
    </div>
  )
}
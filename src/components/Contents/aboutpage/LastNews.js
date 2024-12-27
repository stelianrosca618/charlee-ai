import { Box, Container, Grid2 } from "@mui/material"
import blogImg1 from "../../../assets/imgs/news/blog1.png";
import blogImg2 from "../../../assets/imgs/news/blog2.png";
import blogImg3 from "../../../assets/imgs/news/blog3.png";
import blogImg4 from "../../../assets/imgs/news/blog4.png";
import { Link } from "react-router-dom";

export const LastNews = () => {
  return (
    <Box className="w-full bg-[#F9F9F9] py-20">
      <Container maxWidth="lg">
        <Box className="w-full">
          <Box className="w-full" display={"flex"} flexDirection={{xs: "column", sm: "column", md: "row", lg: "row", xl: "row"}} justifyContent={"space-between"} alignItems={{xs: "flex-start", sm: "flex-start", md: "center", lg: "center", xl: "center"}}>
            <h4 className="text-[42px] leading-[54.6px] font-medium" >Latest News</h4>
            <Link to={'/blogs'} >
              <button className="text-[18px] font-medium leading-[24px] rounded-full border border-[#021744] hover:bg-[#021744] hover:text-white px-8 py-4">
                View all news
              </button>
            </Link>
          </Box>
          <Box className="w-full py-14">
            <Grid2 container spacing={{xs: 12, sm: 12, md: 3, lg: 3, xl: 3}}>
              <Grid2 size={{xs: 12, sm: 12, md: 3, lg: 3, xl: 3}}>
                <div className="w-full aspect-video rounded-xl hover:scale-105" style={{backgroundImage: `url(${blogImg1})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                </div>
                <h5 className="text-start text-[24px] leading-[32px] font-normal line-clamp-2 my-5">
                  Charlee.ai and Reducing Bias in Artificial Intelligence – Part 2
                </h5>
                <div className="w-full text-start my-6">
                  <span>1 Hour Ago</span>
                  <span className="mx-4">Charlee.ai</span>
                </div>
              </Grid2>
              <Grid2 size={{xs: 12, sm: 12, md: 3, lg: 3, xl: 3}}>
                <div className="w-full aspect-video rounded-xl hover:scale-105" style={{backgroundImage: `url(${blogImg2})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                </div>
                <h5 className="text-start text-[24px] leading-[32px] font-normal line-clamp-2 my-5">
                  Charlee.ai and Reducing Bias in Artificial Intelligence – Part 2
                </h5>
                <div className="w-full text-start my-6">
                  <span>1 Hour Ago</span>
                  <span className="mx-4">Charlee.ai</span>
                </div>
              </Grid2>
              <Grid2 size={{xs: 12, sm: 12, md: 3, lg: 3, xl: 3}}>
                <div className="w-full aspect-video rounded-xl hover:scale-105" style={{backgroundImage: `url(${blogImg3})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                </div>
                <h5 className="text-start text-[24px] leading-[32px] font-normal line-clamp-2 my-5">
                  Charlee.ai and Reducing Bias in Artificial Intelligence – Part 2
                </h5>
                <div className="w-full text-start my-6">
                  <span>1 Hour Ago</span>
                  <span className="mx-4">Charlee.ai</span>
                </div>
              </Grid2>
              <Grid2 size={{xs: 12, sm: 12, md: 3, lg: 3, xl: 3}}>
                <div className="w-full aspect-video rounded-xl hover:scale-105" style={{backgroundImage: `url(${blogImg4})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                </div>
                <h5 className="text-start text-[24px] leading-[32px] font-normal line-clamp-2 my-5">
                  Charlee.ai and Reducing Bias in Artificial Intelligence – Part 2
                </h5>
                <div className="w-full text-start my-6">
                  <span>1 Hour Ago</span>
                  <span className="mx-4">Charlee.ai</span>
                </div>
              </Grid2>
            </Grid2>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
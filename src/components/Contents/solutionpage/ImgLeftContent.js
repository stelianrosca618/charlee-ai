import { Box, Grid2 } from "@mui/material"
import { Link } from "react-router-dom"
import { VideoDialog } from "./VideoDialog"
import { useState } from "react";

export const ImgLeftContent = ({preTitle, cases, title, detail, bgImg, btnBg, imgCols, contentCols, isDark, isVideoButton, videolink}) => {
   const [openVideo, setOpenVideo] = useState(false);
  const handleOpenVideo = () => {
    setOpenVideo(true);
  }
  const handleCloseVideo = () => {
    setOpenVideo(false);
  }
  return (
    <Box className="w-full py-10 md:py-28">
      <Grid2 container spacing={6}>
        <Grid2 data-aos="fade-right" size={{xs: 12, sm: 12, md: imgCols, lg: imgCols, xl: imgCols}} className="relative min-h-[520px]">
          <div className="relative md:absolute w-full md:w-[50vw] h-full right-0 rounded-lg"
            style={{backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
          ></div>
        </Grid2>
        <Grid2 data-aos="fade-left" size={{xs: 12, sm: 12, md: contentCols, lg: contentCols, xl: contentCols}} className="relative min-h-[520px]">
          <Box className="w-full text-start">
            <h6 className="text-[24px] leading-[32px] font-normal">{preTitle}</h6>
            <Box className="w-full" marginY={'30px'}>
            {cases.map((caseItem, key) => (
              <Link to={caseItem.path}>
                <button className="rounded-lg gradient-border p-1 mt-3 mr-3">
                  <div className={`rounded-lg bg-[${btnBg}] hover:bg-transparent hover:text-white py-2 px-3`}>
                    {caseItem.name}
                  </div>
                </button>
              </Link>
            ))}
             
            </Box>
            <h2 className="text-[29px] md:text-[63px] leading-[40px] md:leading-[71.5px] font-medium mb-7">
              {title}
            </h2>
            <p>{detail}</p>
            {isVideoButton && <>
              {isDark? <button onClick={handleOpenVideo} className="mt-16 rounded-full text-[18px] leading-[24px] bg-transparent border py-3 px-10 border-white text-white hover:text-[#021744] hover:bg-white">
                Watch Video
              </button>:<button onClick={handleOpenVideo} className="mt-16 rounded-full text-[18px] leading-[24px] bg-transparent border py-3 px-10 border-[#021744] text-[#021744] hover:text-white hover:bg-[#021744]">
                Watch Video
              </button>}
            </>}
            
          </Box>
        </Grid2>
      </Grid2>
      <VideoDialog open={openVideo} handleClose={handleCloseVideo} videoUrl={videolink} />
    </Box>
  )
}
import { Box, Container } from "@mui/material"
import folderCover from "../../assets/imgs/icons/folder-cover.png"
import { BookPopup } from "../modals/BookPopup";
import { useState } from "react";
export const DocuCharleeHero = () => {

  const [isOpenBook, setIsOpenBook] = useState(false);

  const handleCloseBook = () => {
    setIsOpenBook(false)
  }

  const handleOpenBook = () => {
    setIsOpenBook(true)
  }

  return (
    <Box className="w-full pt-24">
      <Container maxWidth="lg">
        <Box className="w-full text-center px-6 pt-16">
          <Box className="w-full" paddingBottom={3} display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <img src={folderCover} alt="seecharlee-ico"/>
            <h5 className="text-[29px] leading-[40px] font-medium mx-2">DocuCharlee</h5>
          </Box>
          <h2 className="hidden md:block text-[65px] leading-[71.5px] font-medium">
            Smart Claim Summaries for <br />Faster, Better Decisions
          </h2>
          <h2 className="block md:hidden text-[36px] leading-[39.5px] font-medium">
            Smart Claim Summaries for Faster, Better Decisions
          </h2>
          <p className="text-[16px] py-5">
            DocuCharlee uses AI and natural language processing to create clear, concise claim summaries, pulling<br /> 
            out key details to help insurers save time and make better decisions faster.
          </p>
          <button onClick={() => handleOpenBook()} className="mt-6 w-full md:w-auto rounded-full text-[18px] leading-[24px] bg-transparent border py-3 px-10 border-[#021744] text-[#021744] hover:text-white hover:bg-[#021744]">
            Book a demo
          </button>
        </Box>
      </Container>
      <BookPopup open={isOpenBook} handleClose={handleCloseBook} />
    </Box>
  )
}
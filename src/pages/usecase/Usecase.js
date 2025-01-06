import { Box, Container, Grid2 } from "@mui/material"
import { HomeHeader } from "../../components/headers/HomeHeader"
import { Footer } from "../../components/footers/Footer"

import { ContactUsPopup } from "../../components/modals/ContactUsPopup"
import { useState } from "react"
import { FindCharlee1 } from "./usecases/FindCharlee1"
import { Route, Routes } from "react-router-dom"
import { FindCharlee2 } from "./usecases/FindCharlee2"
import { FindCharlee3 } from "./usecases/FindCharlee3"
import { AskCharleeClamInsight1 } from "./usecases/AskCharleeClamInsight1"
import { AskCharleeClamInsight2 } from "./usecases/AskCharleeClamInsight2"
import { AskCharleeClamInsight3 } from "./usecases/AskCharleeClamInsight3"
import { AskCharleeClamInsight4 } from "./usecases/AskCharleeClamInsight4"
import { CharleeUW1 } from "./usecases/CharleeUW1"
import { CharleeUW2 } from "./usecases/CharleeUW2"

export const Usecase = () => {
  const [isOpenContact, setIsOpenContact] = useState(false)
  
    const handleOpenContact = () => {
      setIsOpenContact(true);
    }
    const handleCloseContact = () => {
      setIsOpenContact(false);
    }
  
  return (
    <div className="w-full overflow-hidden bg-[#F9F9F9]">
      <HomeHeader headerColor={'#F9F9F9'} textColor={'#021744'}/>
        <div className="usecase-page">
          <Box className="w-full py-20">
            <Routes>
              <Route path="/findcharlee1" element={<FindCharlee1 />} />
              <Route path="/findcharlee2" element={<FindCharlee2 />} />
              <Route path="/findcharlee3" element={<FindCharlee3 />} />
              <Route path="/AskCharleeClamInsight1" element={<AskCharleeClamInsight1 />} />
              <Route path="/AskCharleeClamInsight2" element={<AskCharleeClamInsight2 />} />
              <Route path="/AskCharleeClamInsight3" element={<AskCharleeClamInsight3 />} />
              <Route path="/AskCharleeClamInsight4" element={<AskCharleeClamInsight4 />} />
              <Route path="/CharleeUW1" element={<CharleeUW1 />} />
              <Route path="/CharleeUW2" element={<CharleeUW2 />} />
            </Routes>
            <Box className="w-full text-center">
              <button 
                onClick={() => {handleOpenContact()}} 
                className="text-[18px] leading-[24px] font-medium py-4 px-14  mt-2 border border-[#0D131E] hover:bg-[#0D131E] hover:text-white rounded-full">
                  Contact Us
              </button>
              <ContactUsPopup open={isOpenContact} handleClose={handleCloseContact}/>
            </Box>           
          </Box>
        </div>
      <Footer />
    </div>
    
  )
}
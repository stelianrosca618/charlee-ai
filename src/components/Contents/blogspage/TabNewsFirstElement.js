import { Box, Grid2 } from "@mui/material"
import { printEventDates } from "../../commonFunc"
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import RoomIcon from '@mui/icons-material/Room';
import PhoneSharpIcon from '@mui/icons-material/PhoneSharp';
import { CalendarDownMenu } from "./CalendarDownMenu";
export const TabNewsFirstElement = ({firstBlog}) => {
  return (
    <Grid2 container spacing={2} >
      <Grid2 size={{xs: 12, sm: 12, md: 9, lg: 9, xl: 9}} className="text-start text-white rounded-2xl min-h-[400px]"
        display={"flex"} flexDirection={"column"} justifyContent={"end"} alignItems={"flex-start"}
        sx={{background: `url(${firstBlog?.postMedia})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
      >
        <Box sx={{background: 'linear-gradient(0deg, #22c0b1, #22c0b1, #ffffff00)'}} className="w-full p-6 rounded-b-2xl">
          <h4 className="cursor-pointer text-[42px] leading-[54.6px] font-medium">
            {firstBlog?.title}
          </h4>
          <span>{printEventDates(firstBlog)}</span>
        </Box>
      </Grid2>
      <Grid2 size={{xs: 12, sm: 12, md: 3, lg: 3, xl: 3}}>
        <Box className="py-3">
          <h3 className="text-[22px] font-semibold py-2">
            <HouseOutlinedIcon className="mx-2"/>
            WebSite
          </h3>  
          <p className="pl-2">
            <a className="break-words underline text-[#22c0b1]" href={firstBlog.link}>
              {firstBlog.eventUrl}
            </a>
          </p>
          <h3 className="text-[22px] font-semibold py-2">
            <RoomIcon className="mx-2"/>
            Address
          </h3>  
          <p className="pl-2 underline">
            {firstBlog.addressData.address}
          </p>
          <p className="pl-2 underline">
            {firstBlog.addressData.city} {firstBlog.addressData.state} {firstBlog.addressData.zip} {firstBlog.addressData.country}
          </p>
          <h3 className="text-[22px] font-semibold py-2">
            <PhoneSharpIcon className="mx-2"/>
            Phone
          </h3>  
          <p className="pl-2 underline">
            {firstBlog.addressData.phone}
          </p>
        </Box> 
        <Box className="px-2 py-3">
          <CalendarDownMenu eventObj={firstBlog} />
        </Box>
      </Grid2>
    </Grid2>
  )
}
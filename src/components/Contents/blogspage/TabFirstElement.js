import { Box, Grid2 } from "@mui/material"
import { calculateCreatedAgo } from "../../commonFunc"

export const TabFirstElement = ({firstBlog}) => {
  return (
    <Grid2 container spacing={2} >
      <Grid2 size={{xs: 12, sm: 12, md: 9, lg: 9, xl: 9}} className="text-start text-white p-6 rounded-2xl min-h-[300px]"
        display={"flex"} flexDirection={"column"} justifyContent={"end"} alignItems={"flex-start"}
        sx={{background: `url(${firstBlog?.postMedia})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
      >
        <h4 className="cursor-pointer text-[42px] leading-[54.6px] font-medium">
          {firstBlog?.title}
        </h4>
        <Box className="cursor-pointer w-full py-3" display={'flex'} gap={6}>
          <span>{calculateCreatedAgo(firstBlog)}</span>
          {/* <span>By {firstBlog?.creator}</span> */}
          <span>By Charlee.ai</span>
        </Box>
      </Grid2>
      <Grid2 size={{xs: 12, sm: 12, md: 3, lg: 3, xl: 3}}>
        <p className="line-clamp-[12]">
          {firstBlog.content}
        </p>
      </Grid2>
    </Grid2>
  )
}
import { Box, Container } from "@mui/material"

export const BlogsHero = () => {
  return (
    <Box className="w-full py-28 bg-[#0D131E]">
      <Container maxWidth="lg">
        <Box className="w-full py-10 text-white">
          <h5 className="text-[65px] leading-[71.5px] font-medium">
            Charlee Insights
          </h5>
          <p className="text-[16px] leading-[31px] font-normal mt-7">
            FindCharlee identifies suspicious claims with precision, flagging potential<br />
            fraud before it impacts your bottom line. Protect your organization with<br />
            proactive fraud detection.
          </p>
        </Box>
      </Container>
    </Box> 
  )
}
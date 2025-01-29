import { Box, Container } from "@mui/material"
import parttern1 from "../../assets/imgs/pattens/pattern1.png"
import { sendEmail, sendLearnEmail } from "../../providers/apis/emailApi"
import { useState } from "react"
import { toast } from "react-toastify"
export const PartenerHero = () => {
  const openPolicy = () => {
    window.open('https://app.termly.io/policy-viewer/policy.html?policyUUID=b5b033f7-4a2f-4c82-a576-1ecd7648f913')
  }

  const [email, setEmail] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('Please enter a valid email')
      return
    }

    await sendLearnEmail(email, 'charlee.ai', {studymail: email});
    toast.success('Thank you for your email.   You will be hearing from us shortly.');
    // console.log('Form submitted with email:', email)
    setEmail('')
  }

  return (
    <Box className="w-full bg-[#0D131E] py-40"  sx={{backgroundImage: `url(${parttern1})`, backgroundRepeat: 'no-repeat', backgroundPositionY: 'calc(100% + 120px);', backgroundSize: '100%'}}>
      <Container maxWidth="lg" className="h-full">
        <Box className="w-full h-full" display={"flex"} justifyContent={"center"} alignItems={"center"} >
          <div>
            <div className="partner-header">
              <h6 className="uppercase text-[#4CFFE9] text-[14px] leading-[15.96px] font-bold">PARTNERSHIPS</h6>
              <h2 className="text-white text-[36px] md:text-[65px] leading-[39.6px] md:leading-[71.5px] font-medium my-6">
                Become Charlee.ai’s<br /> next partner
              </h2>
            </div>
            <div className="partner-inputs">
            <Box
             
              component={'form'}
              onSubmit={handleSubmit}
               className="w-full pt-6 " display={"flex"} flexDirection={{xs: "column", sm: "column", md: "row", lg: "row", xl: "row"}} justifyContent={"center"} alignItems={"center"} >
                <input type="email" placeholder="Enter your email" className="w-full rounded-lg my-2 py-3 px-4 bg-white"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
                <button type="sumit" className="rounded-lg w-full whitespace-nowrap md:w-auto my-2 font-medium text-[18px] leading-[24px] px-8 py-3 border border-[#42DDD1] bg-[#42DDD1] hover:bg-transparent hover:text-white mx-2">Learn More</button>
              </Box>
              <p className="text-white pt-3">
                We care about the protection of your data. read our <a onClick={() => {openPolicy()}} className="footer-privacy cursor-pointer">Privacy policy</a>
              </p>
            </div>
          </div>
        </Box>
      </Container>
    </Box>
  )
}
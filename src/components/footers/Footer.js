import { Box, Container, Divider, Grid2 } from "@mui/material"
import { FaFacebook } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiBasketball } from "react-icons/ci";
import { Link } from "react-router-dom";

export const Footer = () => {
  const openPolicy = () => {
    window.open('https://app.termly.io/policy-viewer/policy.html?policyUUID=b5b033f7-4a2f-4c82-a576-1ecd7648f913')
  }
  const openCookie = () => {
    window.open('https://app.termly.io/policy-viewer/policy.html?policyUUID=b0953643-e8fd-41c7-8d52-c583850491e6')
  }
  const openTerms = () => {
    window.open('https://app.termly.io/policy-viewer/policy.html?policyUUID=703e5aa4-5804-4558-bc15-6af2ad1307c5')
  }
  return (
    <Box className="w-full bg-[#021744] text-white py-16">
      <Container>
        <Box className="w-full mb-8">
          <Grid2 container >
            <Grid2 size={{xs: 12, md: 8}}>
              <Box className="w-full text-left">
                <Grid2 container spacing={1}>
                  <Grid2 size={{xs: 6, md: 3}}>
                    <Box className="w-full">
                      <h6 className="uppercase font-bold text-[14px] leading-[26px]">
                        company
                      </h6>
                      <ul className="text-[16px] leading-[31px] mt-4">
                        <li className="py-2">
                          <Link to={'/about'}>
                            About
                          </Link>
                        </li>
                        <li className="py-2">
                          <Link to={'/partners'}>
                          Partners
                          </Link>
                        </li>
                        <li className="py-2">
                          <Link to={'/solutions'}>
                          Solutions
                          </Link>
                        </li>
                      </ul>
                    </Box>
                  </Grid2>
                  <Grid2 size={{xs: 6, md: 3}}>
                    <Box className="w-full">
                      <h6 className="uppercase font-bold text-[14px] leading-[26px]">
                        Products
                      </h6>
                      <ul className="text-[16px] leading-[31px] mt-4">
                        <li className="py-2">
                          <Link to={'/product/seecharlee'}>
                            4SeeCharlee
                          </Link>
                        </li>
                        <li className="py-2">
                          <Link to={'/product/docucharlee'}>
                            DocuCharlee
                          </Link>
                        </li>
                        <li className="py-2">
                          <Link to={'/product/askcharlee'}>
                            AskCharlee
                          </Link>
                        </li>
                        <li className="py-2">
                          <Link to={'/product/findcharlee'}>
                            FindCharlee
                          </Link>
                        </li>
                      </ul>
                    </Box>
                  </Grid2>
                  <Grid2 size={{xs: 6, md: 3}}>
                    <Box className="w-full">
                      <h6 className="uppercase font-bold text-[14px] leading-[26px]">
                      Connect
                      </h6>
                      <ul className="text-[16px] leading-[31px] mt-4">
                        <li className="py-2">
                          <Link to={'/blogs/news'}>
                            News
                          </Link>
                        </li>
                        <li className="py-2">
                          <Link to={'/blogs/events'}>
                            Events
                          </Link>
                        </li>
                      </ul>
                    </Box>
                  </Grid2>
                  <Grid2 size={{xs: 6, md: 3}}>
                    <Box className="w-full">
                      <h6 className="uppercase font-bold text-[14px] leading-[26px]">
                      Legal
                      </h6>
                      <ul className="text-[16px] leading-[31px] mt-4">
                        <li className="py-2 cursor-pointer" onClick={() => openCookie()}>Cookies</li>
                        <li className="py-2 cursor-pointer" onClick={() => openPolicy()}>Privacy</li>
                        <li className="py-2 cursor-pointer" onClick={() => openTerms()}>Terms</li>
                      </ul>
                    </Box>
                  </Grid2>
                </Grid2>
              </Box>
            </Grid2>
            <Grid2 size={{xs: 12, md: 4}}>
              <Box className="w-full text-left">
                <h6 className="uppercase font-bold text-[14px] leading-[26px]">
                Subscribe to our newsletter
                </h6>
                <p className="py-4 text-[14px] font-light">The latest news, articles, and resources, sent to your inbox weekly.</p>
                <Box className="w-full" display={'flex'} justifyContent={"flex-start"} alignItems={"center"}
                  component={'form'} id="zcampaignOptinForm" method="POST" action="https://oemyxaj-zgpm.maillist-manage.com/weboptin.zc" target="_zcSignup"
                >
                  <input type="text" placeholder="Enter your email" 
                    className="w-full rounded-lg py-2 px-4 bg-white text-black"
                    changeitem="SIGNUP_FORM_FIELD" name="CONTACT_EMAIL" id="EMBED_FORM_EMAIL_LABEL"
                    />
                  <button className="rounded-lg font-medium text-[18px] leading-[24px] px-4 py-2 border border-[#42DDD1] bg-[#42DDD1] text-black hover:bg-transparent hover:text-white mx-2"
                    name="SIGNUP_SUBMIT_BUTTON" id="zcWebOptin" 
                  >
                    Subscribe
                  </button>
                  <input type="hidden" id="fieldBorder" value="" />
                  <input type="hidden" id="submitType" name="submitType" value="optinCustomView" />
                  <input type="hidden" id="emailReportId" name="emailReportId" value="" />
                  <input type="hidden" id="formType" name="formType" value="QuickForm" />
                  <input type="hidden" name="zx" id="cmpZuid" value="12a29f03f" />
                  <input type="hidden" name="zcvers" value="3.0" />
                  <input type="hidden" name="oldListIds" id="allCheckedListIds" value="" />
                  <input type="hidden" id="mode" name="mode" value="OptinCreateView" />
                  <input type="hidden" id="zcld" name="zcld" value="1a25155c23e29119" />
                  <input type="hidden" id="zctd" name="zctd" value="" />
                  <input type="hidden" id="document_domain" value="" />
                  <input type="hidden" id="zc_Url" value="oemyxaj-zgpm.maillist-manage.com" />
                  <input type="hidden" id="new_optin_response_in" value="0" />
                  <input type="hidden" id="duplicate_optin_response_in" value="0" />
                  <input type="hidden" name="zc_trackCode" id="zc_trackCode" value="ZCFORMVIEW" />
                  <input type="hidden" id="zc_formIx" name="zc_formIx"
                      value="3z3fb3b554d487063ccddbf222faecb6bc22f31842da323e15381c0205e8807169" />
                  <input type="hidden" id="viewFrom" value="URL_ACTION" />
                  <span style={{display: 'none'}} id="dt_CONTACT_EMAIL">1,true,6,Contact Email,2</span>
                  <span style={{display: 'none'}} id="dt_FIRSTNAME">1,false,1,First Name,2</span>
                  <span style={{display: 'none'}} id="dt_LASTNAME">1,false,1,Last Name,2</span>
                </Box>
              </Box>
            </Grid2>
          </Grid2>
        </Box>
        <Box className="w-full pt-8 border-t border-t-[#4B5563]" display={"flex"} flexDirection={{xs: "column", md: "row"}} justifyContent={"space-between"} alignItems={{xs: "start", md:"center"}}>
          <Box className="text-left py-2">
            <p className="text-[12px] text-white">© 2025 Charlee.ai. All rights reserved.</p>
          </Box>
          <Box className=" py-2" display={"flex"} justifyContent={"flex-end"} justifyItems={"center"}>
            <FaFacebook  onClick={() => {window.open('https://www.facebook.com/charleeai/')}} className="mx-1 cursor-pointer" color="white" size={'24px'}/>
            <CiInstagram className="mx-1 cursor-pointer" color="white" size={'24px'}/>
            <FaTwitter onClick={() => {window.open('https://twitter.com/charleeai')}} className="mx-1 cursor-pointer" color="white" size={'24px'}/>
            <FaGithub onClick={() => {window.open('https://github.com/infinilytics')}} className="mx-1 cursor-pointer" color="white" size={'24px'}/>
            <CiBasketball className="mx-1 cursor-pointer" color="white" size={'24px'}/>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
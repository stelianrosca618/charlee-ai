import { Box, Container, Divider, Grid2 } from "@mui/material"
import { Footer } from "../../components/footers/Footer"
import { HomeHeader } from "../../components/headers/HomeHeader"
import { Link, useSearchParams, useParams, Routes, Route } from "react-router-dom"
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import blog1 from '../../assets/imgs/news/blog1.png';
import blog2 from '../../assets/imgs/news/blog2.png';
import { useEffect, useState } from "react"
import blogItems from "../../providers/datas/blogs.json";
import { calculateCreatedAgo, sortArrList } from "../../components/commonFunc"

import {Post18214} from './blogpages/Post18214';
import {Post18377} from './blogpages/Post18377';
import {Post18401} from './blogpages/Post18401';
import {Post18455} from './blogpages/Post18455';
import {Post18479} from './blogpages/Post18479';
import {Post18486} from './blogpages/Post18486';
import {Post18492} from './blogpages/Post18492';
import {Post18534} from './blogpages/Post18534';
import {Post18683} from './blogpages/Post18683';
import {Post18694} from './blogpages/Post18694';
import {Post18707} from './blogpages/Post18707';
import {Post18739} from './blogpages/Post18739';
import {Post18778} from './blogpages/Post18778';
import {Post19086} from './blogpages/Post19086';
import {Post19136} from './blogpages/Post19136';
import {Post19554} from './blogpages/Post19554';
import {Post19577} from './blogpages/Post19577';
import {Post19588} from './blogpages/Post19588';
import {Post19802} from './blogpages/Post19802';
import {Post20376} from './blogpages/Post20376';
import {Post20393} from './blogpages/Post20393';
import {Post20405} from './blogpages/Post20405';
import {Post20520} from './blogpages/Post20520';
import {Post20541} from './blogpages/Post20541';
import {Post20617} from './blogpages/Post20617';
import {Post20655} from './blogpages/Post20655';
import {Post20679} from './blogpages/Post20679';
import {Post20701} from './blogpages/Post20701';
import {Post20828} from './blogpages/Post20828';
import {Post20851} from './blogpages/Post20851';
import {Post20980} from './blogpages/Post20980';
import {Post21067} from './blogpages/Post21067';
import {Post21196} from './blogpages/Post21196';
import {Post21249} from './blogpages/Post21249';
import {Post21277} from './blogpages/Post21277';
import {Post21344} from './blogpages/Post21344';
import {Post21460} from './blogpages/Post21460';
import {Post21580} from './blogpages/Post21580';
import {Post21601} from './blogpages/Post21601';
import {Post21766} from "./blogpages/Post21766";
import {Post21839} from "./blogpages/Post21839";
import {Post21861} from "./blogpages/Post21861";
import {Post21873} from "./blogpages/Post21873";
import {Post21930} from "./blogpages/Post21930";
import {Post21937} from "./blogpages/Post21937";
import {Post21944} from "./blogpages/Post21944";
import {Post21971} from "./blogpages/Post21971";
import {Post22023} from "./blogpages/Post22023";
import {Post22140} from "./blogpages/Post22140";
import {Post22161} from "./blogpages/Post22161";
import {Post22171} from "./blogpages/Post22171";
import {Post22244} from "./blogpages/Post22244";
import {Post22299} from "./blogpages/Post22299";
import {Post22417} from "./blogpages/Post22417";
import {Post22421} from "./blogpages/Post22421";
import {Post22441} from "./blogpages/Post22441";
import {Post22469} from "./blogpages/Post22469";
export const BlogContent = () => {
  const searchParams = useParams();
  const [blogData, setBlogData] = useState();
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  useEffect(() => {
    console.log(searchParams['*'])
    loadBlogData(searchParams['*']);
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
  const renderBlogDate = (blogItem) => {
    const dateStr = new Date(blogItem.postDate);
    return dateStr.toDateString();
  }
  return (
    <div className="w-full overflow-hidden bg-[#F3F4F4]">
      <HomeHeader headerColor={'#F9F9F9'} textColor={'#021744'}/>
      <div className="news-page bg-[#F9F9F9]">
        <Box className="w-full mt-24">
          <Container maxWidth="md">
            <Box className='w-full pt-14'>
              <h2 className="text-[65px] leading-[71.5px] font-medium">
                {blogData?.title}
              </h2>
              {/* <p className="text-[#4B5563] text-[20px] font-normal leading-[31px] pt-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              </p> */}
              <Box className="w-full text-[#0099B0] " paddingY={1} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <span className="px-3">
                  3 minute read
                </span>
                {blogData && <span className="px-3 border-l border-l-[#0099B0]">
                  {renderBlogDate(blogData)}
                </span>}
                <span className="px-3 border-l border-l-[#0099B0]">
                  By Charlee AI
                </span>
              </Box>

              <Box className="w-full py-10 rounded-xl">
                <Routes>
                  <Route path="/a-paradigm-shift-for-insurance-claims-icd10" element={<Post18214 />} />
                  <Route path="/bringing-disruption-to-the-claims-process-with-next-generation-analytics" element={<Post18377 />} />
                  <Route path="/multiple-claims-patterns-requires-multiple-analysis-techniques" element={<Post18401 />} />
                  <Route path="/the-cognitive-approach-in-connecting-underwriting-and-claims-lessons-learned" element={<Post18455 />} />
                  <Route path="/recognizing-the-value-of-ai-in-claims-and-underwriting" element={<Post18479 />} />
                  <Route path="/insurtech-fast-tracking-claims" element={<Post18486 />} />
                  <Route path="/the-true-value-of-artiﬁcial-intelligence-in-insurtech" element={<Post18492 />} />
                  <Route path="/value-of-artificial-intelligence-and-advanced-analytics-in-identifying-and-reducing-workers-compensation-fraud" element={<Post18534 />} />
                  <Route path="/enhancing-the-claims-experience-with-artificial-intelligence-smartc" element={<Post18683 />} />
                  <Route path="/the-value-of-predicting-claims-litigation-with-artificial-intelligence" element={<Post18694 />} />
                  <Route path="/2018-keynote-eastern-claims-conference" element={<Post18707 />} />
                  <Route path="/soc-2-announcement" element={<Post18739 />} />
                  <Route path="/aspire-general-insurance-company-selects-infinilytics-to-optimize-claims" element={<Post18778 />} />
                  <Route path="/optimizing-claims-in-the-face-of-a-pandemic-v2-04-04-2020-svia" element={<Post19086 />} />
                  <Route path="/accelerating-insights-in-insurance" element={<Post19136 />} />
                  <Route path="/identifying-high-cost-claims-with-predictive-analytics" element={<Post19554 />} />
                  <Route path="/automating-the-claims-process-with-artificial-intelligence-and-machine-learning" element={<Post19577 />} />
                  <Route path="/leadership-insights-in-the-year-of-disruption-2020" element={<Post19588 />} />
                  <Route path="/automating-claims-decisions-with-ai-based-insights" element={<Post19802 />} />
                  <Route path="/managing-slip-and-fall-claims-severity-with-artificial-intelligence-thought-leadership-with-the-infinilytics-innovation-team" element={<Post20376 />} />
                  <Route path="/insuretech-is-just-getting-started-with-artificial-intelligence" element={<Post20393 />} />
                  <Route path="/discovering-and-finding-hidden-fraud-schemes-with-artificial-intelligence" element={<Post20405 />} />
                  <Route path="/the-pandemic-the-great-resignation-and-insuretech-artificial-intelligence-can-fill-the-gaps" element={<Post20520 />} />
                  <Route path="/better-management-for-commercial-vehicle-claims-with-artificial-intelligence" element={<Post20541 />} />
                  <Route path="/can-ai-technology-help-insurers-manage-risks" element={<Post20617 />} />
                  <Route path="/how-predictive-analytics-is-transforming-the-insuretech-industry" element={<Post20655 />} />
                  <Route path="/ai-and-machine-learning-change-insurance-and-health-care" element={<Post20679 />} />
                  <Route path="/introducing-artificial-intelligence-technology-for-lowering-claim-expenses-and-improving-reserves" element={<Post20701 />} />
                  <Route path="/machine-learning-thrives-on-unstructured-and-structured-data" element={<Post20828 />} />
                  <Route path="/unlocking-the-value-of-unstructured-data-through-charlees-natural-language-processing" element={<Post20851 />} />
                  <Route path="/part-1-introduction-to-unstructured-data" element={<Post20980 />} />
                  <Route path="/part-2-basics-of-unstructured-data-and-how-it-can-transform-industries" element={<Post21067 />} />
                  <Route path="/part-3-the-6-vs-of-data-and-their-value-for-insurers" element={<Post21196 />} />
                  <Route path="/part-4-simplifying-the-underlying-technology-behind-unstructured-data-analysis" element={<Post21249 />} />\
                  <Route path="/claims-competing-in-a-digital-first-industry" element={<Post21277 />} />
                  <Route path="/building-the-2023-insuretech-roadmap-five-things-to-consider-in-claims" element={<Post21344 />} />
                  <Route path="/part-2-sentiment-analysis-with-nlp-next-gen-ai-in-insur-tech" element={<Post21460 />} />
                  <Route path="/part-1-role-of-sentiment-analysis-in-data-analysis" element={<Post21580 />} />
                  <Route path="/part-3-nlp-and-semantic-analytics-for-insurance" element={<Post21601 />} />
                  <Route path="/a-primer-for-artificial-intelligence-in-insurance" element={<Post21766 />} />
                  <Route path="/part-1-large-language-models-definitions-process-and-applicability" element={<Post21839 />} />
                  <Route path="/part-2-claims-large-language-models-and-their-value" element={<Post21861 />} />
                  <Route path="/does-regulation-stand-in-the-way-of-innovation-ai-in-insurance" element={<Post21873 />} />
                  <Route path="/part-1-ethical-ai-he-six-pillars-for-insurance" element={<Post21930 />} />
                  <Route path="/part-2-how-to-build-ai-ethically" element={<Post21937 />} />
                  <Route path="/part-3-how-to-implement-ai-ethically" element={<Post21944 />} />
                  <Route path="/5-top-trends-shaping-the-2024-insurance-landscape" element={<Post21971 />} />
                  <Route path="/guest-speak-part-2-ai-in-claims-bridging-the-operational-gap" element={<Post22023 />} />
                  <Route path="/guest-speak-part-1-ai-in-claims-standardization-of-fnol" element={<Post22140 />} />
                  <Route path="/ai-augments-not-replaces-human-experience-in-claims-management-part-1"  element={<Post22161 />} />
                  <Route path="/ai-augments-not-replaces-human-experience-in-claims-management-part-2" element={<Post22171 />} />
                  <Route path="/charlee-ai-and-reducing-bias-in-artificial-intelligence-part-1" element={<Post22244 />} />
                  <Route path="/charlee-ai-and-reducing-bias-in-artificial-intelligence-part-2" element={<Post22299 />} />
                  <Route path="/guest-speak-part-3-ai-in-claims-speed-to-market-with-artificial-intelligence-workflows" element={<Post22417 />} />
                  <Route path="/guest-speak-part-3-contd-ai-in-claims-workflow-management" element={<Post22421 />} />
                  <Route path="/path-to-improving-first-notice-of-loss-fnol-with-ai" element={<Post22441 />} />
                  <Route path="/understanding-accuracy-in-machine-learning" element={<Post22469 />} />
                </Routes>
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
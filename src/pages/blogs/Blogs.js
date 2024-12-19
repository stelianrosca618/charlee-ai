import { Box, Checkbox, Container, FormControl, FormControlLabel, FormGroup, Grid2, TextField } from "@mui/material"
import { HomeHeader } from "../../components/headers/HomeHeader"
import { Footer } from "../../components/footers/Footer"
import { FiPhone } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";

import { FaFacebook } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiBasketball } from "react-icons/ci";

import charleeface from "../../assets/imgs/icons/charlee-face.png"
import { BlogsHero } from "../../components/heros/BlogsHero";
import { BlogsTabs } from "../../components/Contents/blogspage/BlogsTabs";
import { useEffect } from "react";
import blogContents from "../../providers/datas/blogcontents.json";
import eventlist from "../../providers/datas/events.json";
import postArrlist from "../../providers/datas/blogs.json";
export const Blogs = () => {
  
  useEffect(() => {
    // analyzeBlogs();
  }, [])

  const analyzeBlogs = () => {
    let blogArr = [];
    postArrlist.map((post) => {
      let tmpPost = post;
      const postContent = blogContents.find(content => content.postId === post.postId);
      if(post.metaData?.fusion_builder_status !== 'active') {
        const blogContentStr = blogContentParser(postContent.encoded);
        const divEle = document.createElement("div");
        divEle.innerHTML = blogContentStr;
        divEle.querySelectorAll('img').forEach((script) => {
          script.remove();
        })
        let renderedTxt = divEle.textContent || divEle.innerText || "";
        // console.log(post.metaData?.fusion_builder_status, renderedTxt);
        tmpPost['content'] = renderedTxt;
        tmpPost['fusion'] = post.metaData?.fusion_builder_status;
      }else{
        tmpPost['content'] = '';
        const blogContentStr = blogContentParser(postContent.encoded);
        const divEle = document.createElement("div");
        const htmlStr = blogContentStr.replaceAll('[', '<').replaceAll(']', '>');
        divEle.innerHTML = htmlStr;
        divEle.querySelectorAll('fusion_imageframe').forEach((script) => {
          script.remove();
        })
        let fusionTxt = divEle.textContent || divEle.innerText || "";
        console.log(fusionTxt, divEle);
        tmpPost['content'] = fusionTxt;
        tmpPost['fusion'] = post.metaData?.fusion_builder_status;
      }
      blogArr.push(tmpPost);
    })
    console.log(blogArr);
  }

  const blogContentParser = (contentObj) => {
    let contentData = '';
    contentObj.map((content) => {
      if(content.__prefix === "content"){
        contentData = content.__cdata;
      }
    })
    return contentData;
  }

  return (
    <div className="w-full overflow-hidden bg-[#F3F4F4]">
      <HomeHeader headerColor={'#0D131E'} textColor={'#ffffff'}/>
      <div className="contact-page ">
        <BlogsHero />
        <BlogsTabs />
      </div>
      <Footer />
    </div>
  )
}
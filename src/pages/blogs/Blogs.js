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

import oldMedias from "../../providers/datas_old/medias.json"
import oldPosts from "../../providers/datas_old/posts.json";
import oldVenues from "../../providers/datas_old/venues.json";
import oldEvents from "../../providers/datas_old/events.json"
import orgEvents from "../../providers/datas_old/orgEvents.json";
import { useEffect } from "react";
import medialist from "../../providers/datas/medias.json";
import venueList from "../../providers/datas/venues.json"
import eventlist from "../../providers/datas/events.json";
import postArrlist from "../../providers/datas/blogs.json";
export const Blogs = () => {
  
  useEffect(() => {
    updateBlogMedia();
    // parsingEvents();
    // updateEventMedia();
  }, [])
  const updateBlogMedia = () => {
    let blogArr = [];
    postArrlist.map(item => {
      if(item.postMedia != '/blog-photos/detaultBlog.png'){
        const splitedStr = item.postMedia.split('/');
        const fileName = splitedStr[splitedStr.length-1];
        const filePath = `/blog-photos/${fileName}`;
        let blogObj = item;
        blogObj.postMedia = filePath;
        blogArr.push(blogObj);
      }
    })
    console.log(blogArr);
  }
  const updateEventMedia = () => {
    const eventItems = [];
    eventlist.map(item => {
      console.log(item.postMedia);
      const splitedStr = item.postMedia.split('/');
      const fileName = splitedStr[splitedStr.length-1];
      const filePath = `/blog-photos/${fileName}`;
      let eventObj = item;
      eventObj.postMedia = filePath;
      eventItems.push(eventObj);
    })
    console.log(eventItems);
  }

  const parsingEvents = () => {
    let eventArr = [];
    orgEvents.map(eItem => {
      if(eItem.postType !== 'attachment'){
        
        const venueId = eItem.metaData._EventVenueID;
        const mediaId = eItem.metaData._thumbnail_id;
        console.log(eItem, mediaId);
        // eventArr.push({ 
        //   title: eItem.title.__cdata,
        //   link: eItem.link,
        //   postId: eItem.post_id.__text,
        //   postName: eItem.post_name.__cdata,
        //   postType: eItem.post_type.__cdata,
        //   postDate: eItem.post_date.__cdata,
        //   metaData:genPostMeta(eItem.postmeta),
        // })
        eventArr.push({
          title: eItem.title,
          link: eItem.link,
          postId: eItem.postId,
          postName: eItem.postName,
          postType: eItem.postType,
          postDate: eItem.postDate,
          venueId: venueId,
          addressData: venueId? getVenueData(venueId) : null,
          thumbnailId: mediaId,
          postMedia: mediaId? getMediaLink(mediaId) : '',
          eventAllDay: eItem.metaData._EventAllDay,
          eventCost: eItem.metaData._EventCost,
          eventCurrencyCode:  eItem.metaData._EventCurrencyCode,
          eventCurrencyPostion: eItem.metaData._EventCurrencyPosition,
          eventCurrencySymbol: eItem.metaData._EventCurrencySymbol,
          eventStartDate: eItem.metaData._EventStartDate,
          eventTimezone: eItem.metaData._EventTimezone,
          eventUrl: eItem.metaData._EventURL,
          eventEndDate: eItem.metaData._EventEndDate,
          eventOrigin: eItem.metaData._EventOrigin
        })
      }
    });
    console.log(eventArr);
  }

  const getVenueData = (venueId) => {
    const venueData = venueList.find(item => item.postId == venueId);
    // console.log(venueId, venueData );
    const addressData = {
      title: venueData.title,
      origin: venueData.metaData._VenueOrigin,
      phone:  venueData.metaData._VenuePhone,
      address: venueData.metaData._VenueAddress,
      city: venueData.metaData._VenueCity,
      country: venueData.metaData._VenueCountry,
      province: venueData.metaData._VenueProvince,
      state: venueData.metaData._VenueState,
      zip: venueData.metaData._VenueZip,
      venueId: venueData.metaData._VenueVenueID
    }
    return addressData;
  }

  const parsingVenues = () => {
    const venuesArr = [];
    oldVenues.map(vItem => {
      console.log(vItem);
      venuesArr.push({
        title: vItem.title['__cdata'],
        link:  vItem.link,
        postId: vItem.post_id['__text'],
        postName: vItem.post_name['__cdata'],
        postType: vItem.post_type['__cdata'],
        metaData: genPostMeta(vItem.postmeta),
      });
    })
    console.log(venuesArr);
  }

  const parsingPosts = () => {
    console.log(oldPosts);
    const newBlogs = [];
    oldPosts.map(postItem => {
      if(postItem.post_type['__cdata'] == 'post'){
        const postMetaData = genPostMeta(postItem.postmeta);
        const postMediaItem = getPostMedia(postItem.post_id['__text'], postMetaData);
        
        // console.log(postItem.post_id['__text'], postMediaItem, postItem)
        newBlogs.push({
          title: postItem.title['__cdata'],
          postId: postItem.post_id['__text'],
          postName: postItem.post_name['__cdata'],
          postDate: postItem.post_date['__cdata'],
          postType: postItem.post_type['__cdata'],
          postMedia: postMediaItem? postMediaItem.attachedUrl : '/blog-photos/detaultBlog.png',
          link: postItem.link,
          creator: postItem.creator['__cdata'],
          // encoded: postItem.encoded,
          category: updateCategories(postItem.category),
          metaData: postMetaData,
        })
      }
    });
    console.log(newBlogs);
  }
  
  const updateCategories = (cateogryData) => {
    let cateogryObj = [];
    if(Array.isArray(cateogryData)){
      cateogryData.map(item => {
        cateogryObj.push({
          nickName: item['_nicename'],
          text: item['__cdata']
        })
      })
    }else{
      cateogryObj.push({
        nickName: cateogryData['_nicename'],
        text: cateogryData['__cdata']
      })
    }
    return cateogryObj
  }
  const genPostMeta = (metaData) => {
    let metaObj = {};
    metaData.map(metaItem => {
      const metaKey = metaItem.meta_key['__cdata'];
      const metaVal = metaItem.meta_value['__cdata'];
      metaObj = { ...metaObj, [metaKey]: metaVal};
    })
    return metaObj;
  }
  const getMediaLink = (postId) => {
    let findPost = medialist.find(mediaItem => mediaItem.postId == postId);
    return findPost?.attachedUrl;
  }
  const getPostMedia = (postId, metaData) => {
    let findPost = medialist.find(mediaItem => mediaItem.postParent == postId);
    if(!findPost && metaData['_thumbnail_id']){
      findPost = medialist.find(mediaItem => mediaItem.postId == metaData['_thumbnail_id']);
    }
    return findPost;
  }
  const parsingOldMedias = () => {
    const newMedias = [];
    // console.log(oldMedias);
    oldMedias.map(mediaItem => {
      newMedias.push({
        title: mediaItem.title['__cdata'],
        guid: mediaItem.guid,
        postName: mediaItem.post_name['__cdata'],
        postId: mediaItem.post_id['__text'],
        postParent: mediaItem.post_parent['__text'],
        postType: mediaItem.post_type['__cdata'],
        attachedUrl: mediaItem.attachment_url['__cdata']
      });
    })
    console.log(newMedias);
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
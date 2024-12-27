import { Box, Container, Divider, Grid2 } from "@mui/material"
import { HomeHeader } from "../../components/headers/HomeHeader"
import { Link, useNavigate, useParams } from "react-router-dom"
import { calculateCreatedAgo, printEventDates, sortArrList } from "../../components/commonFunc"
import eventlist from "../../providers/datas/events.json";
import { useEffect, useState } from "react";
import { Footer } from "../../components/footers/Footer";
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import RoomIcon from '@mui/icons-material/Room';
import PhoneSharpIcon from '@mui/icons-material/PhoneSharp';
import { CalendarDownMenu } from "../../components/Contents/blogspage/CalendarDownMenu";
import { Map, Marker} from "@vis.gl/react-google-maps";
import {
  geocode,
  RequestType,
} from "react-geocode";

export const EventContent = () => {
  const navigate = useNavigate();
  const searchParams = useParams();
  const [eventData, setEventData] = useState();
  const [relatedEvents, setRelatedEvents] = useState([]);
  const [markerLocation, setMarkerLocation] = useState({
    lat: 51.509865,
    lng: -0.118092,
  });
  useEffect(() => {
    console.log(searchParams.eventname)
    loadEventData(searchParams.eventname);
  }, [searchParams])
  const loadLocation = (address) => {
    geocode(RequestType.ADDRESS, address, {
        key: "AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao",
        language: "en",
        region: "us",
      })
      .then((response) => {
        const { lat, lng } = response.results[0].geometry.location;
        setMarkerLocation({ lat, lng });
      })
      .catch((error) => {
        console.log(error);
      })
  }
  const loadEventData = (eventname) => {
    const eventObj = eventlist.find(item => item.postName == eventname);
    setEventData(eventObj);
    let tempEvents = eventlist.filter(item => item.postName !== eventname);
    console.log(tempEvents);
    tempEvents = sortArrList(tempEvents)
    setRelatedEvents(tempEvents.splice(0, 4));
    const addressStr = `${eventObj.addressData.address} ${eventObj.addressData.city} ${eventObj.addressData.state} ${eventObj.addressData.zip} ${eventObj.addressData.country}`;
    loadLocation(addressStr)
  }

  const eventNavigation = (eventname) => {
    navigate(`/event/${eventname}`);
  }
  const onHandleNextEvent = () => {
    const eventObj = eventlist.find(item => item.postName != eventData.postName);
    navigate(`/event/${eventObj.postName}`);
  }
  return (
    <div className="w-full overflow-hidden bg-[#F3F4F4]">
      <HomeHeader headerColor={'#F9F9F9'} textColor={'#021744'}/>
      <div className="news-page bg-[#F9F9F9]">
        {eventData && <Box className="w-full mt-24">
          <Container maxWidth="lg">
            <Box className='w-full pt-14'>
             <Grid2 container spacing={{xs: 12, sm: 12, md: 12, lg: 12, xl: 12}}>
              <Grid2 size={12}>
                <div className="w-full relative aspect-[300/200] rounded-2xl" style={{backgroundImage: `url(${eventData.postMedia})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                  <img src={eventData.postMedia} alt="blog-img" className="w-full aspect-[300/200] rounded-2xl opacity-0"/>
                   <Box sx={{background: 'linear-gradient(0deg, #22c0b1, #22c0b1, #ffffff00)'}} className="absolute bottom-0 w-full py-9 px-4 rounded-b-2xl">
                    <h4 className="cursor-pointer text-[42px] leading-[54.6px] text-white">
                      <span className="font-bold">{eventData?.title}</span>
                    </h4>
                    <h4 className="cursor-pointer text-[42px] leading-[54.6px] text-white">
                      <span className="font-medium">{printEventDates(eventData)}</span>
                    </h4>
                  </Box>
                </div>
              </Grid2>
              <Grid2 size={{xs: 12, sm: 12, md: 4, lg: 4, xl: 4}}>
                <Box className="text-left py-3">
                  <div className="w-full h-[300px] mb-7">
                    <Map
                      style={{ borderRadius: "20px" }}
                      defaultZoom={13}
                      defaultCenter={markerLocation}
                      gestureHandling={"greedy"}
                      disableDefaultUI
                    >
                      <Marker position={markerLocation} />
                    </Map>
                  </div>
                  <CalendarDownMenu eventObj={eventData} />
                </Box>
              </Grid2>
              <Grid2 size={{xs: 12, sm: 12, md: 8, lg: 8, xl: 8}}>
                <Box className="py-3 text-left">
                  <h3 className="text-[22px] font-semibold py-2">
                    <HouseOutlinedIcon className="mx-2"/>
                    WebSite
                  </h3>  
                  <p className="pl-2">
                    <a className="break-words underline text-[#22c0b1]" href={eventData.eventUrl}>
                      {eventData.eventUrl}
                    </a>
                  </p>
                  
                  <h3 className="text-[22px] font-semibold py-2">
                    <RoomIcon className="mx-2"/>
                    Address
                  </h3>  
                  <h5 className="pl-2 font-semibold py-2">
                    {eventData.addressData.title}
                  </h5>
                  <p className="pl-2 underline">
                    {eventData.addressData.address}
                  </p>
                  <p className="pl-2 underline">
                    {eventData.addressData.city} {eventData.addressData.state} {eventData.addressData.zip} {eventData.addressData.country}
                  </p>
                  <h3 className="text-[22px] font-semibold py-2">
                    <PhoneSharpIcon className="mx-2"/>
                    Phone
                  </h3>  
                  <p className="pl-2 underline">
                    {eventData.addressData.phone}
                  </p>
                </Box>
              </Grid2>
             </Grid2>
            </Box>
          </Container>
          <Divider />
          <Container maxWidth="md">
            <Box className="w-full py-8">
              <button onClick={() => {onHandleNextEvent()}} className="mx-2 px-4 py-2 rounded-full border border-[#D1D5DB] text-[14px] leading-[20px]">
                Previous
              </button>
              <button onClick={() => {onHandleNextEvent()}} className="mx-2 px-4 py-2 rounded-full border border-[#D1D5DB] text-[14px] leading-[20px]">
                Next
              </button>
            </Box>
          </Container>
        </Box>}
        <Box className="w-full bg-[#F3F4F4] py-20">
          <Container maxWidth="lg">
            <Box className="w-full">
              <Box className="w-full" display={"flex"} flexDirection={{xs: "column", sm: "column", md: "row", lg: "row", xl: "row"}} justifyContent={"space-between"} alignItems={{xs: "flex-start", sm: "flex-start", md: "center", lg: "center", xl: "center"}}>
                <h4 className="text-[42px] leading-[54.6px] font-medium" >Relevant Articles</h4>
                <Link to={'/blogs/events'}>
                  <button className="text-[18px] font-medium leading-[24px] rounded-full border border-[#021744] hover:bg-[#021744] hover:text-white px-8 py-4">
                    View all Events
                  </button>
                </Link>
              </Box>
              <Box className="w-full py-14">
                <Grid2 container spacing={{xs: 12, sm: 12, md: 3, lg: 3, xl: 3}}>
                  {relatedEvents.map((blogItem, key) => (
                    <Grid2 key={key} onClick={() => {eventNavigation(blogItem.postName)}} size={{xs: 12, sm: 12, md: 3, lg: 3, xl: 3}} display={"flex"} flexDirection={"column"} justifyContent={"space-between"} marginTop={2}>
                      <div className="w-full">
                        <div className="w-full aspect-video rounded-xl hover:scale-105" style={{backgroundImage: `url(${blogItem.postMedia})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                        </div>
                        <h5 className="text-start text-[24px] leading-[32px] font-normal line-clamp-2 my-5">
                          {blogItem.title}
                        </h5>
                      </div>
                      
                      <div className="w-full text-start my-4">
                        <span>{printEventDates(blogItem)}</span>
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
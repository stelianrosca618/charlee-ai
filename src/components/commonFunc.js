import moment from "moment/moment";

export const calculateCreatedAgo = (blogItem) => {
  let timeAgoStr = '2 days ago';
  const nowDate = new Date();
  const createDate = new Date(blogItem.postDate);
  
  const timeDifferenceMS = nowDate - createDate;
  const timeDifferenceHours = Math.floor(timeDifferenceMS / 3600000);
  
  if(timeDifferenceHours > 23){
    const timeDifferenceDays = Math.floor(timeDifferenceMS / 86400000);
    if(timeDifferenceDays > 30){
      const timeDifferenceMonths = Math.floor(timeDifferenceDays / 30);
      if(timeDifferenceMonths > 12){
        const timeDifferenceYears = Math.floor(timeDifferenceMonths / 12);
        timeAgoStr = `${timeDifferenceYears} years ago`;  
      }else{
        timeAgoStr = `${timeDifferenceMonths} months ago`;    
      }
    }else{
      timeAgoStr = `${timeDifferenceDays} days ago`;  
    }
  }else{
    timeAgoStr = `${timeDifferenceHours} hours ago`;
  }
  
  return timeAgoStr;
}

export const printEventDates = (eventItem) => {
  const startDate = new Date(eventItem.eventStartDate);
  const startDateStr = startDate.toLocaleDateString(undefined, 
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
  );
  const endDate = new Date(eventItem.eventEndDate)
  const endDateStr = endDate.toLocaleDateString(undefined, 
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
  );
  return `${startDateStr} - ${endDateStr}`;
}

export const upcommingEvent = (eventList) => {
  const nowDate = new Date();
  const tmpArr = eventList.sort((a, b) => {
    const aStartDate = new Date(a.eventStartDate);
    const createA = (aStartDate - nowDate);

    const bStartDate = new Date(b.eventStartDate);
    const createB = (bStartDate - nowDate);
    console.log('createA', createA);
    console.log('createB', createB);
    return createB - createA;
  
  });

  
  // const tmpArr = eventList.filter(item => {
  //   const startDate = new Date(item.eventStartDate);
  //   return  0-(startDate - nowDate);
  // });
  return tmpArr;
}

export const previousEvents = (eventList) => {
  const nowDate = new Date();
  const tmpArr = eventList.filter(item => {
    const startDate = new Date(item.eventStartDate);
    return  0-(startDate - nowDate);
  });
  return tmpArr;
}


export const eventSort = (eventList) => {
  const tmpArr = eventList.sort((a, b) => {
    const createA = new Date(a.eventStartDate);
    const createB = new Date(b.eventStartDate);
    
    return createB - createA
  
  });
return tmpArr;
}

export const sortArrList = (arrList) => {

    const tmpArr = arrList.sort((a, b) => {
        const createA = new Date(a.postDate);
        const createB = new Date(b.postDate);
        
        return createB - createA
      
      });
    return tmpArr;
}

export const getGoogleCalendarUrl = (info) => {
	let utcMomentObject = moment(new Date(info.eventStartDate)).utc();
	let googleCalendarUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE&dates=" + utcMomentObject.format("YYYYMMDDTHHmmss") + "Z%2F" + utcMomentObject.add(30, 'minutes').format("YYYYMMDDTHHmmss") + "Z&details=" + encodeURIComponent(info.title) + "&text=" + info.title;
	return googleCalendarUrl;
}

export const getOutlookLiveCalendarUrl = (info) => {
	let utcStartObject = moment(new Date(info.eventStartDate)).utc();
  let utcEndObject = moment(new Date(info.eventEndDate)).utc();
  let outlookCalendarUrl = `https://outlook.live.com/owa/?path=/calendar/action/compose&rrv=addevent&startdt=${utcStartObject.format("YYYY-MM-DDTHH")}&enddt=${utcEndObject.format("YYYY-MM-DDTHH")}&location=${info.addressData.title},%20${info.addressData.address},%20${info.addressData.city},%20${info.addressData.state},%20${info.addressData.zip},%20${info.addressData.country}&subject=${info.title}&body`;
	// let outlookCalendarUrl = "https://outlook.live.com/calendar/0/action/compose?allday=false&body=" + encodeURIComponent(info.title) + "&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=" + utcMomentObject.format("YYYY-MM-DDTHH") + "%3A" + utcMomentObject.format("mm") + "%3A" + utcMomentObject.format("ss") + "%2B00%3A00&subject=" + info.title;
	return outlookCalendarUrl;
}

export const getOutlookOfficeCalendarUrl = (info) => {
  let utcStartObject = moment(new Date(info.eventStartDate)).utc();
  let utcEndObject = moment(new Date(info.eventEndDate)).utc();
  let outlookCalendarUrl = `https://outlook.office.com/owa/?path=/calendar/action/compose&rrv=addevent&startdt=${utcStartObject.format("YYYY-MM-DDTHH")}&enddt=${utcEndObject.format("YYYY-MM-DDTHH")}&location=${info.addressData.title},%20${info.addressData.address},%20${info.addressData.city},%20${info.addressData.state},%20${info.addressData.zip},%20${info.addressData.country}&subject=${info.title}&body`;
  // let outlookCalendarUrl = "https://outlook.live.com/calendar/0/action/compose?allday=false&body=" + encodeURIComponent(info.title) + "&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=" + utcMomentObject.format("YYYY-MM-DDTHH") + "%3A" + utcMomentObject.format("mm") + "%3A" + utcMomentObject.format("ss") + "%2B00%3A00&subject=" + info.title;
  return outlookCalendarUrl;
}
export const getiCalendarUrl = (info) => {
  let utcMomentObject = moment(new Date(info.eventStartDate)).utc();
  const icalendarUrl = `webcal://charlee.ai/blogs/events/${info.title}/?ical=1`
  // let icsFileContent = "BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:AXION-MEETINGS\nMETHOD:REQUEST\nBEGIN:VEVENT\nDTSTART:" + utcMomentObject.format("YYYYMMDDTHHmmss") + "Z\n" + "ORGANIZER;CN=Hive Calendar:mailto: \nUID:" + info.venueId + "\nSEQUENCE:0\nDTSTAMP:" + moment().utc().format("YYYYMMDDTHHmmss") + "Z\nSUMMARY:" + info.title + "\nLOCATION:Hive Meeting System\nDESCRIPTION:" + info.title.replaceAll("\n", "\\n") + "\nSTATUS:CONFIRMED\nEND:VEVENT\nEND:VCALENDAR";
  // let icsFileUrl = "data:text/calendar;charset=utf8," + encodeURIComponent(icsFileContent);
  return icalendarUrl;
}
// export const getIcsFileContent = (info) => {
// 	const utcMomentObject = moment(new Date(info.eventStartDate)).utc();
// 	let sequence = 1;
// 	if (info.icsFile && info.icsFile.includes("SEQUENCE:")) {
// 		sequence = Number(info.icsFile.split("SEQUENCE:")[1].split("\n")[0]) + 1;
// 	}
// 	let organizerEmail = window._hudProfile.email;
// 	let attendeeEmails = info.participants.filter(item => item !== organizerEmail);
// 	let attendeeEmailString = "";
// 	attendeeEmails.map(email => {
// 		attendeeEmailString += "\nATTENDEE;CN=" + email + ":mailto:" + email;
// 	})
// 	let dtStamp = null;
// 	if (info.icsFile && info.icsFile.includes("DTSTAMP:")) {
// 		dtStamp = Number(info.icsFile.split("DTSTAMP:")[1].split("\n")[0]);
// 	}
// 	if (!dtStamp) {
// 		dtStamp = moment().utc().format("YYYYMMDDTHHmmss") + "Z";
// 	}
// 	const icsFileContent = "BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:AXION-MEETINGS\nMETHOD:REQUEST\nBEGIN:VEVENT\nDTSTART:" + utcMomentObject.format("YYYYMMDDTHHmmss") + "Z\n" + "ORGANIZER;CN=Hive Calendar:mailto:" + organizerEmail + "\nUID:" + info.uuid + attendeeEmailString + "\nSEQUENCE:" + sequence + "\nDTSTAMP:" + dtStamp + "\nSUMMARY:" + info.title + "\nLOCATION:Hive Meeting System\nDESCRIPTION:" + info.description.replaceAll("\n", "\\n") + "\nSTATUS:CONFIRMED\nEND:VEVENT\nEND:VCALENDAR";
// 	return icsFileContent;
// }

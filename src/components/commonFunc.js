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
      month: 'long',
      day: 'numeric',
    }
  );
  const endDate = new Date(eventItem.eventEndDate)
  const endDateStr = startDate.toLocaleDateString(undefined, 
    {
      month: 'long',
      day: 'numeric',
    }
  );
  return `${startDateStr} - ${endDateStr}`;
}

export const sortArrList = (arrList) => {

    const tmpArr = arrList.sort((a, b) => {
        const createA = new Date(a.postDate);
        const createB = new Date(b.postDate);
        
        return createB - createA
      
      });
    return tmpArr;
}
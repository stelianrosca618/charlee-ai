import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { getGoogleCalendarUrl, getiCalendarUrl, getOutlookLiveCalendarUrl, getOutlookOfficeCalendarUrl } from '../../commonFunc';

export const CalendarDownMenu = ({eventObj}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onHandleGoogleCalendar = () => {
    console.log('Google Calendar', eventObj);
    const googleCalendarUrl = getGoogleCalendarUrl(eventObj);
    window.open(googleCalendarUrl, '_blank');
    handleClose();
  }

  const onhandleOutlookLiveCalendar = () => {
    console.log('Outlook Live Calendar', eventObj);
    const outlookLiveCalendarUrl = getOutlookLiveCalendarUrl(eventObj);
    window.open(outlookLiveCalendarUrl, '_blank');
    handleClose();
  }

  const onHandleOutlookOfficeCalendar = () => {
    console.log('Outlook Office Calendar', eventObj);
    const outlookOfficeCalendarUrl = getOutlookOfficeCalendarUrl(eventObj);
    window.open(outlookOfficeCalendarUrl, '_blank');
    handleClose()
  }
  const onhandleICalenadar = () => {
    console.log('iCalendar', eventObj);
    const icalendarUrl = getiCalendarUrl(eventObj);
    window.open(icalendarUrl, '_blank');
    handleClose()
  }
  return (
    <div>
      <button
        className='bg-[#22c0b1] hover:bg-[#189286] text-white py-2 px-8 rounded'
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Dashboard
      </button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => { onHandleGoogleCalendar() }}>
          Google Calendar
        </MenuItem>
        <MenuItem onClick={() => {onhandleICalenadar()}}>
          iCalendar
        </MenuItem>
        <MenuItem onClick={() => { onHandleOutlookOfficeCalendar() }}>
          Outlook 365
        </MenuItem>
        <MenuItem onClick={() => { onhandleOutlookLiveCalendar() }}>
          Outlook Live
        </MenuItem>
      </Menu>
    </div>
  )
}
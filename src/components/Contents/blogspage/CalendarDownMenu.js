import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export const CalendarDownMenu = ({eventObj}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
        <MenuItem onClick={handleClose}>
          Google Calendar
        </MenuItem>
        <MenuItem onClick={handleClose}>
          iCalendar
        </MenuItem>
        <MenuItem onClick={handleClose}>
          Outlook 365
        </MenuItem>
        <MenuItem onClick={handleClose}>
          Outlook Live
        </MenuItem>
      </Menu>
    </div>
  )
}
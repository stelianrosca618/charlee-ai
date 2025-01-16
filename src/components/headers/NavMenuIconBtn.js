import { Box, Menu, MenuItem } from "@mui/material"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { NavIcon } from "../Icons/NavIcon"

export const NavMenuIconBtn = ({bgColor, textColor}) => {
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleNavManu = (path) => {
    navigate(path);
    handleClose();
  }
  return(
    <Box className="pl-3">
      <div className=""
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      > 
        <NavIcon iconColor={textColor} />
      </div>
      
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
          }}
          transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
          }}
        sx={{
          // paddingTop: '80px',
          '& .MuiPaper-root': {
          top: '80px',
          width: "fix-content",
          maxWidth: "fit-content",
          background: bgColor,
          color: textColor,
          
            },
          "& .MuiPaper-elevation": {
            top: '80px !important'
          },
        }}
      >
         <MenuItem sx={{color: textColor}} onClick={() => handleNavManu('/blogs/news')}>News</MenuItem>
         <MenuItem sx={{color: textColor}} onClick={() => handleNavManu('/blogs/events')}>Events</MenuItem>
         <MenuItem sx={{color: textColor}} onClick={() => handleNavManu('/blogs/podcasts')}>Podcasts</MenuItem>
         <MenuItem sx={{color: textColor}} onClick={() => handleNavManu('/blogs/blog')}>Blogs</MenuItem>
      </Menu>
    </Box>
  )
}
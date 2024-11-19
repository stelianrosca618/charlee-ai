import { Box, Menu, MenuItem } from "@mui/material"
import { useState } from "react"
import navIco from "../../assets/imgs/icons/NavIco.svg"

export const MobileMenu = () =>{
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return(
    <Box className="pl-3 block md:hidden">
      <img src={navIco}  alt="nav-ico" 
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className="h-5"/>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{
          width: '100vw',
          top: '30px',
          '& MuiPaper-root': {
            background: '#091d48',
            color: "white"
          }
        }}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem className="w-screen bg-[#091d48] text-white" onClick={handleClose}>Profile</MenuItem>
        <MenuItem className="w-screen bg-[#091d48] text-white" onClick={handleClose}>My account</MenuItem>
        <MenuItem className="w-screen bg-[#091d48] text-white" onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </Box>
  )
}
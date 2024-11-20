import { Box, Menu, MenuItem } from "@mui/material"
import { useState } from "react"
import navIco from "../../assets/imgs/icons/NavIco.svg"
import { useNavigate } from "react-router-dom"

export const MobileMenu = ({bgColor}) =>{
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
  }
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
          '& .MuiPaper-root': {
            background: bgColor,
            color: "white"
          }
        }}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem className="w-screen text-white" sx={{borderBottom: '1px solid #ffffff6e'}} onClick={() => handleNavManu('/product')}>Products</MenuItem>
        <MenuItem className="w-screen text-white" sx={{borderBottom: '1px solid #ffffff6e'}} onClick={() => handleNavManu('/about')}>About</MenuItem>
        <MenuItem className="w-screen text-white" sx={{borderBottom: '1px solid #ffffff6e'}} onClick={()=>handleNavManu('/parteners')}>Parteners</MenuItem>
        <MenuItem className="w-screen text-white" sx={{borderBottom: '1px solid #ffffff6e'}} onClick={() => handleNavManu('/solutions')}>Solutions</MenuItem>
        <MenuItem className="w-screen text-white" sx={{borderBottom: '1px solid #ffffff6e'}} onClick={() => handleNavManu('/connect')}>Connect</MenuItem>
      </Menu>
    </Box>
  )
}
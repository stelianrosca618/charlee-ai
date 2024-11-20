import { Box, Menu, MenuItem } from "@mui/material"
import { useState } from "react"
import navIco from "../../assets/imgs/icons/NavIco.svg"
import { useNavigate } from "react-router-dom"
import { NavIcon } from "../Icons/NavIcon"

export const MobileMenu = ({bgColor, textColor}) =>{
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
      <div className="w-fit h-fit"
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
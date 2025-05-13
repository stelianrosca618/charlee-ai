import { Box, Collapse, Menu, MenuItem } from "@mui/material"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { NavIcon } from "../Icons/NavIcon"
import { ExpandLess, ExpandMore } from "@mui/icons-material";

export const MobileMenu = ({bgColor, textColor}) =>{
  const navigate = useNavigate()
  const [openProducts, setOpenProducts] = useState(false);
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
        <List>
          <ListItem disablePadding onClick={() => {setOpenProducts(!openProducts)}}>
            <MenuItem className="w-screen" sx={{borderBottom: `1px solid ${textColor}`, color: textColor, display: 'flex', justifyContent: "space-between"}} >
              Products
              {openProducts ? <ExpandLess /> : <ExpandMore />}
            </MenuItem>
          </ListItem>
          <Collapse in={openProducts} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem disablePadding>
                <MenuItem className="w-screen" sx={{paddingLeft: '2em', color: textColor, borderBottom: `1px solid ${textColor}`}} 
                  onClick={() => handleNavManu('/product/askcharlee')}>
                  AskCharlee
                </MenuItem>
              </ListItem>
              <ListItem disablePadding>
                <MenuItem className="w-screen" sx={{paddingLeft: '2em', color: textColor, borderBottom: `1px solid ${textColor}`}} 
                  onClick={() => handleNavManu('/product/seecharlee')}>
                  4SeeCharlee
                </MenuItem>
              </ListItem>
              <ListItem disablePadding>
                <MenuItem className="w-screen" sx={{paddingLeft: '2em', color: textColor, borderBottom: `1px solid ${textColor}`}} 
                  onClick={() => handleNavManu('/product/docucharlee')}>
                  DocuCharlee
                </MenuItem>
              </ListItem>
              <ListItem disablePadding>
                <MenuItem className="w-screen" sx={{paddingLeft: '2em', color: textColor, borderBottom: `1px solid ${textColor}`}} 
                  onClick={() => handleNavManu('/product/findcharlee')}>
                  FindCharlee
                </MenuItem>
              </ListItem>
            </List>
          </Collapse>
          <ListItem disablePadding>
            <MenuItem className="w-screen " sx={{color: textColor, borderBottom: `1px solid ${textColor}`}} onClick={() => handleNavManu('/about')}>About</MenuItem>    
          </ListItem>
          <ListItem disablePadding>
            <MenuItem className="w-screen " sx={{color: textColor, borderBottom: `1px solid ${textColor}`}} onClick={()=>handleNavManu('/partners')}>Partners</MenuItem>
          </ListItem>
          <ListItem disablePadding>
            <MenuItem className="w-screen " sx={{color: textColor, borderBottom: `1px solid ${textColor}`}} onClick={() => handleNavManu('/solutions')}>Solutions</MenuItem>
          </ListItem>
          <ListItem disablePadding>
            <MenuItem className="w-screen " sx={{color: textColor, borderBottom: `1px solid ${textColor}`}} onClick={() => handleNavManu('/connect')}>Contact Us</MenuItem>
          </ListItem>
          <ListItem disablePadding>
            <MenuItem className="w-screen " sx={{color: textColor, borderBottom: `1px solid ${textColor}`}} onClick={() => handleNavManu('/blogs/news')}>News</MenuItem>
          </ListItem>
          <ListItem disablePadding>
            <MenuItem className="w-screen " sx={{color: textColor, borderBottom: `1px solid ${textColor}`}} onClick={() => handleNavManu('/blogs/events')}>Events</MenuItem>
          </ListItem>
          <ListItem disablePadding>
            <MenuItem className="w-screen " sx={{color: textColor, borderBottom: `1px solid ${textColor}`}} onClick={() => handleNavManu('/blogs/podcasts')}>Podcasts</MenuItem>
          </ListItem>
          <ListItem disablePadding>
            <MenuItem className="w-screen " sx={{color: textColor, borderBottom: `1px solid ${textColor}`}} onClick={() => handleNavManu('/blogs')}>Blogs</MenuItem>
          </ListItem>
        </List>

      </Menu>
    </Box>
  )
}
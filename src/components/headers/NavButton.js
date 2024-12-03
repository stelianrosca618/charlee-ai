import { Box, Menu, MenuItem } from "@mui/material"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export const NavButton = ({navInfo, isActive, textColor, bgColor}) => {
	const navigate = useNavigate();
	const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
	const onLinkMenu = (pathlink) => {
		navigate(pathlink);
		handleClose();
	}
  return (
		<Box className="px-3">
			{navInfo.isParent == true? <>
					<button 
						onMouseEnter={handleClick}
						style={{color: textColor}} 
						className={`text-[${textColor}] group font-medium text-[18px] leading-[24px] relative`}
					>
						{navInfo.name}
						<span style={{background: textColor}} className={open? `absolute -bottom-1 left-0 transition-all h-0.5 w-full`:`absolute -bottom-1 left-0 w-0 transition-all h-0.5 group-hover:w-full`}></span>
					</button>
					<Menu
					id="basic-menu"
					anchorEl={anchorEl}
					getContentAnchorEl={null}
					open={open}
					onClose={handleClose}

					sx={{top: '80px',
						'& .MuiPaper-root': {
						width: "fix-content",
						maxWidth: "fit-content",
            background: bgColor,
            color: textColor,
						
          },
					"& .MuiPaper-elevation": {
						top: '0px !important'
					},
					"& .MuiBackdrop-root": {
							top: '80px'
						}
					}}
					
				>
					{navInfo.childs.map(((chileNav, key) => (
							<MenuItem onClick={()=> onLinkMenu(chileNav.pathName)}>
								<button 
									style={{color: textColor}} 
									className={`text-[${textColor}] group font-medium text-[18px] leading-[24px] relative`}
								>
									{chileNav.name}
									<span style={{background: textColor}} className={`absolute -bottom-1 left-0 w-0 transition-all h-0.5 group-hover:w-full`}></span>
								</button>
							</MenuItem>
						)))
					}
				</Menu>
			</>:
				<Link to={navInfo.pathName}>
					<button style={{color: textColor}} className={`text-[${textColor}] group font-medium text-[18px] leading-[24px] relative`}>
						{navInfo.name}
						<span style={{background: textColor}} className={isActive? `absolute -bottom-1 left-0 transition-all h-0.5 w-full`:`absolute -bottom-1 left-0 w-0 transition-all h-0.5 group-hover:w-full`}></span>
					</button>
				</Link>
			}
			
		</Box>
	)
}
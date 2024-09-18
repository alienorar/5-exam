import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';

const options = [
    'Model-x',
    'Model-s',
    'Model-y',
    'Solar Roof',
    'Solar Panels',
];

const ITEM_HEIGHT = 48;

export default function LongMenu() {
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
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <span className='text-gray-500 hover:bg-gray-300 px-1 py-1 rounded-full flex items-center'>
                    <MenuIcon />
                </span>
            </IconButton>
            <Menu
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        height: '100vh',       
                        width: '60vw',         
                        margin: 0,              
                        top: 0,                  
                        left: 0,                 
                        right: 0,                 
                        display: 'flex',         
                        flexDirection: 'column', 
                        justifyContent: 'center', 
                        alignItems: 'center',
                        backdropFilter: 'blur(10px)',
                        backgroundColor: 'rgba(0, 0, 0, 0.6)', 
                    },
                }}
                anchorReference="none"
                disableAutoFocusItem
            >
                {options.map((option) => (
                    <MenuItem
                        key={option}
                        selected={option === 'Pyxis'}
                        onClick={handleClose}
                        style={{
                            color: 'white',
                            fontSize: '1.25rem',
                            textAlign: 'center',
                        }}
                    >
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}

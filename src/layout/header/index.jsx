import { AppBar } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import { styled, alpha } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Menu from '../../pages/menu/index';
import MainLogo from '../../assets/main-logo.svg';
import { HeaderLinks } from '../../pages';

const drawerWidth = 240;

const Header = () => {
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: 'transparent',
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 1),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
    }));

    return (
        <AppBar
            position="sticky"
            sx={{ backgroundColor: 'transparent' }}
            className="flex justify-between"
        >
            <Toolbar>
                <div className="flex justify-between w-full p-2 items-center gap-4">
                    <div>
                        <img src={MainLogo} alt="main-logo" />
                    </div>
                    <nav className="hidden lg:block">
                        <div className="flex gap-4 items-center">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive
                                        ? 'border-[2px] border-blue rounded-full px-2 py-1 text-blue transition duration-150 ease-linear'
                                        : 'border-[2px] border-transparent hover:border-blue rounded-full px-2 py-1 hover:text-blue transition duration-150 ease-linear'
                                }
                            >
                                Model S
                            </NavLink>
                            <NavLink
                                to="/modelTwo"
                                className={({ isActive }) =>
                                    isActive
                                        ? 'border-[2px] border-white rounded-full px-2 py-1 text-white transition duration-150 ease-linear'
                                        : 'border-[2px] border-transparent hover:border-white rounded-full px-2 py-1 hover:text-white transition duration-150 ease-linear'
                                }
                            >
                                Model 3
                            </NavLink>
                            <NavLink
                                to="/modelThree"
                                className={({ isActive }) =>
                                    isActive
                                        ? 'border-[2px] border-white rounded-full px-2 py-1 text-white transition duration-150 ease-linear'
                                        : 'border-[2px] border-transparent hover:border-white rounded-full px-2 py-1 hover:text-white transition duration-150 ease-linear'
                                }
                            >
                                Model X
                            </NavLink>
                            <NavLink
                                to="/modelFour"
                                className={({ isActive }) =>
                                    isActive
                                        ? 'border-[2px] border-white rounded-full px-2 py-1 text-white transition duration-150 ease-linear'
                                        : 'border-[2px] border-transparent hover:border-white rounded-full px-2 py-1 hover:text-white transition duration-150 ease-linear'
                                }
                            >
                                Model Y
                            </NavLink>
                            <NavLink
                                to="/solarRoof"
                                className={({ isActive }) =>
                                    isActive
                                        ? 'border-[2px] border-white rounded-full px-2 py-1 text-white transition duration-150 ease-linear'
                                        : 'border-[2px] border-transparent hover:border-white rounded-full px-2 py-1 hover:text-white transition duration-150 ease-linear'
                                }
                            >
                                Solar roof
                            </NavLink>
                            <NavLink
                                to="/panels"
                                className={({ isActive }) =>
                                    isActive
                                        ? 'border-[2px] border-white rounded-full px-2 py-1 text-white transition duration-150 ease-linear'
                                        : 'border-[2px] border-transparent hover:border-white rounded-full px-2 py-1 hover:text-white transition duration-150 ease-linear'
                                }
                            >
                                Panels
                            </NavLink>
                        </div>
                    </nav>
                    <div className="flex gap-2 items-center">
                        <div className="block lg:hidden hover:bg-gray-400 rounded-full px-1 py-1 transition duration-150 ease-linear">
                            <SearchIcon />
                        </div>
                        <Search className="hidden lg:block">
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                        <div className="block lg:hidden">
                            <HeaderLinks />
                        </div>
                    </div>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;

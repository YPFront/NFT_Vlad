import { Box, Drawer, IconButton, Link, MenuItem, Typography, useMediaQuery, Collapse, InputAdornment, InputBase, Paper, Slide } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import clsx from 'clsx';
import Logo from 'src/assets/img/logo.svg';
import LogoText from 'src/assets/img/logo_text.svg';
import Profile_photo from 'src/assets/img/profile_photo.svg';
import PortionButton from '../../components/PortionButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from 'src/assets/img/icon_search.svg';
import { useState } from 'react';

import ExpandLess from "@material-ui/icons/ExpandLess";

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    background: 'transparent',
    color: theme.palette.common.white,
    boxShadow: 'none',
    height: 100,
    overflow: 'hidden'
  },
  primaryAppBar: {
    background: theme.palette.primary.dark
  },
  buttonGroup: {
    color: theme.palette.common.white,
    minWidth: 570,
    justifyContent: 'space-around',
    '& .MuiToggleButton-root': {
      color: theme.palette.common.white,
      borderColor: 'transparent',
      padding: '6px 22px',
      borderRadius: 50,
      fontWeight: 700,
      fontSize: 18,
      lineHeight: '27px',
      height: 'min-content',
      '&:hover': {
        borderColor: theme.palette.common.white,
      },
      '&.Mui-selected': {
        borderColor: 'transparent',
        backgroundColor: theme.palette.primary.light,
      },
    },
  },
  searchDrawer: {
    '&.MuiDrawer-root': {
      position: 'absolute',
    },
    '& .MuiBackdrop-root': {
      backgroundColor: 'unset'
    },
    '& .MuiDrawer-paper': {
      height: 'auto',
      position: 'absolute',
      marginRight: 264,
      top: 20,
      borderRadius: 10,
    }
  },
  searchIcon: {
    position: "absolute",
    padding: "unset",
    right: 279
  },
  searchTextField: {
    width: 'calc(100vw - 640px)',
    background: 'white',
    padding: "13px 20px",
  },
  toolBar: {
    height: 100,
    paddingTop: 24,
    paddingBottom: 24,
    minHeight: 'unset',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'space-between',
    },
  },
  logo: {
    'margin-right': '15px',
    'vertical-align': 'middle',
  },
  icon: {
    padding: theme.spacing(1),
  },
  marginLeft: {
    marginLeft: '30px',
  },
  iconButton: {
    background: theme.palette.common.white,
    padding: '4px 8px',
    borderRadius: 50,
    display: 'inline-flex',
    position: 'relative',
    '& svg': {
      fill: theme.palette.common.black,
      width: 25,
      height: 25
    },
    '& img': {
      borderRadius: '50%',
      border: '2px solid',
      borderColor: theme.palette.primary.main,
      background: theme.palette.common.white,
    },
    '&:hover': {
      background: theme.palette.primary.main,
    },
  },
  activeProfile: {
    '& .profile-badge': {
      content: ' ',
      width: 12,
      height: 12,
      display: 'block',
      backgroundColor: theme.palette.primary.dark,
      position: 'absolute',
      borderRadius: '50%',
      top: -2,
      right: 0,
    },
  },
  drawerContainer: {
    background: theme.palette.common.white,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    '& a': {
      padding: 15,
      textDecoration: 'none',
      fontWeight: 'bold',
      fontSize: 24,
      color: theme.palette.secondary.dark,
      '&:hover': {
        textDecoration: 'none',
        background: theme.palette.secondary.main,
        color: theme.palette.common.white,
      },
    },
  },
  transparentHeader: {
    background: '#000000CC'
  },
  '.MuiBackdrop-root': {
    top: 100,
  },
}));

const Header = (props: { login?: boolean, color?: string, active?: string, transparent?: boolean, search?:boolean}) => {
  const { login, color, transparent, active, search} = props;
  const classes = useStyles();
  const theme = useTheme();
  const mediaMatches = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const handleSearchOpen = () => setSearchOpen(true);
  const handleSearchClose = () => setSearchOpen(false);


  return (
    <AppBar className={clsx(classes.appBar, color == 'primary' ? classes.primaryAppBar : '', classes.transparentHeader)} position='absolute'>
      {mediaMatches == false ? (
        <Toolbar className={clsx(classes.toolBar, 'container')}>
          <Box width={1} display='flex' flexDirection='row' justifyContent='space-between' alignItems='center'>
            <Box display='flex' flexDirection='row'>
              <Link href='#'>
                <img src={Logo} />
              </Link>
              <Box className={classes.marginLeft}>
                <img src={LogoText} />
              </Box>
            </Box>
            <ToggleButtonGroup value={active ? active : 'drops'} className={classes.buttonGroup} exclusive>
              <ToggleButton value='drops' aria-label='Drops'>
                Drops
                </ToggleButton>
              <ToggleButton value='marketplace' aria-label='Marketplace'>
                Marketplace
                </ToggleButton>
              <ToggleButton value='activity' aria-label='Activity'>
                Activity
                </ToggleButton>
              <ToggleButton value='create' aria-label='Create'>
                Create
                </ToggleButton>
            </ToggleButtonGroup>
            {search && <Drawer
              {...{
                anchor: 'right',
                className: classes.searchDrawer,
                open: searchOpen,
                onClose: handleSearchClose
              }}
            >
              <InputBase
                className={classes.searchTextField}
                startAdornment={<InputAdornment position="start"><img src={SearchIcon} /></InputAdornment>}
                placeholder="Search items, collections and accounts"
                style={{ fontSize: 18 }}
              />
            </Drawer>}
            <Box display="flex" flexDirection='row'>
              {search && <IconButton
                {...{
                  className: classes.searchIcon,
                  onClick: handleSearchOpen,
                }}
              >
                <img src={SearchIcon} />
              </IconButton>}

              {login == true ? (
                <div>
                  <IconButton
                    {...{
                      edge: 'end',
                      color: 'inherit',
                      'aria-label': 'menu',
                      'aria-haspopup': 'true',
                      className: clsx(classes.iconButton, classes.activeProfile),
                      onClick: handleDrawerOpen,
                    }}
                  >
                    <MenuIcon />
                    <img src={Profile_photo} />
                    <div className="profile-badge"></div>
                  </IconButton>
                  <Drawer
                    {...{
                      anchor: 'top',
                      open: drawerOpen,
                      onClose: handleDrawerClose,
                    }}
                  >
                    <div className={classes.drawerContainer}>
                      <Link href='#'>Drops</Link>
                      <Link href='#'>Marketplace</Link>
                      <Link href='#'>Activity</Link>
                      <Link href='#'>Create</Link>
                    </div>
                  </Drawer>
                </div>
              ) : (
                <Box className={classes.marginLeft}>
                  <PortionButton color='inherit' radius='hard'>
                    Connect Wallet
              </PortionButton>
                </Box>
              )}
            </Box>
          </Box>
        </Toolbar>
      ) : (
        <Toolbar className={clsx(classes.toolBar, 'container')}>
          <Link href='#'>
            <img src={Logo} />
          </Link>
          <IconButton
            {...{
              edge: 'end',
              color: 'inherit',
              'aria-label': 'menu',
              'aria-haspopup': 'true',
              className: clsx(classes.iconButton, classes.activeProfile),
              onClick: handleDrawerOpen,
            }}
          >
            <MenuIcon />
            <img src={Profile_photo} />
          </IconButton>
          <Drawer
            {...{
              anchor: 'top',
              open: drawerOpen,
              onClose: handleDrawerClose,
            }}
          >
            <div className={classes.drawerContainer}>
              <Link href='#'>Drops</Link>
              <Link href='#'>Marketplace</Link>
              <Link href='#'>Activity</Link>
              <Link href='#'>Create</Link>
            </div>
          </Drawer>
        </Toolbar>
      )}
    </AppBar>
  );
};

export default Header;

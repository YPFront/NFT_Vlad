import { AppBar, Avatar, Box, Grid, Paper, Toolbar, Typography, useMediaQuery } from '@material-ui/core';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import { createRef, useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import AvatarImg from 'src/assets/img/avatar.svg';
import Character from 'src/assets/img/character.svg';
import CheckBadge from 'src/assets/img/checkBadge.svg';
import Expand from 'src/assets/img/expand.svg';
import Live from 'src/assets/img/live.svg';
import {ReactComponent as Eye} from 'src/assets/img/eye.svg';
import {ReactComponent as Facebook} from 'src/assets/img/facebook.svg';
import {ReactComponent as LinkImg} from 'src/assets/img/link.svg';
import {ReactComponent as Telegram} from 'src/assets/img/telegram.svg';
import {ReactComponent as Twitter} from 'src/assets/img/twitter.svg';
import ArrowDown from 'src/assets/lottie/arrow_down.json';
import SubmitBidForm from 'src/components/SubmitBidForm';
import LottieImage from '../../components/LottieImage';
import PortionButton from '../../components/PortionButton';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: '100vh',
    background: theme.palette.primary.light,
    overflow: 'hidden',
    position: 'relative',
    color: theme.palette.common.black,
    [theme.breakpoints.down('lg')]: {
      minHeight: 'unset',
    },
    [theme.breakpoints.down('sm')]: {
      paddingBottom: 25,
    },
  },
  main: {
    marginTop: 100,
    marginBottom: 0,
    position: 'relative',
    '&>.MuiGrid-item': {
      paddingTop: 0,
      [theme.breakpoints.down('md')]: {
        padding: 25,
      },
    },
  },
  background1: {
    width: 936,
    position: 'absolute',
    top: '30%',
    left: '-4%'
  },
  characterContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 15,
    '&.MuiGrid-item': {
      paddingBottom: 0,
    },
    '& .MuiPaper-root': {
      padding: 10,
      width: '100%',
      borderRadius: 0,
      float: 'right',
      boxSizing: 'border-box',
      boxShadow: '20px 10px 20px rgba(0, 0, 0, 0.4)',
      margin: '0 auto',
    },
    '& img': {
      width: '100%',
      maxHeight: 800,
    },
  },
  detailPanel: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '&.MuiGrid-item': {
      paddingBottom: 0,
    },
    '& b': {
      color: theme.palette.common.white,
      fontWeight: 'normal',
    },
  },
  ownerInfo: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 25,
    marginBottom: 25,
    '& p': {
      marginBlockStart: 3,
      marginBlockEnd: 3,
    },
    [theme.breakpoints.up('lg')]: {
      marginBottom: 64,
    },
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      order: 3,
      marginTop: 0,
      marginBottom: 10,
      '& > .MuiGrid-root': {
        marginBottom: 15,
      },
    },
  },
  avatar: {
    border: '2px solid',
    borderColor: theme.palette.common.black,
    padding: 2,
    width: 60,
    height: 60,
    '& img': {
      borderRadius: '50%',
    },
  },
  priceText: {
    fontWeight: 700,
    fontSize: 36,
    lineHeight: '43.2px',
    [theme.breakpoints.down('md')]: {
      fontSize: 28,
    },
  },
  prtIcon: {
    marginBottom: -6,
  },
  ethicon: {
    marginBottom: -2,
  },
  highestBid: {
    '& p': {
      marginBottom: 6,
      marginTop: 6
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      marginTop: 20
    },
  },
  action: {
    marginTop: 20,
    marginBottom: 20,
    '& button': {
      width: '100%',
      height: 50,
      fontSize: 20,
    },
    [theme.breakpoints.down('sm')]: {
      order: 2,
    },
  },
  attributes: {
    [theme.breakpoints.down('sm')]: {
      order: 4,
      marginBottom: 25,
    },
    [theme.breakpoints.down(400)]: {
      flexDirection: 'column',
      gap: 10,
      alignItems: 'center'
    }
  },
  smallButton: {
    fontSize: 20,
    lineHeight: '24px',
    padding: '9px 19px',
    marginRight: 18,
    minHeight: 'unset',
    '& img': {
      marginRight: 13.5,
    },
    [theme.breakpoints.down('sm')]: {
      padding: '6px 10px',
      fontSize: 16,
      lineHeight: '19px',
      fontWeight: 'normal',
    },
  },
  roundButton: {
    '&.MuiButton-root': {
      borderRadius: '50%',
      padding: '10px',
      minWidth: 'unset',
      minHeight: 'unset',
      marginRight: 17,
      width: 42,
      height: 42,
      [theme.breakpoints.down('sm')]: {
        padding: '7px',
        marginRight: 10,
        '& img': {
          width: 15,
          height: 15,
        },
      },
    }    
  },
  moveDown: {
    width: '100%',
    height: 33,
    marginTop: -40,
    paddingBottom: 40,
    background: theme.palette.background.default,
    '& a': {
      position: 'absolute',
      zIndex: 1,
      background: theme.palette.primary.light,
      borderRadius: '50%',
      padding: '9px 9px',
      left: 'calc(25% - 40px)',
    },
    [theme.breakpoints.down('sm')]: {
      height: 28,
      marginTop: -45,
      marginBottom: 45,
      '& a': {
        padding: '10px 15px',
        left: 'calc(50% - 45px)',
        '& img': {
          height: 40,
        },
      },
    },
  },
  bubbles: {
    position: 'absolute',
    top: 117,
    right: -176,
    opacity: 0.5
  },
  appBar: {
    background: theme.palette.primary.dark,
    color: theme.palette.common.black,
    boxShadow: 'none',
    height: 100,
    transition: 'height 0.3s',
    overflow: 'hidden',
    '&.hidden': {
      height: 0,
    },
  },
  toolBar: {
    height: 100,
    paddingTop: 21,
    paddingBottom: 21,
    minHeight: 'unset',
  },
  navPriceText: {
    [theme.breakpoints.down('md')]: {
      marginTop: 0,
      lineHeight: '30px',
    },
  },
  navbarButton: {
    padding: '8px 39px',
  },
  live: {
    color: theme.palette.secondary.main,
    marginBottom: 8,
    '& img': {
      marginRight: 5,
      marginTop: -4,
      verticalAlign: 'middle'
    }
  },
  mobileHidden: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  mobileShow: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'inherit',
    },
  },
  tabletHidden: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  mobileCenter: {
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  mobileLeft: {
    [theme.breakpoints.down('sm')]: {
      textAlign: 'left',
    },
  },
  mobileCharacter: {
    '& .MuiPaper-root': {
      width: '100%',
      padding: 5,
    },
    '& img': {
      width: '100%',
    },
  },
  minWidth120: {
    minWidth: 120,
  },
}));

const getDimensions = (ele: HTMLDivElement) => {
  const { height } = ele.getBoundingClientRect();
  const offsetTop = ele.offsetTop;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom,
  };
};

const Hero = () => {
  const classes = useStyles();
  const [showHeroOriginal, setShowHeroOriginal] = useState(true);
  let thisRef = createRef<HTMLDivElement>();
  const theme = useTheme();
  const mediaMatches = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => {
      if (!thisRef.current) {
        return;
      }
      const { height: heroHeight } = getDimensions(thisRef.current);
      const headerHeight = 100;
      const scrollPosition = window.scrollY;

      if (scrollPosition >= headerHeight + heroHeight) {
        setShowHeroOriginal(false);
      } else {
        setShowHeroOriginal(true);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <div ref={thisRef}>
      <div className={clsx(classes.root, 'container')}>
        <Grid container className={classes.main} spacing={10}>
          <Grid item md={6} xs={12} className={clsx(classes.characterContainer, classes.mobileHidden)}>
            <Paper elevation={20} square>
              <img src={Character} />
            </Paper>
          </Grid>

          <Grid item md={6} xs={12} className={classes.detailPanel}>
            <Grid container>
              <Grid item lg={10} xs={12}>
                <p className={classes.live}><img src={Live}/> WE'RE LIVE</p>
                <Typography variant='h3'>NFT title goes here and also on this second line</Typography>
                <p>
                  Part of the <b>Batman White Knight Presents</b> Collection
                </p>
              </Grid>
            </Grid>
            <Grid className={clsx(classes.mobileShow, classes.mobileCharacter)} container>
              <Paper elevation={20} square>
                <img src={Character} />
              </Paper>
            </Grid>
            <Grid container className={classes.ownerInfo} wrap='nowrap'>
              <Grid item xs={false} md={2} className={classes.mobileHidden}>
                <Avatar src={AvatarImg} className={classes.avatar}></Avatar>
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid container>
                  <Grid item xs={3} md={12}>
                    <p>Created by: </p>
                  </Grid>
                  <Grid item xs={4} md={12}>
                    <p>
                      <b>
                        {' '}
                        Ron English <img src={CheckBadge} />
                      </b>
                    </p>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <p>on March 16, 2021:</p>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid item xs={6} md={12}>
                  <p>
                    Owner: <b>Sadness</b>
                  </p>
                </Grid>
                <Grid item xs={6} md={12}>
                  <p>
                    Token ID: <b>88</b>
                  </p>
                </Grid>
              </Grid>
            </Grid>
            <Grid container className={classes.highestBid} spacing={5}>
              <Grid item md={6} xs={12}>
                <p>Highest bid</p>
                <p className={classes.priceText}>18.333 ETH</p>
                <p>by <b>salva</b></p>
                <small>highest bid must stand for 15 mins before acceptance</small>
              </Grid>
              <Grid item md={6} xs={12}>
                <p> Auction ending in </p>
                <Grid container>
                  <Grid item md={3} xs={4}>
                    <p className={classes.priceText}>3</p>
                    <p>Hours</p>
                  </Grid>
                  <Grid item md={4} xs={4}>
                    <p className={classes.priceText}>18</p>
                    <p>Minutes</p>
                  </Grid>
                  <Grid item md={4} xs={4}>
                    <p className={classes.priceText}>28</p>
                    <p>Seconds</p>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <SubmitBidForm></SubmitBidForm>
            <Box className={classes.attributes} display='flex' justifyContent='space-between'>
              <Box>
                <PortionButton color='inherit' size='small' radius='hard' outline={true} className={classes.smallButton}>
                  <Eye/> &nbsp; Watch
                </PortionButton>
                <span className={classes.tabletHidden}>Views: 597</span>
              </Box>
              <Box flexGrow={1} className={classes.mobileHidden}></Box>
              <Box>
                <PortionButton color='inherit' size='small' radius='hard' outline={true} className={classes.roundButton}>
                  <Facebook/>
                </PortionButton>
                <PortionButton color='inherit' size='small' radius='hard' outline={true} className={classes.roundButton}>
                  <Twitter/>
                </PortionButton>
                <PortionButton color='inherit' size='small' radius='hard' outline={true} className={classes.roundButton}>
                  <Telegram/>
                </PortionButton>
                <PortionButton color='inherit' size='small' radius='hard' outline={true} className={classes.roundButton}>
                  <LinkImg/>
                </PortionButton>
              </Box>
            </Box>
          </Grid>

          <Grid item md={12} className={classes.mobileHidden}>
            <PortionButton color='secondary' size='small' radius='hard' outline={true} className={classes.roundButton}>
              <img src={Expand} />
            </PortionButton>
          </Grid>
        </Grid>
      </div>
      <div className={classes.moveDown}>
        <ScrollLink href='#' activeClass='active' to='Main-Page' spy={true} smooth={true} hashSpy={true} offset={50} duration={500} delay={0} isDynamic={true} ignoreCancelEvents={false}>
          <LottieImage src={ArrowDown} width={60} height={60}/>
        </ScrollLink>
      </div>
      <AppBar className={clsx(classes.appBar, showHeroOriginal ? 'hidden' : '', classes.mobileHidden)} position='fixed'>
        <Toolbar className={clsx(classes.toolBar, 'container')}>
          <Box width={1} display='flex' flexDirection='row' alignItems='center' justifyContent='space-between' gridGap={mediaMatches ? 5 : 34}>
            <Box width={380}>              
              <Typography variant='h5'> NFT title goes here and also on this extremely long second line</Typography>
            </Box>
            <Box flexGrow='1'></Box>
            <Box className={classes.navPriceText}>
              Bid must be 100th of an ETH higher than <b>18.333 ETH</b>
            </Box>
            <Box minWidth={165} display='flex' justifyContent='space-between' alignItems='center'>
              <PortionButton color='secondary' className={classes.navbarButton}>
                Place a Bid
              </PortionButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Hero;

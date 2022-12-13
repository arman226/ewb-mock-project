import React, { useEffect } from "react";
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import { List, ListItem, ListItemText, ListItemAvatar } from '@material-ui/core';
import { ImageIcon } from '@material-ui/icons';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    width: 'inherit'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
    float: 'right'
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

const Notification = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header">
              Notifications
            </AccordionSummary>
            <AccordionDetails>
              Add Details here
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header" >
              Activity
            </AccordionSummary>
            <AccordionDetails>
              Add Reviews, Check-in, Mention and Share buttons
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content" id="panel3a-header" >
              Requests
            </AccordionSummary>
            <AccordionDetails>
              Add request details here
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={8}>
          <List>
            <ListItem>
            <Card className={classes.root}>
                <div className={classes.details}>
                  <CardHeader
                    avatar={<Avatar > <AccountCircleRoundedIcon /> </Avatar>}
                    title={"Daemon Targaryen"}
                    subheader="a few mins ago" />
                  <CardContent>
                    <Typography color="textSecondary">
                      Liked your post
                    </Typography>
                  </CardContent>

                </div>
                <CardMedia
                  className={classes.cover}
                  image="https://cms.eastwestbanker.com/sites/default/files/homepagebanner/2022-05/EasyWay%20Promo%20v2.jpg"
                  title="Image that wont load"
                />
              </Card>
            </ListItem>
            <ListItem>
              <Card className={classes.root}>
                <div className={classes.details}>
                  <CardHeader
                    avatar={<Avatar > <AccountCircleRoundedIcon /> </Avatar>}
                    title={"Rayson Santiago"}
                    subheader="Dec 13, 2022 9:10AM" />
                  <CardContent>
                    <Typography color="textSecondary">
                      Shared EastWestBank's post
                    </Typography>
                  </CardContent>

                </div>
                <CardMedia
                  className={classes.cover}
                  image="https://cms.eastwestbanker.com/sites/default/files/homepagebanner/2022-05/EasyWay%20Promo%20v2.jpg"
                  title="Image that wont load"
                />
              </Card>
            </ListItem>
            <ListItem>
              <Card className={classes.root}>
                <div className={classes.details}>
                  <CardHeader
                    avatar={<Avatar > <AccountCircleRoundedIcon /> </Avatar>}
                    title={"Rayson Santiago"}
                    subheader="Dec 10, 2022 2:32PM" />
                  <CardContent>
                    <Typography color="textSecondary">
                      Shared EastWestBank's post
                    </Typography>
                  </CardContent>

                </div>
                <CardMedia
                  className={classes.cover}
                  image="https://cms.eastwestbanker.com/sites/default/files/homepagebanner/2022-12/EastWest-Website-Carousel-Ads-Christmas-Theme-1920x480px_6_1.jpg"
                  title="Image that wont load"
                />
              </Card>
            </ListItem>
          </List>
        </Grid>
      </Grid>

    </Container>
  );
};

export default Notification;

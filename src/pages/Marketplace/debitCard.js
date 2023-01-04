import React from "react" 
import { Container } from "reactstrap";
import { makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    productIntro: { 
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 0,
      paddingRight: 0,
    },
    productBenefits:{
      paddingRight: 20,
    },
    avatar: {
      backgroundColor: red[500],
    },
    root:{
      margin: 10,
      minHeight: 200
    }
  }));
  

const DebitCard = () => { 
    const classes = useStyles();

    return (
      <Container>
        <Box color="text.primary" className={classes.productIntro}>
        <Typography variant="body2"  component="p">
          Enjoy the convenience of accessing your funds at ATMs, and cashless shopping, dining or online purchases this Christmas season.
        </Typography>
          <Grid container justifyContent="center" alignItems="center" style={{marginBottom: 'px'}}>
              <Grid item lg={4}>
                  <Card  justifyContent="center" alignItems="center" className={classes.root}>
                    <CardHeader
                      avatar={
                        <Avatar aria-label="Credit Card" className={classes.avatar}>
                          <CreditCardIcon />
                        </Avatar>
                      }
                      title="Access Your Funds Anywhere In The World"
                    />
                    <CardContent>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Withdraw cash from over 1.9 million ATMs worldwide.​
                      </Typography>
                    </CardContent>
                  </Card>
              </Grid>
              <Grid item lg={4}>
              <Card  justifyContent="center" alignItems="center" className={classes.root}>
                    <CardHeader
                      avatar={
                        <Avatar aria-label="Credit Card" className={classes.avatar}>
                          <CardGiftcardIcon />
                        </Avatar>
                      }
                      title="Experience Cashless Purchases"
                    />
                    <CardContent>
                      <Typography variant="body2" color="textSecondary" component="p">
                      Use your card in over 61 million Visa-affiliated establishments and online merchants here and abroad.
                      </Typography>
                    </CardContent>
                  </Card>    
              </Grid>
              <Grid item lg={4}>
              <Card  justifyContent="center" alignItems="center" className={classes.root}>
                    <CardHeader
                      avatar={
                        <Avatar aria-label="Credit Card" className={classes.avatar}>
                          <ShoppingCartIcon />
                        </Avatar>
                      }
                      title= "Be Protected With Best-In-Class Security"
                    />
                    <CardContent>
                      <Typography variant="body2" color="textSecondary" component="p">
                      Conveniently control your ATM withdrawals, point-of-sale and online purchases with the card control facility in EastWest Online and Mobile.
                      </Typography>
                    </CardContent>
                  </Card>
              </Grid>
          </Grid>
          </Box>
      </Container>
    ) 
}

export default DebitCard;
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
  

const CreditCard = () => { 
    const classes = useStyles();

    return (
      <Container>
        <Box color="text.primary" className={classes.productIntro}>
        <Typography variant="body2"  component="p">
          Let us help you find the best credit card that fits your lifestyle.
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
                      title="There is a card that’s right for you"
                    />
                    <CardContent>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Whether you’re a practical spender, an avid shopper, a savvy traveler, or a rewards seeker, there’s an EastWest credit card that will best suit your lifestyle.
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
                      title="Exclusive Perks"
                    />
                    <CardContent>
                      <Typography variant="body2" color="textSecondary" component="p">
                      Delight in special offers and privileges from partner merchants so you can get the most from what you pay for.
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
                      title= {
                        <Typography variant="body2" color="textPrimary" component="h2">
                          Installment Facilities
                        </Typography>
                      }
                    />
                    <CardContent>
                      <Typography variant="body2" color="textSecondary" component="p">
                      Gain financial flexibility with 0% installment offers at partner merchants, low interest rates for balance transfers, or with affordable terms when you convert your big-ticket retail purchases to installment.
                      </Typography>
                    </CardContent>
                  </Card>
              </Grid>
          </Grid>
          </Box>
      </Container>
    ) 
}

export default CreditCard;
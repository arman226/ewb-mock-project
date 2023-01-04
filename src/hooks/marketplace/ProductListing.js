import { useState, useEffect } from 'react';
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

const productList = [
    { 
        id: 1, 
        name: 'Credit Cart' ,
        description: 'Let us help you find the best credit card that fits your lifestyle.',
        benefits: [
            {
                title: 'There is a card that’s right for you',
                icon: 'CreditCardIcon',
                description: 'Whether you’re a practical spender, an avid shopper, a savvy traveler, or a rewards seeker, there’s an EastWest credit card that will best suit your lifestyle.'
            },
            {
                title: 'Exclusive Perks',
                icon: 'CardGiftcardIcon',
                description: 'Delight in special offers and privileges from partner merchants so you can get the most from what you pay for.'
            }  ,
            {
                title: 'Installment Facilities',
                icon: 'ShoppingCartIcon',
                description: 'Gain financial flexibility with 0% installment offers at partner merchants, low interest rates for balance transfers, or with affordable terms when you convert your big-ticket retail purchases to installment.'
            }       
        ],
        producst:[
            {
                title: 'EastWest Visa Prepaid Card',
                image: 'CreditCardIcon',
                description: '<p><h3>Reload anytime.<h3><br/>Easily replenish your card &apos s balance from your deposit account via EastWest Online or Mobile.</p>'
            }
        ] 
    }
  ];

  function ProductListing(){
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
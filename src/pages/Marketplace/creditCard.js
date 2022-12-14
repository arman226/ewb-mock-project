import React from "react" 
import { Container } from "reactstrap";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    productIntro: { 
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 0,
      paddingRight: 0,
    },
  }));
  

const CreditCard = () => {
    const classes = useStyles();

    return (
        <Container>
             <p className={classes.productIntro}>Let us help you find the best credit card that fits your lifestyle.</p>   
        </Container>

    ) 
}

export default CreditCard;
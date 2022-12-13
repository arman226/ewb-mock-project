import React, {lazy} from "react";
import {
  Container,
  Typography,
  Grid
} from "@material-ui/core";
const Card = lazy(() => import('./items/card'));

const LoanProducts = () => {
  return (
    <Container>
        <Grid container justifyContent="center" alignItems="center" style={{marginBottom: 'px'}}>
            <Grid item lg={4}>
                <Card avatar="A" title="AUTO LOANS" subheader="Get your dream car with EastWest" excerpt="Own your dream car fast and easy – whether it’s brand new or pre-owned. Enjoy affordable downpayment, competitive interest rates, easy on the pocket amortization ..."/>
            </Grid>
            <Grid item lg={4}>
                <Card avatar="H" title="HOME LOANS" subheader="Your new home is on your way" excerpt="Whether it's a house and lot, a condominium, a townhouse, or even a vacant lot for future construction, we know that having your dream home is important to you, and we'll help you turn it into reality."/>
            </Grid>
            <Grid item lg={4}>
                <Card avatar="P" title="PERSONAL LOANS" subheader="LONDON - loan dito, loan doon" excerpt="Whether it's for traveling with the family, investing in your child's future or planning for big purchases, let our multi-purpose, non-collateralized personal loan help you achieve your dreams."/>
            </Grid>
        </Grid>
    </Container>
  );
};

export default LoanProducts;

import React , { lazy } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Container } from "reactstrap";

const LoadCreditCards = lazy(() => import('./creditCard'));
const LoadDebitCards = lazy(() => import('./debitCard'));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function activateTab(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#FFFFFF',
    transform: 'rotate(0deg)',
  },
  tabpanel:{
    minHeight: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  productIntro: { 
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    paddingRight: 0,
  },
}));

const Marketplace = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container className={classes.root}>
      <AppBar position="static"  >
       <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
       <Tab label="Credit Card" {...activateTab(0)} />
          <Tab label="Debit Card" {...activateTab(1)} />
          <Tab label="Prepaid Card" {...activateTab(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} className={classes.tabpanel}>
        <LoadCreditCards></LoadCreditCards>
      </TabPanel>
      <TabPanel value={value} index={1} className={classes.tabpanel}>
        <LoadDebitCards></LoadDebitCards>
      </TabPanel>
      <TabPanel value={value} index={2} className={classes.tabpanel}>
        <p className={classes.productIntro}>Manage expenses better with an effective budgeting tool that allows you to spend up to the amount loaded in the card.</p>
      </TabPanel>
    </Container>
  );
};

export default Marketplace;
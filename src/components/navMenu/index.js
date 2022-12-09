import React, { useState } from "react";
import { Collapse, Navbar, NavbarBrand, NavbarToggler } from "reactstrap";
import { withStyles } from "@material-ui/core/styles";
import { AppBar } from "@material-ui/core";
import { Link } from "react-router-dom";
import styles from "styles";
import Item from "./Item";
import {
  MARKETPLACE_PATH,
  NOTIFICATIONS_PATH,
  PROFILE_PATH,
} from "routes/constants";

const menu = [
  {
    title: "Home",
    component: "home",
  },
  {
    title: "Profile",
    component: PROFILE_PATH,
  },
  {
    title: "Marketplace",
    component: MARKETPLACE_PATH,
  },
  {
    title: "Notifications",
    component: NOTIFICATIONS_PATH,
  },
  {
    title: "Settings",
    component: "/settings",
  },
];

const NavMenu = withStyles(styles)(({ classes, branding }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onNavBarClicker = () => setIsOpen(!isOpen);

  return (
    <div>
      <AppBar position="fixed" elevation={0} className={classes.appBar}>
        <Navbar
          style={{
            paddingLeft: 40,
            paddingRight: 40,
          }}
          className={["navbar-expand-sm navbar-toggleable-sm border-bottom"]}
        >
          <NavbarBrand tag={Link} to="/">
            <img height={50} width={50} src={"images/logo512.png"} />
          </NavbarBrand>

          <div>test</div>
          <NavbarToggler onClick={onNavBarClicker} className="border-white" />
          <Collapse
            className="d-sm-inline-flex flex-sm-row-reverse"
            isOpen={isOpen}
            navbar
          >
            <ul className="navbar-nav flex-grow">
              {menu.map(({ title, component }, idx) => (
                <Item title={title} component={component} />
              ))}
            </ul>
          </Collapse>
        </Navbar>
      </AppBar>
    </div>
  );
});

export default NavMenu;

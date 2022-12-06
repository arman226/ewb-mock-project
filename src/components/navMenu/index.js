import React, { useState } from "react";
import { Collapse, Navbar, NavbarBrand, NavbarToggler } from "reactstrap";
import { withStyles } from "@material-ui/core/styles";
import { AppBar } from "@material-ui/core";
import { Link } from "react-router-dom";
import styles from "styles";
import { BLACK, GRAY, WHITE } from "values/colors.styles";
import Item from "./Item";

const menu = [
  {
    title: "Home",
    component: "home",
  },
  {
    title: "Profile",
    component: "",
  },
  {
    title: "Marketplace",
    component: "",
  },
  {
    title: "Notifications",
    component: "",
  },
  {
    title: "Settings",
    component: "",
  },  
];

const NavMenu = withStyles(styles)(({ classes, branding }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onNavBarClicker = () => setIsOpen(!isOpen);

  return (
    <div>
      <AppBar
        position="fixed"
        elevation={0}
        style={{
          borderBottom: 1,
          borderBottomWidth: 1.5,
          borderBottomStyle: "solid",
          borderBottomColor: GRAY,
          borderTop: 1.5,
          borderTopWidth: 1.5,
          borderTopStyle: "solid",
          borderTopColor: BLACK,
          backgroundColor: WHITE,
        }}
      >
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
                <Item
                  title={title}
                  component={component}
                  onClickListener={() => {
                    window.location.hash = component;
                  }}
                />
              ))}
            </ul>
          </Collapse>
        </Navbar>
      </AppBar>
    </div>
  );
});

export default NavMenu;

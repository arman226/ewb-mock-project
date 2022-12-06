import React, { useRef } from "react";
import { NavItem, NavLink } from "reactstrap";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Transition } from "react-transition-group";
import {
  defaultOpacityFadeIn,
  FadeInTransitionStyles,
} from "values/animations.styles";
import { WHITE } from "values/colors.styles";

const Item = ({ title, component, onClickListener }) => {
  const itemRef = useRef();

  const classes = useStyles();
  return (
    <NavItem onClick={onClickListener}>
      <NavLink
        tag={Link}
        className={["text-dark", classes.title]}
        to={{ pathname: onClickListener != null ? "/home" : component }}
      >
        {title}
      </NavLink>
    </NavItem>
  );
};

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    fontSize: 16,
    fontFamily: "Times",
    color: WHITE,
  },
}));

export default Item;

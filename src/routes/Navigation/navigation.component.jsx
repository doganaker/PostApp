import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Divider,
} from "@mui/material";
import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <AppBar position="sticky">
        <Toolbar variant="regular" />
      </AppBar>
      <div className="nav-container">
        <Drawer
          sx={{
            width: 200,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: 200,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar variant="regular">
            <Typography variant="h6" color="#1976D2">
              Posts App
            </Typography>
          </Toolbar>
          <Divider />
          <List>
            <ListItem key={"Home"} disablePadding>
              <Link to="/" className="nav-link">
                <ListItemButton>Home</ListItemButton>
              </Link>
            </ListItem>
            <ListItem key={"About"} disablePadding>
              <Link to="/about" className="nav-link">
                <ListItemButton>About</ListItemButton>
              </Link>
            </ListItem>
          </List>
        </Drawer>
        <Outlet />
      </div>
    </Fragment>
  );
};

export default Navigation;

import React from "react";
import { Menu } from "@mui/icons-material";
import { NavLink, Link } from "react-router-dom";
import { Grid, IconButton, Drawer, List, ListItem } from "@mui/material";

const data = [
  {
    path: "/about",
    text: "About",
  },
  {
    path: "/links",
    text: "Links",
  },
  {
    path: "/camera",
    text: "Camera",
  },
  {
    path: "/collaborators",
    text: "Collaborators",
  },
  {
    path: "/contact",
    text: "Contact",
  },
  {
    path: "/meetings",
    text: "Meetings",
  },
  {
    path: "/publications",
    text: "Publications",
  },
];

export default function MenuDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (open: boolean) => (event: any) => {
    setState({ ...state, right: open });
  };

  const list = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {data.map((element) => (
          <ListItem button key={element.text}>
            <Link to={element.path} className="link">
              {element.text}
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className="nav-bar">
      <Grid
        container
        justifyContent="flex-start"
        alignItems="center"
        spacing={5}
      >
        <Grid
          container
          item
          xs={9}
          justifyContent="flex-start"
          id="padding-left"
        >
          <NavLink to="/" className="logo">
            <h3 className="button-text">Logo</h3>
          </NavLink>
        </Grid>

        <Grid
          container
          item
          xs={3}
          justifyContent="flex-end"
          id="padding-right"
        >
          <IconButton
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={toggleDrawer(true)}
          >
            <Menu className="menu-icon" />
          </IconButton>
          <Drawer
            anchor={"right"}
            open={state["right"]}
            onClose={toggleDrawer(false)}
          >
            {list()}
          </Drawer>
        </Grid>
      </Grid>
    </div>
  );
}

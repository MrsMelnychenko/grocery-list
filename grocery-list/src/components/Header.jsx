import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import AddIcon from "@mui/icons-material/Add";
import styles from "./Header.module.css";
import { useState } from "react";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Header = ({ isMainPage }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navigate = useNavigate();

  const signUserOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log("sign out was succesful");
        navigate("..");
      })
      .catch((error) => {
        console.log("sign out was NOT succesful");
      });
  };

  const goToAddProduct = () => {
    navigate("/addProduct");
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem key={"Email"} disablePadding>
          <ListItemButton>
            <ListItemText primary={"Email from Cntx"} />
          </ListItemButton>
        </ListItem>
        <ListItem onClick={signUserOut} key={"Log Out"} disablePadding>
          <ListItemButton>
            <ListItemText primary={"Log Out"} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  return (
    <header className={styles.header}>
      {isMainPage ? (
        <MenuIcon onClick={handleDrawerToggle} />
      ) : (
        <ArrowBackIosIcon />
      )}
      <p className={styles.title}>Grocery lists</p>
      {isMainPage && <AddIcon onClick={goToAddProduct} />}
      <Drawer
        variant="temporary"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
          },
        }}
      >
        {drawer}
      </Drawer>
    </header>
  );
};

export default Header;

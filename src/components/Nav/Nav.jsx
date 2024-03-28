import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import NavList from "./NavList";
import styled from "@emotion/styled";
import { InputBase, ListItemIcon, alpha } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { IconsManifest } from "react-icons";
import { IoMdHome } from "react-icons/io";
import DeskNavList from "./DeskNavList";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

function Nav(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [subNav, setSubNav] = React.useState([]);
  const setNavList = (data) => {
    setSubNav(data);
  };
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const ladies = { name: "Ladies", subCat: ["T-Shirts", "Dresses", "Skirts"] };
  const mens = { name: "mens", subCat: ["T-Shirts2", "Dresses", "Skirts"] };
  const kids = { name: "kids", subCat: ["T-Shirts3", "Dresses", "Skirts"] };

  const drawer = (
    <Box>
      <img className={"w-24"} src="./logo.jpg" />

      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <IoMdHome size={"1.5rem"} />
            </ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItemButton>
        </ListItem>

        <NavList icon={"./icons/ladies.png"} data={ladies} />
        <NavList icon={"./icons/man.png"} data={mens} />
        <NavList icon={"./icons/kids.png"} data={kids} />
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  const controls = useAnimation(); // Control animation

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar color="default" component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: {
                sm: "none",
                xs: "block",
              },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <img className={"w-20"} src="./logo.jpg" />
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "flex", flexGrow: 1 },
              justifyItems: "center",
            }}
          >
            <div
              onMouseLeave={() => setSubNav([])}
              className=" relative z-10 mb-5"
            >
              <div className="flex gap-4">
                <DeskNavList
                  subNav={subNav}
                  setNavList={setNavList}
                  data={ladies}
                />
                <DeskNavList
                  subNav={subNav}
                  setNavList={setNavList}
                  data={mens}
                />
                <DeskNavList
                  subNav={subNav}
                  setNavList={setNavList}
                  data={kids}
                />
              </div>
              <motion.div className="absolute top-10 bg-white w-full h-auto">
                <AnimatePresence>
                  {subNav.map((option, index) => (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "100%" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Typography
                        variant="subtitle1"
                        key={index}
                        sx={{
                          p: 0.5,
                          m: 0.5,
                          cursor: "pointer",
                        }}
                      >
                        {option}
                      </Typography>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>
          </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
            <Button color="warning" variant="contained">
              Search
            </Button>
          </Search>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Nav;
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  boxShadow: theme.shadows[1],
  display: "flex",
  alignItems: "center",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

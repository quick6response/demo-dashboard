import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline, ThemeProvider, createTheme } from "@material-ui/core";
import { AlertProvider } from "./components/Alert/AlertProvider";
import { Content } from "./components/screens/Home/Content";
import Header from "./components/Header/Header";
import "./styles.css";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",

    "& > * + *": {
      marginTop: theme.spacing(2),
    },
    overflowX: "hidden",
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    overflow: "hidden",
    height: "100%",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
}));

export default function App() {
  const classes = useStyles();
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    window.process = {
      ...window.process,
    };
  }, []);

  const theme = createTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AlertProvider>
          <CssBaseline />
          <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
          <main>
            <div className={classes.drawerHeader} />
            <Content />
          </main>
        </AlertProvider>
      </div>
    </ThemeProvider>
  );
}

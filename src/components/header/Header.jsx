import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
    Box,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));
const Header = ({
    toggleSidebar,
    toggleLogInModalStatus,
    toggleSignInModalStatus,
}) => {
    const classes = useStyles();

    const toggleDrawer = () => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        toggleSidebar(true);
    };

    const toggleLogInModalOpened = (isOpened) => () => {
        toggleLogInModalStatus(isOpened);
    };
    const toggleSignInModalOpened = (isOpened) => () => {
        toggleSignInModalStatus(isOpened);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                    onClick={toggleDrawer()}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    News
                </Typography>
                <Box mr={3}>
                    <Button
                        onClick={toggleLogInModalOpened(true)}
                        color="inherit"
                        variant="outlined"
                    >
                        Log In
                    </Button>
                    <Button
                        onClick={toggleSignInModalOpened(true)}
                        color="secondary"
                        variant="contained"
                    >
                        Sign In
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;

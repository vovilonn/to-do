import React from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    TextField,
    DialogActions,
    Button,
    makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => {
    return {
        userNameField: {
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(2.5),
        },
        passwordField: {
            marginBottom: theme.spacing(2.5),
        },
    };
});
const SignInModal = ({
    isOpened,
    toggleModalStatus,
    updateSignInUserNameText,
    updateSignInPasswordText,
    updateSignInRepeatedPassword,
}) => {
    const classes = useStyles();

    const toggleModalOpened = (isOpened) => () => {
        toggleModalStatus(isOpened);
    };

    const updateUserNameText = (e) => {
        const newText = e.target.value;
        updateSignInUserNameText(newText);
    };

    return (
        <Dialog
            open={isOpened}
            onClose={toggleModalOpened(false)}
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle id="form-dialog-title">Sign In</DialogTitle>
            <DialogContent>
                <DialogContentText>Sign In to add to do</DialogContentText>
                <TextField
                    autoFocus
                    margin="dence"
                    id="name"
                    label="Email Adress"
                    type="email"
                    fullWidth
                    variant="outlined"
                    className={classes.userNameField}
                    onChange={updateUserNameText}
                />
                <TextField
                    margin="dence"
                    label="Password"
                    type="password"
                    fullWidth
                    variant="outlined"
                    className={classes.passwordField}
                />
                <TextField
                    margin="dence"
                    label="Repeat password"
                    type="password"
                    fullWidth
                    variant="outlined"
                />
                <DialogActions>
                    <Button onClick={toggleModalOpened(false)}>Cancel</Button>
                    <Button onClick={toggleModalOpened(false)}>Sign In</Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    );
};

export default SignInModal;

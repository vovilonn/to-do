import React from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    TextField,
    DialogActions,
    Button,
} from "@material-ui/core";
const LogInModal = () => {
    return (
        <Dialog open={true} onClose={1} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Log In</DialogTitle>
            <DialogContent>
                <DialogContentText>Log in to see videos</DialogContentText>
                <TextField
                    autoFocus
                    margin="dence"
                    id="name"
                    label="Email Adress"
                    type="email"
                    fullWidth
                />
                <TextField
                    autoFocus
                    margin="dence"
                    id="pass"
                    label="Password"
                    type="password"
                    fullWidth
                />
                <DialogActions>
                    <Button onClick={1}>Cancel</Button>
                    <Button onClick={1}>Log In</Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    );
};

export default LogInModal;

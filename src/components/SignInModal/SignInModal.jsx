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
    newUserNameText,
    newPasswordText,
    newRepeatedPasswordText,
    addAccount,
}) => {
    const classes = useStyles();

    const toggleModalOpened = (isOpened) => () => {
        toggleModalStatus(isOpened);
        updateSignInUserNameText("");
        updateSignInPasswordText("");
        updateSignInRepeatedPassword("");
    };

    const updateUserNameText = (e) => {
        const newText = e.target.value;
        updateSignInUserNameText(newText);
    };

    const updatePasswordText = (e) => {
        const newText = e.target.value;
        updateSignInPasswordText(newText);
    };

    const updateRepeatedPasswordText = (e) => {
        const newText = e.target.value;
        updateSignInRepeatedPassword(newText);
    };

    const signIn = () => {
        if (newPasswordText === newRepeatedPasswordText) {
            addAccount(newUserNameText, newPasswordText);
            toggleModalOpened(false)();
        }
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
                    value={newUserNameText}
                />
                <TextField
                    margin="dence"
                    label="Password"
                    type="password"
                    fullWidth
                    variant="outlined"
                    className={classes.passwordField}
                    onChange={updatePasswordText}
                    value={newPasswordText}
                />
                <TextField
                    margin="dence"
                    label="Repeat password"
                    type="password"
                    fullWidth
                    variant="outlined"
                    onChange={updateRepeatedPasswordText}
                    value={newRepeatedPasswordText}
                />
                <DialogActions>
                    <Button onClick={toggleModalOpened(false)}>Cancel</Button>
                    <Button onClick={signIn}>Sign In</Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    );
};

export default SignInModal;

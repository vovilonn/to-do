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
    };
});
const LogInModal = ({
    isOpened,
    toggleModalStatus,
    updateLogInCurrentUserNameText,
    updateLogInCurrentPasswordText,
    newUserNameText,
    newPasswordText,
}) => {
    const classes = useStyles();

    const toggleModalOpened = (isOpened) => () => {
        toggleModalStatus(isOpened);
        updateLogInCurrentUserNameText("");
        updateLogInCurrentPasswordText("");
    };

    const updateCurrentUserNameText = (e) => {
        const newText = e.target.value;
        updateLogInCurrentUserNameText(newText);
    };

    const updateCurrentPasswordText = (e) => {
        const newText = e.target.value;
        updateLogInCurrentPasswordText(newText);
    };

    return (
        <Dialog
            open={isOpened}
            onClose={toggleModalOpened(false)}
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle id="form-dialog-title">Log In</DialogTitle>
            <DialogContent>
                <DialogContentText>Log In to add to do</DialogContentText>
                <TextField
                    autoFocus
                    margin="dence"
                    id="name"
                    label="Email Adress"
                    type="email"
                    fullWidth
                    variant="outlined"
                    className={classes.userNameField}
                    onChange={updateCurrentUserNameText}
                    value={newUserNameText}
                />
                <TextField
                    margin="dence"
                    id="pass"
                    label="Password"
                    type="password"
                    fullWidth
                    variant="outlined"
                    onChange={updateCurrentPasswordText}
                    value={newPasswordText}
                />
                <DialogActions>
                    <Button onClick={toggleModalOpened(false)}>Cancel</Button>
                    <Button onClick={toggleModalOpened(false)}>Log In</Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    );
};

export default LogInModal;

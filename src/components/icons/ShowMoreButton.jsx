import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { ExpandMore } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        textTransform: "none",
        color: "#00A0AB",
        fontSize: 18,
        fontWeight: 500
    },
    iconWrapper: {
        marginLeft: 0,
        marginTop: 2
    },
    icon: {
        fontSize: "32px!important"
    },

}))
const ShowMoreButton = ({ onClick }) => {
    const classes = useStyles();

    return (
        <Button
            classes={{ endIcon: classes.iconWrapper }}
            className={classes.root}
            endIcon={<ExpandMore className={classes.icon} />}
            onClick={onClick}
        >
            Показать еще
        </Button>
    )
};

export default ShowMoreButton;
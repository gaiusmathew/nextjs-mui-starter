import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    container: {
        // backgroundColor: theme.palette.background.paper,
        padding: '30px',
    },
    icon: {
        marginRight: '10px',
    },
    buttons: {
        marginTop: '40px',
    },
    cardGrid: {
        padding: '20px 0',
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    CardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    CardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: '#1976d2',
        padding: '30px 0',
    },
}));

export default useStyles;

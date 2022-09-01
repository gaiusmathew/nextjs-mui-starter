import '../styles/globals.css';
import { AppProps } from 'next/app';
import {
    Typography,
    AppBar,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    CssBaseline,
    Grid,
    Toolbar,
    Container,
    Button,
    ThemeProvider,
    createTheme,
} from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import useStyles from '../styles/styles';

const theme = createTheme();
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function App({ Component, pageProps }: AppProps) {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <>
                <CssBaseline />

                <AppBar position='relative'>
                    <Toolbar>
                        <PhotoCamera className={classes.icon} />

                        <Typography variant='h6'>Photo Album</Typography>
                    </Toolbar>
                </AppBar>
                <main>
                    <div className={classes.container}>
                        <Container maxWidth='sm'>
                            <Typography
                                variant='h2'
                                align='center'
                                color='textPrimary'
                                gutterBottom
                            >
                                Photo Album
                            </Typography>

                            <Typography
                                variant='h5'
                                align='center'
                                color='textSecondary'
                                paragraph
                            >
                                Hello everyone This is a photo album and I&apos;m
                                trying to make this sentence as long as possible
                                so we can see how does it look on the screen. 
                            </Typography>

                            <div className={classes.buttons}>
                                <Grid container spacing={2} justifyContent='center'>
                                    <Grid item>
                                        <Button
                                            variant='contained'
                                            color='primary'
                                        >
                                            See my photos
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button
                                            variant='outlined'
                                            color='primary'
                                        >
                                            Secondary Action
                                        </Button>
                                    </Grid>
                                </Grid>
                            </div>
                        </Container>
                    </div>

                    <Container className={classes.cardGrid} maxWidth='md'>
                        <Grid container spacing={4}>
                            {cards.map(card => (
                                <Grid item key={card} xs={12} sm={6} md={4}>
                                    <Card className={classes.card}>
                                        <CardMedia
                                            className={classes.CardMedia}
                                            image='https://source.unsplash.com/random'
                                            title='Random Image Title'
                                        />

                                        <CardContent
                                            className={classes.CardContent}
                                        >
                                            <Typography
                                                gutterBottom
                                                variant='h5'
                                            >
                                                Heading
                                            </Typography>
                                            <Typography>
                                                Media content sample description
                                                you can add.
                                            </Typography>
                                        </CardContent>

                                        <CardActions>
                                            <Button
                                                size='small'
                                                color='primary'
                                            >
                                                View
                                            </Button>
                                            <Button
                                                size='small'
                                                color='primary'
                                            >
                                                Edit
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </main>

                <footer className={classes.footer}>
                    <Typography variant='h6' align='center' gutterBottom>
                        Footer
                    </Typography>
                    <Typography
                        variant='subtitle1'
                        align='center'
                        color='textSecondary'
                    >
                        Something here to give the footer a purpose!
                    </Typography>
                </footer>
            </>
        </ThemeProvider>
    );
}

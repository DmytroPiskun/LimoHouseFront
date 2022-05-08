import image from '../../images/homePage.jpg'
import mobileImage from '../../images/mobileBack.png'
import { theme } from '../../theme/theme';

export const styles = {
    root: {
        backgroundImage: `url(${mobileImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh',
        minHeight: '885px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.up('md')]: {
            backgroundImage: `url(${image})`,
            height: '100vh',
            margin: '0px',
            padding: '0px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        },
    },

    textBlock: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    imageBlock: {
        width: '100%',
        maxWidth: '600px',
        minWidth: '100px',
    }
};

export const MUIStyles = {
    text: {
        fontFamily: 'Oregano',
        font: 'Oregano',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '3vh',
        lineHeight: '120.97%',
        letterSpacing: '0.11em',
        textShadow: '2px 2px 1px #000000',
        mb: "30px",
        [theme.breakpoints.up('md')]: {
            fontSize: '6vh'
        }
    },
    with: {

    }
}
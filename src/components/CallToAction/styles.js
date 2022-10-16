import { theme } from "../../theme/theme"
import image from '../../images/call_to_action_desc_back.jpg'
import mobileImage from '../../images/call_to_action_mob_back.jpg'

export const styles = {
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        [theme.breakpoints.down('md')]: {
            backgroundImage: `url(${mobileImage})`,
            height: '100vh',
            margin: '0px',
            padding: '0px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        },
    },
    contactUs: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginTop: '10%',
        marginLeft: '45%',
        [theme.breakpoints.down('md')]: {
            marginTop: '35%',
            marginLeft: '35%',
        },
    },
    icon: {
        height: 30,
        marginRight: 8,
        padding: 0,
        [theme.breakpoints.down('md')]: {
            height: 20,
        },
    }
}

export const MUIStyles = {
    text: {
        padding: '4px',
        fontSize: '2em',
        color: 'white',
        fontFamily: 'Abhaya Libre',
        font: "Abhaya Libre",
        fontStyle: 'normal',
        fontWeight: '400',
        textAlign: 'center',
        lineHeight: '120.97%',
        letterSpacing: '0.11em',
        textShadow: '2px 2px 1px #000000',
        [theme.breakpoints.down('md')]: {
            fontSize: '1.125em'
        },
    },
    buttonStyles: {
        fontFamily: "Abhaya Libre",
        fontStyle: 'normal',
        fontWeight: '400',
        borderRadius: '25px',
        minWidth: '120px',
        border: '1px solid black',
        fontSize: "2em",
        width: '70%',
        ":hover": {
            backgroundColor: 'white',
            color: 'black',
            border: '1px solid #4d0000'
        }
    },
}
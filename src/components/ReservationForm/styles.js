import { theme } from '../../theme/theme'
import image from '../../images/homePage.jpg'
import mobileImage from '../../images/mobileBack.png'
export const styles = {
    root: {
        backgroundImage: `url(${mobileImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh',
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
            alignItems: 'center',
        },
    }
}
export const MUIStyles = {
    wrapper: {
        padding: "50px",
        [theme.breakpoints.down("md")]: {
            padding: '10px',
        },
        border: '1px solid black',
        borderRadius: "25px",
        boxShadow: "5px 5px 15px 5px #000000",
        margin: '8px',
        display: 'flex',
        flexDirection: "column",
        alignItems: "center",
        overflow: "auto",
    },
}
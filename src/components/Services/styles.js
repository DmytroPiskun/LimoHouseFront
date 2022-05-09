import { theme } from "../../theme/theme"
import imageMob from "../../images/servicesBack.jpg"
import imageDesc from "../../images/servicesBackDesktop.jpg"

export const styles = {
    root: {
        backgroundImage: `url(${imageMob})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '850px',
        [theme.breakpoints.up('md')]: {
            backgroundImage: `url(${imageDesc})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        }
    },
}

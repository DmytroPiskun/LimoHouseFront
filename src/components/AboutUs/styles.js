import { theme } from "../../theme/theme";

export const styles = {
    root: {
        minHeight: 860
    },
    textWrapper: {
        padding: '20px'
    },
    aboutUs: {
        paddingLeft: '5%',
        paddingRight: '5%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    group: {
        display: 'flex',
        alignItems: 'center'
    },
    mobileSign: {
        maxWidth: '600px',
        [theme.breakpoints.down('md')]: {
            maxWidth: '270px',
        }
    },
    pic: {
        width: '100%'
    }
}

export const MUISTYLES = {
    text: {
        fontFamily: 'Abhaya Libre',
        font: 'Abhaya Libre',
        fontSize: '24px',
        fontWeight: '500',
        lineHeight: '75%',
        letterSpacing: "0.12em"
    }
}
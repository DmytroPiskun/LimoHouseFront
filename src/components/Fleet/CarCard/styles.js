import { theme } from "../../../theme/theme";

export const styles = {
    root: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        marginLeft: '20px',
        marginRight: '20px',
        [theme.breakpoints.down('md')]: {

        }
    },
    pic: {
        [theme.breakpoints.down('lg')]: {
            width: '100%',
        },
        "::-webkit-touch-callout": "none",
        "::-webkit-user-select": "none",
        "::-khtml-user-select": "none",
        "::-moz-user-select": "none",
        "::-ms-user-select": "none",
        "user-select": "none",
    },
}

export const MUIStyles = {
    text: {
        fontFamily: 'Abhaya Libre',
        fontWeight: '700'
    },
    noselect: {
        "::-webkit-touch-callout": "none",
        "::-webkit-user-select": "none",
        "::-khtml-user-select": "none",
        "::-moz-user-select": "none",
        "::-ms-user-select": "none",
        "user-select": "none",
    },
}
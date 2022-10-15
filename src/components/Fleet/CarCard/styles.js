import { theme } from "../../../theme/theme";

export const styles = {
    root: {
        height: '300px',
        width: '300px',
        maxHeight: '300px',
        maxWidth: '300px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        marginLeft: '20px',
        marginRight: '20px',
    },
    pic: {
        width: '270px',
        height: '240px',
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
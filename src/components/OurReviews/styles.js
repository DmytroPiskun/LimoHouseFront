import { theme } from "../../theme/theme"

export const styles = {
    title: {
        minHeight: '120px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    reviews: {
        position: 'relative',
        backgroundColor: 'white',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '450px',
        [theme.breakpoints.up('md')]: {
            minHeight: '850px'
        }
    }
}

export const MUIStyles = {
    text: {
        fontFamily: 'Abhaya Libre',
        font: 'Abhaya Libre',
        fontWeight: '700',
        lineHeight: '73%',
        letterSpacing: '0.125em',
        fontSize: '1.825em',
        padding: '25px',
        position: "relative",
        "&:before": {
            content: "''",
            border: '2px solid yellow',
            display: "inline-block",
            borderRadius: '50px',
            width: "60px",
            height: "8px",
            background: '#FFFF00',
            left: "95%",
            top: "45%",
            position: "absolute",
        },
        "&:after": {
            content: "''",
            border: '2px solid yellow',
            display: "block",
            borderRadius: '50px',
            width: "60px",
            height: "8px",
            background: '#FFFF00',
            right: "95%",
            top: "45%",
            position: "absolute",
        },
        [theme.breakpoints.up('sm')]: {
            "&:before": {
                content: "''",
                border: '2px solid yellow',
                display: "inline-block",
                borderRadius: '50px',
                width: "130px",
                height: "8px",
                background: '#FFFF00',
                left: "100%",
                top: "45%",
                position: "absolute",
            },
            "&:after": {
                content: "''",
                border: '2px solid yellow',
                display: "block",
                borderRadius: '50px',
                width: "130px",
                height: "8px",
                background: '#FFFF00',
                right: "100%",
                top: "45%",
                position: "absolute",
            },
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '2.825em',
            "&:before": {
                content: "''",
                border: '2px solid yellow',
                display: "inline-block",
                borderRadius: '50px',
                width: "130px",
                height: "8px",
                background: '#FFFF00',
                left: "100%",
                top: "45%",
                position: "absolute",
            },
            "&:after": {
                content: "''",
                border: '2px solid yellow',
                display: "block",
                borderRadius: '50px',
                width: "130px",
                height: "8px",
                background: '#FFFF00',
                right: "100%",
                top: "45%",
                position: "absolute",
            },
        }
    },
}
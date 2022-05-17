import { theme } from "../../../theme/theme"

export const styles = {
    darkBG: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        width: '100vw',
        maxWidth: '100vw',
        minHeight: '850px',
        zIndex: '0',
        top: '50%',
        right: '-50%',
        transform: 'translate(-50%, -50%)',
        position: 'absolute',
    },
    centered: {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    },
    modal: {
        minWidth: "300px",
        minHeight: "800px",
        height: "170px",
        background: "white",
        color: "white",
        zIndex: "10",
        borderRadius: "16px",
        boxShadow: "0 5px 20px 0 rgba(0, 0, 0, 0.04)",
    },
    cardImage: {
        maxWidth: '300px',
        maxHeight: '225px',
        boxShadow: "0px -1px 10px 0px rgba(0, 0, 0, 0.5)",
        borderRadius: "45px",
        padding: '10px',
        [theme.breakpoints.up('md')]: {
            maxWidth: '250px'
        },
        '&:hover': {
            transform: "translateY(-8px)",
            boxShadow: "0px 3px 10px 0px rgba(0, 0, 0, 0.5)",

        }
    },
    cardContainer: {
        maxWidth: '300px',
        maxHeight: '225px',
        [theme.breakpoints.up('md')]: {
            maxWidth: '250px'
        },
        paddingTop: '30px',
    },
    cardText: {
        fontFamily: 'Abhaya Libre',
        font: "Abhaya Libre",
        fontSize: '26px',
        fontWight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginTop: '40px',
        [theme.breakpoints.up('md')]: {
            marginTop: '60px'
        }
    }
}

export const MUIStyles = {
    card: {
        maxWidth: '200px',
        minHeight: '225px',
        maxHeight: '225px',
        [theme.breakpoints.up('md')]: {
            maxWidth: '250px'
        },
    }
}
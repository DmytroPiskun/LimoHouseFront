import { theme } from "../../../theme/theme"

export const styles = {
    sliderContainer: {
        maxWidth: "300px",
        minWidth: "300px",
        minHeight: "800px",
        maxHeight: "800px",
        position: "relative",
        overflow: "hidden",
        margin: "100px auto 0",
        marginTop: "-20px",
        [theme.breakpoints.up('md')]: {
            maxWidth: "750px",
            minWidth: "750px",
            minHeight: "300px",
            maxHeight: "300px",
        }
    },
    reviewBox: {
        padding: '20px',
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        position: "absolute",
        opacity: "0",
        transition: "opacity ease-in-out 0.4s",
    },
    reviewBoxAnim: {
        padding: '20px',
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        position: "absolute",
        opacity: "1",
        transition: "opacity ease-in-out 0.4s",
    },
    reviewTextBlock: {
        marginTop: '20px',
        minHeight: '300px',
        maxHeight: "300px",
        overflowY: "scroll",
        "::-webkit-scrollbar": {
            width: "0px",
        },
    },
    slideButton: {
        background: "#FFFFFF",
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        border: "none",
    },
    nextSlide: {
        top: "75%",
        right: "20px",
        transform: "translateY(-60%)",
    },
    prevSlide: {
        top: "75%",
        left: "20px",
        transform: "translateY(-60%)",
    }
}

export const MUIStyles = {
    reviewer: {
        padding: '16px',
        fontWeight: 'bold',
    },
    reviewText: {
        font: 'Abhaya Libre',
        fontFamily: 'Abhaya Libre',
    }
}
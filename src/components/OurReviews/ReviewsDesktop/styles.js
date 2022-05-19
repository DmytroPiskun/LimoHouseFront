export const styles = {
    root: {
        display: "flex",
        justifyContent: "space-around",
        minHeight: "850px"
    },
    reviewBox: {
        maxWidth: '800px',
        padding: '20px',
        paddingTop: '70px',
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        position: "absolute",
        opacity: '0',
        transition: "opacity ease-in-out 0.6s",
    },
    reviewBoxAnim: {
        maxWidth: '800px',
        padding: '20px',
        paddingTop: '70px',
        display: "flex",
        flexWrap: "wrap",
        position: "absolute",
        alignItems: "center",
        opacity: '1',
        transition: "opacity ease-in-out 0.6s",
    },
    sliderContainer: {
        maxWidth: "600px",
        minWidth: "600px",
        minHeight: "600px",
        overflow: "hidden",
        position: "relative",
    },
    reviewTextBlock: {
        marginTop: '20px',
        maxHeight: "300px",
        overflowY: "scroll",
        "::-webkit-scrollbar": {
            width: "0px",
        },
    },
    reviewContainer: {
        minHeight: '600px',
        display: 'flex',
        alignItems: 'center'
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
        top: "10%",
        right: "50%",
        zIndex: "10",
        transform: "rotate(270deg)",
    },
    prevSlide: {
        bottom: "30%",
        right: "50%",
        zIndex: "10",
        transform: "rotate(-90deg)",
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
        fontSize: '1.125em'
    }
}
export const styles = {
    sliderContainer: {
        maxWidth: "300px",
        minWidth: "300px",
        height: "500px",
        position: "relative",
        overflow: "hidden",
        margin: "100px auto 0",
        marginTop: "-20px",
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
        maxHeight: 230,
        overflowY: "scroll",
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
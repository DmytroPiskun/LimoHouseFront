export const styles = {
    carouselItem: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        maxHeight: '400px',
        color: 'black',
        backgroundColor: 'white',
    },
    carousel: {
        width: '300px',
        overflow: 'hidden'
    },
    inner: {
        whiteSpace: 'nowrap',
        transition: 'transform 0.3s'
    },
    indicators: {
        display: 'flex',
        justifyContent: 'center',
    },
    buttonStyled: {
        margin: '4px',
        minWidth: '100px',
        display: "inline-block",
        outline: "none",
        lineHeight: 1,
        borderRadius: "500px",
        transitionProperty: "background-color,border-color,color,box-shadow,filter",
        transitionDuration: ".3s",
        border: "1px solid transparent",
        textTransform: "uppercase",
        whiteSpace: "normal",
        textAlign: "center",
        padding: "16px 14px 18px",
        color: "#616467",
        boxShadow: "inset 0 0 0 2px #616467",
        backgroundColor: "transparent",
        "::hover": {
            color: "#fff",
            backgroundColor: "#616467",
        }
    }
}
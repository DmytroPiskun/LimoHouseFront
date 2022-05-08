export const textAnimationLeftToRight = {
    hidden: {
        x: -200,
        opacity: 0,
    },
    vissible: (custom) => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 },
    }),
};

export const textAnimationRightToLeft = {
    hidden: {
        x: 200,
        opacity: 0,
    },
    vissible: (custom) => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 },
    }),
}

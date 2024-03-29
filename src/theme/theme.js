import { createTheme } from "@mui/system";

export const theme = createTheme({
    breakpoints: {
        keys: ['xs', 'sm', 'md', 'lg', 'xl'],
        values: {
            xs: 0,
            sm: 550,
            md: 767,
            lg: 992,
            xl: 1300,
        }
    },
    overrides: {
        MuiStepIcon: {
            root: {
                '&$completed': {
                    color: 'pink',
                },
                '&$active': {
                    color: 'red',
                },
            },
            active: {},
            completed: {},
        },
    }
})
import { createTheme } from "@mui/system";

export const theme = createTheme({
    breakpoints: {
        keys: ['xs', 'sm', 'md', 'lg', 'xl'],
        values: {
            xs: 0,
            sm: 600,
            md: 768,
            lg: 992,
            xl: 1200,
        }
    }
})
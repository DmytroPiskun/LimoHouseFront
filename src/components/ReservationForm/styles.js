import { theme } from '../../theme/theme'

export const styles = {
    root: {
        width: 100
    }
}

export const MUIStyles = {
    wrapper: {
        width: '50%',
        [theme.breakpoints.down('lg')]: {
            width: '80%'
        }
    }
}
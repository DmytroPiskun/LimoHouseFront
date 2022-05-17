const mediaValue = (isMobile, isTablet, isDesktop) => {
    if (isMobile === true && isTablet === false && isDesktop === false) {
        return 'mobile'
    }
    if (isTablet === true && isDesktop === false) {
        return 'tablet'
    }
    return 'desktop'
}

export default mediaValue
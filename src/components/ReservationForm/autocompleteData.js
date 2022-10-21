function generateYearsBetween(startYear, endYear) {
    const endDate = endYear || new Date().getFullYear();
    let years = [];

    for (var i = startYear; i <= endDate; i++) {
        years.push(startYear);
        startYear++;
    }
    return years;
}

export const years = generateYearsBetween(2022, 2042)
export const months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];
export const creditCards = ["Cash", "Visa", "Master Card", "American Express", "Discover Card"]
export const locations = ["Manhattan", "Queens", "Bronx", "Staten island", "New York State", "New Jersey", "Connecticut", "Pennsylvania", "JFK Airport", "LA Guardia Airport", "Newark Airport"]
export const filterCountries = (allCountries, continent) =>{
    return continent === 'all'?allCountries:allCountries.filter(e=>e.region===continent)
}

export const filterByAcrivities = (allCountries, allActivities, activity)=>{
    console.log(allActivities)
    return activity === 'all'?allCountries
    :allActivities.filter(e=>e.name===activity)[0].countries
}
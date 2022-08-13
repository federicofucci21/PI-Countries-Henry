//Auxiliares logica de filtros y ordenamiento.

//Filters

export const filterCountries = (allCountries, continent) =>{
    return continent === 'all'?allCountries:allCountries.filter(e=>e.region===continent)
};

export const filterByAcrivities = (allCountries, allActivities, activity)=>{
    console.log(allActivities)
    return activity === 'all'?allCountries
    :allActivities.filter(e=>e.name===activity)[0].countries
};

export const filterActivities = (allActivities, payload)=>{
    return payload === 'all'?allActivities:allActivities.filter(e=>e.name===payload)
};


//Order

export const orderAlf = (countries, payload)=>{

    return payload === 'asc'?
    countries.sort(function(a,b){
        if(a.name>b.name){
            return 1;
        };
        if(a.name<b.name){
            return -1;
        }
        return 0
    }):
    countries.sort(function(a,b){
        if(a.name<b.name){
            return 1;
        };
        if(a.name>b.name){
            return -1;
        }
        return 0
    });
};

export const orderByPopulation = (countries, payload)=>{

    return payload === 'min'?
    countries.sort(function(a,b){
        if(a.population>b.population){
            return 1;
        };
        if(a.population<b.population){
            return -1;
        }
        return 0
    }):
    countries.sort(function(a,b){
        if(a.population<b.population){
            return 1;
        };
        if(a.population>b.population){
            return -1;
        }
        return 0
    });
};


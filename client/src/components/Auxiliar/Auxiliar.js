


export const validate = (activity)=>{
console.log('act', activity)
    let notNull = /\S+/;
    let notNumber = /^[A-Za-z]+$/;
    let errors = {};

    if(!notNull.test(activity.name)){
        errors.name="Name is require"
    };
    if(!notNull.test(activity.difficulty)){
        errors.difficulty="Difficulty must be from 1 to 5"
    };
    if(!notNull.test(activity.duration)){
        errors.duration='You need a duration'
    };
    if(!notNull.test(activity.season)){
        errors.season='You need a season'
    };

    if(!notNumber.test(activity.name)){
        errors.name='Name must be a string'
    };
    if(notNumber.test(activity.difficulty)){
        errors.difficulty='difficulty must be numeric'
    };
    if(notNumber.test(activity.duration)){
        errors.duration='duration must be numeric'
    };
    if(!notNumber.test(activity.season)){
        errors.season='season must be a string'
    };

    // if(
    //     !activity.name || !activity.difficulty || !activity.duration || !activity.season || !activity.countries
    // ){
    //     return (errors='Missing obligatory data')
    // };

    if(
        activity.difficulty < 1 ||
        activity.difficulty > 5 
        ){
        errors.difficulty='Range must be respected'
    }
    if(
        activity.duration < 1 ||
        activity.duration > 24 
        ){
        errors.duration='Range must be respected'
    }

    return errors
}
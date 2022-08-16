import axios from 'axios';

export const GET_ACTIVITIES = 'GET_ACTIVITIES';
export const FILTER_ACTIVITIES = 'FILTER_ACTIVITIES';




export function createActivity(payload){
    return async function(){
        try {
            const activity = await axios.post("http://localhost:3001/activities", payload);
            console.log(payload);
            alert('Activity Created')
            return activity
        } catch (error) {
            console.log(error);
            alert(error.response.data.errors[0].message)
        }


    }
};

export function getActivities(){
    return async function(dispatch){
        const dataActivities = await axios.get('http://localhost:3001/activities');
        // console.log(dataActivities.data);
        return dispatch({
            type: GET_ACTIVITIES,
            payload: dataActivities.data
        })
    }
};

export function filterActivities(payload){
    return{
        type: FILTER_ACTIVITIES,
        payload
    }
}



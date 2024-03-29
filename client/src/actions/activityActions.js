import axios from "axios";

export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const FILTER_ACTIVITIES = "FILTER_ACTIVITIES";

export function createActivity(payload) {
  return async function () {
    try {
      const activity = await axios.post(
        "http://localhost:3001/activities",
        payload
      );
      console.log(payload);
      alert("Activity Created");
      return activity;
    } catch (error) {
      alert("Ya existe esa actividad");
      return console.log(error);
    }
  };
}

export function getActivities() {
  return async function (dispatch) {
    const dataActivities = await axios.get("http://localhost:3001/activities");
    return dispatch({
      type: GET_ACTIVITIES,
      payload: dataActivities.data,
    });
  };
}

export function filterActivities(payload) {
  return {
    type: FILTER_ACTIVITIES,
    payload,
  };
}

export function deleteActivity(id) {
  return async function () {
    try {
      await axios.delete(GET_ACTIVITIES + "/" + id);
      // console.log(activityDelete);
      alert("Activity Deleted");
      // return activityDelete
    } catch (error) {
      console.log(error);
      alert(error.response.data.errors[0].message);
    }
  };
}

import { FACILITY } from "./types";

export const clearAmenities = payload => ({
  type: FACILITY.CLEAR_AMENITIES,
  payload
});

export const getFacilities = () => async dispatch => {
  const url = `https://html.scad.edu/facilities-test/`;
  const request = await fetch(url);

  if (request.ok) {
    const data = await request.json();
    dispatch(setFacilities(data));
  }

  return dispatch(validRequest(request.ok));
};

export const pickedLocation = payload => ({
  type: FACILITY.PICKED_LOCATION,
  payload
});

export const setAmenities = payload => ({
  type: FACILITY.SET_AMENITIES,
  payload
});

const setFacilities = payload => ({
  type: FACILITY.SET_LIST,
  payload
});

const validRequest = payload => ({
  type: FACILITY.VALID_REQUEST,
  payload
});

import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export const GET = "GET";
export const NEXT = "NEXT";
export const PREVIOUS = "PREVIOUS";

export function search(value) {
  return function (dispatch, getState) {
    let offset = 0;
    axios
      .get(
        `http://localhost:3001?location=${value}&categories=parking&offset=${offset}`
      )
      .then((response) => {
        dispatch({
          type: GET,
          payload: {
            store: response.data,
            offset: 0,
            value: value,
          },
        });
      });
  };
}

export function next() {
  return function (dispatch, getState) {
    let array = getState().array;
    if (array.length === 8) {
      let offset = getState().offset + 8;
      let value = getState().value;
      axios
        .get(
          `http://localhost:3001?location=${value}&categories=parking&offset=${offset}`
        )
        .then((response) => {
          dispatch({
            type: NEXT,
            payload: {
              store: response.data,
              offset,
            },
          });
        });
    }
  };
}

export function previous() {
  return function (dispatch, getState) {
    let offset = getState().offset;
    let value = getState().value;
    if (offset >= 8) {
      offset = offset - 8;
      axios
        .get(
          `http://localhost:3001?location=${value}&categories=parking&offset=${offset}`
        )
        .then((response) => {
          dispatch({
            type: PREVIOUS,
            payload: {
              store: response.data,
              offset,
            },
          });
        });
    }
  };
}

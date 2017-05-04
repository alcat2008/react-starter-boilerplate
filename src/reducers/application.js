
import * as types from '../constant/dictActions';

const initialState = {
  subdomains: {},
  flows: {},
  info: {},
  properties: {},
};

export default function update(state = initialState, action) {
  switch (action.type) {
    case types.SERVICE_LIST:
      // const servicesList = [];
      // Object.keys(action.payload).forEach(subdomain => {
      //   servicesList.push(action.payload[subdomain].)
      // })
      return {
        ...state,
        subdomains: action.payload.subdomains,
        properties: action.payload.properties,
      };
    case types.SERVICE_FLOW:
      // const servicesList = [];
      // Object.keys(action.payload).forEach(subdomain => {
      //   servicesList.push(action.payload[subdomain].)
      // })
      return {
        ...state,
        flows: action.payload.subdomains,
        properties: action.payload.properties,
      };
    case types.SERVICE_INFO:
      return {
        ...state,
        info: action.payload
      };
    default:
      return state;
  }
}

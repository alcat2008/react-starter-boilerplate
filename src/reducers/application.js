
const initialState = {
  subdomains: {},
  info: {},
};

export default function update(state = initialState, action) {
  switch (action.type) {
    case 'SERVICE_LIST':
      // const servicesList = [];
      // Object.keys(action.payload).forEach(subdomain => {
      //   servicesList.push(action.payload[subdomain].)
      // })
      return {
        ...state,
        subdomains: action.payload
      };
    case 'SERVICE_INFO':
      return {
        ...state,
        info: action.payload
      };
    default:
      return state;
  }
}

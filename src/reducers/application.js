
const initialState = {
  subdomains: {}
};

export default function update(state = initialState, action) {
  switch (action.type) {
    case 'SERVICE_LIST':
      // const servicesList = [];
      // Object.keys(action.payload).forEach(subdomain => {
      //   servicesList.push(action.payload[subdomain].)
      // })
      return {
        subdomains: action.payload
      };
    default:
      return state;
  }
}

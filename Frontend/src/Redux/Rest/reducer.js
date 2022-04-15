import { REST_ERR, REST_LODING, REST_SUCCESS } from "./action";

const initstate = {
  loding: false,
  err: false,
  product: [],
};
const rest_reducer = (store = initstate, { type, payload }) => {
  switch (type) {
    case REST_LODING:
      return { ...store, loding: true };

    case REST_SUCCESS:
      return { ...store, loding: false, product: [...payload], err: false };

    case REST_ERR:
        return {...store , err:true , loding:true}   
    default:
      return store;
  }
};


export {rest_reducer}
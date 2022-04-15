export const REST_LODING = "REST_LODING"
export const REST_SUCCESS = "REST_SUCCESS"
export const REST_ERR = "REST_ERR"

export const Rest_loding = () =>({type:REST_LODING})
export const Rest_success = (payload) =>({type:REST_SUCCESS , payload})
export const Rest_err = () =>({type:REST_ERR})


export const getdata = () => (dispatch) =>{
     dispatch(Rest_loding())
     fetch('https://fakestoreapi.com/products', {})
            .then(res=>res.json())
            .then(res=> dispatch(Rest_success(res)))
            .catch((err)=> dispatch(Rest_err()))
}
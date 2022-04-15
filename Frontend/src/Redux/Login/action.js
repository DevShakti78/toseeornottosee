export const LOGIN_LODING = "LOGIN_LODING"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_ERR = "LOGIN_ERR"

export const login_loding = () =>({type:LOGIN_LODING})
export const login_success = (payload) =>({type:LOGIN_SUCCESS , payload})
export const login_err = () =>({type:LOGIN_ERR})
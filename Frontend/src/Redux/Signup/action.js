export const SIGN_LODING = "SIGN_LODING"
export const SIGN_SUCCESS = "SIGN_SUCCESS"
export const SIGN_ERR = "SIGN_ERR"

export const sign_loding = () =>({type:SIGN_LODING})
export const sign_success = (payload) =>({type:SIGN_SUCCESS , payload})
export const sign_err = () =>({type:SIGN_ERR})
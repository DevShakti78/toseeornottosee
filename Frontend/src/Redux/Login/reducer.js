import {LOGIN_ERR,LOGIN_LODING,LOGIN_SUCCESS}  from "./action"

const intistate = {
    loding : false,
    isAuth:false,
    token:"",
    err:false,
}

const login_reducer = (store = intistate , {type , payload}) =>{
     switch (type) {
         case LOGIN_SUCCESS:
             return {...store ,
              loding : false,
                isAuth:true,
                token:payload,
                err:false, }
          case LOGIN_LODING :
              return {...store,
                loding : true
            }   
          case LOGIN_ERR:
              return {
                  ...store ,
                  loding:false,
                  err:true
              }  
     
         default:
          return   {...store}
     }
}

export {login_reducer}
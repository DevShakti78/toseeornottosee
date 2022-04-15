import {SIGN_ERR,SIGN_LODING,SIGN_SUCCESS}  from "./action"

const intistate = {
    loding : false,
    isAuth:false,
    token:"",
    err:false,
}

 const sign_reducer = (store = intistate , {type , payload}) =>{
     switch (type) {
         case SIGN_SUCCESS:
             return {...store ,
              loding : false,
                isAuth:true,
                token:payload,
                err:false, }
          case SIGN_LODING :
              return {...store,
                loding : true
            }   
          case SIGN_ERR:
              return {
                  ...store ,
                  loding:false,
                  err:true
              }  
     
         default:
          return   {...store}
     }
}

export {sign_reducer}
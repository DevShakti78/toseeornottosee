import React, { useState } from "react";
import { useDispatch , useSelector } from "react-redux";
import { login_err, login_loding, login_success } from "../Redux/Login/action";
import { useNavigate , Navigate} from "react-router-dom";

export const Login = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState(" ");
  const {token , isAuth} = useSelector((state) => state.sign)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(isAuth)
  if(!isAuth){
    return <Navigate to={"/sign"}/>
  }
  const handleSubmit = () => {
    const userdata = {
      email,
      password,
    };
 
    
     
    dispatch(login_loding());
    fetch(`https://reqres.in/api/login`, {
      method: "POST",
      body: JSON.stringify(userdata),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) =>res.json())
      .then((res) => {
        dispatch(login_success(res.token))
      navigate('/get-restaurants')
      })
      .catch((err) => {
        dispatch(login_err());
        navigate("/sign")
      })
  };

  return (
    <div>
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => {
          setemail(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

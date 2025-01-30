import React,{useState,useContext} from 'react'
import { UserContext } from '../context/AuthContext';
import axios from "axios"

const Login = () => {
    const[username ,setUsername] = useState("");
    const[password ,setPassword] = useState("");

    const[err,setErr] = useState(false);
    const{login} = useContext(UserContext);

    const handleLogin = async(e) => {
        e.preventDefault();
        try{
            let response = await axios.post('https://bitter-season-mastodon.glitch.me/login',{
               username,password
            });
            console.log(response,"response");
            if(response.data.success){
                console.log(response.data,"token")
                const{token} = response.data;
                login(token);

            }
        }catch(err){
            setErr(true);
            console.error(err);
        }
       
    }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input type="submit" value="login" />
      </form>
      {err && <p>Invalid Credentials</p>}
    </div>
  );
}

export default Login
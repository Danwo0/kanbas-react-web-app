import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "./client";
import * as client from "./client";
export default function Signin() {
  const [credentials, setCredentials] = useState<User>({ _id: "",
    username: "", password: "", firstName: "", lastName: "", role: "USER"
  });
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
    navigate("/Kanbas/Account/Profile");
  };
  const signup = () => {
    navigate("/Kanbas/Account/Signup");
  }
  return (
    <div>
      <h1>Signin</h1>
      <label htmlFor="signin-username" className="form-label">Username</label>
      <input className="form-control" id="signin-username" value={credentials.username} onChange={(e) =>
        setCredentials({ ...credentials, username: e.target.value })}/>
      <label htmlFor="signin-password" className="form-label">Password</label>
      <input type="password" className="form-control" id="signin-password" value={credentials.password} onChange={(e) =>
        setCredentials({ ...credentials, password: e.target.value })}/>
      <button type="submit" className="btn btn-primary" onClick={signin}> Signin </button>
      <button type="submit" className="btn btn-secondary" onClick={signup}> Signup </button>
    </div>
  );
}

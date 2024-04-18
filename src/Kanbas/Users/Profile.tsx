import * as client from "./client";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Profile() {
  const [profile, setProfile] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    role: "USER",
  });
  const navigate = useNavigate();
  const fetchProfile = async () => {
    const account = await client.profile();
    setProfile(account);
  };
  const save = async () => {
    await client.updateUser(profile);
  };
  const signout = async () => {
    await client.signout();
    navigate("/Kanbas/Account/Signin");
  };
  useEffect(() => {
    fetchProfile();
  }, []);
  return (
    <div>
      <h1>Profile</h1>
      <Link to="/Kanbas/Account/Admin/Users" className="btn btn-warning w-100">
        Users
      </Link>
      {profile && (
        <div>
          <label htmlFor="profile-username" className="form-label">Username</label>
          <input
            id="profile-username"
            className="form-control"
            value={profile.username}
            onChange={(e) =>
              setProfile({ ...profile, username: e.target.value })
            }
          />
          <label htmlFor="profile-password" className="form-label">Password</label>
          <input
            id="profile-password"
            className="form-control"
            value={profile.password}
            onChange={(e) =>
              setProfile({ ...profile, password: e.target.value })
            }
          />
          <label htmlFor="profile-fname" className="form-label">First name</label>
          <input
            id="profile-fname"
            className="form-control"
            value={profile.firstName}
            onChange={(e) =>
              setProfile({ ...profile, firstName: e.target.value })
            }
          />
          <label htmlFor="profile-lname" className="form-label">Last name</label>
          <input
            id="profile-lname"
            className="form-control"
            value={profile.lastName}
            onChange={(e) =>
              setProfile({ ...profile, lastName: e.target.value })
            }
          />
          <label htmlFor="profile-dob" className="form-label">Date of birth</label>
          <input
            id="profile-dob"
            className="form-control"
            value={profile.dob}
            type="date"
            onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
          />
          <label htmlFor="profile-email" className="form-label">Email</label>
          <input
            id="profile-email"
            className="form-control"
            value={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          />
          <label htmlFor="profile-role" className="form-label">Role</label>
          <select
            id="profile-role"
            className="form-select"
            onChange={(e) => setProfile({ ...profile, role: e.target.value })}
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
        </div>
      )}
      <button className="btn btn-primary" onClick={save}>Save</button>
      <button className="btn btn-danger" onClick={signout}>Signout</button>
    </div>
  );
}

import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";

function Account() {
  const { id } = useParams();
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();
  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };
  const findUserById = async (id) => {
    const user = await client.findUserById(id);
    setAccount(user);
  };
  const signout = async () => {
    await client.signout();
    navigate("/Kanbas/SignIn");
  };

  const save = async () => {
    await client.updateUser(account);
  };

  useEffect(() => {
    if (id) {
      findUserById(id);
    } else {
      fetchAccount();
    }
  }, []);
  
  return (
    <div className="w-50">
      <h1>Account</h1>
      {account && (
        <div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="text"
              className="form-control"
              placeholder="password"
              value={account.password}
              onChange={(e) =>
                setAccount({ ...account, password: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              value={account.firstName}
              onChange={(e) =>
                setAccount({ ...account, firstName: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              value={account.lastName}
              onChange={(e) =>
                setAccount({ ...account, lastName: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label>Date of Birth</label>
            <input
              type="text"
              className="form-control"
              placeholder="Date of Birth"
              value={account.dob}
              onChange={(e) => setAccount({ ...account, dob: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={account.email}
              onChange={(e) =>
                setAccount({ ...account, email: e.target.value })
              }
            />
          </div>

          <select
            onChange={(e) => setAccount({ ...account, role: e.target.value })}
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          <button className="btn btn-primary w-100" onClick={save}>
            Save
          </button>
          <button className="btn btn-danger w-100" onClick={signout}>
            Signout
          </button>
          <Link
            to="/Kanbas/Account/admin/users"
            className="btn btn-warning w-100"
          >
            Users
          </Link>
        </div>
      )}
    </div>
  );
}
export default Account;

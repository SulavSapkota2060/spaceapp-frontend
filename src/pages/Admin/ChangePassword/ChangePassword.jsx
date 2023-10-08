import { useEffect, useState } from "react";
import "./ChangePassword.css";
import { changePassword, checkAuth } from "../../../utils/UserAPI";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const [userInfo, changeUserInfo] = useState({});
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    // Password validation
    if (newPassword !== confirmPassword) {
      setErrorMessage("Passwords don't match");
      return;
    }
    checkAuth().then((res) =>
      changePassword({
        email: res.data.data.email,
        full_name: res.data.data.full_name,
        password: newPassword,
        password2: confirmPassword,
      }).then((res) => {
        if (res.status == 200) {
          navigate("/login", {
            state: {
              status: "success",
              text: "Password Changed Successfully!",
            },
          });
        }
      })
    );
    console.log("Password change submitted:", {
      currentPassword,
      newPassword,
    });

    // Reset form fields
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setErrorMessage("");
  };
  return (
    <div className="change-password">
      <form onSubmit={handleSubmit}>
        <h2>Change Password</h2>
        {errorMessage && <div className="error">{errorMessage}</div>}

        <div>
          <label htmlFor="new-password">New Password:</label>
          <input
            type="password"
            id="new-password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Change Password</button>
      </form>
    </div>
  );
};

export default ChangePassword;

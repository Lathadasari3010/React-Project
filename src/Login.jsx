import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./store";

function Login() {
  let username = useRef(null);
  let password = useRef(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track if user is logged in
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let LoginCheck = () => {
    if (username.current.value === "ratan" && password.current.value === "Ratan@123") {
      dispatch(login(username.current.value));
      setIsLoggedIn(true); // Set the login state to true after successful login
      navigate("/home");
    } else {
      alert("Your login credentials are wrong. Please check them!");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        {/* Left Column: Welcome Back and Information */}
        <div className="col-md-5 mb-4">
          <h3 className="text-center mb-4">Welcome Back! <span role="img" aria-label="smile">😊</span></h3>
          <p className="text-muted text-center">
            We’re happy to have you back! Please log in to continue to your personalized dashboard.
          </p>
          <ul className="list-unstyled">
            <li><span role="img" aria-label="info">💡</span> Ensure your username and password are correct to avoid login issues.</li>
            <li><span role="img" aria-label="warning">⚠️</span> If you've forgotten your credentials, use the "Forgot Password" link to reset your password.</li>
            <li><span role="img" aria-label="security">🔒</span> For better security, please enable two-factor authentication (2FA) on your account.</li>
            <li><span role="img" aria-label="support">🆘</span> For any issues, feel free to reach out to our support team at <a href="mailto:support@company.com">support@company.com</a>.</li>
            <li><span role="img" aria-label="question">❓</span> Need help? Check our <a href="/help-center">Help Center</a> for common troubleshooting steps and FAQs.</li>
            <li><span role="img" aria-label="announcement">📣</span> Stay tuned for exciting new features coming soon to your dashboard!</li>
          </ul>
          
        </div>

        {/* Right Column: Login Form */}
        <div className="col-md-5">
          <h1 className="text-center mb-4 text-primary">Login <span role="img" aria-label="lock">🔒</span></h1>
          <div className="card p-4 shadow-lg">
            <form>
              <div className="mb-3">
                <label className="form-label">Username <span role="img" aria-label="person">👤</span></label>
                <input
                  type="text"
                  ref={username}
                  className="form-control"
                  placeholder="Enter username"
                  style={{ maxWidth: "100%" }} // Make input width 100% of the container
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password <span role="img" aria-label="key">🔑</span></label>
                <input
                  type="password"
                  ref={password}
                  className="form-control"
                  placeholder="Enter password"
                  style={{ maxWidth: "100%" }} // Make input width 100% of the container
                />
              </div>
              <button
                type="button"
                onClick={LoginCheck}
                className="btn btn-primary w-100 py-2"
                style={{ maxWidth: "100%" }} // Button width will be 100% of the container
              >
                Login <span role="img" aria-label="rocket">🚀</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Welcome Section after Login */}
      {isLoggedIn && (
        <div className="mt-5">
          <h2 className="text-center">Welcome, Ratan! <span role="img" aria-label="wave">👋</span></h2>
        </div>
      )}

      {/* Footer with Additional Information */}
      <footer className="mt-5 bg-dark text-white text-center py-3">
        <p>&copy; 2025 Your Company. All Rights Reserved.</p>
        <p>For assistance, please contact us at <a href="mailto:support@company.com" className="text-white">support@company.com</a></p>
      </footer>
    </div>
  );
}

export default Login;

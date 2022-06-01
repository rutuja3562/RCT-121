import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/Users">Users</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};

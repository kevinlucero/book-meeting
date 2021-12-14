import { Outlet, Link } from "react-router-dom";

export default function App(props) {
  return (
    <div>
      <h1>Book Meeting</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/">Booking List</Link>
        <br />
      </nav>
      <Outlet />
    </div>
  );
}
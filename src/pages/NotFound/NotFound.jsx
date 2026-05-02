import "./NotFound.css";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Page not found</p>
      <Link to="/" className="not-found-link">
        Go back home
      </Link>
    </div>
  );
}

export default NotFound;

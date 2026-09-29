import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route , NavLink} from "react-router";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<div>About Page</div>} />
      <Route path="/users" element={<div>Users Page</div>} />
    </Routes>
  </BrowserRouter>,
);

export default function App() {
  return (
    <div>
      <h1>Router Demo</h1>
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/users">Users</NavLink></li>
        </ul>
      </nav>
    </div>
  );
}

export function About() {
  return (
    <div>
      <h2>About Page</h2>
      <p>This is the about page.</p>
    </div>
  );
}

export function Users() {
  return (
    <div>
      <h2>Users Page</h2>
      <p>This is the users page.</p>
    </div>
  );
}

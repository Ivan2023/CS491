import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route , NavLink} from "react-router";
import { Container, Image, Button } from "react-bootstrap";
import myImage from './assets/IMG_4144.png';
import animationData from './assets/black-rainbow-cat.json';
import Lottie from 'lottie-react';

const root = document.getElementById("root");

const LottieAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div>
      <h3>Lottie Animation</h3>
      <br />
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

 <Container>
    <LottieAnimation />
    <Image src={myImage} alt="My Image" fluid />
        <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/users">Users</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
  </Container>


ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<div>About Page</div>} />
      <Route path="/users" element={<div>Users Page</div>} />
      <Route path="/contact" element={<div>Contact Page</div>} />
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
    <Button variant="primary" onClick={saveData}>
      Save the Date!
    </Button>
  </BrowserRouter>,
);

const name = "John";
  const city = "NYC";
  const saveData = () => {
    alert("Data saved!");
  }

export default function App() {
  
  return (
    <div>
      <h1>Router Demo</h1>
        <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/users">Users</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
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

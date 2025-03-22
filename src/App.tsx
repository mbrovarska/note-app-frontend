
import './App.css';
import { Routes, Route } from "react-router";
import SignUpPage from "./pages/sign-up";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUpPage/>}/>
    </Routes>
  )
}

export default App

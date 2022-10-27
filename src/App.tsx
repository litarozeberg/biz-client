import './App.css';
import { ToastContainer } from 'react-toastify';
import Login from './components/Login';
import Register from './components/Register';
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom"
import NewCard from './components/NewCard';
import About from './components/About';
import EditCard from './components/EditCard';
import AllCards from './components/AllCards';
import MyCards from './components/MyCards';
import Footer from './components/Footer';
import PageNotFound from './components/PageNotFound';
import Home from './components/Home';



function App() {
const myName: string ='Lital-Rozenberg'
  return (
   <div className="App">
      <ToastContainer/>
       <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/SignIn"/>} />
          <Route path="/signIn" element={<Login />} />
          <Route path="/signUp" element={<Register />} />
           <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/newcard" element={<NewCard />} />
           <Route path="/mycards">
            <Route index element={<MyCards />} />   
            <Route path=":id" element={<EditCard />} />
          </Route> 
          <Route path="/allcards" element={<AllCards />} />
                   

          <Route path="*" element={<PageNotFound />} />

        </Routes>
      </Router>
      <Footer myName={myName} />
    </div>
  );
}

export default App;

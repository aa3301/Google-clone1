import {  Routes, Route } from "react-router-dom";
import './App.css';
import Search from './Search';
import About from './About';
import Images from './Images';

function App() {
  return (
   <>
   <Routes>
   <Route exact path="/" element={<Search />}></Route>
   <Route exact path="/about" element={<About />}></Route>
   <Route exact path="/images" element={<Images />}></Route>


    </Routes>         

</>
    
   
  );
}/////

export default App;

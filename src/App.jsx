import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Head from './Components/Head';
import Footer from './Components/Footer';
import Main from './Components/Main';

const App = () => {

  const ProductDetails=[
    {id:1,pname:"Fancy Product"},
    {id:2,pname:"Special Item"},
    {id:3,pname:"Sale Item"},
    {id:4,pname:"Popular Item"},
    {id:5,pname:"Fancy Product"},
    {id:6,pname:"Special Item"},
    {id:7,pname:"Sale Item"},
    {id:8,pname:"Popular Item"}
  ]
  const [count,setcount]=useState(0);
  const[Value,SetValue]=useState(ProductDetails);
  return (
    <div>
      <Navbar count={count} setcount={setcount}/>
      <Head />
      <Main Value={Value} SetValue={SetValue} count={count} setcount={setcount} />
      <Footer />
    </div>
  );
};

export default App;
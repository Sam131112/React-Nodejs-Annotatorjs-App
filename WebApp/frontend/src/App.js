import logo from './logo.svg';
import './App.css';
import Button from "./Button";
import Anno from "./Anno";
import React, {useState} from "react";
import AnnoList from "./AnnoList";
import Annotator from "./Annotator";
import {Helmet} from "react-helmet";

function App() {
  const [annostate,setannostate] = useState([{'text':null,'category':null,'quote':null,'_id':0}]);
  return ( 
<div className="App">
<Annotator/>
<Button annostate={annostate} setState = {state => setannostate(state)}/>
{}
<AnnoList annolist={annostate} />
</div>
  );
}
export default App;

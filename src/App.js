import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Table from './components/Table';
import Form from './components/Form';
import React, {useState} from 'react';


function App() {
  const [list, setList] = useState([])
    return(
      <div className='container'>
        <Navbar/>
        <Form list={list} setList={setList}/>
        <Table list={list}/>
      </div>
    )
}

export default App;

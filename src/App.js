import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Table from './components/Table';
import Form from './components/Form';
import React, {useState} from 'react';


function App() {
  const [formData, setFormData] = useState({})
  const [list, setList] = useState([])
    return(
      <div className='container'>
        <Navbar/>
        <Form formData={formData} setFormData={setFormData}/>
        <Table list={list} setList={setList}/>
      </div>
    )
}

export default App;

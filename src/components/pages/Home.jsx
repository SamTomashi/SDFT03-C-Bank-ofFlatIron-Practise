import Navbar from '../commons/Navbar';
import Table from '../commons/Table';
import Form from '../commons/Form';
import React, {useState} from 'react';

const Home = ()=> {
    const [list, setList] = useState([])
    return(
        <>
            <Form list={list} setList={setList}/>
            <Table list={list}/>
        </>
    )
}

export default Home
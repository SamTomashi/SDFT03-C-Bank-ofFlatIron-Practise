import Table from '../commons/Table';
import Form from '../commons/Form';
import React, {useState} from 'react';

const Home = ()=> {
    const [list, setList] = useState([])
    // const controler = new AbortController()
    // controler.abort()
    return(
        <>
            <Form list={list} setList={setList}/>
            <Table list={list}/>
        </>
    )
}

export default Home
import React from 'react'
import Nav from './Nav';
import Title from './Title';
import Content from './Content';

export default function Body(props) {
    console.log(props.checkStatus);

    return (

        <div className="body">
            <Title/>
            <Nav checkStatus={props.checkStatus}/>
            <Content checkStatus={props.checkStatus}/>
        </div>
    )
}



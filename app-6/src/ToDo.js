import React, {Component} from 'react'

function ToDo(props) {

    let listed = props.list.map((e, i)=> 
    <div key={i}>{e}</div>)
    return <h2>{listed}</h2>
}

export default ToDo
import React from 'react'

function ToDo(props){

    return(

        <div>

        
            {props.list.map((element,index)=>{
                return <div key={index}>
                <h2>{element}</h2>
                </div>
            })}

        </div>


        

    )

}




export default ToDo
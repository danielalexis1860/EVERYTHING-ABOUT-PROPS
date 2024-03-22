import React from "react"

export default function Done(props){
    console.log(props)
    return(
        <div>
          <h3>{props.setup}</h3>
          <p>{props.punchline}</p>
          <hr />
    </div>
    ) 
}
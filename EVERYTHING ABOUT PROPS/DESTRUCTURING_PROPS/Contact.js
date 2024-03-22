import React from "react"

export default function Contact({img, name, phone, email}) {
    return( 
        <div className="contact-card">  
            <img src = {img}/>
            <h3>{name}</h3>

            <div className="info-group">
                <img src = "./images/phone-icon.png"/>
                <p>{phone}</p>
            </div>
            

            <div className="info-group">
                <img src = "./images/mail-icon.png"/>
                <p>{email}</p>
            </div>  
            

        </div>  // End of div className contact-card 
    )   
}  // you dont comment in a function in react  until the end of all the div. You only comment on the beside 
//right the bracket of the opening of bracket. {img: image} when renaming 

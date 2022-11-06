import React from "react";


const Information = (props)=>{

    return(

        <div className="userInfo">

            <img className="imageCard" src="https://i.pinimg.com/originals/6a/cf/e0/6acfe061a18caf995c09b3de93a6ad82.jpg" alt="user"/>
            <div className="info">
                <div className="userName">{props.name}</div>
                <div className="userEmail">{props.email}</div>
            </div>

        </div>
    )

}

export default Information
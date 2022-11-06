import React from "react"
import Information from "./Information"
import Title from "./Title"
import Label from "./Label"

const UserInfo = (props) => {

    // const user = users.find((u) => u.id === props.post.userId)

    const title=props.title
    const body=props.body
    const username=props.name
    const email=props.email

    return (
        <div>
            <Title  text={title}/>
            <Label text={body}/>

            <Information name={username} email={email} />
        </div>
    
    )

}

export default UserInfo
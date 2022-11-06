import React from "react"
import UserInfo from "./UserInfo"
import posts from "../data/posts"
import users from "../data/users"

const UserCard = ()=>{
    return(
        <div className="card">
            <div>
                {
                    posts.map((post)=>{

                        const user = users.find((user) => user.id === post.userId)


                        return (
                            <UserInfo 
                                key={post.id} 
                                title={post.title}
                                body={post.body}
                                name={user.name}
                                email={user.email}
                                />
                        )
                    })   
                }
            </div>
           
        </div>
    )
}

export default UserCard
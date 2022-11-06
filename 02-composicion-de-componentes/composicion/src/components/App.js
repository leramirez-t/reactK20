// import Title from "./Title"
import UserCard from "./UserCard"
// import Fruits from "./Fruits"
// import { useSyncExternalStore } from "react"
import users from "../data/users"

// const userData = {
    
//         id: 1,
//         name: "Leanne Graham",
//         username: "Bret",
//         email: "Sincere@april.biz",
//         phone: "1-770-736-8031 x56442",
//         website: "hildegard.org"
// }

// const user2 = {
    
//         id: 2,
//         name: "Ervin Howell",
//         username: "Antonette",
//         email: "Shanna@melissa.tv",
//         phone: "010-692-6593 x09125",
//         website: "anastasia.net"
// }



// const users = [
//     {
//     id: 2,
//     name: "Ervin Howell",
//     username: "Antonette",
//     email: "Shanna@melissa.tv",
//     phone: "010-692-6593 x09125",
//     website: "anastasia.net"
//     },
//     {
    
//         id: 1,
//         name: "Leanne Graham",
//         username: "Bret",
//         email: "Sincere@april.biz",
//         phone: "1-770-736-8031 x56442",
//         website: "hildegard.org"
//     }
// ]

const App = () => {
    return (
        <div className="container">
            {
                users.map((user)=>(
                        <UserCard user={user}/>
                    )
                )
            }
            {/* <Title texto="Manzana"/>
            <Title texto="Guayaba"/>
            <Title texto="Mango"/>
            <Title texto="Uva"/> */}

            {/* <Fruits/> */}
            {/* <UserCard  user={userData} />
            <UserCard user={user2} /> */}
        </div>
    )
}

export default App
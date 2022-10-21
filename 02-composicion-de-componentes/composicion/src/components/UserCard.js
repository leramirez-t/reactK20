import Title from "./Title"
import Label from "./Label"

const UserCard = (props)=>{
    // console.log("props", props.saludo)
    return(
        <div className="card">
            <Title  text={props.user.name}/>
            <Label titleProp="Email: " text={props.user.email}/>
            <Label titleProp="Phone: " text={props.user.phone}/>
            <Label titleProp="Website: " text={props.user.website}/>
            {/* <h2>{props.user.name}</h2> */}
            {/* <p className="email">Email: {props.user.email}</p> */}
            {/* <p className="phone">Phone: {props.user.phone}</p> */}
            {/* <p className="website">Website: {props.user.website}</p> */}
        
        </div>
    )
}

export default UserCard
// import Title from "./Title"
import UserCard from "./UserCard"

const userData = {
    
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org"
}

const user2 = {
    
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        address: {
          street: "Victor Plains",
          suite: "Suite 879",
          city: "Wisokyburgh",
          zipcode: "90566-7771",
          geo: {
            lat: "-43.9509",
            lng: "-34.4618",
          },
        },
        phone: "010-692-6593 x09125",
        website: "anastasia.net",
        company: {
          name: "Deckow-Crist",
          catchPhrase: "Proactive didactic contingency",
          bs: "synergize scalable supply-chains",
        }
      
}

const App = () => {
    return (
        <div className="orderCards">
            {/* <Title texto="Manzana"/>
            <Title texto="Guayaba"/>
            <Title texto="Mango"/>
            <Title texto="Uva"/> */}
            <UserCard  user={userData} />
            <UserCard user={user2} />
        </div>
    )
}

export default App
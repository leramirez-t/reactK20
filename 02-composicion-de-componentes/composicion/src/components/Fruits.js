import Title from "./Title"

const Fruits = (props) => {

    const frutas = ["mango", "manzana", "fresa"]
    return (
        // <h1>
        //     Hola Koders
        // </h1>
        <div>

            {
                frutas.map((fruta, index)=>(
                    <Title key={fruta} text={fruta} />
                    ))
            }

            
            {/* <Title text={frutas[0]} />
            <Title text={frutas[1]} />
            <Title text={frutas[2]} />
            <Title text={frutas[3]} /> */}
        </div>
    )
}

export default Fruits
import Logo from "./Logo"
import CardText from "./CardText"

const Card = () => {
    return (
        <div>
            <body>
                <main class="container">
                    <div class="row  card-car-container justify-content-center">
                        <div class="card text-bg-warning col-sm-12 col-md-12 col-lg-12">
                            <Logo></Logo>
                            <div class="card-body">
                                <h5 class="card-title">Sedans</h5>
                               <CardText></CardText>
                                <a href="#" class="btn btn-light rounded-pill">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </main>
            </body>

        </div>
    )
}

export default Card
const Card = () => {

    return (
        <div>
            <div className="card_conf">
                <div className="image">
                    <img src="/icon-sedans.svg" alt="" />
                </div>
                <div class="card-body">
                    <h5 class="card-title">Sedans</h5>
                    <br />
                    <p className="card-text">
                        Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.
                    </p>
                    <br />
                    <a href="#" class="btn btn-light rounded-pill">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}

export default Card
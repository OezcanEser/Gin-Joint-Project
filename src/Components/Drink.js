const Drink = (props) => {
    return (
        <figure>
            <img src={props.data.image} alt="" />
            <figcaption>
                <q>{props.data.quote}</q>
                <h6>{props.data.source}</h6>
            </figcaption>
        </figure>
    );
}

export default Drink;
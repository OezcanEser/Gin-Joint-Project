const Event = (props) => {
    return (
        <figure><img src={props.data.eventPic} alt="" />
            <h4>{props.data.event}</h4>
            <figcaption>
                <h5>{props.data.date}</h5>
                <h5>{props.data.time}</h5>
                <p>{props.data.description}</p>
            </figcaption>
        </figure>
    );
}

export default Event;
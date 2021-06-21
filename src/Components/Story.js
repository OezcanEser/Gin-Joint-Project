const Story = (props) => {
    return (
        <figure>
            <figcaption>
                <h5>{props.category}</h5>
                <h2>{props.title}</h2>
                <p>{props.content}</p>
                <button>{props.buttonText}</button>
            </figcaption>
            <img src={props.image} alt="relax" />
        </figure>
    );
}

export default Story;
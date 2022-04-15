export default function Card(props) {
    function handleClick() {
        props.onCardClick(props.card)
    }

    return (
        <article className="card">
            <button type="button" className="card__delete-button hover-transparent"/>
            <img className="card__image" src={props.card.link} alt={props.card.name}
                 onClick={handleClick}/>
            <div className="card__caption">
                <h2 className="card__name">{props.card.name}</h2>
                <div className="card__like-section">
                    <button type="button" className="card__like hover-transparent"/>
                    <div className="card__like-number">{props.card.likes.length}</div>
                </div>
            </div>
        </article>
    );
}
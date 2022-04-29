import {CurrentUserContext} from "../context/CurrentUserContext"
import {useContext} from "react"

export default function Card(props) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = props.card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (`card__delete-button ${!isOwn? `card__delete-button_hidden`: ``}`);
  const isLiked = props.card.likes.some(user => user._id === currentUser._id);
  const cardLikeClassName = (`card__like ${isLiked? `card__like_black`: ``}`);

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handlelikeClick() {
      props.onCardLike(props.card);
  }

  function handleCardDelete() {
      props.onCardDelete(props.card);
  }

  return (
    <article className="card">
      <button
          type="button"
          className={`hover-transparent ${cardDeleteButtonClassName}`}
          onClick={handleCardDelete}/>
      <img
        className="card__image"
        src={props.card.link}
        alt={props.card.name}
        onClick={handleClick}
      />
      <div className="card__caption">
        <h2 className="card__name">{props.card.name}</h2>
        <div className="card__like-section">
          <button
              type="button"
              className={`${cardLikeClassName} hover-transparent`}
              onClick={handlelikeClick}/>
          <div className="card__like-number">{props.card.likes.length}</div>
        </div>
      </div>
    </article>
  );
}

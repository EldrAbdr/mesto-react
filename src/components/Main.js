import { api } from "../utils/Api";
import {useState, useEffect} from "react";
import Card from "./Card";

export default function Main(props) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState();
  const [userAvatar, setUserAvatar] = useState();
  const [cards, addCards] = useState([]);

  useEffect(() => {
    api
      .loadUserInfo()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => {
        console.log(err);
      });

    api
      .loadCards()
      .then((res) => {
        addCards(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  
  return (
    <main className="container">
      <section className="profile">
        <div className="profile__info">
          <div className="profile__avatar-container">
            <img className="profile__avatar" src={userAvatar} alt="аватар" />
            <button
              type="button"
              className="profile__avatar-edit-button hover-transparent"
              onClick={props.onEditAvatar}
            />
          </div>
          <div className="profile__text-info">
            <h1 className="profile__name">{userName}</h1>
            <p className="profile__profession">{userDescription}</p>
          </div>
          <button
            type="button"
            aria-label="редактировать профиль"
            className="profile__edit-button hover-transparent"
            onClick={props.onEditProfile}
          />
        </div>
        <button
          type="button"
          aria-label="добавить карточку"
          className="profile__add-button hover-transparent"
          onClick={props.onAddPlace}
        />
      </section>
      <section className="cards">
        {cards.map((card) => (
          <Card card={card} onCardClick={props.onCardClick} key={card._id} />
        ))}
      </section>
    </main>
  );
}
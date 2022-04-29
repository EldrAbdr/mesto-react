import { api } from "../utils/Api";
import { useState, useEffect, useContext } from "react";
import Card from "./Card";
import { CurrentUserContext } from "../context/CurrentUserContext";

export default function Main(props) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="container">
      <section className="profile">
        <div className="profile__info">
          <div className="profile__avatar-container">
            <img
              className="profile__avatar"
              src={currentUser?.avatar}
              alt="аватар"
            />
            <button
              type="button"
              className="profile__avatar-edit-button hover-transparent"
              onClick={props.onEditAvatar}
            />
          </div>
          <div className="profile__text-info">
            <h1 className="profile__name">{currentUser?.name}</h1>
            <p className="profile__profession">{currentUser?.about}</p>
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
        {props.cards.map((card) => (
          <Card
            card={card}
            onCardClick={props.onCardClick}
            onCardLike={props.onCardLike}
            onCardDelete={props.onCardDelete}
            key={card._id}
          />
        ))}
      </section>
    </main>
  );
}

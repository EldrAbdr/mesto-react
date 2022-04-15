import {useState} from "react";
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAppPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setAddPlacePopupOpen(false);
    setEditProfilePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  function handleClickCard(card) {
    setSelectedCard(card);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAppPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleClickCard}
      />
      <Footer />
      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <div className="form__inputs">
          <input
            type="url"
            id="avatar-input"
            className="form__input form__input_link"
            placeholder="Ссылка на аватар"
            name="avatarLink"
            value=""
            required
          />
          <span className="form__input-error avatar-input-error" />
        </div>
      </PopupWithForm>
      <PopupWithForm
        name="profile-edit"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <div className="form__inputs">
          <input
            type="text"
            id="name-input"
            className="form__input form__input_name"
            placeholder="Имя"
            name="profileName"
            value=""
            minLength="2"
            maxLength="40"
            required
          />
          <span className="form__input-error name-input-error" />
          <input
            type="text"
            id="profession-input"
            className="form__input form__input_profession"
            placeholder="Профессия"
            name="profileProfession"
            value=""
            required
            minLength="2"
            maxLength="200"
          />
          <span className="form__input-error profession-input-error" />
        </div>
      </PopupWithForm>
      <PopupWithForm
        name="card-add"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        textButton="Создать"
      >
        <div className="form__inputs">
          <input
            type="text"
            id="place-name-input"
            className="form__input form__input_place-name"
            placeholder="Название"
            name="name"
            value=""
            minLength="2"
            maxLength="30"
            required
          />
          <span className="form__input-error place-name-input-error" />
          <input
            type="url"
            id="link-input"
            className="form__input form__input_link"
            placeholder="Ссылка на картинку"
            name="imageLink"
            value=""
            required
          />
          <span className="form__input-error link-input-error" />
        </div>
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;

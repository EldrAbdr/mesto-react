import PopupWithForm from "./PopupWithForm"
import {useState, useContext, useEffect} from "react"
import {CurrentUserContext} from "../context/CurrentUserContext"

export default function EditProfilePopup(props) {
    const[name, setName] = useState();
    const[description, setDescription] = useState();
    const[isSubmitClick, setIsSubmitClick] = useState(false);
    const currentUser = useContext(CurrentUserContext);

    useEffect(() => {
        setName(currentUser?.name)
        setDescription(currentUser?.about)
    }, [currentUser]);

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleDescriptionChange(e) {
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateUser({
            profileName: name,
            profileProfession: description,
        });
    }

    return (
        <PopupWithForm
            name="profile-edit"
            title="Редактировать профиль"
            textButton="Сохранить"
            altTextButton="Сохранение..."
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
        >
            <div className="form__inputs">
                <input
                    type="text"
                    id="name-input"
                    className="form__input form__input_name"
                    placeholder="Имя"
                    name="profileName"
                    value={name}
                    minLength="2"
                    maxLength="40"
                    required
                    onChange={handleNameChange}
                />
                <span className="form__input-error name-input-error" />
                <input
                    type="text"
                    id="profession-input"
                    className="form__input form__input_profession"
                    placeholder="Профессия"
                    name="profileProfession"
                    value={description}
                    required
                    minLength="2"
                    maxLength="200"
                    onChange={handleDescriptionChange}
                />
                <span className="form__input-error profession-input-error" />
            </div>
        </PopupWithForm>
    );
}
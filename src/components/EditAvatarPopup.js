import PopupWithForm from "./PopupWithForm"
import {useState, useRef, useEffect} from "react"
import {CurrentUserContext} from "../context/CurrentUserContext"

export default function AvatarEditPopup(props) {
    const [imageLink, setImageLink] = useState('');
    const[isSubmitClick, setIsSubmitClick] = useState(false);
    const inputRef = useRef();

    useEffect(() => {
        setImageLink('');
    },[props.isOpen]);

    function handleImageLinkChange() {
        setImageLink(inputRef.current.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        setIsSubmitClick(true);
        props.onUpdateAvatar(inputRef.current.value);
    }

    return (
        <PopupWithForm
            name="avatar"
            title="Обновить аватар"
            textButton="Сохранить"
            altTextButton="Сохранение..."
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
        >
            <div className="form__inputs">
                <input
                    type="url"
                    id="avatar-input"
                    className="form__input form__input_link"
                    placeholder="Ссылка на аватар"
                    name="avatarLink"
                    value={imageLink}
                    ref={inputRef}
                    onChange={handleImageLinkChange}
                    required
                />
                <span className="form__input-error avatar-input-error" />
            </div>
        </PopupWithForm>
    );

}
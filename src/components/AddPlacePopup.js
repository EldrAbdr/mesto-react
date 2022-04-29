import PopupWithForm from "./PopupWithForm"
import {useState, useContext, useEffect} from "react"

export default function AddPlacePopup(props) {
    const [name, setName] = useState('');
    const [imageLink, setImageLink] = useState('');

    useEffect(() => {
        setImageLink('');
        setName('');
    }, [props.isOpen]);

    function handlePlaceNameChange(e) {
        setName(e.target.value)
    }

    function handleImageLinkChange(e) {
        setImageLink(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onAddPlace({
            name,
            imageLink
        });
    }

    return (
        <PopupWithForm
            name="card-add"
            title="Новое место"
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
            textButton="Создать"
            altTextButton="Создание..."
        >
            <div className="form__inputs">
                <input
                    type="text"
                    id="place-name-input"
                    className="form__input form__input_place-name"
                    placeholder="Название"
                    name="name"
                    value={name}
                    minLength="2"
                    maxLength="30"
                    onChange={handlePlaceNameChange}
                    required
                />
                <span className="form__input-error place-name-input-error"/>
                <input
                    type="url"
                    id="link-input"
                    className="form__input form__input_link"
                    placeholder="Ссылка на картинку"
                    name="imageLink"
                    value={imageLink}
                    onChange={handleImageLinkChange}
                    required
                />
                <span className="form__input-error link-input-error"/>
            </div>
        </PopupWithForm>
    );
}

export default function PopupWithForm(props) {
    return (
        <div className={`${props.name}-popup popup ${props.isOpen && 'popup_active'}`}>
            <form action="#" method="get" className="form form_edit-popup" name={`${props.name}-form`} noValidate>
                <button type="button" className="form__edit-close-button close-button hover-transparent"
                        onClick={props.onClose}/>
                <h2 className="form__title">{props.title}</h2>
                {props.children}
                <button type="submit" className="form__submit-button">Сохранить</button>
            </form>
        </div>
    )
}
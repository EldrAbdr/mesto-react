export default function PopupWithForm({name, isOpen, onClose, title, children, textButton="Сохранить"}) {
  return (
    <div
      className={`${name}-popup popup ${isOpen && "popup_active"}`}
    >
      <form
        action="#"
        method="get"
        className="form form_edit-popup"
        name={`${name}-form`}
        noValidate
      >
        <button
          type="button"
          className="form__edit-close-button close-button hover-transparent"
          onClick={onClose}
        />
        <h2 className="form__title">{title}</h2>
        {children}
        <button type="submit" className="form__submit-button">
          {textButton}
        </button>
      </form>
    </div>
  );
}
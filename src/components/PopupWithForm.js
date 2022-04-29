import {useState, useEffect} from "react"

export default function PopupWithForm({name, isOpen, onClose, onSubmit, title, children, textButton, altTextButton}) {
  const[isSubmitClick, setIsSubmitClick] = useState(false);

  useEffect(() => {
    setIsSubmitClick(false);
  },[isOpen]);

  function handleSubmit(e) {
    onSubmit(e);
    setIsSubmitClick(true);
  }

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
        onSubmit={handleSubmit}
      >
        <button
          type="button"
          className="form__edit-close-button close-button hover-transparent"
          onClick={onClose}
        />
        <h2 className="form__title">{title}</h2>
        {children}
        <button type="submit" className="form__submit-button">
          {isSubmitClick? altTextButton: textButton}
        </button>
      </form>
    </div>
  );
}
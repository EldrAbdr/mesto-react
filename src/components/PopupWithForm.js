import { useState, useEffect } from "react";

export default function PopupWithForm(props) {
  const [isSubmitClick, setIsSubmitClick] = useState(false);

  useEffect(() => {
    setIsSubmitClick(false);
  }, [props.isOpen]);

  function handleSubmit(e) {
    props.onSubmit(e);
    setIsSubmitClick(true);
  }

  return (
    <div
      className={`${props.name}-popup popup ${props.isOpen && "popup_active"}`}
    >
      <form
        action="#"
        method="get"
        className="form form_edit-popup"
        name={`${props.name}-form`}
        noValidate
        onSubmit={handleSubmit}
      >
        <button
          type="button"
          className="form__edit-close-button close-button hover-transparent"
          onClick={props.onClose}
        />
        <h2 className="form__title">{props.title}</h2>
        {props.children}
        <button
          type="submit"
          className="form__submit-button"
          disabled={props.isFormValid}
        >
          {isSubmitClick ? props.altTextButton : props.textButton}
        </button>
      </form>
    </div>
  );
}

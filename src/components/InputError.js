export default function InputError(props) {
  return (
    <span className="form__input-error profession-input-error">
      {props.errorText}
    </span>
  );
}
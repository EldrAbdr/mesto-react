export default function ImagePopup(props) {
    return (
        <div className={`popup ${props.card && "popup_active"}`}>
            <div className="image-popup">
                <button className="image-popup__close-button close-button hover-transparent" type="button"
                        onClick={props.onClose}/>
                <img className="image-popup__image" src={props.card.link} alt=""/>
                <p className="image-popup__caption">{props.card.name}</p>
            </div>
        </div>
    )
}
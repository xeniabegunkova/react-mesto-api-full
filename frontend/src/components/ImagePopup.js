function ImagePopup(props) {

    return (
        <div className={`popup popup_type_image} ${props.card._id && 'popup_is-open'}`}>
            <div className="popup__content popup__content_image">
                <img alt={props.card && props.card.name} src={props.card && props.card.link} className="popup__image" />
                <h2 className="popup__title-image">{props.card && props.card.name}</h2>
                <button
                    className="popup__close"
                    type="button"
                    aria-label="Закрыть"
                    id="close-button-item"
                    onClick={props.onClose}
                ></button>
            </div>
        </div >
    )
}

export default ImagePopup;
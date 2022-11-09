import { useRef, useEffect } from "react"
import PopupWithForm from "./PopupWithForm"

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isLoading }) {

    const avatar = useRef();

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar(avatar.current.value)
    }

    useEffect(() => {
        avatar.current.value = ''

    }, [isOpen]);

    return (
        <PopupWithForm
            name="popup_change-avatar"
            title="Обновить аватар"
            buttonText="Сохранить"
            buttonTextLoading="Сохранить..."
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            isLoading={isLoading}
        >
            <label className="popup__field">
                <input
                    className="popup__input popup__input-avatar"
                    id="avatar"
                    name="avatar"
                    type="url"
                    placeholder="Введите ссылку"
                    ref={avatar}
                    required
                />
                <span className="popup__input-error avatar-input-error">
                    Вы пропустили это поле
                </span>
            </label>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;
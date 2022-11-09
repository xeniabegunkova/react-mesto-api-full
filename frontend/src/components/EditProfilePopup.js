import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useEffect, useState, useContext } from 'react';

function EditProfilePopup({ isOpen, onClose, onUpdateUser, isLoading }) {
    const currentUser = useContext(CurrentUserContext);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser, isOpen]);

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeDescription(e) {
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
        // Передаём значения управляемых компонентов во внешний обработчик
        onUpdateUser({
            name,
            about: description,
        });
    }

    return (
        <PopupWithForm
            name="change-profile-popup"
            title="Редактировать профиль"
            buttonText="Сохранить"
            buttonTextLoading="Сохранить..."
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            isLoading={isLoading}
        >
            <fieldset className="popup__fieldset">
                <label className="popup__field">
                    <input
                        type="text"
                        required
                        className="popup__input popup__input_sign_name"
                        placeholder="Имя"
                        name="userName"
                        id="name"
                        minLength="2"
                        maxLength="40"
                        onChange={handleChangeName}
                        value={name || ''}
                    />
                    <span className="popup__input-error name-input-error">Вы пропустили это поле</span>
                </label >
                <label className="popup__field">
                    <input
                        type="text"
                        required
                        className="popup__input popup__input_sign_extra"
                        placeholder="Профессия"
                        name="career"
                        id="career"
                        minLength="2"
                        maxLength="200"
                        onChange={handleChangeDescription}
                        value={description || ''}
                    />
                    <span className="popup__input-error career-input-error">Вы пропустили это поле</span>
                </label>
            </fieldset>
        </PopupWithForm>
    )
}

export default EditProfilePopup;

//полезные источники (после 3 пр почистить):
//https://ru.reactjs.org/docs/forms.html,
//https://stackoverflow.com/questions/62546683/how-to-pass-data-value-name-in-react-js
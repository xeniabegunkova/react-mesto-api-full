import { useEffect} from 'react';
import PopupWithForm from './PopupWithForm';
import { useForm } from '../hooks/useForm';

function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoading }) {

    const {values, handleChange, setValues} = useForm({});

    function handleSubmit(e) {
        e.preventDefault();
        onAddPlace({
            name: values.name,
            url: values.link
        });
    }

    useEffect(() => {
        isOpen && setValues({});
    }, [isOpen]); //очищаем инпуты, добавили проверку, чтобы не "загружать" код

    return (
        <PopupWithForm
            name="change-card-popup"
            title="Новое место"
            buttonText="Создать"
            buttonTextLoading="Создать..."
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
                        className="popup__input popup__input_sign_appellation"
                        placeholder="Название"
                        name="name"
                        id="locality"
                        minLength="2"
                        maxLength="30"
                        onChange={handleChange}
                        value={values.name || ''}
                    />
                    <span className="popup__input-error locality-input-error">Вы пропустили это поле</span>
                </label>
                <label className="popup__field">
                    <input
                        type="url"
                        name="link"
                        id="link"
                        required
                        className="popup__input popup__input_sign_link"
                        placeholder="Ссылка на картинку"
                        onChange={handleChange}
                        value={values.link || ''}
                    />
                    <span className="popup__input-error link-input-error">Вы пропустили это поле</span>
                </label>
            </fieldset>
        </PopupWithForm>)
}

export default AddPlacePopup;

//исправить
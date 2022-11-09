import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import button from '../img/Vector.svg'
import Card from './Card';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick, handleCardLike, handleDeleteCard, cards }) {
    const currentUser = React.useContext(CurrentUserContext);

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__information">
                    <div className="profile__avatar">
                        <button type="button" className="profile__avatar-redactor" onClick={onEditAvatar}></button>
                        <img
                            src={currentUser && currentUser.data ? currentUser.data.avatar : ''}
                            alt="Аватар"
                            className="profile__image"
                        />
                    </div>
                    <div className="profile__info">
                        <h1 className="profile__name">{currentUser && currentUser.data ? currentUser.data.name : ''}</h1>
                        <button
                            className="profile__edit-button"
                            type="button"
                            aria-label="Исправить"
                            onClick={onEditProfile}
                        ></button>
                        <p className="profile__career">{currentUser && currentUser.data ? currentUser.data.about : ''}</p>
                    </div>
                </div>
                <button className="profile__add-button" type="button" aria-label="Добавить" onClick={onAddPlace}>
                    <img
                        src={button}
                        className="profile__pic"
                        alt="Кнопка плюс"
                    />
                </button>
            </section>

            <section className="photos">
                {
                    cards.slice(0).reverse().map((card) => (
                        <Card
                            key={card._id}
                            card={card}
                            onCardClick={onCardClick}
                            onCardLike={handleCardLike}
                            onCardDelete={handleDeleteCard} />
                    ))
                }

            </section>

        </main>)
}

export default Main;
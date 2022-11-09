import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
    const currentUser = React.useContext(CurrentUserContext)

    const isOwn = props.card.owner === currentUser.data._id;

    const cardDeleteButtonClassName = (
        `photos__delete ${isOwn ? 'photos__delete-visible' : 'photos__delete-hide'}`
    );

    const isLiked =  props.card.likes?.some(i => i === currentUser.data._id);

    const cardLikeButtonClassName = `photos__like ${isLiked ? 'photos__like_active' : ''}`;

    function handleClick() {
        props.onCardClick(props.card)
    }

    function handleDeleteClick() {
        props.onCardDelete(props.card)
    }

    return (
        <article className="photos__container">
            <img className="photos__grid" src={props.card.link} alt={props.card.name}
                onClick={handleClick} />
            <button
                className={cardDeleteButtonClassName}
                type="button"
                aria-label="Удалить"
                onClick={handleDeleteClick}
            />
            <div className="photos__information">
                <h2 className="photos__title">{props.card.name}</h2>
                <div className="photos__like-container">
                    <button
                        className={cardLikeButtonClassName}
                        type="button"
                        aria-label="Нравится"
                        onClick={function handleLikeClick() { props.onCardLike(props.card) }}
                    />
                    <p className="photos__like-number">{props.card.likes?.length}</p>
                </div>
            </div>
        </article>
    )
}
export default Card;
import { useState } from "react";
import { Link } from "react-router-dom";

function Register(props) {

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.handleRegistration(
            email,
            password
        );
    }

    return (
        <section
            className="auth">
            <h2 className="auth__title">
                Регистрация
            </h2>
            <form
                className="auth__form"
                onSubmit={handleSubmit}>

                <input
                    className="auth__form-input"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    onChange={handleEmailChange}
                    value={email || ''}
                    required
                />

                <input
                    className="auth__form-input"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Пароль"
                    onChange={handlePasswordChange}
                    value={password || ''}
                    required
                    minLength="6"
                    maxLength="12"
                />

                <button
                    className="auth__button"
                    type="submit">
                    Зарегистрироваться
                </button>

                <div className="auth__sing-up">
                    <p className="auth__sing-up_text">
                        Уже зарегистрированы? <Link to="/sign-in" className="auth__sing-up_link">Войти
                        </Link>
                    </p>
                </div>
            </form>

        </section>
    )
}

export default Register;
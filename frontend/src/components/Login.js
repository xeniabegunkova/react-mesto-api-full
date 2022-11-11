import { useState } from "react";
import { withRouter } from "react-router-dom";

function Login(props) {
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
        props.handleLogin(
            email,
            password
        );
    }

    return (
        <>
            <section
                className="auth">
                <h2
                    className="auth__title">
                    Вход
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
                    />

                    <button
                        className="auth__button"
                        type="submit">
                        Войти
                    </button>
                </form>
            </section>
        </>
    )
}

export default withRouter(Login);
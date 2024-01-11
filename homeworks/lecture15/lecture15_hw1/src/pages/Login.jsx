import * as React from 'react'
import styles from './login.module.css'
// eslint-disable-next-line react/prop-types
function Login({ login }) {
    const [inputUsername, setInputUsername] = React.useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        login(inputUsername);
    };

    return <div style={{ width: "400px", margin: "auto" }}>
        <form onSubmit={handleSubmit} className={styles.form}>
            <h1 style={{ margin: "0" }}>Login</h1>
            <div className={styles.inputContainer}>
                username
                <input
                    className={styles.inputs}

                    value={inputUsername}
                    type="text"
                    required
                    onChange={(e) => setInputUsername(e.target.value)} />
            </div>
            <div className={styles.inputContainer}>
                password
                <input
                    className={styles.inputs}
                    type="password"
                    required
                />
            </div>
            <button type="submit" >submit</button>

        </form >
    </div>
}
export default Login


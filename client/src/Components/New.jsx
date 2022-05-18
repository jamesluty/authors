import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './styles.module.css'

const New = () => {

    const [author, setAuthor] = useState("");
    const [error, setError] = useState("")
    const navigate = useNavigate();

    const addAuthor = (e) => {
        e.preventDefault();
        const newAuthor = {
            name: author
        }
        axios.post("http://localhost:8000/api/authors", newAuthor)
            .then(res => navigate("/"))
            .catch(err => {
                setError(err.response.data.error.errors.name.message)
            })
    }

    const goHome = () => {
        navigate(-1)
    }

    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to="/">Home</Link>
            <p className={styles.pageDescription}>Add a new author:</p>
            <form className={styles.form} onSubmit={addAuthor}>
                <p>Name:</p>
                <input onChange={(e) => setAuthor(e.target.value)} value={author} />
                {error.length>0 ? <p className={styles.error}>{error}</p> : ""}
                <div className={styles.buttonsDiv}>
                    <button className={styles.button}>Submit</button>
                    <button onClick={goHome} className={styles.button}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default New
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './styles.module.css'

const Edit = () => {
    const {id} = useParams();

    const [author, setAuthor] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                setAuthor(res.data.author.name)
            })
            .catch(err => console.log(err))
    }, [id])

    const editAuthor = (e) => {
        e.preventDefault();
        const updatedAuthor = {
            name: author
        }
        axios.put(`http://localhost:8000/api/authors/${id}`, updatedAuthor)
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
            <p className={styles.pageDescription}>Edit this author:</p>
            <form className={styles.form} onSubmit={editAuthor}>
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

export default Edit
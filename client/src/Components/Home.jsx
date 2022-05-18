import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import styles from './styles.module.css'

const Home = () => {

    const [authors, setAuthors] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then(res => {
                setAuthors(res.data.authors)
            })
            .catch(err => console.log("Error on home component", err))
    }, [])

    const editAuthor = (id) => {
        navigate(`/edit/${id}`)
    }

    const deleteAuthor = (id) => {
        axios.delete(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                setAuthors(authors.filter((author) => {
                    return author._id !== id
                }))
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to="/new">Add an author</Link>
            <p className={styles.pageDescription}>We have quotes by:</p>
            <table className={styles.table}>
                <thead className={styles.tableHead}>
                    <tr>
                        <th className={styles.tableHead}>Author</th>
                        <th className={styles.tableHead}>Actions available</th>
                    </tr>
                </thead>
                <tbody>
                    {authors.length>0 ? authors.sort((a, b) => a.name.localeCompare(b.name)).map((author) => {
                        return (
                            <tr key={author._id}>
                                <td className={styles.tableRow}><Link to="/">{author.name}</Link></td>
                                <td className={styles.tableRow}>
                                    <button onClick={() => editAuthor(author._id)} className={styles.homeButton}>Edit</button>
                                    <button onClick={() => deleteAuthor(author._id)} className={styles.homeButton}>Delete</button>
                                </td>
                            </tr>
                        )
                    }) : (
                        <tr>
                            <td>No authors available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Home
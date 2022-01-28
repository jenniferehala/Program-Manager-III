import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';


const SingleAuthor = (props) => {

    const [authors, setAuthors] = useState({})
    const { _id } = useParams({})
    console.log(_id)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${_id}`)
            .then(res => setAuthors(res.data.results))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <div>
                <h1>Author Details</h1>
                <p>Name: {authors.name}</p>
                <p>Title: {authors.title}</p>
                <p>Release Year: {authors.releaseYear}</p>
                <p>Description: {authors.description}</p>
            </div>
            <br />
            <Link className="btn btn-info" to="/">Main page</Link> |
            <Link className="btn btn-warning" to="/authors/create">Add new author</Link> |
            <Link className ="btn btn-success" to={`/authors/${authors._id}/edit`} >Edit</Link>

        </div>
    )
}

export default SingleAuthor;
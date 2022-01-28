import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useHistory, Link} from 'react-router-dom';

const Main = (props) => {
    const [authors, setAuthors] = useState([])

    const { removeFromDom } = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors/findAll")
            .then(res => {
                console.log(res.data.results);
                setAuthors(res.data.results);
            })
            .catch(err => console.log(err))
    }, [])


    const deleteAuthor = (_id) => {
        console.log("did this run?")
        axios.delete(`http://localhost:8000/api/authors/${_id}/delete`)
            .then(res => {
                console.log("im here");
                setAuthors(authors.filter(authors => authors._id !== _id));
                
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <h1>Favorite Author</h1>
            <br/>
            <p>We have quotes by:</p>
            {
                authors.map((author, i) => {
                    return (

                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Author</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">ReleaseYear</th>
                                    <th scope="col">Action Available</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">{author.name}</th>
                                    <td>{author.title}</td>
                                    <td>{author.releaseYear}</td>
                                    <td>
                                        <Link to={`/authors/${author._id}/edit`} >Edit</Link> | 
                                        <button onClick={(e)=>{deleteAuthor(author._id)}}>Delete</button>
                                        </td>
                                </tr>
                            </tbody>
                        </table>

                                )

                })
            }
                            </div>
                            )
}

                            export default Main;
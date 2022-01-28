import React, {useEffect, useState} from 'react';
import axios from 'axios'
import { useParams, useHistory } from 'react-router';
import {Link} from 'react-router-dom';

const Edit = (props) => {
    const history = useHistory();
    const {_id} = useParams();
    const [form,setForm] = useState({
        name: "",
        title: "",
        releaseYear: null,
        description: ""
    })
    const [errors,setErrors] = useState({})

    useEffect(()=>{
        // console.log(_id)
        axios.get(`http://localhost:8000/api/authors/${_id}`)
            .then(res=> {
                console.log(res.data.results)
                setForm(res.data.results);
                
            })
            .catch(err=> {
                console.log(err);
            })
    }, [_id])

    const onChangeHandler = (event) => {
        // console.log("im here")
        setForm({
            ...form, 
            [event.target.name]: event.target.value
        })
    }

    const onUpdateHandler = (event) => {
        event.preventDefault();
        history.push("/")
        axios.patch(`http://localhost:8000/api/authors/${_id}/update`, form)
            .then(res=>{
                console.log(res.data.results);
                history.push("/");
            })
            .catch(err=>{
                console.log(err.response.data.err.errors);
                setErrors(err.response.data.err.errors);

            })
    }
    return (
        <div>
            <h1 className="mx-auto">Edit this author</h1>
            <form onSubmit={onUpdateHandler} className="mt-5 w-50 mx-auto">
                <div className="form-group">
                    <label> Name: </label>
                    <input type="text" name="name" className="form-control" placeholder="Name" onChange={onChangeHandler} value={form.name} />
                    <span className="alert-danger">{errors.name && errors.name.message}</span>
                </div>
                <div className="form-group">
                    <label> Title: </label>
                    <input type="text" name="title" className="form-control" placeholder="Title" onChange={onChangeHandler} value={form.title} />
                    <span className="alert-danger">{errors.title && errors.title.message}</span>
                </div>
                <div className="form-group">
                    <label> Release Year: </label>
                    <input type="number" name="releaseYear" className="form-control" placeholder="Release Year" onChange={onChangeHandler} value={form.releaseYear}/>
                    <span className="alert-danger">{errors.releaseYear && errors.releaseYear.message}</span>
                </div>
                <div className="form-group">
                    <label> Description: </label>
                    <input type="text" name="description" className="form-control" placeholder="Description" onChange={onChangeHandler} value={form.description}/>
                    <span className="alert-danger">{errors.description && errors.description.message}</span>
                </div>

                <input type="submit" className="btn btn-success mt-5" />
            </form>
            <Link to="/"><button >Cancel</button></Link>
            <Link to={`/authors/` + form._id}><button>View</button></Link>
        </div>
    )
}

export default Edit;
import React, {useState} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

const Create = (props) => {

    const [form,setForm] = useState({
        name: "",
        title: "",
        releaseYear: null,
        description: ""
    })
    const [errors,setErrors] = useState({})

    const onChangeHandler = (event) => {
        console.log("im here")
        setForm({
            ...form, 
            [event.target.name]: event.target.value
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        // console.log(form);
        axios.post("http://localhost:8000/api/authors/create", form)
            .then(res=>{
                console.log(res);
            })
            .catch(err=>{
                console.log(err.response.data.err.errors);
                setErrors(err.response.data.err.errors)
            })
    }
    return (
        <div>
            <h1 className="mx-auto">Add Author</h1>
            <form onSubmit={onSubmitHandler} className="mt-5 w-50 mx-auto">
                <div className="form-group">
                    <label> Name: </label>
                    <input type="text" name="name" className="form-control" placeholder="Name" onChange={onChangeHandler}/>
                    <span className="alert-danger">{errors.name && errors.name.message}</span>
                </div>
                <div className="form-group">
                    <label> Title: </label>
                    <input type="text" name="title" className="form-control" placeholder="Title" onChange={onChangeHandler}/>
                    <span className="alert-danger">{errors.title && errors.title.message}</span>
                </div>
                <div className="form-group">
                    <label> Release Year: </label>
                    <input type="number" name="releaseYear" className="form-control" placeholder="Release Year" onChange={onChangeHandler}/>
                    <span className="alert-danger">{errors.releaseYear && errors.releaseYear.message}</span>
                </div>
                <div className="form-group">
                    <label> Description: </label>
                    <input type="text" name="description" className="form-control" placeholder="Description" onChange={onChangeHandler}/>
                    <span className="alert-danger">{errors.description && errors.description.message}</span>
                </div>

                <input type="submit" className="btn btn-success mt-5" />
            </form>
                <Link to="/"><button>Cancel</button></Link>
        </div>
    )
}

export default Create;
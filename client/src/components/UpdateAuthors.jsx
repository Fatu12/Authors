
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const UpdateAuthors = (props) => {
    const [updateAuthor, setUpdateAuthor] = useState({
        name: ""
    })

    const Navigate = useNavigate()

    const { id } = useParams()
    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then((res) => {
                console.log("FRONT END GET ONE RES", res);
                console.log("FRONT END GET ONE RES DATA", res.data)
                setUpdateAuthor(res.data)
            })
            .catch(err => console.log('SOmething went wrong FRONT END GET ALL', err))
    }, [id])

    const submitHandler = (e) => {
        e.preventDefault();
        axios.patch(`http://localhost:8000/api/authors/${id}`, updateAuthor)
            .then(res => {
                console.log('FRONT END UPDATE RES', res);
                console.log('FRONT END UPDATE RES DATA', res.data)
                Navigate('/')
            })
            // .catch(err => console.log("Something went wrong FRONT END UPDATE", err))
            .catch((err) => {
                console.log(err)
                setErrors(err.response.data.errors)
            })
    }

    const ChangeHandler = (e) => {
        setUpdateAuthor({ ...updateAuthor, [e.target.name]: e.target.value })
    }
    return (
        <div class='row'>

            <div className='row justify-content-center'>
                <div className="row">
                    <form className="col-md-4 offset-1" onSubmit={submitHandler}>
                        <h1>Eid this author</h1>
                        <Link to='/'>Home</Link>

                        <div className="form-group ">
                            {
                                errors.name ? <p> {errors.name.message} </p> : null
                            }

                            <label>Name:</label>
                            <input type="text" name="name" placeholder=' Enter your favorite Author' className="form-control  "
                                onChange={ChangeHandler} value={updateAuthor.name} />

                        </div>


                        <button className="btn btn-primary mt-3">Update</button>
                        <button className="btn btn-primary mt-3">Cancel</button>
                    </form>


                </div>

            </div>
        </div>
    )
}


export default UpdateAuthors
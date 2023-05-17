import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom"
export const AuthorForm = (props) => {
  //keep track of what is being typed via useState hook
  const [author, setAuthor] = useState({
    name: ""
  })
  const Navigate = useNavigate()
  const [errors, setErrors] = useState({});
  const onClickHandler = (e) => {
    // console.log(e)
    // setting that event's target's (input) 
    // value (what's typed into the input) to our updated state
    setAuthor({ ...author, [e.target.name]: e.target.value })
  }
  const submitHandler = (e) => {
    e.preventDefault()
    axios.post("http://localhost:8000/api/authors", author)

      .then(res => {
        console.log('FRONT END CREATE', res);
        console.log('FRONT END CREATE RES DATA', res.data)
        Navigate('/')

      })
      // .catch(err => {
      //   console.log('something went wrong  FRONT END CREATE ', err);
      // //   const errorResponse = err.res.data.errors;
      // //   const errorArr = [];
      // //   for (const key of Object.keys(errorResponse)) {
      // //     errorArr.push(errorResponse[key].message)
      // //   }
      // //   setErrors(errorArr)
      // setErrors(err.err.response.data.errors);
      .catch(err => {
        console.log(err);
        setErrors(err.response.data.errors)
      })
  }

  return (
    <div class='row'>

      <div className='row justify-content-center'>
        <div className="row">
          <form className="col-md-4 offset-1" onSubmit={submitHandler}>
            {/* {errors.map((err, index) => <p key={index}>{err} </p>)} */}
            <h1>Favorite authors</h1>
            <Link to='/'>Home</Link>

            <div className="form-group ">
              <p>
                {
                  errors.name ? <p> {errors.name.message} </p> : null
                }
                <label>Name:</label>
                <input type="text" name="name" placeholder=' Enter your favorite Author' className="form-control  "
                  onChange={onClickHandler} />
                {/* {
                  errors.name && <p> {errors.name.message}  </p>
                } */}

              </p>
            </div>
            <div class="d-flex m-100 " style={{ marginRight: "100px" }} >
              <button className="btn btn-primary mt-3">Submit</button>
              <button className="btn btn-primary mt-3">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
} 

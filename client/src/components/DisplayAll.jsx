import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const DisplayAll = (props) => {
    const [allAuthorsList, setAllAuthorsList] = useState([])
    const Navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then((res) => {
                console.log("FRONT END GET ALL", res);
                console.log('FRONT END GET ALL res data', res.data)
                setAllAuthorsList(res.data)
            })
            .catch(err => console.log("Something went wrong FRONT END GET ALL", err))
    }, []);

    const deleteHandler = (authorID) => {
        axios.delete(`http://localhost:8000/api/authors/${authorID}`)

            .then((res) => {
                console.log("FRONT END DELETE RES", res);
                console.log("FRONT END RES DATA", res.data);
                const removeFormDom = (authorID) => {
                    allAuthorsList.filter(author => author._id !== authorID)
                };
                removeFormDom(authorID);


            })
            .catch((err) => {
                console.log("Something went wrong  FRONT END DELETE", err.response);
            });
    }


    return (
        <div>
            <div class='row'>
                <div className='row justify-content-center'>
                    <div className="row">
                        <form className="col-md-4 offset-1" >
                            <h1> Favorite authors</h1>
                            <Link to='/author/new'> Add an author </Link>
                            <h3 className='.text-primary-emphasis'> We have quotes by: </h3>
                            <table class="table table-striped table-hover table-bordered table-sm table-warning border-info">
                                <thead>

                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Author</th>
                                        <th scope="col">Action Available</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {allAuthorsList.map((author, index) =>
                                        <tr key={author._id}>
                                            <th scope="row">{index}</th>
                                            <td>{author.name}</td>
                                            <td> <Link to={`/edit/${author._id}`}> Eid</Link> |
                                                <button className='btn btn-link' onClick={(e) => deleteHandler(author._id)}> Delete</button>
                                            </td>

                                        </tr>

                                    )}

                                </tbody>

                            </table>
                        </form>


                    </div>

                </div>
            </div>



        </div>
    )
}

export default DisplayAll
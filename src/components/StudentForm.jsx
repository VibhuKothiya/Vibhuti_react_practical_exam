import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addStudent } from '../redux-thunk/store/action/studentAction';



const StudentForm = () => {
    const dispatch = useDispatch()
    
    const [inputValue, setInputValue] = useState({});
    
    const handleInputChange = (e) => {
        setInputValue({...inputValue, [e.target.name] : e.target.value})
    }
    

    const handleSubmit = () => {       

        dispatch(addStudent(inputValue))
        console.log(inputValue, "Input valueee");
    };
  

    return (
        <>
            {/* -----from----- */}

            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-lg-4">
                        <div className="card shadow">
                            <div className="card-header bg-primary text-light text-center">
                                Enter Your Product
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <label className="form-label">Student Name :- </label>
                                        <input type="text" className="form-control" placeholder="Enter student name" name='name' onChange={handleInputChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">GRID :- </label>
                                        <input type="number" className="form-control" placeholder="Enter GRID" name='GRID' onChange={handleInputChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Student Father Name :-</label>
                                        <input type="text" className="form-control" placeholder="Enter Student Father Name" name='fatherName' onChange={handleInputChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Add Contact :-</label>
                                        <input type="number" className="form-control" placeholder="Enter Contact Number" name='contact' onChange={handleInputChange} />
                                    </div>
                                    <div className="d-grid gap-2 mb-3">
                                        <button onClick={handleSubmit} className="btn btn-success mx-3">Add In Product List</button>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Search Your Product :-</label>
                                        <input type="text" className="form-control" placeholder="Enter your productname" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            

            
        </>
    )
}

export default StudentForm;

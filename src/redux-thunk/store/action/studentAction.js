import axios from "axios";
import { STUDENT_DELETE_FAIL, STUDENT_DELETE_REQUEST, STUDENT_DELETE_SUCCESS, STUDENT_GET_FAIL, STUDENT_GET_REQUEST, STUDENT_GET_SUCCESS, STUDENT_POST_REQUEST, STUDENT_POST_SUCCESS,  } from "../type";

//post
export const addStudent = (inputValue) => {
    return async (dispatch) => {
        dispatch({
            type: STUDENT_POST_REQUEST,
        });

        try{
            let res = await axios.post('http://localhost:5000/product', inputValue)
            console.log(res, "aPIIII");
            
        dispatch({
            type: STUDENT_POST_SUCCESS,
            payload: res.data
        })
        
        }
        catch(err){
                dispatch({
                    type: STUDENT_GET_FAIL,
                    payload: err
                })
        }
        
    }
}


//get
//post
export const getStudent = () => {
    return async (dispatch) => {
        dispatch({
            type: STUDENT_GET_REQUEST,
        });

        try{
            let res = await axios.get('http://localhost:5000/product')
            
        dispatch({
            type: STUDENT_GET_SUCCESS,
            payload: res.data
        })
        
        }
        catch(err){
                dispatch({
                    type: STUDENT_GET_FAIL,
                    payload: err
                })
        }
        
    }
}
//delete
export const deleteStudentData = (id) => {
    return async (dispatch) => {
        dispatch({
            type: STUDENT_DELETE_REQUEST,
        });

        try{
            let res = await axios.delete(`http://localhost:5000/product/${id}`)
           console.log(res, "ID");
        dispatch({
            type: STUDENT_DELETE_SUCCESS,
            payload: id
        })
        
        }
        catch(err){
                dispatch({
                    type: STUDENT_DELETE_FAIL,
                    payload: err
                })
        }
        
    }
}
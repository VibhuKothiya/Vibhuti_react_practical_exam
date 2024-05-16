import { STUDENT_DELETE_SUCCESS, STUDENT_GET_SUCCESS, STUDENT_POST_SUCCESS, STUDENT_VIEW_SUCCESS } from "../type"


let initialState = {
    Students: [],
    error: null,
    isLoading: false,
    id: null,

}

export const studentReducer = (state = initialState, action) => {
    switch (action.type) {

        case STUDENT_POST_SUCCESS:
            const newStudent = [...state.Students, action.payload]
            return {
                ...state,
                Students: newStudent,
                isLoading: false
            }

            case STUDENT_GET_SUCCESS:
            return {
                ...state,
                isLoading: false,
                Students: action.payload                            

            };

            case STUDENT_DELETE_SUCCESS:
            
            return {
                ...state,
                isLoading: false,
                Students: state.Students.filter((val)=>val.id !== action.payload)                                        

            };

            case STUDENT_VIEW_SUCCESS:
            return {
                ...state,
                isLoading: false,
                id: action.payload                            

            };

            default :{
                return state;   
            } 

    }
}
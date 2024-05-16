import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteStudentData, getStudent, viewStudentData } from '../redux-thunk/store/action/studentAction';

const StudentList = () => {
   const {Students} = useSelector((state) => state.StudentList)
   console.log(Students, "Studentsss");
   const dispatch = useDispatch();
   const [viewId, setViewId] = useState();

   useEffect(()=>{
    dispatch(getStudent())
   },[])
    // const filteredData = data.filter((item) => {
    //     return item.name.startsWith(inputValue.toLowerCase());
    // });

    const deleteData = (id) => {
        dispatch(deleteStudentData(id))
    };

    const viewData = (id) => {
        setViewId(id);
        dispatch(viewStudentData(viewId))
    }
    
  return (
    <div>
      {/* -----table----- */}

      <h1 className='mt-5 text-center' style={{ fontWeight: 'bold' }}>----------: Student List :----------</h1>
            <table className="table mt-5">
                <thead>
                    <tr>
                        <th>GIRD</th>
                        <th>Student Name</th>
                        <th>Student Father Name</th>
                        <th>Contact</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {Students?.map((val, ind) => (
                        <tr key={ind}>
                            <td>{val.GRID}</td>
                            <td>{val.name}</td>
                            <td>{val.fatherName}</td>
                            <td>{val.contact}</td>
                            <td>
                            <i class="fa-solid fa-trash" onClick={()=>deleteData(val.id)} style={{color:"#ff0000", cursor:"pointer"}}></i>
                            <i class="fa-solid fa-pen-to-square ms-3" onClick={()=>viewData(val.id)}></i>        
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
    </div>
  )
}

export default StudentList

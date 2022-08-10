import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {

    const [student, setStudent] = useState([])
    let navigate = useNavigate();

    useEffect(() => {
        getStudents()
        // eslint-disable-next-line
    }, [])
    
    const getStudents = async () => {
        const request = await fetch('http://localhost:5002/students')
        const response = await request.json()
        // console.log(response)
        setStudent(response)
    }

    const postStudents = async (e) => {
        e.preventDefault()
        
            const student = {
                name: e.target.firstChild.value 
            }
    
            const request = await fetch('http://localhost:5002/students', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(student)
            })
            const response = await request.json()
            console.log(student)

            if(request.status === 200 || request.status === 201){
                navigate((`/success/${student}`))
            }else if (request.status === 409){
                alert('student already exist')
            }
      
    }

    // console.log(student)

    return(
        <div className="form-box">
             <h1>Form </h1>
             <form className="form" onSubmit={postStudents}>
                 <input type='text' />
                 <button type='submit'>Add student</button>
             </form>
             <div className="addname">
             {student.map(student => {
                 return(
                 <p>Student : {student.name}</p>
                 )
             })}
             </div>
        </div>
    )
}

export default Form
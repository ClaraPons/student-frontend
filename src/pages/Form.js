import { useState, useEffect } from "react";

const Form = () => {

    const [student, setStudent] = useState([])

    useEffect(() => {
        getStudents()
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
            name: e.target.value
        }

        const request = await fetch('http://localhost:5002/students', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(student)
        })
        const response = await request.json()
        console.log(response)
    }

    // console.log(student)

    return(
        <>
             <h1>Form </h1>
             {student.map(student => {
                 return(
                 <p>{student.name}</p>
                 )
             })}
             <form onSubmit={postStudents}>
                 <input type='text' />
                 <button type='submit'>Add student</button>
             </form>
        </>
    )
}

export default Form
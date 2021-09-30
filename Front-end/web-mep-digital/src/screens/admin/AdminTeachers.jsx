import React from 'react'
import AdminMode from '../../components/admin/AdminMode'
import NavAdmin from '../../components/admin/NavAdmin'
import Teacher from '../../components/admin/Teacher'
import List from '../../components/List'

export default function AdminTeachers() {

    const [teachers, setTeachers] = useState([])
    const [teacherId, setTeacherId] = useState("")

    function handleChange(teacherId) {
        setTeacherId(teacherId)
    }

    function getCourseInfo() {
        return teachers.find(teacher => teacher.id === teacherId)
    }

    const getTeachers = async () => {
        var myInit = {
            method: 'GET',
            headers: { 'Content-Type' : 'application/json'}
        }
        var url = new URL('https://serene-sands-78874.herokuapp.com/api/teachers')
        var myRequest = new Request(url, myInit); 
        await fetch(myRequest).then( response => {
            if (!response.ok) { throw response }
            return response.json()  //we only get here if there is no error
            })
            .then( json => {
            setCourses(json.teachers)
            if(teachers > 0){
                setCourseId(teachers[0].id)
            }
        }).catch(err => {
            err.json().then(errorMessage => {
                alert(errorMessage.message)
            })
        })
    }

    useEffect(() => {
        getTeachers()
        // eslint-disable-next-line react-hooks/exhaustive-deps
      },[]);


    return (
        <div>
            <NavAdmin/>
            <div className = 'listCourses'>
                <List text = {'Profesor'} 
                teachers = {teachers}
                onChange = {handleChange}/>
            </div>
            <div className = 'course'>
                <Teacher text = {teacherId}
                course = {getTeacherInfo()}/>
            </div>
        </div>
    )
}

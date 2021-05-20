import axios from 'axios'

function createStudent(BASE_URL, studentData) {
    return axios.post(BASE_URL + "/students", studentData)
}

export default createStudent
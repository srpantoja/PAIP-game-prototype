import fetchChallenges from './challengesApi'
import createStudent from './studentsApi'

const BASE_URL = "http://localhost:8000"

export default {
    challenges: () => fetchChallenges(BASE_URL),
    createStudent: (studentData) => createStudent(BASE_URL, studentData)
}
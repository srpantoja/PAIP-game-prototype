
export function loginValidation(login, studentId) {
    console.log('estou dentro de loginValidation')
    console.log(login, studentId)
    return { // Altera login
        type: login,
        payload: {
            id: studentId
        }
    }

}
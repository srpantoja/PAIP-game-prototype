
export function loginValidation(login, studentId) {
    console.log(login, studentId)
    return { // Altera login
        type: login,
        payload: {
            id: studentId,
        }
    }

}
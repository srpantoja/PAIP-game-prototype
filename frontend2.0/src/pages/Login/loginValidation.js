
export function loginValidation(login, studentId) {

    return { // Altera login
        type: login,
        payload: {
            id: studentId
        }
    }

}
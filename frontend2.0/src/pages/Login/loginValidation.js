
export function loginValidation(login, studentId, jogando) {
    console.log(login, studentId)
    return { // Altera login
        type: login,
        payload: {
            id: studentId,
            jogando: jogando
        }
    }

}
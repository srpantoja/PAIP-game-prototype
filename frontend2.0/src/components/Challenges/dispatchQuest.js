export function dispatchQuest(quest, questionsList) {
    console.log(quest, questionsList)
    return { // Altera quesListt
        type: quest,
        payload: {
            id: questionsList
        }
    }

}
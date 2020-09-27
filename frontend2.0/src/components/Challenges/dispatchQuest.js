export function dispatchQuest(quest, challenger) {
    return { // Altera quesListt
        type: quest,
        payload: {
            challange: challenger
        }
    }

}
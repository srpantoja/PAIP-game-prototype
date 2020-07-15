import axios from 'axios'

function getChallenges(BASE_URL) {
    return axios.get(BASE_URL + "/challenges")
}

export default getChallenges
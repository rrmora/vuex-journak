

import axios from "axios";

const journalApi = axios.create({
    baseURL:  'https://vue-jornal-default-rtdb.firebaseio.com'
})

export default journalApi
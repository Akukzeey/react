import axios from "axios"


export default axios.create({
    baseURL:"https://api.unsplash.com",
    headers: {
        Authorization: 'Client-ID VP8SEBVgpH2gZStWG02iHoWGz0kFbM-v_m_NG48v-Yo'
    }
    })
import axios from "axios"

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token: "pk.eyJ1IjoiamFub20iLCJhIjoiY2xodW56dXd2MDFlNTNkbzQ2bXFsYXBxNyJ9.aut1O10dmt7pfDFRL1LHOA"
    }
})

export default searchApi
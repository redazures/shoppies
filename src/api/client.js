import { create } from "apisauce"


const apiClient = create({
    baseURL: "http://www.omdbapi.com/"
})

export default apiClient
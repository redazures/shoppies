import { create } from "apisauce"


const apiClient = create({
    baseURL: "https://www.omdbapi.com/"
})

export default apiClient
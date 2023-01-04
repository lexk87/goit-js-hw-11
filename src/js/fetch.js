import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "32574266-63fdd8a3e7d9a73b0fcedbb7f";

export const pixabay = {
    searchQuery: "",
    pageNumber: 1,
    
    async fetchData() {
        try {
            const response = await axios.get(BASE_URL, {
                params: {
                    key: API_KEY,
                    q: this.searchRequest,
                    page: this.pageNumber,
                    per_page: 40,
                    image_type: "photo",
                    orientation: "horizontal",
                    safesearch: true,
                }
            });
            this.pageNumber += 1;
            return response;
        }      
        catch (error) {
            console.error(error);
        };
    },

    resetPageNumber() {
        this.pageNumber = 1;
    },
};
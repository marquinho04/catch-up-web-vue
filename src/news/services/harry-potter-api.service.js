import axios from 'axios';

const booksEndpoint = import.meta.env.VITE_BOOKS_ENDPOINT_PATH;

export class HarryPotterApiService {
    getBooks(){
        return axios.get(booksEndpoint);
    }
}
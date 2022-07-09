import axios from "axios";

export default {
    getBooks: function (query) {
        return axios.get("/api/books/google", { params: { q: query } });
    },
    saveBook: function(bookData){
        return axios.post("/api/books", bookData);
    },
    getSaved: function(){
        return axios.get("/api/books");
    },
    deleteBook: function(id){
        return axios.delete("/api/books/" + id);
    }
};
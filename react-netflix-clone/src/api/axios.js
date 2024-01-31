import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params : {
        api_key: "3ac911c0583248eb7b35dde78c8d6c0d",
        language: "ko-KR",
    },
});

export default instance;

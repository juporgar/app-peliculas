export default class FilmsService {
    constructor($http){
        this.$http = $http;
    }

    getFilms(){
        return this.$http.get('https://api.themoviedb.org/3/movie/popular?api_key=27672a9d5ad883be41ba0b5213a7e361&language=es-ES')
            .then(response=>response.data)
    }   
}
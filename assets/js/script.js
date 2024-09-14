const videoPlayer = (function() {
    function insertVideo(url, id) {
    const iframeElement = document.getElementById(id);
    iframeElement.setAttribute("src", url);
    }
    return {
    playVideo: function(url, id) {
        insertVideo(url, id);
    }
    };
})();
class Multimedia {
    url;
    constructor(url) {
    this.url = url;
    }
    get url(){
        return this._url;
    }
    setInicio() {
    return "Este método es para realizar un cambio en la URL del video";
    }
    get url() {
    return this.url;
    }
}
class Reproductor extends Multimedia {
    constructor(url, id){
        super(url);
        this.id = id;
    }

    setInicio(tiempo) {
    this.url = `${this.url}?start=${tiempo}`;
    document.getElementById(this.id).setAttribute('src', tiempoUrl);
    }
    playMultimedia() {
        videoPlayer.playVideo(this.url, this.id);
        }
}
const musicaReproductor = new Reproductor("https://www.youtube.com/embed/5PSNL1qE6VY", "musica");
const peliculaReproductor = new Reproductor("https://www.youtube.com/embed/5PSNL1qE6VY", "peliculas");
const serieReproductor = new Reproductor("https://www.youtube.com/embed/5PSNL1qE6VY", "series");
musicaReproductor.playMultimedia();
peliculaReproductor.playMultimedia();
serieReproductor.playMultimedia();
serieReproductor.setInicio(10);
class Cancion{    
    constructor(id,nombre,artista, duracion, portadaAlbum, anio, genero, url){
        this.id=id;
        this.nombre=nombre;
        this.artista=artista;
        this.duracion=duracion;
        this.portadaAlbum=portadaAlbum,
        this.anio=anio;
        this.genero=genero;
        this.url=url;
    }
    getId(){
        return this.id;
    }
    getNombre(){
        return this.nombre;
    }
    getArtista(){
        return this.artista;
    }
    getDuracion(){
        return this.duracion;
    }
    getPortadaAlbum(){
        return this.portadaAlbum;
    }
    getAnio(){
        return this.anio;
    }
    getGenero(){
        return this.genero;
    }
    getUrl(){
        return this.url;
    }
}

class Playlist{
    constructor(nombrePlaylist, listaCanciones){
        this.nombrePlaylist=nombrePlaylist;
        this.listaCanciones=listaCanciones;
    }

    getNombrePlaylist(){
        return this.nombrePlaylist;
    }
    getListaCanciones(){
        return this.listaCanciones;
    }
    agregarFavorito(cancion){
        console.log("Agregar Favorito");
    }
    quitarFavorito(cancion){
        console.log("Quitar Favorito");
    }
    agregarPlaylist(cancion){
        console.log("Agregar Playlist");
    }
    eliminarPlaylist(cancion){
        console.log("Eliminar Playlist");
    }

}

class Reproductor{
    catalogoCanciones;
    cancionActual;
    audio;
    constructor(){
        this.catalogoCanciones=[       
            new Cancion(1,"Stop Crying Your Heart Out", "Oasis", "5:02","HeathenChemistry.jpg", "2002", "Britpop", "stopCryingYourHeartOut.mp3"),
            new Cancion(2,"Dancing Queen", "ABBA", "4:03","Arrival.jpg", "1976", "Pop", "dancingQueen.mp3"),
            new Cancion(3,"Here With Me", "Dido", "Duracion 4","noAngel.jpg", "1998", "Balada", "hereWithMe.mp3"),
            new Cancion(4,"Waterloo", "ABBA", "2:45","Waterloo.jpg", "1973", "Pop", "waterloo.mp3"),
            new Cancion(5,"A whole new world", "Zayn & Zhavia Ward", "4:02","aWholeNewWorld.jpg", "2019", "Pop", "aWholeNewWorld.mp3"),
            new Cancion(6,"I dont care", "Ed Sheeran & Justin Bieber ", "3:39","iDon'tCare.jpg", "2019", "Electropop", "iDontCare.mp3"),
            new Cancion(7,"Love by grace ", " Lara Fabian ", "4:07"," loveByGrace.jpg", "1999", "Pop", " loveByGrace.mp3"), 
            new Cancion(8,"You and Me ", " Lifehouse ", "3:35"," youAndMe.jpg", "2005", " rock alternativo", " youAndMe.mp3"),
            new Cancion(9,"Los caminos de la vida", "Vicentico", "3:56","Vicentico.jpg", "2004", "Rock en español", "cancion9.mp3"),
            new Cancion(10,"Irremediablemente tarde", "Verde 70", "4:30","Verde70.jpg", "2000", "Pop Rock", "cancion10.mp3"),
            new Cancion(11,"I hate everything about you", "Three Days Grace", "3:40","ThreeDaysGrace.jpg", "2003", "Post-grunge", "cancion11.mp3"),
            new Cancion(12,"There is no leaving now", "The Tallest Man on Earth", "4:30","The_Tallest_Man_on_Earth.jpg", "2012", "Indie/Folk", "cancion12.mp3"),
            new Cancion(13,"Papaoutai", "Stromae", "3:52","Stromae.jpg", "2013", "Synth Pop", "cancion13.mp3"),
            new Cancion(14,"First of the Year", "Skrillex", "3:14","Skrillex.jpg", "2011", "Dance/electrónica", "cancion14.mp3"),
            new Cancion(15,"Ojalá", "Silvio Rodríguez", "4:20","SilvioRodriguez.jpg", "1978", "Nueva Trova", "cancion15.mp3"),
            new Cancion(16,"¡Que Bonito!", "Rosario    ", "4:10","Rosario.jpg", "1996", "Pop", "cancion16.mp3"),
            new Cancion(17,"Se nos muere el amor", "Ricardo Arjona", "4:26","arjona.jpg", "2005", "Balada", "arjona.mp3"),
            new Cancion(18,"Ajedrez", "David Bisbal", "3:33","bisbal.webp", "2021", "Pop", "bisbal.mp3"),
            new Cancion(19,"Cosas Bonitas", "Fanny Lu", "3:19","fanny.webp", "2018", "Balada", "fanny.mp3"),
            new Cancion(20,"Que quieres de mi", "Luis Fonsi", "4:35","fonsi.jpg", "2008", "Balada", "fonsi.mp3"),
            new Cancion(21,"Inventamer", "Mon Laferte", "3:22","laferte.jpg", "2017", "Balada", "laferte.mp3"),
            new Cancion(22,"Te necesito", "Paolo Plaza", "4:16","plaza.jpg", "2010", "Salsa", "plaza.mp3"),
            new Cancion(23,"Inevitable", "Shakira", "3:06","shakira.jpeg", "1995", "Balada", "shakira.mp3"),
            new Cancion(24,"Kiss me", "Ed Sheeran", "4:26","sheeran.png", "2015", "Balada", "sheeran.mp3"),
            new Cancion(25,"Dharma", "Sebastian Yatra", "3:03","yatra.jpg", "2021", "Balada", "yatra.mp3"),
        ];
        //Por defecto se coloca la primera cancion del catalogo como cancion actual
        this.cancionActual=this.catalogoCanciones[0];
        this.mostrarCanciones();       
    
    }
    mostrarDetalleCancion(idCancion){
        //console.log("IdCancion "+idCancion);
        let datosCancion=document.getElementById('songData');
        let cancionPlay = this.catalogoCanciones.filter(cancion=>cancion.id == idCancion);
        this.cancionActual=cancionPlay[0];
        //console.log(cancionPlay);
        datosCancion.innerHTML=`
            <table>
                <tr id="name">
                    <td><b>Nombre:</b></td>
                    <td>${cancionPlay[0].nombre}</td>
                </tr>
                <tr id="duracion">
                <td><b>Duracion:</b></td>
                <td>${cancionPlay[0].duracion}</td>
            </tr>
                <tr id="artista">
                    <td><b>Artista:</b></td>
                    <td>${cancionPlay[0].artista}</td>
                </tr>
                <tr id="year">
                    <td><b>Año:</b></td>
                    <td>${cancionPlay[0].anio}</td>
                </tr>
                <tr id="genre">
                    <td><b>Género:</b></td>
                    <td>${cancionPlay[0].genero}</td>
                </tr>
            </table>        
        `;

        let imgAlbum=document.getElementById('fuenteImagen');
        imgAlbum.src='IMG/'+cancionPlay[0].portadaAlbum;
        this.reproducir();

    }

    reproducir(){
        this.audio =new Audio('canciones/'+this.cancionActual.url);
        //console.log(audio);
        this.audio.play();
    }

    detener(){       
       console.log("detener");
       // this.audio.pause();
    }
    forward(){
        console.log("forward >>");
    }
    backward(){
        console.log("<< backward");
    }
    mute(){
        console.log("mute");
    }

    mostrarCanciones(){
        let resultadosBuscador = document.getElementById('resultadosBuscador');
        this.catalogoCanciones.forEach(
            cancion => {
                resultadosBuscador.innerHTML+=
                    `<li id="res_${cancion.id}" class="cancion">${cancion.nombre}
                        <i style="font-size:24px" class="fa" onclick="miReproductor.mostrarDetalleCancion(${cancion.id});">&#xf0da;</i>
                        <i style="font-size:16px" class="fa">&#xf004;</i>
                        <i class="fa fa-plus"></li>`
            }
        )
        //console.log(this.catalogoCanciones) ; 
        let imgAlbum=document.getElementById('fuenteImagen');
        imgAlbum.src='IMG/'+this.cancionActual.portadaAlbum;
       
    }

    buscarCancionNombre(nombre){
        console.log("Buscar por Nombre");
    }
    buscarCancionArtista(artista){
        console.log("Buscar por Artista");
    }
    buscarCancionGenero(genero){
        console.log("Buscar por Genero");
    }
    buscarCancion(cancionBuscada){
        cancionBuscada=(cancionBuscada.trim(cancionBuscada)).toLowerCase();       
        let resultadoNombre=this.catalogoCanciones.filter(cancion=>(cancion.nombre.toLowerCase()).match(cancionBuscada));
        let resultadoArtista=this.catalogoCanciones.filter(cancion=>(cancion.artista.toLowerCase()).match(cancionBuscada));
        let resultadoGenero=this.catalogoCanciones.filter(cancion=>(cancion.genero.toLowerCase()).match(cancionBuscada));
        let filtroCanciones=[...resultadoNombre, ...resultadoArtista, ...resultadoGenero];
        filtroCanciones=[...new Set(filtroCanciones)];        
        this.mostrarBusqueda(filtroCanciones);

    }
    mostrarBusqueda(filtroCanciones){
        let resultadosBuscador = document.getElementById('resultadosBuscador');
        resultadosBuscador.innerHTML="";
        filtroCanciones.forEach(
            cancion => {
                resultadosBuscador.innerHTML+=
                    `<li id="res_${cancion.id}" class="cancion">${cancion.nombre}
                        <i style="font-size:24px" class="fa" onclick="miReproductor.mostrarDetalleCancion(${cancion.id});">&#xf0da;</i>
                        <i style="font-size:16px" class="fa">&#xf004;</i>
                        <i class="fa fa-plus"></li>`
            }
        )
    }

    


   
}

//Creacion del Reproductor
let miReproductor = new Reproductor();



//Busqueda
let txtBuscar=document.getElementById("txtBuscar");

let btnBuscar=document.getElementById("btnBuscar");
btnBuscar.addEventListener(
    "click",
    function(){
       miReproductor.buscarCancion(txtBuscar.value); 
    }
);


//Agregar evento al boton play del HTML
let play=document.getElementById('play');
play.addEventListener("click", miReproductor.reproducir());


//Agregar evento al boton stop del HTML
let botonStop=document.getElementById('stop');
botonStop.addEventListener("click", miReproductor.pause());


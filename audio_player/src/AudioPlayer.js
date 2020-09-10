
class AudioPlayer{

    constructor(domElement) {
        this.lista_c = 0;
        this.canciones =["./assets/songs/1.mp3","./assets/songs/2.mp3","./assets/songs/3.mp3"];
        this.caratula =["./assets/covers/1.gif","./assets/covers/2.gif","./assets/covers/3.gif"];
        this.postal=document.querySelector(".portada");
        
        


        this.domElement = domElement;
        this.src = this.domElement.dataset.src;
        this.audio = new Audio(this.src);
        this.controls = {
            domElement: this.domElement.querySelector(".controls")
        };
        this.progress = this.domElement.querySelector(".cover .progress");
        this.tiempo_i = this.domElement.querySelector(".tiempo_i");         
        this.tiempo_f = this.domElement.querySelector(".tiempo_f");
        console.log(this.tiempo_i);
        console.log(this.tiempo_f);
        this.initControls();
        this.initProgressActions();
        /* this.llamar_tiempo(); */

        this.audio.ontimeupdate = () => { this.updateUI(),this.Actualizacion_tiempo(); }
    }

    initControls() {
        this.boton_next=this.controls.domElement.querySelector(".boton_flecha_rigth");
        this.boton_before=this.controls.domElement.querySelector(".boton_flecha_left"); 
        this.controls.play = this.controls.domElement.querySelector(".boton_B");

        if(this.boton_before){
            this.pre(this.boton_before);
        }
        if (this.controls.play) {
            this.initPlay(this.controls.play);
        }

        if(this.boton_next){
            this.next(this.boton_next);
        }
        if (this.controls.play) {
            this.initPlay(this.controls.play);
        }
    }

    initPlay(domElement) {
        domElement.onclick = () => {

            if (!this.audio.paused) {
                this.pause();
            } else {
                this.play();
            }
        }
    }

    initProgressActions() {
        const cover = this.domElement.querySelector(".cover");
        cover.onclick = (e) => {
            const x = e.offsetX;
            const totalX = cover.clientWidth;
            const progress = x / totalX;
            this.setCurrentTime(progress);
        };
    }

    formatTime(seconds) {
        let min = Math.floor((seconds / 60));         
        let sec = Math.floor(seconds - (min * 60));
        if (sec < 10) {sec = `0${sec}`;}         
        return `${min}:${sec}`;}

    Actualizacion_tiempo(){
        this.tiempo_i.innerHTML=(this.formatTime(Math.floor(this.audio.currentTime)));
        this.audio.addEventListener('durationchange',(event) =>{
            if(this.tiempo_f.innerHTML === "NaN:NaN"){
                
                this.tiempo_f.innerHTML = "0:00";
            }else{
                this.tiempo_f.innerHTML=(this.formatTime(Math.floor(this.audio.duration)));
            }
   
        });
    }

    llamar_tiempo(){
        setInterval(this.formatTime,500);
    }

    setCurrentTime(progress) {
        this.audio.currentTime = this.audio.duration * progress;
    }

    updateUI() {
        console.log("Updating UI");
        const total = this.audio.duration;
        const current = this.audio.currentTime;
        const progress = (current / total) * 100;
        this.progress.style.width = `${progress}%`;
    }



    next(domElement) {

        domElement.onclick = () => {

            if (!this.audio.paused) {
                this.pause();
                this.lista_c += 1;
 
                if (this.lista_c > this.canciones.length-1){
                 this.lista_c = 0;
                } 
                this.src = this.canciones[this.lista_c];
                this.audio = new Audio(this.src);
                this.postal.src = this.caratula[this.lista_c];
                console.log(this.postal.src);
                this.audio.ontimeupdate = () => { this.updateUI() , this.Actualizacion_tiempo(); }
                this.play();
 
            } else {
                console.log("Algo esta mal mano");
            }
        }
    }

    pre(domElement){

        domElement.onclick = () => {

            if (!this.audio.paused) {
                this.pause();
                this.lista_c -= 1;
 
                if (this.lista_c > this.canciones.length -1){
                 this.lista_c = 0;
                } 
                this.src = this.canciones[this.lista_c];
                this.audio = new Audio(this.src);
                this.postal.src = this.caratula[this.lista_c];
                console.log(this.postal.src);
                this.audio.ontimeupdate = () => { this.updateUI() , this.Actualizacion_tiempo(); }
                this.play();
 
            } else {
                console.log("Algo esta mal mano");
            }
        }
    }
    

    play() {
        this.audio.play().then().catch(err => console.log(`Error al reproducir el archivo: ${err}`));
    }

    pause() {
        this.audio.pause();
    }
    
}

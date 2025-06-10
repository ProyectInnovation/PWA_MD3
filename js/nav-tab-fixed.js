import { resaltaSiEstasEn } from "../lib/js/resaltaSiEstasEn.js"

export class NavTabFixed extends HTMLElement {

 connectedCallback() {
  this.classList.add("md-tab", "fixed")

  this.innerHTML = /* HTML */`
   <a ${resaltaSiEstasEn(["/index.html", "", "/"])} href="index.html">
    <span class="material-symbols-outlined">home</span>
    Inicio
   </a>

  <a ${resaltaSiEstasEn(["/geolocalizacion.html"])} href="geolocalizacion.html">
    <span class="material-symbols-outlined">location_on</span>
    Geo
   </a>

  <a ${resaltaSiEstasEn(["/mBarchivos.html"])} href="mBarchivos.html">
    <span class="material-symbols-outlined">folder_open</span>
    Archivos
   </a>


  <a ${resaltaSiEstasEn(["/mCamara.html"])} href="mCamara.html">
    <span class="material-symbols-outlined">photo_camera</span>
    Cámara
   </a>


   <a ${resaltaSiEstasEn(["/ayuda.html"])} href="ayuda.html">
    <span class="material-symbols-outlined">help</span>
    Ayuda
   </a>`
 }

}

customElements.define("nav-tab-fixed", NavTabFixed)
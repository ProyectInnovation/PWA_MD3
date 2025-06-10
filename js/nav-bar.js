import { resaltaSiEstasEn } from "../lib/js/resaltaSiEstasEn.js"

export class NavBar extends HTMLElement {

 connectedCallback() {
  this.classList.add("md-navigation-bar")

  this.innerHTML = /* HTML */`
   <a ${resaltaSiEstasEn(["/index.html", "", "/"])} href="index.html">
    <span class="material-symbols-outlined">home</span>
    Inicio
   </a>

   <a ${resaltaSiEstasEn(["/navTabFixed.html"])} href="navTabFixed.html">
    <span class="material-symbols-outlined">tabs</span>
    Pestañas
   </a>

   <a id="navbar" ${resaltaSiEstasEn(["/navbar.html"])} href="navbar.html">
    <span class="material-symbols-outlined">bottom_navigation</span>
    Barra
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

   <a ${resaltaSiEstasEn(["/formulario.html"])} href="formulario.html">
    <span class="material-symbols-outlined">newspaper</span>
    Forma
   </a>`

 }

}

customElements.define("nav-bar", NavBar)
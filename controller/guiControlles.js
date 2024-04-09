console.log("teste123")
import { Header } from "./appcontroller/header.js";
import {Nav, telas} from "./appcontroller/nav.js";

//Botão do header para abrir menu nav
const header = new Header();
  
// Adicionando o método openCloseNav
const btnDrawer = document.getElementById("btnDrawer");
btnDrawer.addEventListener("click", () => {
  header.openCloseNav();
});

 // Criando uma instância do objeto Nav e passando as telas como construtor 
 const nav = new Nav(telas);
  
 // Adicionando um evento clique para cada botao do meu nav correspondente a sua tela
 const btnsNav = document.getElementsByClassName("btnNav");
 for (let i = 0; i < btnsNav.length; i++) {
   btnsNav[i].addEventListener("click", () => {
     const target = btnsNav[i].getAttribute("data-target");
     nav.alternarTela(target);
   });
 }
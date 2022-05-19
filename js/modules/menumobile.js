import outsideClick from "./outside-click.js"

export default function initMenuMobile(){
  const menu = document.querySelector("[data-menu-mobile='menu']")
  const ul = document.querySelector("[data-menu-mobile='ul']")
  const eventos = ["click", "touchstart"]

  eventos.forEach(evento=>menu.addEventListener(evento, openMenu))

  function openMenu(e){
    e.preventDefault()
    menu.classList.add("rotate-icon")
    ul.classList.add("ativo")
    outsideClick(ul, eventos, ()=>{
      ul.classList.remove("ativo")
      menu.classList.remove("rotate-icon")
    })
  }
}



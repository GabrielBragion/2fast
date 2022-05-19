export default function initAccordionMenu(){
  const accordionTitulo = document.querySelectorAll("[data-accordion='titulo']")
  const accordionTexto = document.querySelectorAll("[data-accordion='texto']")
  const accordionSeta = document.querySelectorAll("[data-accordion='seta']")

  if(accordionTitulo.length){
    accordionTitulo.forEach((item,index)=> item.addEventListener("click", function(){
      handleToogle(index)
    }))
    accordionTexto.forEach((item,index)=> item.addEventListener("click", function(){
      handleToogle(index)
    }))


    function handleToogle(index){
      accordionTitulo[index].classList.toggle("ativo")
      accordionTexto[index].classList.toggle("ativo")
      accordionSeta[index].classList.toggle("rotate-180")
    }
  }
}

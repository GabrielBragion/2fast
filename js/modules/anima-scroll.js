export function initAnimaScroll(){
  const sections = document.querySelectorAll(".js-scroll")
  if(sections.length){
    const activeAnimaScroll = "ativo"
    const windowMetade = window.innerHeight * 0.7
    function animaScroll(){
      sections.forEach((section)=>{
        const sectionTop = section.getBoundingClientRect().top
        const sectionVisible = (sectionTop - windowMetade) < 0
        if(sectionVisible){
          section.classList.add(activeAnimaScroll)
        }
      })
    }
    animaScroll()
    window.addEventListener("scroll", animaScroll)
  }
  const sections2 = document.querySelectorAll(".js-scroll2")
  if(sections2.length){
    const activeAnimaScroll = "ativo"
    const windowMetade = window.innerHeight * 0.7
    function animaScroll2(){
      sections2.forEach((section)=>{
        const sectionTop = section.getBoundingClientRect().top
        const sectionVisible = (sectionTop - windowMetade) < 0
        if(sectionVisible){
          section.classList.add(activeAnimaScroll)
        }
      })
    }
    animaScroll2()
    window.addEventListener("scroll", animaScroll2)
  }
}


export function initScrollSmooth(){
  const linksInternos = document.querySelectorAll(".js-menu a[href^='#']")
  function scrollToSection(e){
    e.preventDefault()
    const href = e.currentTarget.getAttribute("href")
    const section = document.querySelector(href)
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  //   ----Forma Alternativa----
  /*
  const topo = section.offsetTop
  window.scrollTo({
    top: topo,
    behavior: "smooth",
  })
  */
  }
  linksInternos.forEach((link)=>{
    link.addEventListener("click", scrollToSection)
  })
}
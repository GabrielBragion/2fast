export default function initFuncionamento(){
  const funcionmento = document.querySelector("[data-semana]")
  const diaSemana = funcionmento.dataset.semana.split(",").map(Number)
  const horarioSemana = funcionmento.dataset.horario.split(",").map(Number)
  
  const diaAgora = new Date().getDay()
  const horaAgora = new Date().getHours()
  
  const abertoSemana = diaSemana.indexOf(diaAgora) !== -1
  const abertoHorario = (horaAgora >= horarioSemana[0] && horaAgora < horarioSemana[1])

  const txt = document.querySelector(".sinal-txt")
  
  if(abertoSemana && abertoHorario){
    funcionmento.classList.add("aberto")
    txt.innerHTML += "aberto"
  }else{
    funcionmento.classList.add("fechado")
    txt.innerHTML += "fechado"
  }
  
  
  
  
  /* function aberto(){
    const aberto = diaSemana.indexOf(diaAgora)
    if(aberto !== -1){
     funcionmento.classList.add("aberto")
    }else{
      funcionmento.classList.add("fechado")
    }
  }
  aberto() */
}



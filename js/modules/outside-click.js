export default function outsideClick(item, events ,callback){
  const html = document.documentElement
  const outside = "data-outside"

  if(!item.hasAttribute(outside)){
    events.forEach((userEvent)=>{
      setTimeout(() => html.addEventListener(userEvent, handleOutsideClick))
    })
    item.setAttribute(outside, "")
  }
  function handleOutsideClick(event){
    if(!item.contains(event.target)){
      item.removeAttribute(outside)
      events.forEach((userEvent)=>{
        html.removeEventListener(userEvent, handleOutsideClick)
      })
      callback()
    }
  }
}
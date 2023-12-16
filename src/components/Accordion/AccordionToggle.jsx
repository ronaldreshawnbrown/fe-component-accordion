import React from 'react'

const AccordionToggle = ({id, show , label,  open })=> {
  return <div onClick={()=>open(id)} id={id} className="accordionToggle">{label} {show? "-" : "+" }</div>
}

export default AccordionToggle
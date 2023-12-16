import React, {useState,useEffect} from 'react'

const AccordionPanel = ({ show, content}) => {
  const [visibility, setVisibility] = useState(true)

  useEffect(()=>{
   setVisibility(show)
  },[show])

  return <div className={visibility ? "panelOn" : "panelOff"}>{content}</div>
}

  export default AccordionPanel
import React, {useEffect, useState} from 'react'
import './Accordion.css'
import AccordionItem from './AccordionItem'

const Accordion = ({accordionInfo})=> {
    const [data, setData] = useState([])
  
    useEffect(()=>{
      setData(accordionInfo)
    },[accordionInfo])
  
    function onClickHandler(id){
      let currentData = [...data]
      
      for (let itemId in accordionInfo){
        if(id === currentData[itemId].id){
          currentData[itemId].show = currentData[itemId].show ? false : true
        } else {
          currentData[itemId].show=false
        }
      }
      setData(currentData)
    }
   
    return (<>
    {data.map((item)=>{
      return <AccordionItem key={item.id} id={item.id} show={item.show} label={item.label} content={item.content} open={onClickHandler}></AccordionItem>
    })}
    </>)
  }

  export default Accordion


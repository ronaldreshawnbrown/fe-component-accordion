import React from 'react'
import AccordionToggle from './AccordionToggle'
import AccordionPanel from './AccordionPanel'

const AccordionItem = ({id, show, label, open, content})=>{
    return (
          <section className="accordionItem">
            <AccordionToggle id={id} label={label} open={open} show={show}></AccordionToggle>
            <AccordionPanel content={content} show={show}></AccordionPanel>
          </section>
          )
  }
  export default AccordionItem
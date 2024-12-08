import React from 'react'
import Link from "next/link";
import Job from '../components/Work/Job';

const EXPERIENCE = [
  {title: "full-stack engineering intern", company: "vitaltrack health"},
  {title: "undergraduate research assistant", company: "florida state university – makex lab"},
  {title: "summer research program intern", company: "massachusetts institute of technology – lincoln laboratory"},
  {title: "data analytics intern", company: "devoe l. moore center"},
  {title: "software engineering intern", company: "northrop grumman"},
]

export default function Resume() {
  return (<>

    {EXPERIENCE.map((item, index) => (
      <Job key={index} 
        title={item.title} 
        company={item.company}/>
      ))
    }
    
  </>)
}
import React from 'react'
import Image from '../images/values.jpg'
import SectionHeader from './SectionHeader'
import {GiCutDiamond} from 'react-icons/gi'
import {values} from '../data'
import Card from '../UI/Card'

const Values = () => {
  return (
    <section className='values'>
      <div className='container values_container'>
        <div className="values_left">
          <div className="values_image">
            <img src={Image} alt="Values Image" />
          </div>
        </div>
        <div className="values_right">
          <SectionHeader icon={<GiCutDiamond/>} title="Values"></SectionHeader>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, ex. Consequuntur, ex.
          </p>
          <div className="values_wrapper">
            {
              values.map (({id, icon, title, desc}) => {
                return <Card className='values_value'>
                    <span>{icon}</span>
                    <h4>{title}</h4>
                    <small>{desc}</small>
                </Card>
              })
            }
          </div>
        </div>
      </div>




    </section>
  )
}

export default Values

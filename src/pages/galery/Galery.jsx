import React from 'react'
import './galery.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_3.jpg'


const Galery = () => {
  const gallerylenght = 15;
  const images = []

  for(let i=1; i <= gallerylenght; i++){
    images.push(require(`../../images/gallery${i}.jpg`))
  }
  
  return (
    <>
    <Header title="Our Gallery" image={HeaderImage}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora cum, voluptatum voluptatibus quaerat consequatur quia beatae optio. Ea, quae mollitia.
    </Header>
    <section className='gallery'>
      <div className='container gallery_container'>
        {
          images.map((image, index) =>{
            return <article key={index}>
              <img src={image} alt={`Gallery Image ${index + 1}`} />

            </article>
          })
        }
      </div>

    </section>
    </>
  )
}

export default Galery

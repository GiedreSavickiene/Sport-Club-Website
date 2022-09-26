import Header from '../../components/Header'
import React from 'react'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css'

const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam labore non laboriosam dolore illo ipsa voluptates libero hic animi repellendus.
    </Header>

    <section className='about_story'>
      <div className='container about_story-container'>
        <div className='about_section-image'>
          <img src={StoryImage} alt="Our story image" />
        </div>
        <div className='about_section-content'>
          <h1>Our Story</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ipsam mollitia, aspernatur cupiditate sed dignissimos molestias, sequi debitis fuga fugiat doloremque voluptates eum. Iste eligendi officia repellat inventore ab impedit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nemo quo similique doloremque quasi blanditiis debitis nesciunt libero tempora molestias.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, voluptas!
          </p>
        </div>
      </div>

    </section>
    <section className='about_Vision'>
      <div className='container about_Vision-container'>
        
        <div className='about_section-content'>
          <h1>Our Vision</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ipsam mollitia, aspernatur cupiditate sed dignissimos molestias, sequi debitis fuga fugiat doloremque voluptates eum. Iste eligendi officia repellat inventore ab impedit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nemo quo similique doloremque quasi blanditiis debitis nesciunt libero tempora molestias.
          </p>
          
        </div>
        <div className='about_section-image'>
          <img src={VisionImage} alt="Our Vision image" />
        </div>
      </div>

    </section>
    <section className='about_mission'>
      <div className='container about_mission-container'>
        <div className='about_section-image'>
          <img src={MissionImage} alt="Our Mission image" />
        </div>
        <div className='about_section-content'>
          <h1>Our Mission</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ipsam mollitia, aspernatur cupiditate sed dignissimos molestias, sequi debitis fuga fugiat doloremque voluptates eum. Iste eligendi officia repellat inventore ab impedit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nemo quo similique doloremque quasi blanditiis debitis nesciunt libero tempora molestias.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, voluptas!
          </p>
        </div>
      </div>

    </section>
    </>
  )
}

export default About

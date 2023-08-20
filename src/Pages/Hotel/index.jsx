import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import MailList from '../../components/MailList'
import './hotel.css'

const Hotel = () => {

  const [slideNumber, setSlideNumber] = useState(0)
  const [openSlide, setOpenSlide] = useState(false)
  const photos = [
    {
      src: 'https://www.duxiana.pt/globalassets/inriver/images/hotel-hotel-burj-al-arab-dubai--inspiration-6-.jpg?width=992&height=661&mode=crop&format=jpg&quality=75'
    },
    {
      src: 'https://primetour.com.br/wp-content/uploads/2016/03/burj-al-arab-dubai-emirados-arabes-primetour-viagens-luxo-viagem-01-1200x609.jpg'
    },
    {
      src: 'https://content.r9cdn.net/rimg/himg/3f/d9/1d/leonardo-1125824-Burj_Al_Arab_-_Sky_One_Bedroom_Suite_-_Living_Room_O-673683.jpg?crop=true&width=500&height=350'
    },
    {
      src: 'https://images.trvl-media.com/hotels/1000000/530000/527500/527497/8c5d356a.jpg?impolicy=fcrop&w=670&h=385&p=1&q=medium'
    },
    {
      src: 'https://viagemeturismo.abril.com.br/wp-content/uploads/2016/10/burj_al_arab_-_skyview_bar_.jpeg?quality=70&strip=info&w=923?quality=70&strip=info&w=636'
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEUSwmJykSpdAE3JiliXyTubxaMDVRnKNckg&usqp=CAU'
    }
  ]
  
  const handleOpen = index => {
    setSlideNumber(index)
    setOpenSlide(true)
  }

  const handleImgSlider = operation => {
    if(operation === '-'){
      setSlideNumber(slideNumber===0 ? (photos.length - 1) : slideNumber - 1)
    }else if(operation === '+'){
      setSlideNumber(slideNumber === (photos.length - 1) ? 0 : slideNumber + 1)
    }
  }

  return (
    <div>
        <Header type='list' />
        <div className="hotel-container">
          {openSlide && <div className="slider">
                <FontAwesomeIcon icon={faCircleXmark} className='close-slider' onClick={()=>setOpenSlide(!openSlide)} />
                <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={()=>handleImgSlider('-')} />
                <div className="slider-wrapper">
                  <img src={photos[slideNumber].src} alt="" className='slider-img' />
                </div>
                <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={()=>handleImgSlider('+')} />
          </div>}
          <div className="hotel-wrapper">
            <button className="book-now">Reserve or Book Now!</button>
            <h1 className="hotel-title">Grand Hotel</h1>
            <div className="hotel-adress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>Elton St 125 New york</span>
            </div>
            <span className="hotel-distance">
              Excellent location - 500 m from center
            </span>
            <span className="hotel-price-highlight">
              Book a stay over $114 at this property and get a free airport taxi
            </span>
            <div className="hotel-images">
                {photos.map((photo, index) => {
                  return (
                    <div key={index} className="hotel-img-wrapper">
                      <img 
                        onClick={()=>handleOpen(index)}
                        src={photo.src} 
                        alt=""
                        className='hotel-img' 
                      />
                    </div>
                  )
                })}
            </div>
            <div className="hotel-details">
              <div className="hotel-details-texts">
                <h1 className="hotel-title">Stay in the heart of Krakow</h1>
                <p className="hotel-desc">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                  Dignissimos voluptate enim eum ab molestiae laudantium ex, 
                  amet eveniet architecto voluptatum. Lorem ipsum dolor sit 
                  amet consectetur, adipisicing elit. Non, amet? Est consectetur 
                  quisquam mollitia repellendus laborum ex praesentium unde officiis?
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, ea?
                </p>
              </div>
              <div className="hotel-details-price">
                <h1>Perfect for a 9-night stay!</h1>
                <span>
                  Located in the real heart of Krakow, this property has
                  an excellent location score of 8.9!
                </span>
                <h2><b>$945</b> (9 nights)</h2>
                <button>Reserve or Book Now</button>
              </div>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>
    </div>
  )
}

export default Hotel
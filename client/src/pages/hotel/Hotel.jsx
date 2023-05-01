import "./hotel.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
import { useState } from "react"

const Hotel = () => { 
    const [slideNumber, setSlideNumber] = useState(0)
    const [open, setOpen] = useState(false)

    const photos = [
        { src: "https://blog.displate.com/wp-content/uploads/2021/10/room-aesthetic_LED-lamps_3.jpg" },
        { src: "https://blog.displate.com/wp-content/uploads/2021/10/room-aesthetic_gallery-wall-819x1024.jpg" },
        { src: "https://blog.displate.com/wp-content/uploads/2021/10/room-aesthetic_LED-lamps_3.jpg" },
        { src: "https://blog.displate.com/wp-content/uploads/2021/10/room-aesthetic_gallery-wall-819x1024.jpg" },
        { src: "https://blog.displate.com/wp-content/uploads/2021/10/room-aesthetic_LED-lamps_3.jpg" },
        { src: "https://blog.displate.com/wp-content/uploads/2021/10/room-aesthetic_gallery-wall-819x1024.jpg" }
    ]
    const handleOpen = (i) => {
        setSlideNumber(i);
        setOpen(true)
    }
    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="hotelContainer">
                {open && <div className="slider">
                    <FontAwesomeIcon icon={faCircleXmark} />
                    <FontAwesomeIcon icon={faCircleArrowLeft} />
                    <div className="sliderWrapper">
                        <img src={ photos[slideNumber].src} alt="" className="sliderWrapper" />
                    </div>
                    <FontAwesomeIcon icon={faCircleArrowRight} />
                </div>}
                <div className="hotelWrapper">
                    <button className="bookNow">Reserve or Book Now!</button>
                    <h1 className="hotelTitle">Grand Hotel</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>Elston St 125 New York</span>
                    </div>
                    <span className="hotelDistance">
                        Excellent location - 500m from center
                    </span>
                    <span className="hotelPriceHighlight">
                        Book a stay over $114 at this property and get a free airport taxi
                    </span>
                    <div className="hotelImages">
                        {
                            photos.map((photo, i) => (
                                <div className="hotelImgWrapper">
                                    <img
                                        onClick={() => handleOpen(i)}
                                        src={photo.src} alt="" className="hotelImg" />
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsTexts">
                            <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
                            <p className="hotelDesc">
                                Located a 5-min walk from St. Florian's Gate in Krakow.Located a 5-min walk from St. Florian's Gate in Krakow.Located a 5-min walk from St. Florian's Gate in Krakow.Located a 5-min walk from St. Florian's Gate in Krakow.Located a 5-min walk from St. Florian's Gate in Krakow.
                            </p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Perfect fro a 9-night stay!</h1>
                            <span>Located in the real heart of Krakow, this property has an excellent location score of 9.8!</span>
                                <h2><b>$945</b>(9 nights)</h2>
                                <button>Reserve or Book Now!</button>
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
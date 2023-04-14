import "./header.css"
import { faBed, faCar, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Header = () => { 
    return (
        <div className="header">
            <div className="headerContainer"><div className="headerList">
                <div className="headerListItem active">
                    <FontAwesomeIcon icon={faBed} />
                    <span>
                        Stays
                    </span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faPlane} />
                    <span>
                        Fligths
                    </span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faCar} />
                    <span>
                        Car Rentals
                    </span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faBed} />
                    <span>
                        Attractions
                    </span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faTaxi} />
                    <span>
                        Airport taxis
                    </span>
                </div>
                <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1></div>
                <p className="headerDescription">
                    Get rewarded for your travels-unlock instant savings of10% or more with a free Lamabooking account.
                </p>
                <button className="headerBtn">Sign in / Register</button>
            </div>
    </div>
)
}
export default Header
import "./featured.css"

const Featured = () => { 
    return (
        <div className="featured">
            <div className="featuredItem">
                <img
                    src="https://wallpaperaccess.com/full/2325556.jpg"
                    alt=""
                    className="featuredImg"
                />
                <div className="featuredTitles">
                    <h1>Dublin</h1>
                    <h2>123 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
            <img
                    src="https://wallpaperaccess.com/full/2325556.jpg"
                    alt=""
                    className="featuredImg"
                />
                <div className="featuredTitles">
                    <h1>Austin</h1>
                    <h2>532 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
            <img
                    src="https://wallpaperaccess.com/full/2325556.jpg"
                    alt=""
                    className="featuredImg"
                />
                <div className="featuredTitles">
                    <h1>Reno</h1>
                    <h2>533 properties</h2>
                </div>
            </div>
        </div>
    )
}

export default Featured
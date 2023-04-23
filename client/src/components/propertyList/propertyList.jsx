import "./propertyList.css"

const PropertyList = () => { 
    return (
        <div className="pList">
            <div className="pListItem">
                <img src="https://wallpaperaccess.com/full/2325559.jpg" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Hotels</h1>
                    <h2>233 Hotels</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://wallpaperaccess.com/full/2325559.jpg" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Apartments</h1>
                    <h2>233 Hotels</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://wallpaperaccess.com/full/2325559.jpg" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Resorts</h1>
                    <h2>233 Hotels</h2>
                </div>
            </div>
        </div>
    )
}
export default PropertyList
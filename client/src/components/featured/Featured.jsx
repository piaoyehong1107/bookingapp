import "./featured.css"
import useFetch from "../../hooks/useFetch"

const Featured = () => { 
    const { data, loading, error} = useFetch("/hotels/countByCity?cities=berlin,madrid,london")
    return (
        <div className="featured">
            {loading ? ("loading please wait") :
                (
                    <>
                        <div className="featuredItem">
                            <img
                                src="https://wallpaperaccess.com/full/2325556.jpg"
                                alt=""
                                className="featuredImg"
                            />
                            <div className="featuredTitles">
                                <h1>Berlin</h1>
                                <h2>{ data[0]} properties</h2>
                            </div>
                        </div>
                        <div className="featuredItem">
                            <img
                                src="https://wallpaperaccess.com/full/2325556.jpg"
                                alt=""
                                className="featuredImg"
                            />
                            <div className="featuredTitles">
                                <h1>Madrid</h1>
                                <h2>{ data[1]} properties</h2>
                            </div>
                        </div>
                        <div className="featuredItem">
                            <img
                                src="https://wallpaperaccess.com/full/2325556.jpg"
                                alt=""
                                className="featuredImg"
                            />
                            <div className="featuredTitles">
                                <h1>London</h1>
                                <h2>{ data[2]} properties</h2>
                            </div>
                        </div>
                    </>
                )}
        </div>
    )
}

export default Featured
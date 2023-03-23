import React from "react"
import useFetch from "../../hooks/useFetch"
import "./featuredProperties.css"

const FeaturedProperties = () => {
  const { data, error, loading, reFetch } = useFetch(
    "/hotels?featured=true&limit=4"
  )

  return (
    <div className="fp">
      {loading && "Loading..."}
      {!loading &&
        data.map((hotel, index) => (
          <div className="fpItem" key={index}>
            <img src={hotel.photos[0]} alt="" className="fpImg" />
            <span className="fpName">{hotel.name}</span>
            <span className="fpCity">{hotel.city}</span>
            <span className="fpPrice">
              Starting from ${hotel.cheapestPrice}
            </span>
            <div className="fpRating">
              <button>8.9</button>
              <span>Excellent</span>
            </div>
          </div>
        ))}
    </div>
  )
}

export default FeaturedProperties

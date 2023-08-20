import './searchItem.css'

const SearchItem = () => {
  return (
    <div className='search-item'>
      <img 
          src="https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/261707778.jpg?k=9706ddee5abc0e4456aaa6363fde346c813bbfda2d1b900ddc08ad75a8e79184&o=" 
          alt="" 
          className="si-img" 
        />
        <div className="si-desc">
          <h1 className="si-title">Tower Street Apartments</h1>
          <span className="si-distance">500m from center</span>
          <span className="si-taxi-op">Free airport taxi</span>
          <span className="si-subtitle">Studio Apartment Air conditioning</span>
          <span className="si-featured">
            Entire studio + 1 bathroom + 21m<sup>2</sup> 1 full bed
          </span>
          <span className="si-cancel-op">Free cancellation</span>
          <span className="si-cancel-op-subtitle">
            You can cancel later, so lock in this great price today
          </span>
        </div>
        <div className="si-details">
          <div className="si-rating">
            <span>Excellent</span>
            <button>8.9</button>
          </div>
          <div className="si-details-text">
            <span className="si-price">$123</span>
            <span className="si-tax-op">Includes taxes and fees</span>
            <button className="si-check-button">See availability</button>
          </div>
        </div>
    </div>
  )
}

export default SearchItem
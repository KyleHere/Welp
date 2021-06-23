import './ShopCard.css'

function ShopCard(){
  return(
    <div className='shopCardContainer'>
      <div className='shopCardLeft'>
        <div className='shopCardImageDiv'>
          <img className='shopCardImage' alt='insert picture here'/>
          {/* specify img container dimensions later */}
        </div>
      </div>
      <div className='shopCardRight'>
        <div className='shopName'>
          Name of Shop
        </div>
        <div className='shopRating'>
          Rating
        </div>
        <div>
          address
          
        </div>
      </div>
    </div>
  )
}

export default ShopCard;

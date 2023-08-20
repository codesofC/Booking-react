import './featured.css'

const Featured = () => {
  return (
    <div className='featured'>
    <div className="featured-item">
        <img 
            src='https://viagemeturismo.abril.com.br/wp-content/uploads/2016/12/stockbyte.jpg'
            alt="" 
            className="featured-img" 
        />
        <div className="featured-titles">
            <h1>Dublin</h1>
            <h2>123 properties</h2>
        </div>
    </div>
        <div className="featured-item">
            <img 
                src='https://agimmigration.law/wp-content/uploads/2021/03/blog-austin.jpg'
                alt="" 
                className="featured-img" 
            />
            <div className="featured-titles">
                <h1>Austin</h1>
                <h2>532 properties</h2>
            </div>
        </div>
        <div className="featured-item">
            <img 
                src='https://www.momondo.com.br/rimg/dimg/97/b0/961eb3a8-city-7128-16764004bcf.jpg?width=1366&height=768&xhint=1740&yhint=2462&crop=true'
                alt="" 
                className="featured-img" 
            />
            <div className="featured-titles">
                <h1>Dublin</h1>
                <h2>533 properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured
import './propertyList.css'

const PropertyList = () => {
  return (
    <div className='p-list'>
        <div className="p-list-item">
            <img 
                src="https://storage.googleapis.com/static-content-hc/sites/default/files/cataloina_porto_doble_balcon2_2.jpg" 
                alt="" 
                className="p-list-img" 
            />
            <div className="p-list-titles">
                <h1>Hotels</h1>
                <h2>233 hotels</h2>
            </div>
        </div>
        <div className="p-list-item">
            <img 
                src="https://cf.bstatic.com/xdata/images/hotel/max500/266683684.jpg?k=b1dd8a8d65860b18ed2d8077c54165e71baacec544ae80fed4c9e6506399310b&o=&hp=1" 
                alt="" 
                className="p-list-img" 
            />
            <div className="p-list-titles">
                <h1>Apartments</h1>
                <h2>233 hotels</h2>
            </div>
        </div>
        <div className="p-list-item">
            <img 
                src="https://viajandocomamalarosa.com.br/wp-content/uploads/2020/05/Ocean-Palace.jpg" 
                alt="" 
                className="p-list-img" 
            />
            <div className="p-list-titles">
                <h1>Resorts</h1>
                <h2>233 hotels</h2>
            </div>
        </div>
        <div className="p-list-item">
            <img 
                src="https://e8rbh6por3n.exactdn.com/sites/uploads/2020/05/villa-la-gi-thumbnail.jpg?strip=all&lossy=1&ssl=1" 
                alt="" 
                className="p-list-img" 
            />
            <div className="p-list-titles">
                <h1>Villas</h1>
                <h2>233 hotels</h2>
            </div>
        </div>
        <div className="p-list-item">
            <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnbqOweWk8JtIT1XO6iohVw4Nh5RSFLS5aHg&usqp=CAU" 
                alt="" 
                className="p-list-img" 
            />
            <div className="p-list-titles">
                <h1>Cabins</h1>
                <h2>233 hotels</h2>
            </div>
        </div>
    </div>
  )
}

export default PropertyList
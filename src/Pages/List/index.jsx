import './list.css'
import Header from "../../components/Header"
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import SearchItem from '../../components/SearchItem'

const List = () => {

  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [openDate, setOpenDate] = useState(false)
  const [options, setOptions] = useState(location.state.options)

  return (
    <div>
        <Header type='list' />
        <div className="list-container">
          <div className="list-wrapper">
            <div className="list-search">
              <h1 className="ls-title">Search</h1>
              <div className="ls-item">
                <label htmlFor="destination">Destination</label>
                <input 
                  type="text" 
                  id="destination"
                  value={destination}
                  onChange={e => setDestination(e.target.value)}
                />
              </div>
              <div className="ls-item">
                <label>Check-in Date</label>
                <span className='header-search-text' onClick={()=>setOpenDate(!openDate)}>
                  {`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}
                </span>
                { openDate && <DateRange 
                  onChange={item => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                  className='date-range'
                /> }
              </div>
              <div className="ls-item">
                <label>Options</label>
                <div className="ls-options">
                  <div className="ls-option-item">
                    <span className="ls-option-text">
                      Min price <small>per night</small>
                    </span>
                    <input type="number" className='ls-option-input' />
                  </div>
                  <div className="ls-option-item">
                    <span className="ls-option-text">
                      Max price <small>per night</small>
                    </span>
                    <input type="number" className='ls-option-input' />
                  </div>
                  <div className="ls-option-item">
                    <span className="ls-option-text">
                      Adult
                    </span>
                    <input type="number" onChange={e=>setOptions({...options,adult:e.target.value})}  min={1} className='ls-option-input' placeholder={options.adult} />
                  </div>
                  <div className="ls-option-item">
                    <span className="ls-option-text">
                      Children
                    </span>
                    <input type="number" onChange={e=>setOptions({...options,children:e.target.value})}  min={0} className='ls-option-input' placeholder={options.children} />
                  </div>
                  <div className="ls-option-item">
                    <span className="ls-option-text">
                      Room
                    </span>
                    <input type="number" onChange={e=>setOptions({...options,room:e.target.value})} min={1} className='ls-option-input' placeholder={options.room} />
                  </div>
                </div>
              </div>
              <button>Search</button>
            </div>
            <div className="list-result">
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
            </div>
          </div>
        </div>
    </div>
  )
}

export default List
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import './header.css'
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom'

const Header = ({type}) => {

    const [destination, setDestination] = useState('');
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([{
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    }])

    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    })
    const navigate = useNavigate()

    const handleOpenDate = () => {
        if(openOptions) setOpenOptions(false)

        setOpenDate(!openDate)
    }
    const handleOpenOptions = () => {
        if(openDate) setOpenDate(false)

        setOpenOptions(!openOptions)
    }

    const handleOptions = (key, val) => {
        setOptions({
            ...options,
            [key] : val === '-' ? options[key] - 1  : options[key] + 1,
        })
    }

    const handleSearch = () => {
        navigate('/hotels', {state: {destination, date, options}})
    }

  return (
    <div className='header'>
        <div className={type === 'list' ? 'header-container list' : 'header-container'}>
            <div className='header-list'>
                <div className='header-list-item active'>
                    <FontAwesomeIcon icon={faBed} />
                    <span>Stays</span>
                </div>
                <div className='header-list-item'>
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Flights</span>
                </div>
                <div className='header-list-item'>
                    <FontAwesomeIcon icon={faCar} />
                    <span>Car rentals</span>
                </div>
                <div className='header-list-item'>
                    <FontAwesomeIcon icon={faBed} />
                    <span>Attractions</span>
                </div>
                <div className='header-list-item'>
                    <FontAwesomeIcon icon={faTaxi} />
                    <span>Airports taxis</span>
                </div>
            </div>
            {   type !== 'list' &&
                <>
                    <h1 className='header-title'>A lifetime of discount? It's Genius</h1>
                    <p className='header-desc'>
                        Get rewarded for your travel - unlock instant saving of 
                        10% or move with a free CristBooking account
                    </p>
                    <button className='header-btn'>Sign in / Register</button>

                    <div className="header-search">
                        <div className="header-search-item">
                            <FontAwesomeIcon icon={faBed} className='header-icon' />
                            <input 
                                value={destination}
                                type='text' 
                                placeholder='Where are you going?' 
                                className='header-search-input'
                                onChange={e => setDestination(e.target.value)}
                            />
                        </div>
                        <div className="header-search-item">
                            <FontAwesomeIcon icon={faCalendarDays} className='header-icon' />
                            <span className='header-search-text' onClick={handleOpenDate}>
                                {`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}
                            </span>
                            { openDate && <DateRange
                                    editableDateInputs={true}
                                    moveRangeOnFirstSelection={false}
                                    onChange={item => setDate([item.selection])}
                                    minDate={new Date()}
                                    ranges={date}
                                    className='date'
                                />
                            }
                        </div>
                        <div className="header-search-item">
                            <FontAwesomeIcon icon={faPerson} className='header-icon' />
                            <span className='header-search-text' onClick={handleOpenOptions}>
                                { `${options.adult} adult - ${options.children} children - ${options.room} room` }
                            </span>
                            { openOptions && <div className="options">
                                <div className="options-item">
                                    <span className="option-text">Adult</span>
                                    <div className="buttons">
                                        <button 
                                            disabled={options.adult <= 1}
                                            className="option-counter-button"
                                            onClick={()=>handleOptions('adult', '-')}
                                        >-</button>
                                        <span className="option-counter-number">{options.adult}</span>
                                        <button 
                                            className="option-counter-button"
                                            onClick={()=>handleOptions('adult', '+')}
                                        >+</button>
                                    </div>
                                </div>
                                <div className="options-item">
                                    <span className="option-text">Children</span>
                                    <div className="buttons">
                                        <button 
                                            disabled={options.children <= 0}
                                            className="option-counter-button"
                                            onClick={()=>handleOptions('children', '-')}
                                        >-</button>
                                        <span className="option-counter-number">{options.children}</span>
                                        <button 
                                            className="option-counter-button"
                                            onClick={()=>handleOptions('children', '+')}
                                        >+</button>
                                    </div>
                                </div>
                                <div className="options-item">
                                    <span className="option-text">Room</span>
                                    <div className="buttons">
                                        <button 
                                            disabled={options.room <= 1}
                                            className="option-counter-button"
                                            onClick={()=>handleOptions('room', '-')}
                                        >-</button>
                                        <span className="option-counter-number">{options.room}</span>
                                        <button 
                                            className="option-counter-button"
                                            onClick={()=>handleOptions('room', '+')}
                                        >+</button>
                                    </div>
                                </div>
                            </div>
                            }
                        </div>
                        <div className="header-search-item">
                            <button 
                                className="header-btn"
                                onClick={handleSearch}
                            >Search</button>
                        </div>
                    </div>
                </>
            }
        </div>
    </div>
  )
}

export default Header
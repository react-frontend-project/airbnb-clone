import React, { useState, useEffect, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './SearchBar.css';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  const [city, setCity] = useState('');
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [guests, setGuests] = useState({
    adults: 1,
    children: 0,
    infants: 0,
    pets: 0,
  });
  const [showGuests, setShowGuests] = useState(false);
  const [showCheckInCalendar, setShowCheckInCalendar] = useState(false);
  const [showCheckOutCalendar, setShowCheckOutCalendar] = useState(false);

  const guestsRef = useRef(null);
  const checkInCalendarRef = useRef(null);
  const checkOutCalendarRef = useRef(null);

  const handleCheckInDateChange = (date) => {
    setCheckInDate(date);
    if (date > checkOutDate) {
      setCheckOutDate(null);
    }
  };

  const handleCheckOutDateChange = (date) => {
    setCheckOutDate(date);
  };

  const handleGuestsClick = () => {
    setShowGuests(!showGuests);
  };

  const handleCheckInCalendarClick = () => {
    setShowCheckInCalendar(!showCheckInCalendar);
  };

  const handleCheckOutCalendarClick = () => {
    setShowCheckOutCalendar(!showCheckOutCalendar);
  };

  const handleGuestChange = (type, value) => {
    setGuests((prevGuests) => ({
      ...prevGuests,
      [type]: prevGuests[type] + value < 0 ? 0 : prevGuests[type] + value,
    }));
  };

  const getTotalGuests = () => {
    return guests.adults + guests.children + guests.infants + guests.pets;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`City: ${city}, Check-In: ${checkInDate}, Check-Out: ${checkOutDate}, Guests: ${JSON.stringify(guests)}`);
  };

  const handleClickOutside = (event) => {
    if (guestsRef.current && !guestsRef.current.contains(event.target)) {
      setShowGuests(false);
    }
    if (checkInCalendarRef.current && !checkInCalendarRef.current.contains(event.target)) {
      setShowCheckInCalendar(false);
    }
    if (checkOutCalendarRef.current && !checkOutCalendarRef.current.contains(event.target)) {
      setShowCheckOutCalendar(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <form className="outer-box" onSubmit={handleSubmit}>
      <div className="inner-button">
        <input
          type="text"
          placeholder="Enter a city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
          className="input-field"
        />
      </div>
      <div className="separator">|</div>
      <div className="inner-button" ref={checkInCalendarRef}>
        <label>Check-In Date:</label>
        <div className="date-input">
          <input
            type="text"
            value={checkInDate ? checkInDate.toLocaleDateString() : ''}
            placeholder="Add date"
            onClick={handleCheckInCalendarClick}
            readOnly
            className="input-field"
          />
          {showCheckInCalendar && (
            <div className="date-picker-inline">
              <DatePicker
                selected={checkInDate}
                onChange={handleCheckInDateChange}
                minDate={new Date()}
                dateFormat="MM/dd/yyyy"
                inline
              />
            </div>
          )}
        </div>
      </div>
      <div className="separator">|</div>
      <div className="inner-button" ref={checkOutCalendarRef}>
        <label>Check-Out Date:</label>
        <div className="date-input">
          <input
            type="text"
            value={checkOutDate ? checkOutDate.toLocaleDateString() : ''}
            placeholder="Add date"
            onClick={handleCheckOutCalendarClick}
            readOnly
            className="input-field"
          />
          {showCheckOutCalendar && (
            <div className="date-picker-inline">
              <DatePicker
                selected={checkOutDate}
                onChange={handleCheckOutDateChange}
                minDate={checkInDate || new Date()}
                dateFormat="MM/dd/yyyy"
                inline
              />
            </div>
          )}
        </div>
      </div>
      <div className="separator">|</div>
      <div className="inner-button" ref={guestsRef}>
        <button type="button" onClick={handleGuestsClick} className="input-field">
          Guests: {getTotalGuests()}
        </button>
        {showGuests && (
          <div className="who-options">
            <div className="who-row">
             <label>Adult  </label> 
              <button onClick={() => handleGuestChange('adults', -1)}>-</button>
              <span>{guests.adults}</span>
              <button onClick={() => handleGuestChange('adults', 1)}>+</button>
            </div>
            <div className="who-row">
              <label>Child </label>  
              <button onClick={() => handleGuestChange('children', -1)}>-</button>
              <span>{guests.children}</span>
              <button onClick={() => handleGuestChange('children', 1)}>+</button>
            </div>
            <div className="who-row">
              <label>Infant </label>
              <button onClick={() => handleGuestChange('infants', -1)}>-</button>
              <span>{guests.infants}</span>
              <button onClick={() => handleGuestChange('infants', 1)}>+</button>
            </div>
            <div className="who-row">
              <label>Pets</label>
              <button onClick={() => handleGuestChange('pets', -1)}>-</button>
              <span>{guests.pets}</span>
              <button onClick={() => handleGuestChange('pets', 1)}>+</button>
            </div>
          </div>
        )}
      </div>
      <button type="submit" className="search-button"></button>
      <FaSearch className='search-icon'></FaSearch>
      
    </form>
  );
};

export default SearchBar;

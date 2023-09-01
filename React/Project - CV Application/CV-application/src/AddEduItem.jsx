/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
import { useState } from "react";

export default function AddEduItem( {onAddItem} ) {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  
  return (
    <>
      <div className="container">
        <div>
          <label htmlFor="schoolName">School name</label>
          <input 
            type="text" 
            placeholder="School name"
            value={name}
            onChange={e => setName(e.target.value)} 
            />
        </div>
        
        <div>
          <label htmlFor="studyTitle">Title of study</label>
          <input 
            type="text" 
            placeholder="Title of study"
            value={title}
            onChange={e => setTitle(e.target.value)}          
          />
        </div>

        <div>
          <label htmlFor="dateFrom">Date from:</label>
          <input 
            type="date" 
            value={dateFrom}
            onChange={e => setDateFrom(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="dateTo">Date to:</label>
          <input 
            type="date" 
            value={dateTo}
            onChange={e => setDateTo(e.target.value)}
          />
        </div>

        <button onClick={() => {
          setName('');
          setTitle('');
          setDateFrom('');
          setDateTo('');

          onAddItem(name, title, dateFrom, dateTo);
        }}>Add</button>
      </div>
    </>
  )
}
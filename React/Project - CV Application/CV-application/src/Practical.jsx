import { useState } from "react";

export default function Practical() {
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [respons, setRespons] = useState('');
  const [dateStart, setDateStart] = useState('');
  const [dateEnd, setDateEnd] = useState('');
  
  return (
    <div>
      <h3>Practical experience</h3>
      <div className="container">
        <div>
          <label htmlFor="company">Company</label>
          <input 
            type="text" 
            placeholder="Company name" 
            value={company}
            onChange={e => setCompany(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="position">Position</label>
          <input 
            type="text" 
            placeholder="Position title" 
            value={position}
            onChange={e => setPosition(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="respons">Respons</label>
          <textarea 
            placeholder="Responsibilities" 
            value={respons}
            onChange={e => setRespons(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="dateStart">Start date</label>
          <input 
            type="date" 
            value={dateStart}
            onChange={e => setDateStart(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="dateEnd">End date</label>
          <input 
            type="date" 
            value={dateEnd}
            onChange={e => setDateEnd(e.target.value)}
          />
        </div>

        
      </div>
    </div>
  )
}
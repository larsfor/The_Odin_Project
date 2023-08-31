/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
import { useState } from "react";
import EducationList from './EducationList'

let nextId = 1;
const initialItems = [
  { id: 0, name: 'Handelshøyskolen BI', title: 'Bachelor ØkAd', dateFrom: '01.06.09', dateTo: '31.05.13' },
];


export default function Education() {
  const [items, setItems] = useState(initialItems);
  const [total, setTotal] = useState(0);
  
  function AddEduButton({ text = "Add", onClick }) {
    return (
      <button onClick={onClick}>
        { text }
      </button>
    );
  }

  function handleAddItem(name, title, dateFrom, dateTo) {
    setTotal(total + 1)
    setItems([
      ...items, 
      {
        id: nextId++,
        name: name,
        title: title,
        dateFrom: dateFrom,
        dateTo: dateTo
      }
    ]);
  }

  
  return (
    <div>
      <h3>Educational Experience</h3>
      <div className="container">
        <div>
          <label htmlFor="schoolName">School name</label>
          <input type="text" placeholder="School name" />
        </div>
        
        <div>
          <label htmlFor="studyTitle">Title of study</label>
          <input type="text" placeholder="Title of study" />
        </div>

        <div>
          <label htmlFor="dateFrom">Date from:</label>
          <input type="date" />
        </div>

        <div>
          <label htmlFor="dateTo">Date to:</label>
          <input type="date" />
        </div>

        <AddEduButton 
          onClick={handleAddItem}/>
      </div>
      <EducationList items={items}/>
    </div>
  )
}
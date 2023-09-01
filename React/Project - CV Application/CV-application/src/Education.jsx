/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
import { useState } from "react";
import EducationList from './EducationList'
import AddItem from "./AddItem";

let nextId = 1;
const initialItems = [
  { id: 0, name: 'Handelshøyskolen BI', title: 'Bachelor ØkAd', dateFrom: '01.06.09', dateTo: '31.05.13' },
];


export default function Education() {
  const [items, setItems] = useState(initialItems);
  
   function handleAddItem(name, title, dateFrom, dateTo) {
    // console.log(nextId);
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
      <AddItem onAddItem={handleAddItem} />
      <EducationList items={items} />
    </div>
  )
}
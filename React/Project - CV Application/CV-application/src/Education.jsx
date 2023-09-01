/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
import { useState } from "react";
import EducationList from './EducationList'
import AddItem from "./AddItem";

let nextId = 1;
const initialItems = [
  { id: 0, name: 'Handelshøyskolen BI', title: 'Bachelor ØkAd', dateFrom: '2009-08-01', dateTo: '2013-05-31' },
];


export default function Education() {
  const [items, setItems] = useState(initialItems);
  
   function handleAddItem(name, title, dateFrom, dateTo) {
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
  
  function handleDeleteItem(itemID) {
    setItems(
      items.filter(item => item.id !== itemID)
    )
  }
  
  return (
    <div>
      <h3>Educational Experience</h3>
      <AddItem onAddItem={handleAddItem} />
      <EducationList 
        items={items} 
        onDeleteItem={handleDeleteItem}
      />
    </div>
  )
}
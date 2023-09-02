/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
import { useState } from "react";
import EducationList from './EducationList'
import AddEduItem from "./AddEduItem";

let nextId = 1;
const initialEduItems = [
  { id: 0, name: 'Handelshøyskolen BI', title: 'Bachelor ØkAd', dateFrom: '2009-08-01', dateTo: '2013-05-31' },
];


export default function Education() {
  const [eduItems, setEduItems] = useState(initialEduItems);
  
   function handleAddEduItem(name, title, dateFrom, dateTo) {
    setEduItems([
      ...eduItems,
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
    setEduItems(
      eduItems.filter(item => item.id !== itemID)
    )
  }
  
  return (
    <div>
      <h3>Educational Experience</h3>
      <AddEduItem onAddEduItem={handleAddEduItem} />
      <EducationList 
        items={eduItems} 
        onDeleteItem={handleDeleteItem}
      />
    </div>
  )
}
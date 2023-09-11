/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
import EduItem from "./EduItem"
import AddEduItem from "./AddEduItem";
import { useState } from "react";

let nextId = 2;
const initialEduItems = [
  { id: 0, name: 'Handelshøyskolen BI', title: 'Bachelor ØkAd', dateFrom: '2009-08-01', dateTo: '2013-05-31', edit: false },
  { id: 1, name: 'Handelshøyskolen NMBU', title: 'Master ØkAd', dateFrom: '2013-08-01', dateTo: '2015-05-31', edit: false },
];

export default function EducationList() {
  const [eduItems, setEduItems] = useState(initialEduItems);

  function handleItemEdit(id) {
    setEduItems(eduItems.map(item => {
      if (item.id === id) {
        return {
          ...item,
          edit: item.edit ? false : true,
        };
      } else {
        return item;
      }
    }));
  }

  function handleEditedItem(newName, newTitle, newDateFrom, newDateTo, id) {
    setEduItems(eduItems.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          name: newName,
          title: newTitle,
          dateFrom: newDateFrom,
          dateTo: newDateTo,
        }
      } else {
        return item;
      }
    }));
  }

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
    <>
      <AddEduItem onAddEduItem={handleAddEduItem} />
      <div className="ListContainer">
        <div><strong>School name</strong></div>
        <div><strong>Title of study</strong></div>
        <div><strong>Date from</strong></div>
        <div><strong>Date to</strong></div>
      </div>
      {eduItems.map((item) => (
        <li key={item.id} className="ListContainer">
          <>  
            <EduItem 
              name={item.name}
              title={item.title}
              dateFrom={item.dateFrom}
              dateTo={item.dateTo}
              id={item.id}
              edit={item.edit}
              onDeleteItem={handleDeleteItem}
              onEditItem={handleItemEdit}
              onEditingItem={handleEditedItem}
            />
          </>
        </li>
      ))}
    </>
  )
}
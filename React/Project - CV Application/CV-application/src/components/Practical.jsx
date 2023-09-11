import { useState } from "react";
import AddPracItem from './AddPracItem'
import PracticalList from "./PracticalList";

let nextId = 2;

const initialPracItems = [ 
  { id: 0, company: 'Norsk Filmforbund', position: 'Økonomiansvarlig', respons: 'Fikse økonomien', dateStart: '2016-03-01', dateEnd: '2018-07-31', edit: false },
  { id: 1, company: 'View Ledger AS', position: 'Økonomikonsulent', respons: 'Masse tekst som en test for å sjekke hvorvidt layouten klarer å takle mer enn en setning.', dateStart: '2016-08-01', dateEnd: '2020-12-31', edit: false }

]

export default function Practical(  ) {
  const [pracItems, setPracItems] = useState(initialPracItems);
  // const [editingItem, setEditingItem] = useState(initialPracItems);


  function handleAddPracItem(company, position, respons, dateStart, dateEnd) {
    setPracItems([
      ...pracItems,
      { 
        id: nextId++,
        company: company,
        position: position,
        respons: respons,
        dateStart: dateStart,
        dateEnd: dateEnd
      }
    ]);
  }

  function handleDeletePractice(itemID) {
    setPracItems(
      pracItems.filter(item => item.id !== itemID)
    );
  }

  function handleEditItem(id) {
    setPracItems(pracItems.map(item => {
      if (item.id === id) {
        return {
          ...item,
          edit: item.edit ? false : true
        };
      } else {
        return item;
      }
    }))
  }

  return (
    <>
      <AddPracItem onAddPracItem={handleAddPracItem} />
      <PracticalList 
        items={pracItems}
        onDeleteItem={handleDeletePractice}
        onEditItem={handleEditItem}
      />
    </>
  )
}
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
import { useState } from "react";

export default function EduItem({ name, title, dateFrom, dateTo, id, edit, onDeleteItem, onEditItem, onEditingItem }) {
  const [newName, setNewName] = useState(name);
  const [newTitle, setNewTitle] = useState(title);
  const [newDateFrom, setNewDateFrom] = useState(dateFrom);
  const [newDateTo, setnewDateTo] = useState(dateTo);
  
  return (
    <> 
    { edit ? (
      <>
          <div>
            <input 
              type="text" 
              placeholder="School name"
              value={newName}
              onChange={e => setNewName(e.target.value)} 
              />
          </div>
          
          <div>
            <input 
              type="text" 
              placeholder="Title of study"
              value={newTitle}
              onChange={e => setNewTitle(e.target.value)}          
            />
          </div>

          <div>
            <input 
              type="date" 
              value={newDateFrom}
              onChange={e => setNewDateFrom(e.target.value)}
            />
          </div>

          <div>
            <input 
              type="date" 
              value={newDateTo}
              onChange={e => setnewDateTo(e.target.value)}
            />
          </div>

          <button onClick={() => {
            onEditingItem(newName, newTitle, newDateFrom, newDateTo, id);
            onEditItem(id);
          }}>Update</button>
      </>
      
      ) : (
      <> 
        <div className="listItem">{newName}</div>
        <div className="listItem">{newTitle}</div>
        <div className="listItem">{newDateFrom}</div>
        <div className="listItem">{newDateTo}</div>
        <button onClick={() => onDeleteItem(id)}>
          Delete
        </button>
        <button onClick={() => onEditItem(id)}>
          Edit
        </button>
      </>
        )
      }      
      </>
  )
}
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
import { useState } from "react"

export default function EducationList({ company, position, respons, dateStart, dateEnd, id, edit, onDeleteItem, onEditItem }) {
  const [newCompany, setNewCompany] = useState(company);
  const [newPosition, setNewPosition] = useState(position);
  const [newRespons, setNewRespons] = useState(respons);
  const [newDateStart, setNewDateStart] = useState(dateStart);
  const [newDateEnd, setNewDateEnd] = useState(dateEnd);

  return (
    <>
      <strong>Company name</strong>
      <strong>Position title</strong>
      <strong>Start date</strong>
      <strong>End date</strong>
      <div></div>
      <div></div>
      {edit ? (
        <>
          <input 
            className="listItem"
            value={newCompany}
            onChange={e => setNewCompany(e.target.value)}
          />
          <input 
            className="listItem"
            value={newPosition}
            onChange={e => setNewPosition(e.target.value)}
          />
          <input 
            className="listItem"
            value={newRespons}
            onChange={e => setNewRespons(e.target.value)}
          />
          <input 
            className="listItem"
            value={newDateStart}
            onChange={e => setNewDateStart(e.target.value)}
          />
          <input 
            className="listItem"
            value={newDateEnd}
            onChange={e => setNewDateEnd(e.target.value)}
          />
          <button onClick={() => onEditItem(id)}>
            Update
          </button>
        </>
        ) : (
        <>
          <div className="listItem">{newCompany}</div>
          <div className="listItem">{position}</div>
          <div className="listItem">{dateStart}</div>
          <div className="listItem">{dateEnd}</div>
          <button onClick={() => onDeleteItem(id)}>
            Delete
          </button>
          <button onClick={() => onEditItem(id)}>
            Edit
          </button>
          <strong>Responsibilities</strong>
          <div className="listResponsItem">{respons}</div>
        </>
      )}
    </>
  )
}
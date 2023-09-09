/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
import EduItem from "./EduItem"

export default function EducationList({ items, onDeleteItem, onEditItem, editEdu }) {
  return (
    <>
      <div className="ListContainer">
        <div><strong>School name</strong></div>
        <div><strong>Title of study</strong></div>
        <div><strong>Date from</strong></div>
        <div><strong>Date to</strong></div>
      </div>
      {items.map((item) => (
        <li key={item.id} className="ListContainer">
          { editEdu ? (
            <>
              <div>Loading</div>
            </>
          ) : (
            <>
              <EduItem 
                name={item.name}
                title={item.title}
                dateFrom={item.dateFrom}
                dateTo={item.dateTo}
              />
            </>
          )
        }
        <button onClick={() => onDeleteItem(item.id)}>
          Delete
        </button>
        <button onClick={() => onEditItem(item.id, item.name, item.title, item.dateFrom, item.dateTo)}>
          { editEdu ? 'Save' : 'Edit' }
        </button>
        </li>
      ))}
    </>
  )
}
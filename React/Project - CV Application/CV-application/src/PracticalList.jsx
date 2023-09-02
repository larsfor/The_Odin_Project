/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
export default function EducationList({ items, onDeleteItem }) {
  return (
    <>
      {items.map((item) => (
        <li key={item.id} className="ListContainer">
          <strong>Company name</strong>
          <strong>Position title</strong>
          <strong>Start date</strong>
          <strong>End date</strong>
          <div></div>
          <div></div>
          <div className="listItem">{item.company}</div>
          <div className="listItem">{item.position}</div>
          <div className="listItem">{item.dateStart}</div>
          <div className="listItem">{item.dateEnd}</div>
          <button onClick={() => onDeleteItem(item.id)}>
            Delete
          </button>
          <button>
            Edit
          </button>
          <strong>Responsibilities</strong>
            <div className="listResponsItem">{item.respons}</div>
        </li>
      ))}
    </>
  )
}
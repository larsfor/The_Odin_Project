/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
export default function EducationList({ items, onDeleteItem }) {
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
          <div className="listItem">{item.name}</div>
          <div className="listItem">{item.title}</div>
          <div className="listItem">{item.dateFrom}</div>
          <div className="listItem">{item.dateTo}</div>
          <button onClick={() => onDeleteItem(item.id)}>
            Delete
          </button>
          <button>
            Edit
          </button>
        </li>
      ))}
    </>
  )
}
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
export default function EducationList({ items }) {
  return (
    <>
      <div className="educationalListContainer">
        <div><strong>School name</strong></div>
        <div><strong>Title of study</strong></div>
        <div><strong>Date from</strong></div>
        <div><strong>Date to</strong></div>
      </div>
        {items.map((item) => (
          <li key={item.id} className="educationalListContainer">
            <div>{item.name}</div>
            <div>{item.title}</div>
            <div>{item.dateTo}</div>
            <div>{item.dateFrom}</div>
          </li>
        ))}
    </>
  )
}
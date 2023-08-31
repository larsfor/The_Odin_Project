/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
export default function EducationList({ items }) {
  return (
      <ul >
        {items.map((item) => (
          <li key={item.id} className="educationalListContainer">
            <div>{item.name}</div>
            <div>{item.title}</div>
            <div>{item.dateTo}</div>
            <div>{item.dateFrom}</div>
          </li>
        ))}
      </ul>
  )
}
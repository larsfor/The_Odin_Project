export default function EduItem(item) {

  return (
    <>
      <div className="listItem">{item.name}</div>
      <div className="listItem">{item.title}</div>
      <div className="listItem">{item.dateFrom}</div>
      <div className="listItem">{item.dateTo}</div>
    </>
  )
}
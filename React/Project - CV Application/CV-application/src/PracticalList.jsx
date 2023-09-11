/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
import PracItem from './PracItem';

export default function EducationList({ items, onDeleteItem, onEditItem }) {
  return (
    <>
      {items.map(item => (
        <li key={item.id} className="ListContainer">
          <PracItem 
            company={item.company}         
            position={item.position}
            respons={item.respons}         
            dateStart={item.dateStart}         
            dateEnd={item.dateEnd}
            id={item.id}
            edit={item.edit}
            onDeleteItem={onDeleteItem}
            onEditItem={onEditItem}
          />
        </li>
      ))}
    </>
  )
}
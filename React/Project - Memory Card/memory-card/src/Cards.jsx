/* eslint-disable react/prop-types */
export default function Cards({ id, url, onClick }) {
  return (
    <img 
      src={url} 
      className='grid-item' 
      onClick={ () => onClick(id) } 
    />
  )
}

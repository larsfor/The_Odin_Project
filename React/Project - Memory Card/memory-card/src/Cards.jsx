/* eslint-disable react/prop-types */
export default function Cards({ id, url, onClick }) {

  // console.log(url);

  return (
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" className='grid-item' onClick={ () => onClick(id) } />
  )
}

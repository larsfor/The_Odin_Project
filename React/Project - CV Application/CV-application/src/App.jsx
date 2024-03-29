import General from './components/General.jsx'
import Education from './components/Education.jsx'
import Practical from './components/Practical.jsx'
import './App.css'

export default function App() {

  return (
    <form onSubmit={e => e.preventDefault()}>
      <h1>Curriculum Vitae</h1>
      <General />
      <hr />
      
      <Education />
      <hr />
      
      <Practical />
      <hr />
    </form>
  )
}
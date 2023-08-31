import General from './General.jsx'
import Education from './Education.jsx'
import './App.css'

export default function App() {

  return (
    <form onSubmit={e => e.preventDefault()}>
      <h1>Curriculum Vitae</h1>
      <General />
      <hr />
      
      <Education />
      <hr />
      
      <General />
      <hr />

      <button>Submit CV</button>
    </form>
  )
}
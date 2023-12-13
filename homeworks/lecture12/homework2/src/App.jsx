import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
    <div className="container-new">
      <div>
          <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <div className= "header-container">
        <header>
          <h1>
            This is Header
          </h1>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        </header>
      </div>

      <div className="container-ul">
          <ul>
            <li>Tab1</li>
            <li>Tab2</li>
            <li>Tab3</li>
            <li>Tab4</li>
          </ul>
          <ul>
            <li>Tab1</li>
            <li>Tab2</li>
            <li>Tab3</li>
            <li>Tab4</li>
          </ul>
          <ul>
            <li>Tab1</li>
            <li>Tab2</li>
            <li>Tab3</li>
            <li>Tab4</li>
          </ul>
      </div>

      <div className='container'>
        <aside id="sidebar" >
          Aside
        </aside>
        <section id="content" >
          Section
        </section>
      </div>

      <div>
        <footer>
          This is footer
        </footer>
    </div>
    </div>
      
    </>
  )
}

export default App

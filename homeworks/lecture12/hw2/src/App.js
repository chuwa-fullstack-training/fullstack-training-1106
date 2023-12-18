import './App.css';

function App() {
   return (
      <div className="App">
         <header className="App-header">
            <p className="text">Header</p>
         </header>
         <navigator className="App-nav">
            <p className="text">Nav</p>
         </navigator>
         <div className="App-middle-section">
            <div className="App-aside">
               <p className="text">Aside</p>
            </div>
            <div className="App-section">
               <p className="text">Section</p>
            </div>
         </div>
         <footer className="App-footer">
            <p className="text">Footer</p>
         </footer>
      </div>
   );
}

export default App;

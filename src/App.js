import React from 'react';
import TodosApp from "./components/TodosApp"

function App() {
  return (
    <div className="App">
      <header className="container my-4">
      <h1 className="text-center">ToDos App</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <TodosApp />
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import Header from './components/header';
import './styles/globals.css';

function App() {
  return (
    <div className="">
      <Header />
      <main className="bg-black">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="">
      </footer>       
    </div>
  );
}

export default App;

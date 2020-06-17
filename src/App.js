import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div style={{width: 400, textAlign: 'right'}}>
                    <div>
                        id: <input/>
                    </div>
                    <div>
                        password: <input type={"password"}/>
                    </div>
                    <div></div>
                    <button>등록</button>
                </div>
            </header>
        </div>
    );
}

export default App;

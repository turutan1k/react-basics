import logo from './logo.svg';
import './App.css';

import CComponent from './CComponent';
import { Menu } from './Menu';
import FComponent from './FComponent';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                {/* <FComponent name="Ivam" /> */}
                <CComponent numbers={[1, 2, 3, 4, 5]} name="Alex" />
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        </div>
    );
}

export default App;

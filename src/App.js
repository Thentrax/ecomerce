import './index.css'
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import CurrentPage from "./pages";

function App() {
    return (

        <div className="App">
            <Navbar/>
            <CurrentPage/>
            <Footer/>
        </div>

    );
}

export default App;

import './index.css'
import Navbar from "./components/navbar";
import CurrentPage from "./pages";
import Footer from "./components/footer";

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

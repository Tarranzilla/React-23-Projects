import Navbar from "./components/01_Navbar";
import SearchBar from "./components/02B_Search_Bar";
import Loading from "./components/02C_Loading";
import Menu from "./components/02_Menu";
import ContentViewer from "./components/03_Content_Viewer";
import Footer from "./components/04_Footer";
import Shopping_Cart from "./components/08_Shopping_Cart";

function App() {
    return (
        <>
            <Navbar />
            <Menu />
            <SearchBar />
            <Shopping_Cart />
            <Loading />
            <ContentViewer />
            <Footer />
        </>
    );
}

export default App;

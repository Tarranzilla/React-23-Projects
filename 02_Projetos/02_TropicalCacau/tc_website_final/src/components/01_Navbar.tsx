export default function Navbar() {
    const toggleColorMode = () => {
        const body = document.body;
        const toggleIcon = document.querySelector(".Navbar_Tools_ToggleMode");
        if (body) {
            body.classList.toggle("darkmode");
            toggleIcon?.classList.toggle("active");
        }
    };

    const toggleMenuButton = () => {
        const menuButton = document.querySelector(".Navbar_Menu_Button");
        if (menuButton) {
            menuButton.classList.toggle("active");
        }
    };

    return (
        <div className="Navbar">
            <div className="Navbar_Logo_Container">
                <div className="Navbar_Logo"></div>
                <h1 className="Navbar_LogoType">Tropical Cacau</h1>
            </div>

            <div className="Navbar_Main">
                <a href="#LP_Section_01_Inicio" className="Navbar_Main_Links">
                    Início
                </a>
                <a href="#LP_Section_02_Sobre" className="Navbar_Main_Links">
                    Sobre
                </a>
                <a href="#LP_Section_03_Produtos" className="Navbar_Main_Links">
                    Produtos
                </a>
                <a href="#LP_Section_04_Contato" className="Navbar_Main_Links">
                    Contato
                </a>
            </div>
            <div className="Navbar_Tools">
                <a href="#" className="Navbar_Tool Navbar_Tools_Search">
                    <span className="material-icons">search</span>
                </a>
                <a href="#" className="Navbar_Tool Navbar_Tools_Cart">
                    <span className="material-icons">shopping_cart</span>
                </a>
                <a href="#" className="Navbar_Tool Navbar_Tools_ToggleMode" onClick={toggleColorMode}>
                    <span className="material-icons">brightness_4</span>
                </a>
            </div>
            <a href="#" className="Navbar_Menu_Button" onClick={toggleMenuButton}>
                <div className="Menu_Button_Line Line_1"></div>
                <div className="Menu_Button_Line Line_2"></div>
                <div className="Menu_Button_Line Line_3"></div>
            </a>
        </div>
    );
}

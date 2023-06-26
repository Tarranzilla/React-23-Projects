export default function Navbar() {
    return (
        <div className="Navbar">
            <div className="Navbar_Logo_Container">
                <div className="Navbar_Logo"></div>
                <h1 className="Navbar_LogoType">Tropical Cacau</h1>
            </div>

            <div className="Navbar_Main">
                <a href="#Section_01_Inicio">Início</a>
                <a href="#Section_02_Sobre">Sobre</a>
                <a href="#Section_03_Produtos">Produtos</a>
                <a href="#Section_03_Contato">Contato</a>
            </div>
            <div className="Navbar_Menu">
                <div className="Menu_Line Line_1"></div>
                <div className="Menu_Line Line_2"></div>
                <div className="Menu_Line Line_3"></div>
            </div>
        </div>
    );
}

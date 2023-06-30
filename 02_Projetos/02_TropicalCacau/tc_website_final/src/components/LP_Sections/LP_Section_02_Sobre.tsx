// Vanilla React Imports
import { forwardRef } from "react";

import backgroundImg from "../../assets/cacau_textures/dalle3.png";

const LP_Section_02_Sobre = forwardRef(function LP_Section_02_Sobre(props, ref: any) {
    return (
        <div className="LP_Section LP_Section_02_Sobre" id="LP_Section_2" ref={ref} key={"LP_Section_2"}>
            <img src={backgroundImg} alt="background" className="Section_02_Background" />
            <div className="Tropical_Description">
                <p>
                    A Tropical Cacau é uma chocolateria Brasileira criada pela confeiteira e nutricionista{" "}
                    <a className="Link_Leticia" href="#Leticia_Guedes">
                        Letícia Guedes
                    </a>
                    .
                </p>
                <p>
                    Inspiradas na tropicalidade que a nossa cultura tem a oferecer, confecionamos sabores e experiências de forma consciente por meio
                    do uso de ingredientes sustentáveis, orgânicos e saborosos.
                </p>
            </div>
            <div className="Kakaw_Description">
                <p className="Kakaw_Header">
                    <strong>O Cacau, chamado originalmente de Kakawa, é uma das culturas mais importantes e populares no mundo</strong>, tendo uma
                    história antiga e fascinante que inclui lendas e mitos. Eis algumas das histórias e lendas sobre o cacau na América do Norte,
                    Central e do Sul ...
                </p>
                <p>
                    América do Norte: Segundo a mitologia maia, Coração do Céu, a principal divindade, criou os seres humanos utilizando vários
                    materiais da natureza, incluindo o cacau, como um dos ingredientes essenciais.
                </p>
                <p>
                    América Central: De acordo com a lenda asteca, Quetzalcoatl, a serpente emplumada, foi a primeira a trazer as sementes de cacau
                    para a Terra do Jardim do Éden. Quetzalcoatl ensinou os humanos a arte da agricultura, medicina e cultivo do cacau. Esta divindade
                    não gostava de rituais de sacrifício humano e era amada pelas pessoas.
                </p>
                <p>
                    América do Sul (Peru): O deus das tempestades, Khuno, destruiu uma aldeia com chuva torrencial e granizo porque seus habitantes
                    derrubaram as árvores e atearam fogo na floresta para clarear a terra e cultivar alimentos. Quando a tempestade acabou, os
                    sobreviventes encontraram uma árvore de cacau, que se tornou um alimento essencial para eles e os ajudou a viver em harmonia com a
                    natureza.
                </p>
                <p>
                    América do Sul: Uma lenda dos Andes fala sobre um deus onipotente chamado Sibu que transferiu seus poderes para outro deus, Sura,
                    mas suas sementes foram comidas por uma terceira divindade, Jabaru. Jabaru foi morto por Sura, que enterrou seu corpo no local
                    onde estavam as sementes. Quando Sura voltou, encontrou um cacaueiro e um pé de cabaça crescendo no local. Sibu ordenou que Jabaru
                    preparasse uma bebida com as sementes do cacau, mas a bebida fez a barriga de Jabaru inchar e explodir, deixando cair as sementes
                    no chão. Sibu restaurou a vida de Sura e devolveu as sementes, permitindo que humanos e animais nascessem e crescessem.
                </p>
                <p>
                    A história do cacau na América do Sul ainda inclui outros mitos e lendas, como a história de como os deuses teriam dado o cacau
                    como presente para os humanos, para que eles pudessem ter acesso à imortalidade. De acordo com essa história, o deus Viracocha
                    teria criado a primeira árvore de cacau e dado seus frutos aos homens, que aprenderam a prepará-los como bebida. Ao consumir essa
                    bebida, os humanos teriam adquirido poderes divinos e se tornado imortais.
                </p>
                <p>
                    Ao longo dos séculos, o cacau se tornou um ingrediente essencial na culinária e cultura de muitos países da América Latina. Os
                    Astecas e Maias usavam o cacau para fazer uma bebida quente e espumosa, chamada de "xocoatl", que era misturada com especiarias e
                    mel. Essa bebida era considerada sagrada e utilizada em rituais religiosos, e também era consumida como um tônico energético.
                </p>
                <p>
                    Com a chegada dos europeus na América, o cacau foi introduzido na Europa e se tornou um produto de luxo e prestígio. Os europeus
                    descobriram que misturando açúcar com cacau, era possível fazer uma bebida ainda mais saborosa, e assim nasceu o chocolate. A
                    partir do século XVIII, o cultivo do cacau se espalhou por outras partes do mundo, como a África e a Ásia, e o chocolate se tornou
                    um produto popular e consumido em todo o mundo.
                </p>
                <p>
                    Hoje em dia, o cacau é um dos principais produtos agrícolas do mundo, e é cultivado em países como Gana, Costa do Marfim,
                    Indonésia e Brasil. O chocolate é um produto amplamente consumido em todo o mundo, em diferentes formas e variedades, e continua a
                    ser um símbolo de luxo, prazer e indulgência. A história do cacau é rica em mitos e lendas, e é uma prova da importância que essa
                    planta teve e ainda tem na cultura e na gastronomia de muitos países ao redor do mundo.
                </p>
            </div>
        </div>
    );
});

export default LP_Section_02_Sobre;

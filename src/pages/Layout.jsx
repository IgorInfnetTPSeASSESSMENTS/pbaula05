import { Outlet, Link } from "react-router-dom";
import BarraLogin from "../componentes/BarraLogin";
import { useState } from "react";

export default function Layout() {

    const [usuario, setUsuario] = useState("") //valor inicial = ""

    return (
        <div style={{ position: 'absolute', left: '10px', top: '10px' }}>
            <BarraLogin usuario={usuario} setUsuario={setUsuario}></BarraLogin>
            {usuario &&
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to={"/"}>Início</Link>
                            </li>
                            <li>
                                <Link to={"/fornecedores"}>Fornecedores</Link>
                            </li>
                            <li>
                                <Link to={"/contatos"}>Contatos</Link>
                            </li>
                            <li>
                                <Link to={"/produtos"}>Produtos</Link>
                            </li>
                            <li>
                                <Link to={"/cotacoes"}>Cotações</Link>
                            </li>
                        </ul>
                    </nav>
                    <Outlet/>
                </div> //renderização condicional
            }
        </div>
    )
};

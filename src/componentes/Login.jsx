import { logarUsuario } from "../infra/usuarios";

export default function Login({usuario, setUsuario}) {
    
    async function handleClick(event) {
        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;
        
        let usuario = await logarUsuario(email, senha);

        if(usuario.id) {
            setUsuario(usuario);
        } else {
            alert(usuario.erro)
        }
    }

    return (
        <div className="container">
            <form>
                <h3>Login: </h3>
                <label htmlFor="usuario">Email: </label>
                <br></br>
                <input type="text" id="email"/>
                <br></br>
                <label htmlFor="senha">Senha: </label>
                <br></br>
                <input type="text" id="senha"/>
                <br></br>
                <br></br>
                <input type="button" value="Login" onClick={handleClick} />
            </form>
        </div>
    );
}
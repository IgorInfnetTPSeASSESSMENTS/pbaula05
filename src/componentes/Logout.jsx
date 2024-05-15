import { deslogarUsuario } from "../infra/usuarios";

export default function Logout({usuario, setUsuario}) {
    
    async function handleClick(event) {
        let retorno = await deslogarUsuario();
        setUsuario(retorno);
    }
    
    return(
        <form action="">
            <p style={{padding: 0, margin: 0}}>Login: <b>{usuario.email}</b>
            
            <input type="submit" value="Logout" onClick={handleClick}></input>
            </p>
        </form>
    )
}
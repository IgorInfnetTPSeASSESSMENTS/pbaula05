import Login from "./Login";
import Logout from "./Logout"

export default function BarraLogin({usuario, setUsuario}) {
        if(usuario) {
            return <Logout usuario={usuario} setUsuario={setUsuario}></Logout>
        } else {
            return <Login usuario={usuario} setUsuario={setUsuario}></Login>
        }
  
}
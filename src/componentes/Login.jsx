export default function Login({usuario, setUsuario}) {
    
    function handleClick(event) {
        setUsuario("igorantonio052000@gmail.com");
    }

    return (
        <div className="container">
            <form>
                <h3>Login: </h3>
                <label htmlFor="usuario">Email: </label>
                <br></br>
                <input type="text" name="email"/>
                <br></br>
                <label htmlFor="senha">Senha: </label>
                <br></br>
                <input type="text" name="senha"/>
                <br></br>
                <br></br>
                <input type="button" value="Login" onClick={handleClick} />
            </form>
        </div>
    );
}
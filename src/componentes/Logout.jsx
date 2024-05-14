export default function Logout({usuario, setUsuario}) {
    
    function handleClick(event) {
        setUsuario("");
    }
    
    return(
        <form action="">
            <p style={{padding: 0, margin: 0}}>Login: <b>{usuario}</b>
            
            <input type="submit" value="Logout" onClick={handleClick}></input>
            </p>
        </form>
    )
}
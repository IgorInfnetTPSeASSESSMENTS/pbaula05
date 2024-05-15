import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../infra/firebase'


export async function logarUsuario(email, senha) {
    let retorno = new Object();

    console.log(`email: ${email} - senha: ${senha}`);

    await signInWithEmailAndPassword(auth, email, senha)
    .then((userCredencial) => {
        console.log(userCredencial);
        retorno.id = userCredencial.user.id;
        retorno.email = email;
        retorno.senha = senha;
    })
    .catch((error) => {
        console.log(`${error.code} = ${error.message}`);
        retorno.erro = "Login Inválido";
    })
    return retorno;
}
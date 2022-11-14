import React from 'react'
import Fireapp from '../firebase/credenciales'
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
const auth = getAuth(Fireapp);

const Login = () => {
    function submitHandler(e) {
        e.preventDefault();
        const email = e.target.elements.email.value;
        const password = e.target.elements.pass.value;
        signInWithEmailAndPassword(auth,email,password);
        
    }

    return (
        <>
            <div>
                <div className=' m-0 row justify-content-center aling-items-center'>
                    <div className="col-auto p-5">
                        <form className="border p-3 form" onSubmit={submitHandler} >
                            <div className="form-group">
                                <label>Correo:</label>
                                <input className="form-control" id='email' type="text" name="usuario" placeholder="Ingrese email"></input>
                            </div>
                            <div className="form-group">
                                <label>Contraseña:</label>
                                <input className="form-control" id='pass' type="password" name="contraseña" placeholder="Ingrese Contraseña"></input>
                            </div>
                            <div className='pt-2 text-center'>
                                <input className="btn btn-dark btn-sm mx-1" id='init-sec' type="submit" name="ingresar" value="Ingresar"></input>
                                <p><a href="#">¿Olvidase tu Contraseña?</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
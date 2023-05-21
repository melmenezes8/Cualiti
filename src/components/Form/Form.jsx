import React, { useState } from "react";

const Form = () => {

const [userData, setUserData] = useState({
    nombre:"",
    email:"",
    phone:"",
});

const handleChange = (e) => {
    setUserData ({...userData, [e.target.value]: e.target.value})
}

const envioDeFormulario = (evento) =>{
    evento.preventDefault()
    console.log(userData)
    
}
  return (
    <div>
      <h1> Formulario </h1>

      <form onSubmit={envioDeFormulario}>

        <input 
        type="text"
         placeholder="ingresar nombre" 
         name="nombre"
         value={userData.nombre}
        onChange={handleChange}
        />

        <input 
        type="text" 
        placeholder="email" 
        name="email"
        value={userData.apellido}
        onChange={handleChange}
        /> 

        <input 
        type="text" 
        placeholder="phone" 
        name="phone"
        value={userData.mail}
        onChange={handleChange}
        />

     <button type="submit"> Enviar </button>
     <button type="button"> Cancelar </button>
      </form>
    </div>
  );
};

export default Form;

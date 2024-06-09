import React, { useState } from 'react'

export const Contacto = () => {

  const [datos, setDatos] = useState({
    nombre: '',
    apellidos: '',
    telefono: '',
    url: '',
    email: '',
    contraseña: '',
    repetirContraseña: ''
  });

  const Cambio = (e) => {
    const { name, value } = e.target;
    setDatos({
      ...datos,
      [name]: value
    });
  };

  const envioFormulario = (e) => {
    e.preventDefault();
    const nombre = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/;
    const apellidos = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/;
    const telefono = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    const url= /^(ftp|http|https):\/\/[^ "]+$/;
    const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const contraseña = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    if (!nombre.test(datos.nombre)) {
      alert('Por favor, introduce un nombre válido.');
      return;
    }

    if (!apellidos.test(datos.apellidos)) {
      alert('Por favor, introduce apellidos válidos.');
      return;
    }

    if (!telefono.test(datos.telefono)) {
      alert('Por favor, introduce un número de teléfono válido (ej. 123-456-7890).');
      return;
    }

    if (!url.test(datos.url)) {
      alert('Por favor, introduce una URL válida.');
      return;
    }

    if (!email.test(datos.email)) {
      alert('Por favor, introduce un email válido.');
      return;
    }

    if (!contraseña.test(datos.contraseña)) {
      alert('La contraseña debe tener entre 6 y 20 caracteres, al menos un dígito, una letra mayúscula y una minúscula.');
      return;
    }

    if (datos.contraseña !== datos.repetirContraseña) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    alert('Formulario enviado');
  };

  return (
    <div className='formulario'>
      <h1>Contacto</h1>
      <form className='contact' onSubmit={envioFormulario}>
        <input type='text' name='nombre' value={datos.nombre} onChange={Cambio} placeholder='Nombre' required />
        <input type='text' name='apellidos' value={datos.apellidos} onChange={Cambio} placeholder='Apellidos' required />
        <input type='tel' name='telefono' value={datos.telefono} onChange={Cambio} placeholder='Telefono' required />
        <input type='URL' name='url' value={datos.url} onChange={Cambio} placeholder='URL' required />
        <input type='text' name='email' value={datos.email} onChange={Cambio} placeholder='Email' required />
        <input type='password' name='contraseña' value={datos.contraseña} onChange={Cambio} placeholder='Contraseña' required />
        <input type='password' name='repetirContraseña' value={datos.repetirContraseña} onChange={Cambio} placeholder='Repetir Contraseña' required />
        <input type='submit' value='Enviar' />
      </form>
    </div>
  );

}

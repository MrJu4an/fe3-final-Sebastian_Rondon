import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [customer, setCustomer] = useState({
    name: "",
    email: ""
  })
  
  const [error, setError] = useState(false)
  const [message, setMessage] = useState(false)

  const handleChangeName = (e) => {
    setCustomer({ ...customer, name: e.target.value })
  }

  const handleChangeEmail = (e) => {
    setCustomer({ ...customer, email: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    //Validaciones
    if (customer.name.trim().length > 3 && customer.name.trim().length < 25 && regexEmail.test(customer.email)) {
      setError(false)
      setMessage(true)
    } else {
      setError(true)
      setMessage(false)
    }
  }

  return (
    <div>
    {
      message ? (
        <h2>Gracias {customer.name}, nos estaremos contactando contigo por vía email</h2>
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Nombre: </label>
              <input type="text" value={customer.name} onChange={handleChangeName} />
            </div>
            <div>
              <label>Email: </label>
              <input type="email" value={customer.email} onChange={handleChangeEmail} />
            </div>
            <button>Enviar</button>
            {error && (
              <h4>Por favor verifique su información</h4>
            )}
          </form>
        </>
      )
    }
    </div>
  );
};

export default Form;

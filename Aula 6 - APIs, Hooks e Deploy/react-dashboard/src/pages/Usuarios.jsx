import { useEffect, useState } from "react";

export default function Usuarios() {

  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {


    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsuarios(data))
      .catch((error) => console.log(error))
      .finally(console.log("Carregamento completo"));
  }, []);

  return (
    <div className="p-6 flex-1 bg-gray-100">
      <h1 className="text-2xl font-bold">Usuários</h1>
      {usuarios.map(usuario => (
        <div key={usuario.id}>
        <br></br>
        <p>{usuario.name}</p>
        <p>{usuario.username}</p>
        <p>{usuario.email}</p>
        <p>{usuario.address.city}</p>
        </div>
      ))}
    </div>
  );
}

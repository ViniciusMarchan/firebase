import { useState } from 'react';
import { db } from "./FirebaseConnection";
import { doc, setDoc, addDoc, collection, getDoc, snapshotEqual } from "firebase/firestore";

import "./app.css";

function App() {
  const [titulo, setTitulo] = useState('');
  const [Autor, setAutor] = useState('');

 async function handleAdd() {
  /*
    await setDoc(doc(db, "posts", "12345"), {
      titulo: titulo,
      Autor: Autor,
    })
    .then(() => {
      console.log("DADOS REGISTRADOS")
    })
    .catch((error) => {
      console.log("GEROU ERRO" +  error)
    })
    */

    await addDoc(collection(db, "posts"), {
      titulo: titulo,
      Autor: Autor,
    })
    .then(() => {
      console.log("Cadastrado com Sucesso!!!");
      setAutor("");
      setTitulo("");
    })
    .catch((error) => {
      console.log("Erro encontrado!" + error);
    })

  };

  async function Search() {
    const postRef = doc(db, "posts", "1234");

    await getDoc(postRef)
    .then((snapshot) => {
      setAutor(snapshot.data().autor)
      setTitulo(snapshot.data().titulo)
    })
    .catch((error) => {
      console.log(error)
    })
  };

  return (
    <div>
    
      <h1>ReactJs + Firebase</h1>
    <div className='container'>
      <label>Nome:</label>
      <textarea 
      type="text"
      placeholder='Digite o titulo'
      value={titulo}
      onChange={ (e) => setTitulo(e.target.value) }
      />

      <label> Autor: </label>
      <input 
      type='text' 
      placeholder='Autor do livro'
      value={Autor}
      onChange={(e) => setAutor(e.target.value)}
      />

      <button onClick={handleAdd}>Salvar</button>
      <button onClick={Search}>Buscar</button>
      </div>
    </div>
  );
}

export default App;

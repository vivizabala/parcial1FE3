import {Form} from './Comps/Form'
import {Card} from './Comps/Card'
import { useState } from "react";

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs
  const [animalName, setAnimalName] = useState("");
  const [animalDescriptor, setAnimalDescriptor] = useState("");
    const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if(animalName === ""){
      setError("No llenaste el animal");
      setSubmitted(true);
      console.log("Error", "No llenaste el animal");
      return
    }

    if(animalDescriptor === ""){
      setError("No llenaste el descriptor");
      setSubmitted(true);
      console.log("Error", "No llenaste el descriptor");
      return
    }

    if(animalName.length<3){
      setError("Es un nombre muy corto");
      setSubmitted(true);
      console.log("Error", "Debe tener más 3 o más carácteres");
      return
    }

    if(animalName.startsWith(" ")){
      setError("No puedes comenzar con espacios en blanco");
      setSubmitted(true);
      console.log("Error", "No puedes comenzar con espacios en blanco");
      return
    }

    if(animalDescriptor.length < 6){
      setError("Es demasiado corto, al menos 6 carácteres");
      setSubmitted(true);
      console.log("Error", "Descriptor demasiado corto");
      return
    }


    setError("");
    setSubmitted(true);
  }

  return (
    <div className="App">
      <Form 
        mainTitle="¿Cuál es tu animal favorito?"
        secondaryTitle="¿Qué palabra lo describe?"
        animalName = {animalName}
        setAnimalName = {setAnimalName}
        animalDescriptor = {animalDescriptor}
        setAnimalDescriptor = {setAnimalDescriptor}
        onSubmit = {onSubmit}
        />     
      {submitted && <Card error = {error}  animalName = {animalName} animalDescriptor = {animalDescriptor}/>}
    </div>
  );
}

export default App;

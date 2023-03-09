
function Card(props) {
  return (
    <div className="card-container">
      {props.error === "" && 
        <div className="message">
          <h2>Que bueno que te guste</h2>
          <h3>✅Tambien creo que un/a {props.animalName} es {props.animalDescriptor}</h3>
        </div>
      }
      {props.error != "" && 
        <div className="error">
          <h2> 🔴Por favor chequea que la información sea correcta🔴</h2>          
        </div>
      }      
    </div>
  );
}

export {Card};

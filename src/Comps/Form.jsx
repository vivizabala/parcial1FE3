import "./Form.module.css";

function Form(props){

    return(
        <>
        <h1>Seleccionemos un animal</h1>
        <form onSubmit={props.onSubmit}>
            {/* aqui deberias escribir tu codigo */}
            <label>{props.mainTitle}</label>
            <input 
            type="text"
            placeholder="Escribe algo como: Oso"
            value={props.animalName}
            onChange={((e)=>props.setAnimalName(e.target.value))}
            />
            <label>{props.secondaryTitle}</label>
            <input
            type="text"
            placeholder="Escribe algo como: Valiente"
            value={props.animalDescriptor}
            onChange={((e)=>props.setAnimalDescriptor(e.target.value))}
            />
            <button type="submit">Enviar</button>
        </form>
        </>
    );
}

export {Form};
const Eventos = () => {
    const handleMyEvent = (e) => {
        console.log(e)
        console.log("Clicou no botao")
    }

    const renderSomething = (x) => {
        if(x){
            return <h1>Renderizando se x True.</h1>
        } else{
            return <h1>Renderizando (Else) se X False.</h1>   
        }
    }

    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique Aqui</button>
            </div>
            <div>
                <button onClick={() =>{
                    if(true){
                        console.log("Implementacao no lugar incorreto")
                    }
                } }>Clique aqui tbm</button>
            </div>  
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    );
};

export default Eventos;
function mostrarNome(nome, sobrenome){
    return (
        <div>
            <h1>{nome}</h1>
            <p>{sobrenome}</p>
            <small>Seja bem vindo</small>
        </div>
    );
}
ReactDOM.render(
    mostrarNome('Jaja', 'rk'),
    document.querySelector("#app")
);
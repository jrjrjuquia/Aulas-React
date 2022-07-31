function Pessoa({nome, idade, profissão, foto}) {
    return (
        <div>
            <img src={foto}/>
            <h2>Nome: {nome}</h2>
            <h2>Idade: {idade}</h2>
            <h2>Profissão: {profissão}</h2>
        </div>
    )
}
export default Pessoa
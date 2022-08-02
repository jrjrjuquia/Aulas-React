import Item from "./Item"

function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={2022} />
                <Item marca="Ford" ano_lancamento={2021}/>
                <Item marca="Volkswagem"ano_lancamento={2020}/>
                <Item marca="Volkswagem"ano_lancamento={2020}/>
                <Item/>
            </ul>
        </>
    )
}
export default List
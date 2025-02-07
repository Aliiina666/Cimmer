import { Card } from "./Card"


function List(props) {

    const { list = [] } = props

    return <div className="list">
        {list.length ? (
            list.map((move) =>
                <Card {...move} />)
        ) : (
            <h1>НИЧЕГО НЕ НАЙДЕНО</h1>
        )}
    </div>

}

export { List }
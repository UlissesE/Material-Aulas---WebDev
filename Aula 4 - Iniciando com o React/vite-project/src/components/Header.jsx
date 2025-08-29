export default function Header(props) {
    return (
        <div style={{color: props.cor}}>
            <h1> {props.titulo} </h1>
            <p> {props.texto} </p>
        </div>
    )
}
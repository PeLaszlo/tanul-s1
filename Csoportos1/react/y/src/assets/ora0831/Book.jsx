export default function Book({ book }) {
    return (
        <div id={book.id}>
            <h1>{book.title}</h1>
            <h2>{book.price}</h2>
        </div>
    )
}
export default function Section({titulo, children}) {
    return (
        <section className="h-64">
            <h1>{titulo}</h1>
            <div className="grid grid-cols-3 mt-4 max-w-full h-1/2">
                {children}
            </div>
        </section>
    )
}
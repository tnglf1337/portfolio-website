export function CFStatBox({ titel, rating}) {
    return (
        <>
            <div className="lc-stat-box">
                <p className="default">{titel}</p>
                <p><span>{rating}</span></p>
            </div>
        </>
    )
}
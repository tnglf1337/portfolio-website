export function StatBox({ titel, current, total}) {

    function getCssClass(titel) {
        if (titel === 'Einfach') {
            return 'ez'
        } else if (titel === 'Medium') {
            return 'medium'
        } else if (titel === 'Hart') {
            return 'hard'
        }
    }

    return (
        <>
            <div className="lc-stat-box">
                <p className={getCssClass(titel)}>{titel}</p>
                <p><span>{current}</span>/<span>{total}</span></p>
            </div>
        </>
    )
}
export default function MenuButton({children, onSelect, isSelected}) {
    return (
        <li>
            <button className={isSelected ? 'selected pagination-btn shadow' : "pagination-btn shadow"} onClick={onSelect}>
                {children}
            </button>
        </li>
    );
}
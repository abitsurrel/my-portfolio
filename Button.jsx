function Button({btnClass, label, onClick}) {

    return <button className={btnClass} onClick={onClick}>{label}</button>;
}

export default Button;
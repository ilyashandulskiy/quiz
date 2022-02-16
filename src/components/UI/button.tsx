
interface Iprops {
    title: string,
    callback: () => void,
    type?: 'primary' | 'secondary',
    outline?: boolean,
    large?: boolean
}

const Button = ({ title, callback, type = 'primary', outline = false, large = false }: Iprops) => {
    
    let buttonClass = 'btn btn-';

    if (outline) buttonClass += 'outline-';

    buttonClass += type;

    if (large) buttonClass += ' btn-lg';

    return <button className={buttonClass} type="button" onClick={callback}>{ title }</button>

}

export default Button
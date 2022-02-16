
interface Iprops {
    placeholder?: string,
    callback: (value: string) => void,
    defaultValue?: string,
}

const Input = ({placeholder, callback, defaultValue} : Iprops) => {
    return <input type="text" className="form-control" placeholder={placeholder} defaultValue={defaultValue} onChange={(value : React.ChangeEvent<HTMLInputElement>) => callback(value.currentTarget.value)} />
}

export default Input
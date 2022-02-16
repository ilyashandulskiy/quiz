import { createID } from "../../libs/helpers"

interface Iprops {
    callback: (value: boolean) => void,
    title: string
}

const CheckBox = ({callback, title} : Iprops) => {
    //return <input type="checkbox" onChange={(value: React.ChangeEvent<HTMLInputElement>) => callback(value.currentTarget.checked)} />
    
    const myId = createID();

    return (
        <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id={myId} onChange={(value: React.ChangeEvent<HTMLInputElement>) => callback(value.currentTarget.checked)} />
            <label className="form-check-label" htmlFor={myId}>{title}</label>
        </div>
    )
}

export default CheckBox
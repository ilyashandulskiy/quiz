
interface Iprops {
    callback: () => void,
    title: string
}

const CreateQuestionButton = ({callback, title} : Iprops) => {

    return (<button onClick={callback}>Добавить {title}</button>)

}

export default CreateQuestionButton
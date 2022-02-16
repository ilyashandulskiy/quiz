
interface Iprops {
    title: string
}

const ScreenTitle = ({title} : Iprops) => {

    return (
        <h1 className="screen-title display-6">{title}</h1>
    )

}

export default ScreenTitle
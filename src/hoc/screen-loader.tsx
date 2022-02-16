import Spinner from '../components/UI/spinner'


interface Iprops {
    reqired: unknown,
    isError?: boolean,
    content: JSX.Element | null
}

const ScreenLoader = ({reqired, isError, content}: Iprops) => {

    if (isError) {
        return (<h2>ERROR</h2>)
    } else {
        if (reqired) {
            return (<div className='page'>{content}</div>)
        } else {
            return (<Spinner />)
        }
    }
}

export default ScreenLoader
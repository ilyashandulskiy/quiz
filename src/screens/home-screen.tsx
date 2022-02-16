import { useNavigate } from "react-router-dom"
import ScreenTitle from "../components/app/screen-title"
import QuizList from "../components/home/quiz-list"
import Button from "../components/UI/button"

const HomeScreen = () => {

    const navigate = useNavigate();

    return (
        <div className="screen home-screen">
            <ScreenTitle title="Тесты пользователей" />
            <div className="title-button">
                <Button large title="Создать свой тест" callback={() => navigate("create")} />
            </div>
            <QuizList />
        </div>
    )

}

export default HomeScreen
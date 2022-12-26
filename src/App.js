import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Routes, Route} from "react-router-dom"
import Home from "./components/pages/Home/Home";
import Recipes from "./components/pages/recipes/Recipes";
import Meat from "./components/pages/meat/Meat";
import About from "./components/pages/about/About";
import Sign from "./components/pages/sign/Sign";
import Support from "./components/pages/support/Support";
import Project from "./components/pages/project/project";
import DetailPage from "./components/Detail-Page/DetailPage";

function App() {

    const data = [
        {
            "name": "Запеченный лосось",
            "ingredients": [
                {"name": "Лосось", "amount": 1, "measurement": "кг"},
                {"name": "Кедровые орешки", "amount": 1, "measurement": "стакан"},
                {"name": "Butter Lettuce", "amount": 2, "measurement": "стакана"},
                {"name": "Кабачки", "amount": 1, "measurement": "шт"},
                {"name": "Оливковое масло", "amount": 0.5, "measurement": "стакан"},
                {"name": "Чеснок", "amount": 3, "measurement": "шт"}
            ],
            "steps": [
                "Разогрейте духовку до 350 градусов.",
                "Намажьте оливковым маслом стеклянную форму для запекания",
                "Добавьте в блюдо лосось, чеснок и кедровые орехи",
                "Выпекать 15 мин.",
                "Добавьте желтую тыкву и снова поставьте в духовку на 30 минут",
                "Достаньте из духовки и дайте остыть в течение 15 минут. Добавьте салат и подавайте на стол"
            ]
        },
        {
            "name": "Рыбный такос",
            "ingredients": [
                {"name": "Сиг", "amount": 1, "measurement": "кг"},
                {"name": "Сыр", "amount": 1, "measurement": "стакан"},
                {"name": "Салат Айсберг", "amount": 2, "measurement": "стакана"},
                {"name": "Томаты", "amount": 2, "measurement": "шт"},
                {"name": "Лепешки", "amount": 3, "measurement": "шт"}
            ], "steps": [
                "Готовить рыбу на гриле до горячего состояния",
                "Положите рыбу на 3 лепешки.",
                "Посыпьте их салатом, помидорами и сыром"
            ]
        }
    ]

    // props => properties
    const message = "Hello World !"
    // props - data that is transferred from is parent component to child component

    return (
        <div className="App">
            <Header/>

            <Routes>
                <Route path="/" element={<Home data={data}/>} />
                <Route path="/recipes" element={<Recipes/>} />
                <Route path="/meat" element={<Meat/>} />
                <Route path="/about" element={<About  text={"Hello Kurmanbek"}/>} />
                <Route path="/sign" element={<Sign/>} />
                <Route path="/support" element={<Support/>} />
                <Route path="/project" element={<Project/>} />
                <Route path="/support/:clothId" element={<DetailPage/>} />
            </Routes>

            <Footer/>
        </div>
    );
}

export default App;

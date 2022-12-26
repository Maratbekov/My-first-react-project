import React from 'react';

const Home = ({data}) => {
    // const data = [
    //     {
    //         "name": "Запеченный лосось",
    //         "ingredients": [
    //             {"name": "Лосось", "amount": 1, "measurement": "кг"},
    //             {"name": "Кедровые орешки", "amount": 1, "measurement": "стакан"},
    //             {"name": "Butter Lettuce", "amount": 2, "measurement": "стакана"},
    //             {"name": "Кабачки", "amount": 1, "measurement": "шт"},
    //             {"name": "Оливковое масло", "amount": 0.5, "measurement": "стакан"},
    //             {"name": "Чеснок", "amount": 3, "measurement": "шт"}
    //         ],
    //         "steps": [
    //             "Разогрейте духовку до 350 градусов.",
    //             "Намажьте оливковым маслом стеклянную форму для запекания",
    //             "Добавьте в блюдо лосось, чеснок и кедровые орехи",
    //             "Выпекать 15 мин.",
    //             "Добавьте желтую тыкву и снова поставьте в духовку на 30 минут",
    //             "Достаньте из духовки и дайте остыть в течение 15 минут. Добавьте салат и подавайте на стол"
    //         ]
    //     },
    //     {
    //         "name": "Рыбный такос",
    //         "ingredients": [
    //             {"name": "Сиг", "amount": 1, "measurement": "кг"},
    //             {"name": "Сыр", "amount": 1, "measurement": "стакан"},
    //             {"name": "Салат Айсберг", "amount": 2, "measurement": "стакана"},
    //             {"name": "Томаты", "amount": 2, "measurement": "шт"},
    //             {"name": "Лепешки", "amount": 3, "measurement": "шт"}
    //         ], "steps": [
    //             "Готовить рыбу на гриле до горячего состояния",
    //             "Положите рыбу на 3 лепешки.",
    //             "Посыпьте их салатом, помидорами и сыром"
    //         ]
    //     }
    // ]
    return (
        <div className="container">

            <h1>Вкусные рецепты </h1>

            {
                data.map(({name,ingredients,steps},idx) => (
                    <div key={idx}>
                        <h1>{name}</h1>

                        <ul>
                            {
                                ingredients.map((el,idx) => (
                                    <li key={idx}>{el.name}</li>
                                ))
                            }
                        </ul>

                        <h2>Инструкция по приготовлению</h2>
                        <ol>
                            {
                                steps.map((step,idx) => (
                                    <li key={idx}>{step}</li>
                                ))
                            }
                        </ol>

                    </div>
                ))
            }
        </div>
    );
};

export default Home;
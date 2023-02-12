import React from 'react';
import style from './Main.module.scss'
import {Button} from "../common/components/button/Button";


const Main = () => {
    return (
        <div className={style.mainBlock} id="main">
            {/*<Header/>*/}
            <div className={style.container}>
                <div className={style.greetingText}>
                    <h1>Подбор автозапчастей</h1>
                    <h2>
                        Подберем оригинальные запчасти и аналоги по электронным каталогам производителей
                    </h2>
                    <Button  link={"#contacts"} text={"Сделать запрос"}/>
                    {/*<div className={style.mainButtons}>*/}
                    {/*    <a href={"#contacts"} className={style.mainButton}>Сделать запрос</a>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
}

export default Main;
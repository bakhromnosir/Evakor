import { useState, useEffect } from 'react';
import Logo from "../img/stats/logo.png"

function Footer(props) {

    const [branches, setBranches] = useState([]);

    useEffect(() => {
        fetch("https://mproweb.uz/YTless/evacore/api/?page=home")
            .then(result => result.json())
            .then(result => setBranches(result.res.data.branches))
    }, [])


    // let ReadyBranch = branches[0]
    function ChangeMap(filial) {
        ReadyBranch = branches[filial.target.value] ;
    }

    


    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-xxl-6">
                        <div className="row">
                            <div className="col-xxl-6">
                                <a href="/">
                                    <img src={Logo} alt="png" />
                                </a>
                                <p className="footer_text">Производим коврики <br /> для всех автомобилей</p>
                                <span className="footer_bottom">© 2022 «Evakor»</span>
                            </div>
                            <div className="col-xxl-6">
                                <ul>
                                    <li className="first">Меню</li>
                                    <li><a href="/">О продукции</a></li>
                                    <li><a href="/">Автоковрики</a></li>
                                    <li><a href="/">Галерея</a></li>
                                    <li><a href="/">Доставка и оплата</a></li>
                                    <li><a href="/">Статус заказа</a></li>
                                    <li><a href="/">Возврат</a></li>
                                    <li><a href="/">Акции</a></li>
                                    <li><a href="/">Контакты</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-6">
                        <div className="yel">
                            <div className="row">
                                <div className="col-xxl-6">
                                    <select onChange={ChangeMap} name="filial" id="filial">
                                        {branches.map((item, index) => (
                                            <option  value={index}>{item.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-xxl-6">
                                    <p>{ReadyBranch.name}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </footer>
    );
}

// branch.listen('change', e => {
//     let selBranch = branches[branch.value]
//     span.addres.text = selBranch.addres
// })

export default Footer;
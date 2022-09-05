import { useState, useEffect } from 'react';
import Logo from "../img/stats/logo.png"

function Footer(props) {

    const [branches, setBranches] = useState([]);
    const [Newbranches , setNewBranches] = useState([]);

    useEffect(() => {
        fetch("https://mproweb.uz/YTless/evacore/api/?page=home")
            .then(result => result.json())
            .then(result => {
                setBranches(result.res.data.branches)
                setNewBranches(result.res.data.branches[0])} )
    }, [])

    
    
 

    function ChangeMap(filial) {
        setNewBranches(branches[filial.target.value]) ;
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

                                    <p>{Newbranches.name}</p>
                                    <p>График работы с {Newbranches.work_period.start} до {Newbranches.work_period.finish}</p>
                                    <a href={`tel:${Newbranches.phone}`} >Call - Центр: {Newbranches.phone}</a>
                                </div>
                                <div className="col-xxl-6">
                                    <iframe src={`https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d11980.80829944661!2d${Newbranches.coords.lon}!3d${Newbranches.coords.lat}!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1661857570343!5m2!1sru!2s`} width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
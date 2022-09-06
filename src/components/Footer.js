import { useState, useEffect } from 'react';
import Logo from "../img/stats/logo.png"

function Footer(props) {

    const [branches, setBranches] = useState([]);
    const [Newbranches , setNewBranches] = useState([]);
    const [NewTimebranches , setNewTimeBranches] = useState([]);
    const [NewLocbranches , setNewLocBranches] = useState([]);

    useEffect(() => {
        fetch("https://mproweb.uz/YTless/evacore/api/?page=home")
            .then(result => result.json())
            .then(result => {
                setBranches(result.res.data.branches)
                setNewBranches(result.res.data.branches[0])
                setNewTimeBranches(result.res.data.branches[0].work_period)
                setNewLocBranches(result.res.data.branches[0].coords)
               } )
    }, [])
    
    function ChangeMap(filial) {
        setNewBranches(branches[filial.target.value])
        setNewTimeBranches(branches[filial.target.value].work_period) 
        setNewLocBranches(branches[filial.target.value].coords) 
    }    

    return (
        <footer>
            <div className="container footer__container ">
                <div className="row footer__inner">
                    <div className="col-12 col-lg-6 col-xl-6 col-xxl-6">
                        <div className="row">
                            <div className="col-6  col-lg-6 col-xl-6 col-xxl-6">
                                <a href="/">
                                    <img src={Logo} alt="png" />
                                </a>
                                <p className="footer_text">Производим коврики <br /> для всех автомобилей</p>
                                <span className="footer_bottom">© 2022 «Evakor»</span>
                            </div>
                            <div className="col-6 col-lg-6 col-xl-6 col-xxl-6">
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
                    <div className="col-12 col-lg-6 col-xl-6 col-xxl-6">
                        <div className="yel">
                            <div className="row ">
                                <div className="col-lg-6 col-xl-6 col-xxl-6">

                                    <div className="branch__info">
                                    <div className="list-choice">
                                        <div className="list-choice-title">Наши филиалы <i><svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.4916 6.15752C14.4219 6.08722 14.3389 6.03143 14.2475 5.99335C14.1561 5.95527 14.0581 5.93567 13.9591 5.93567C13.8601 5.93567 13.7621 5.95527 13.6707 5.99335C13.5793 6.03143 13.4963 6.08722 13.4266 6.15752L9.99159 9.59251C9.92187 9.66281 9.83892 9.7186 9.74752 9.75668C9.65613 9.79475 9.5581 9.81436 9.45909 9.81436C9.36008 9.81436 9.26205 9.79475 9.17066 9.75668C9.07926 9.7186 8.99631 9.66281 8.92659 9.59251L5.49159 6.15752C5.42187 6.08722 5.33892 6.03143 5.24752 5.99335C5.15613 5.95527 5.0581 5.93567 4.95909 5.93567C4.86008 5.93567 4.76205 5.95527 4.67066 5.99335C4.57926 6.03143 4.49631 6.08722 4.42659 6.15752C4.2869 6.29804 4.2085 6.48813 4.2085 6.68627C4.2085 6.88441 4.2869 7.07449 4.42659 7.21502L7.86909 10.6575C8.29097 11.0789 8.86284 11.3155 9.45909 11.3155C10.0553 11.3155 10.6272 11.0789 11.0491 10.6575L14.4916 7.21502C14.6313 7.07449 14.7097 6.88441 14.7097 6.68627C14.7097 6.48813 14.6313 6.29804 14.4916 6.15752Z" fill="white"/></svg></i></div>

                                            <div className="list-choice-objects">
                                                {branches.map((item, index) => (
                                                    <label key={index}>
                                                        <input  onClick={ChangeMap} value={index} type="radio" name="month"/><span>{item.name}</span>
                                                    </label>
                            
                                                ))}      
                                            </div>
                                    </div>

                                        
                                        <div className="branch__info_inner">
                                            <p>{Newbranches.name}</p>
                                            <p>График работы с {NewTimebranches.start } до {NewTimebranches.finish}</p>
                                            <a href={`tel:${Newbranches.phone}`} >Call - Центр: {Newbranches.phone}</a>
                                        </div>
                                       
                                    </div>
                                    
                                </div>

                                <div className="col-lg-6 col-xl-6 col-xxl-6">
                                    <div className="branch__map">
                                        {<iframe src={`https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d11980.80829944661!2d${NewLocbranches.lon}!3d${NewLocbranches.lat}!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1661857570343!5m2!1sru!2s`}  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>}
                                    </div>
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
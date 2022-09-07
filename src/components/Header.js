import { useState, useEffect } from "react"
import logo from "../img/stats/logo.png";
import {Link} from "react-router-dom"

function Header() {

    const [branches, setBranches] = useState([])
    const [Newbranches, setNewBranches] = useState([])
    const [socials, setSocials] = useState([])

    useEffect(() => {
        fetch("https://mproweb.uz/YTless/evacore/api/?page=home")
            .then(result => result.json())
            .then(result => {
                setBranches(result.res.data.branches)
                setNewBranches(result.res.data.branches[0])

            } )

        fetch("https://mproweb.uz/YTless/evacore/api/?page=home")
            .then(result => result.json())
            .then(result => setSocials(result.res.data.socials))
    }, [])


    return (
        <header>
            <div className="sub__header">
                <div className="container">
                    <div className="sub__header_inner row">
                        <nav className="navbar navbar-expand-lg col-3 col-lg-9 col-xl-9 col-xxl-8">
                            <div className="container-fluid">
                                <button className="navbar-toggler header__mobile_menu"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                    <ul className="navbar-nav sub__header_ul">
                                        <li className="nav-item">
                                            <Link className="sub__header_li" to="/infoevakor">О продукции</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className=" sub__header_li" to="/marks">Автоковрики</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className=" sub__header_li" to="/galleryevakor">Галерея</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className=" sub__header_li" to="/delivery">Доставка и оплата</Link>
                                        </li>
                                        <li className="nav-item">
                                            <a className=" sub__header_li" href="#">Статус заказа</a>
                                        </li>
                                        <li className="nav-item">
                                            <Link className=" sub__header_li" to="/return">Возврат</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className=" sub__header_li" to="/Stock">Акции</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className=" sub__header_li" to="/contact">Контакты</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>

                        <div className="for__tel__logo col-4 col-sm-5">
                            <Link to="/">
                                <img src={logo} alt="" />
                            </Link>
                        </div>

                        <div className="social col-5 col-sm-4 col-lg-3 col-xl-3 col-xxl-4">
                            <button type="button" className="btn btn-primary search__mobile__btn  input__btn" data-bs-toggle="modal" data-bs-target="#header__mobile_modal"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_29_488)"><path d="M12.0207 11.0779L14.876 13.9326L13.9327 14.8759L11.078 12.0206C10.0158 12.8721 8.69467 13.3352 7.33334 13.3333C4.02134 13.3333 1.33334 10.6453 1.33334 7.33325C1.33334 4.02125 4.02134 1.33325 7.33334 1.33325C10.6453 1.33325 13.3333 4.02125 13.3333 7.33325C13.3353 8.69459 12.8722 10.0157 12.0207 11.0779ZM10.6833 10.5833C11.5294 9.71318 12.0019 8.54687 12 7.33325C12 4.75459 9.91134 2.66659 7.33334 2.66659C4.75467 2.66659 2.66667 4.75459 2.66667 7.33325C2.66667 9.91125 4.75467 11.9999 7.33334 11.9999C8.54696 12.0018 9.71326 11.5293 10.5833 10.6833L10.6833 10.5833Z" fill="white" /></g><defs><clipPath id="clip0_29_488"><rect width="16" height="16" fill="white" /></clipPath></defs></svg></button>
                            {socials.map((item, index) => (
                                <a href={item.link} key={index}>
                                    <i className={`${item.fa_icon} social__icons`}></i>
                                </a>
                            ))}
                        </div>

                        <div className="modal fade mobile__modal"  id="header__mobile_modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal__search">
                                <div className="search">
                                    <form className="d-flex " role="search">
                                        <input id="header__search" className="  search__input" type="text" placeholder="Поиск по сайту" aria-label="Search" />
                                        <button className="btn input__btn" type="submit"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_29_488)"><path d="M12.0207 11.0779L14.876 13.9326L13.9327 14.8759L11.078 12.0206C10.0158 12.8721 8.69467 13.3352 7.33334 13.3333C4.02134 13.3333 1.33334 10.6453 1.33334 7.33325C1.33334 4.02125 4.02134 1.33325 7.33334 1.33325C10.6453 1.33325 13.3333 4.02125 13.3333 7.33325C13.3353 8.69459 12.8722 10.0157 12.0207 11.0779ZM10.6833 10.5833C11.5294 9.71318 12.0019 8.54687 12 7.33325C12 4.75459 9.91134 2.66659 7.33334 2.66659C4.75467 2.66659 2.66667 4.75459 2.66667 7.33325C2.66667 9.91125 4.75467 11.9999 7.33334 11.9999C8.54696 12.0018 9.71326 11.5293 10.5833 10.6833L10.6833 10.5833Z" fill="white" /></g><defs><clipPath id="clip0_29_488"><rect width="16" height="16" fill="white" /></clipPath></defs></svg></button>
                                    </form>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
            </div>

            <div className="main__header">
                <div className="container">
                    <div className="main__header_inner">
                        <div className="logo">
                            <Link to="/">
                                <img src={logo} alt="" />
                            </Link>
                        </div>


                        <div className="header__right_side">

                            <div className="search">
                                <form className="d-flex " role="search">
                                    <input id="header__search" className="  search__input" type="text" placeholder="Поиск по сайту" aria-label="Search" />
                                    <button className="btn input__btn" type="submit"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_29_488)"><path d="M12.0207 11.0779L14.876 13.9326L13.9327 14.8759L11.078 12.0206C10.0158 12.8721 8.69467 13.3352 7.33334 13.3333C4.02134 13.3333 1.33334 10.6453 1.33334 7.33325C1.33334 4.02125 4.02134 1.33325 7.33334 1.33325C10.6453 1.33325 13.3333 4.02125 13.3333 7.33325C13.3353 8.69459 12.8722 10.0157 12.0207 11.0779ZM10.6833 10.5833C11.5294 9.71318 12.0019 8.54687 12 7.33325C12 4.75459 9.91134 2.66659 7.33334 2.66659C4.75467 2.66659 2.66667 4.75459 2.66667 7.33325C2.66667 9.91125 4.75467 11.9999 7.33334 11.9999C8.54696 12.0018 9.71326 11.5293 10.5833 10.6833L10.6833 10.5833Z" fill="white" /></g><defs><clipPath id="clip0_29_488"><rect width="16" height="16" fill="white" /></clipPath></defs></svg></button>
                                </form>
                            </div>

                            {/* <div className="dropdown">
                                <button className="btn  dropdown-toggle dropdown__button" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span>+99871 123 45 67</span>
                                    <span>Юнус-абад</span>
                                    <div className="dropdown__icon">
                                        <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.7099 1.2101C13.6169 1.11638 13.5063 1.04198 13.3845 0.991213C13.2626 0.940445 13.1319 0.914307 12.9999 0.914307C12.8679 0.914307 12.7372 0.940445 12.6153 0.991213C12.4934 1.04198 12.3828 1.11638 12.2899 1.2101L7.70988 5.7901C7.61691 5.88382 7.50631 5.95822 7.38445 6.00899C7.2626 6.05975 7.13189 6.08589 6.99988 6.08589C6.86787 6.08589 6.73716 6.05975 6.6153 6.00899C6.49344 5.95822 6.38284 5.88382 6.28988 5.7901L1.70988 1.2101C1.61691 1.11638 1.50631 1.04198 1.38445 0.991213C1.26259 0.940445 1.13189 0.914307 0.999877 0.914307C0.867865 0.914307 0.73716 0.940445 0.6153 0.991213C0.493441 1.04198 0.38284 1.11638 0.289877 1.2101C0.103626 1.39747 -0.000915527 1.65092 -0.000915527 1.9151C-0.000915527 2.17929 0.103626 2.43274 0.289877 2.6201L4.87988 7.21009C5.44238 7.77189 6.20488 8.08745 6.99988 8.08745C7.79488 8.08745 8.55738 7.77189 9.11988 7.21009L13.7099 2.6201C13.8961 2.43274 14.0007 2.17929 14.0007 1.9151C14.0007 1.65092 13.8961 1.39747 13.7099 1.2101V1.2101Z" fill="white" />
                                        </svg>
                                    </div>
                                </button>

                                <ul className="dropdown-menu dropdown__menu">
                                    {branches.map((item, index) => (
                                        <li key={index}><a className="dropdown-item" href="#"> <span>{item.name}</span> <span>{item.phone}</span> </a></li>
                                    ))}
                                </ul>
                            </div> */}
                                    <div className="list-choice">
                                         <i className="dropdown__icon"><svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.4916 6.15752C14.4219 6.08722 14.3389 6.03143 14.2475 5.99335C14.1561 5.95527 14.0581 5.93567 13.9591 5.93567C13.8601 5.93567 13.7621 5.95527 13.6707 5.99335C13.5793 6.03143 13.4963 6.08722 13.4266 6.15752L9.99159 9.59251C9.92187 9.66281 9.83892 9.7186 9.74752 9.75668C9.65613 9.79475 9.5581 9.81436 9.45909 9.81436C9.36008 9.81436 9.26205 9.79475 9.17066 9.75668C9.07926 9.7186 8.99631 9.66281 8.92659 9.59251L5.49159 6.15752C5.42187 6.08722 5.33892 6.03143 5.24752 5.99335C5.15613 5.95527 5.0581 5.93567 4.95909 5.93567C4.86008 5.93567 4.76205 5.95527 4.67066 5.99335C4.57926 6.03143 4.49631 6.08722 4.42659 6.15752C4.2869 6.29804 4.2085 6.48813 4.2085 6.68627C4.2085 6.88441 4.2869 7.07449 4.42659 7.21502L7.86909 10.6575C8.29097 11.0789 8.86284 11.3155 9.45909 11.3155C10.0553 11.3155 10.6272 11.0789 11.0491 10.6575L14.4916 7.21502C14.6313 7.07449 14.7097 6.88441 14.7097 6.68627C14.7097 6.48813 14.6313 6.29804 14.4916 6.15752Z" fill="white"/></svg></i>
                                        <div className="list-choice-title"> <span>{Newbranches.name}</span> <span>{Newbranches.phone}</span>  </div>
                                            <div className="list-choice-objects">
                                                {branches.map((item, index) => (
                                                    <label key={index}>
                                                        <input  value={index} type="radio" name="month"/><span> <span>{item.name}</span> <span>{item.phone}</span> </span>
                                                    </label>
                                                ))}      
                                            </div>
                                    </div>

                    


                            <div className="profile__and_buttons">
                                <div >
                                    <a className="profile__blocks " href="#!">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_29_502)">
                                                <path d="M12 12C13.1867 12 14.3467 11.6481 15.3334 10.9888C16.3201 10.3295 17.0892 9.39246 17.5433 8.2961C17.9974 7.19975 18.1162 5.99335 17.8847 4.82946C17.6532 3.66558 17.0818 2.59648 16.2426 1.75736C15.4035 0.918247 14.3344 0.346802 13.1705 0.115291C12.0067 -0.11622 10.8003 0.00259972 9.7039 0.456726C8.60754 0.910851 7.67047 1.67989 7.01118 2.66658C6.35189 3.65328 6 4.81331 6 6C6.00159 7.59081 6.63424 9.11602 7.75911 10.2409C8.88399 11.3658 10.4092 11.9984 12 12ZM12 2C12.7911 2 13.5645 2.2346 14.2223 2.67412C14.8801 3.11365 15.3928 3.73836 15.6955 4.46927C15.9983 5.20017 16.0775 6.00444 15.9231 6.78036C15.7688 7.55629 15.3878 8.26902 14.8284 8.82843C14.269 9.38784 13.5563 9.7688 12.7804 9.92314C12.0044 10.0775 11.2002 9.99827 10.4693 9.69552C9.73836 9.39277 9.11365 8.88008 8.67412 8.22228C8.2346 7.56449 8 6.79113 8 6C8 4.93914 8.42143 3.92172 9.17157 3.17158C9.92172 2.42143 10.9391 2 12 2Z" fill="#FF7E00" />
                                                <path d="M12 14.0005C9.61386 14.0031 7.32622 14.9522 5.63896 16.6395C3.95171 18.3267 3.00265 20.6144 3 23.0005C3 23.2657 3.10536 23.5201 3.29289 23.7076C3.48043 23.8951 3.73478 24.0005 4 24.0005C4.26522 24.0005 4.51957 23.8951 4.70711 23.7076C4.89464 23.5201 5 23.2657 5 23.0005C5 21.144 5.7375 19.3635 7.05025 18.0507C8.36301 16.738 10.1435 16.0005 12 16.0005C13.8565 16.0005 15.637 16.738 16.9497 18.0507C18.2625 19.3635 19 21.144 19 23.0005C19 23.2657 19.1054 23.5201 19.2929 23.7076C19.4804 23.8951 19.7348 24.0005 20 24.0005C20.2652 24.0005 20.5196 23.8951 20.7071 23.7076C20.8946 23.5201 21 23.2657 21 23.0005C20.9974 20.6144 20.0483 18.3267 18.361 16.6395C16.6738 14.9522 14.3861 14.0031 12 14.0005Z" fill="#FF7E00" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_29_502">
                                                    <rect width="24" height="24" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <p> Профиль</p>
                                    </a>
                                </div>

                                <div >
                                    <a className="profile__blocks" href="#!">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_29_504)">
                                                <path d="M17.5 1.9165C16.3739 1.93402 15.2724 2.24836 14.3068 2.82778C13.3411 3.40719 12.5453 4.23117 12 5.2165C11.4546 4.23117 10.6589 3.40719 9.69323 2.82778C8.72753 2.24836 7.62604 1.93402 6.49999 1.9165C4.70493 1.99449 3.01369 2.77976 1.79577 4.10074C0.577848 5.42171 -0.0677617 7.17103 -1.11917e-05 8.9665C-1.11917e-05 13.5135 4.78599 18.4795 8.79999 21.8465C9.69621 22.5996 10.8293 23.0125 12 23.0125C13.1706 23.0125 14.3038 22.5996 15.2 21.8465C19.214 18.4795 24 13.5135 24 8.9665C24.0677 7.17103 23.4221 5.42171 22.2042 4.10074C20.9863 2.77976 19.295 1.99449 17.5 1.9165ZM13.915 20.3165C13.379 20.7679 12.7007 21.0154 12 21.0154C11.2992 21.0154 10.621 20.7679 10.085 20.3165C4.94699 16.0055 1.99999 11.8695 1.99999 8.9665C1.93163 7.70122 2.36635 6.46023 3.20935 5.5142C4.05235 4.56817 5.23522 3.99385 6.49999 3.9165C7.76476 3.99385 8.94763 4.56817 9.79063 5.5142C10.6336 6.46023 11.0683 7.70122 11 8.9665C11 9.23172 11.1053 9.48607 11.2929 9.67361C11.4804 9.86115 11.7348 9.9665 12 9.9665C12.2652 9.9665 12.5196 9.86115 12.7071 9.67361C12.8946 9.48607 13 9.23172 13 8.9665C12.9316 7.70122 13.3664 6.46023 14.2094 5.5142C15.0523 4.56817 16.2352 3.99385 17.5 3.9165C18.7648 3.99385 19.9476 4.56817 20.7906 5.5142C21.6336 6.46023 22.0683 7.70122 22 8.9665C22 11.8695 19.053 16.0055 13.915 20.3125V20.3165Z" fill="#FF7E00" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_29_504">
                                                    <rect width="24" height="24" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <p> Избранное</p>
                                    </a>
                                </div>

                                <div>
                                    <a className="profile__blocks" href="#!">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_29_500)">
                                                <path d="M22.713 4.077C22.4317 3.73944 22.0796 3.46795 21.6815 3.28182C21.2835 3.09568 20.8494 2.99946 20.41 3H4.242L4.2 2.649C4.11405 1.91942 3.76338 1.24673 3.21449 0.758478C2.6656 0.270223 1.95663 0.000341793 1.222 0L1 0C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2H1.222C1.46693 2.00003 1.70334 2.08996 1.88637 2.25272C2.06941 2.41547 2.18634 2.63975 2.215 2.883L3.591 14.583C3.73385 15.7998 4.31848 16.9218 5.23391 17.736C6.14934 18.5502 7.33185 19 8.557 19H19C19.2652 19 19.5196 18.8946 19.7071 18.7071C19.8946 18.5196 20 18.2652 20 18C20 17.7348 19.8946 17.4804 19.7071 17.2929C19.5196 17.1054 19.2652 17 19 17H8.557C7.93806 16.9983 7.3348 16.8051 6.82994 16.4471C6.32507 16.089 5.94331 15.5835 5.737 15H17.657C18.8293 15.0001 19.9643 14.5882 20.8638 13.8364C21.7633 13.0846 22.37 12.0407 22.578 10.887L23.363 6.533C23.4414 6.10101 23.4237 5.65707 23.3114 5.23264C23.1991 4.80821 22.9948 4.41368 22.713 4.077ZM21.4 6.178L20.614 10.532C20.4891 11.225 20.1245 11.852 19.5839 12.3032C19.0433 12.7544 18.3612 13.0011 17.657 13H5.419L4.478 5H20.41C20.5569 4.99912 20.7022 5.03062 20.8355 5.09226C20.9689 5.15389 21.087 5.24415 21.1815 5.35661C21.276 5.46907 21.3446 5.60097 21.3824 5.74294C21.4201 5.8849 21.4262 6.03344 21.4 6.178Z" fill="#FF7E00" />
                                                <path d="M7.00012 24.0007C8.10469 24.0007 9.00011 23.1053 9.00011 22.0007C9.00011 20.8962 8.10469 20.0007 7.00012 20.0007C5.89555 20.0007 5.00012 20.8962 5.00012 22.0007C5.00012 23.1053 5.89555 24.0007 7.00012 24.0007Z" fill="#FF7E00" />
                                                <path d="M17 24.0007C18.1046 24.0007 19 23.1053 19 22.0007C19 20.8962 18.1046 20.0007 17 20.0007C15.8954 20.0007 15 20.8962 15 22.0007C15 23.1053 15.8954 24.0007 17 24.0007Z" fill="#FF7E00" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_29_500">
                                                    <rect width="24" height="24" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <p> Корзина</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    );
}

export default Header;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Button from "../../shared/button/index";

import { COMPANY_NAME } from "../../../helpers/constants";
import logo from "../../../images/logo.svg";

import css from "./styles.module.scss";
import { IPages } from "../../../helpers/interfaces";

const mockPages: IPages[] = [
    {id: 1, name: 'Use case`s'},
    {id: 2, name: 'About'},
    {id: 3, name: 'Pricing'},
    {id: 4, name: 'Blog'}
] 

const Header: React.FC = () => {
    const [isAuth, setIsAuth] = useState<boolean>(false);
    
    useEffect(() => {
        const auth = JSON.parse(localStorage.getItem('isAuth') || "");
        setIsAuth(auth);
    }, []);

    useEffect(() => {
        localStorage.setItem('isAuth', isAuth.toString());
    }, [isAuth]);

    const logOutClick = () => {
        setIsAuth(false);
    }
    const logInClick = () => {
        console.log("LOG IN");
        window.location.href = '/auth';
    }

    return (
        <div className={css.header}>
            <div className={css.logo}>
                <img className={css.logo_img} src={logo} alt="logo"></img>
                <p className={css.logo_text}>{COMPANY_NAME}</p>
            </div>

            <div className={css.pages}>
                <ul className={css.pages_list}> 
                    {mockPages.map(p => 
                        <li className={css.pages_list_item}>
                            {p.name}
                        </li>
                    )}
                </ul>
            </div>

            {isAuth 
            ? <Button onClick={logOutClick} customBtnStyles={css.buttons_two}>Log Out</Button>
            : <div className={css.buttons}>
                <div className={css.buttons_one}>
                    <Link to="/login" className={css.buttons_href}>Log in</Link>
                </div>
                    <Button onClick={logInClick} customBtnStyles={css.buttons_two}>Sign up</Button>
            </div>
            }
        </div>
    );
}

export default Header;
import React, { useRef, useState } from "react";
import { INewUser } from "../../helpers/interfaces";
import { Link } from "react-router-dom";

import Button from "../../components/shared/button";
import { COMPANY_NAME } from "../../helpers/constants";

import css from "./styles.module.scss";

interface AuthProps {
    link: string
    linkName: string
    pageName: string
    handleClick(newUser: INewUser): void
}

const AuthPage: React.FC<AuthProps> = ({link, linkName, pageName, handleClick}) => {
    const [btnActive, toggleBtnActive] = useState<boolean>(true);

    const refEmail = useRef<HTMLInputElement>(null);
    const refPass = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: React.MouseEvent) => {
            const newUser: INewUser = {
                id: Date.now(),
                email: refEmail.current!.value,
                password: refPass.current!.value
            }

            handleClick(newUser);

            refEmail.current!.value = "";
            refPass.current!.value = "";
    }

    const changeHandler = (event: React.ChangeEvent) => {
        if (refEmail.current!.value && refPass.current!.value) toggleBtnActive(false);
        else toggleBtnActive(true);
    }

    return (
        <div className={css.container}>
            <div className={css.form__wrap}>

            <p className={css.title}>{pageName}</p>

            <section>
                <div className={css.form__group}>
                    <input id='email' ref={refEmail} onChange={changeHandler} placeholder="Email" className={css.form__field}/>
                    <label htmlFor="email" className={css.form__label}>Email</label>
                </div>

                <div className={css.form__group}>
                    <input id='pass' ref={refPass} onChange={changeHandler} placeholder="Password" type="password" className={css.form__field}/>
                    <label htmlFor="pass" className={css.form__label}>Password</label>
                </div>
            </section>

            <div className={css.btn__block}>
            <Button 
                disabled={btnActive} 
                onClick={handleSubmit} 
                customBtnStyles={css.btn} 
                customBtnWrapStyles={css.btn_wrap}
            >
                {pageName}
            </Button>
            </div>



            <div className={css.redirect}>
                <Link to={link} className={css.redirect__link}>{linkName}</Link>
                <span>Ⓒ {COMPANY_NAME}</span>
            </div>

            </div>
        </div>
    );
}

export default AuthPage;
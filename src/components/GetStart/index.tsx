import logo from "../../images/logo.svg";
import online from "../../images/green_dot.svg";
import Button from "../shared/button/index";

import css from "./styles.module.scss";
import cn from "classnames";

const GetStartedBlock  = () => {

    const handleClick = () => {
        console.log("click");
    }

    return (
        <div className={css.container}>
            <img className={css.logo} src={logo} alt="logo"/>

            <p className={cn(css.text_title, css.text_bold)}>Get Started Now</p>
            <span className={css.text_text}>Setup is easy and takes under 5 minutes.</span>

            <Button rounded onClick={handleClick} customBtnStyles={css.btn} customBtnWrapStyles={css.btn_wrap}>Get Started Now</Button>
            <p className={css.text_under}><img src={online} alt="online"/><span className={css.text_bold}>1000+</span>creators have already started</p>
        </div>
    );
}

export default GetStartedBlock;
import cn from "classnames";

import Button from "../../shared/button/index";
import StepTemplate from "../../StepTemplate";

import mobile from "../../../images/mobile.svg";

import css from "./styles.module.scss";
import React from "react";

const mock = {
    step: "Step 2", 
    title: "Share Your Homepage", 
    desc: `Share your Wavium homepage link with your followers, and
we'll handle the rest.`
};

const Step2 = () => {

    const HandleBtnClick = (event: React.MouseEvent) => {
        console.log("Click Button !!");
    }

    return (
        <StepTemplate 
            stepName={mock.step}
            title={mock.title}
            desc={mock.desc}
            handleClick={HandleBtnClick}
        >

            <div className={css.block_wrap}>
                <div className={css.block}>
                   <p className={cn(css.text_link, css.text_green, css.text_left)}>One Link</p>
                   <p className={cn(css.text_title, css.text_gray, css.text_left)}>ALL You Create.<br /><span className={css.text_white}>One Link</span></p>
                   
                   <div className={css.img_wrap}>
                    <img className={css.img} src={mobile} alt="example_photo"/>
                   </div> 
                </div>
                <div className={css.block}>
                    <p className={cn(css.text_link, css.text_green, css.text_left)}>Collect Subscribers</p>
                    <p className={cn(css.text_title, css.text_gray, css.text_left)}>Emails.<br />Phone #s.<br /><span className={css.text_white}>All Yours.</span></p>
                </div>
            </div>

            <div className={css.btn_container}>
                <Button onClick={HandleBtnClick} customBtnWrapStyles={css.btn_wrap} customBtnStyles={css.btn}>Get Started</Button>
            </div>
            
        </StepTemplate>
    );
}

export default Step2;
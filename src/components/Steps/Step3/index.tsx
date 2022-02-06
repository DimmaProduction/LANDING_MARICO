import Button from "../../shared/button/index";
import StepTemplate from "../../StepTemplate";

import img from "../../../images/img_2.png";

import css from "./styles.module.scss";
import React from "react";

const mock = {
    step: "Step 3", 
    title: "Send Emails & Text Messages", 
    desc: `No more going through a social platform. Reach and engage
your audience directly over email and text massage.`
};

const Step3 = () => {

    const HandleBtnClick = (event: React.MouseEvent) => {
        console.log("STEP 3 // Click Button !!");
    }

    return (
        <StepTemplate 
            stepName={mock.step}
            title={mock.title}
            desc={mock.desc}
            btnText="View Avaliable Sources"
            withBtn
            handleClick={HandleBtnClick}
        >

            <div className={css.container}>
                <div className={css.block_info}>
                    <p className={css.text_epilog}>Create & Share</p>

                    <p className={css.text_title}>Reach Your<br/>Audience <span className={css.text_blue}>Directly.</span></p>
                    <ol className={css.text_list}>
                        <li className={css.text_list_item}>Embed content or create something new to share.</li>
                        <li className={css.text_list_item}>Share content over email, text message or your homepage.</li>
                    </ol>

                    <div className={css.btn_block}>
                        <Button onClick={HandleBtnClick} customBtnWrapStyles={css.btn_wrap} customBtnStyles={css.btn}>Get Started Now</Button>
                        <Button onClick={HandleBtnClick} customBtnWrapStyles={css.btn_wrap} customBtnStyles={css.btn} color="black">View A Demo</Button>
                    </div>

                </div>
                <div className={css.block_photos}>
                    <img className={css.block_photos_img} src={img} alt="example_photo"/>
                    <div className={css.block_photos_square}></div>
                </div>
            </div>
            
        </StepTemplate>
    );
}

export default Step3;
import Button from "../../shared/button/index";
import StepTemplate from "../../StepTemplate";

import img from "../../../images/img_1.png";

import css from "./styles.module.scss";

const mock = {
    step: "Step 1", 
    title: "Connect Your Content", 
    desc: `Bring all of your content together and get a Homepage that
automatically updates whenever you create anywhere online.`
};

const Step1 = () => {

    const HandleBtnClick = () => {
        console.log("Click Button !!");
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

            <div className={css.container} >
                <div className={css.block_info}>
                    <p className={css.text_epilog}>Your Homepage</p>

                    <p className={css.text_title}>Your Content.<br/>All in <span className={css.text_blue}>One Spot</span></p>
                    <ol className={css.text_list}>
                        <li className={css.text_list_item}>Bring all of your content together into one homepage.</li>
                        <li className={css.text_list_item}>Your page automatically updates whenever you create.</li>
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

export default Step1;
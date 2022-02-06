import reviews from "../../images/reviews.png";
import bg_people from "../../images/bg_peoples.png";

import css from "./styles.module.scss";

const Reviews: React.FC = () => {
    return (
        <>
            <p className={css.text_title}>Experts Agree</p>
            <img className={css.img} src={reviews} alt="reviews"/>

            <div className={css.audience}>
                <p className={css.text_onImage}>We've helped over 1,000 creatorsre<br />claim control of their audience.</p>
                <img src={bg_people} alt="background"/>
            </div>
        </>          
    );
}

export default Reviews;
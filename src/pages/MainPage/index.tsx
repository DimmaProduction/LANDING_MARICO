import React from 'react';
import cn from 'classnames';

import Layout from '../../components/layout';
import Button from '../../components/shared/button';
import Step1 from '../../components/Steps/Step1';
import Step2 from '../../components/Steps/Step2';
import Step3 from '../../components/Steps/Step3';
import Reviews from '../../components/Reviews';
import GetStartedBlock from '../../components/GetStart';

import { COMPANY_NAME } from '../../helpers/constants';
import green_dot from "../../images/green_dot.svg";

import css from  "./styles.module.scss";

const mock = {
  benefits: [
    {id: 1, emoji: '🙂', title: "Reduced Anxiety", desc: "Never worry about losing your audience."},
    {id: 2, emoji: '😁', title: "Lower Workload", desc: "Just share one link. We'll handle the rest."},
    {id: 3, emoji: '🥳', title: "More Time", desc: "Spend less time on marketing tools"}
  ]
}

const MainPage: React.FC = () => {

  const HandleBtnClick = () => {
    console.log("CLICK BUTTON !!!");
  }

  return (
      <Layout>
        <div className={css.main_title}>
          <p>Own your audience.</p>
          <p className={css.main_title_gradient}>So you don`t lose them</p>
        </div>

        <div className={css.main_demo}>
          <p className={css.main_demo_title}>Turn your audience into email and<br/>text message subscribers.</p>
          <div className={css.main_demo_btn}>
            <Button 
              customBtnWrapStyles={css.main_demo_btn_wrap} 
              customBtnStyles={css.main_demo_btn_text}
              onClick={HandleBtnClick} >
              Get Started Now
            </Button>
            <Button 
              customBtnWrapStyles={css.main_demo_btn_wrap} 
              customBtnStyles={css.main_demo_btn_text} 
              onClick={HandleBtnClick}
              color="black">
                View A Demo
            </Button>
          </div>
            
          <div className={css.main_demo_bottom}>
            <img src={green_dot} alt="online"></img>
            <span className={cn(css.main_demo_text, css.main_demo_numbers)}>1000+</span>
            <span className={css.main_demo_text}>creators have already started</span>
          </div>
        </div>

        <div className={css.main_benefits}>
          <span className={css.main_benefits_title}>Why Creators Love {COMPANY_NAME}</span>
          <ul className={css.main_benefits_table}>
            {mock.benefits.map(b => 
              <li key={b.id} className={css.main_benefits_item}>
                <p className={css.main_benefits_item_title}>{b.emoji}{b.title}</p>
                <p className={css.main_benefits_item_desc}>{b.desc}</p>
              </li>
            )}
          </ul>
        </div>

        <Step1 />
        <Step2 />
        <Step3 />

        <Reviews />
        <GetStartedBlock />
      </Layout>
  );
}

export default MainPage;

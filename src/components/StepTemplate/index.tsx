import { ReactNode } from "react";
import Button from "../shared/button/index";
import css from "./styles.module.scss"

interface IProps {
    stepName: string
    title: string
    desc: string 
    btnText?: string, 
    withBtn?: boolean, 
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
    children: ReactNode
}

const StepTemplate = ({
    stepName,
    title, 
    desc, 
    btnText, 
    withBtn = false, 
    handleClick, 
    children
}: IProps) => {
    return (
        <section className={css.main}>
            <p className={css.step}>{stepName.toUpperCase()}</p>
            <span className={css.title}>{title}</span>
            <p className={css.desc}>{desc}</p>

            {withBtn && 
                <Button 
                    customBtnWrapStyles={css.btn_wrap} 
                    customBtnStyles={css.btn_text} 
                    onClick={handleClick} 
                    color="black"
                >
                    {btnText}
                </Button>
            }

            <div className={css.body}>
                {children}
            </div>
        </section>
    );
}

export default StepTemplate;
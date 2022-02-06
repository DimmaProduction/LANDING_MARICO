import { IPages } from "../../../helpers/interfaces";

import { COMPANY_NAME, EMAIL } from "../../../helpers/constants";
import logo from "../../../images/logo.svg";

import css from "./styles.module.scss";

const mockPages: IPages[] = [
    {id: 1, name: "About"},
    {id: 2, name: "Pricing"},
    {id: 3, name: "Blog"},
    {id: 4, name: "Sign in"},
]

const Footer: React.FC = () => {
    return (
        <div className={css.footer}>
            <div className={css.logo_wrapper}>
                <div className={css.logo}>
                    <img className={css.logo_img} src={logo} alt="logo"></img>
                    <p className={css.logo_text}>{COMPANY_NAME}</p>
                </div>
                <span className={css.logo_email}>{EMAIL}</span>
            </div>

            <div className={css.pages}>
                <ul className={css.pages_list}>
                    {mockPages.map(p => 
                        <li key={p.id} className={css.pages_list_item}>{p.name}</li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Footer;
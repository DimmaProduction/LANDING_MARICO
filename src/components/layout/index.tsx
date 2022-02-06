import { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";

import css from "./styles.module.scss"

const Layout: React.FC <ReactNode> = ({children}) => {
    return (
        <>
            <Header />
            <main className={css.main}>
                {children}
            </main>
            <Footer />
        </>
    );
}

export default Layout;
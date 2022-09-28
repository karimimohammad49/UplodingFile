import React, {Fragment} from "react";

import classes from "./Modal.module.css";

type modal={
    header:string;
    content:string;
    footer:React.ReactNode;
}

const Modal=(prop:modal)=>{
    return <Fragment>
        <div className={classes.modal}>
            <header>
                {prop.header}
            </header>

                {prop.content}

            <footer>
                {prop.footer}
            </footer>
        </div>
    </Fragment>
};

export default Modal;
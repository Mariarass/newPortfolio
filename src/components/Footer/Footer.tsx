import React from 'react';
import s from './Footer.module.css'
import {ReactComponent as Telegram} from '../../assets/telegram.svg'
import {ReactComponent as Linked} from '../../assets/linked.svg'
import {ReactComponent as Git} from '../../assets/git.svg'
import {ReactComponent as Email} from '../../assets/email.svg'

const Footer = () => {
    return (
        <div className={s.container} id='contact'>
            <div className={s.footerContainer}>
                <h2>
                    GET INTO CONTACT WITH ME

                </h2>
                <div className={s.iconContainer}>
                    <div><a href={'/'} className={s.link}><p className={s.svg}>CV</p></a></div>
                    <div><a href={'/'} ><Git className={s.svg}/></a></div>
                    <div><a href={'/'} ><Linked className={s.svg}/></a></div>
                    <div><a href={'/'}><Telegram className={s.svg}/></a></div>
                    <div><a href={'/'} ><Email className={s.svg}/></a></div>

                </div>

                <p>
                 {/*   @2022*/}

                </p>

            </div>

        </div>
    );
};

export default Footer;
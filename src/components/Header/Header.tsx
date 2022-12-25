import React from 'react';
import s from './Header.module.css'

const Header = () => {
    const handleClickScroll = (el:string) => {
        const element = document.getElementById(el);
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

        return (
            <div className={s.headerContainer}>

                <div className={s.nav}>
                    <div className={s.navLink} onClick={()=>handleClickScroll('main')}>Main
                    </div>
                    <div className={s.navLink} onClick={()=>handleClickScroll('skills')}>Skills
                    </div>
                    <div className={s.navLink}  onClick={()=>handleClickScroll('projects')}>Project</div>
                    <div className={s.navLink}  onClick={()=>handleClickScroll('contact')} >Contact</div>
                    <div className={s.menu}>men</div>
                </div>


            </div>
        );
    }
;

export default Header;
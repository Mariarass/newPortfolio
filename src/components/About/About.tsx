import React, {useState} from 'react';
import s from './About.module.css'

import Code from "./Code/Code";
import Tab from "./Tab/Tab";
import me from '../../assets/me.jpg'
import {ReactComponent as Telegram} from '../../assets/telegram.svg'
import {ReactComponent as Linked} from '../../assets/linked.svg'
import {ReactComponent as Git} from '../../assets/git.svg'
import {ReactComponent as Email} from '../../assets/email.svg'


const About = () => {
    const [tab, setTab] = useState('About.tsx')
    const row = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

    const changeTab = (tab: string) => {
        setTab(tab)


    }


    return (
        <div className={s.container} id='main'>
            <div className={s.aboutContainer}>


                <div className={s.ideaContainer}>
                    <div className={s.rowContainer}>
                        {row.map(el => <p key={el}>{el}</p>)}
                    </div>
                    <div className={s.codeContainer}>

                        <div className={s.tabContainer}>
                            <div onClick={() => changeTab('About.tsx')}
                                 className={tab === 'About.tsx' ? s.tabActive : s.tab}>
                                About.tsx
                            </div>

                            <div onClick={() => changeTab('photo.jpg')}
                                 className={s.hidden + ' ' + (tab === 'photo.jpg' ? s.tabActive : s.tab)}>
                                photo.jpg
                            </div>

                        </div>
                        <div>
                            {tab === 'About.tsx' ?
                                <Code name={'About'}/> :
                                <div className={s.imgContainer}>
                                    <img className={s.img} src={me}/>
                                </div>}
                        </div>


                    </div>
                    <div className={s.contactContainer} id='imgContainer'>
                        <div className={s.tabActive}>
                            photo.jpg
                        </div>
                        <div className={s.imgContainer}>
                            <img className={s.img} src={me}/>
                        </div>
                    </div>


                </div>
         {/*       <div className={s.linkContainer}>
                    <div><a href={'/'} className={s.link}>CV</a></div>
                    <div><a href={'/'} className={s.link}><Git className={s.svg}/></a></div>
                    <div><a href={'/'} className={s.link}><Linked className={s.svg}/></a></div>
                    <div><a href={'/'} className={s.link}><Telegram className={s.svg}/></a></div>
                    <div><a href={'/'} className={s.link}><Email className={s.svg}/></a></div>

                </div>*/}



            </div>


        </div>
    );
};

export default About;
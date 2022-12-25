import React from 'react';
import s from './Skills.module.css'
import {MCardSkills} from "../CardSkills/CardSkills";
import {motion} from 'framer-motion'
import {ReactComponent as ReactIcon} from '../../assets/react.svg'
import {ReactComponent as ReduxIcon} from '../../assets/redux.svg'
import {ReactComponent as TypeIcon} from '../../assets/typescript.svg'
import {ReactComponent as JavaIcon} from '../../assets/javascript.svg'
import {ReactComponent as MaterialIcon} from '../../assets/material.svg'
import {ReactComponent as Html} from '../../assets/html.svg'
import {ReactComponent as Css} from '../../assets/css.svg'

const textAnimation = {
    hidden: {
        x: -100,
        opacity: 0
    },
    visible: (custom: any) => ({
        x: 0,
        opacity: 1,
        transition: {
            delay: custom * 0.2,
            ease: "linear",
            duration: 2
        }
    })
}
export const cardAnimation = {
    hidden: {
        y: 50,
        opacity: 0
    },
    visible: (custom: any) => ({
        y: 0,
        opacity: 1,
        transition: {delay: custom * 0.1}
    })
}

const Skills = () => {
    return (
        <motion.section
            initial='hidden'
            whileInView='visible'
            viewport={{amount: 0.2,once:true}}
            className={s.container}>


            <div className={s.skillsContainer} id={'skills'}>
                <div className={s.headerContainer}>
                    <motion.h3 custom={1} variants={cardAnimation} className={s.header}>
                        MY
                        <br/>
                        SKILLS
                    </motion.h3>

                </div>
                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{amount: 0.2,once:true}}
                    className={s.skills}>
                    <MCardSkills custom={2} variants={cardAnimation} name={'React'} shortName={'REACT'}
                                 Component={ReactIcon}/>
                    <MCardSkills custom={3} variants={cardAnimation} name={'Redux'} shortName={'REDUX'}
                                 Component={ReduxIcon}/>
                    <MCardSkills custom={4} variants={cardAnimation} name={'HTML'} shortName={'HTML'} Component={Html}/>
                    <MCardSkills custom={5} variants={cardAnimation} name={'TypeScript'} shortName={'TS'}
                                 Component={TypeIcon}/>
                    <MCardSkills custom={6} variants={cardAnimation} name={'JavaScript'} shortName={'JS'}
                                 Component={JavaIcon}/>
                    <MCardSkills custom={7} variants={cardAnimation} name={'Material UI'} shortName={'MUI'}
                                 Component={MaterialIcon}/>
                    <MCardSkills custom={8} variants={cardAnimation} name={'CSS'} shortName={'CSS'} Component={Css}/>


                </motion.div>
            </div>
        </motion.section>
    )
        ;
};

export default Skills;
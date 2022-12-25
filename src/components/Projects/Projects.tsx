import React, {useCallback, useState} from 'react';
import s from './Projects.module.css'

import {MCardProject} from "../CardProject/CardProject";
import {cardAnimation} from "../Skills/Skills";
import {motion} from 'framer-motion';
import ModuleCardProject from "../CardProject/ModuleCardProject/ModuleCardProject";

export type currentCardType = {
    header: string
    img: string
    linkDemo: string
    linkGit: string
    stack: string
}

const ListCardProject: currentCardType[] = [
    {
        header: 'Travelanywhere', img: '', linkDemo: '', linkGit: '', stack: ''
    },
    {
        header: 'todolist', img: '', linkDemo: '', linkGit: '', stack: ''
    },
    {
        header: 'social', img: '', linkDemo: '', linkGit: '', stack: ''
    },
    {
        header: 'calendar', img: '', linkDemo: '', linkGit: '', stack: ''
    },
]
const Projects = () => {
    const [open, setOpen] = React.useState(false);
    const [currentCard, setCurrentCard] = useState<currentCardType>(ListCardProject[0])


    const changeCurrentCard = useCallback((card: currentCardType) => setCurrentCard(card),[])
    const handleOpen = useCallback(() => setOpen(true), [])
    const handleClose = useCallback(() => setOpen(false), [])

    return (
        <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{amount: 0.2, once: true}}
            className={s.container}
            id='projects'>


            <div className={s.projectContainer}>
                <div className={s.headerContainer}>
                    <motion.h3
                        custom={1} variants={cardAnimation}
                        className={s.header}>
                        MY<br/>PROJECTS
                    </motion.h3>
                </div>

                <ModuleCardProject currentCard={currentCard} open={open} handleClose={handleClose}/>

                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{amount: 0.2, once: true}}
                    className={s.skills}>


                    {ListCardProject.map((el, index) => <MCardProject

                        key={index}
                        card={el}
                        handleOpen={handleOpen}
                        setCurrentCard={changeCurrentCard}
                        custom={index + 2} variants={cardAnimation}/>)}


                </motion.div>
            </div>
        </motion.div>
    );
};

export default Projects;
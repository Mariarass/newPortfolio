import React, {createRef, FC, forwardRef, useRef, useState} from 'react';
import s from './CardProject.module.css'
import styled from "styled-components";
import travel from '../../assets/travel.png'
import {motion} from "framer-motion";
import ModuleCardProject from "./ModuleCardProject/ModuleCardProject";
import {currentCardType} from "../Projects/Projects";


const LinkContainer = styled.div<{ showed: boolean }>`
  display: ${props => (props.showed ? 'flex' : 'none')};;
  position: absolute;
  border-radius: 20px;
  justify-content: center;
  height: 200px;
  width: 300px;
  gap: 20px;
  background-color: rgba(23, 43, 87, 0.34);
  align-items: center;
  transition: 0.1s ease-in-out;
  animation: show 0.2s 1;

  @media (max-width: 400px) {
    width: 280px;
  }

  @keyframes show {
    0% {
      opacity: 0;

    }

    100% {
      opacity: 1;

    }
  }


`

type CardProjectType = {
    card: currentCardType
    handleOpen: (value: boolean) => void
    setCurrentCard: (value: currentCardType) => void
}


export const CardProject: FC<CardProjectType> = forwardRef(({
                                                                card,
                                                                setCurrentCard,
                                                                handleOpen
                                                            }, ref: React.LegacyRef<HTMLDivElement> | undefined) => {

    const [linkMode, setLinkMode] = useState(false)

    const onClickCard = () => {
        handleOpen(true)
        setCurrentCard(card)
    }

    return (

        <div ref={ref} className={s.cardContainer} >


            <img src={travel} className={linkMode ? s.img + ' ' + s.imgHover : s.img}
                 onMouseEnter={() => setLinkMode(true)}


            />
            {linkMode && <LinkContainer showed={linkMode}
                                        onMouseLeave={() => setLinkMode(false)}>
            {/*    <button className={s.link} onClick={onClickCard}>information</button>*/}


                <a href='/' className={s.link}>
                    Demo
                </a>
                <a href='/' className={s.link}>
                    Code
                </a>

            </LinkContainer>}


        </div>
    );
})

export const MCardProject = motion(CardProject)
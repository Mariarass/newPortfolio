import { motion } from 'framer-motion';
import React from 'react';
import s from './Contact.module.css'

const Contact = () => {
    return (
        <div className={s.container}  >
            <div className={s.contactContainer}>
                <div className={s.headerContainer}>
                    <h3 className={s.header}>
                        CONTACT
                    </h3>
                </div>
                <form className={s.sendContainer}>

                    <input type='text' placeholder={'Your name'} className={s.input}/>
                    <input type='text'  placeholder={'Your email'} className={s.input}/>
                    <textarea  className={s.input+' '+s.textarea} > </textarea>
                  {/*  <div>
                        <button

                            className={s.button}>send</button>

                    </div>
*/}
                </form>

            </div>

        </div>
    );
};

export default Contact;
import React, { useState } from 'react';
import RichText from './RichText';
import { FaTrophy } from 'react-icons/fa';
import { createPortal } from 'react-dom';
import { IoIosClose } from 'react-icons/io';

const GiveawayResume = ({ title, richtext, image, finish, winner }) => {

    const [openModal, setOpenModal] = useState(false)

    const handleClick = () => {
        if (finish) {
            return
        } else {
            return setOpenModal(!openModal)
        }
    }

    return (
        <article className={finish ? 'giveaway__resume finished' : 'giveaway__resume'} onClick={handleClick}>
            <div className="overlay">
                <p className="winner"><FaTrophy /> {winner}</p>
            </div>
            <h2>{title}</h2>
            <img src={image} alt="Photo du lot à gagner" />
            <RichText richtext={richtext} />

            {openModal && createPortal(<div className='modal' onClick={() => setOpenModal(false)}>
                <div className='modal__content' onClick={(e) => e.stopPropagation()}>
                    <div className='column'>
                        <img src={image} alt="Photo du lot à gagner" />
                    </div>
                    <div className='column'>
                        <IoIosClose onClick={() => setOpenModal(false)}/>
                        <h2>{title}</h2>
                        <RichText richtext={richtext} />
                    </div>
                </div>
            </div>, document.body)}
        </article>
    );
};

export default GiveawayResume;
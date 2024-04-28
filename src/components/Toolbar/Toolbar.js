import { StyledLink, StyledToolbar, StyledButton, StyledLogo, StyledEndpoint, StyledCounter } from './Toolbar.styled'
import NavButton from '../NavButton/NavButton'
import PropTypes from 'prop-types'
import DailyChallenge from '../DailyChallenge/DailyChallenge';
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'


export default function Toolbar( { focusPage, pages, backClicks, startTitle, setStartTitle }) {
    // const [monkeyState, setMonkeyState] = useState(pages)

    const resetStartTitle = () => {
        setStartTitle('')
    }

    const linkRef = useRef(null)
    let destRight
    let monkeyDest

    if (linkRef.current) {
        monkeyDest = linkRef.current.getBoundingClientRect();
        destRight = monkeyDest.right;
    }

    return (
        <StyledToolbar >
            <StyledLink onClick={resetStartTitle} to={'/'} alt='wikiLinks site logo'/>
            <NavButton buttonText="back" focusPage={focusPage} pages={pages} />
            <StyledCounter ref={linkRef}>
                <h2 id='click-counter'>{`${pages.length + backClicks} Clicks`}</h2>
                {`🍌`}
            </StyledCounter>
                <motion.div
                    key={pages}
                    style={{left:`${destRight}px`}}
                    className="greedy-monkey"
                    animate={{y: [0, -100, 0]}}
                    transition={{delay: .5, type: "tween", duration: 3}}>
                        <img src='/assets/confused_monkey.svg' alt='Monkey Bro' />
                </motion.div>
            <div>
                <StyledEndpoint >
                    <h2>Start Point:</h2>
                     <p>{ pages.length > 0 && <p>{pages[0].title}</p> }</p>
                </StyledEndpoint>
                <StyledEndpoint >
                    <h2>Destination:</h2>
                    <p>Banana</p>
                </StyledEndpoint>
            </div>
        </StyledToolbar>
    )
}

Toolbar.propTypes = {
    pages: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        isCurrent: PropTypes.bool,
        isDisplayed: PropTypes.bool,
        stringForDOM: PropTypes.object,
        title: PropTypes.string
     })).isRequired,
}
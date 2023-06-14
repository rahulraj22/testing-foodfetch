import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
const TypeWriter = () => {
    /* Typing Animation */
    const [text] = useTypewriter({
        words: ["ReactJS", "Food API", "useEffect & useState hooks", "fetch function"],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 80,
    });
    return (
        <div>
            <h2>
                Concepts covered: {' '}
                <span style={{ fontWeight: 'bold', color: '#cd5ff8' }}>
                    {text}
                </span>
                <span style={{ color: 'red', fontSize: 28 }}>
                    <Cursor />
                </span>
            </h2>
        </div>
    )
}

export default TypeWriter
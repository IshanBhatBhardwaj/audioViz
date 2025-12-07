import {useEffect, useRef} from 'react'
import debouncedSetTimeout from '../utils/deboucedFunction'

const KeyBoard = ({keyRefs, debouncedFunctionForKey}) => {

      const keys = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
    ]

    for (var row of keys) {
        for (var char of row) {
            debouncedFunctionForKey[char] = debouncedSetTimeout((button) => button.classList.remove('active'), 150)
        }
    }

    useEffect(() => {

        const handleKeyPress = (e) => {
            e.preventDefault()

            if (keyRefs.current) {
                const key = e.key.toUpperCase()
                const button = keyRefs.current[key]

                if (button) {
                    button.classList.add('active')
                    debouncedFunctionForKey[key](button)
                }
            }
        }

        document.addEventListener('keydown',handleKeyPress)

        return (() => {
            document.removeEventListener('keydown', handleKeyPress)
        })
    })

    const importantKeys = new Set(['F', 'G'])
    return (
        <div className="keyBoard">
            {keys.map((row) => {
                return (
                    <div className="keyBoardRow">
                        {row.map(char => {
                            return (
                                <button 
                                ref={(el) => (keyRefs.current[char] = el)}
                                className={importantKeys.has(char) ? 'keyBoardRowChar importantKey' : 'keyBoardRowChar'}>
                                    {char}
                                </button>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default KeyBoard;

import {gsap} from 'gsap';
import {useRef} from 'react'


const PlayExample = ({keyRefs, debouncedFunctionForKey, backgroundRef, kanyeRef}) => {

    const playButtonRef = useRef(null)

    const sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    const bpm = 110
    const quarter = (60 / bpm) * 1000
    const eight = quarter / 2
    const sixteen = eight / 2
    const changeStart = quarter * 4 * 8.75

   const changeBackground = (backgroundRef) => {
    if (!backgroundRef.current || !kanyeRef.current) return

    const timeline = gsap.timeline()

    const colors = ['#08605f', '#678D58', '#CF5C36', '#FFC100']
    const messages = ['HARDER', 'BETTER', 'FASTER', 'STRONGER']
    for (let i = 0; i < 16; i +=1) {
        const index = i % 4
        setTimeout(() => {
            timeline.to(backgroundRef.current, { backgroundColor: colors[index], position: 0, duration: quarter/2000})
            timeline.to(kanyeRef.current, {
                position: 0,
                duration: quarter / 2000,
                onComplete: () => {kanyeRef.current.textContent = messages[index]}
            })
        }, changeStart + (quarter * i))
    }
    setTimeout(() => {timeline.to(kanyeRef.current, { opacity: 0, duration: quarter/1000})}, changeStart + (quarter * 17))
    setTimeout(() => {timeline.to(backgroundRef.current, { backgroundColor: 'white', duration: quarter/1000})}, changeStart + (quarter * 17))
  }

    const handlePlay = async () => {
        if (!keyRefs.current || !playButtonRef.current) return
        playButtonRef.current.classList.add('hide')

        const notes = [
            ['g', 'e'],['f', 'u'],['g', 'e'],['f', 'i'],['g', 'e'],['f', 'o'],['g', 'e'],['f', 'p'],
            ['g', 'e'],['f', 'u'],['g', 'e'],['f', 'i'],['g', 'e'],['f', 'o'],['g', 'e'],['f', 'o'],
            ['g', 'e'],['f', 'o'],['g', 'e'],['f', 'o',],['f', 'o', 'd'],['f', 'o', 'd'],['f', 'o', 'd'],['f', 'o', 'd'],
            ['f', 'o', 'd'],['f', 'o', 'd'],['f', 'o', 'd'],['f', 'o', 'd'],['f', 'o', 'd'],['f', 'o', 'd'],['f', 'o', 'd'],['f', 'o', 'd'],
            ['f', 'o', 'd'],['f', 'o', 'd'],['f', 'o', 'd'],['f', 'o', 'd'],['f', 'o', 'd'],['f', 'o', 'd'],['f', 'o', 'd'],['f', 'o', 'd'],
            ['f', 'o', 'd'],['f', 'o', 'd'],['f', 'o', 'd'],['f', 'o', 'd'],['f', 'o', 'd'],['f', 'o', 'd'],['f', 'o', 'd'],['f', 'o', 'd'],
            ['g', 'u'], ['g', 'i'],['g', 'o'],['g', 'p'], 
            ['q', 'u', 'g'], ['w', 'i', 'g'], ['e', 'o', 'g'], ['r', 'p', 'g'], ['q', 'u', 'g'], ['w', 'i', 'g'], ['e', 'o', 'g'], ['r', 'p', 'g'],  
            ['q', 'u', 'g'], ['w', 'i', 'g', 'd'], ['e', 'o', 'g'], ['r', 'p', 'g', 'd'], ['q', 'u', 'g'], ['w', 'i', 'g', 'd'], ['e', 'o', 'g'], ['r', 'p', 'g', 'd'],  

  
        ]
        const speed = [
            quarter,quarter,quarter,quarter,quarter,quarter,quarter,quarter,
            quarter,quarter,quarter,quarter,quarter,quarter,quarter,quarter,
            quarter,quarter,quarter,quarter,quarter,quarter,quarter,quarter,
            eight,eight,eight,eight,eight,eight,eight,eight,
            sixteen,sixteen,sixteen,sixteen,sixteen,sixteen,sixteen,sixteen,
            sixteen,sixteen,sixteen,sixteen,sixteen,sixteen,sixteen,sixteen,
            quarter,quarter,quarter,quarter,
            quarter,quarter,quarter,quarter,quarter,quarter,quarter,quarter,
            quarter,quarter,quarter,quarter,quarter,quarter,quarter,quarter
        ]

        changeBackground(backgroundRef)
        let idx = 0
        while (idx < notes.length) {
            for (const note of notes[idx]) {
                const button = keyRefs.current[note.toUpperCase()]
                if (button) {
                        button.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }));
                        button.classList.add('active')
                        debouncedFunctionForKey[note.toUpperCase()](button)
                    }
                } 
            await sleep(speed[idx])
            idx += 1
        }
    }

    return (
        <img className="playButton" onClick={handlePlay} ref={playButtonRef} src='/play.svg' alt={'Play Button, Click Me!'}/>
    )
}

export default PlayExample
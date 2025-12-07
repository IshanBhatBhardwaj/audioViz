import {useState, useEffect} from 'react'

const Title = ({colide}) => {
      const [titleIndex, setTitleIndex] = useState(0)
      const [isExiting, setIsExiting] = useState(false)


      useEffect(() => {
            const id = setInterval(() => {
                setIsExiting(true)
                setTimeout(() => {
                    setIsExiting(false)
                    setTitleIndex(Math.floor(Math.random() * titles.length));
                }, 2500)
            }, 30000)

            return (() => {
                clearInterval(id)
            })
        },[])
    
      const titles = [
        (c) => `q -> w -> e -> r -> u -> i -> o -> p`,
        (c) => `(q+u) -> (w+i) -> (e+o) + (r+p)`,
        (c) => `(g+w) -> (f+u) -> (g+w) -> (f+i) -> (g+w) -> (f+o) -> (g+w) -> (f+p)`,
        (c) => `Oh wow, ${c} hits already? Somebody’s been practicing cube Tinder.`,
        (c) => `${c} smacks later and the cubes still haven’t learned personal space.`,
        (c) => `At ${c} hits, those cubes are basically in a toxic relationship.`,
        (c) => `${c}? Respect. Those cubes are more committed than most people I know.`
      ];
    
      const displayedTitle = titles[titleIndex](colide)

      return (
        <div className="titleContainer">
            {displayedTitle.split("").map((char, i) => {
                return (
                    <span
                    key={i}
                    className={`char ${isExiting ? 'exit' : 'enter'}`}
                    style={{ animationDelay: `${i * 0.03}s` }}
                    >
                        {char}
                    </span>
                )
            })}
        </div>
      )
}

export default Title
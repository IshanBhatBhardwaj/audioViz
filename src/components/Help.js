import {useState} from "react"
import {ReactComponent as Menu} from '../menu.svg'

const Help = () => {

    const [moveMenuContainer, setMoveMenuContaier] = useState(false)
    
    return (
        <div className={`menuContainer ${moveMenuContainer ? 'moveMenuContainer' : ""}`}>
            <div className='bluredContainer'>
                <div className='menuText'>
                    <p>Welcome to Audio Box</p>
                    <p>Click these keys to hear cool beats and crash the cubes</p>
                    <p>W, A, S, D: Up, Left, Down, Right</p>
                    <p>W, A, S, D: Up, Left, Down, Right</p>
                    <p>More sounds, more crashes, more points</p>
                    <p>Click here for an example!</p>                    
                </div>
            </div>
            <div className='menu'>
                <Menu onClick={() => setMoveMenuContaier(prev => !prev)} />
            </div>
        </div>
    )

}

export default Help;
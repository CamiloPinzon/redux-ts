import { Child } from './Child'
import { ChildAsFC } from './Child';

const clicked = () => {
    console.log('clicked');
    
}

const Parent = () => {
    return (
        <>
        <Child color='red' onClick={clicked} />
        <ChildAsFC color='red' onClick={clicked}>
            Child as FC Text
        </ChildAsFC>
        </>
    )
}

export default Parent;
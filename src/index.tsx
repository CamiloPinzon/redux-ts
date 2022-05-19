import ReactDom from 'react-dom';

import GuestList from './state/GuestList';

const App = () => {
    return(
        <>
        <GuestList />
        </>
    )
}

ReactDom.render(<App />, document.querySelector('#root'));
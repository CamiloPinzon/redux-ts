import ReactDom from 'react-dom';

import GuestList from './state/GuestList';
import UserSearch from './state/UserSearch';

const App = () => {
    return(
        <>
        <GuestList />
        <hr />
        <UserSearch />
        </>
    )
}

ReactDom.render(<App />, document.querySelector('#root'));
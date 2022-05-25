import ReactDom from 'react-dom';

import GuestList from './state/GuestList';
import UserSearch from './state/UserSearch';
import EventComponent from './events/EventComponent';

const App = () => {
    return(
        <>
        <GuestList />
        <hr />
        <UserSearch />
        <hr />
        <EventComponent />
        </>
    )
}

ReactDom.render(<App />, document.querySelector('#root'));
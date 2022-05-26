import ReactDom from 'react-dom';

import GuestList from './state/GuestList';
import UserSearch from './state/UserSearch';
import EventComponent from './events/EventComponent';
import UserSearchRefs from './refs/UserSearchRefs';

const App = () => {
    return(
        <>
        <GuestList />
        <hr />
        <UserSearch />
        <hr />
        <EventComponent />
        <hr />
        <UserSearchRefs />
        </>
    )
}

ReactDom.render(<App />, document.querySelector('#root'));
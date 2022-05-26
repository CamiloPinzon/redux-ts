import { useState, useRef, useEffect } from "react";

interface UserInterface {
    name: string,
    age: number,
}

const users = [
    {name: 'Sarah', age: 20},
    {name: 'Alex', age: 20},
    {name: 'Michael', age: 20},
]

const UserSearchRefs: React.FC = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [name, setName] = useState('');
    const [user, setUser] = useState<UserInterface | undefined>();

    useEffect(()=>{
        inputRef.current && inputRef.current.focus();
    }, []);

    const findUser = () => {
        const foundUser = users.find((user) => {
            return user.name === name;
        });
        setUser(foundUser);
    }
    return(
        <>
        <h3>User Search useRef</h3>
        <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={findUser}>Find User</button>
        <div>
            {user && user.name}
            <br />
            {user && user.age}
        </div>
        </>
    )
}

export default UserSearchRefs;
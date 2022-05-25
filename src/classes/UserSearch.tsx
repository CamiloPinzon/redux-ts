import { Component } from "react";

interface UserInterface {
    name: string,
    age: number,
}

interface UserSearchProps {
    users: UserInterface[],
}

interface UserSearchState {
    name: string,
    user: UserInterface | undefined,
}


class UserSearchClass extends Component<UserSearchProps> {
    state: UserSearchState = {
        name: '',
        user: undefined,
    }
    
    findUser = () => {
        const foundUser = this.props.users.find((user) => {
            return user.name === this.state.name;
        });
        this.setState({user: foundUser});
    }

    render(){
        const { name, user } = this.state;
        return(
            <>
                <h3>User Search</h3>
                <input value={name} onChange={(e) => this.setState({name: e.target.name})} />
                <button onClick={this.findUser}>Find User</button>
                <div>
                    {user && user.name}
                    <br />
                    {user && user.age}
                </div>
            </>
        );
    }
}

export default UserSearchClass;
import React from 'react'
import axios from 'axios'
import UserdropdownShow from './user-dropdownshow';

class UserdropdownList extends React.Component {
    constructor() {
        super()
        this.state = {
            users: [],
            user: {}
        }
    }
    componentDidMount() {
        axios.get(`http://jsonplaceholder.typicode.com/users`)
            .then(response => {
                console.log(response.data)
                this.setState(() => ({
                    users: response.data
                }))
            })
    }

    handleChange = (e) => {
        const user = e.target.value
        console.log(user)
        this.setState(() => ({
            user: user
        }))
    }
    render() {
        return (
            <div>
                <form>
                    <select value={this.state.user} onChange={this.handleChange}>
                        <option value="">select</option>
                        {this.state.users.map(user => {
                            return <option key={user.id} value={user.id}>
                                {user.name}
                            </option>
                        })}

                    </select>
                </form>
                {Object.keys(this.state.user).length > 0 && <UserdropdownShow user={this.state.user}/>}
            </div>
        )
    }
}
export default UserdropdownList
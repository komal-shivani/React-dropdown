import React from 'react';
import ReactDOM from 'react-dom';
import UserdropdownList from './user-dropdownlist'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

 class App extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
               
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">React UI</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        {/* <Nav className="ml-auto" navbar> */}
                    </Collapse>
                </Navbar>
                <UserdropdownList />
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));



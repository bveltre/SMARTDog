import React, {Component} from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

class CustomerFormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newUser: {
                firstName: '',
                lastName: '',
                email: '',
                dogName: '',
                dogBreed: '',
            },
        };
        this.handleFirstName = this.handleFirstName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleDogName = this.handleDogName.bind(this);
        this.handleDogBreed = this.handleDogBreed.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleFormClear = this.handleFormClear.bind(this);
    }
    
    handleFirstName(event) {
        let value = event.target.value;
        this.setState (function(prevState) {
            return {
                newUser: {
                    // Keep previous state of newUser, only add
                    // the new field (firstName). ... syntax collects all
                    // the previous fields of newUser if they exist.
                    ...prevState.newUser,
                    firstName: value,
                }
            }
        });
    }

    handleLastName(event) {
        let value = event.target.value;
        this.setState (function(prevState) {
            return {
                newUser: {
                    // Keep previous state of newUser, only add
                    // the new field (lastName). ... syntax collects all
                    // the previous fields of newUser if they exist.
                    ...prevState.newUser,
                    lastName: value,
                }
            }
        });
    }

    handleEmail(event) {
        let value = event.target.value;
        this.setState (function(prevState) {
            return {
                newUser: {
                    // Keep previous state of newUser, only add
                    // the new field (email). ... syntax collects all
                    // the previous fields of newUser if they exist.
                    ...prevState.newUser,
                    email: value,
                }
            }
        });
    }

    handleDogName(event) {
        let value = event.target.value;
        this.setState (function(prevState) {
            return {
                newUser: {
                    // Keep previous state of newUser, only add
                    // the new field (dogName). ... syntax collects all
                    // the previous fields of newUser if they exist.
                    ...prevState.newUser,
                    dogName: value,
                }
            }
        });
    }

    handleDogBreed(event) {
        let value = event.target.value;
        this.setState (function(prevState) {
            return {
                newUser: {
                    // Keep previous state of newUser, only add
                    // the new field (breed). ... syntax collects all
                    // the previous fields of newUser if they exist.
                    ...prevState.newUser,
                    dogBreed: value,
                }
            }
        });
    }

    handleFormSubmit(event) {
        event.preventDefault();
        let userData = this.state.newUser;
        console.log(userData);
    }

    handleFormClear(event) {
        event.preventDefault();
        this.setState(
            {
                newUser: {
                    firstName: '',
                    lastName: '',
                    email: '',
                    dogName: '',
                    dogBreed: '',
                },
            }
        );
    }

    render() {
        return (
            <form className='container-fluid'
        onSubmit={this.handleFormSubmit}>
                <Input
                    inputtype={'text'}
                    title={'First Name'}
                    name={'firstName'}
                    value={this.state.newUser.firstName}
                    placeholder={''}
                    handleChange={this.handleFirstName}
                />
                <Input
                    inputtype={'text'}
                    title={'Last Name'}
                    name={'lastName'}
                    value={this.state.newUser.lastName}
                    placeholder={''}
                    handleChange={this.handleLastName}
                />
                <Input
                    inputtype={'email'}
                    title={'Email'}
                    name={'email'}
                    value={this.state.newUser.email}
                    placeholder={''}
                    handleChange={this.handleEmail}
                />
                <Input
                    inputtype={'text'}
                    title={'Dog\'s Name'}
                    name={'dogName'}
                    value={this.state.newUser.dogName}
                    placeholder={''}
                    handleChange={this.handleDogName}
                />
                <Input
                    inputtype={'text'}
                    title={'Dog\'s Breed'}
                    name={'dogBreed'}
                    value={this.state.newUser.dogBreed}
                    placeholder={''}
                    handleChange={this.handleDogBreed}
                />
                <Button
                    action={this.handleFormSubmit}
                    type={'primary'}
                    title={'Submit'}
                />
                <Button
                    action={this.handleFormClear}
                    type={'secondary'}
                    title={'Clear Form'}
                />
            </form>
        )
    }

}

export default CustomerFormContainer;
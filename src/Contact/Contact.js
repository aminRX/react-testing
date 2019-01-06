import React, {Component} from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

class Contact extends Component {
    constructor (props) {
        super (props)
        this.handleAddContact = this.handleAddContact.bind(this);
        this.state = {
            contactList: [{
                name:'Amin Ogarrio',
                email:'blabla@gmail.com',
                phoneNumber:'5555555555',
                urlImage:'http://pogledaj.to/wp-content/uploads/archive/facebook_avatar_01.jpg'
            }, {
                name:'Oscar Ruiz',
                email:'blublu@gmail.com',
                phoneNumber:'66666666666',
                urlImage:'http://pogledaj.to/wp-content/uploads/archive/facebook_avatar_01.jpg'
            }],
            defaultImage: 'http://pogledaj.to/wp-content/uploads/archive/facebook_avatar_01.jpg'
        }
    }

    handleAddContact(contact) {
        this.setState({ 
            contactList: this.state.contactList.concat([contact])
          })
    }

    render() {
        return (
            <div class="row">
                <div class="col-md-4">
                    <ContactForm defaultImage={this.state.defaultImage} addContact={this.handleAddContact}/>
                </div>
                <div class="col-md-8">
                    <ContactList defaultImage={this.state.defaultImage} contactItems={this.state.contactList}/>
                </div>
            </div>

        );
    }
}
export default Contact;
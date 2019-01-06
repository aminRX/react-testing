import React, {Component} from 'react';
import Contact from './Contact';

let styles = {
    imgSize: {
        height: '100px',
        width: '100px',
        margin: '10px'
    },
    borderStyle: {
        borderStyle: "solid",
        marginBottom: "10px"
    }
}

class ContactList extends Component {
    render() {
        return (
         <div>
            <ContactListHeader header="Lista de contactos" />
            <ContactListRender contactItems={this.props.contactItems}/>
         </div>   
        )
    }
        
}

function ContactListHeader (props){
    return (
        <div class="row">
            <h1 className="pull-left">{props.header}</h1>
            <button type="button9" class="btn btn-secondary pull-right">Archivados</button>
        </div>
    )
}

function ContactListRender (props) {
    return (
        <div >
                {
                    props.contactItems.map((contact) =>{
                        return <ContactItem name={contact.name} phoneNumber={contact.phoneNumber} email={contact.email} urlImage={contact.urlImage}/>
                    })
                }
        </div>
    )
}
function archive(props) {
    
}

function ContactItem (props) {
    return (
        <div style={styles.borderStyle} >
            <div class="row">
                <div class="col-md-2">
                    <img style={styles.imgSize} src={props.urlImage} />
                </div>
                <div class="col-md-8">
                    <p>Nombre:{props.name}</p>
                    <p>telefono:{props.phoneNumber}</p>
                    <p>Email:{props.email}</p>
                </div>
                <div class="col-md-2">
                <button><i class="fas fa-edit pull-right" style={{margin: "5px"}}></i></button>
                <button><i class="fas fa-trash-alt pull-right" style={{margin:"5px"}}></i></button>
                </div>
            </div>
        </div>
    )
}
export default ContactList;

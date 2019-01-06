import React, {Component} from 'react';

class ContactForm extends Component {

    constructor(props){
        super (props)
        this.state = {
            name: '',
            phoneNumber:'',
            email:'',
            urlImage:''
        }
    this.handleInput1Change=this.handleInput1Change.bind(this);
    this.handleInput2Change=this.handleInput2Change.bind(this);
    this.handleInput3Change=this.handleInput3Change.bind(this);
    this.handleInput4Change=this.handleInput4Change.bind(this);
    }
    
    styles = {
        imgSize: {
            height: '100px',
            width: '100px'
        }
    }
    setResult(data){
        this.setState((state, props)=>{
            return {
                name:data
            }
        });
    }
    setResult2(data){
        this.setState((state, props)=>{
            return {
                phoneNumber:data
            }
        });    
    }
    setResult3(data){
        this.setState((state, props)=>{
            return {
                email:data
            }
        });    
    }
    setResult4(data){
        this.setState((state, props)=>{
            return {
                urlImage:data
            }
        });    
    }

    handleInput1Change(e) {
        let nombre= e.target.value;
        console.log(nombre);
        this.setState({
            name:nombre
        }, ()=>{
            this.setResult(this.state.name)
        }
        )
    }

    handleInput2Change(e) {
        let celular = e.target.value;
        console.log(celular);
        this.setState({
            phoneNumber:celular
        })
    }
    
handleInput3Change(e){
    let mail = e.target.value;
    console.log (mail);
    this.setState({
        email:mail
    })
}
handleInput4Change(e) {
    let urlImagen= e.target.value ;
    console.log (urlImagen);
    this.setState({
        urlImage:urlImagen
    })
}


    render () {
        return (
            <div>
                <div class= "row">
                    <img class="pull-right" style={this.styles.imgSize} src={this.props.defaultImage} />
                </div>
                <div class="row">
                    <form>
                        <div class="form-group">
                            <label>Nombre</label>
                            <input type="text" value = {this.state.name} class="form-control" onChange={this.handleInput1Change}/> 
                        </div>
                        <div class="form-group">
                            <label>Numero telefonico</label>
                            <input type="text" value={this.state.phoneNumber} class="form-control"onChange={this.handleInput2Change}/> 
                        </div>
                        <div class="form-group">
                            <label>Email</label>
                            <input type="text" value={this.state.email} class="form-control"onChange={this.handleInput3Change}/> 
                        </div>
                        <div class="form-group">
                            <label>Url imagen</label>
                            <input type="text" class="form-control" onChange={this.handleInput4Change}/> 
                        </div>
                            <button type="button" class="btn btn-primary pull-right" onClick={() => this.props.addContact(this.state)}>Agregar</button>
                    </form>
                </div>
            </div>

        )
    }
}
export default ContactForm;
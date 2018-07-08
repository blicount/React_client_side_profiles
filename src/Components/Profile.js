import React, {Component} from 'react'
import MdDelete from 'react-icons/lib/md/delete'
import MdEdit from 'react-icons/lib/md/edit'
import MdSave from 'react-icons/lib/md/save'


class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing:false
    }
    this.edit = this.edit.bind(this);
    this.delete = this.delete.bind(this);
    this.save = this.save.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.renderUI   = this.renderUI.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }
    
  renderForm() {
    return (
       <div>
        <form onSubmit={this.save}>
          <textarea ref={
            (input) => {
              this.newProfile=input;
            }
          }/>
          <button><MdSave onClick={this.save}/></button>
        </form>
      </div>
    )
  }

  renderUI() {
    return (
      <div className='profile'>
          <div>{this.props.children}</div>
          <span>
            <button className="btn btn-primary" style={{marginRight:7+'px'}} onClick={this.edit}><MdEdit/></button>
            <button className="btn btn-primary" onClick={this.delete}><MdDelete/></button>
          </span>
        </div>
    );
  }

  handleChange(event){
    this.setState({story: event.target.value});
  }

  edit() {
    this.setState({
      editing:true
    });
  }

 save(e) {
    e.preventDefault();
    this.props.onChange(this.newProfile.value,this.props.index);
    this.setState({
      editing:false
    })
  }
    
 delete(e) {
    alert('"deleted" (; ')
  }
    
  render() {
      return (
        this.state.editing ? this.renderForm() : this.renderUI()
      )
  }
}
export default Profile
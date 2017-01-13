import React from 'react';
import validation from '../services/validation'

class FormField extends React.Component {
    constructor() {
      super();
      this.state = {
		    valid: false
      };
      this.onFieldChange = this.onFieldChange.bind(this);
    }

    onFieldChange(e) {
      let check = validation(this.props.validationType, e.target.value);
      
      this.props.changes(check, e.target.value);

	    this.setState({
        valid: check
      })
   }

    render() {
        return (
            <div className="field">
                <input
                  onChange={this.onFieldChange}
                  id={this.props.inputId}
                  type={this.props.type}
                  title={this.props.hintText}
                  placeholder={this.props.placeholder}
                  autoFocus={this.props.autoFocus} 
                />
                <span id={this.props.hintId} 
					            className={"form_hint "+(this.state.valid ? "" : "notvalid")}>
                  {this.props.hintText}
                </span>
            </div>
        );
    }
}
    
export default FormField;
import React, { Component } from 'react';
/* import { Link } from 'react-router';*/

class PhotoEdit extends Component {
  constructor() {
    super();
      this.state = {
        imgSrc: ''
      };
  }

    readURL(event) {
      let input = event.nativeEvent.target;
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = (e) => {
              this.setState({
                 imgSrc: e.target.result
              })
            }
            
          reader.readAsDataURL(input.files[0]);
        }
    }
       
  render() {
    return (
      <div>
        <h2>Редактирование фото </h2>
        <form>
          <div className="field">   
            <label htmlFor="f1"> Выберите фото для аватара:</label>
            <input onChange={this.readURL.bind(this)} id="f1" type="file" name="edit" />
          </div>
          <fieldset id="submit">
              <input type="submit" value="Сохранить" className="button" />
          </fieldset>   
        </form>
        <img id="prof-preview" src={this.state.imgSrc} alt="prof-img"/>
      </div>
    );
  }
}

export default PhotoEdit;
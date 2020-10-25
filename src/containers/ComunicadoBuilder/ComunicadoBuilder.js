import React, {Component} from 'react';

import classes from './ComunicadoBuilder.module.css';
import ElementAddButtons from '../../components/ElementAddButtons/ElementAddButtons';
import DocBuilder from '../DocBuilder/DocBuilder';

class ComunicadoBuilder extends Component {
  state = {
    preview: false,
    elements: [
      {id: 1, type: 'snippet', content: null},
      {id: 2, type: 'longTitle', content: null},
      {id: 3, type: 'longDescription', content: null}
    ]
  }

  elementAdditionHandler = (inputType) => {
    const elements = [...this.state.elements];
    const lastElement = elements[elements.length - 1];
    const newId = lastElement.id + 1;
    elements.push({id:newId, type: inputType, content: null } );
    this.setState({elements: elements});
  }

  clearHandler = () => {
    let prevState = {...this.state}
    prevState.elements = [
      {id: 1, type: 'snippet', content: null},
      {id: 2, type: 'longTitle', content: null},
      {id: 3, type: 'longDescription', content: null}
    ]
    this.setState({elements: prevState.elements})
    console.log(this.state.elements);
  }

  sendHandler = () => {
    console.log('sent');
  }

  render () {

    return (
      <div className={classes.Main}>
        <div className={classes.ElementAddButtons}>
          <ElementAddButtons
            elementAdded={this.elementAdditionHandler}
            sendClicked={this.sendHandler}
            clearClicked={this.clearHandler}/>
        </div>
        <div className={classes.DocBuilder}>
          <DocBuilder
            elementsArray={this.state.elements}/>
        </div>
      </div>
    )
  }
}

export default ComunicadoBuilder;

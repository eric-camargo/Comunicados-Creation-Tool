import React, { Component } from 'react';

import classes from './DocBuilder.module.css';
import DocElements from '../../components/DocElements/DocElements';

class DocBuilder extends Component {


  render () {
    return (
      <form className={classes.DocBuilder}>
        {this.props.elementsArray.map(el => (
          <DocElements
            key={el.id}
            docType={el.type}
            docContent={el.content}
            changed={(event) => this.contentChangeHandler(event, el.id)} />
          ))}

      </form>
    )
  }
}

export default DocBuilder;

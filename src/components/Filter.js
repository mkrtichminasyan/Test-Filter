import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';

class Filter extends Component {
constructor(props) {
  super(props)
}

  render() {
    console.log(this.props)
    const {handleCheckbox, checkedList} = this.props
    return (
      <div className="checkboxes">
        <Checkbox checked={checkedList.name} name="name" onChange={handleCheckbox} />
        <label>Name</label>
        <Checkbox checked={checkedList.age} name="age" onChange={handleCheckbox} />
        <label>Age</label>
      </div>
    );
  }
}

export default Filter;
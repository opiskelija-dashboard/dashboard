import React, { Component } from 'react';
import {connect} from 'react-redux';
import CodeMirror from 'react-codemirror';
import '../../node_modules/codemirror/lib/codemirror.css';
import 'codemirror/mode/ruby/ruby';
import { Button } from 'semantic-ui-react';


class BadgeCreatorContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: 'def f(user_id, all_points)\n\t# don\'t modify function definition\n\t# insert code below\n\n\nend'
    }
  }

  updateCode = input => {
    this.setState({
      code: input
    })
  }

  getBadgeName() {
    let codeArray = this.state.code.split(/[ (]/);
    return codeArray[1];
  }

  saveBadgeCriteria() {
    alert(this.getBadgeName())
  }

  render() {
    let codeOptions = {
      lineNumbers: true,
      tabSize: 2
    }


    return (
      <div>
        <CodeMirror
          mode='ruby'
          value={this.state.code}
          onChange={this.updateCode}
          options={codeOptions}
        />
        <Button
          onClick={() => this.saveBadgeCriteria()}
        >
          Tallenna uusi badge
        </Button>
      </div>

    )
  }
}

//redux
const mapStateToProps = state => {

}

const mapDispatchToProps = dispatch => {

}

export default connect(mapStateToProps, mapDispatchToProps)(BadgeCreatorContainer);

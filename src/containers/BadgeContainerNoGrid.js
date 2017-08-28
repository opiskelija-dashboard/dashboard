import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Badge } from '../components/Badge'

class BadgeContainerNoGrid extends Component {


  render() {
    return(
      <div style={{display: 'grid'}}>
        <Badge icon={'TiAdjustBrightness'} />
      </div>
    )
  }

}

const mapStateToProps = state => {
  return null;
}

const mapDispatchToProps = dispatch => {
  return null;
}

export default connect(mapStateToProps, mapDispatchToProps)(BadgeContainerNoGrid);

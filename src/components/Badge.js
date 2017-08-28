import React from 'react';
import * as TiIconPack from 'react-icons/lib/ti'

// import TiCode from 'react-icons/lib/ti/code'

export const Badge = props => {
  const Icon = TiIconPack[props.icon]

  console.log(props)
  return (
    <div style={{}}>
      <div style={{padding: '5px'}}>
        <Icon size={props.size} />
      </div>

      <strong>{props.name}</strong>
      <hr/>
      <p>{props.text}</p>
    </div>
  )
}

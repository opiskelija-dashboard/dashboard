import React from 'react';
import * as TiIconPack from 'react-icons/lib/ti'

// import TiCode from 'react-icons/lib/ti/code'

export const Badge = props => {
  const Icon = TiIconPack[props.icon]

  return (
    <div className="">
      <Icon size={40} />
      <strong>{props.name}</strong>
    </div>
  )
}

import React from 'react';
import Avatar from '@material-ui/core/Avatar';

export default function Avatars(props) {

  return (
    <div>
      {console.log(props.alt)}
      <Avatar  alt={props.alt} src={props.src} />
    </div>
  );
}


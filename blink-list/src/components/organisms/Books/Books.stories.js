import React from 'react';
import Books from './Books';
export default {
    title:"organisms/Books"
};
const Template = (args) => <Books {...args} />;

export const Primary = Template.bind({});

Primary.args={
  authenticationStatus:{
    isAuthenticated:false
  }
}



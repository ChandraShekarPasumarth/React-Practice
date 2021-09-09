import React from 'react';
import Form from './Form';

export default {
    title: 'Organisms/Form',
    component: Form,
    argTypes:{
    variant: {
        control: {
          type: 'radio',
          options: ['filled', 'standard','outlined']
        }
      }
    }
    
};

const Template = (args) => <Form {...args} />;

export const PrimaryForm = Template.bind({});

PrimaryForm.args={
  parentFunction : ()=>{
    console.log("Handle Form");
  }
}
import React from 'react';
import Explore from './Explore';

export default {
    title: 'organisms/Explore',
};

const Template = (args) => <Explore {...args} />;

export const Default = Template.bind({});

Default.args={
    cateClick:(data)=>{
        console.log(data);
    },
    click:() =>{
        console.log(" ");
    }
}

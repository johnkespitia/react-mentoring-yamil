import React from 'react';
import Nav from './Nav'

export default {
    title: 'Yamil/Nav',
    component: Nav,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  };

  const Template = (args) => <Nav {...args} />;
  export const Primary = Template.bind({});
  Primary.args = {
    variant: 'blue',
    size: 30
 };
 export const Secondary = Template.bind({});

 Secondary.args = {
    variant: 'green',
    size: 25
 };
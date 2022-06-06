import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { SomeComponent } from '../app/components/SomeComponent';

export default {
  title: 'MyComponents/SomeComponent',
  component: SomeComponent,
} as ComponentMeta<typeof SomeComponent>;

const Template: ComponentStory<typeof SomeComponent> = args => <SomeComponent {...args} />;

export const Primary = Template.bind({});

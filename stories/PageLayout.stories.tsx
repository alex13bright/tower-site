import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { PageLayout } from '~/components/page-layout/PageLayout';

export default {
  title: 'MyComponents/SomeComponent',
  component: PageLayout,
  argTypes: {},
} as ComponentMeta<typeof PageLayout>;

const Template: ComponentStory<typeof PageLayout> = args => <PageLayout {...args} />;

export const Primary = Template.bind({});

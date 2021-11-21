// Button.stories.ts | Button.stories.tsx

import React from 'react'

import { Story, Meta } from '@storybook/react'

import { ExampleComponent } from './'

export default {
  component: ExampleComponent,
  title: 'components/ExampleComponent',
} as Meta

const Template: Story = (args) => <ExampleComponent {...args} />

export const Default = Template.bind({})

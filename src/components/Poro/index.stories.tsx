import React from 'react'

import { Meta, Story } from '@storybook/react'

import { Poro } from '.'

export default {
  component: Poro,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

const Template: Story = () => <Poro />

export const Default = Template.bind({})

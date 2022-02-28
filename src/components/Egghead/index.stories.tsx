import React from 'react'

import { Meta, Story } from '@storybook/react'

import { Egghead } from '.'

export default {
  component: Egghead,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

const Template: Story = () => <Egghead />

export const Default = Template.bind({})

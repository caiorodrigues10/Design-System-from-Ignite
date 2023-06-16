import type { StoryObj, Meta } from '@storybook/react'
import { AvatarProps, Avatar } from '@ignite-ui/react'

export default {
  type: 'Data Display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/caiorodrigues10.png',
    alt: 'Caio H. Rodrigues',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}

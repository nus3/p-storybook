export const createPublicPath = (path: string): string => {
  return process.env.STORYBOOK_MODE === 'true' ? `.${path}` : path
}

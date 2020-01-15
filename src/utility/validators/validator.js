export const required = (value) => value ? undefined : 'Must be completed'

export const maxLengthCreator = (maxLength) => (value) => value.length > maxLength ? `Maximum ${maxLength} characters` : undefined
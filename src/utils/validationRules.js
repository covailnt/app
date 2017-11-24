export default {
  required: {
    test: value => {
      return value.toString().trim().length > 0
    },
    hint: () => {
      return '*Required'
    },
  },
  email: {
    test: value => {
      const base = value.toString().trim()
      const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

      return re.test(base)
    },
    hint: () => {
      return 'Please check email format'
    },
  },
  newPassword: {
    test: value => {
      const base = value.toString().trim()

      return base.length > 7
    },
    hint: () => {
      return 'Password needs to be 8 characters or longer'
    },
  },
}

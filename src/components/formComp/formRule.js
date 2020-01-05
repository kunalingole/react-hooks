export const formRule = {
    email:{
        required: "This is required",
        pattern: {
          value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
          message: "Invalid email address"
        }
      }, 
      password:{
        required: "This is a required",
        minLength: {
          value: 5,
          message: "Min length is 5"
        }
      }
  };
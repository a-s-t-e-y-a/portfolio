class notfound extends Error {  
    constructor (message) {
      super(message)
      Error.captureStackTrace(this, this.constructor);
  
      this.name = this.constructor.name
      this.status = 404
    }
  
    statusCode() {
      return this.status
    }
  }

  class authError extends Error {  
    constructor (message) {
      super(message)
      Error.captureStackTrace(this, this.constructor);
  
      this.name = this.constructor.name
      this.status = 401
    }
  
    statusCode() {
      return this.status
    }
  }
  module.exports = authError  

  class internalError extends Error {  
    constructor (message) {
      super(message)
      Error.captureStackTrace(this, this.constructor);
  
      this.name = this.constructor.name
      this.status = 401
    }
  
    statusCode() {
      return this.status
    }
  }
  module.exports = internalError 


  class someError extends Error {  
    constructor (message) {
      super(message)
      Error.captureStackTrace(this, this.constructor);
  
      this.name = this.constructor.name
      this.status = 401
    }
  
    statusCode() {
      return this.status
    }
  }
  module.exports = someError 
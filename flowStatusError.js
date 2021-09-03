class FlowError extends Error {
    constructor({message, rawError = {}}) {
      super(message); // (1)
      this.name = "FlowError"; // (2)
      this.rawError = rawError

    }
  }

  module.exports = {FlowError}
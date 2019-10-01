class Logger {
    constructor() {
      if (typeof Logger.instance === 'object') {
        return Logger.instance;
      }
      Logger.instance = this;
      return this;
    }

    log (msg) {
        console.log(`Log> ${msg}`);
    }
  }
  
  export default Logger;
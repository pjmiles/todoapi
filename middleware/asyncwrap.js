const asyncWrapper = (fn) => {
    return async (error = {}, req, res, message, statusCode = 500) => {
      try {
        res.status(statusCode).json({
        success: false,
        message,
        error: {
          statusCode,
          message,
          error,
        }
        })
        await fn(req, res);
      } catch (error) {
        next(error);
      }
    };
  };
  
  module.exports = asyncWrapper;
  
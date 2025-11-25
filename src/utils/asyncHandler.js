const asynchHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((error) =>
      next(error)
    );
  };
};

export { asynchHandler };

// const asynchHandler = (fn) => async(req,res,next)=> {
//   try {
//     await fn(req,res,next);
//   }catch (error) {
//     res.status(error.code || 500).json({
//       success: false,
//       message: error.message || "Internal Server Error",
//     });
//   }
// }

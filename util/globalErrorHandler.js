// middlewares/errorHandler.js
const errorHandler = (err, req, res, next) => {
    console.error("❌ Global Error:", err);

    // Default HTTP status and message
    let statusCode = err.statusCode || 500;
    let message = err.message || "Internal Server Error";

    // Return error response
    res.status(statusCode).json({
        success: false,
        message,
        stack: process.env.NODE_ENV === "development" ? err.stack : undefined, // Show stack only in development
    });
};

module.exports = errorHandler;

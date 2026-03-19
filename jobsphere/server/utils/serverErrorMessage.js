const serverError = (res, err) => {
    const message = err.message || "Internal server error"
    const status = err.statusCode || 500

    console.error(err)
    res.status(status).json({ message })
}

export default serverError
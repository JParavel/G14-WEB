export default (req, res, next) => {
    console.log("Middleware");
    next()
}
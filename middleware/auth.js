export const requireAuth = (req, res) => {
    if (!req.session.userId) {
        return res.redirect('/')
    }
    next();
}
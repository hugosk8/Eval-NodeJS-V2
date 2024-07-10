const requireAuth = (req, res, next) => {
    console.log('User not authenticated, redirecting to login');
    if (!req.session.userId) {
        return res.redirect('/login')
    }
    next();
}

export default requireAuth;
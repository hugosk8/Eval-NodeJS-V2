export const renderLoginPage = (req, res) => {
    res.render('login', { title: 'Connexion' });
}

export const renderRegisterPage = (req, res) => {
    res.render('register', { title: 'Création d\'un compte' });
}
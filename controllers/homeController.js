export const renderGuestHome = (req, res) => {
    res.render('guest_home', { title: 'Accueil Guest'});
}

export const renderAdminHome = (req, res) => {
    res.render('admin_home', { title: 'Accueil Admin'});
}
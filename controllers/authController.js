import User from "../models/UserModel.js";
import bcrypt from "bcryptjs";

export const renderLoginPage = (req, res) => {
    res.render('login', { title: 'Connexion' });
}

export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Email ou mot de passe incorrect' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Email ou mot de passe incorrect' });
        }

        req.session.userId = user._id;

        res.redirect('/admin');
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log(error.message);
    }
}

export const renderRegisterPage = (req, res) => {
    res.render('register', { title: 'Création d\'un compte' });
}

export const registerUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existignUser = await User.findOne({ email });
        if (existignUser) {
            return res.status(400).json({ message: 'Email déja utilisé' })
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: 'Utilisateur créé avec succès'});
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log(error.message);
    }
}

export const logoutUser = async (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ error: 'failed to logout' });
        }
        res.redirect('/');
    })
}
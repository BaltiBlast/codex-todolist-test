const loginPage = (_req, res) => {
  res.render('auth/login', { title: 'Connexion - Tododex' });
};

const registerPage = (_req, res) => {
  res.render('auth/register', { title: 'Inscription - Tododex' });
};

export { loginPage, registerPage };

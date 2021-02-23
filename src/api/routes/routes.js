const userRoutes = require('../components/users/network');
const authRoutes = require('../components/auth/network');

const routes = (app) => {
    app.use('/api/user', userRoutes);
    app.use('/api/auth', authRoutes);
}

module.exports = routes;
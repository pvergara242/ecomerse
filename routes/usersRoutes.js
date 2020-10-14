
const express = require(express);
const router = express.router();

router.post('/api/v1/users/login', login);
router.post('/api/v1/users/update-password', updatePassword);
router.post('/api/v1/users/logout', logout);
router.post('/api/v1/users/reset-password', resetPassword);
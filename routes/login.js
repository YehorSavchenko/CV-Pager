var express = require('express');
var router = express.Router();

const mysql = require('mysql2');

// Setup database connection
const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'blog_articles'
});

db.connect();

router.get('/', function (req, res) {
    res.locals.req = req;
    res.render('login',{
        intro: "../#top",
        about: "../#about",
        portfolio: "../#portfolio",
        experience: "../#experience",
    });
});

router.get('/logout', function(req, res) {
    req.session.destroy(function(err) {
        if (err) {
            console.log('Error while logging out:', err);
            return res.send("There was an error logging out.");
        }
        res.redirect('/login'); // Redirect to login page after logout
    });
});


router.post('/', function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const sql = 'SELECT * FROM admin_users WHERE username = ? AND password = ?';
    db.query(sql, [username, password], (error, results) => {
        if (error) {
            console.error('Database error:', error);
            return res.sendStatus(500);
        }
        if (results.length > 0) {
            req.session.adminLoggedIn = true;
            res.redirect('/blog-admin');
        } else {
            // Login failed
            res.render('login', { message: 'Invalid username or password' });
        }
    });
});

module.exports = router;
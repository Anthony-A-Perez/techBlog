# techBlog

The Tech Blog App is a web application that allows users to create an account, log in, create and delete blog posts, and comment on posts. It utilizes MySQL for the database, bcrypt for password hashing, Express as the web framework, Handlebars as the templating engine, Express Session for user session management, and Sequelize as the ORM.

## Installation

1. Clone the repository: `git clone https://github.com/Anthony-A-Perez/techBlog.git`
2. Navigate to the project directory: `cd tech-blog-app`
3. Install the dependencies: `npm install`
4. Set up the MySQL database:
   - Create a MySQL database.
   - Update the `config/config.json` file with your database credentials.
5. Run the database migrations: `npx sequelize-cli db:migrate`
6. Start the application: `npm start`

## Usage

1. Open your web browser and navigate to `http://localhost:3001`.
2. Sign up for a new account or log in with your existing credentials.
3. On the homepage, you can view the existing blog posts.
4. To create a new post, click on the "New Post" button and fill in the required information.
5. To delete a post, go to the post's page and click on the "Delete" button.
6. To comment on a post, go to the post's page and enter your comment in the provided form.
7. To log out, click on the "Log Out" button.

## Deployment

<https://tech-blog-ap.herokuapp.com/>

## Dependencies

The following dependencies are used in this project:

- [bcrypt](https://www.npmjs.com/package/bcrypt): Password hashing library for securing user passwords.
- [express](https://expressjs.com/): Fast, unopinionated, minimalist web framework for Node.js.
- [express-session](https://www.npmjs.com/package/express-session): Simple session middleware for Express.
- [handlebars](https://handlebarsjs.com/): Semantic templating engine for rendering dynamic HTML templates.
- [mysql2](https://www.npmjs.com/package/mysql2): MySQL client for Node.js.
- [sequelize](https://sequelize.org/): Promise-based ORM for Node.js, supporting MySQL and other databases.

## Contributing

Contributions to the Tech Blog App are welcome! If you find a bug or have a suggestion for improvement, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Contact

If you have any questions or need assistance with the Tech Blog App, please contact.

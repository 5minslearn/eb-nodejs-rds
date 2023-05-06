# AWS Elastic Beanstalk Sample App with RDS
This sample application uses the [Express](https://expressjs.com/) framework and [RDS](https://aws.amazon.com/rds/) to build a basic web application with a database. This application allows users to record hiking logs.

This source bundle can be deployed to Elastic Beanstalk by following this blog

This source bundle can be ran locally using the following steps:
  1. Install Node to your machine, if you haven't already. You can download node from nodejs.org [here](https://nodejs.org/en/). Confirm you have `npm` installed by running `npm -v`. 
  2. Install and start [MySQL](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/) on your machine. 
  3. Replace the `user` and `password` fields in `app.js` with information for an account on your local MySQL server.
  4. Run `npm install` inside of the `nodejs-example-express-rds` directory.
  5. Run `npm start`.
  6. Visit the website running locally on your machine at [http://localhost:3000/hikes](http://localhost:3000/hikes). You can enter in a hike and have the information recorded in the database

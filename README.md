# AWS Elastic Beanstalk Sample App with RDS
This sample application uses the [Express](https://expressjs.com/) framework and [RDS](https://aws.amazon.com/rds/) to build a basic web application with a database. This application allows users to record hiking logs.

This source bundle can be deployed to Elastic Beanstalk using the following steps:
  1. [Install the AWS Elastic Beanstalk Command Line Interface (CLI)](http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-install.html).
  2. Run `eb init --platform node.js --region <region>` inside of the `nodejs-example-express-rds` directory to initialize the folder for use with the CLI. Replace `<region>` with a region identifier such as `us-east-2` (see [Regions and Endpoints](https://docs.amazonaws.cn/en_us/general/latest/gr/rande.html#elasticbeanstalk_region) for a full list of region identifiers).
  3. Run `eb create --sample nodejs-example-express-rds` to deploy a sample application that contains a load-balanced environment with the default settings for the Node.js platform.
  4. Once the environment creation process completes, run `eb open` to load the sample environment in your browser to verify the deployment has succeeded and is accessible.
  5. After deploying the sample application, use the AWS console to add an RDS DB instance to your environment using the instructions [here](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create-deploy-nodejs.rds). If you do not perform this step before deploying the source bundle, the app will fail to deploy because it will attempt to access a production database that doesn't exist.
  6. Deploy the source in this bundle using `eb deploy`.
  7. Once the deployment of this source bundle completes, refresh your browser and append `hikes` at the end of the URL (e.g., `http://node-express-env-syypntcz2q.elasticbeanstalk.com/hikes`). You should see a web page titled `My Hiking Log`. You can enter in a hike and that information will be recorded to the database.
  8. Run `eb terminate --all` to clean up.

This source bundle can be ran locally using the following steps:
  1. Install Node to your machine, if you haven't already. You can download node from nodejs.org [here](https://nodejs.org/en/). Confirm you have `npm` installed by running `npm -v`. 
  2. Install and start [MySQL](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/) on your machine. 
  3. Replace the `user` and `password` fields in `app.js` with information for an account on your local MySQL server.
  4. Run `npm install` inside of the `nodejs-example-express-rds` directory.
  5. Run `npm start`.
  6. Visit the website running locally on your machine at [http://localhost:3000/hikes](http://localhost:3000/hikes). You can enter in a hike and have the information recorded in the database

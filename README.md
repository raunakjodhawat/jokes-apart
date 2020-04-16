https://travis-ci.org/raunakjodhawat/jokes-apart.svg?branch=master

# Tech Stack
Website: www.chuck.raunakjodhawat.com
![Development stack](./dev-stack.png)

This project contains source code and supporting files for the serverless application that is created in the AWS Lambda console. Any commits, changes the code structure in AWS.

This project includes the following files and folders:

- src - Code for the application's Lambda function.
- template.yml - A SAM template that defines the application's AWS resources.
- buildspec.yml -  A build specification file that tells AWS CodeBuild how to create a deployment package for the function.

The application template uses the AWS Serverless Application Model (AWS SAM) to define application resources. AWS SAM is an extension of AWS CloudFormation with a simpler syntax for configuring common serverless application resources, such as functions, triggers, and APIs. 

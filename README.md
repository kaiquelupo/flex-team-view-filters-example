# Team View Filters Expansion Example

This Flex plugin shows how to customize the team view filters. 

<p align="center">
    <img src="screenshots/example.png?raw=true" width="300" >
</p>

## Setup

1. Go to Flex as `admin` in this [link](https://flex.twilio.com/admin/features) and activate the pre-release feature called `Advanced Teams View Filters`.

## How to use

1. Clone this repository

2. Copy `public/appConfig.example.js` to `public/appConfig.js`

3.  run `npm install`

4. cd back to the root folder and run `npm start` to run locally or `npm run-script build` and deploy the generated ./build/plugin-dialpad.js to [twilio assests](https://www.twilio.com/console/assets/public) to include plugin with hosted Flex. Also, you want to use Twilio Serverless, just run `npm run deploy` to send your plugin directly to your Flex.
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


Compado Frontend Exercise
Overview
Comapdo runs an internet site for product search and price comparison. It helps users to
find the best deals for a particular item, by searching through different product feeds from
various providers (e.g. ebay, amazon, etc.). Managing an almost infinite number of products
has a lot of challenges, in this exercise we will focus only on the frontend side and create a
small service, which connects the ebay product feed and provides an interface to get
product data.
Exercise
Create a small javascript application that:
Connects to the ebay product API.
Gets a list of products for a given keyword (or keywords) and allows the user to set a price
range to filter products.
Displays the results in a list.
Make the list and search form as user friendly as possible.
Provide styling using a CSS preprocessor. (SASS)
Feel free to use existing third party components such as ReactTable or VueTable
Choose an existing design upon which to base your application’s design, and explain why
you choose this design

Bonus questions
• sometimes requesting data for the keyword takes a long time (> 5 seconds), what can be
done to make it faster? What are downsides of your solution?
- we’d like to add as many product feeds as possible, how would you structure a service
with this requirement?
Please make suggestions.
Publish this web-app somewhere and send us a link to test. Give us access to the source
code. Feel free to use additional libraries, if this helps you, just name them and explain why
you choose them.
!! If you encounter issues or questions, which prevent you from moving forward with this
exercise, don’t hesitate to contact us. We want you to succeed and are happy to help or
clarify !!

Ebay Product Feed
Please use the ebay Finding API to retrieve the date. The user guide can be found here:
http://developer.ebay.com/Devzone/finding/Concepts/FindingAPIGuide.html
As end users are very visual, make sure we get the best possible picture size.


Credentials
AppID for ebay sandbox is WandoInt-217b-42d8-a699-e79808dd505e
Endpoint is http://svcs.sandbox.ebay.com/services/search/FindingService/v1

Hint: https://svcs.sandbox.ebay.com/services/search/FindingService/v1?OPERATION-
NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&SECURITY-
APPNAME=WandoInt-217b-42d8-a699-e79808dd505e&keywords=mac&RESPONSE-DATA-
FORMAT=JSON

Have fun! And don’t forget: if you get stuck, just let us know, we’ll help.

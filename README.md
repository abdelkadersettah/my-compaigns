# Campaigns App

The Campaigns app is a web application built using React and TypeScript that allows users to view and manage campaigns.
It provides a user-friendly interface to render a list of campaigns in a grid format.
The app utilizes the `@tanstack/react-table` libraries to enhance the date picking and table functionality.

## Features

The Campaigns app offers the following features:

- List View: Displays campaigns in a grid format with the following details:

  - Name: The name of the campaign.
  - Status: The current status of the campaign.
  - Start Date: The date when the campaign starts.
  - End Date: The date when the campaign ends.
  - Budget: The budget allocated for the campaign.

- Filtering: Users can filter the campaign data using various criteria, including the campaign name and date range.

- Sorting: Users can sort the table by clicking on the column headers. This functionality allows users to organize campaigns based on their preferences.

## Installation and Usage

To run the Campaigns app locally, follow these steps:

1. Clone the repository:

   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```
   cd MY-COMPAIGNS
   ```

3. Install the dependencies:

   ```
   npm install
   ```

4. Start the development server:

   ```
   npm start
   ```

5. Open your browser and visit `http://localhost:3000` to access the Campaigns app.

## Available Scripts

In the project directory, you can run the following scripts:

- `npm start`: Starts the development server.
- `npm build`: Builds the app for production.
- `npm test`: Launches the test runner.
- `npm run storybook`: Runs the Storybook development server.
- `npm run build-storybook`: Builds the Storybook as a static app.

## Dependencies

The Campaigns app relies on the following dependencies:

- React: JavaScript library for building user interfaces.
- TypeScript: Typed superset of JavaScript that compiles to plain JavaScript.
- react-datepicker: Flexible and customizable datepicker component for React.
- @tanstack/react-table: Powerful and extensible data table component for React.

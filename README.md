# React Data Visualization App

## Overview

This project is a React-based web application designed for visualizing and interacting with large datasets. It features a virtualized data table with checkboxes, allowing users to select rows, and a Plotly.js bar chart that dynamically updates to display the values from the selected rows. The application is styled using Tailwind CSS, ensuring a modern and responsive user interface.

## Features

- **Virtualized Data Table**: Efficiently renders large datasets with the help of `react-window`, displaying only the items in the viewport.
- **Interactive Checkboxes**: Each row in the data table has a checkbox for selection, controlling which data points are visualized in the chart.
- **Dynamic Plotly.js Bar Chart**: Visualizes the selected data points in real-time, updating as users check or uncheck items in the table.
- **Tailwind CSS Styling**: The application is styled using Tailwind CSS, providing a sleek and modern UI.

## Dependencies

- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
- **react-window**: React components for efficiently rendering large lists and tabular data.
- **Plotly.js**: A graphing library to build interactive charts.
- **react-plotly.js**: A React component for Plotly.js.

## Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

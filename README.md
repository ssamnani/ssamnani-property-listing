# Front End Coding Test

## Overview

### Introduction

This application has been developed to demonstrate Frontend coding skills in React. It has been developed using React, Redux and NextJs. Component testing is done using Jest and React Testing Library.

### Features

This web app consists of 1 page and displays property listings showing 20 records.

Property listing page has:

1. Header
2. Footer
3. Search Results (20 Items)
4. Mortgage Calculator
5. Footer
6. Save/Bookmark a listing. User can click on Save button to bookmark a property. The ID is stored in Local Storage and saved properties are shown with filled-star even after page refreshes.

### Testing

`Component Testing` has been demostrated by testing `MortgageCalculator` and `MortgageDownPaymentMetricToggle` components. `Snapshot testing` has been done for several components.

## Development

### Run

Get the application up and running:

#### npm

```bash
npm install
npm dev
```

#### yarn

```bash
yarn install
yarn dev
```

#### Run in browser

```bash
localhost:3000
```

### Test

```bash
yarn test
```

### Coverage

```bash
yarn coverage
```

## Room for Improvements

Follwing can be improved and not acheived due to time constraints:

1. UI can be made responsive
2. Component testing can be improved with handling more corner cases and testing all components
3. Several UI improvements

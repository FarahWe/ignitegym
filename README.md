# Gym Exercises App

This is a mobile application developed in React Native with Expo, which allows users to authenticate and access a gym exercise list. Users can view exercise details and mark them as completed.

## Features

- User authentication
- Exercise list view
- Exercise details
- Mark exercise as completed

## Tech Stack

- React Native
- Expo
- Axios
- Native Base
- Async Storage
- React Navigation
- Expo Image Picker
- React Hook Form
- Yup

## Installation

1. Clone the repository:

```console
  git clone https://github.com/FarahWe/ignitegym.git
```

2. Install dependencies:

```console
  cd ignitegym/mobile
  npm install
  cd ..
  cd api
  npm install
```

## Usage

1. Start the Expo development server:

```console
  npx expo start
```

2. Install the Expo Go app on your iOS or Android device.

3. Open the Expo Go app and scan the QR code from the Expo development server.

4. The app will be launched on your device.

## API Usage

| Script            | Target                                 |
| ----------------- | -------------------------------------- |
| `npm run dev`     | Run API in **development** environment |
| `npm start`       | Run API in **production** environment  |
| `npm run migrate` | Create database tables                 |
| `npm run seed`    | Populate database tables               |

## API Docs

To view the API documentation, run the API and access [http://localhost:3333/api-docs](http://localhost:3333/api-docs) in your browser

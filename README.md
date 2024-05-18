# Firebase-CRUD
This is a basic CRUD (Create, Read, Update, Delete) application built with React and Firebase Firestore. The application allows users to add, update, and delete user information, specifically their name and age. 

The app is deployed and can be accessed at [Firebase CRUD App](https://pradeish29.github.io/Firebase-CRUD/).

## Features
- Add new users with a name and age.
- Increment the age of existing users.
- Delete users.
- Responsive UI with card and table structure.

## Technologies Used
- React
- Firebase Firestore
- CSS for styling

## Getting Started

### Prerequisites
- Node.js
- Firebase account

### Installation

1. Clone the repository:

```bash
git clone https://github.com/pradeish29/Firebase-CRUD.git
cd Firebase-CRUD
```
2.Install the dependencies:
```bash
npm install
```
3.Set up Firebase:

-Go to the Firebase Console.
-Create a new project.
-Add a web app to your project.
-Copy the Firebase config object and replace the placeholder in your project. 
-Install firebase
```bash
npm install firebase
```

4.Start the development server:
```bash
npm start
```
The app should now be running on http://localhost:3000.

## Usage
Visit the deployed app at Firebase CRUD App.

### Adding a User
Enter the user's name in the "Name..." input field.
Enter the user's age in the "Age..." input field.
Click the "Add User" button.

### Incrementing a User's Age
Find the user in the user list.
Click the "Increment Age" button next to the user.

### Deleting a User
Find the user in the user list.
Click the "Delete User" button next to the user.

## License
This project is licensed under the MIT License.

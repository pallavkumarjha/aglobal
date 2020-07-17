# Antarctica Global Assignment

This Angular project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.6.

## Dependency

1. Angular material

## Functionalities Implemented

1. Login Page
2. Dummy data for placeholders.
3. Search works for exisiting roles.
4. Adding a new role is possible with the `add role` button. (Even if any one is checked between web and mobile , that access point will be marked as accessed.)

## Folder Structure
We have main module which is `app.module`. Inside that, we have different components
1. Dashboard
2. Login
3. Role Dialog <br>
These Components are rendered inside `app.component` file. <br> Routes are stored in `app.routing` module.<br>
`HTML` and `SCSS` files are part of component.

## How to run

1. Clone the repo or download zip folder.
2. Open folder in editor and `npm install`.
3. Build the project using `ng build`. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
4. Run `ng serve` to run the project. It can be viewed at `http://localhost:4200/`.

## Important Points

1. There is no validation to login. You can login with any valid email ID and password. It is not stored anywhere in the system.
2. There are dummy data available on the dashboard page.

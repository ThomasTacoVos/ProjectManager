# Project manager
Author: Thomas Vos
Project starting date: 15-09-2022
Contributors: Thomas Vos

## Description
This is a small project I have created dedicated to learning the Angular framework. Prior to this project I had little to none experience with it. 
Aside from learning Angular I'm relearning Bootstrap and proper use of good HTML in this project.  

## Design
The application consists of different modules which have their own components, containers, modules and services.
These are the current working modules in the app:

### User module
- user model
- user list component
- user details component -> child of user list
- user service (to be added)

### Login module
- login form component
- register component
- authentication service

### Ticket module (not implemented)
### Project module (not implemented)

## TODO:

1. Improve structure:  Build the user service to improve the data flow (this fixes multiple issues with the edit user details function)
2. Add functionality:  Build an add user functin for user-list
3. Add functionality:  Filter / search option for the user-list                

## Finished:
- Add functionality: Close details button for user-details          
- Add functionality: Add edit user details for user-details        


### Project information

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.2.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

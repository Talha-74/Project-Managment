<p align="center"><a href="https://laravel.com" target="_blank">
    <img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo">
</a></p>
<p align="center">
  <a href="https://reactjs.org" target="_blank">
   <img src="https://skillicons.dev/icons?i=git" width="100" />
       <img src="https://skillicons.dev/icons?i=react" width="100" />
       <img src="https://skillicons.dev/icons?i=php" width="100" />
  </a>
</p>

# Project Management App

Loading...

## Features

- Feature 1
- Feature 2
- Feature 3

## Prerequisites

Before you begin, ensure you have met the following requirements:
- PHP >= 8.2
- Composer
- Laravel 11
- npm or yarn

# Project Blog

### Introduction
This README provides a comprehensive overview of the Laravel React Inertia project, outlining its setup and key features. Below, you'll find step-by-step instructions along with code snippets to guide you through the project's development.

### Installation
To get started, follow these steps to install Laravel Breeze and set up the project environment:
1. Install Laravel Breeze:
   ```bash
   composer require laravel/breeze --dev
2. Run Breeze Installation:
   ```bash
   php artisan breeze:install
3. Choose React and Dark Mode options during installation.

### Enabling Dark Mode
To enable Dark Mode in your project, follow these steps:
1. Open resources/layouts/app.blade.php.
2. Add the dark class to the HTML tag:
   ```bash
   <html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="dark">
3. open tailwind.config file and add this:
   ```bash
   export default {
    darkMode: 'class',
   
### Email Verification
- To enable email verification for users, follow these steps:
- `Implements MustVerifyEmail` interface in the User model. 
If the `.env` file is not configured for email, verification links will be logged to `storage/logs/laravel.log`. Users can use this link to confirm their email and access the dashboard.

# Development
- #### Prepare Database
1. Create migrations, projects, tasks.
2. establish projects has many tasks relationship.
3. create factories for projects and tasks.
4. seed them in database seeder.
- #### Create Controllers and define routes
1. ` php artisan make:controller ProjectController --model=Project --requests --resource`
2. `$ php artisan make:controller TaskController --model=Task --requests --resource`
3. `$ php artisan make:controller UserController --model=User --requests --resource`
4. Remove the welcome and login routes and redirect to dashboard on `/`
   ```bash
   Route::redirect('/', '/dashboard');
5. Dashboard route in middleware and using arrow function
   ```bash
   Route::middleware(['auth', 'verified'])->group(function() {
    Route::get('/dashboard', fn () => Inertia::render('Dashboard')) ->name('dashboard'); });
6. Resource routes for all three controllers
     ```bash
    Route::resource('project', ProjectController::class);
    Route::resource('task', TaskController::class);
    Route::resource('user', UserController::class);
7. In .editorconfig file, make the identation_size 2
   ```bash
   [*.{js, jsx}]
   indent_size = 2
8. Highlight the active navbar or route
   ```bash
   <NavLink href={route("dashboard")} active={route().current("dashboard")} >
    Dashboard
   </NavLink>

## Installation

To install Project, follow these steps:

Linux and macOS:


## Contributing

To contribute to Project, follow these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Push to the original branch: `git push origin <project_name>/<location>`
5. Create the pull request.

Alternatively, see the GitHub documentation on [creating a pull request].

## Contact

If you want to contact me you can reach me at <talhashinwari7474@gmail.com>.





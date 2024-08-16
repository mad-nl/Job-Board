# Job Listings and User Management Platform

Welcome to the Job Listings and User Management Platform! This website provides a comprehensive solution for managing job postings and user registrations, with a focus on efficient querying, filtering, and job management.

## Features
### 1. User Management
   - **Registration & Authentication**: Users can register on the platform with strong validation rules, including email format checks and password hashing.
   - **Profile Viewing**: Authenticated users can view their own profiles using the `me` query.
   - **Authorization**: The platform uses role-based permissions to restrict access to certain functionalities, ensuring secure operations.
### 2. Job Listings
   - **Create and Manage Jobs**: Users can create job listings, including information like job title, location, company details, and more. Each job can be associated with multiple tags for better categorization.
   - **Job Highlighting**: Certain jobs can be highlighted or pinned to increase visibility.
   - **Tag Management**: Jobs can be associated with tags, which help in filtering and organizing listings.
   - **Pagination and Sorting**: Efficient pagination and sorting capabilities allow users to browse job listings based on criteria like creation date and pinned status.
### 3. Tag Management
  - **Tag Listings**: The platform allows for the creation and management of tags, which can be associated with job listings to improve categorization and search functionality.
  - **Search by Tags**: Users can filter job listings based on associated tags, making it easier to find relevant job postings.
### 4. GraphQL API
  - **Flexible Queries**: The platform provides a powerful GraphQL API that supports complex queries, including filtering, sorting, and pagination. This allows for a highly customizable data retrieval experience.
  - **Input Validation**: The API ensures that all inputs are validated against defined rules, ensuring data integrity and security.
  - **Custom Resolvers**: The platform uses custom GraphQL resolvers to handle complex business logic, such as conditional filtering based on user input.
### 5. Security
  - **Data Validation**: Strict validation rules are applied across the platform to prevent invalid data entries.
  - **Authentication & Authorization**: The platform is secured with authentication mechanisms to ensure that only authorized users can perform certain actions.
  - **Guarded Mutations**: Sensitive mutations, such as job updates, are guarded by permissions to ensure that only authorized users can make changes.

## Installation and Setup
To get started with this project, follow these steps:
### 1. Clone the Repository:
  ```git clone https://github.com/yourusername/job-listings-platform.gitcd job-listings-platform```
### 2. Install Dependencies:
  Ensure you have Composer and Node.js installed. Then, run:
  ```
  composer install 
  npm install
  ```
### 3. Setup Environment Variables:
  Copy the ``.env.example`` file to ``.env`` and fill in your database and mail configuration details.

### 4. Run Migrations:
  Set up the database tables by running:
  ```php artisan migrate```
### 5. Start the Development Server:
  Run the server using:
  ```php artisan serve```
### 6. GraphQL Playground:
  You can access the GraphQL Playground at http://localhost:8000/graphql-playground to test queries and mutations.

## License
This project is licensed under the MIT License.

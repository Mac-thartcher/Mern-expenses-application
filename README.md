# Mern-expenses-application
# Mern
will be buildig a  Expenses Tracker App using MERN (MongoDB, Express.js, React, Node.js) project..
### Project: Expenses Tracker App

#### 1. Schema Design
**Entities and Attributes**:
- **User**: 
  - `userId` (Primary Key)
  - `name`
  - `email`
  - `password`
  - `createdAt`
- **Expense**:
  - `expenseId` 
  - `title`
  - `amount`
  - `category` (e.g., food, transport, utilities)
  - `date`
  - `userId` 
: A user can have multiple expenses.

#### 2. Wireframe
**Main Pages**:
- **Login/Register**: Simple forms for user authentication.
- **Dashboard**: Overview of expenses with filters (e.g., by category, date).
- **Expense Details**: Detailed view of a single expense with options to create, edit, or delete.
- **Create/Edit Expense**: Form to add or edit an expense.

**Navigation**:
- Header with links to Dashboard, Profile, and Logout.
- Sidebar with filters for expense category and date.

**Client**:
1. User logs in or registers.
2. User is redirected to the Dashboard.
3. User can view, create, edit, or delete expenses.

#### 3. List of Features
- User authentication (Web token).
- CRUD operations for expenses (create, read, update, delete).
- Dashboard to view expenses.
- Notifications for upcoming bills or budget limits.
- Sharing features like exporting expense reports.

### Files Needed in This Project
To organize the MERN stack expenses tracker app, the following files are needed:

### Backend (Node.js + Express)
1. **server.js**: Entry point for your backend server.
2. **config/**:
   - **db.js**: Database connection setup.
3. **models/**:
   - **User.js**: Mongoose schema and model for users.
   - **Expense.js**: Mongoose schema and model for expenses.
4. **routes/**:
   - **auth.js**: Routes for user authentication (login/register).
   - **expenses.js**: Routes for CRUD operations on expenses.
5. **controllers/**:
   - **authController.js**: Logic for handling authentication.
   - **expenseController.js**: Logic for handling expense operations.
6. **middleware/**:
   - **authMiddleware.js**: Middleware for protecting routes.
7. **utils/**:
   - **errorHandler.js**: Custom error handling logic.
8. **.env**: Environment variables (e.g., database URI, JWT secret).
9. **package.json**: Project metadata and dependencies.

### Frontend (React)
1. **src/**:
   - **index.js**: Entry point for your React app.
   - **App.js**: Main application component.
   - **components/**:
     - **Header.js**: Header component with navigation links.
     - **Dashboard.js**: Dashboard component to display expenses.
     - **ExpenseForm.js**: Form component for creating/editing expenses.
     - **ExpenseList.js**: Component to list expenses.
     - **ExpenseDetails.js**: Component to view expense details.
   - **pages/**:
     - **Login.js**: Login page.
     - **Register.js**: Registration page.
     - **Profile.js**: User profile page.
   - **context/**:
     - **AuthContext.js**: Context for managing authentication state.
     - **ExpenseContext.js**: Context for managing expense state.
   - **services/**:
     - **api.js**: Functions for making API calls.
   - **styles/**:
     - **App.css**: Main stylesheet.
   - **utils/**:
     - **helpers.js**: Utility functions.
2. **public/**:
   - **index.html**: Main HTML file.
3. **.env**: 
4. **package.json**: Project metadata and dependencies.

### Extra File
**README.md**: Project documentation.

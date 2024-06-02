# Social Determinants Health Analysis

This repository contains the backend and frontend code for analyzing social determinants of health. The backend is built with Flask and the frontend with React.

## Prerequisites

Before you begin, ensure you have the following software installed on your machine:
- Python 3.7+
- Node.js (includes npm)
- Git

## Getting Started

### Clone the Repository

1. Open your terminal (macOS/Linux) or Command Prompt (Windows).
2. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/jinishshah00/social-determinants-health-analysis.git
   cd social-determinants-health-analysis
   ```

### Setting Up the Backend

#### macOS/Linux

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create and activate a virtual environment:
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```

3. Install the required Python packages:
   ```bash
   pip install -r requirements.txt
   ```

#### Windows

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   venv\Scripts\activate
   ```

3. Install the required Python packages:
   ```bash
   pip install -r requirements.txt
   ```

### Setting Up the Frontend

1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```

2. Install the frontend dependencies:
   ```bash
   npm install
   ```

3. Install Material-UI framework and its dependencies:
   ```bash
   npm install @mui/material @emotion/react @emotion/styled
   ```

4. Install React Router for navigation:
   ```bash
   npm install react-router-dom
   ```

### Starting the Development Servers

To start both the Flask backend and React frontend servers simultaneously, run the following command from the `frontend` directory:

```bash
npm start
```

This will start:
- The Flask backend server on `http://localhost:5000`
- The React frontend server on `http://localhost:3000`

The React app is configured to proxy API requests to the Flask backend.

### Development Workflow

1. **Creating a New Branch**: 
   Create a new branch for each feature or bug fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Making Changes**: 
   After making changes, add, commit, and push to the new branch:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push origin feature/your-feature-name
   ```

3. **Creating a Pull Request**: 
   Go to GitHub and create a pull request from your branch to the `main` branch.
   Request reviews from your teammates.

4. **Pulling Changes**: 
   Regularly pull changes from the `main` branch to stay up to date:
   ```bash
   git checkout main
   git pull origin main
   ```

## Troubleshooting

### Common Issues

- **Virtual Environment Activation**:
  - Ensure you are using the correct command for your operating system to activate the virtual environment.
  
- **Port Conflicts**:
  - If ports 5000 or 3000 are in use, you might need to stop the processes using them or change the port configuration.

- **Dependency Issues**:
  - Ensure all dependencies are installed by running `pip install -r requirements.txt` and `npm install`.

### Contact

For any issues or questions, please contact [jinishshah00@gmail.com].

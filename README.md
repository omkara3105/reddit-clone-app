<img width="1536" height="1024" alt="reddit clone app" src="https://github.com/user-attachments/assets/66d7b7a5-a231-4299-8493-dbdcdaea8081" />

<img width="1537" height="747" alt="Screenshot 2026-09-12 142856" src="https://github.com/user-attachments/assets/8cc8ff5c-a447-4f43-aeaa-2cbb2f40b6b4" />


<img width="1920" height="1032" alt="Screenshot 2026-09-12 142856_2" src="https://github.com/user-attachments/assets/9d8c8e37-c650-4940-bc18-4316c7b87e20" />



# Reddit Clone App

A simple Reddit-style web application where users can add and explore interview experiences and questions shared by other users.

The project is built with **React.js** and deployed using **Docker, Jenkins, and AWS EC2**. Interview experiences are stored in **Amazon DynamoDB** and accessed through **API Gateway and AWS Lambda**.


🚀 Project Architecture


                    ┌──────────────┐
                    │    GitHub    │
                    │ Source Code  │
                    └──────┬───────┘
                           │
                           ↓
                    ┌──────────────┐
                    │    Jenkins   │
                    │    CI/CD     │
                    └──────┬───────┘
                           │
                           ↓
                    ┌──────────────┐
                    │    Docker    │
                    │ Build Image  │
                    └──────┬───────┘
                           │
                           ↓
                    ┌──────────────┐
                    │   AWS EC2    │
                    │ React App    │
                    └──────┬───────┘
                           │
                      API Request
                           ↓
                    ┌──────────────┐
                    │ API Gateway  │
                    └──────┬───────┘
                           │
                           ↓
                    ┌──────────────┐
                    │ AWS Lambda   │
                    └──────┬───────┘
                           │
                           ↓
                    ┌──────────────┐
                    │  DynamoDB    │
                    │   Database   │
                    └──────────────┘



## 🔄 CI/CD Pipeline

Jenkins is used to automate the deployment process.

1. Developer pushes code
          ↓
2. GitHub repository
          ↓
3. Jenkins pulls latest code
          ↓
4. Jenkins builds React application
          ↓
5. Docker image is created
          ↓
6. Docker container is deployed
          ↓
7. Application runs on AWS EC2

 
 
 
 Application Data Flow


React
  ↓
API Gateway
  ↓
Lambda
  ↓
DynamoDB



✨ Features

* Simple user login using name
* Add interview experiences
* Select company
* Add multiple interview questions
* View interview experiences
* Search experiences by company
* Randomized interview experience display
* Vote count for experiences
* Persistent cloud storage using DynamoDB
* REST API using API Gateway and Lambda
* Dockerized React application
* Jenkins CI/CD pipeline
* AWS EC2 deployment

---

## 🛠️ Technologies Used

### Frontend

* React.js
* Vite
* JavaScript
* HTML
* CSS

### Backend / Cloud

* Amazon API Gateway
* AWS Lambda
* Amazon DynamoDB

### DevOps

* Git
* GitHub
* Jenkins
* Docker
* AWS EC2

---

## 📁 Project Structure

```text
reddit-clone-app/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── InterviewCard.jsx
│   │   └── AddNoteModal.jsx
│   │
│   ├── data/
│   │   └── companies.js
│   │
│   ├── pages/
│   │   └── Dashboard.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
│
├── Dockerfile
├── docker-compose.yml
├── Jenkinsfile
├── package.json
└── README.md
```

---

## 💻 Run Locally

1. Clone the repository


git clone https://github.com/omkara3105/reddit-clone-app.git

cd reddit-clone-app


2. Install dependencies


npm install

 3. Start the application

npm run dev

The application will be available on:   http://localhost:5173



## 🐳 Run Using Docker

Build the Docker image:

```bash
docker build -t reddit-clone-app .
```

Run the container:

```bash
docker run -d -p 5173:5173 reddit-clone-app
```

Or using Docker Compose:

```bash
docker compose up -d --build
```

---

## ☁️ AWS Backend

The application uses serverless AWS services for storing interview experiences.

### API Gateway

API Gateway exposes HTTP endpoints:

```text
GET  /comments
POST /comments
```

### Lambda

Lambda handles the API requests.

For example:

```text
GET /comments
       ↓
Lambda
       ↓
DynamoDB Scan
       ↓
Return comments
```

For adding an experience:

```text
POST /comments
       ↓
Lambda
       ↓
DynamoDB PutItem
```

### DynamoDB

Table:

```text
RedditComments
```

Partition key:

```text
id
```

Example item:

```json
{
  "id": "1",
  "company": "TCS",
  "question": "1. What is OOP?\n2. Explain inheritance in Java.\n3. What is ArrayList vs LinkedList?",
  "author": "Omkar",
  "date": "2026-09-13",
  "votes": 0
}
```

---




This allows new code changes to be automatically built and deployed.

---

## 🔐 AWS Services

| Service         | Purpose                                |
| --------------- | -------------------------------------- |
| **EC2**         | Hosts the Dockerized React application |
| **API Gateway** | Provides HTTP API endpoints            |
| **Lambda**      | Handles backend/API logic              |
| **DynamoDB**    | Stores interview experiences           |
| **IAM**         | Controls AWS permissions               |

---

## 📌 API Endpoints

### Get all interview experiences

```http
GET /comments
```

Returns:

```json
[
  {
    "id": "1",
    "company": "TCS",
    "question": "What is OOP?",
    "author": "Omkar",
    "date": "2026-09-13",
    "votes": 0
  }
]
```

### Add an interview experience

```http
POST /comments
```

Request:

```json
{
  "company": "Infosys",
  "question": "1. What is Spring Boot?\n2. What is dependency injection?\n3. Explain REST API.",
  "author": "Rahul"
}
```

---

## 🎯 Learning Objectives

This project demonstrates practical experience with:

* React frontend development
* REST API integration
* AWS serverless architecture
* DynamoDB database operations
* Docker containerization
* Jenkins CI/CD
* Git and GitHub
* AWS EC2 deployment
* Basic cloud architecture



⭐ Future Improvements

* User authentication
* Upvote/downvote functionality
* Comments and replies
* Company-wise filtering
* Pagination
* Better error handling
* AWS IAM least-privilege policies
* HTTPS
* Automated testing
* Production monitoring

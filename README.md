# Home Stock Management System
**Registration Number:** 24RP14753  
**Course:** BTech_TI    
**Year of study** 2024-2025  
**Institution:** Tumba College ICT Department  

##  Project Overview
A web application for managing household inventory with:
- **Backend Service**: Node.js + Express + MongoDB
- **Microservice**: Automated shopping list generator
- **DevOps Pipeline**: Docker, Kubernetes, GitHub Actions, Jenkins

##  Technologies Used
| Component       | Technology Stack |
|----------------|------------------|
| Backend        | Node.js, Express, MongoDB |
| Microservice   | Node.js, MongoDB Driver |
| Containerization | Docker |
| Orchestration  | Kubernetes |
| CI/CD          | GitHub Actions, Jenkins |
| Reverse Proxy  | NGINX |

##  Project Structure
24RP14753-Home-Stock-Management/
├── backend/ # Node.js backend service
├── microservice/ # Shopping list generator
├── k8s/ # Kubernetes configurations
├── jenkins/ # Jenkins pipeline files
├── .github/workflows/ # GitHub Actions CI
├── docker-compose.yml # Local development setup
├── nginx.conf # Reverse proxy config
└── README.md # This file


## Getting Started

### Prerequisites
- Docker Desktop
- Node.js (v18+)
- Kubernetes (Minikube for local)
- MongoDB

### Local Development
1. **Start services**:
   ```bash
   docker-compose up -d

   Access endpoints:

Backend: http://localhost:3000

Microservice: http://localhost:3001/shopping-list

MongoDB: mongodb://localhost:27017/homestock

## Kubernetes Deployment
kubectl apply -f k8s/

 ## API Endpoints
 
Endpoint	    Method	          Description
/api/items	    GET	            List all inventory items
/api/items	    POST	        Add new item
/shopping-list	GET	            Generate shopping list
## Security Features
Docker non-root user

Kubernetes Network Policies

Environment variables for secrets

Input validation with Joi
## CI/CD Pipeline

**GitHub Actions:**

Build and test on push

Scan Docker images for vulnerabilities

**Jenkins:**

Deploy to Kubernetes cluster

## License
This project is called **Home stock Management System** it is a part of a class assissment for the **BTech_IT 2024-2025** program at Tumba college.  
The code is provided for educational purposes under the following terms:

1. **Academic Use**:  
- Free to use, modify, and study for educational purposes.
 2. **Restrictions**:  
   - Commercial use is prohibited without permission.
   - The institution ("Tumba College of technology") retains the right to showcase this work as part of its curriculum.
   3. **Attribution**:  
   
   Copyright (c) 2025 Names:Andre NDAYIZEYE, Regno:24RP14753
  College: Tumba College ("Btech_IT")

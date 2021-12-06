GAEA
============

## Table of Contents
1. [Overview](#Overview)
2. [Video Walkthrough](#VideoWalkthrough)
2. [TechStack](#TechStack)
3. [Dependency](#Dependency)
4. [Installation](#Installation)
3. [Schema](#Schema)
4. [Wireframes](#Wireframes)

## Overview
### Description
GAEA is a web-app dashboard to visualize and query [AWS workload](https://docs.aws.amazon.com/wellarchitected/latest/userguide/workloads.html) powered by [Django](https://www.djangoproject.com/) + [React](https://reactjs.org/).

### Features

It currently features:

- A homepage that displays:
    - Total amount of data size
    - Number of active workloads
    - Top 10 largest workloads
    - Number of daily users
    - Update history on workloads status
- A search interface to query resources by keyword, RunID, or tag
    - Display all completed and in-progress workload
    - Link to workload URL

## Video Walkthrough

## TechStack
### Frontend
GAEA is a [React.js](https://reactjs.org/) App powered by Javascript, CSS, and [React Bootstrap](https://react-bootstrap.github.io/).

### Framework
GAEA is built in Python-based [Django REST Framework](https://www.django-rest-framework.org/).

### Database
The database is done on [SQLite](https://docs.python.org/3/library/sqlite3.html#module-sqlite3). Django supports [SQLite 3.9.0](https://docs.djangoproject.com/en/3.2/ref/databases/#sqlite-notes) and later.

## Dependency
```
"axios": "^0.21.1",
"bootstrap": "^5.1.3",
"chart.js": "^3.6.0",
"feather-icons": "^4.28.0",
"react": "^17.0.2",
"react-chartjs-2": "^3.2.0",
"react-data-table-component": "^7.4.4",
"react-dom": "^17.0.2",
"react-icons": "^4.3.1",
"react-router-dom": "^5.3.0",
"react-scripts": "4.0.3",
"react-table": "^7.7.0",
"reactstrap": "^8.10.0",
```
## API
GET /api/workload/
```
 HTTP 200 OK
Allow: GET, POST, HEAD, OPTIONS
Content-Type: application/json
Vary: Accept

[
    {
        "run_id": "a1",
        "date": "2021-10-22",
        "workload_name": "abc",
        "image": "ecs-service",
        "family": "nginx-sample-stack",
        "network_mode": "bridge",
        "requirements": "EC2",
        "metric": "optimal",
        "value": 18490,
        "cpu": 256,
        "tags": "S123",
        "status": "Completed",
        "progress": [
            "100%"
        ],
        "workload_url": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ContainerInsights-Prometheus-Setup-nginx-ecs.html"
    }
    ,...
]
```

GET /api/page_hits/
```
HTTP 200 OK
Allow: GET, HEAD, OPTIONS
Content-Type: application/json
Vary: Accept

[
    {
        "day": "2021-10-22",
        "hits": 2
    },
    {
        "day": "2021-11-16",
        "hits": 3
    },
    ...
]
```

## Installation

```
git clone https://github.com/CS601-F21/side-project-mt-cs.git
cd side-project-mt-cs
mkvirtualenv gaea
pip install -r requirements.txt
cd gaea_webapp
npm install
node server.js
cd ../gaea_django_project
python3 manage.py migrate
python3 manage.py runserver
```
## Schema 

![GaeaArchitecture](https://user-images.githubusercontent.com/60201466/138249641-57944a61-450c-4791-9076-5945c5f9e752.png)

## Wireframes
![gaea1](https://user-images.githubusercontent.com/60201466/138014716-9162be01-db68-4349-b246-8f4160425d88.jpg)
![gaea2](https://user-images.githubusercontent.com/60201466/138014722-b793f975-f480-40b4-98ba-bfdd7b563e43.jpg)

## Grading Rubric

| Points | Criterion |
| ------ | -------- |  
| 60 | **Functionality** - Program behaves as expected during demonstration. |  
| 15 | **Design** - Program demonstrates appropriate level of difficulty. |  
| 15 | **Design** - Solution is well designed and uses appropriate class and method decomposition. | 
| 10 | **Design** - Meets all style guidelines. |  


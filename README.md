GAEA
============
<h1 align="center">
  downshift 🏎
  <br>
  <img src="https://user-images.githubusercontent.com/60201466/144827445-a2e0117c-ce0d-4764-af90-e09b689e181b.png" alt="gaea logo" title="gaea logo" width="300">
  <br>
</h1>
<p align="center" style="font-size: 1.2rem;">One stop workload data visualization, search, filter and progress history manager.</p>
## Table of Contents
1. [Overview](#Overview)
2. [Demo](#Demo)
3. [TechStack](#TechStack)
4. [Schema](#Schema)
5. [API](#API)
6. [Installation](#Installation)
7. [Dependency](#Dependency)
8. [Wireframes](#Wireframes)

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

## Demo
![gaea_demo](https://user-images.githubusercontent.com/60201466/144822821-18c3c8a9-991c-442e-bfa4-086c0b8dac32.gif)

## TechStack
### Frontend
GAEA is a [React.js](https://reactjs.org/) App powered by Javascript, CSS, and [React Bootstrap](https://react-bootstrap.github.io/).

### Framework
GAEA is built in Python-based [Django REST Framework](https://www.django-rest-framework.org/).

### Database
The database is done on [SQLite](https://docs.python.org/3/library/sqlite3.html#module-sqlite3). Django supports [SQLite 3.9.0](https://docs.djangoproject.com/en/3.2/ref/databases/#sqlite-notes) and later.

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
## Schema 

![gaea_architecture_diagram](https://user-images.githubusercontent.com/60201466/144817870-aa948fd1-bffc-43aa-b770-5320720a64bd.jpg)


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

## Wireframes
![gaea1](https://user-images.githubusercontent.com/60201466/138014716-9162be01-db68-4349-b246-8f4160425d88.jpg)
![gaea2](https://user-images.githubusercontent.com/60201466/138014722-b793f975-f480-40b4-98ba-bfdd7b563e43.jpg)

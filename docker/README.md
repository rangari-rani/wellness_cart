# Docker Setup

This folder contains Docker configurations for local development of the WellnessCart application. It includes MySQL and Redis containers.

## Services

- **MySQL** (`wellness-cart-mysql`)
  - Image: `mysql`
  - Host Port: `3310`
  - Container Port: `3306`
  - Data initialized from: `data.sql`
  - Data persisted using volume: `wellness-cart-mysql-data`

- **Redis** (`wellness-cart-redis-container`)
  - Image: `redis:latest`
  - Host Port: `6380`
  - Container Port: `6379`
  - Data persisted using volume: `wellness-cart-redis-data`

## Usage

To start the containers:

```bash
docker-compose up -d

- **To stop the containers:**
docker-compose down

- MySQL Connection Info
You can connect to MySQL locally using:

Host: localhost

Port: 3310

⚠️ Note: These credentials are intended for local development only. Do not use them in production environments.

- Notes
MySQL will automatically execute the data.sql script located in this directory on the first run.

Redis is used for caching and runs with default configuration.


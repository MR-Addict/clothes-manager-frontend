# Clothes Manager Frontend

## 1. Develope project locally

Add `.env`:

```bash
NEXTAUTH_URL="http://localhost:3000/"
NEXTAUTH_SECRET="8GYrPDgw9wj5213UHWIm"
```

Install packages:

```bash
npm run build
```

Start development:

```bash
npm start
```

## 2. Deploy containerizedly

Add `.env`:

```bash
NEXTAUTH_URL="https://your.domain.com/"
NEXTAUTH_SECRET="8GYrPDgw9wj5213UHWIm"
```

Deploy to docker container:

```bash
docker-compose up -d
```

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, nstall dependancies:

```bash
npm install
```

Migrate database
```bash
npx prisma generate 

npx prisma migrate dev 

npx prisma db push
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

```bash
pnpm vercel deploy --prod # en production /!\

pnpm vercel deploy 
```



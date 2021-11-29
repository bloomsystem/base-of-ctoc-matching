# This is just Base of CtoC Matching Service

# Languages, Packages
 - Docker
 - Next.js
 - TypeScript 
 - ESLint
 - tailwind 
 - nextAuth
 - prisma
 - react-query
 - Vercel

# For development
## make bellow env file
```
mv source/freelance/.env.example source/freelance/.env
```
source/freelance/.env
```
NEXTAUTH_URL="http://localhost:3000"
DATABASE_URL="mysql://{user}:{password}@db:3306/environment"
```

```
mv source/freelance/.env.local.example source/freelance/.env.local
```
source/freelance/.env.local
```
GOOGLE_CLIENT_ID={client id}
GOOGLE_CLIENT_SECRET={client secret}
```

## make environment
```
docker-compose up
```

## in the container
```
# migrate DB
npx prisma migrate dev

#run lint
npm run lint
```
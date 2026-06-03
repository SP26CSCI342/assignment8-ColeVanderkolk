[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/jYpz8rDY)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=24057768&assignment_repo_type=AssignmentRepo)

## Live URLs

- **Client:** https://assignment8-cole-vanderkolk-8z0gnp9ln-colev-s-projects14.vercel.app
- **Server:** https://platescout-cole.onrender.com
- **Server health check:** https://platescout-cole.onrender.com/api/health

## Local setup

1. Clone the repo
2. Copy `server/.env.example` to `server/.env` and fill in `MONGO_URI` + `JWT_SECRET`
3. From the root: `npm install` (client) and `cd server && npm install` (server)
4. Two terminals: `npm run dev` (root, client) + `npm run dev` (server)
5. Open http://localhost:5173

## What I learned during deployment

The deployment process taught me the importance of environment-specific configuration and case sensitivity in cross-platform development. The most challenging part was debugging the MongoDB connection issue on Render. I initially thought the problem was with my database credentials, but it turned out the cluster was simply paused. Going forward, I would test the full deployment pipeline earlier in the project lifecycle rather than leaving it as a last-minute step, and I'd immediately enable detailed logging on all external services to catch configuration issues faster.

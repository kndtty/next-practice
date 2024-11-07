FROM node:22-alpine 
WORKDIR nextjs-dashboard
COPY . .
RUN npm install -g pnpm
CMD ash -c "pnpm install && pnpm dev"

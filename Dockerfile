# Step 1: Build the app using Node.js
FROM node:18 AS builder
WORKDIR /app
COPY ./my-vite-app/package*.json /app/
RUN npm install
COPY ./my-vite-app/ .

RUN npm run build

# Step 2: Serve the app using NGINX
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

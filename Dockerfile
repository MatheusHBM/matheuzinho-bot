FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install -g typescript
COPY . .
CMD ["node", "./app.js"]
#EXPOSE 3000
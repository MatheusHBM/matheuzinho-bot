FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install -g typescript
COPY . .
RUN npx tsc
CMD ["node", "./app.js"]
#EXPOSE 3000
# Step 1: Use the Node.js base image
FROM node:16

# Step 2: Set working directory
WORKDIR /app

# Step 3: Install netcat
RUN apt-get update && apt-get install -y netcat

# Step 4: Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Step 5: Install dependencies
RUN npm install

# Step 6: Copy the rest of the application code
COPY . .

# Step 7: Copy the wait-for-it script
COPY wait-for-it.sh ./wait-for-it.sh
RUN chmod +x ./wait-for-it.sh

# Step 7.5: set the memory to 4 gigas
ENV NODE_OPTIONS=--max-old-space-size=4096

# Step 8: Build the TypeScript code
RUN npm run build

# Step 9: Expose the port the app runs on
EXPOSE 3333

# Step 10: Start the application (handled by docker-compose command)

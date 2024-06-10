# Step 1 
FROM node:18-alpine as builder 

WORKDIR /src 
# COPY package.json ./
COPY . .
# install les dependances
RUN  npm install
# faire le build 
RUN npm run build

#step2 deployment

FROM node:18-alpine 
WORKDIR /src 

COPY  --from=builder  /src/dist ./dist 
COPY  --from=builder  /src/package.json ./ 
RUN  npm install --omit=dev
# exposition de port  
EXPOSE 3000:3000

# execution de l application
CMD [ "node","dist/main.js" ]
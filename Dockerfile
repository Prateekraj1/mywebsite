# Use an official Nginx image as a base
FROM nginx:alpine

# Copy the website files to the default Nginx public directory
COPY . /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]


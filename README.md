# 🏡 HopGo_TravelStayFinder

A dynamic travel stay discovery web application built with the MERN stack.  
Users can register, list stays, explore properties, and manage their profiles via a secure and responsive platform.

---

## 🚀 Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+), Bootstrap
- **Backend**: Node.js, Express.js, MongoDB (Mongoose)
- **Authentication**: Passport.js
- **Architecture**: MVC Pattern
- **Other Features**: RESTful APIs, Middleware, Error Handling, Flash Messages, Responsive UI

---

## ✅ Prerequisites

Before running this project, ensure you have:

- **Node.js**: Installed (version 14.x or higher recommended)
- **npm**: Installed (comes with Node.js)
- **Cloudinary Account**: For image uploads
- **MongoDB Atlas Account**: For database connection
- **Mapbox Token**: For map integration (optional)

---

## 🛠️ Installation

### 1. Clone the Repository:

```bash
git clone https://github.com/rahulagarwal27/HopGo_TravelStayFinder.git
cd HopGo_TravelStayFinder
```
## 2. Install Dependencies

```bash
npm install
```

3. Configure Environment Variables:
   
Create a .env file in the root directory and add the following:
```bash
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_SECRET=your_cloudinary_api_secret
CLOUD_API_KEY=your_cloudinary_api_key

MAP_TOKEN=your_mapbox_token
ATLASDB_URL=your_mongodb_connection_string
SECRET=your_session_secret_key
```
⚡ Note: Without the correct environment variables, features like image upload and database connectivity will not work.

4. Start the Development Server:
```bash
node app3.js
```
5. Open your browser and navigate to:
```bash
http://localhost:8080
```

## 📚 Features

✨ User Authentication (Sign Up, Sign In, Sign Out)  
✨ List New Travel Stays with Details and Images  
✨ Update and Delete Listings (Only by Creator)  
✨ Flash Messages for User Feedback (Success, Errors)  
✨ Image Uploads Managed by Cloudinary  
✨ MVC Backend Architecture for Clean Code Organization  
✨ RESTful APIs for Smooth Frontend-Backend Communication  
✨ Responsive, Mobile-Friendly UI using Bootstrap  
✨ Dynamic Map Integration (Mapbox Support)  
✨ Secure Sessions using Cookies and Express Middleware  
✨ Proper Error Handling for Routes and Server Errors

🤝 Contributing
Contributions, bug reports, and feature suggestions are welcome!
Feel free to fork the repository and submit a pull request.








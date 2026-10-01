# 🏡 StaySphere - Property Rental Platform

> **A full-stack Airbnb-inspired property rental platform built with Node.js, Express.js, MongoDB, and EJS.**

StaySphere is a modern property rental web application that enables users to discover, create, update, and manage rental listings. The platform features secure authentication, image uploads, interactive maps, reviews & ratings, and a responsive user interface, providing a seamless booking and property management experience.

---

## 🚀 Features

### 👤 User Authentication

* Secure User Registration & Login
* Passport.js Authentication
* Session Management
* Flash Messages

### 🏠 Property Management

* Create Property Listings
* View All Listings
* Update Existing Listings
* Delete Listings
* Upload Property Images

### 🔍 Search Functionality

Search listings by:

* Property Title
* Location
* Country
* Description

### ⭐ Reviews & Ratings

* Add Reviews
* Delete Reviews
* Rating System

### 🗺️ Maps Integration

* Interactive Maps using Mapbox
* Property Location Display

### ☁️ Cloud Storage

* Cloudinary Image Upload
* Secure Image Storage

### 🛡️ Security & Validation

* Route Protection
* Authorization Middleware
* Client-side Validation
* Server-side Validation (Joi)
* Error Handling

### 🏗️ Architecture

* MVC Architecture
* RESTful Routing
* Responsive Bootstrap UI

---

# 🛠️ Tech Stack

| Category              | Technologies                                    |
| --------------------- | ----------------------------------------------- |
| **Frontend**          | HTML5, CSS3, Bootstrap 5, EJS, JavaScript (ES6) |
| **Backend**           | Node.js, Express.js                             |
| **Database**          | MongoDB, Mongoose                               |
| **Authentication**    | Passport.js, Express Session, Connect Flash     |
| **Cloud Services**    | Cloudinary, Mapbox                              |
| **Development Tools** | Git, GitHub, VS Code                            |

---

# 📂 Project Structure

```text
WanderLust/
│
├── controllers/
├── models/
├── routes/
├── views/
│   ├── layouts/
│   ├── listings/
│   ├── users/
│   └── includes/
├── public/
│   ├── css/
│   ├── js/
│   └── images/
├── utils/
├── middleware.js
├── cloudConfig.js
├── schema.js
├── app.js
├── package.json
└── .env
```

---

# ⚙️ Installation

## 1️⃣ Clone Repository

```bash
git clone https://github.com/Krishnapal-Chouhan/StaySphere-Property-Rental-Platform-.git
```

## 2️⃣ Navigate to Project

```bash
cd StaySphere-Property-Rental-Platform-
```

## 3️⃣ Install Dependencies

```bash
npm install
```

## 4️⃣ Configure Environment Variables

Create a `.env` file and add the following:

```env
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_cloudinary_key
CLOUDINARY_SECRET=your_cloudinary_secret

MAPBOX_TOKEN=your_mapbox_token

ATLASDB_URL=your_mongodb_connection_string

SECRET=your_session_secret
CARTO_API_KEY= api_Key
```

## 5️⃣ Run the Application

```bash
node app.js
```

or

```bash
nodemon app.js
```

The application will run on:

```text
http://localhost:8080
```

---

# 📸 Project Screenshots

## 🏠 Home Page
<img width="1479" height="986" alt="image" src="https://github.com/user-attachments/assets/65b65de7-fd4d-469a-8520-bcb3c7ce911f" />

---

## 📄 Listing Details
<img width="1652" height="946" alt="image" src="https://github.com/user-attachments/assets/89fff350-6d2b-42ce-8ea2-96120160a96f" />

---

## 🔍 Search Functionality

Search listings instantly by title, location, country, or description.

<img width="1717" height="939" alt="image" src="https://github.com/user-attachments/assets/3d160e91-f1f7-40a5-9bf0-5ca6140a607c" />


---

## ➕ Add Listing

<img width="1490" height="940" alt="image" src="https://github.com/user-attachments/assets/1055daf8-1b88-49fe-b8e9-e09e89bdd149" />

---

## ✏️ Edit Listing

<img width="1030" height="909" alt="image" src="https://github.com/user-attachments/assets/1bca250c-7abe-486d-9d3f-f871669f5327" />


---

## ⭐ Review System
<img width="1626" height="920" alt="image" src="https://github.com/user-attachments/assets/19e23cc0-6521-4bf5-9769-18eb7dcf46c3" />

---

## 🗺️ Map Integration

<img width="1904" height="929" alt="image" src="https://github.com/user-attachments/assets/220527c0-991b-4c5d-a0fd-7d75078be303" />

---

## 🔐 Login Page

<img width="1669" height="916" alt="image" src="https://github.com/user-attachments/assets/4af4772f-312a-40c2-a8bb-68016fa4e76a" />

---

## 📝 Signup Page
<img width="1566" height="942" alt="image" src="https://github.com/user-attachments/assets/6cfefd97-eab9-4f4f-be9a-711428524bd9" />

---

## ✅ Client-side Validation

<img width="923" height="940" alt="image" src="https://github.com/user-attachments/assets/cc32f08a-bece-4efb-9818-74cf16453614" />


---

## 🛡️ Server-side Validation

<img width="1837" alt="Server Validation" src="https://github.com/user-attachments/assets/6c5f5f2d-3f86-4bb5-9940-9f795325f115" />

---

## 📌 Footer

<img width="1904" height="944" alt="image" src="https://github.com/user-attachments/assets/b90fe26b-2b7e-445c-be8e-36e6de502f59" />

## 📝 Profile page
<img width="1917" height="1000" alt="Screenshot 2026-10-01 164051" src="https://github.com/user-attachments/assets/96c7cfd6-25d5-4ede-93be-e9129677a875" />


## 📝 Profile page Edit
<img width="1919" height="956" alt="Screenshot 2026-10-01 164124" src="https://github.com/user-attachments/assets/b35fc77a-1cc0-45c2-a18a-f19ca7f9a3f3" />

---

# 🎯 Key Learning Outcomes

* Full Stack Web Development using Node.js & Express.js
* Authentication & Authorization with Passport.js
* MongoDB Database Design & Relationships
* RESTful API Development
* MVC Architecture Implementation
* Cloudinary Image Upload & Management
* Interactive Maps using Mapbox
* Search using MongoDB Regular Expressions (`$regex`)
* Client-side & Server-side Validation
* Session Management & Flash Messages
* Responsive UI Design using Bootstrap

---

# 🚀 Future Enhancements

* ❤️ Wishlist Feature
* 📅 Booking System
* 💳 Online Payments (Stripe/Razorpay)
* 👤 User Dashboard
* 🏷️ Property Categories & Filters
* 🔔 Email Notifications
* 🌙 Dark Mode
* 📊 Admin Dashboard

---

# 👨‍💻 Author

**Krishnapal Chouhan**

* **GitHub:** https://github.com/Krishnapal-Chouhan
* **LinkedIn:** https://linkedin.com/in/krishnapalchouhan

---

# ⭐ Support

If you found this project helpful, consider giving it a **⭐ Star** on GitHub. Your support motivates future improvements and helps others discover the project.

---

# 📄 License

This project is developed for **learning, educational, and portfolio purposes**.

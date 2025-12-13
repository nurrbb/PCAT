# PCAT – Photo Catalog Application

PCAT is a **photo catalog web application** developed using **Node.js, Express, MongoDB, and EJS**.  
The project allows users to upload, view, update, and delete photos while following the **MVC (Model–View–Controller)** architectural pattern.

This application is built as an educational project to practice backend fundamentals such as routing, controllers, database operations, file uploads, and template rendering.

---

## 🚀 Features

- Upload photos with title and description
- View all uploaded photos on the homepage
- View single photo detail pages
- Update photo information
- Delete photos (both from database and file system)
- MVC architecture for clean code separation
- File upload handling with `express-fileupload`
- Method override for PUT & DELETE requests
- MongoDB integration using Mongoose
- Server-side rendering with EJS
- Confirmation popup before deleting photos

---


---

## 🧠 MVC Architecture

The project is structured using the **MVC design pattern**:

### Model
- Defines the data schema and database structure.
- Uses **Mongoose** to interact with MongoDB.
- Example: `Photo.js`

### View
- EJS templates responsible for displaying data to the user.
- Handles dynamic rendering of photos and forms.

### Controller
- Handles incoming HTTP requests.
- Contains business logic.
- Connects Model and View layers.

---

## 📄 Routes Overview

| Method | Route | Description |
|------|------|-------------|
| GET | `/` | Display all photos |
| GET | `/photos/:id` | Display single photo |
| GET | `/add` | Add new photo page |
| POST | `/photos` | Create a new photo |
| GET | `/photos/edit/:id` | Edit photo page |
| PUT | `/photos/:id` | Update photo |
| DELETE | `/photos/edit/:id` | Delete photo |
| GET | `/about` | About page |

---

## 📁 File Upload Handling

- Photo uploads are handled using **express-fileupload**
- Uploaded files are stored in:
public/uploads/

- When a photo is deleted:
- The database record is removed
- The physical image file is also deleted using Node.js `fs` module

---

## 🔁 Method Override

Browsers do not support PUT and DELETE requests directly in forms.  
To solve this, the project uses **method-override**:

```js
methodOverride('_method', {
methods: ['POST', 'GET']
})
```

This allows simulating PUT and DELETE requests via POST forms.

## ⚙️ Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS
- Express-fileupload
- Method-Override
- File System (fs)
- Bootstrap-based UI template

---

## ▶️ Installation & Run

1. Clone the repository
```bash
git clone https://github.com/yourusername/pcat.git
```

2. Install dependencies
```
npm install
```

3. Start MongoDB
```
mongod
```

4. Run the application
```
node app.js
```

5.Open in browser
```
http://localhost:3000
```

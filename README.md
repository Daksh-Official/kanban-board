# Mini Kanban Board

A highly interactive, Trello-inspired Kanban board built with **Next.js** and **Tailwind CSS**. This project was developed as part of a technical assessment to demonstrate proficiency in modern React patterns, state management, and responsive UI design.

**Live Demo:** [https://kanban-board-ten-navy.vercel.app/](https://kanban-board-ten-navy.vercel.app/)

## 🚀 Features

* [cite_start]**Create & Manage Tasks:** Easily add new cards with titles and descriptions. [cite: 5, 6, 7]
* [cite_start]**Workflow Management:** Move cards seamlessly between **Pending**, **In Progress**, and **Completed** stages. [cite: 10, 11, 12]
* [cite_start]**Full CRUD Operations:** Support for editing card details and deleting cards with a confirmation prompt. [cite: 14, 16, 17, 18]
* [cite_start]**Data Persistence:** Utilizes browser `localStorage` to ensure your tasks remain saved even after a page refresh. [cite: 32]
* [cite_start]**Responsive Design:** Fully styled with Tailwind CSS for a modern, dark-mode aesthetic. [cite: 22]
* [cite_start]**Optimized UI:** Includes loading states, empty column indicators, and custom-styled scrollbars. [cite: 29]

## 🛠️ Tech Stack

* [cite_start]**Framework:** Next.js (App Router) [cite: 20]
* [cite_start]**Library:** React (Functional Components) [cite: 21]
* [cite_start]**Styling:** Tailwind CSS [cite: 22]
* **Icons:** LordIcon (Animated Icons)
* [cite_start]**Deployment:** Vercel [cite: 39]

## 📥 Installation & Local Setup

[cite_start]Follow these steps to run the project locally on your machine[cite: 38]:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Daksh-Official/kanban-board.git](https://github.com/Daksh-Official/kanban-board.git)
    cd nextjs-kanban-board
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Access the app:**
    Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔮 Future Plans: Advanced Data Persistence

To evolve this project into a production-ready application, the next phase of development includes:

### 1. User Authentication
Implementing **NextAuth.js** or **Clerk** to allow users to create personal accounts, ensuring their boards are private and accessible from any device.

### 2. MongoDB Integration
Moving away from client-only storage to a **MongoDB** backend. This will allow for robust data storage, cross-browser synchronization, and better handling of complex data relations.

### 3. Smart Data Syncing (Timestamp Logic)
To provide a seamless offline-to-online experience, I plan to implement a synchronization engine:
* **Local-First Strategy:** Every card will have a `lastUpdated` timestamp.
* **Conflict Resolution:** When a user logs in, the app will compare the timestamps in `localStorage` against the records in the **MongoDB** server.
* **Sync Logic:** The system will automatically push the most recently updated local changes to the server or pull the latest server data if the local version is outdated. This ensures data integrity even with intermittent internet connectivity.
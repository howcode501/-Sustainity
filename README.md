Sustainity Backend

Overview

This project is a backend service for processing CSV files, saving mapping configurations in MongoDB, and providing data retrieval with pagination. It features:

CSV file upload and processing

Mapping configuration storage

CSV preview (first 10 rows)

Asynchronous processing with Bull.js

Unit testing with Jest/Mocha

Tech Stack

Node.js (Express.js)

MongoDB (Mongoose ODM)

Multer (File Upload)

Bull.js (Queue Processing)

Winston (Logging)

csv-parser (CSV Processing)

Jest/Mocha (Unit Testing)


Installation & Setup

Prerequisites

Ensure you have the following installed:

Node.js (20.3.1)

MongoDB (running locally or on cloud)
Clone the Repository

git clone https://github.com/your-repo/sustainity-backend.git
cd sustainity-backend


Install Dependencies

npm install

Start the Server

npm run serve



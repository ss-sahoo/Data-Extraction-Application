# Invoice Data Extraction Web Application

This web application allows users to upload PDF documents or images of invoices, extract key-value pairs from the documents, and save the extracted data into a CSV file. The backend is built using Django, and the frontend is developed using React.js.

## Approach and Design Choices:

### Backend (Django):

- Utilized Django for the backend to handle file uploads, data extraction, and CSV file generation.
- Implemented a PDF to image conversion functionality using pdf2image library for OCR.
- Leveraged pytesseract for Optical Character Recognition (OCR) to extract text data from images.
- Designed a data extraction module to parse the extracted text and identify key-value pairs.
- Implemented data validation to ensure accuracy and consistency of extracted data.
- Created APIs to communicate with the frontend and handle file uploads and data extraction requests.

### Frontend (React.js):

- Developed a user-friendly interface using React.js to allow users to upload invoices.
- Implemented a file uploader component to handle PDF and image uploads.
- Designed a data display component to show the extracted key-value pairs.
- Provided feedback to users on the extraction process and displayed any errors or warnings.

## Challenges Faced:

- Ensuring accuracy and consistency in data extraction, especially from invoices with varying layouts and formats.
- Handling errors and edge cases during OCR and data parsing.
- Integrating frontend and backend components seamlessly.

## Instructions to Run the Application:

### Backend (Django):

1. Install Python (if not already installed).
2. Create a virtual environment and activate it.
3. Install dependencies using the command: `pip install -r requirements.txt`.
4. Navigate to the `backend` directory.
5. Run Django migrations: `python manage.py migrate`.
6. Start the Django development server: `python manage.py runserver`.

### Frontend (React.js):

1. Install Node.js and npm (if not already installed).
2. Navigate to the `frontend` directory.
3. Install dependencies using the command: `npm install`.
4. Start the React development server: `npm start`.

### Accessing the Application:

- Once both the backend and frontend servers are running, you can access the web application by visiting `http://localhost:3000` in your web browser.

## Note:

- Make sure to have all dependencies installed before running the application.
- For production deployment, consider deploying the backend and frontend separately or using containerization technologies like Docker.

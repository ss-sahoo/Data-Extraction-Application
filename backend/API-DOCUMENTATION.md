# Invoice Data Extraction Script Documentation

## Assumptions:

1. The PDF document contains structured data, including header data and tabular data.
2. The structure of the invoice is somewhat consistent across different documents.
3. The text in the invoice is readable and can be extracted using OCR techniques.
4. The key-value pairs to be extracted are identifiable based on their relative positions or formatting.

## Challenges:

1. **Data Extraction:** Extracting structured data from a PDF or an image requires OCR (Optical Character Recognition), which may not always provide perfect results due to variations in text quality, fonts, and layout.
2. **Handling Tabular Data:** Identifying and parsing tabular data accurately can be challenging, especially if the table structure varies across different invoices.
3. **Data Validation:** Ensuring the extracted key-value pairs are accurate and valid can be challenging, especially when dealing with variations in formatting or unexpected data.

## Script Functionality:

The Python script utilizes the `pytesseract` library for OCR and `pdf2image` library for converting PDFs to images. Here's how it works:

1. **Input Handling:** The script accepts a PDF document or an image file (e.g., JPEG, JPG, PNG).
2. **PDF to Image Conversion:** If the input is a PDF, it converts the PDF pages to images using `pdf2image`.
3. **Text Extraction:** It then uses `pytesseract` to perform OCR on the images, extracting text data.
4. **Data Parsing:** The extracted text is parsed to identify key-value pairs. This may involve techniques such as regular expressions or specific patterns based on the structure of the invoice.
5. **Data Validation:** The extracted key-value pairs are validated to ensure accuracy and consistency.
6. **CSV Output:** Finally, the validated key-value pairs are saved into a CSV file for further processing or analysis.

## Conclusion:

While the script provides a basic framework for extracting key-value pairs from invoices, it may require customization and fine-tuning to handle specific invoice formats or edge cases. Continuous testing and refinement may be necessary to improve its accuracy and robustness across different documents.

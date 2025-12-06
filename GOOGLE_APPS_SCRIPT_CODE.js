/**
 * Google Apps Script for Tipping Bridge Contact Form
 * This script receives form submissions and saves them to Google Sheets
 */

// Simple test function for GET requests (when accessing URL in browser)
function doGet(e) {
  return ContentService.createTextOutput('Google Apps Script is working! Form submissions will be saved via POST requests.');
}

// Main function that handles form submissions
function doPost(e) {
  try {
    // Get the active spreadsheet (the sheet where this script is attached)
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents);
    
    // Prepare the row data in the correct order
    // Make sure this matches your sheet column headers:
    // Timestamp | Name | Email | Phone | Service/Country | Message/Type
    const rowData = [
      data.timestamp || new Date().toISOString(),
      data.name || '',
      data.email || '',
      data.phone || '',
      data.service || data.country || data.type || 'Not specified',
      data.message || ''
    ];
    
    // Append the row to the sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Data saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Log error for debugging
    console.error('Error saving data:', error);
    
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Test function - Run this to test if the script works
 * Click "Run" button in Apps Script editor to test
 */
function test() {
  const testData = {
    timestamp: new Date().toISOString(),
    name: 'Test User',
    email: 'test@example.com',
    phone: '+1234567890',
    service: 'Property Management',
    message: 'This is a test message from Apps Script'
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  Logger.log(result.getContent());
}


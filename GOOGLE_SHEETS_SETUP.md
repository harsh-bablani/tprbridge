# Google Sheets Integration Setup Guide

This guide will help you set up Google Sheets to automatically record contact form submissions.

## Quick Start

1. **Open your Google Sheet**: [Click here](https://docs.google.com/spreadsheets/d/1I_WAyj2qWtK-ZKJftjbB-dbmWfBxnQbG9TlFsreVHzs/edit)
2. **Set up column headers** (see Step 1 below)
3. **Create Apps Script** (see Step 2 below)
4. **Deploy as Web App** (see Step 3 below)
5. **Add the Web App URL to your `.env` file** (see Step 4 below)
6. **Test it!** (see Step 5 below)

## Your Google Sheet

Your sheet is already created: [Open Your Sheet](https://docs.google.com/spreadsheets/d/1I_WAyj2qWtK-ZKJftjbB-dbmWfBxnQbG9TlFsreVHzs/edit)

**Sheet ID**: `1I_WAyj2qWtK-ZKJftjbB-dbmWfBxnQbG9TlFsreVHzs`

## Step 1: Set Up Column Headers

1. Open your Google Sheet using the link above
2. Make sure the first row has these column headers (in this exact order):
   - **Timestamp**
   - **Name**
   - **Email**
   - **Phone**
   - **Service** (or **Country** for brochure form)
   - **Message** (or **Type** for brochure form)

If the headers are different, update them to match this format.

## Step 2: Create Google Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
   - OR go directly to [Google Apps Script](https://script.google.com) and create a new project
2. If this is a new script, it will create a new project. If you see existing code, delete it.
3. Name your project: "Tipping Bridge Form Handler" (click the project name at the top)
4. Copy the code from `GOOGLE_APPS_SCRIPT_CODE.js` file in your project, OR copy and paste this code (replace everything in the editor):

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Prepare the row data
    const rowData = [
      data.timestamp || new Date().toISOString(),
      data.name || '',
      data.email || '',
      data.phone || '',
      data.service || data.country || data.type || '',
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
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function (optional - for testing)
function test() {
  const testData = {
    timestamp: new Date().toISOString(),
    name: 'Test User',
    email: 'test@example.com',
    phone: '+1234567890',
    service: 'Property Management',
    message: 'This is a test message'
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  doPost(mockEvent);
}
```

## Step 3: Save and Deploy as Web App

1. Click the **Save** button (💾) or press `Ctrl+S` / `Cmd+S`
2. Click **Deploy** → **New deployment**
3. Click the gear icon ⚙️ next to "Select type" and choose **Web app**
4. Fill in the details:
   - **Description**: "Contact Form Handler"
   - **Execute as**: "Me" (your email)
   - **Who has access**: **"Anyone"** (IMPORTANT: This is safe - the script only writes to your specific sheet)
5. Click **Deploy**
6. **IMPORTANT**: Copy the Web App URL that appears - it will look like:
   ```
   https://script.google.com/macros/s/AKfycby.../exec
   ```
   **Save this URL somewhere safe - you'll need it in the next step!**
7. Click **Authorize access** and grant permissions:
   - Click "Review permissions"
   - Choose your Google account
   - Click "Advanced" → "Go to [Project Name] (unsafe)" (this is safe, it's just Google's warning)
   - Click "Allow"

## Step 4: Add URL to Your Project

1. Create a `.env` file in your project root (if it doesn't exist)
2. Add this line with your Web App URL:

```env
VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

Replace `YOUR_SCRIPT_ID` with the actual ID from your Web App URL.

3. Restart your development server for the changes to take effect

## Step 5: Test It!

1. Fill out the contact form on your website
2. Submit it
3. Check your Google Sheet - you should see a new row with the form data!

## Troubleshooting

- **No data appearing?** Check the browser console for errors
- **Permission denied?** Make sure you set "Who has access" to "Anyone" in the deployment settings
- **Script not working?** Make sure you saved the script and deployed it as a Web App (not just saved)

## Security Note

The Web App URL is public, but it only writes to your specific Google Sheet. The script validates the data structure, so random requests won't break anything. For additional security, you can add authentication checks in the script.


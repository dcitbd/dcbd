/**
 * Standard JSON Response Builder
 */
function createJsonResponse(data, status = 200) {
  const output = JSON.stringify(data);
  return ContentService.createTextOutput(output)
    .setMimeType(ContentService.MimeType.JSON);
}

function successResponse(data, message = "Success") {
  return createJsonResponse({
    success: true,
    message: message,
    data: data,
    timestamp: new Date().toISOString()
  });
}

function errorResponse(message, status = 400) {
  return createJsonResponse({
    success: false,
    message: message,
    timestamp: new Date().toISOString()
  });
}
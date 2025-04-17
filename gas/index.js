// google apps script
function doHttpRequest(options) {
	const params = {
		method: options.method,
		muteHttpExceptions: true,
		headers: options.headers || {},
	};
	if (options.body && options.method !== "GET" && options.method !== "HEAD") {
		params.payload = options.body;
	}
	const response = UrlFetchApp.fetch(options.url, params);
	return {
		status: response.getResponseCode(),
		headers: response.getAllHeaders(),
		content: response.getContentText(),
	};
}

function doGet() {
	return HtmlService.createHtmlOutputFromFile("index")
		.addMetaTag("viewport", "width=device-width, initial-scale=1.0")
		.setTitle("HTTP Request Runner")
		.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function include(filename) {
	return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

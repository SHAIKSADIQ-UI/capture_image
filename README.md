# capture_image
capture-image/
├── index.html              # Front-end with React.js and embedded Tailwind CSS
├── server.js               # Backend with Node.js and opencv4nodejs
├── package.json            # Node.js dependencies
├── tailwind.config.js      # Tailwind CSS configuration (optional)
├── input.css               # Tailwind CSS input file (optional)
└── README.md               # Project documentation


CaptureImage - Computer Vision with Real-Time UI
A full-stack computer vision application that captures images via webcam, processes them using OpenCV (grayscale conversion), and displays results in a responsive React.js UI.
Tech Stack

Front-end: React.js, JavaScript, Tailwind CSS
Back-end: Node.js, opencv4nodejs
APIs: REST API for image processing

Features

Captures and processes 1,000+ images with optimized algorithms.
Responsive UI for live webcam feed and processed image display.
Real-time image preprocessing (grayscale) using OpenCV.

Prerequisites

Node.js v18.19.1 or later
OpenCV libraries (libopencv-dev for Linux, opencv via Homebrew for macOS, or OpenCV binaries for Windows)
Web browser with webcam access

Setup Instructions

Clone the Repository:
git clone <repository-url>
cd capture-image


Install Dependencies:
npm install


Install OpenCV:

Ubuntu/Linux:sudo apt-get update
sudo apt-get install -y libopencv-dev cmake g++ python3


macOS:brew install opencv


Windows:
Install CMake and Visual Studio Build Tools.
Download OpenCV from https://opencv.org/releases/ or use vcpkg install opencv.
Set OpenCV_DIR environment variable (e.g., C:\opencv\build).




Run the Backend:
node server.js


Run the Front-end:

Open index.html in a browser (e.g., Chrome, Firefox).
Grant webcam access when prompted.


Optional: Generate Tailwind CSS:
npm run build:css


Replace the <style> tag in index.html with <link href="output.css" rel="stylesheet"> and serve via the backend.



Usage

Open index.html in a browser.
Verify "Connected to backend server" message.
Click "Capture & Process" to capture a webcam image and display the grayscale result.
Check browser console (F12) or server terminal for errors.

Troubleshooting

OpenCV Errors: Ensure opencv4nodejs is installed (npm install opencv4nodejs).
Server Not Connected: Verify server.js is running at http://localhost:3000.
Webcam Issues: Grant webcam permissions or try a different browser.

License
MIT License

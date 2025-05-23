const express = require('express');
const cors = require('cors');
let cv;

try {
  cv = require('opencv4nodejs');
} catch (error) {
  console.error('Failed to load opencv4nodejs. Ensure OpenCV is installed and configured correctly.');
  process.exit(1);
}

const app = express();

app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

app.post('/process-image', (req, res) => {
  try {
    if (!req.body.image) {
      return res.status(400).json({ error: 'No image data provided' });
    }

    const base64Image = req.body.image.split(',')[1];
    if (!base64Image) {
      return res.status(400).json({ error: 'Invalid image data format' });
    }

    const imageBuffer = Buffer.from(base64Image, 'base64');
    
    // Load image into OpenCV
    const mat = cv.imdecode(imageBuffer);
    if (!mat || mat.empty()) {
      return res.status(400).json({ error: 'Failed to decode image' });
    }
    
    // Preprocess: Convert to grayscale
    const grayMat = mat.cvtColor(cv.COLOR_BGR2GRAY);
    
    // Encode processed image back to base64
    const processedBuffer = cv.imencode('.jpg', grayMat);
    const processedBase64 = `data:image/jpeg;base64,${processedBuffer.toString('base64')}`;
    
    res.json({ processedImage: processedBase64 });
  } catch (error) {
    console.error('Error processing image:', error.message);
    res.status(500).json({ error: 'Image processing failed: ' + error.message });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

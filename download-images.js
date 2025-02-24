const https = require('https');
const fs = require('fs');
const path = require('path');

const PIXABAY_API_KEY = '49017889-8ce0c1c9a15ac170e16c04a1e';
const IMAGE_QUERIES = [
  { query: 'telegram chat bot interface', filename: 'telegram-integration.webp' },
  { query: 'vk social network interface', filename: 'vk-1.webp' },
  { query: 'vk messenger chat', filename: 'vk-2.webp' },
  { query: 'vk communication app', filename: 'vk-3.webp' },
  { query: 'vk social media interface', filename: 'vk-4.webp' },
  { query: 'vk chat messenger', filename: 'vk-5.webp' },
  { query: 'artificial intelligence voice', filename: 'brand-voice-learning.webp' }
];

const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    const dir = path.join(process.cwd(), 'public', 'images');
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const filePath = path.join(dir, filename);
    const file = fs.createWriteStream(filePath);
    
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download image: ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Successfully downloaded: ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filePath, () => {});
      reject(err);
    });
  });
};

const getPixabayImage = async (query, filename) => {
  const params = new URLSearchParams({
    key: PIXABAY_API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 3,
    min_width: 1200,
    safesearch: true,
    lang: 'en',
    order: 'popular'
  });
  
  const url = `https://pixabay.com/api/?${params.toString()}`;
  
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      let data = '';
      response.on('data', (chunk) => { data += chunk; });
      response.on('end', async () => {
        try {
          if (response.statusCode === 429) {
            reject(new Error('API rate limit exceeded'));
            return;
          }
          
          if (response.statusCode !== 200) {
            reject(new Error(`Pixabay API error: ${response.statusCode} - ${data}`));
            return;
          }

          const result = JSON.parse(data);
          console.log(`Found ${result.totalHits} images for query: "${query}"`);
          
          if (result.hits && result.hits.length > 0) {
            // Get the first (most popular) result
            const imageUrl = result.hits[0].largeImageURL;
            console.log(`Downloading from URL: ${imageUrl}`);
            await downloadImage(imageUrl, filename);
            resolve();
          } else {
            reject(new Error(`No images found for query: ${query}`));
          }
        } catch (err) {
          console.error('Error parsing API response:', data);
          reject(err);
        }
      });
    }).on('error', reject);
  });
};

async function downloadAllImages() {
  for (const { query, filename } of IMAGE_QUERIES) {
    try {
      console.log(`Processing query: ${query}`);
      await getPixabayImage(query, filename);
      // Add a delay between requests to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (err) {
      console.error(`Error downloading ${filename}:`, err.message);
    }
  }
}

downloadAllImages(); 
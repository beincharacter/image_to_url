# ImageToURL

ImageToURL is a streamlined solution developed to address the challenge of storing large assets, such as images and videos, directly within projects, which often led to performance bottlenecks. Leveraging the Cloudinary API, this tool efficiently stores assets in the cloud and provides URLs for easy retrieval and integration into projects.

## Key Features

- **MERN Stack Implementation**: Built using MongoDB, Express.js, React.js, and Node.js, ensuring a robust and scalable architecture.
- **Drag-and-Drop Functionality**: Users can easily drag and drop multiple files simultaneously, simplifying the upload process.
- **URL Generation**: Automatically processes and stores uploaded files, generating URLs for seamless access and integration.
- **Alternative Upload Option**: In addition to drag-and-drop, users can manually upload files, offering flexibility in asset management.

## Live Demo

Check out the live demo [here](https://imagetourl.onrender.com/).

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/beincharacter/image_to_url.git
    cd image_to_url
    ```

2. **Install dependencies**:
    ```bash
    npm install

3. **Set up environment variables**:
    Create a `.env` file in the root directory and add the following:
    ```env
    CLOUDINARY_CLOUD_NAME=your_cloud_name
    CLOUDINARY_API_KEY=your_api_key
    CLOUDINARY_API_SECRET=your_api_secret
    MONGO_URI=your_mongo_uri
    PORT=5000
    ```

4. **Start the application**:
    ```bash
    npm start
    ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Use the drag-and-drop functionality to upload images and videos, or click to manually upload files.
3. The uploaded files will be processed and stored in Cloudinary, and URLs will be generated for easy retrieval.

## Configuration

- **Cloudinary API**: Sign up for a Cloudinary account and get your API credentials.
- **MongoDB**: Set up a MongoDB database and get your connection URI.

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to customize this `README.md` to better suit your project's needs. Happy coding!

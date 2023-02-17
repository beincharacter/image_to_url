import React, { useCallback, useState } from 'react';
import "./Dropzone.scss";
import { useDropzone } from 'react-dropzone';
import { Image } from 'cloudinary-react';
import axios from 'axios';
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ThreeCircles } from "react-loader-spinner";

const CLOUDINARY_UPLOAD_PRESET = process.env.CLOUDINARY_UPLOAD_PRESET;
const CLOUDINARY_UPLOAD_URL = process.env.CLOUDINARY_UPLOAD_URL;

export function MyDropzone() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: 'image/*',
    multiple: true,
    onDrop: useCallback((acceptedFiles) => {
      setLoading(!loading);
      acceptedFiles.forEach((file) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
        formData.append('public_id', file.name);

        axios.post(CLOUDINARY_UPLOAD_URL, formData, {
          headers: { 'X-Requested-With': 'XMLHttpRequest' },
        }).then((response) => {
          setLoading(false);
          setImages((prevImages) => [...prevImages, { url: response.data.secure_url }]);
        }).catch((error) => {
          console.log(error);
        });
      });
    }, [])
    
  });


  return (
    <div className='main_container'>
      <ThreeCircles
        height="100"
        width="100"
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass="loading"
        visible={loading}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
      <div className='dropzone_'>
        <div className='dropzone__container' {...getRootProps()}>
          <input {...getInputProps()} />
          <div>
            {isDragActive ? <p className='drop_active' >Drag here</p> :
              <>
                <p >Drag & Drop to Upload Files</p>
                <p>OR</p>
                <button type="button" className='btn'>Browse Files</button>
              </>
            }
          </div>
        </div>
        <ul className='dropzone__url'>
          {images.map((image, i) => (
            <li key={image.url+i} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <Image className="image_" cloudName="doh91aq3h" publicId={image.url} width="50" />
              <input className='input' type="text" readOnly value={image.url} />
              <CopyToClipboard
                options={{ message: 'Whoa!' }}
                text={image.url}>
                <button >Copy</button>
              </CopyToClipboard>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

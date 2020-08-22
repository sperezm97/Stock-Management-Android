import { app } from '../firebase/';
import { storage } from 'firebase';

export const uploadImage = async (uri: string) => {
  const fileExtension = uri.split('.').pop();
  const path = `products/photos/jc.${fileExtension}`;
  const storageRef = app.storage().ref(path);

  const response = await fetch(uri);

  const file = await response.blob();
  // storageRef.child(`${path}`).
  const fileUrl = await storageRef.getDownloadURL();
  storageRef.put(file).on(
    'state_changed',
    (snapshot) => {
      let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case 'paused': // or 'paused'
          console.log('Upload is paused');
          break;
        case 'running': // or 'running'
          console.log('Upload is running');
          break;
      }
    },
    (error) => {
      console.log('image upload error: ' + error.toString());
    },
  );

  return `${fileUrl}`;
};

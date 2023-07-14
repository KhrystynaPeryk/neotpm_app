import { getStorage, ref, getDownloadURL  } from "firebase/storage";
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebaseConfig';
import axios from 'axios'; 

export const downloadFirebaseFile = (fileName) => {
    const defaultProject = initializeApp(firebaseConfig);
    let storage = getStorage(defaultProject);
    const BrochureRef = ref(storage, fileName);
    getDownloadURL(BrochureRef).then((url) => {
        axios({
            method: 'GET',
            url: url,
            responseType: 'blob',
        })
        .then((response) => {  
            const blob = response.data;
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = fileName;
            link.click();
            URL.revokeObjectURL(link.href);
        })
        .catch((error) => {
            console.log(error)
        });
    });
}
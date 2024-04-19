import { getStorage, ref, getDownloadURL  } from "firebase/storage";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite'; // using lite sdk just for CRUD funcitonality
import { firebaseConfig } from './firebaseConfig';
import axios from 'axios'; 

// downloads a file (fileName) from Firebase Storage
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

// to fetch an array of documents in leads collection in Cloud Firestore
export const fetchLeadsfromFirestore = async() => {
    const app = initializeApp(firebaseConfig)
    const db = getFirestore(app)
    const leadsCol = collection(db, 'leads')
    const leadsSnapshot = await getDocs(leadsCol);
    const leadsList = leadsSnapshot.docs.map(doc => doc.data());
    return leadsList;
}

// date for saving the lead into Cloud Firestore
const formatDate = (date) => {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    const formattedDate = new Date(date).toLocaleDateString('en-GB', options);
    return formattedDate.replace(/ /g, '-')
};

const today = new Date()
const formattedToday = formatDate(today)

// to save a lead into Cloud Firestore
export const saveLeadToFirestore = async(lead, source) => {
    const app = initializeApp(firebaseConfig)
    const db = getFirestore(app)
    const myCollection = collection(db, 'leads')
    const myDocumentData = {
        date: formattedToday,
        name: lead.name,
        email: lead.email,
        phone: lead.phone,
        request: lead.request,
        source
    }
    try {
        const newDocRef = await addDoc(myCollection, myDocumentData);
        return newDocRef.id
    } catch (e) {
        console.error('cannot add to Firestore', e)
        return null
    }
}
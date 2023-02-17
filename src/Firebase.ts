import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyA65O_66qpOjRMLOsnZXPDml293uUIfdNc',
  authDomain: 'waldo-odinproject.firebaseapp.com',
  projectId: 'waldo-odinproject',
  storageBucket: 'waldo-odinproject.appspot.com',
  messagingSenderId: '937357647687',
  appId: '1:937357647687:web:f4cfc70f29beb5f1097662'
}

const fireStoreApp = initializeApp(firebaseConfig)

export default fireStoreApp

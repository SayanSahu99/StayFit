const firebaseConfig = {
    apiKey: process.env.FIREBASE_APP_API_KEY,
    authDomain: process.env.FIREBASE_APP_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_APP_DATABASE_URL,
    projectId: process.env.FIREBASE_APP_PROJECT_ID,
    storageBucket: process.env.FIREBASE_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_APP_MESSEAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_APP_ID,
    measurementId: process.env.FIREBASE_APP_MEARSUREMENT_ID
};

export default firebaseConfig;


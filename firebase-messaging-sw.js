importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyAVSqdFFoepdwrRtxGjyoSBPwHlfxORGd8",
    authDomain: "newtech-system.firebaseapp.com",
    projectId: "newtech-system",
    storageBucket: "newtech-system.firebasestorage.app",
    messagingSenderId: "871887832252",
    appId: "1:871887832252:web:1f67972ce9ab9b7887fcb9"
});

const messaging = firebase.messaging();

// 背景接收訊息處理
messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] 收到背景訊息: ', payload);
    const notificationTitle = payload.notification.title || '新派單通知';
    const notificationOptions = {
        body: payload.notification.body || '您有新的行程派單！',
        icon: '/icon.png' // 可替換為你的 Icon 圖示
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});

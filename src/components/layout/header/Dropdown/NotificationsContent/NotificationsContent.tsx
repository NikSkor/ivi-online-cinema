import styles from "./NotificationsContent.module.scss"
import Image from "next/image"
const NotificationsContent = () => {
    return(
        <div className={styles.content}>
            <svg data-name="Слой 1" id="Слой_1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><title/><path d="M120.56,90.17c-.62-.3-1.26-.61-1.91-1A20.49,20.49,0,0,1,108,72V43.5C108,19.51,88.26,0,64,0S20,19.51,20,43.5V72A20.5,20.5,0,0,1,9.36,89.22c-.58.3-1.16.58-1.74.86C4.2,91.72.33,93.58,0,98.34a9.92,9.92,0,0,0,2.68,7.5A10.06,10.06,0,0,0,10,109H43.1a21,21,0,0,0,41.8,0H118a10.06,10.06,0,0,0,7.3-3.16,9.92,9.92,0,0,0,2.68-7.5C127.67,93.6,124.05,91.86,120.56,90.17ZM64,124a17,17,0,0,1-16.87-15H80.87A17,17,0,0,1,64,124Zm58.38-20.9A5.92,5.92,0,0,1,118,105H10a6,6,0,0,1-6-6.4c.15-2.31,2-3.33,5.34-4.92.61-.29,1.23-.59,1.84-.9A24.4,24.4,0,0,0,24,72V43.5C24,21.72,41.94,4,64,4s40,17.72,40,39.5V72a24.4,24.4,0,0,0,12.81,20.78c.68.35,1.36.68,2,1,3.38,1.63,5,2.52,5.17,4.83A6,6,0,0,1,122.38,103.1Z"/><path d="M113.6,71.63a2,2,0,0,0,1.42.58,2,2,0,0,0,1.41-.58,10.79,10.79,0,0,0,0-15.26,2,2,0,1,0-2.83,2.83,6.78,6.78,0,0,1,0,9.6A2,2,0,0,0,113.6,71.63Z"/><path d="M124,64a15.11,15.11,0,0,1-4.45,10.75A2,2,0,0,0,121,78.16a2,2,0,0,0,1.42-.59,19.19,19.19,0,0,0,0-27.14,2,2,0,0,0-2.83,2.82A15.11,15.11,0,0,1,124,64Z"/><path d="M11.57,71.63a2,2,0,0,0,1.41.58A2,2,0,0,0,14.4,68.8a6.78,6.78,0,0,1,0-9.6,2,2,0,1,0-2.83-2.83,10.79,10.79,0,0,0,0,15.26Z"/><path d="M7,78.16a2,2,0,0,0,1.41-3.41,15.21,15.21,0,0,1,0-21.5,2,2,0,0,0-2.83-2.82,19.19,19.19,0,0,0,0,27.14A2,2,0,0,0,7,78.16Z"/></svg>
            <p>Здесь появляются только важные сообщения</p>
        </div>
    )
}

export default NotificationsContent
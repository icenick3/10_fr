import React from 'react';
import './Reviews.css'
import {Stars5, Stars2, Stars4, Stars1, Stars3} from "../Stars/Stars";

const ReviewsCamera = ({setShowReviews, showReviews, lang}) => {
    return (
        <div className={showReviews ? "reviewsTS show" : "reviewsTS"} onClick={() => setShowReviews(false)}>
           <div className={showReviews ? "reviewsContainerTS show" : "reviewsContainerTS"}
                                   onClick={(e) => e.stopPropagation()}>
                <img className="closeGuide"
                     src="https://i.pinimg.com/originals/52/e3/86/52e38681b082f94f2917624bb56edf42.png" alt=""
                     onClick={() => setShowReviews(false)}/>
                <h2>Reviews</h2>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Great for monitoring my baby</h3>
                   <p className="nameOfUser">by Sophie on June 5, 2023</p>
                   <p className="longComment">The Nanit Pro Smart Baby Monitor & Wall Mount is great for monitoring my baby. The 1080p HD video quality is amazing, both during the day and at night. The app allows me to see and stay connected with my little one from almost anywhere. The split-screen feature even allows me to view and control two cameras simultaneously in the app. Additionally, the security of my data is ensured through AES 256-bit encryption. I am really satisfied with my purchase!</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Peaceful nights thanks to Nanit Pro</h3>
                   <p className="nameOfUser">by Antoine on June 3, 2023</p>
                   <p className="longComment">The Nanit Pro Smart Baby Monitor & Wall Mount has allowed me to have peaceful nights. The 1080p HD video quality is exceptional, whether it's day or night. The app allows me to see my baby in real-time and stay connected with him. I also appreciate the split-screen feature that allows me to monitor two cameras simultaneously. Additionally, the real-time sleep analytics and personalized advice are very useful. The sensor-free breathing band monitors my baby's respiratory movements and alerts me to any changes. I highly recommend the Nanit Pro!</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Easy and convenient monitoring</h3>
                   <p className="nameOfUser">by Emma on June 1, 2023</p>
                   <p className="longComment">The Nanit Pro Smart Baby Monitor & Wall Mount offers easy and convenient monitoring. The 1080p HD video quality is remarkable, no matter the time of day. With the app, I can see my baby and stay connected with him from almost anywhere. I love the split-screen functionality that allows me to monitor two cameras at the same time. Additionally, the security of my data is ensured through AES 256-bit encryption. The real-time sleep analytics and personalized advice are truly helpful features. I am extremely satisfied with this purchase!</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Clear aerial view of my baby</h3>
                   <p className="nameOfUser">by Gabriel on May 30, 2023</p>
                   <p className="longComment">The Nanit Pro Smart Baby Monitor & Wall Mount allows me to have a clear aerial view of my baby. The 1080p HD video quality is exceptional, whether it's day or night. With the app, I can see my baby in real-time and interact with him. I also appreciate the split-screen feature that allows me to monitor two cameras simultaneously. Additionally, the sensor-free breathing band monitors my baby's respiratory movements and alerts me to any changes. I highly recommend the Nanit Pro for peaceful monitoring of your baby.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">An essential purchase for parents</h3>
                   <p className="nameOfUser">by Léa on May 28, 2023</p>
                   <p className="longComment">The Nanit Pro Smart Baby Monitor & Wall Mount is an essential purchase for parents. The 1080p HD video quality is incredible and allows me to see my baby with great clarity, day or night. The app is very convenient and allows me to stay connected with my baby wherever I am. I love the split-screen functionality that allows me to monitor two cameras at the same time. The real-time sleep analytics and personalized advice are very useful features. I highly recommend the Nanit Pro to all parents concerned about their baby's sleep.</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Exceptional video quality</h3>
                   <p className="nameOfUser">by Hugo on May 26, 2023</p>
                   <p className="longComment">The Nanit Pro Smart Baby Monitor & Wall Mount offers exceptional video quality. The 1080p HD resolution allows me to see my baby with great clarity, whether it's day or night. The app is easy to use and allows me to stay connected with my baby wherever I am. I also appreciate the split-screen feature that allows me to monitor two cameras simultaneously. The real-time sleep analytics and personalized advice are very useful for improving my baby's sleep quality. I am really satisfied with my purchase!</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">An exceptional monitoring experience</h3>
                   <p className="nameOfUser">by Emma on May 24, 2023</p>
                   <p className="longComment">The Nanit Pro Smart Baby Monitor & Wall Mount offers an exceptional monitoring experience. The 1080p HD video quality is remarkable, whether it's day or night. The app is user-friendly and allows me to see my baby in real-time, wherever I am. I love the split-screen functionality that allows me to monitor two cameras at the same time. The real-time sleep analytics and personalized advice are very useful for improving my baby's sleep. I highly recommend the Nanit Pro to parents looking for quality monitoring for their baby.</p>
               </div>

               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Peace of mind and security</h3>
                   <p className="nameOfUser">by Sophie on May 22, 2023</p>
                   <p className="longComment">The Nanit Pro Smart Baby Monitor & Wall Mount offers peace of mind and security. The 1080p HD video quality is excellent, whether it's day or night. The app allows me to see my baby in real-time and stay connected with them wherever I am. I also appreciate the split-screen feature that allows me to monitor two cameras simultaneously. The real-time sleep analysis and personalized tips are very helpful in improving my baby's sleep. I am really satisfied with this purchase!</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Quality monitoring</h3>
                   <p className="nameOfUser">by Antoine on May 20, 2023</p>
                   <p className="longComment">The Nanit Pro Smart Baby Monitor & Wall Mount offers quality monitoring. The 1080p HD video quality is exceptional, whether it's day or night. The app is easy to use and allows me to stay connected with my baby wherever I am. I love the split-screen feature that allows me to monitor two cameras simultaneously. The real-time sleep analysis and personalized tips are very helpful in improving the quality of my baby's sleep. I highly recommend the Nanit Pro to all parents looking for a reliable monitoring solution for their baby.</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">A worthwhile purchase</h3>
                   <p className="nameOfUser">by Léa on May 18, 2023</p>
                   <p className="longComment">The Nanit Pro Smart Baby Monitor & Wall Mount is a worthwhile purchase. The 1080p HD video quality is amazing, no matter the time of day. The app is user-friendly and allows me to see my baby in real-time wherever I am. I also love the split-screen feature that allows me to monitor two cameras simultaneously. The real-time sleep analysis and personalized tips are really helpful features. I am very satisfied with my purchase and I recommend it to all parents in search of quality monitoring for their baby.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">An intelligent and reliable monitor</h3>
                   <p className="nameOfUser">by Hugo on May 16, 2023</p>
                   <p className="longComment">The Nanit Pro Smart Baby Monitor & Wall Mount is an intelligent and reliable monitor. The 1080p HD video quality is remarkable, whether it's day or night. With the app, I can see my baby in real-time and stay connected with them wherever I am. I also appreciate the split-screen feature that allows me to monitor two cameras at the same time. The real-time sleep analysis and personalized tips are really helpful in improving my baby's sleep. I highly recommend the Nanit Pro to all parents who care about the safety and well-being of their baby.</p>
               </div>


               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">A clear view of my baby</h3>
                   <p className="nameOfUser">by Emma on May 14, 2023</p>
                   <p className="longComment">The Nanit Pro Smart Baby Monitor & Wall Mount gives me a clear view of my baby. The 1080p HD video quality is excellent, no matter the time of day. The app is easy to use and allows me to see my baby in real-time, no matter where I am. I also appreciate the split-screen feature that allows me to monitor two cameras simultaneously. The real-time sleep analysis and personalized tips are really helpful features for improving the quality of my baby's sleep. I am very satisfied with my purchase!</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Intelligent technology to monitor my baby</h3>
                   <p className="nameOfUser">by Gabriel on May 12, 2023</p>
                   <p className="longComment">The Nanit Pro Smart Baby Monitor & Wall Mount uses intelligent technology to monitor my baby. The 1080p HD video quality is exceptional, whether it's day or night. With the app, I can see my baby in real-time and interact with them wherever I am. I love the split-screen feature that allows me to monitor two cameras simultaneously. The real-time sleep analysis and personalized tips are very useful features for improving my baby's sleep. I highly recommend the Nanit Pro to all parents looking for a high-quality monitor.</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">A reliable and easy-to-use monitor</h3>
                   <p className="nameOfUser">by Sophie on May 10, 2023</p>
                   <p className="longComment">The Nanit Pro Smart Baby Monitor & Wall Mount is a reliable and easy-to-use monitor. The 1080p HD video quality is excellent, whether it's day or night. The app is intuitive and allows me to see my baby in real-time and stay connected with them wherever I am. I also appreciate the split-screen feature that allows me to monitor two cameras simultaneously. The real-time sleep analysis and personalized tips are very useful features for improving the quality of my baby's sleep. I am really satisfied with my purchase!</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">A perfect choice for parents</h3>
                   <p className="nameOfUser">by Léa on May 8, 2023</p>
                   <p className="longComment">The Nanit Pro Smart Baby Monitor & Wall Mount is a perfect choice for parents. The 1080p HD video quality is amazing, whether it's day or night. The app is user-friendly and allows me to see my baby in real-time, no matter where I am. I love the split-screen feature that allows me to monitor two cameras simultaneously. The real-time sleep analysis and personalized tips are very useful features for improving my baby's sleep. I highly recommend the Nanit Pro to all parents who want high-quality monitoring for their baby.</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">A convenient monitoring solution</h3>
                   <p className="nameOfUser">by Hugo on May 6, 2023</p>
                   <p className="longComment">The Nanit Pro Smart Baby Monitor & Wall Mount is a convenient monitoring solution. The 1080p HD video quality is remarkable, whether it's day or night. The app is easy to use and allows me to stay connected with my baby wherever I am. I also appreciate the split-screen feature that allows me to monitor two cameras simultaneously. The real-time sleep analysis and personalized tips are very useful for improving the quality of my baby's sleep. I am really satisfied with my purchase!</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Peace of mind assured</h3>
                   <p className="nameOfUser">by Emma on May 4, 2023</p>
                   <p className="longComment">The Nanit Pro Smart Baby Monitor & Wall Mount provides peace of mind. The 1080p HD video quality is excellent, both day and night. The app allows me to see my baby in real-time and stay connected with them wherever I am. I love the split-screen feature that allows me to monitor two cameras at the same time. The real-time sleep analysis and personalized tips are very useful for improving my baby's sleep. I highly recommend the Nanit Pro to all parents looking for quality monitoring for their baby.</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">A clear and detailed view of my baby</h3>
                   <p className="nameOfUser">by Gabriel on May 2, 2023</p>
                   <p className="longComment">The Nanit Pro Smart Baby Monitor & Wall Mount offers a clear and detailed view of my baby. The 1080p HD video quality is remarkable, whether it's day or night. The app is user-friendly and allows me to see my baby in real-time and stay connected with them wherever I am. I also appreciate the split-screen feature that allows me to monitor two cameras simultaneously. The real-time sleep analysis and personalized tips are very useful for improving my baby's sleep. I am very satisfied with my purchase and highly recommend it to all parents in search of a reliable and high-performing monitor.</p>
               </div>


               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">A premium-quality monitor</h3>
                   <p className="nameOfUser">by Sophie on April 30, 2023</p>
                   <p className="longComment">The Nanit Pro Smart Baby Monitor & Wall Mount is a premium-quality monitor. The 1080p HD video quality is exceptional, whether it's day or night. The app is easy to use and allows me to see my baby in real-time no matter where I am. I love the split-screen feature that allows me to monitor two cameras simultaneously. The real-time sleep analysis and personalized tips are really helpful features for improving my baby's sleep. I am extremely satisfied with my purchase!</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">An intelligent and user-friendly monitor</h3>
                   <p className="nameOfUser">by Léa on April 28, 2023</p>
                   <p className="longComment">The Nanit Pro Smart Baby Monitor & Wall Mount is an intelligent and user-friendly monitor. The 1080p HD video quality is excellent, whether it's day or night. The app is intuitive and allows me to see my baby in real-time and stay connected with them wherever I am. I also appreciate the split-screen feature that allows me to monitor two cameras simultaneously. The real-time sleep analysis and personalized tips are very useful for improving my baby's sleep quality. I highly recommend the Nanit Pro to all parents concerned about their baby's safety and well-being.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">A perfect choice for parents</h3>
                   <p className="nameOfUser">by Hugo on April 26, 2023</p>
                   <p className="longComment">The Nanit Pro Smart Baby Monitor & Wall Mount is a perfect choice for parents. The 1080p HD video quality is incredible, whether it's day or night. The app is user-friendly and allows me to see my baby in real-time no matter where I am. I love the split-screen feature that allows me to monitor two cameras simultaneously. The real-time sleep analysis and personalized tips are very useful for improving my baby's sleep. I highly recommend the Nanit Pro to all parents who want quality monitoring for their baby.</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">A convenient monitoring solution</h3>
                   <p className="nameOfUser">by Emma on April 24, 2023</p>
                   <p className="longComment">The Nanit Pro Smart Baby Monitor & Wall Mount is a convenient monitoring solution. The 1080p HD video quality is remarkable, whether it's day or night. The app is easy to use and allows me to stay connected with my baby wherever I am. I also appreciate the split-screen feature that allows me to monitor two cameras simultaneously. The real-time sleep analysis and personalized tips are very useful for improving my baby's sleep quality. I'm really satisfied with my purchase!</p>
               </div>



               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Peace of mind assured</h3>
                   <p className="nameOfUser">by Gabriel on April 22, 2023</p>
                   <p className="longComment">The Nanit Pro Smart Baby Monitor & Wall Mount assures peace of mind. The 1080p HD video quality is excellent, both day and night. The app allows me to see my baby in real-time and stay connected with them wherever I am. I love the split-screen feature that allows me to monitor two cameras simultaneously. The real-time sleep analysis and personalized tips are very useful for improving my baby's sleep. I highly recommend the Nanit Pro to all parents who want quality monitoring for their baby.</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">A clear and detailed view of my baby</h3>
                   <p className="nameOfUser">by Sophie on April 20, 2023</p>
                   <p className="longComment">The Nanit Pro Smart Baby Monitor & Wall Mount provides a clear and detailed view of my baby. The 1080p HD video quality is remarkable, whether it's day or night. The app is user-friendly and allows me to see my baby in real-time and stay connected with them wherever I am. I also appreciate the split-screen feature that allows me to monitor two cameras simultaneously. The real-time sleep analysis and personalized tips are very useful for improving my baby's sleep quality. I am very satisfied with my purchase!</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">A premium-quality monitor</h3>
                   <p className="nameOfUser">by Léa on April 18, 2023</p>
                   <p className="longComment">The Nanit Pro Smart Baby Monitor & Wall Mount is a premium-quality monitor. The 1080p HD video quality is exceptional, whether it's day or night. The app is easy to use and allows me to see my baby in real-time no matter where I am. I love the split-screen feature that allows me to monitor two cameras simultaneously. The real-time sleep analysis and personalized tips are really helpful features for improving my baby's sleep. I am extremely satisfied with my purchase!</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">An intelligent and user-friendly monitor</h3>
                   <p className="nameOfUser">by Hugo on April 16, 2023</p>
                   <p className="longComment">The Nanit Pro Smart Baby Monitor & Wall Mount is an intelligent and user-friendly monitor. The 1080p HD video quality is excellent, whether it's day or night. The app is intuitive and allows me to see my baby in real-time and stay connected with them wherever I am. I also appreciate the split-screen feature that allows me to monitor two cameras simultaneously. The real-time sleep analysis and personalized tips are very useful for improving my baby's sleep quality. I highly recommend the Nanit Pro to all parents concerned about their baby's safety and well-being.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">A perfect choice for parents</h3>
                   <p className="nameOfUser">by Emma on April 14, 2023</p>
                   <p className="longComment">The Nanit Pro Smart Baby Monitor & Wall Mount is a perfect choice for parents. The 1080p HD video quality is incredible, whether it's day or night. The app is user-friendly and allows me to see my baby in real-time no matter where I am. I love the split-screen feature that allows me to monitor two cameras simultaneously. The real-time sleep analysis and personalized tips are very useful for improving my baby's sleep. I highly recommend the Nanit Pro to all parents who are looking for quality monitoring for their baby.</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">A convenient monitoring solution</h3>
                   <p className="nameOfUser">by Gabriel on April 12, 2023</p>
                   <p className="longComment">The Nanit Pro Smart Baby Monitor & Wall Mount is a convenient monitoring solution. The 1080p HD video quality is remarkable, whether it's day or night. The app is easy to use and allows me to stay connected with my baby wherever I am. I also appreciate the split-screen feature that allows me to monitor two cameras simultaneously. The real-time sleep analysis and personalized tips are very useful for improving my baby's sleep quality. I am really satisfied with my purchase!</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Peace of mind assured</h3>
                   <p className="nameOfUser">by Sophie on April 10, 2023</p>
                   <p className="longComment">The Nanit Pro Smart Baby Monitor & Wall Mount assures peace of mind. The 1080p HD video quality is excellent, both day and night. The app allows me to see my baby in real-time and stay connected with them wherever I am. I love the split-screen feature that allows me to monitor two cameras simultaneously. The real-time sleep analysis and personalized tips are very useful for improving my baby's sleep. I highly recommend the Nanit Pro to all parents who want quality monitoring for their baby.</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">A clear and detailed view of my baby</h3>
                   <p className="nameOfUser">by Léa on April 8, 2023</p>
                   <p className="longComment">The Nanit Pro Smart Baby Monitor & Wall Mount provides a clear and detailed view of my baby. The 1080p HD video quality is remarkable, whether it's day or night. The app is user-friendly and allows me to see my baby in real-time and stay connected with them wherever I am. I also appreciate the split-screen feature that allows me to monitor two cameras simultaneously. The real-time sleep analysis and personalized tips are very useful for improving the quality of my baby's sleep. I am very satisfied with my purchase!</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">A premium-quality monitor</h3>
                   <p className="nameOfUser">by Hugo on April 6, 2023</p>
                   <p className="longComment">The Nanit Pro Smart Baby Monitor & Wall Mount is a premium-quality monitor. The 1080p HD video quality is exceptional, whether it's day or night. The app is easy to use and allows me to see my baby in real-time, no matter where I am. I love the split-screen feature that allows me to monitor two cameras simultaneously. The real-time sleep analysis and personalized tips are very useful for improving my baby's sleep. I am extremely satisfied with my purchase!</p>
               </div>
            </div>
        </div>
    );
};


export default ReviewsCamera;
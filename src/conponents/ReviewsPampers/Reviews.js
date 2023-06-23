import React from 'react';
import './Reviews.css'
import {Stars5, Stars2, Stars4, Stars1, Stars3} from "../Stars/Stars";

const ReviewsPampers = ({setShowReviews, showReviews, lang}) => {
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
                   <h3 className="shortComment">Essential and Comfortable Diapers</h3>
                   <p className="nameOfUser">by Emily on June 5, 2023</p>
                   <p className="longComment">These diapers are essential for my baby's comfort. The DermacoMFORT inner fleece provides a soft and gentle touch, keeping my baby's skin dry and protected. The 3-position protection system gives me peace of mind for up to 12 hours. Highly recommended!</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Great Choice for Newborns</h3>
                   <p className="nameOfUser">by David on June 4, 2023</p>
                   <p className="longComment">I recently tried these diapers for my newborn, and I'm impressed. The soft side wings and navel-shaped design provide a secure fit and extra comfort. The urine indicator is a helpful feature, and they are dermatologically tested, which gives me confidence in their quality.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Superior Absorption and Leak Protection</h3>
                   <p className="nameOfUser">by Emma on June 3, 2023</p>
                   <p className="longComment">These diapers have excellent absorption power and keep leaks at bay. I appreciate the soft materials used, as they are gentle on my baby's sensitive skin. The pack of 26 is convenient and lasts for a good amount of time. Definitely worth buying!</p>
               </div>
               <div className="comment">
                   <Stars3/>
                   <h3 className="shortComment">Decent Diapers, Could Be Better</h3>
                   <p className="nameOfUser">by Michael on June 2, 2023</p>
                   <p className="longComment">I find these diapers to be decent, but they could be better. The absorption is good, but sometimes they feel a bit bulky. The soft side wings are a nice touch, but they could provide a more snug fit. Overall, they get the job done, but there is room for improvement.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Reliable and Convenient</h3>
                   <p className="nameOfUser">by Sarah on June 1, 2023</p>
                   <p className="longComment">I trust Pampers for my baby, and these diapers live up to the brand's reputation. The unique 3-position protection system keeps my baby dry and comfortable for hours. The urine indicator is a helpful feature, and the pack of 26 provides great value for money. Highly satisfied!</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Soft and Gentle on Baby's Skin</h3>
                   <p className="nameOfUser">by Olivia on May 31, 2023</p>
                   <p className="longComment">These diapers have a soft and gentle touch, perfect for my baby's delicate skin. The navel-shaped design adds extra protection, and the diapers fit snugly with the soft side wings. I appreciate that they are dermatologically tested and free from fragrance allergens. Overall, a reliable choice.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Long-Lasting and Reliable</h3>
                   <p className="nameOfUser">by Benjamin on May 30, 2023</p>
                   <p className="longComment">I've been using these diapers for a while now, and they have proven to be long-lasting and reliable. The absorption power is impressive, and the diapers keep my baby dry throughout the night. The pack of 26 is convenient, and I appreciate the urine indicator feature. Highly recommended!</p>
               </div>
               <div className="comment">
                   <Stars3/>
                   <h3 className="shortComment">Average Performance</h3>
                   <p className="nameOfUser">by Jessica on May 29, 2023</p>
                   <p className="longComment">These diapers have an average performance in my opinion. They do the job, but the fit could be better. The soft side wings help, but I have experienced some leaks. The pack of 26 is a good value, but I might try other brands for comparison.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Comfortable and Reliable</h3>
                   <p className="nameOfUser">by Daniel on May 28, 2023</p>
                   <p className="longComment">I have been using these diapers for my baby, and I'm very satisfied. The soft materials used are gentle on my baby's skin, and the diapers fit well with the soft side wings. The unique 3-position protection system provides long-lasting comfort and protection. Highly recommended!</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Good Value for Money</h3>
                   <p className="nameOfUser">by Sophia on May 27, 2023</p>
                   <p className="longComment">These diapers offer good value for money. The pack of 26 lasts for a while, and the diapers have reliable absorption and leak protection. The soft side wings add extra comfort, and the navel-shaped design is a thoughtful feature. Overall, a practical choice for parents.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">High-Quality Diapers</h3>
                   <p className="nameOfUser">by Noah on May 26, 2023</p>
                   <p className="longComment">I consider these diapers to be of high quality. The DermacoMFORT inner fleece provides a soft and cozy feel for my baby. The 3-position protection system is a great feature, and the diapers have excellent absorption power. I have peace of mind knowing my baby is comfortable and dry.</p>
               </div>
               <div className="comment">
                   <Stars3/>
                   <h3 className="shortComment">Mixed Feelings</h3>
                   <p className="nameOfUser">by Lily on May 25, 2023</p>
                   <p className="longComment">I have mixed feelings about these diapers. While they offer decent absorption, the fit could be better. The soft side wings are a nice touch, but they tend to come off easily. The pack of 26 is convenient, but I'm considering trying other brands.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Excellent Diapers for Newborns</h3>
                   <p className="nameOfUser">by Ethan on May 24, 2023</p>
                   <p className="longComment">These diapers are excellent for newborns. The soft materials and navel-shaped design provide a comfortable fit and protect sensitive skin. The unique 3-position protection system is a bonus, and the diapers have great absorption power. Highly satisfied with this purchase.</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Convenient and Reliable Choice</h3>
                   <p className="nameOfUser">by Mia on May 23, 2023</p>
                   <p className="longComment">I find these diapers to be a convenient and reliable choice. The soft side wings ensure a snug fit, and the 3-position protection system provides long-lasting dryness. The pack of 26 is practical, and the diapers are dermatologically tested for added peace of mind.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Softness and Comfort</h3>
                   <p className="nameOfUser">by Alexander on May 22, 2023</p>
                   <p className="longComment">These diapers offer exceptional softness and comfort for my baby. The DermacoMFORT inner fleece is gentle on the skin, and the diapers have a secure fit with the soft side wings. The unique 3-position protection system keeps my baby dry for hours. Highly recommended!</p>
               </div>
               <div className="comment">
                   <Stars3/>
                   <h3 className="shortComment">Average Diapers</h3>
                   <p className="nameOfUser">by Isabella on May 21, 2023</p>
                   <p className="longComment">I have tried these diapers, and they are average in my opinion. The absorption is decent, but the fit could be better. The soft side wings are comfortable, but they tend to loosen over time. Overall, they do the job, but I may explore other options.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Great for Overnight Use</h3>
                   <p className="nameOfUser">by Jacob on May 20, 2023</p>
                   <p className="longComment">These diapers are perfect for overnight use. The absorption power is impressive, and they keep my baby dry and comfortable throughout the night. The soft side wings provide a secure fit, and the pack of 26 lasts for a good amount of time. Highly satisfied!</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Good Performance</h3>
                   <p className="nameOfUser">by Ava on May 19, 2023</p>
                   <p className="longComment">These diapers offer good performance overall. The absorption is reliable, and the soft materials are gentle on my baby's skin. The 3-position protection system is a great feature, although the fit could be slightly better. A solid choice for everyday use.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Peace of Mind</h3>
                   <p className="nameOfUser">by Oliver on May 18, 2023</p>
                   <p className="longComment">Using these diapers gives me peace of mind. The 3-position protection system ensures that my baby stays dry and comfortable for hours. The urine indicator is a helpful feature, and the soft side wings provide a secure fit. Highly recommend for busy parents!</p>
               </div>
               <div className="comment">
                   <Stars3/>
                   <h3 className="shortComment">Mixed Experience</h3>
                   <p className="nameOfUser">by Charlotte on May 17, 2023</p>
                   <p className="longComment">I have had a mixed experience with these diapers. While the absorption is decent, the fit is not always secure. The soft side wings help, but they could be more reliable. The pack of 26 is convenient, but I might explore other options in the future.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Gentle and Reliable</h3>
                   <p className="nameOfUser">by Liam on May 16, 2023</p>
                   <p className="longComment">I trust these diapers for their gentle and reliable performance. The soft materials are kind to my baby's skin, and the diapers provide a secure fit with the soft side wings. The absorption power is impressive, and the pack of 26 is convenient. Definitely worth trying!</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Good Quality Diapers</h3>
                   <p className="nameOfUser">by Amelia on May 15, 2023</p>
                   <p className="longComment">I have found these diapers to be of good quality. The soft side wings and navel-shaped design add extra comfort and protection. The absorption power is reliable, and the pack of 26 offers great value. Overall, a solid choice for everyday use.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Excellent Absorption</h3>
                   <p className="nameOfUser">by Henry on May 14, 2023</p>
                   <p className="longComment">These diapers have excellent absorption power. They keep my baby dry and comfortable for hours, even during active playtime. The soft side wings ensure a secure fit, and the urine indicator is a helpful feature. Highly satisfied with this purchase!</p>
               </div>
               <div className="comment">
                   <Stars3/>
                   <h3 className="shortComment">Average Performance, Could Be Better</h3>
                   <p className="nameOfUser">by Grace on May 13, 2023</p>
                   <p className="longComment">In my experience, these diapers offer average performance. The absorption is decent, but the fit could be improved. The soft side wings are comfortable, but they tend to loosen over time. Overall, they are okay, but I might explore other options in the future.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Happy with these Diapers</h3>
                   <p className="nameOfUser">by Benjamin on May 12, 2023</p>
                   <p className="longComment">I am happy with these diapers. The DermacoMFORT inner fleece provides a soft and cozy feel, and the diapers fit well with the soft side wings. The 3-position protection system is a great feature, and they have reliable absorption power. Highly recommend!</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Convenient and Practical</h3>
                   <p className="nameOfUser">by Mia on May 11, 2023</p>
                   <p className="longComment">These diapers are convenient and practical. The pack of 26 lasts for a good amount of time, and the diapers have reliable absorption and leak protection. The soft side wings add extra comfort, and the navel-shaped design is a thoughtful feature. Recommended for busy parents.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Soft and Comfortable for Baby</h3>
                   <p className="nameOfUser">by Alexander on May 10, 2023</p>
                   <p className="longComment">These diapers are soft and comfortable for my baby. The DermacoMFORT inner fleece ensures a gentle touch on the skin, and the diapers fit well with the soft side wings. The unique 3-position protection system keeps my baby dry and happy. Highly satisfied!</p>
               </div>
               <div className="comment">
                   <Stars3/>
                   <h3 className="shortComment">Average Diapers, Could Be Better</h3>
                   <p className="nameOfUser">by Isabella on May 9, 2023</p>
                   <p className="longComment">I have tried these diapers, and they are average in my opinion. The absorption is decent, but the fit could be improved. The soft side wings are comfortable, but they tend to come off easily. Overall, they do the job, but I may explore other options.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Great for Overnight Protection</h3>
                   <p className="nameOfUser">by Jacob on May 8, 2023</p>
                   <p className="longComment">These diapers are great for overnight protection. They have impressive absorption power and keep my baby dry and comfortable throughout the night. The soft side wings provide a secure fit, and the pack of 26 is convenient. Highly recommended for a good night's sleep!</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Reliable Performance</h3>
                   <p className="nameOfUser">by Ava on May 7, 2023</p>
                   <p className="longComment">I have been using these diapers, and they offer reliable performance. The absorption is good, and the soft materials are gentle on my baby's skin. The 3-position protection system is a great feature, although the fit could be slightly better. A solid choice overall.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Peace of Mind for Parents</h3>
                   <p className="nameOfUser">by Oliver on May 6, 2023</p>
                   <p className="longComment">Using these diapers gives parents peace of mind. The 3-position protection system ensures long-lasting dryness and comfort for babies. The urine indicator is a helpful feature, and the soft side wings provide a secure fit. Highly recommended for busy parents!</p>
               </div>
               <div className="comment">
                   <Stars3/>
                   <h3 className="shortComment">Mixed Experience with These Diapers</h3>
                   <p className="nameOfUser">by Charlotte on May 5, 2023</p>
                   <p className="longComment">I have had a mixed experience with these diapers. While the absorption is decent, the fit is not always secure. The soft side wings help, but they could be more reliable. The pack of 26 is convenient, but I might explore other options in the future.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Gentle and Dependable</h3>
                   <p className="nameOfUser">by Liam on May 4, 2023</p>
                   <p className="longComment">I rely on these diapers for their gentle and dependable performance. The soft materials are kind to my baby's skin, and the diapers provide a secure fit with the soft side wings. The absorption power is impressive, and the pack of 26 is convenient. Definitely worth trying!</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Good Quality Diapers</h3>
                   <p className="nameOfUser">by Amelia on May 3, 2023</p>
                   <p className="longComment">These diapers are of good quality. The soft side wings and navel-shaped design provide extra comfort and protection. The absorption power is reliable, and the pack of 26 offers great value. Overall, a solid choice for everyday use.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Excellent Absorption Power</h3>
                   <p className="nameOfUser">by Henry on May 2, 2023</p>
                   <p className="longComment">These diapers have excellent absorption power. They keep my baby dry and comfortable for hours, even during active playtime. The soft side wings ensure a secure fit, and the urine indicator is a helpful feature. Highly satisfied with this purchase!</p>
               </div>
               <div className="comment">
                   <Stars3/>
                   <h3 className="shortComment">Average Performance, Room for Improvement</h3>
                   <p className="nameOfUser">by Grace on May 1, 2023</p>
                   <p className="longComment">In my experience, these diapers offer average performance. The absorption is decent, but the fit could be improved. The soft side wings are comfortable, but they tend to come off easily. Overall, they are okay, but I might explore other options in the future.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Happy with these Diapers</h3>
                   <p className="nameOfUser">by Benjamin on April 30, 2023</p>
                   <p className="longComment">I am happy with these diapers. The DermacoMFORT inner fleece provides a soft and cozy feel, and the diapers fit well with the soft side wings. The 3-position protection system is a great feature, and they have reliable absorption power. Highly recommend!</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Convenient and Practical Choice</h3>
                   <p className="nameOfUser">by Mia on April 29, 2023</p>
                   <p className="longComment">These diapers are convenient and practical. The pack of 26 lasts for a good amount of time, and the diapers offer reliable absorption and leak protection. The soft side wings add extra comfort, and the navel-shaped design is a thoughtful feature. Recommended for busy parents.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Soft and Comfortable for Baby</h3>
                   <p className="nameOfUser">by Alexander on April 28, 2023</p>
                   <p className="longComment">These diapers are soft and comfortable for my baby. The DermacoMFORT inner fleece ensures a gentle touch on the skin, and the diapers fit well with the soft side wings. The unique 3-position protection system keeps my baby dry and happy. Highly satisfied!</p>
               </div>
               <div className="comment">
                   <Stars3/>
                   <h3 className="shortComment">Average Diapers, Room for Improvement</h3>
                   <p className="nameOfUser">by Isabella on April 27, 2023</p>
                   <p className="longComment">I have tried these diapers, and they are average in my opinion. The absorption is decent, but the fit could be improved. The soft side wings are comfortable, but they tend to come off easily. Overall, they do the job, but I may explore other options.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Great for Overnight Protection</h3>
                   <p className="nameOfUser">by Jacob on April 26, 2023</p>
                   <p className="longComment">These diapers are great for overnight protection. They have impressive absorption power and keep my baby dry and comfortable throughout the night. The soft side wings provide a secure fit, and the pack of 26 is convenient. Highly recommended for a good night's sleep!</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Reliable Performance</h3>
                   <p className="nameOfUser">by Ava on April 25, 2023</p>
                   <p className="longComment">I have been using these diapers, and they offer reliable performance. The absorption is good, and the soft materials are gentle on my baby's skin. The 3-position protection system is a great feature, although the fit could be slightly better. A solid choice overall.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Peace of Mind for Parents</h3>
                   <p className="nameOfUser">by Oliver on April 24, 2023</p>
                   <p className="longComment">Using these diapers gives parents peace of mind. The 3-position protection system ensures long-lasting dryness and comfort for babies. The urine indicator is a helpful feature, and the soft side wings provide a secure fit. Highly recommended for busy parents!</p>
               </div>
               <div className="comment">
                   <Stars3/>
                   <h3 className="shortComment">Mixed Experience with These Diapers</h3>
                   <p className="nameOfUser">by Charlotte on April 23, 2023</p>
                   <p className="longComment">I have had a mixed experience with these diapers. While the absorption is decent, the fit is not always secure. The soft side wings help, but they could be more reliable. The pack of 26 is convenient, but I might explore other options in the future.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Gentle and Dependable</h3>
                   <p className="nameOfUser">by Liam on April 22, 2023</p>
                   <p className="longComment">I rely on these diapers for their gentle and dependable performance. The soft materials are kind to my baby's skin, and the diapers provide a secure fit with the soft side wings. The absorption power is impressive, and the pack of 26 is convenient. Definitely worth trying!</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Good Quality Diapers</h3>
                   <p className="nameOfUser">by Amelia on April 21, 2023</p>
                   <p className="longComment">These diapers are of good quality. The soft side wings and navel-shaped design provide extra comfort and protection. The absorption power is reliable, and the pack of 26 offers great value. Overall, a solid choice for everyday use.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Excellent Absorption Power</h3>
                   <p className="nameOfUser">by Henry on April 20, 2023</p>
                   <p className="longComment">These diapers have excellent absorption power. They keep my baby dry and comfortable for hours, even during active playtime. The soft side wings ensure a secure fit, and the urine indicator is a helpful feature. Highly satisfied with this purchase!</p>
               </div>
               <div className="comment">
                   <Stars3/>
                   <h3 className="shortComment">Average Performance, Room for Improvement</h3>
                   <p className="nameOfUser">by Grace on April 19, 2023</p>
                   <p className="longComment">In my experience, these diapers offer average performance. The absorption is decent, but the fit could be improved. The soft side wings are comfortable, but they tend to come off easily. Overall, they are okay, but I might explore other options in the future.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Happy with these Diapers</h3>
                   <p className="nameOfUser">by Benjamin on April 18, 2023</p>
                   <p className="longComment">I am happy with these diapers. The DermacoMFORT inner fleece provides a soft and cozy feel, and the diapers fit well with the soft side wings. The 3-position protection system is a great feature, and they have reliable absorption power. Highly recommend!</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Convenient and Practical Choice</h3>
                   <p className="nameOfUser">by Mia on April 17, 2023</p>
                   <p className="longComment">These diapers are convenient and practical. The pack of 26 lasts for a good amount of time, and the diapers offer reliable absorption and leak protection. The soft side wings add extra comfort, and the navel-shaped design is a thoughtful feature. Recommended for busy parents.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Soft and Comfortable for Baby</h3>
                   <p className="nameOfUser">by Alexander on April 16, 2023</p>
                   <p className="longComment">These diapers are soft and comfortable for my baby. The DermacoMFORT inner fleece ensures a gentle touch on the skin, and the diapers fit well with the soft side wings. The unique 3-position protection system keeps my baby dry and happy. Highly satisfied!</p>
               </div>
               <div className="comment">
                   <Stars3/>
                   <h3 className="shortComment">Average Diapers, Could Be Better</h3>
                   <p className="nameOfUser">by Isabella on April 15, 2023</p>
                   <p className="longComment">I have tried these diapers, and they are average in my opinion. The absorption is decent, but the fit could be improved. The soft side wings are comfortable, but they tend to come off easily. Overall, they do the job, but I may explore other options.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Great for Overnight Protection</h3>
                   <p className="nameOfUser">by Jacob on April 14, 2023</p>
                   <p className="longComment">These diapers are great for overnight protection. They have impressive absorption power and keep my baby dry and comfortable throughout the night. The soft side wings provide a secure fit, and the pack of 26 is convenient. Highly recommended for a good night's sleep!</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Reliable Performance</h3>
                   <p className="nameOfUser">by Ava on April 13, 2023</p>
                   <p className="longComment">I have been using these diapers, and they offer reliable performance. The absorption is good, and the soft materials are gentle on my baby's skin. The 3-position protection system is a great feature, although the fit could be slightly better. A solid choice overall.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Peace of Mind for Parents</h3>
                   <p className="nameOfUser">by Oliver on April 12, 2023</p>
                   <p className="longComment">Using these diapers gives parents peace of mind. The 3-position protection system ensures long-lasting dryness and comfort for babies. The urine indicator is a helpful feature, and the soft side wings provide a secure fit. Highly recommended for busy parents!</p>
               </div>
               <div className="comment">
                   <Stars3/>
                   <h3 className="shortComment">Mixed Experience with These Diapers</h3>
                   <p className="nameOfUser">by Charlotte on April 11, 2023</p>
                   <p className="longComment">I have had a mixed experience with these diapers. While the absorption is decent, the fit is not always secure. The soft side wings help, but they could be more reliable. The pack of 26 is convenient, but I might explore other options in the future.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Gentle and Reliable</h3>
                   <p className="nameOfUser">by Liam on April 10, 2023</p>
                   <p className="longComment">These diapers are gentle and reliable. The soft materials and soft side wings ensure a comfortable fit for my baby. The absorption power is impressive, and the pack of 26 lasts a good amount of time. Highly satisfied with this purchase!</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Good Value for Money</h3>
                   <p className="nameOfUser">by Amelia on April 9, 2023</p>
                   <p className="longComment">These diapers offer good value for money. The soft side wings and navel-shaped design provide a secure and comfortable fit. The absorption is reliable, and the pack of 26 is convenient. Overall, a solid choice for everyday use.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Impressive Absorption Power</h3>
                   <p className="nameOfUser">by Henry on April 8, 2023</p>
                   <p className="longComment">I am impressed with the absorption power of these diapers. They keep my baby dry and comfortable for extended periods, even during active play. The soft side wings ensure a snug fit, and the urine indicator is a useful feature. Highly recommended!</p>
               </div>
               <div className="comment">
                   <Stars3/>
                   <h3 className="shortComment">Average Performance, Room for Improvement</h3>
                   <p className="nameOfUser">by Grace on April 7, 2023</p>
                   <p className="longComment">In my experience, these diapers offer average performance. The absorption is decent, but the fit could be improved. The soft side wings are comfortable, but they tend to come off easily. Overall, they are okay, but I might explore other options in the future.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Happy with these Diapers</h3>
                   <p className="nameOfUser">by Benjamin on April 6, 2023</p>
                   <p className="longComment">I am happy with these diapers. The DermacoMFORT inner fleece provides a soft and cozy feel, and the diapers fit well with the soft side wings. The 3-position protection system is a great feature, and they have reliable absorption power. Highly recommend!</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Convenient and Reliable</h3>
                   <p className="nameOfUser">by Mia on April 5, 2023</p>
                   <p className="longComment">These diapers are convenient and reliable. The pack of 26 lasts for a good amount of time, and the diapers offer reliable absorption and leak protection. The soft side wings add extra comfort, and the navel-shaped design is a thoughtful feature. Recommended for busy parents.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Soft and Comfortable for Baby</h3>
                   <p className="nameOfUser">by Alexander on April 4, 2023</p>
                   <p className="longComment">These diapers are soft and comfortable for my baby. The DermacoMFORT inner fleece ensures a gentle touch on the skin, and the diapers fit well with the soft side wings. The unique 3-position protection system keeps my baby dry and happy. Highly satisfied!</p>
               </div>
               <div className="comment">
                   <Stars3/>
                   <h3 className="shortComment">Average Diapers, Could Be Better</h3>
                   <p className="nameOfUser">by Isabella on April 3, 2023</p>
                   <p className="longComment">I have tried these diapers, and they are average in my opinion. The absorption is decent, but the fit could be improved. The soft side wings are comfortable, but they tend to come off easily. Overall, they do the job, but I may explore other options.</p>
               </div>
            </div>
        </div>
    );
};


export default ReviewsPampers;
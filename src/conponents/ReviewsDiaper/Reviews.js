import React from 'react';
import './Reviews.css'
import {Stars5, Stars2, Stars4, Stars1, Stars3} from "../Stars/Stars";

const ReviewsDiaper = ({setShowReviews, showReviews, lang}) => {
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
                   <h3 className="shortComment">Convenient care kit</h3>
                   <p className="nameOfUser">by Sophie on June 3, 2023</p>
                   <p className="longComment">This baby care kit is really convenient! It contains all the essential accessories for taking care of your baby on a daily basis. I appreciate its ease of transport and compact size. I highly recommend it to parents.</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Quality and practicality</h3>
                   <p className="nameOfUser">by Antoine on June 2, 2023</p>
                   <p className="longComment">The baby care kit is of high quality and very practical. The included accessories are essential for taking care of the baby. I like how the kit is organized with its elastic bands and inner and outer pockets. I am satisfied with my purchase.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Must-have for parents</h3>
                   <p className="nameOfUser">by Emily on May 28, 2023</p>
                   <p className="longComment">As a new parent, these changing mats have been a lifesaver for me. They provide a hygienic and leak-proof surface for changing diapers. The convenience of having a box of 20 mats ensures that I always have one within reach. Highly recommended!</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Compact and reliable</h3>
                   <p className="nameOfUser">by David on May 25, 2023</p>
                   <p className="longComment">I love how compact and reliable these disposable changing mats are. They easily fit in my diaper bag, making it convenient to carry them wherever I go. The quality is great, and they provide a clean and comfortable surface for changing my baby. Worth every penny!</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Great value for money</h3>
                   <p className="nameOfUser">by Emma on May 20, 2023</p>
                   <p className="longComment">I purchased these disposable changing mats and couldn't be happier with my decision. They offer great value for money with their hygienic and leak-proof design. The pack of 20 is a generous quantity, ensuring that I'm well-stocked for a while. Highly satisfied!</p>
               </div>
               <div className="comment">
                   <Stars3/>
                   <h3 className="shortComment">Decent quality</h3>
                   <p className="nameOfUser">by Michael on May 18, 2023</p>
                   <p className="longComment">The disposable changing mats are of decent quality. While they serve their purpose, I found a few instances where they didn't stay in place very well during diaper changes. It would be better if they had some adhesive strips to secure them. Overall, they are okay.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Travel essential</h3>
                   <p className="nameOfUser">by Olivia on May 15, 2023</p>
                   <p className="longComment">These disposable changing mats have become a must-have item for our travels. They are lightweight, compact, and offer a hygienic surface for changing our baby. We no longer have to worry about finding clean changing areas on the go. Highly recommended for travel-savvy parents!</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Convenient and reliable</h3>
                   <p className="nameOfUser">by Benjamin on May 10, 2023</p>
                   <p className="longComment">These disposable changing mats have made diaper changes so much more convenient and hygienic. I can easily grab one from the box and dispose of it after use. The leak-proof design gives me peace of mind. A reliable product for busy parents!</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Practical and effective</h3>
                   <p className="nameOfUser">by Lily on May 8, 2023</p>
                   <p className="longComment">I find these disposable changing mats extremely practical. They provide a clean and safe surface for changing my baby, and I don't have to worry about washing or carrying around reusable mats. The pack of 20 is great value, and they have served me well.</p>
               </div>
               <div className="comment">
                   <Stars3/>
                   <h3 className="shortComment">Could be more adhesive</h3>
                   <p className="nameOfUser">by Thomas on May 5, 2023</p>
                   <p className="longComment">While these disposable changing mats are functional, I wish they had better adhesive to keep them in place. Sometimes they tend to slide around during diaper changes, which can be frustrating. They are decent for occasional use, but not the best for active babies.</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Convenient for outings</h3>
                   <p className="nameOfUser">by Isabella on May 3, 2023</p>
                   <p className="longComment">I always carry a few of these disposable changing mats in my diaper bag whenever I go out with my baby. They are a lifesaver when public changing stations are not available or are unhygienic. The blue color adds a nice touch of style too!</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Great for daycare</h3>
                   <p className="nameOfUser">by Alexander on April 30, 2023</p>
                   <p className="longComment">These disposable changing mats are perfect for daycare. They provide a hygienic and convenient solution for changing multiple babies throughout the day. The box of 20 lasts us a good amount of time, and the quality is reliable. Highly recommended for daycare centers!</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Compact and practical</h3>
                   <p className="nameOfUser">by Mia on April 28, 2023</p>
                   <p className="longComment">I love how compact and practical these disposable changing mats are. They fit perfectly in my diaper bag without taking up much space. The hygienic design gives me peace of mind, and they are easy to dispose of after use. A great addition to my baby essentials.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Handy for emergencies</h3>
                   <p className="nameOfUser">by Daniel on April 25, 2023</p>
                   <p className="longComment">These disposable changing mats have saved me during unexpected diaper emergencies. They are easy to grab and use when I'm not at home or don't have access to a clean changing area. The pack of 20 ensures that I always have enough on hand. A must-have for busy parents!</p>
               </div>
               <div className="comment">
                   <Stars3/>
                   <h3 className="shortComment">Decent but thin</h3>
                   <p className="nameOfUser">by Sophia on April 23, 2023</p>
                   <p className="longComment">These disposable changing mats serve their purpose, but they are quite thin. I find myself using multiple mats at once to provide enough padding for my baby. It would be better if they were a bit thicker for added comfort. Okay for short diaper changes.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Travel-friendly solution</h3>
                   <p className="nameOfUser">by Liam on April 20, 2023</p>
                   <p className="longComment">I rely on these disposable changing mats whenever I'm on the go with my little one. They are lightweight, compact, and offer a hygienic surface for diaper changes. The blue color adds a nice touch, and the quality is excellent. Highly recommended for busy parents!</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Convenient and hygienic</h3>
                   <p className="nameOfUser">by Ava on April 18, 2023</p>
                   <p className="longComment">These disposable changing mats have made diaper changes so much easier and cleaner. I appreciate the hygienic and leak-proof design, ensuring a safe environment for my baby. The box of 20 is a great value, and they are easy to dispose of. A practical choice for parents!</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Perfect for travel</h3>
                   <p className="nameOfUser">by Noah on April 15, 2023</p>
                   <p className="longComment">I can't imagine traveling without these disposable changing mats. They are a lifesaver when public restrooms or changing stations are not available or unsanitary. The compact size and ease of use make them a must-have for any travel with a baby. Highly recommended!</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Good for quick changes</h3>
                   <p className="nameOfUser">by Harper on April 12, 2023</p>
                   <p className="longComment">These disposable changing mats are handy for quick diaper changes on the go. They provide a clean and comfortable surface for my baby, and I can easily dispose of them after use. The only downside is that they are not very thick, but they serve their purpose well.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Hygienic and practical</h3>
                   <p className="nameOfUser">by Ethan on April 10, 2023</p>
                   <p className="longComment">I find these disposable changing mats extremely hygienic and practical. They are individually wrapped, ensuring cleanliness and convenience. The box of 20 is a good value, and they are easy to carry in my diaper bag. A great choice for on-the-go parents!</p>
               </div>
               <div className="comment">
                   <Stars3/>
                   <h3 className="shortComment">Not very adhesive</h3>
                   <p className="nameOfUser">by Amelia on April 8, 2023</p>
                   <p className="longComment">While these disposable changing mats are functional, I wish they had better adhesive to keep them in place during diaper changes. They tend to move around, making it a bit challenging to secure my baby. They work in a pinch, but could be improved.</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Convenient for outings</h3>
                   <p className="nameOfUser">by Jacob on April 5, 2023</p>
                   <p className="longComment">I always keep a few of these disposable changing mats in my diaper bag. They are a lifesaver when I need to change my baby on the go. The blue color adds a nice touch, and the hygienic design gives me peace of mind. A practical solution for busy parents!</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Great for daycare</h3>
                   <p className="nameOfUser">by Mia on April 3, 2023</p>
                   <p className="longComment">These disposable changing mats are a game-changer for daycare. They provide a clean and safe surface for multiple diaper changes throughout the day. The box of 20 ensures that we never run out. I highly recommend them to daycare providers and parents alike!</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Compact and reliable</h3>
                   <p className="nameOfUser">by James on March 30, 2023</p>
                   <p className="longComment">I love how compact and reliable these disposable changing mats are. They fit perfectly in my diaper bag without taking up much space. The leak-proof design and soft surface make them ideal for on-the-go diaper changes. Worth every penny!</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Emergency diaper kit</h3>
                   <p className="nameOfUser">by Emily on March 28, 2023</p>
                   <p className="longComment">These disposable changing mats have been a lifesaver for me during unexpected diaper changes. I always keep a few in my car and diaper bag. They are easy to use and dispose of, providing a clean and convenient solution. A must-have for every parent!</p>
               </div>
               <div className="comment">
                   <Stars3/>
                   <h3 className="shortComment">Thin but functional</h3>
                   <p className="nameOfUser">by Benjamin on March 25, 2023</p>
                   <p className="longComment">These disposable changing mats are on the thinner side, but they still serve their purpose. I recommend using them on a padded surface to provide extra comfort for the baby. They are handy for quick changes and offer a hygienic surface.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Convenient for travel</h3>
                   <p className="nameOfUser">by Olivia on March 23, 2023</p>
                   <p className="longComment">These disposable changing mats have been a game-changer for our travels. They are lightweight, compact, and provide a clean surface for diaper changes. The blue color is a nice touch, and the quality is excellent. A must-have for travel-loving families!</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Easy to use and dispose of</h3>
                   <p className="nameOfUser">by William on March 20, 2023</p>
                   <p className="longComment">I appreciate how easy these disposable changing mats are to use and dispose of. They save me the hassle of washing reusable mats and provide a hygienic option. The pack of 20 ensures that I always have one on hand. A practical choice for busy parents!</p>
               </div>
               <div className="comment">
                   <Stars3/>
                   <h3 className="shortComment">Not the most adhesive</h3>
                   <p className="nameOfUser">by Charlotte on March 18, 2023</p>
                   <p className="longComment">These disposable changing mats do the job, but they could use better adhesive. They tend to move around, especially during wriggly diaper changes. I have to be cautious to prevent my baby from sliding off. They are decent, but could be improved in terms of grip.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Hygienic and portable</h3>
                   <p className="nameOfUser">by Henry on March 15, 2023</p>
                   <p className="longComment">I love how these disposable changing mats provide a hygienic surface for my baby. They are individually wrapped, making them easy to carry in my diaper bag. The pack of 20 lasts us a while, and the quality is great. A practical solution for busy parents!</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Convenient for quick changes</h3>
                   <p className="nameOfUser">by Amelia on March 12, 2023</p>
                   <p className="longComment">These disposable changing mats are perfect for quick diaper changes. They offer a clean and comfortable surface for my baby, and I can simply dispose of them afterward. The only downside is that they are not very thick, but they get the job done.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Handy for on-the-go</h3>
                   <p className="nameOfUser">by Oliver on March 10, 2023</p>
                   <p className="longComment">These disposable changing mats have been a lifesaver for me as a busy parent. They are compact, easy to carry, and provide a clean and safe surface for diaper changes. The blue color is a nice touch. Highly recommended for parents on the move!</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Reliable for daycare</h3>
                   <p className="nameOfUser">by Emily on March 7, 2023</p>
                   <p className="longComment">I've been using these disposable changing mats for my daycare business, and they are reliable. They are hygienic, easy to use, and save us the trouble of cleaning reusable mats. The box of 20 is a good value for our needs. Recommended for daycare centers!</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Compact and convenient</h3>
                   <p className="nameOfUser">by Michael on March 5, 2023</p>
                   <p className="longComment">These disposable changing mats are a game-changer for outings with my baby. They are compact, easy to pack, and provide a hygienic surface for diaper changes. The pack of 20 ensures I'm always prepared. A must-have for parents on the move!</p>
               </div>
               <div className="comment">
                   <Stars3/>
                   <h3 className="shortComment">Could be thicker</h3>
                   <p className="nameOfUser">by Sophia on March 2, 2023</p>
                   <p className="longComment">While these disposable changing mats serve their purpose, I wish they were thicker. They lack sufficient padding, and I often need to use two or more mats for extra comfort. Thicker mats would provide better cushioning for my baby. Good for short diaper changes.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Travel essential</h3>
                   <p className="nameOfUser">by Ethan on February 28, 2023</p>
                   <p className="longComment">I never leave home without these disposable changing mats. They are a must-have for travel with a baby. The compact size, hygienic design, and ease of use make them invaluable. The blue color is a nice bonus. Highly recommended for jet-setting parents!</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Handy for quick changes</h3>
                   <p className="nameOfUser">by Olivia on February 25, 2023</p>
                   <p className="longComment">These disposable changing mats are a lifesaver when I need to change my baby in a hurry. They provide a clean and convenient surface, and I can easily dispose of them afterward. The only downside is that they could be a bit thicker for added comfort.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Hygienic and practical</h3>
                   <p className="nameOfUser">by Noah on February 23, 2023</p>
                   <p className="longComment">I find these disposable changing mats extremely hygienic and practical. They are individually wrapped, making them easy to carry in my diaper bag. The box of 20 lasts a long time, and the leak-proof design is excellent. A great choice for busy parents!</p>
               </div>
               <div className="comment">
                   <Stars3/>
                   <h3 className="shortComment">Not very adhesive</h3>
                   <p className="nameOfUser">by Ava on February 20, 2023</p>
                   <p className="longComment">These disposable changing mats do the job, but they could have better adhesive. They tend to slide around during diaper changes, which can be frustrating. I have to be extra careful to keep my baby secure. They work, but could use improvement in that aspect.</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Portable and reliable</h3>
                   <p className="nameOfUser">by Liam on February 18, 2023</p>
                   <p className="longComment">These disposable changing mats have become an essential item in my diaper bag. They are lightweight, compact, and provide a hygienic surface for diaper changes. The blue color is a nice touch, and the quality is reliable. Highly recommended for parents on the go!</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Convenient for everyday use</h3>
                   <p className="nameOfUser">by Harper on February 15, 2023</p>
                   <p className="longComment">I use these disposable changing mats daily, and they have made my life so much easier. They are hygienic, easy to use, and save me the trouble of washing reusable mats. The pack of 20 is a good value, and they fit perfectly on my changing table. A must-have for parents!</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Good for emergencies</h3>
                   <p className="nameOfUser">by Ethan on February 12, 2023</p>
                   <p className="longComment">These disposable changing mats have saved me during unexpected diaper emergencies. I keep a few in my car and diaper bag for peace of mind. They are easy to use, provide a clean surface, and can be disposed of without any hassle. Great for busy parents!</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Perfect for diaper changes</h3>
                   <p className="nameOfUser">by Amelia on February 10, 2023</p>
                   <p className="longComment">I can't imagine diaper changes without these disposable mats. They are the perfect size, easy to unfold, and offer a hygienic surface. The blue color is a nice touch. I keep them in multiple locations for convenience. A must-have for every parent!</p>
               </div>
               <div className="comment">
                   <Stars3/>
                   <h3 className="shortComment">Could use more padding</h3>
                   <p className="nameOfUser">by Noah on February 7, 2023</p>
                   <p className="longComment">These disposable changing mats are functional, but I wish they were more padded. They feel a bit thin, especially for longer diaper changes. It would be great if they provided more cushioning for my baby's comfort. Decent for quick changes, though.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Convenient for outings</h3>
                   <p className="nameOfUser">by Olivia on February 5, 2023</p>
                   <p className="longComment">These disposable changing mats have been a game-changer for outings with my baby. They are lightweight, compact, and provide a clean and safe surface. The blue color is a nice touch, and the quality is excellent. Highly recommended for busy parents!</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">A must-have for travel</h3>
                   <p className="nameOfUser">by Ethan on February 2, 2023</p>
                   <p className="longComment">These disposable changing mats are essential for travel with a baby. They are compact, hygienic, and provide a convenient surface for diaper changes. The pack of 20 ensures I'm always prepared. No more worrying about finding clean changing areas!</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Great for on-the-go</h3>
                   <p className="nameOfUser">by Amelia on January 30, 2023</p>
                   <p className="longComment">I love how these disposable changing mats make on-the-go diaper changes a breeze. They are easy to use, provide a clean surface, and can be quickly disposed of. The blue color is a nice bonus. A must-have for busy parents!</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Reliable and practical</h3>
                   <p className="nameOfUser">by Oliver on January 27, 2023</p>
                   <p className="longComment">These disposable changing mats have become a reliable companion for me as a parent. They are practical, hygienic, and save me the trouble of carrying around reusable mats. The pack of 20 ensures I always have enough on hand. Highly recommended!</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Perfect for daycare</h3>
                   <p className="nameOfUser">by Emily on January 25, 2023</p>
                   <p className="longComment">As a daycare provider, I rely on these disposable changing mats every day. They are hygienic, leak-proof, and easy to use. The box of 20 lasts a while, and they provide a clean and safe surface for diaper changes. A must-have for any daycare center!</p>
               </div>
            </div>
        </div>
    );
};


export default ReviewsDiaper;
import React from 'react';
import './Reviews.css'
import {Stars5, Stars2, Stars4, Stars1, Stars3} from "../Stars/Stars";

const ReviewsCup = ({setShowReviews, showReviews, lang}) => {
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
                   <h3 className="shortComment">Perfect baby meal set!</h3>
                   <p className="nameOfUser">by Emma on June 5, 2023</p>
                   <p className="longComment">I absolutely love this baby meal set! It has everything I need to feed my little one. The plate with the anti-slip base keeps the food in place, and the suction cup on the bowl is a game-changer. The leak-proof cup is amazing, and the utensils are just the right size for tiny hands. Plus, the adorable balloon design adds a touch of fun to mealtime. Highly recommended!</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Convenient and durable</h3>
                   <p className="nameOfUser">by Mark on June 4, 2023</p>
                   <p className="longComment">This meal set for babies is incredibly convenient and built to last. The plate's anti-slip base ensures that it stays in place, even during those clumsy moments. The suction cup on the bowl is a genius addition, and the leak-proof cup with the ergonomic spout is fantastic. The utensils are perfectly sized for little hands. The packaging is also lovely, making it a great gift option. It's dishwasher safe too, which is a big plus. Highly satisfied!</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Adorable and practical</h3>
                   <p className="nameOfUser">by Lily on June 3, 2023</p>
                   <p className="longComment">I can't get enough of this adorable meal set! The plate with the anti-slip base is a game-changer. The suction cup on the bowl keeps it stable, even when my little one gets a bit too excited. The leak-proof cup is a blessing, and the utensils are designed perfectly for small hands. I also love the window box packaging. It's such a practical and charming set. Highly recommend!</p>
               </div>
               <div className="comment">
                   <Stars3/>
                   <h3 className="shortComment">Not as durable as expected</h3>
                   <p className="nameOfUser">by Alex on June 2, 2023</p>
                   <p className="longComment">While the meal set looks cute and has some useful features, I have to say that it's not as durable as I expected. The plate's anti-slip base tends to wear off after a few uses, and the suction cup on the bowl doesn't hold as well as I hoped. The leak-proof cup works fine, but the utensils feel a bit flimsy. It's an okay set, but I expected better quality.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Fantastic for mealtime!</h3>
                   <p className="nameOfUser">by Sarah on June 1, 2023</p>
                   <p className="longComment">I'm thrilled with this meal set for my baby! The plate with the anti-slip base is a genius invention. It stays put on the highchair tray, even when my little one tries to grab everything. The suction cup on the bowl is a game-changer, and the leak-proof cup is a lifesaver. The utensils are a perfect size for tiny hands. The material feels sturdy, and it's easy to clean. Highly recommend!</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Great meal set with cute design</h3>
                   <p className="nameOfUser">by Emily on May 31, 2023</p>
                   <p className="longComment">I'm quite pleased with this meal set for my baby. The plate with the anti-slip base is a nice feature, and the bowl with the suction cup is practical. The leak-proof cup works well, and the utensils are suitable for little hands. The balloon design is adorable and adds a fun touch. It's a good value for the price, and I recommend it to other parents.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">A must-have for mealtime!</h3>
                   <p className="nameOfUser">by Olivia on May 30, 2023</p>
                   <p className="longComment">I can't express how much I love this meal set! It has made mealtime so much easier and enjoyable for both me and my baby. The plate's anti-slip base is fantastic, and the suction cup on the bowl is a game-changer. The leak-proof cup is a blessing, and the utensils are just the right size for my little one's hands. Plus, the design is super cute. I highly recommend it!</p>
               </div>
               <div className="comment">
                   <Stars3/>
                   <h3 className="shortComment">Average quality</h3>
                   <p className="nameOfUser">by Max on May 29, 2023</p>
                   <p className="longComment">This meal set is alright, but I expected better quality for the price. The plate's anti-slip base works well initially, but it tends to lose its grip after a while. The suction cup on the bowl is okay, but it could be stronger. The leak-proof cup is decent, and the utensils are fine. It's an average set overall, but there may be better options out there.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Highly functional and cute</h3>
                   <p className="nameOfUser">by Mia on May 28, 2023</p>
                   <p className="longComment">I adore this meal set! It's not only functional but also incredibly cute. The plate with the anti-slip base is a game-changer, and the bowl's suction cup keeps it steady. The leak-proof cup is a lifesaver, and the utensils are perfect for my baby's hands. The packaging is lovely, and the materials feel durable. I highly recommend it to all parents!</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Good quality, but a bit pricey</h3>
                   <p className="nameOfUser">by Noah on May 27, 2023</p>
                   <p className="longComment">This meal set is of good quality, but I find it a bit pricey compared to similar options on the market. The plate's anti-slip base works well, and the suction cup on the bowl is practical. The leak-proof cup is a nice feature, and the utensils are suitable for little hands. Overall, it's a decent set, but I wish it were more competitively priced.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Best meal set ever!</h3>
                   <p className="nameOfUser">by Ava on May 26, 2023</p>
                   <p className="longComment">I'm absolutely thrilled with this meal set! The plate's anti-slip base is a genius invention, and the bowl's suction cup is a game-changer. The leak-proof cup is fantastic, and the utensils are perfect for my baby's little hands. The materials feel durable, and the design is adorable. I can't recommend it enough to all parents out there!</p>
               </div>
               <div className="comment">
                   <Stars3/>
                   <h3 className="shortComment">Not as durable as expected</h3>
                   <p className="nameOfUser">by Ethan on May 25, 2023</p>
                   <p className="longComment">I had high hopes for this meal set, but it didn't live up to my expectations in terms of durability. The plate's anti-slip base started wearing off after a few uses, and the suction cup on the bowl could be stronger. The leak-proof cup works fine, but the utensils feel a bit flimsy. It's an okay set, but I wish it were sturdier.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Convenient and stylish</h3>
                   <p className="nameOfUser">by Harper on May 24, 2023</p>
                   <p className="longComment">This meal set is a must-have for any parent! The plate's anti-slip base is incredibly practical, and the suction cup on the bowl keeps it stable. The leak-proof cup is a game-changer, and the utensils are designed perfectly for little hands. The materials are high-quality, and the balloon design adds a touch of style. Highly recommended!</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Well-designed and functional</h3>
                   <p className="nameOfUser">by Leo on May 23, 2023</p>
                   <p className="longComment">I'm quite pleased with this meal set. The plate's anti-slip base is effective, and the suction cup on the bowl works well. The leak-proof cup is a great addition, and the utensils are suitable for my baby's hands. The materials feel sturdy, and it's easy to clean. The only downside is the price, which I find a bit on the higher side. Overall, a good purchase.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Cute and practical meal set</h3>
                   <p className="nameOfUser">by Chloe on May 22, 2023</p>
                   <p className="longComment">I adore this meal set for my baby! The plate's anti-slip base is genius, and the suction cup on the bowl keeps it in place. The leak-proof cup is fantastic, and the utensils are just the right size for little hands. The packaging is lovely, and the materials feel durable. It's a great investment for mealtime. Highly recommended!</p>
               </div>
               <div className="comment">
                   <Stars3/>
                   <h3 className="shortComment">Average quality, but cute design</h3>
                   <p className="nameOfUser">by Liam on May 21, 2023</p>
                   <p className="longComment">This meal set is alright, but I expected better quality for the price. The plate's anti-slip base works well initially, but it starts to lose its grip over time. The suction cup on the bowl is decent, but it could be stronger. The leak-proof cup is fine, and the utensils are okay. The cute design is a plus, but I'm not completely satisfied with the overall quality.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Excellent meal set!</h3>
                   <p className="nameOfUser">by Amelia on May 20, 2023</p>
                   <p className="longComment">I can't recommend this meal set enough! The plate with the anti-slip base is a game-changer. The suction cup on the bowl is fantastic, and the leak-proof cup is a lifesaver. The utensils are perfect for my baby's hands. The materials feel durable, and the design is adorable. It's worth every penny!</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Sturdy and functional</h3>
                   <p className="nameOfUser">by Henry on May 19, 2023</p>
                   <p className="longComment">This meal set is sturdy and functional. The plate's anti-slip base keeps it in place, and the suction cup on the bowl works well. The leak-proof cup is a nice touch, and the utensils are suitable for my baby's hands. The only drawback is the slightly higher price compared to other options, but overall, it's a reliable set.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Practical and cute</h3>
                   <p className="nameOfUser">by Evelyn on May 18, 2023</p>
                   <p className="longComment">I'm so glad I purchased this meal set for my baby! The plate's anti-slip base is genius, and the suction cup on the bowl keeps it steady. The leak-proof cup is fantastic, and the utensils are perfect for little hands. The design is adorable, and the materials feel high-quality. It's a practical and cute addition to our mealtimes.</p>
               </div>
               <div className="comment">
                   <Stars3/>
                   <h3 className="shortComment">Decent set, but not exceptional</h3>
                   <p className="nameOfUser">by Benjamin on May 17, 2023</p>
                   <p className="longComment">This meal set is decent, but it doesn't stand out from other options on the market. The plate's anti-slip base is okay, but it could be more effective. The suction cup on the bowl works fine, but it's not as strong as I hoped. The leak-proof cup is decent, and the utensils are suitable for my baby. It's an average set overall.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Amazing meal set!</h3>
                   <p className="nameOfUser">by Harper on May 16, 2023</p>
                   <p className="longComment">I'm extremely satisfied with this meal set! The plate's anti-slip base is a game-changer, and the suction cup on the bowl keeps it in place. The leak-proof cup is fantastic, and the utensils are perfect for my little one. The materials feel durable, and the design is adorable. It's definitely worth the investment!</p>
               </div>
            </div>
        </div>
    );
};


export default ReviewsCup;
import React from 'react';
import './Reviews.css'
import {Stars5, Stars2, Stars4, Stars1, Stars3} from "../Stars/Stars";

const ReviewsTowel = ({setShowReviews, showReviews, lang}) => {
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
                   <h3 className="shortComment">Cozy and Adorable Towel</h3>
                   <p className="nameOfUser">by Sarah on June 5, 2023</p>
                   <p className="longComment">I absolutely love this hooded bear-shaped baby bath towel! It's so cozy and adorable. The organic cotton material is incredibly soft and gentle on my baby's skin. The hood adds an extra touch of warmth, and the embroidered bear face is simply precious. Highly recommend it!</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Perfect for Bath Time</h3>
                   <p className="nameOfUser">by Emily on June 4, 2023</p>
                   <p className="longComment">This hooded bear-shaped baby bath towel is a game-changer during bath time! The organic micro cotton is super absorbent, ensuring my baby is dry in no time. The temperature-regulating hood keeps my little one cozy, and the embroidered face detail adds a fun element. It's a must-have for any parent!</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Adorable Design and Great Quality</h3>
                   <p className="nameOfUser">by Jennifer on June 3, 2023</p>
                   <p className="longComment">I'm in love with this hooded bear-shaped baby bath towel! The design is absolutely adorable, and the quality is top-notch. The organic cotton is luxuriously soft and the perfect choice for delicate baby skin. It's the cutest and most practical towel I've come across. Highly recommended!</p>
               </div>
               <div className="comment">
                   <Stars3/>
                   <h3 className="shortComment">Decent Towel, but Could Be Softer</h3>
                   <p className="nameOfUser">by Michael on June 2, 2023</p>
                   <p className="longComment">I purchased this hooded bear-shaped baby bath towel for my little one, and while it serves its purpose, I was expecting it to be softer. The absorbency is good, but I wish the cotton material was more gentle on the skin. The bear face detail is cute, though.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Absolutely Adorable!</h3>
                   <p className="nameOfUser">by Emma on June 1, 2023</p>
                   <p className="longComment">This hooded bear-shaped baby bath towel is absolutely adorable! The moment I saw it, I knew I had to get it for my baby. The organic cotton feels so gentle and the hood with the bear face is just too cute. It's become our favorite towel for bath time!</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Great Towel with a Fun Twist</h3>
                   <p className="nameOfUser">by David on May 31, 2023</p>
                   <p className="longComment">I really like this hooded bear-shaped baby bath towel. It's a great quality towel with a fun twist. The bear face and little ears make bath time more enjoyable for my baby. The organic cotton material is soft and absorbent. Overall, a good purchase!</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Super Soft and Cozy</h3>
                   <p className="nameOfUser">by Olivia on May 30, 2023</p>
                   <p className="longComment">I'm so impressed with the softness and coziness of this hooded bear-shaped baby bath towel. The organic cotton feels amazing against my baby's skin. The hood keeps them warm and the bear face adds an adorable touch. It's definitely worth the purchase!</p>
               </div>
               <div className="comment">
                   <Stars3/>
                   <h3 className="shortComment">Not as Absorbent as Expected</h3>
                   <p className="nameOfUser">by Daniel on May 29, 2023</p>
                   <p className="longComment">While this hooded bear-shaped baby bath towel is cute, I find that it's not as absorbent as I had hoped. It takes a bit longer to dry my baby compared to other towels I've used. The design is nice, but I wish it performed better in terms of absorbency.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Lovely and Practical Towel</h3>
                   <p className="nameOfUser">by Sophia on May 28, 2023</p>
                   <p className="longComment">I'm loving this hooded bear-shaped baby bath towel! It's not only adorable but also very practical. The organic micro cotton is soft, absorbent, and quick-drying. The temperature-regulating hood is a great feature, and the embroidered face detail is just too cute!</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Good Quality and Cute Design</h3>
                   <p className="nameOfUser">by Liam on May 27, 2023</p>
                   <p className="longComment">This hooded bear-shaped baby bath towel is a good quality product with a cute design. The organic cotton is soft and gentle on my baby's skin. The hood keeps them warm after a bath, and the bear face embroidery is a nice touch. Happy with my purchase!</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Must-Have Bath Time Essential</h3>
                   <p className="nameOfUser">by Amelia on May 26, 2023</p>
                   <p className="longComment">I can't recommend this hooded bear-shaped baby bath towel enough! It's a must-have bath time essential. The organic cotton is incredibly soft, and the bear face hood adds a fun element. It's the perfect size and keeps my baby warm and cozy. Love it!</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Nice and Absorbent</h3>
                   <p className="nameOfUser">by Ethan on May 25, 2023</p>
                   <p className="longComment">This hooded bear-shaped baby bath towel is nice and absorbent. The organic cotton material does a good job of drying my baby after a bath. The hood adds extra warmth, and the bear face detail is adorable. It's a practical and cute towel to have.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Soft and Cuddly Towel</h3>
                   <p className="nameOfUser">by Ava on May 24, 2023</p>
                   <p className="longComment">I'm absolutely delighted with this hooded bear-shaped baby bath towel. It's so soft and cuddly! The organic cotton feels luxurious, and the hood with the bear face is too cute for words. It's become a favorite in our bath time routine.</p>
               </div>
               <div className="comment">
                   <Stars3/>
                   <h3 className="shortComment">Average Quality, Cute Design</h3>
                   <p className="nameOfUser">by Noah on May 23, 2023</p>
                   <p className="longComment">This hooded bear-shaped baby bath towel has a cute design, but the quality is just average. The cotton material is not as soft as I expected, and the absorbency could be better. It's a decent towel overall, but I've seen better options out there.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Adorable and Practical</h3>
                   <p className="nameOfUser">by Mia on May 22, 2023</p>
                   <p className="longComment">I'm so glad I purchased this hooded bear-shaped baby bath towel. It's both adorable and practical. The organic cotton is soft and gentle, perfect for my baby's delicate skin. The hood keeps them warm, and the bear face detail is just too cute to resist!</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Great Value for Money</h3>
                   <p className="nameOfUser">by Benjamin on May 21, 2023</p>
                   <p className="longComment">This hooded bear-shaped baby bath towel offers great value for money. The organic micro cotton is soft and absorbent, and the towel is well-made. The hood is a nice addition, and the bear face embroidery adds a delightful touch. Happy with my purchase!</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Absolutely Adorable Towel!</h3>
                   <p className="nameOfUser">by Harper on May 20, 2023</p>
                   <p className="longComment">I'm absolutely in love with this hooded bear-shaped baby bath towel! The design is adorable, and the organic cotton is incredibly soft. The hood with the bear face is just too cute for words. It's definitely a towel that brings joy to bath time!</p>
               </div>
               <div className="comment">
                   <Stars3/>
                   <h3 className="shortComment">Not as Soft as Expected</h3>
                   <p className="nameOfUser">by Amelia on May 19, 2023</p>
                   <p className="longComment">While this hooded bear-shaped baby bath towel is cute, I'm a bit disappointed with the softness. It's not as soft as I expected, and the cotton material feels a bit rough. The design is nice, but I wish the towel was gentler on my baby's skin.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Cozy and Stylish Towel</h3>
                   <p className="nameOfUser">by Ethan on May 18, 2023</p>
                   <p className="longComment">This hooded bear-shaped baby bath towel is both cozy and stylish. The organic cotton is soft and feels luxurious. The bear face hood is a fun touch, and the absorbency is impressive. It's a towel that keeps my baby warm and makes bath time enjoyable.</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Nice Towel, but Hood is a Bit Small</h3>
                   <p className="nameOfUser">by Sophia on May 17, 2023</p>
                   <p className="longComment">Overall, I like this hooded bear-shaped baby bath towel. The organic cotton is soft, and the towel is of good quality. However, I find the hood to be a bit small. It could provide better coverage and warmth for my baby's head. Still, it's a cute and functional towel.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Gentle and Adorable</h3>
                   <p className="nameOfUser">by William on May 16, 2023</p>
                   <p className="longComment">This hooded bear-shaped baby bath towel is both gentle and adorable. The organic cotton is soft and doesn't irritate my baby's skin. The hood keeps them warm, and the bear face embroidery is simply delightful. It's a towel that brings smiles and comfort!</p>
               </div>
               <div className="comment">
                   <Stars3/>
                   <h3 className="shortComment">Average Towel, Cute Design</h3>
                   <p className="nameOfUser">by Olivia on May 15, 2023</p>
                   <p className="longComment">While the design of this hooded bear-shaped baby bath towel is cute, I find the overall quality to be average. The cotton material is not as soft as I expected, and the absorbency is just okay. It's an okay towel, but I wouldn't rave about it.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Super Cute and Soft</h3>
                   <p className="nameOfUser">by Noah on May 14, 2023</p>
                   <p className="longComment">I can't get enough of this hooded bear-shaped baby bath towel! It's super cute and incredibly soft. The organic cotton feels gentle against my baby's skin. The hood with the bear face is a lovely detail. It's definitely one of my favorite baby bath essentials!</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Well-Made and Functional</h3>
                   <p className="nameOfUser">by Mia on May 13, 2023</p>
                   <p className="longComment">This hooded bear-shaped baby bath towel is well-made and functional. The organic cotton is soft and absorbent, making it perfect for after-bath snuggles. The bear face hood adds a playful touch, and the towel is a good size. A great addition to our bath time routine.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Absolutely Precious Towel!</h3>
                   <p className="nameOfUser">by Ethan on May 12, 2023</p>
                   <p className="longComment">I can't get over how precious this hooded bear-shaped baby bath towel is! The organic cotton is so soft, and the hood with the bear face is the cutest thing ever. The towel is a generous size, and it's become a beloved part of our bath time ritual.</p>
               </div>
               <div className="comment">
                   <Stars3/>
                   <h3 className="shortComment">Lacking Softness</h3>
                   <p className="nameOfUser">by Ava on May 11, 2023</p>
                   <p className="longComment">While this hooded bear-shaped baby bath towel has a cute design, it lacks the softness I expected. The cotton material feels a bit rough, and it's not as gentle on my baby's skin as I hoped. It's an average towel, but I've used softer ones before.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Luxurious and Charming</h3>
                   <p className="nameOfUser">by Liam on May 10, 2023</p>
                   <p className="longComment">This hooded bear-shaped baby bath towel is both luxurious and charming. The organic cotton is incredibly soft and feels amazing on my baby's skin. The hood provides extra warmth, and the bear face adds an adorable touch. It's definitely a towel worth splurging on!</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Great Gift for New Parents</h3>
                   <p className="nameOfUser">by Sophia on May 9, 2023</p>
                   <p className="longComment">I purchased this hooded bear-shaped baby bath towel as a gift for my friend, and she loved it! The organic cotton is soft and gentle, and the bear face hood is simply adorable. It's a practical and cute gift for new parents. Highly recommended!</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Softness at Its Best</h3>
                   <p className="nameOfUser">by Benjamin on May 8, 2023</p>
                   <p className="longComment">I'm amazed by the softness of this hooded bear-shaped baby bath towel. The organic micro cotton is incredibly gentle on my baby's skin. The hood keeps them cozy, and the embroidered face detail is lovely. It's a top-notch towel for a luxurious bath experience.</p>
               </div>
               <div className="comment">
                   <Stars3/>
                   <h3 className="shortComment">Average Performance, Cute Look</h3>
                   <p className="nameOfUser">by Harper on May 7, 2023</p>
                   <p className="longComment">While this hooded bear-shaped baby bath towel has a cute look, I find its performance to be average. The absorbency is decent, but it doesn't dry my baby as quickly as I'd like. The design is nice, but I wish it had better functionality.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Delightful and Practical</h3>
                   <p className="nameOfUser">by Amelia on May 6, 2023</p>
                   <p className="longComment">This hooded bear-shaped baby bath towel is both delightful and practical. The organic cotton is soft, absorbent, and dries quickly. The temperature-regulating hood is a brilliant feature, and the embroidered face detail is adorable. A wonderful addition to bath time!</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Good Quality, Adorable Design</h3>
                   <p className="nameOfUser">by Ethan on May 5, 2023</p>
                   <p className="longComment">I'm happy with the quality of this hooded bear-shaped baby bath towel. The organic cotton feels nice and the towel is well-crafted. The bear face hood is an adorable touch. It's a cute and functional towel that adds charm to bath time.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Irresistibly Cute and Soft</h3>
                   <p className="nameOfUser">by Olivia on May 4, 2023</p>
                   <p className="longComment">I can't resist the cuteness and softness of this hooded bear-shaped baby bath towel. The organic cotton is incredibly gentle on my baby's skin, and the hood keeps them warm. The bear face embroidery is the cherry on top. Love it!</p>
               </div>
               <div className="comment">
                   <Stars3/>
                   <h3 className="shortComment">Decent Towel, Not Exceptional</h3>
                   <p className="nameOfUser">by William on May 3, 2023</p>
                   <p className="longComment">This hooded bear-shaped baby bath towel is decent, but it's not exceptional. The organic cotton is okay, but it's not as soft as I expected. The towel does the job, but I've seen better ones in terms of quality and performance.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Snuggly and Stylish</h3>
                   <p className="nameOfUser">by Ava on May 2, 2023</p>
                   <p className="longComment">This hooded bear-shaped baby bath towel is snuggly and stylish. The organic cotton is soft and cozy, perfect for wrapping my baby after bath time. The hood with the bear face adds a touch of cuteness. It's definitely a favorite in our towel collection.</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Good Overall, but Slightly Pricey</h3>
                   <p className="nameOfUser">by Liam on May 1, 2023</p>
                   <p className="longComment">I have mixed feelings about this hooded bear-shaped baby bath towel. It's good overall—the organic cotton is soft and absorbent, and the design is adorable. However, I find it slightly pricey compared to similar towels on the market.</p>
               </div>
            </div>
        </div>
    );
};


export default ReviewsTowel;
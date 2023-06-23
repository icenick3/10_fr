import React from 'react';
import './Reviews.css'
import {Stars5, Stars2, Stars4, Stars1, Stars3} from "../Stars/Stars";

const ReviewsErgo = ({setShowReviews, showReviews, lang}) => {
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
                   <h3 className="shortComment">Super baby carrier</h3>
                   <p className="nameOfUser">by Élodie on June 5, 2023</p>
                   <p className="longComment">The Ergobaby Aura baby carrier is great! It is easy to use and ideal for beginners. Its lightweight design makes it comfortable, soft, and durable, providing optimal support for newborns up to 25 lbs. The stretchy fabric is easy to tie with its guiding edge and instruction label. The wrap-style is designed to evenly distribute the weight of your baby on your back and hips. Its ergonomic M-shaped position is recognized as hip-friendly by the International Hip Dysplasia Institute. Ideal for beginners in babywearing.</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Exceptional quality</h3>
                   <p className="nameOfUser">by Pierre on June 3, 2023</p>
                   <p className="longComment">The Ergobaby Aura baby carrier is of exceptional quality. It is made from 100% eucalyptus and acacia-derived viscose. It is easy to tie with its guiding edge. Its lightweight and breathable design makes it comfortable for both the baby and the parent. It provides optimal support for babies. Its hip-friendly position is recognized by the International Hip Dysplasia Institute. It fits most parents, from small to large. It is gentle against your baby's delicate skin. It also features a convenient integrated pouch for storage. Suitable for newborns from 8 lbs to 25 lbs. Dimensions: 192.9 x 21 inches. Machine washable.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Convenient and comfortable</h3>
                   <p className="nameOfUser">by Céline on June 1, 2023</p>
                   <p className="longComment">The Ergobaby Aura baby carrier is both convenient and comfortable. It is easy to use, ideal for beginners. Its lightweight and breathable design makes it pleasant to wear for the baby and the parent. It provides optimal support for babies. Its ergonomic M-shaped position is recognized as hip-friendly by the International Hip Dysplasia Institute. It fits most parents, from small to large. It is gentle against your baby's delicate skin. It features a convenient integrated pouch for storage. Suitable for newborns from 8 lbs to 25 lbs. Dimensions: 192.9 x 21 inches. Machine washable.</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Perfect for first steps</h3>
                   <p className="nameOfUser">by Mathilde on May 29, 2023</p>
                   <p className="longComment">The Ergobaby Aura baby carrier is perfect for first steps in babywearing. Its lightweight and breathable design in eucalyptus and acacia viscose offers optimal comfort for the baby and the parent. It is easy to tie with its guiding edge and instruction label. Its ergonomic M-shaped position promotes healthy hip development for your baby. It fits most parents, regardless of their size. The soft fabric is pleasant against your baby's delicate skin. It also features a convenient integrated pouch for storage. Suitable for newborns from 8 lbs to 25 lbs. Dimensions: 192.9 x 21 inches. Machine washable.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">A must-have for parents</h3>
                   <p className="nameOfUser">by Amélie on May 27, 2023</p>
                   <p className="longComment">The Ergobaby Aura baby carrier is a must-have for parents. Its eucalyptus and acacia-derived viscose design offers exceptional softness and comfort for the baby. The openings for easy dressing and undressing make it practical for daily use. The short sleeves allow for better freedom of movement. The snap closure ensures optimal safety. Additionally, the decorative print adds a touch of style to this baby bodysuit. I highly recommend it!</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Convenient and comfortable</h3>
                   <p className="nameOfUser">by Maxime on May 25, 2023</p>
                   <p className="longComment">The Ergobaby Aura baby bodysuit is both convenient and comfortable. The round neckline and openings for easy dressing and undressing make parents' lives easier. The short sleeves provide good ventilation on hot days. The snap closure ensures a secure and comfortable fit. Additionally, the decorative print adds a touch of originality to this bodysuit. A perfect choice for your baby!</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Excellent value for money</h3>
                   <p className="nameOfUser">by Émilie on May 23, 2023</p>
                   <p className="longComment">The Ergobaby Aura baby bodysuit offers excellent value for money. Made from eucalyptus and acacia-derived viscose, it is both soft and durable. The round neckline and openings for easy dressing and undressing are very convenient for daily use. The short sleeves allow for good freedom of movement. The snap closure ensures a perfect fit. Additionally, the decorative print adds a touch of elegance to this bodysuit. I am completely satisfied with my purchase!</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Adorable design</h3>
                   <p className="nameOfUser">by Lucas on May 21, 2023</p>
                   <p className="longComment">The Ergobaby Aura baby bodysuit has an adorable design. The round neckline and openings for easy dressing and undressing make it practical to use. The short sleeves are ideal for warmer days. The snap closure ensures a secure fit. Additionally, the decorative print adds a touch of charm to this bodysuit. A perfect choice for parents who care about their baby's style and comfort.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Very good quality</h3>
                   <p className="nameOfUser">by Camille on May 19, 2023</p>
                   <p className="longComment">The Ergobaby Aura baby bodysuit is of very good quality. Made from eucalyptus and acacia-derived viscose, it is soft and pleasant to the touch. The round neckline makes dressing and undressing easy. The short sleeves provide good ventilation on hot days. The snap closure is sturdy and secure. Additionally, the decorative print adds a touch of style to this bodysuit. I highly recommend it!</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Comfortable and cute</h3>
                   <p className="nameOfUser">by Emma on May 17, 2023</p>
                   <p className="longComment">The Ergobaby Aura baby bodysuit is both comfortable and cute. Its eucalyptus and acacia-derived viscose material is very soft for the baby's delicate skin. The round neckline and openings for easy dressing and undressing make it practical to use. The short sleeves offer better freedom of movement. The snap closure is sturdy and secure. Additionally, the decorative print adds a touch of cuteness to this bodysuit. I'm delighted with my purchase!</p>
               </div>


               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Exceptional quality</h3>
                   <p className="nameOfUser">by Thomas on May 15, 2023</p>
                   <p className="longComment">The Ergobaby Aura baby bodysuit is of exceptional quality. Its eucalyptus and acacia-derived viscose construction guarantees softness and durability. The round neckline and openings for easy dressing and undressing make parents' lives easier. The short sleeves are ideal for warmer days. The snap closure ensures a secure fit. Additionally, the decorative print adds a touch of originality to this bodysuit. I highly recommend it!</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Perfect for summer</h3>
                   <p className="nameOfUser">by Léa on May 13, 2023</p>
                   <p className="longComment">The Ergobaby Aura baby bodysuit is perfect for summer. Its eucalyptus and acacia-derived viscose material offers a feeling of freshness and lightness. The round neckline and openings for easy dressing and undressing are very convenient. The short sleeves provide good ventilation. The snap closure is sturdy and secure. Additionally, the decorative print adds a touch of summer style to this bodysuit. I am delighted with this purchase!</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Easy to use</h3>
                   <p className="nameOfUser">by Gabriel on May 11, 2023</p>
                   <p className="longComment">The Ergobaby Aura baby bodysuit is very easy to use. Its eucalyptus and acacia-derived viscose material makes it soft and comfortable for the baby. The round neckline and openings for easy dressing and undressing make it practical for daily use. The short sleeves offer good freedom of movement. The snap closure is sturdy and secure. Additionally, the decorative print adds a touch of style to this bodysuit. I recommend it to all parents!</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Adorable and practical</h3>
                   <p className="nameOfUser">by Chloé on May 9, 2023</p>
                   <p className="longComment">The Ergobaby Aura baby bodysuit is both adorable and practical. Its eucalyptus and acacia-derived viscose material is very soft for the baby's sensitive skin. The round neckline makes dressing and undressing easy. The openings for easy dressing and undressing are very convenient for daily use. The short sleeves allow for better ventilation. The snap closure is sturdy and secure. Additionally, the decorative print adds a touch of charm to this bodysuit. I am thrilled with my purchase!</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">A wise choice</h3>
                   <p className="nameOfUser">by Noah on May 7, 2023</p>
                   <p className="longComment">The Ergobaby Aura baby bodysuit is a wise choice. Its eucalyptus and acacia-derived viscose construction ensures softness and comfort for the baby. The round neckline and openings for easy dressing and undressing make parents' lives easier. The short sleeves are ideal for hotter days. The snap closure is sturdy and secure. Additionally, the decorative print adds a touch of originality to this bodysuit. I highly recommend it!</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Charming design</h3>
                   <p className="nameOfUser">by Jade on May 5, 2023</p>
                   <p className="longComment">The Ergobaby Aura baby bodysuit has a charming design. Its eucalyptus and acacia-derived viscose material is very soft for the baby's sensitive skin. The round neckline and openings for easy dressing and undressing make it practical to use. The short sleeves provide better ventilation on hot days. The snap closure ensures a secure fit. Additionally, the decorative print adds a touch of charm to this bodysuit. An excellent choice for parents concerned about their baby's comfort and style.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">A satisfying purchase</h3>
                   <p className="nameOfUser">by Louis on May 3, 2023</p>
                   <p className="longComment">The Ergobaby Aura baby bodysuit is a satisfying purchase. Its eucalyptus and acacia-derived viscose material is very soft and pleasant to the touch. The round neckline and openings for easy dressing and undressing make it practical for daily use. The short sleeves provide better ventilation on hot days. The snap closure ensures a secure and comfortable fit. Additionally, the decorative print adds a touch of style to this bodysuit. I highly recommend it to parents!</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Comfort and quality</h3>
                   <p className="nameOfUser">by Léo on May 1, 2023</p>
                   <p className="longComment">The Ergobaby Aura baby bodysuit offers both comfort and quality. Its eucalyptus and acacia-derived viscose material is soft and pleasant for the baby's sensitive skin. The round neckline and openings for easy dressing and undressing make it practical to use. The short sleeves allow for better ventilation. The snap closure is sturdy and secure. Additionally, the decorative print adds a touch of style to this bodysuit. An excellent choice for your little one!</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Practical and elegant</h3>
                   <p className="nameOfUser">by Eva on April 29, 2023</p>
                   <p className="longComment">The Ergobaby Aura baby bodysuit is both practical and elegant. Its eucalyptus and acacia-derived viscose material is soft and comfortable for the baby. The round neckline and openings for easy dressing and undressing make parents' lives easier. The short sleeves provide good ventilation. The snap closure ensures a secure fit. Additionally, the decorative print adds a touch of elegance to this bodysuit. I highly recommend it!</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Perfect for all occasions</h3>
                   <p className="nameOfUser">by Maeva on April 27, 2023</p>
                   <p className="longComment">The Ergobaby Aura baby bodysuit is perfect for all occasions. Its eucalyptus and acacia-derived viscose material is soft and comfortable. The round neckline and openings for easy dressing and undressing make it practical for daily use. The short sleeves provide better ventilation on hot days. The snap closure ensures a secure and comfortable fit. Additionally, the decorative print adds a touch of style to this bodysuit. I am very satisfied with my purchase!</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Excellent quality</h3>
                   <p className="nameOfUser">by Hugo on April 25, 2023</p>
                   <p className="longComment">The Ergobaby Aura baby bodysuit is of excellent quality. Its eucalyptus and acacia-derived viscose material is soft, lightweight, and pleasant to the touch. The round neckline and openings for easy dressing and undressing make it practical to use. The short sleeves provide better freedom of movement. The snap closure is sturdy and secure. Additionally, the decorative print adds a touch of style to this bodysuit. I highly recommend it to parents looking for quality and comfort for their baby.</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Original design</h3>
                   <p className="nameOfUser">by Eva on April 23, 2023</p>
                   <p className="longComment">The Ergobaby Aura baby bodysuit has an original design. Its eucalyptus and acacia-derived viscose material is soft and pleasant for the baby's delicate skin. The round neckline makes dressing and undressing easy. The openings for easy dressing and undressing are practical for daily use. The short sleeves provide good ventilation. The snap closure is sturdy and secure. Additionally, the decorative print adds a touch of uniqueness to this bodysuit. I am very satisfied with my purchase!</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Very practical</h3>
                   <p className="nameOfUser">by Lucas on April 21, 2023</p>
                   <p className="longComment">The Ergobaby Aura baby bodysuit is very practical. Its eucalyptus and acacia-derived viscose material is soft and comfortable for the baby. The round neckline and openings for easy dressing and undressing make it easy to use. The short sleeves provide good ventilation. The snap closure is sturdy and secure. Additionally, the decorative print adds a touch of style to this bodysuit. I highly recommend it to parents!</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Very good value for money</h3>
                   <p className="nameOfUser">by Zoé on April 19, 2023</p>
                   <p className="longComment">The Ergobaby Aura baby bodysuit offers very good value for money. Its eucalyptus and acacia-derived viscose material is soft and pleasant for the baby's sensitive skin. The round neckline and openings for easy dressing and undressing make it practical for daily use. The short sleeves allow for better ventilation. The snap closure is sturdy and secure. Additionally, the decorative print adds a touch of style to this bodysuit. I am very satisfied with my purchase!</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Comfortable and durable</h3>
                   <p className="nameOfUser">by Gabriel on April 17, 2023</p>
                   <p className="longComment">The Ergobaby Aura baby bodysuit is both comfortable and durable. Its eucalyptus and acacia-derived viscose material is soft and pleasant for the baby. The round neckline and openings for easy dressing and undressing make it practical to use. The short sleeves provide better ventilation on hot days. The snap closure is sturdy and secure. Additionally, the decorative print adds a touch of style to this bodysuit. I highly recommend it without hesitation!</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Practical and cute</h3>
                   <p className="nameOfUser">by Emma on April 15, 2023</p>
                   <p className="longComment">The Ergobaby Aura baby bodysuit is both practical and cute. Its eucalyptus and acacia-derived viscose material is soft for the baby's delicate skin. The round neckline and openings for easy dressing and undressing make it practical for daily use. The short sleeves allow for better freedom of movement. The snap closure is sturdy and secure. Additionally, the decorative print adds a touch of cuteness to this bodysuit. I am very satisfied with my purchase!</p>
               </div>


               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Very good product</h3>
                   <p className="nameOfUser">by Thomas on April 13, 2023</p>
                   <p className="longComment">The Ergobaby Aura baby bodysuit is a very good product. Its eucalyptus and acacia-derived viscose material is of high quality and gentle on the baby's skin. The round neckline makes dressing and undressing easy. The openings for easy dressing and undressing are practical. The short sleeves provide better ventilation. The snap closure is sturdy and secure. Additionally, the decorative print adds a touch of style to this bodysuit. I highly recommend it!</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Modern design</h3>
                   <p className="nameOfUser">by Léa on April 11, 2023</p>
                   <p className="longComment">The Ergobaby Aura baby bodysuit has a modern design. Its eucalyptus and acacia-derived viscose material is soft and comfortable for the baby. The round neckline and openings for easy dressing and undressing make it practical to use. The short sleeves provide better ventilation on hot days. The snap closure is sturdy and secure. Additionally, the decorative print adds a touch of modernity to this bodysuit. I am very satisfied with my purchase!</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Very comfortable</h3>
                   <p className="nameOfUser">by Hugo on April 9, 2023</p>
                   <p className="longComment">The Ergobaby Aura baby bodysuit is very comfortable. Its eucalyptus and acacia-derived viscose material is soft and pleasant to the touch. The round neckline and openings for easy dressing and undressing make it practical to use. The short sleeves provide better ventilation. The snap closure is sturdy and secure. Additionally, the decorative print adds a touch of style to this bodysuit. I highly recommend it to parents seeking comfort for their baby.</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Practical and soft</h3>
                   <p className="nameOfUser">by Emma on April 7, 2023</p>
                   <p className="longComment">The Ergobaby Aura baby bodysuit is both practical and soft. Its eucalyptus and acacia-derived viscose material is very gentle on the baby's sensitive skin. The round neckline and openings for easy dressing and undressing make it easy to use. The short sleeves provide better ventilation on hot days. The snap closure is sturdy and safe. Additionally, the decorative print adds a touch of charm to this bodysuit. I am delighted with my purchase!</p>
               </div>
            </div>
        </div>
    );
};


export default ReviewsErgo;
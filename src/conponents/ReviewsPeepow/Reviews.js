import React from 'react';
import './Reviews.css'
import {Stars5, Stars2, Stars4, Stars1, Stars3} from "../Stars/Stars";

const ReviewsPeepow = ({setShowReviews, showReviews, lang}) => {
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
                   <h3 className="shortComment">Versatile and Convenient</h3>
                   <p className="nameOfUser">by Emily on June 5, 2023</p>
                   <p className="longComment">I love the Pot 3-en-1 Peepow! It serves as a pot, a reducer, and a step stool, making it perfect for every stage of potty training. It's so convenient to have all these functionalities in one product. Highly recommended!</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Great for Toddlers</h3>
                   <p className="nameOfUser">by David on June 4, 2023</p>
                   <p className="longComment">The Pot 3-en-1 Peepow is suitable for children aged 20 months and above. It's the ideal size for toddlers and provides them with the support they need during potty training. It's been a game-changer for us!</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">User-Friendly Design</h3>
                   <p className="nameOfUser">by Sarah on June 3, 2023</p>
                   <p className="longComment">I find the Pot 3-en-1 Peepow very easy to use. The design is intuitive, and it's effortless to switch between the different functions. It has made potty training a much smoother experience for both me and my child.</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Sturdy and Durable</h3>
                   <p className="nameOfUser">by Michael on June 2, 2023</p>
                   <p className="longComment">The Pot 3-en-1 Peepow is built to last. It's made of high-quality materials and feels sturdy. Even as a step stool, it provides great stability. I'm impressed with its durability and would recommend it to other parents.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Compact and Space-Saving</h3>
                   <p className="nameOfUser">by Olivia on June 1, 2023</p>
                   <p className="longComment">One thing I appreciate about the Pot 3-en-1 Peepow is its compact size. It doesn't take up much space in the bathroom, and I can easily store it when not in use. It's a practical solution for small living spaces.</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Encourages Independence</h3>
                   <p className="nameOfUser">by Ethan on May 31, 2023</p>
                   <p className="longComment">With the Pot 3-en-1 Peepow, my child has gained more independence in the potty training process. The step stool feature allows them to reach the toilet on their own, and the pot and reducer are designed with their comfort in mind. It's a fantastic product!</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Fun and Engaging</h3>
                   <p className="nameOfUser">by Isabella on May 30, 2023</p>
                   <p className="longComment">My child loves using the Pot 3-en-1 Peepow! It has vibrant colors and a friendly design that makes potty training more enjoyable. The versatility of this product is fantastic, and it has made the whole process less daunting for both of us.</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Thoughtful Features</h3>
                   <p className="nameOfUser">by Benjamin on May 29, 2023</p>
                   <p className="longComment">I appreciate the thoughtful features of the Pot 3-en-1 Peepow. The pot and reducer are easy to clean, and the step stool has a non-slip surface for added safety. It's evident that this product was designed with both children and parents in mind.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Smooth Transition</h3>
                   <p className="nameOfUser">by Mia on May 28, 2023</p>
                   <p className="longComment">The Pot 3-en-1 Peepow has made the transition from diapers to using the toilet much smoother for my child. The ability to switch between the pot and reducer has helped them gradually adjust. It's a versatile tool that every parent should consider.</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Value for Money</h3>
                   <p className="nameOfUser">by Alexander on May 27, 2023</p>
                   <p className="longComment">Considering the three functionalities it offers, the Pot 3-en-1 Peepow is definitely a value-for-money purchase. It eliminates the need to buy separate products for each stage of potty training. I'm happy with the investment I made.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Great Training Companion</h3>
                   <p className="nameOfUser">by Ava on May 26, 2023</p>
                   <p className="longComment">The Pot 3-en-1 Peepow has been a great companion during our potty training journey. It has provided the necessary support and tools we needed. The step stool is especially helpful in teaching my child to be more independent in the bathroom.</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Easy to Clean</h3>
                   <p className="nameOfUser">by James on May 25, 2023</p>
                   <p className="longComment">Cleaning the Pot 3-en-1 Peepow is a breeze. The materials used are resistant to stains, and the pot and reducer can be easily emptied and washed. It saves me time and effort, allowing me to focus on other aspects of parenting.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Highly Functional</h3>
                   <p className="nameOfUser">by Lily on May 24, 2023</p>
                   <p className="longComment">The Pot 3-en-1 Peepow is not just a regular potty. Its versatility makes it highly functional. Whether we're at home or traveling, we always have the right tool for the job. It's a reliable product that I trust.</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Encourages Confidence</h3>
                   <p className="nameOfUser">by Noah on May 23, 2023</p>
                   <p className="longComment">Using the Pot 3-en-1 Peepow has boosted my child's confidence in their potty training journey. The comfortable seating and secure step stool have made them feel more at ease. It's a supportive product that fosters self-assurance.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Well-Designed and Practical</h3>
                   <p className="nameOfUser">by Sophia on May 22, 2023</p>
                   <p className="longComment">The Pot 3-en-1 Peepow is not only well-designed but also highly practical. Its compact size makes it easy to store, and the smooth edges ensure safety. It's a reliable tool that has made potty training a positive experience.</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Adaptable for Different Needs</h3>
                   <p className="nameOfUser">by Oliver on May 21, 2023</p>
                   <p className="longComment">The Pot 3-en-1 Peepow is adaptable to different needs. As a pot, it's comfortable and convenient. As a reducer, it provides the necessary support. And as a step stool, it helps my child reach the sink easily. It's a versatile product that accommodates various situations.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Practical and Efficient</h3>
                   <p className="nameOfUser">by Emma on May 20, 2023</p>
                   <p className="longComment">The Pot 3-en-1 Peepow is a practical and efficient solution for potty training. It eliminates the need for multiple products and simplifies the process. It's been a time-saving and space-saving addition to our bathroom.</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Durability at Its Best</h3>
                   <p className="nameOfUser">by Ethan on May 19, 2023</p>
                   <p className="longComment">I'm impressed with the durability of the Pot 3-en-1 Peepow. It has withstood daily use and hasn't shown any signs of wear and tear. The quality is exceptional, and I'm confident it will last throughout my child's potty training journey.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Perfect Size</h3>
                   <p className="nameOfUser">by Mia on May 18, 2023</p>
                   <p className="longComment">The Pot 3-en-1 Peepow is the perfect size for my child. It provides a comfortable seating area without being too bulky. The step stool height is also just right. It's a well-proportioned product that meets our needs.</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Thoughtful Design</h3>
                   <p className="nameOfUser">by Noah on May 17, 2023</p>
                   <p className="longComment">The design of the Pot 3-en-1 Peepow is well-thought-out. The pot and reducer have smooth edges to prevent any discomfort, and the step stool has a non-slip surface for safety. It's evident that the manufacturer cares about the user's experience.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Encourages Independence</h3>
                   <p className="nameOfUser">by Lily on May 16, 2023</p>
                   <p className="longComment">One of the best features of the Pot 3-en-1 Peepow is how it encourages independence. My child loves using the step stool to climb onto the toilet by themselves. It's a small victory that boosts their confidence and makes them feel more grown-up.</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Easy to Assemble</h3>
                   <p className="nameOfUser">by Benjamin on May 15, 2023</p>
                   <p className="longComment">Setting up the Pot 3-en-1 Peepow was a breeze. The instructions were clear, and all the necessary parts were included. It took me just a few minutes to assemble it, and it has been functioning perfectly ever since.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Travel-Friendly</h3>
                   <p className="nameOfUser">by Ava on May 14, 2023</p>
                   <p className="longComment">The Pot 3-en-1 Peepow is a great companion for traveling. Its compact size and lightweight design make it easy to pack and carry. It ensures that my child is comfortable and familiar with their potty training routine no matter where we go.</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Versatility at Its Best</h3>
                   <p className="nameOfUser">by James on May 13, 2023</p>
                   <p className="longComment">I love how versatile the Pot 3-en-1 Peepow is. It adapts to my child's changing needs during the potty training process. Whether we're using it as a pot, a reducer, or a step stool, it always serves its purpose effectively.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Child-Friendly Design</h3>
                   <p className="nameOfUser">by Isabella on May 12, 2023</p>
                   <p className="longComment">The Pot 3-en-1 Peepow has a child-friendly design that instantly appealed to my little one. The colorful and engaging appearance made them excited about potty training. It's amazing how a well-designed product can make such a difference.</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Easy Transition</h3>
                   <p className="nameOfUser">by Alexander on May 11, 2023</p>
                   <p className="longComment">The Pot 3-en-1 Peepow has made the transition from the diaper stage to using the toilet much easier for my child. The familiarity of the pot and reducer, combined with the step stool, created a seamless process. It's a reliable tool for successful potty training.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Parent-Friendly Features</h3>
                   <p className="nameOfUser">by Olivia on May 10, 2023</p>
                   <p className="longComment">As a parent, I appreciate the thoughtful features of the Pot 3-en-1 Peepow. The pot and reducer are easy to clean and maintain, saving me time and effort. The step stool's sturdy construction gives me peace of mind knowing that my child is safe.</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Stress-Free Training</h3>
                   <p className="nameOfUser">by Ethan on May 9, 2023</p>
                   <p className="longComment">Thanks to the Pot 3-en-1 Peepow, potty training has become a stress-free experience for both my child and me. The versatility and convenience it offers have simplified the entire process. It's a must-have for any parent embarking on the potty training journey.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Great Investment</h3>
                   <p className="nameOfUser">by Mia on May 8, 2023</p>
                   <p className="longComment">Investing in the Pot 3-en-1 Peepow was a great decision. Its durable construction and multiple functionalities make it worth every penny. It has been an invaluable tool in achieving successful potty training.</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Highly Recommended</h3>
                   <p className="nameOfUser">by Noah on May 7, 2023</p>
                   <p className="longComment">I highly recommend the Pot 3-en-1 Peepow to all parents going through the potty training phase. Its versatility, ease of use, and child-friendly design make it a top choice. It's a reliable product that makes the journey smoother.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Convenient and Practical</h3>
                   <p className="nameOfUser">by Lily on May 6, 2023</p>
                   <p className="longComment">The Pot 3-en-1 Peepow is a convenient and practical solution for potty training. It's great to have a single product that serves multiple purposes. The step stool is especially useful for my child to independently reach the sink and wash their hands.</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Well-Made Product</h3>
                   <p className="nameOfUser">by Benjamin on May 5, 2023</p>
                   <p className="longComment">The Pot 3-en-1 Peepow is a well-made product that meets my expectations. The materials used are of high quality, ensuring its durability. It has been a reliable companion in our potty training journey.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">User-Friendly</h3>
                   <p className="nameOfUser">by Sophia on May 4, 2023</p>
                   <p className="longComment">The Pot 3-en-1 Peepow is incredibly user-friendly. It's easy to assemble, easy to clean, and easy for my child to use. The intuitive design has simplified the entire potty training process.</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Compact and Space-Saving</h3>
                   <p className="nameOfUser">by Oliver on May 3, 2023</p>
                   <p className="longComment">The Pot 3-en-1 Peepow's compact size is a great advantage for families with limited space. It doesn't take up much room in the bathroom and can be easily stored when not in use. It's a practical solution without compromising on functionality.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Sturdy and Secure</h3>
                   <p className="nameOfUser">by Emma on May 2, 2023</p>
                   <p className="longComment">The Pot 3-en-1 Peepow provides a sturdy and secure seating area for my child. I appreciate the stability it offers, ensuring their safety during potty training. It's a reliable choice that instills confidence.</p>
               </div>
               <div className="comment">
                   <Stars4/>
                   <h3 className="shortComment">Smooth Transition</h3>
                   <p className="nameOfUser">by Ava on May 1, 2023</p>
                   <p className="longComment">The Pot 3-en-1 Peepow has made the transition from using a diaper to the pot much smoother. Its versatile design and comfortable seating have eased my child into the new routine. It's a valuable tool in the potty training process.</p>
               </div>
               <div className="comment">
                   <Stars5/>
                   <h3 className="shortComment">Practical Gift</h3>
                   <p className="nameOfUser">by James on April 30, 2023</p>
                   <p className="longComment">If you're looking for a practical and thoughtful gift for parents with toddlers, the Pot 3-en-1 Peepow is an excellent choice. It's a versatile product that helps simplify the potty training journey. It's a gift that keeps on giving.</p>
               </div>

           </div>
        </div>
    );
};


export default ReviewsPeepow;
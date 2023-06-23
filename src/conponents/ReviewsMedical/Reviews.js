import React from 'react';
import './Reviews.css'
import {Stars5, Stars2, Stars4, Stars1, Stars3} from "../Stars/Stars";

const ReviewsMedical = ({setShowReviews, showReviews, lang}) => {
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
                    <h3 className="shortComment">Convenient Baby Care Set</h3>
                    <p className="nameOfUser">by Sophie on June 3, 2023</p>
                    <p className="longComment">This baby care kit is incredibly convenient! It contains all the
                        essential accessories for daily baby care. I appreciate its easy portability and compact size. I
                        highly recommend it to parents.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Quality and Practicality</h3>
                    <p className="nameOfUser">by Antoine on June 2, 2023</p>
                    <p className="longComment">The baby care kit is of high quality and very practical. The included
                        accessories are essential for taking care of the baby. I like how the kit is organized with its
                        elastic bands and interior and exterior pockets. I am satisfied with my purchase.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">A Must-Have for New Parents</h3>
                    <p className="nameOfUser">by Emily on May 28, 2023</p>
                    <p className="longComment">As a new parent, this baby care kit has been a lifesaver! It has
                        everything I need to ensure the well-being of my baby. The compact size and easy access make it
                        perfect for on-the-go situations. Highly recommended!</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Great Value for Money</h3>
                    <p className="nameOfUser">by Michael on May 25, 2023</p>
                    <p className="longComment">I was pleasantly surprised by the quality and affordability of this baby
                        care kit. It offers great value for money with all the essential accessories included. It's a
                        reliable companion for any parent.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Convenient and Compact</h3>
                    <p className="nameOfUser">by Olivia on May 22, 2023</p>
                    <p className="longComment">I love how this baby care kit is designed for convenience. It's compact
                        enough to fit in my diaper bag, and I can easily access all the accessories. It makes taking
                        care of my baby a breeze!</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Well-Organized Kit</h3>
                    <p className="nameOfUser">by Benjamin on May 18, 2023</p>
                    <p className="longComment">This baby care kit is well-organized and makes it easy to find the right
                        accessory when needed. The elastic bands and pockets keep everything in place. It's a must-have
                        for any parent.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Compact and Travel-Friendly</h3>
                    <p className="nameOfUser">by Ava on May 15, 2023</p>
                    <p className="longComment">I travel a lot with my baby, and this care kit has been a game-changer.
                        It's compact, lightweight, and fits perfectly in my travel bag. It ensures I have all the
                        necessary items for baby care on the go.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Great Gift for New Parents</h3>
                    <p className="nameOfUser">by William on May 10, 2023</p>
                    <p className="longComment">If you're looking for a practical and thoughtful gift for new parents,
                        this baby care kit is an excellent choice. It's packed with essential accessories and will make
                        their lives much easier.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Stylish and Functional</h3>
                    <p className="nameOfUser">by Sophia on May 7, 2023</p>
                    <p className="longComment">Not only is this baby care kit functional, but it also has a stylish
                        design. The accessories are top-notch, and the overall quality is impressive. I'm thrilled with
                        this purchase!</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Easy to Use and Clean</h3>
                    <p className="nameOfUser">by Daniel on May 4, 2023</p>
                    <p className="longComment">This baby care kit is user-friendly, and the accessories are easy to use.
                        Cleaning is a breeze, too. It's a must-have for any parent who wants to make baby care
                        hassle-free.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Compact and Complete</h3>
                    <p className="nameOfUser">by Isabella on April 30, 2023</p>
                    <p className="longComment">I'm amazed by how many essential items are included in this compact baby
                        care kit. It covers all the bases and ensures I have everything I need for my baby's care.
                        Highly recommended!</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Convenient for On-the-Go</h3>
                    <p className="nameOfUser">by Benjamin on April 26, 2023</p>
                    <p className="longComment">This baby care kit is a lifesaver when we're out and about. It's compact,
                        lightweight, and has all the necessary accessories. It saves us from carrying multiple items
                        separately.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Practical and Versatile</h3>
                    <p className="nameOfUser">by Emily on April 22, 2023</p>
                    <p className="longComment">I love how versatile this baby care kit is. It's not only great for
                        everyday use at home but also perfect for traveling. It has made baby care much more convenient
                        for me.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">High-Quality Accessories</h3>
                    <p className="nameOfUser">by Noah on April 18, 2023</p>
                    <p className="longComment">The accessories included in this baby care kit are of excellent quality.
                        They are durable, functional, and ensure the utmost safety for my baby. I'm impressed!</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Compact and Essential</h3>
                    <p className="nameOfUser">by Olivia on April 14, 2023</p>
                    <p className="longComment">This baby care kit is a compact and essential companion for every parent.
                        It has all the necessary items conveniently packed in one place. I can't imagine taking care of
                        my baby without it.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Well-Designed and Functional</h3>
                    <p className="nameOfUser">by Ethan on April 10, 2023</p>
                    <p className="longComment">I appreciate the thoughtful design of this baby care kit. It's evident
                        that every detail has been considered to provide maximum functionality. It's a great investment
                        for new parents.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Easy Access Anywhere</h3>
                    <p className="nameOfUser">by Mia on April 6, 2023</p>
                    <p className="longComment">This baby care kit has become my go-to solution for baby care. I can
                        easily access all the accessories no matter where I am. It's incredibly convenient and saves me
                        time.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Great for Newborns</h3>
                    <p className="nameOfUser">by Alexander on April 2, 2023</p>
                    <p className="longComment">This baby care kit has been invaluable since my baby's birth. The
                        accessories are gentle and perfectly suited for newborn care. I highly recommend it to all new
                        parents.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Travel-Friendly Solution</h3>
                    <p className="nameOfUser">by Lily on March 29, 2023</p>
                    <p className="longComment">If you're a parent who loves to travel, this baby care kit is a
                        must-have. It's compact, lightweight, and ensures you have everything you need for your baby's
                        care on the go.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Thoughtful and Complete Set</h3>
                    <p className="nameOfUser">by Noah on March 25, 2023</p>
                    <p className="longComment">I'm impressed by the thoughtfulness behind this baby care kit. It
                        includes all the necessary accessories, and the quality is exceptional. It's a great value for
                        the price.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Essential and Reliable</h3>
                    <p className="nameOfUser">by Sophia on March 21, 2023</p>
                    <p className="longComment">This baby care kit has become an essential part of my daily routine. It's
                        reliable, well-made, and contains everything I need to keep my baby happy and healthy.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Compact Size, Big Benefits</h3>
                    <p className="nameOfUser">by Lucas on March 17, 2023</p>
                    <p className="longComment">Don't let the compact size fool you. This baby care kit offers
                        significant benefits. It's well-designed, easy to carry, and has all the essentials. Highly
                        recommended!</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Convenient and Well-Organized</h3>
                    <p className="nameOfUser">by Emma on March 13, 2023</p>
                    <p className="longComment">This baby care kit has made my life so much easier. It's conveniently
                        organized, and I can quickly find what I need without any hassle. A must-have for busy
                        parents!</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Safe and Gentle Care</h3>
                    <p className="nameOfUser">by Benjamin on March 9, 2023</p>
                    <p className="longComment">I love how this baby care kit prioritizes safety and gentleness. The
                        accessories are designed to ensure my baby's comfort and well-being. It's a great
                        investment.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Versatile and Practical</h3>
                    <p className="nameOfUser">by Olivia on March 5, 2023</p>
                    <p className="longComment">This baby care kit is incredibly versatile. I can use it at home, during
                        outings, or while traveling. It's practical, well-designed, and has exceeded my
                        expectations.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Saves Time and Effort</h3>
                    <p className="nameOfUser">by William on March 1, 2023</p>
                    <p className="longComment">With this baby care kit, I no longer have to search for individual items.
                        Everything I need is neatly organized in one place. It's a real time and effort saver.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Quality Set for Newborns</h3>
                    <p className="nameOfUser">by Emily on February 25, 2023</p>
                    <p className="longComment">I'm a first-time parent, and this baby care kit has been a blessing. The
                        quality of the accessories is outstanding, and they are perfectly suited for newborn care.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Practical and Compact</h3>
                    <p className="nameOfUser">by Benjamin on February 21, 2023</p>
                    <p className="longComment">I love how this baby care kit takes up minimal space. It's compact yet
                        contains everything I need for my baby's care. It's a smart choice for any parent.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Convenient and Hygienic</h3>
                    <p className="nameOfUser">by Mia on February 17, 2023</p>
                    <p className="longComment">This baby care kit ensures hygiene and convenience. I can easily clean
                        and sanitize the accessories, and they are readily available whenever I need them. A must-have
                        for any parent.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Great Investment for Parents</h3>
                    <p className="nameOfUser">by Alexander on February 13, 2023</p>
                    <p className="longComment">Investing in this baby care kit has been one of the best decisions I've
                        made as a parent. It has simplified baby care and made it more manageable and enjoyable.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Travel-Ready and Reliable</h3>
                    <p className="nameOfUser">by Lily on February 9, 2023</p>
                    <p className="longComment">I can't imagine traveling without this baby care kit. It's my reliable
                        companion that ensures I have everything I need to care for my baby, no matter where we go.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Complete and Thoughtful Set</h3>
                    <p className="nameOfUser">by Noah on February 5, 2023</p>
                    <p className="longComment">This baby care kit has exceeded my expectations. It's a complete set of
                        well-thought-out accessories that cover all aspects of baby care. I'm extremely satisfied.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Efficient and Handy</h3>
                    <p className="nameOfUser">by Sophia on February 1, 2023</p>
                    <p className="longComment">Thanks to this baby care kit, I can quickly attend to my baby's needs
                        without any fumbling or searching. It's efficient, handy, and a true lifesaver.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Quality Essentials for Parents</h3>
                    <p className="nameOfUser">by Lucas on January 28, 2023</p>
                    <p className="longComment">This baby care kit is a collection of high-quality essentials that every
                        parent should have. It's durable, practical, and ensures the best care for my little one.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Easy to Carry and Access</h3>
                    <p className="nameOfUser">by Emma on January 24, 2023</p>
                    <p className="longComment">I love how this baby care kit is designed for easy carrying and quick
                        access. It fits perfectly in my bag, and I can grab what I need without any hassle.</p>
                </div>
            </div>
        </div>
    );
};


export default ReviewsMedical;
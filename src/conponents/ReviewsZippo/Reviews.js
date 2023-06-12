import React from 'react';
import './Reviews.css'
import {Stars5, Stars2, Stars4, Stars1, Stars3} from "../Stars/Stars";

const ReviewsZippo = ({setShowReviews, showReviews, lang}) => {
    return (
        <div className={showReviews ? "reviewsTS show" : "reviewsTS"} onClick={()=> setShowReviews(false)}>
            {lang === "EN" && <div className={showReviews ? "reviewsContainerTS show" : "reviewsContainerTS"} onClick={(e)=> e.stopPropagation()}>
                <img className="closeGuide" src="https://i.pinimg.com/originals/52/e3/86/52e38681b082f94f2917624bb56edf42.png" alt="" onClick={()=> setShowReviews(false)}/>
                <h2>Reviews</h2>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Loved the design</h3>
                    <p className="nameOfUser">by Kristin D. on Jun 1, 2023</p>
                    <p className="longComment">Loved the design</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Trans Chairs rocks</h3>
                    <p className="nameOfUser">by Debra on May 30, 2023</p>
                    <p className="longComment">Love the art and the shirt, and it washes like a dream. Arrived quicker than expected, to boot. Thanks!!</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Great quality, highly recommended</h3>
                    <p className="nameOfUser">by John S. on May 28, 2023</p>
                    <p className="longComment">I'm extremely satisfied with my Zippo lighter. The build quality is excellent, and it functions perfectly. Highly recommended!</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Impressive craftsmanship</h3>
                    <p className="nameOfUser">by Sarah J. on May 25, 2023</p>
                    <p className="longComment">The attention to detail on this Zippo lighter is incredible. It feels solid in my hand and lights up like a charm. Very impressed!</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Stylish and reliable</h3>
                    <p className="nameOfUser">by Mark W. on May 20, 2023</p>
                    <p className="longComment">I love the sleek design of this Zippo lighter. It never fails to light up, and the flame is consistent. A reliable companion!</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">A decent lighter for everyday use</h3>
                    <p className="nameOfUser">by Olivia J. on Feb 18, 2022</p>
                    <p className="longComment">The Zippo lighter is a decent option for everyday use, providing a reliable flame for various lighting needs.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Best lighter I've ever owned</h3>
                    <p className="nameOfUser">by Emily G. on May 15, 2023</p>
                    <p className="longComment">I've owned many lighters in the past, but this Zippo is by far the best. It's durable, refillable, and has a classic appeal. Absolutely love it!</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">A reliable companion for road trips</h3>
                    <p className="nameOfUser">by Emma S. on Mar 15, 2022</p>
                    <p className="longComment">During road trips, my Zippo lighter never fails to provide a reliable flame for lighting cigarettes or campfires along the way.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Perfect for outdoor adventures</h3>
                    <p className="nameOfUser">by Robert L. on May 12, 2023</p>
                    <p className="longComment">I take my Zippo lighter with me on camping trips, and it never lets me down. It's windproof and reliable, making it an essential tool for any outdoor enthusiast.</p>
                </div>
                <div className="comentar">
                    <Stars2/>
                    <h3 className="shortComment">An average lighter for occasional use</h3>
                    <p className="nameOfUser">by Olivia M. on Jan 23, 2022</p>
                    <p className="longComment">The Zippo lighter performs adequately for occasional use, but it may not meet the expectations of frequent users.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Exquisite craftsmanship</h3>
                    <p className="nameOfUser">by Jessica M. on May 10, 2023</p>
                    <p className="longComment">The attention to detail in this Zippo lighter is remarkable. It's like owning a piece of art. I'm thrilled with my purchase!</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Highly reliable</h3>
                    <p className="nameOfUser">by Michael B. on May 8, 2023</p>
                    <p className="longComment">I've had my Zippo lighter for months now, and it has never failed me. It's my go-to lighter for any occasion. Highly reliable!</p>
                </div>




                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">A budget-friendly choice</h3>
                    <p className="nameOfUser">by Chloe P. on Feb 15, 2022</p>
                    <p className="longComment">For those on a budget, the Zippo lighter offers decent quality and performance at an affordable price.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Excellent gift choice</h3>
                    <p className="nameOfUser">by Laura K. on May 5, 2023</p>
                    <p className="longComment">I bought this Zippo lighter as a gift for my husband, and he absolutely loves it. The engraving adds a personal touch, making it a memorable present.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Sleek and elegant</h3>
                    <p className="nameOfUser">by Christopher R. on May 2, 2023</p>
                    <p className="longComment">The design of this Zippo lighter is sleek and elegant. It's a perfect accessory that adds a touch of sophistication to my everyday carry.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">A stylish accessory for rockers</h3>
                    <p className="nameOfUser">by Samuel G. on Mar 12, 2022</p>
                    <p className="longComment">Rockers and music enthusiasts love the edgy design of Zippo lighters, adding a cool factor to their concert experiences.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Fast shipping, great product</h3>
                    <p className="nameOfUser">by Jennifer H. on Apr 30, 2023</p>
                    <p className="longComment">I received my Zippo lighter sooner than expected, and it's exactly what I wanted. The quality is top-notch, and I couldn't be happier with my purchase.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Durable and reliable</h3>
                    <p className="nameOfUser">by David M. on Apr 28, 2023</p>
                    <p className="longComment">I've been using my Zippo lighter for years, and it's still going strong. It has survived drops and rough conditions, proving its durability and reliability.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Classic design</h3>
                    <p className="nameOfUser">by Amanda L. on Apr 25, 2023</p>
                    <p className="longComment">The classic design of this Zippo lighter is timeless. It's a true icon that never goes out of style. I'm proud to own one!</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">A symbol of nostalgia</h3>
                    <p className="nameOfUser">by Mia T. on Mar 10, 2022</p>
                    <p className="longComment">My Zippo lighter brings back nostalgic memories of the past, reminding me of cherished moments and loved ones.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Easy to use</h3>
                    <p className="nameOfUser">by Richard K. on Apr 22, 2023</p>
                    <p className="longComment">Using this Zippo lighter is a breeze. The flint wheel ignites the flame effortlessly, and refilling it is simple. Great convenience!</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Reliable in any weather</h3>
                    <p className="nameOfUser">by Michelle P. on Apr 20, 2023</p>
                    <p className="longComment">I've tested my Zippo lighter in various weather conditions, from wind to rain, and it never fails me. A dependable companion for outdoor adventures!</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Unique collectible item</h3>
                    <p className="nameOfUser">by Thomas S. on Apr 18, 2023</p>
                    <p className="longComment">I collect Zippo lighters, and this one is a standout in my collection. The design is unique, and it's a great conversation starter.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Perfect for smokers</h3>
                    <p className="nameOfUser">by Jennifer M. on Apr 15, 2023</p>
                    <p className="longComment">As a smoker, having a reliable lighter is crucial. This Zippo lighter never disappoints, providing a consistent flame every time.</p>
                </div>
















                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Compact and portable</h3>
                    <p className="nameOfUser">by Andrew B. on Apr 12, 2023</p>
                    <p className="longComment">The compact size of this Zippo lighter makes it easy to carry in my pocket. It's always within reach when I need it.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Great customer service</h3>
                    <p className="nameOfUser">by Lisa C. on Apr 10, 2023</p>
                    <p className="longComment">I had an issue with my Zippo lighter, but the customer service team was incredibly helpful and resolved it promptly. Kudos to their excellent support!</p>
                </div>
                <div className="comentar">
                    <Stars1/>
                    <h3 className="shortComment">A disappointing lighter with poor performance</h3>
                    <p className="nameOfUser">by Olivia L. on Dec 29, 2021</p>
                    <p className="longComment">The Zippo lighter has been a disappointment, with frequent issues such as difficulty in lighting and inconsistent flame.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Long-lasting flame</h3>
                    <p className="nameOfUser">by Daniel R. on Apr 8, 2023</p>
                    <p className="longComment">The flame on this Zippo lighter lasts for a long time, allowing me to light up without any rush. It's perfect for relaxing moments.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Sturdy construction</h3>
                    <p className="nameOfUser">by Sarah M. on Apr 5, 2023</p>
                    <p className="longComment">I've accidentally dropped my Zippo lighter multiple times, but it remains in great condition. The sturdy construction can withstand some rough handling.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">A reliable flame for outdoor dining</h3>
                    <p className="nameOfUser">by Benjamin S. on Mar 7, 2022</p>
                    <p className="longComment">When enjoying an outdoor meal, my Zippo lighter provides a steady flame for lighting candles or a portable grill.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Timeless appeal</h3>
                    <p className="nameOfUser">by Brian H. on Apr 3, 2023</p>
                    <p className="longComment">The classic design of this Zippo lighter gives it a timeless appeal. It's a piece of history that never goes out of style.</p>
                </div>
                <div className="comentar">
                    <Stars2/>
                    <h3 className="shortComment">A basic option with limited durability</h3>
                    <p className="nameOfUser">by Chloe B. on Jan 20, 2022</p>
                    <p className="longComment">The Zippo lighter is a basic choice, but it may not withstand heavy usage or rough handling.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Great addition to my collection</h3>
                    <p className="nameOfUser">by Elizabeth D. on Mar 30, 2023</p>
                    <p className="longComment">As a collector, adding this Zippo lighter to my collection was a no-brainer. It's a must-have for any enthusiast.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Perfect gift for smokers</h3>
                    <p className="nameOfUser">by Kevin P. on Mar 28, 2023</p>
                    <p className="longComment">If you're looking for a gift for a smoker, you can't go wrong with a Zippo lighter. It's practical, stylish, and of excellent quality.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">A symbol of simplicity</h3>
                    <p className="nameOfUser">by Ethan S. on Feb 12, 2022</p>
                    <p className="longComment">The simplicity of the Zippo lighter design appeals to those who appreciate minimalistic aesthetics.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Easy to maintain</h3>
                    <p className="nameOfUser">by Laura B. on Mar 25, 2023</p>
                    <p className="longComment">Maintaining this Zippo lighter is a breeze. With proper care and occasional refilling, it will last for a lifetime.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Perfect for camping trips</h3>
                    <p className="nameOfUser">by Matthew T. on Mar 22, 2023</p>
                    <p className="longComment">I take my Zippo lighter with me whenever I go camping. It's reliable, easy to use, and essential for starting campfires.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Unmatched quality</h3>
                    <p className="nameOfUser">by Jessica L. on Mar 20, 2023</p>
                    <p className="longComment">The quality of this Zippo lighter is unmatched. It's built to last and performs flawlessly every time.</p>
                </div>





















                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Great for outdoor enthusiasts</h3>
                    <p className="nameOfUser">by Benjamin S. on Mar 18, 2023</p>
                    <p className="longComment">If you enjoy outdoor activities like camping or hiking, owning a Zippo lighter is a must. It's reliable and can withstand harsh conditions.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">A stylish accessory for poets</h3>
                    <p className="nameOfUser">by Sophia G. on Mar 5, 2022</p>
                    <p className="longComment">Poets appreciate the artistic and poetic vibes that Zippo lighters bring to their writing sessions and creative moments.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Stunning design</h3>
                    <p className="nameOfUser">by Samantha H. on Mar 15, 2023</p>
                    <p className="longComment">The design of this Zippo lighter is stunning. The intricate details make it a true work of art.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Fast and easy to use</h3>
                    <p className="nameOfUser">by Andrew C. on Mar 12, 2023</p>
                    <p className="longComment">Using this Zippo lighter is quick and hassle-free. It's ready to light up in seconds, making it a convenient choice.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Top-notch craftsmanship</h3>
                    <p className="nameOfUser">by Melissa R. on Mar 10, 2023</p>
                    <p className="longComment">The craftsmanship on this Zippo lighter is outstanding. Every detail is meticulously executed, creating a beautiful piece.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Perfect for daily use</h3>
                    <p className="nameOfUser">by Ryan W. on Mar 8, 2023</p>
                    <p className="longComment">I use my Zippo lighter daily, and it never disappoints. It's reliable, easy to carry, and a must-have accessory for any smoker.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Exceptional customer support</h3>
                    <p className="nameOfUser">by Megan L. on Mar 5, 2023</p>
                    <p className="longComment">I had a query about my Zippo lighter, and the customer support team was exceptional. They provided prompt and helpful assistance.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">A reliable flame for casual use</h3>
                    <p className="nameOfUser">by Emma G. on Feb 10, 2022</p>
                    <p className="longComment">For casual occasions, the Zippo lighter provides a satisfactory flame for lighting cigarettes or small fires.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Solid and reliable</h3>
                    <p className="nameOfUser">by Robert G. on Mar 2, 2023</p>
                    <p className="longComment">This Zippo lighter feels solid in hand and performs reliably every time. It's a dependable tool for lighting candles, stoves, and more.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A classic icon</h3>
                    <p className="nameOfUser">by Stephanie M. on Feb 28, 2023</p>
                    <p className="longComment">Owning a Zippo lighter is like owning a piece of history. It's a classic icon that never goes out of style.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Perfect for collectors</h3>
                    <p className="nameOfUser">by William T. on Feb 25, 2023</p>
                    <p className="longComment">If you're a collector, adding a Zippo lighter to your collection is a must. The range of designs and limited editions make it exciting to collect.</p>
                </div>
                <div className="comentar">
                    <Stars1/>
                    <h3 className="shortComment">A waste of money</h3>
                    <p className="nameOfUser">by Chloe R. on Dec 27, 2021</p>
                    <p className="longComment">Purchasing the Zippo lighter turned out to be a waste of money, as it failed to meet even the basic requirements of a reliable lighter.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Ideal for gifting</h3>
                    <p className="nameOfUser">by Jennifer R. on Feb 22, 2023</p>
                    <p className="longComment">Whether it's a birthday, anniversary, or any other occasion, a Zippo lighter makes a fantastic gift choice. It's practical and has sentimental value.</p>
                </div>
                <div className="comentar">
                    <Stars2/>
                    <h3 className="shortComment">A budget-friendly lighter with average performance</h3>
                    <p className="nameOfUser">by Ethan M. on Jan 18, 2022</p>
                    <p className="longComment">The Zippo lighter offers affordability, but its performance and longevity may not match higher-end options.</p>
                </div>



                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Durable and long-lasting</h3>
                    <p className="nameOfUser">by Daniel K. on Feb 20, 2023</p>
                    <p className="longComment">My Zippo lighter has been through rough handling, but it still works perfectly. The durability of this lighter is impressive.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Authentic and genuine</h3>
                    <p className="nameOfUser">by Emily S. on Feb 18, 2023</p>
                    <p className="longComment">When you buy a Zippo lighter, you know you're getting an authentic and genuine product. It's a brand you can trust.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Easy to refill</h3>
                    <p className="nameOfUser">by Christopher B. on Feb 15, 2023</p>
                    <p className="longComment">Refilling my Zippo lighter is a breeze. It's a simple process that keeps me going without any hassle.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A piece of art</h3>
                    <p className="nameOfUser">by Samantha H. on Feb 12, 2023</p>
                    <p className="longComment">The design of this Zippo lighter is not only functional but also a piece of art. It's a pleasure to admire and use.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Great for emergencies</h3>
                    <p className="nameOfUser">by John L. on Feb 10, 2023</p>
                    <p className="longComment">Having a Zippo lighter on hand is essential for emergencies. It can be a reliable source of light and heat in unexpected situations.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A true classic</h3>
                    <p className="nameOfUser">by Amanda C. on Feb 8, 2023</p>
                    <p className="longComment">The Zippo lighter is a true classic that never goes out of style. It's an accessory that adds a touch of elegance to any outfit.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Great value for the price</h3>
                    <p className="nameOfUser">by Eric R. on Feb 5, 2023</p>
                    <p className="longComment">Considering the quality and durability, this Zippo lighter offers great value for its price. It's a worthwhile investment.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">An heirloom piece</h3>
                    <p className="nameOfUser">by Rachel M. on Feb 2, 2023</p>
                    <p className="longComment">I consider my Zippo lighter as an heirloom piece. It's something I can pass down to future generations as a symbol of history and tradition.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Satisfaction guaranteed</h3>
                    <p className="nameOfUser">by Michael S. on Jan 31, 2023</p>
                    <p className="longComment">When you buy a Zippo lighter, you can be confident in your purchase. The satisfaction guarantee ensures that you'll be happy with your choice.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Versatile and multipurpose</h3>
                    <p className="nameOfUser">by Kimberly W. on Jan 28, 2023</p>
                    <p className="longComment">A Zippo lighter is not just for lighting cigarettes. It can be used for various purposes like lighting candles, starting fires, or even as a survival tool.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A symbol of craftsmanship</h3>
                    <p className="nameOfUser">by Jason L. on Jan 25, 2023</p>
                    <p className="longComment">The Zippo lighter represents the art of craftsmanship. It's a testament to the skill and dedication of the artisans who create these timeless lighters.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">A decent backup lighter</h3>
                    <p className="nameOfUser">by Samuel P. on Feb 7, 2022</p>
                    <p className="longComment">The Zippo lighter serves as a reliable backup option when your primary lighter is unavailable.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Instant conversation starter</h3>
                    <p className="nameOfUser">by Sarah B. on Jan 22, 2023</p>
                    <p className="longComment">Whenever I take out my Zippo lighter, people often comment on its design and ask about its history. It's an instant conversation starter.</p>
                </div>
                <div className="comentar">
                    <Stars2/>
                    <h3 className="shortComment">An inconsistent flame</h3>
                    <p className="nameOfUser">by Emma B. on Jan 15, 2022</p>
                    <p className="longComment">The flame of the Zippo lighter can be inconsistent, requiring multiple attempts to achieve a satisfactory light.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A reliable companion</h3>
                    <p className="nameOfUser">by Thomas H. on Jan 20, 2023</p>
                    <p className="longComment">My Zippo lighter has been my reliable companion for years. It has never let me down, and I trust it to work flawlessly whenever I need it.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Beautifully crafted</h3>
                    <p className="nameOfUser">by Natalie S. on Jan 18, 2023</p>
                    <p className="longComment">The attention to detail in the craftsmanship of this Zippo lighter is remarkable. It's a testament to the brand's commitment to quality.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A reliable source of fire</h3>
                    <p className="nameOfUser">by James M. on Jan 15, 2023</p>
                    <p className="longComment">Whether it's for lighting a cigarette or starting a campfire, my Zippo lighter has always been a reliable source of fire.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A piece of personal history</h3>
                    <p className="nameOfUser">by Emma K. on Jan 12, 2023</p>
                    <p className="longComment">My Zippo lighter holds sentimental value as it has been with me through various life events. It's a piece of personal history.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A timeless accessory</h3>
                    <p className="nameOfUser">by David R. on Jan 10, 2023</p>
                    <p className="longComment">The Zippo lighter is a timeless accessory that never goes out of style. It adds a touch of sophistication to any occasion.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Easy to use with one hand</h3>
                    <p className="nameOfUser">by Jessica C. on Jan 8, 2023</p>
                    <p className="longComment">I love how I can easily use my Zippo lighter with one hand. It's convenient and practical for everyday use.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A symbol of freedom</h3>
                    <p className="nameOfUser">by Matthew D. on Jan 5, 2023</p>
                    <p className="longComment">The Zippo lighter has become a symbol of freedom and independence. It's an accessory that represents personal choice and self-expression.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Exquisite attention to detail</h3>
                    <p className="nameOfUser">by Olivia T. on Jan 3, 2023</p>
                    <p className="longComment">The intricate designs and engravings on my Zippo lighter showcase the exquisite attention to detail put into its creation.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A reliable flame in any weather</h3>
                    <p className="nameOfUser">by Daniel M. on Jan 1, 2023</p>
                    <p className="longComment">No matter the weather conditions, my Zippo lighter always produces a steady flame. It's dependable even in challenging environments.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">A practical choice for camping</h3>
                    <p className="nameOfUser">by Mia G. on Feb 5, 2022</p>
                    <p className="longComment">When camping, the Zippo lighter can be a practical tool for starting campfires or lighting lanterns.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Iconic "click" sound</h3>
                    <p className="nameOfUser">by Sophia P. on Dec 29, 2022</p>
                    <p className="longComment">The iconic "click" sound when opening and closing my Zippo lighter brings a sense of satisfaction and nostalgia.</p>
                </div>
                <div className="comentar">
                    <Stars1/>
                    <h3 className="shortComment">Poor quality and cheap construction</h3>
                    <p className="nameOfUser">by Ethan L. on Dec 24, 2021</p>
                    <p className="longComment">The Zippo lighter is poorly constructed with cheap materials, leading to frequent malfunctions and a short lifespan.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A collector's dream</h3>
                    <p className="nameOfUser">by Ethan S. on Dec 27, 2022</p>
                    <p className="longComment">Zippo lighters offer a wide range of designs and limited editions, making them a dream for collectors. It's exciting to discover new pieces to add to my collection.</p>
                </div>
                <div className="comentar">
                    <Stars2/>
                    <h3 className="shortComment">A basic design with limited appeal</h3>
                    <p className="nameOfUser">by Samuel M. on Jan 12, 2022</p>
                    <p className="longComment">The design of the Zippo lighter is straightforward, but it may lack the aesthetic appeal desired by some users.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">The perfect pocket companion</h3>
                    <p className="nameOfUser">by Lily W. on Dec 25, 2022</p>
                    <p className="longComment">My Zippo lighter fits perfectly in my pocket, making it a convenient and stylish companion wherever I go.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A symbol of reliability</h3>
                    <p className="nameOfUser">by Joshua T. on Dec 22, 2022</p>
                    <p className="longComment">The Zippo lighter has earned its reputation as a symbol of reliability. It's a product you can trust to work consistently.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A statement piece</h3>
                    <p className="nameOfUser">by Samantha R. on Dec 20, 2022</p>
                    <p className="longComment">My Zippo lighter is more than just a lighter—it's a statement piece that reflects my personality and style.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A testament to American craftsmanship</h3>
                    <p className="nameOfUser">by Matthew L. on Dec 18, 2022</p>
                    <p className="longComment">Zippo lighters are proudly made in the USA, and they represent the excellence of American craftsmanship.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Reliable in any situation</h3>
                    <p className="nameOfUser">by Emily H. on Dec 15, 2022</p>
                    <p className="longComment">Whether it's a windy day or a rainy night, my Zippo lighter never fails to produce a reliable flame. It's my go-to lighter for any situation.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A piece of nostalgia</h3>
                    <p className="nameOfUser">by Andrew G. on Dec 12, 2022</p>
                    <p className="longComment">The Zippo lighter brings back nostalgic memories of older generations. It's a connection to the past and a reminder of the enduring quality of this product.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A conversation piece</h3>
                    <p className="nameOfUser">by Isabella D. on Dec 10, 2022</p>
                    <p className="longComment">Whenever I take out my Zippo lighter, people often strike up conversations about its design and functionality. It's a great way to connect with others.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">An essential camping tool</h3>
                    <p className="nameOfUser">by Benjamin F. on Dec 8, 2022</p>
                    <p className="longComment">When I go camping, my Zippo lighter is an essential tool for starting fires and providing light in the wilderness.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">An affordable option for smokers</h3>
                    <p className="nameOfUser">by Benjamin T. on Feb 2, 2022</p>
                    <p className="longComment">Smokers looking for a budget-friendly lighter can consider the Zippo as a viable option.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Quality you can feel</h3>
                    <p className="nameOfUser">by Chloe M. on Dec 5, 2022</p>
                    <p className="longComment">From the weight to the smooth action, every aspect of my Zippo lighter exudes quality. It's a pleasure to hold and use.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A trusted brand for generations</h3>
                    <p className="nameOfUser">by Ryan P. on Dec 2, 2022</p>
                    <p className="longComment">Zippo has been a trusted brand for generations. My grandfather had one, my father has one, and now I have one. It's a tradition.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">An accessory for all occasions</h3>
                    <p className="nameOfUser">by Grace L. on Nov 30, 2022</p>
                    <p className="longComment">Whether it's a formal event or a casual outing, my Zippo lighter adds a touch of style and sophistication to any occasion.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Precision engineering at its best</h3>
                    <p className="nameOfUser">by Samuel C. on Nov 28, 2022</p>
                    <p className="longComment">The precise engineering of my Zippo lighter ensures that it opens and closes smoothly every time, without any hitches.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A symbol of personal identity</h3>
                    <p className="nameOfUser">by Madison B. on Nov 25, 2022</p>
                    <p className="longComment">My Zippo lighter is more than just a tool—it's a symbol of my personal identity and a reflection of my individuality.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A tradition worth passing down</h3>
                    <p className="nameOfUser">by Jacob S. on Nov 22, 2022</p>
                    <p className="longComment">I received my Zippo lighter as a gift from my father, who received it from his father. It's a tradition I plan to pass down to future generations.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">A symbol of adventure</h3>
                    <p className="nameOfUser">by Daniel P. on Mar 2, 2022</p>
                    <p className="longComment">My Zippo lighter symbolizes the spirit of adventure and exploration, igniting my desire to discover new places and experiences.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Unmatched durability</h3>
                    <p className="nameOfUser">by Hailey K. on Nov 20, 2022</p>
                    <p className="longComment">My Zippo lighter has been dropped, exposed to harsh conditions, and yet it still functions perfectly. Its durability is unmatched.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A symbol of independence</h3>
                    <p className="nameOfUser">by Christopher D. on Nov 18, 2022</p>
                    <p className="longComment">The Zippo lighter represents independence and self-reliance. It's a reminder that I have the power to create fire at my fingertips.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A reliable tool for smokers</h3>
                    <p className="nameOfUser">by Olivia W. on Nov 15, 2022</p>
                    <p className="longComment">As a smoker, my Zippo lighter has never let me down. It consistently provides a strong flame to light my cigarettes.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A work of art</h3>
                    <p className="nameOfUser">by Andrew R. on Nov 12, 2022</p>
                    <p className="longComment">The design and craftsmanship of my Zippo lighter make it a true work of art. It's something I take pride in owning.</p>
                </div>
                <div className="comentar">
                    <Stars1/>
                    <h3 className="shortComment">Unreliable and frustrating to use</h3>
                    <p className="nameOfUser">by Emma R. on Dec 22, 2021</p>
                    <p className="longComment">Using the Zippo lighter has been an exercise in frustration, with its unreliable performance and constant need for maintenance.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A piece of history</h3>
                    <p className="nameOfUser">by Victoria M. on Nov 10, 2022</p>
                    <p className="longComment">Zippo lighters have been around for decades, and owning one feels like owning a piece of history.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A symbol of adventure</h3>
                    <p className="nameOfUser">by Daniel H. on Nov 8, 2022</p>
                    <p className="longComment">For me, my Zippo lighter is a symbol of adventure and exploration. It's a tool that accompanies me on my outdoor escapades.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">The perfect gift</h3>
                    <p className="nameOfUser">by Sophia L. on Nov 5, 2022</p>
                    <p className="longComment">I've gifted Zippo lighters to friends and family, and it's always a well-received present. It's a versatile gift suitable for any occasion.</p>
                </div>
                <div className="comentar">
                    <Stars2/>
                    <h3 className="shortComment">An entry-level lighter with average quality</h3>
                    <p className="nameOfUser">by Mia B. on Jan 10, 2022</p>
                    <p className="longComment">The Zippo lighter serves as a decent entry-level option, providing basic functionality without exceptional quality.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A timeless symbol of elegance</h3>
                    <p className="nameOfUser">by Samuel B. on Nov 2, 2022</p>
                    <p className="longComment">The Zippo lighter's timeless design and elegance make it a cherished accessory for those who appreciate fine craftsmanship.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A piece of everyday luxury</h3>
                    <p className="nameOfUser">by Emma K. on Oct 30, 2022</p>
                    <p className="longComment">My Zippo lighter adds a touch of everyday luxury to my life. It's a small indulgence that brings me joy.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">A reliable tool for home emergencies</h3>
                    <p className="nameOfUser">by Emily S. on Feb 28, 2022</p>
                    <p className="longComment">In case of power outages or emergencies, my Zippo lighter is a dependable tool for lighting candles or lanterns.</p>
                </div>






                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A symbol of resilience</h3>
                    <p className="nameOfUser">by Alexander M. on Oct 28, 2022</p>
                    <p className="longComment">Zippo lighters are known for their durability and resilience. They can withstand the test of time and still function flawlessly.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A reliable flame for candles</h3>
                    <p className="nameOfUser">by Mia J. on Oct 25, 2022</p>
                    <p className="longComment">I use my Zippo lighter to light candles, and its reliable flame ensures that I can create a warm and cozy ambiance anytime.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A symbol of craftsmanship</h3>
                    <p className="nameOfUser">by David R. on Oct 22, 2022</p>
                    <p className="longComment">The intricate details and high-quality materials used in my Zippo lighter showcase the brand's dedication to craftsmanship.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A source of comfort</h3>
                    <p className="nameOfUser">by Emily T. on Oct 20, 2022</p>
                    <p className="longComment">In stressful situations, the familiar click and flame of my Zippo lighter bring me a sense of comfort and calm.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A trusted tool for survival</h3>
                    <p className="nameOfUser">by Daniel K. on Oct 18, 2022</p>
                    <p className="longComment">For outdoor enthusiasts, a Zippo lighter is an essential tool for survival. It can help start fires for warmth and cooking.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A reliable companion for road trips</h3>
                    <p className="nameOfUser">by Grace S. on Oct 15, 2022</p>
                    <p className="longComment">During road trips, my Zippo lighter is a reliable companion. It comes in handy for lighting campfires and cigarettes along the way.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A piece of artistry</h3>
                    <p className="nameOfUser">by Benjamin P. on Oct 12, 2022</p>
                    <p className="longComment">The engravings on my Zippo lighter are like miniature works of art. They add an extra touch of beauty to an already stunning lighter.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A trusted brand for outdoor enthusiasts</h3>
                    <p className="nameOfUser">by Lily C. on Oct 10, 2022</p>
                    <p className="longComment">Zippo lighters have been a trusted brand among outdoor enthusiasts for years. Their reliability in various weather conditions is unmatched.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A stylish accessory for smokers</h3>
                    <p className="nameOfUser">by Noah M. on Oct 8, 2022</p>
                    <p className="longComment">As a smoker, my Zippo lighter adds a touch of style to my smoking ritual. It's a fashionable accessory that complements my personality.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A piece of my identity</h3>
                    <p className="nameOfUser">by Olivia C. on Oct 5, 2022</p>
                    <p className="longComment">My Zippo lighter is not just an object; it's a part of who I am. It represents my taste, my values, and my individuality.</p>
                </div>
                <div className="comentar">
                    <Stars1/>
                    <h3 className="shortComment">A lighter that constantly runs out of fuel</h3>
                    <p className="nameOfUser">by Samuel L. on Dec 19, 2021</p>
                    <p className="longComment">The Zippo lighter seems to have a never-ending appetite for fuel, requiring frequent refills that make it impractical for regular use.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A reliable fire-starter for barbecues</h3>
                    <p className="nameOfUser">by Ethan H. on Oct 2, 2022</p>
                    <p className="longComment">When it comes to starting the barbecue, my Zippo lighter is my go-to tool. Its strong flame quickly ignites the charcoal.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A timeless classic</h3>
                    <p className="nameOfUser">by Chloe S. on Sep 30, 2022</p>
                    <p className="longComment">The design of the Zippo lighter is a timeless classic. It never goes out of style and always looks elegant.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A trusted companion during power outages</h3>
                    <p className="nameOfUser">by Alexander H. on Sep 27, 2022</p>
                    <p className="longComment">During power outages, my Zippo lighter provides a reliable source of light and warmth. It's a dependable companion in dark times.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">A basic lighter for occasional use</h3>
                    <p className="nameOfUser">by Sophia P. on Jan 30, 2022</p>
                    <p className="longComment">The Zippo lighter works well for occasional use, such as lighting candles or a campfire during camping trips.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A symbol of craftsmanship</h3>
                    <p className="nameOfUser">by Emma G. on Sep 25, 2022</p>
                    <p className="longComment">The attention to detail and precision craftsmanship of my Zippo lighter make it a true symbol of excellence.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">A stylish accessory for festival-goers</h3>
                    <p className="nameOfUser">by Alexander T. on Feb 25, 2022</p>
                    <p className="longComment">Festival-goers love the trendy and eye-catching design of Zippo lighters, making them a must-have accessory for music festivals.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A conversation starter</h3>
                    <p className="nameOfUser">by Samuel P. on Sep 22, 2022</p>
                    <p className="longComment">Whenever I take out my Zippo lighter, it sparks conversations with others who appreciate its design and functionality.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">An heirloom piece</h3>
                    <p className="nameOfUser">by Mia A. on Sep 20, 2022</p>
                    <p className="longComment">I consider my Zippo lighter an heirloom piece that I'll pass down to future generations. It's a symbol of family history.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A reliable flame in any weather</h3>
                    <p className="nameOfUser">by Benjamin K. on Sep 18, 2022</p>
                    <p className="longComment">Whether it's windy, rainy, or snowy, my Zippo lighter never fails to provide a strong and consistent flame.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A symbol of freedom</h3>
                    <p className="nameOfUser">by Sophia R. on Sep 15, 2022</p>
                    <p className="longComment">The act of flicking open my Zippo lighter represents freedom and independence. It's a simple gesture with a powerful meaning.</p>
                </div>
                <div className="comentar">
                    <Stars2/>
                    <h3 className="shortComment">A lighter prone to fuel leaks</h3>
                    <p className="nameOfUser">by Benjamin M. on Jan 7, 2022</p>
                    <p className="longComment">Some users have experienced fuel leaks with the Zippo lighter, which can be a frustrating drawback.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A stylish accessory for outdoor events</h3>
                    <p className="nameOfUser">by Daniel L. on Sep 12, 2022</p>
                    <p className="longComment">When I attend outdoor events, my Zippo lighter adds a touch of style to my overall appearance. It's a fashionable accessory.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A reliable source of light during emergencies</h3>
                    <p className="nameOfUser">by Emily P. on Sep 10, 2022</p>
                    <p className="longComment">During power outages or emergencies, my Zippo lighter serves as a reliable source of light until the electricity is restored.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A symbol of personal style</h3>
                    <p className="nameOfUser">by Alexander S. on Sep 8, 2022</p>
                    <p className="longComment">My Zippo lighter is not just a functional tool; it's a statement of my personal style and taste.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A durable companion for outdoor adventures</h3>
                    <p className="nameOfUser">by Lily M. on Sep 5, 2022</p>
                    <p className="longComment">During hiking, camping, and other outdoor adventures, my Zippo lighter is a reliable companion that never lets me down.</p>
                </div>
                <div className="comentar">
                    <Stars1/>
                    <h3 className="shortComment">A regrettable purchase</h3>
                    <p className="nameOfUser">by Mia R. on Dec 17, 2021</p>
                    <p className="longComment">I deeply regret buying the Zippo lighter as it has proven to be a complete waste of money and a constant source of frustration.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A stylish gift for special occasions</h3>
                    <p className="nameOfUser">by Noah B. on Sep 2, 2022</p>
                    <p className="longComment">I've gifted Zippo lighters to friends on special occasions, and they always appreciate the stylish and practical nature of the gift.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A reminder of simpler times</h3>
                    <p className="nameOfUser">by Chloe A. on Aug 30, 2022</p>
                    <p className="longComment">My Zippo lighter reminds me of simpler times when people relied on basic tools for everyday tasks.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A versatile tool for outdoor cooking</h3>
                    <p className="nameOfUser">by Ethan G. on Aug 28, 2022</p>
                    <p className="longComment">When it comes to outdoor cooking, my Zippo lighter is a versatile tool that helps me light camp stoves and grills.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A stylish accessory for parties</h3>
                    <p className="nameOfUser">by Emma J. on Aug 25, 2022</p>
                    <p className="longComment">During parties or social gatherings, my Zippo lighter adds a touch of style and sophistication to the ambiance.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A reliable flame for cigars</h3>
                    <p className="nameOfUser">by Samuel T. on Aug 22, 2022</p>
                    <p className="longComment">As a cigar enthusiast, my Zippo lighter provides a consistent and even flame for a perfect cigar-smoking experience.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A symbol of tradition</h3>
                    <p className="nameOfUser">by Mia S. on Aug 20, 2022</p>
                    <p className="longComment">For me, my Zippo lighter represents tradition and nostalgia. It's a connection to the past and a reminder of family values.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A collectible item</h3>
                    <p className="nameOfUser">by Benjamin G. on Aug 18, 2022</p>
                    <p className="longComment">Zippo lighters are not just functional tools; they are also highly sought-after collectibles among enthusiasts.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">A reliable flame for backyard parties</h3>
                    <p className="nameOfUser">by Noah S. on Feb 20, 2022</p>
                    <p className="longComment">When hosting backyard parties, my Zippo lighter ensures a consistent flame for lighting tiki torches or a fire pit.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A stylish addition to my EDC</h3>
                    <p className="nameOfUser">by Sophia P. on Aug 15, 2022</p>
                    <p className="longComment">My Zippo lighter is a stylish addition to my everyday carry (EDC) essentials. It's both practical and fashionable.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A symbol of celebration</h3>
                    <p className="nameOfUser">by Daniel J. on Aug 12, 2022</p>
                    <p className="longComment">During special celebrations, such as birthdays or weddings, my Zippo lighter is a symbol of joy and festivity.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">A no-frills option</h3>
                    <p className="nameOfUser">by Daniel B. on Jan 28, 2022</p>
                    <p className="longComment">The Zippo lighter offers a no-frills approach, providing a simple and functional solution for lighting needs.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A reliable tool for campers</h3>
                    <p className="nameOfUser">by Emily A. on Aug 10, 2022</p>
                    <p className="longComment">Campers rely on their Zippo lighters for various tasks, from lighting campfires to starting stoves for cooking.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A stylish accessory for formal occasions</h3>
                    <p className="nameOfUser">by Alexander B. on Aug 8, 2022</p>
                    <p className="longComment">During formal events, my Zippo lighter adds a touch of elegance to my outfit. It's a sophisticated accessory.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A symbol of adventure</h3>
                    <p className="nameOfUser">by Lily P. on Aug 5, 2022</p>
                    <p className="longComment">My Zippo lighter represents my love for adventure and exploration. It's a companion on my journeys.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A reliable flame for incense</h3>
                    <p className="nameOfUser">by Noah S. on Aug 2, 2022</p>
                    <p className="longComment">When I want to create a relaxing and aromatic atmosphere, my Zippo lighter helps me light incense with ease.</p>
                </div>
                <div className="comentar">
                    <Stars2/>
                    <h3 className="shortComment">A subpar choice for outdoor activities</h3>
                    <p className="nameOfUser">by Sophia B. on Jan 5, 2022</p>
                    <p className="longComment">The Zippo lighter may not be the best option for outdoor activities due to its limited wind resistance and durability.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A piece of nostalgia</h3>
                    <p className="nameOfUser">by Chloe G. on Jul 30, 2022</p>
                    <p className="longComment">My Zippo lighter brings back memories of my grandparents and their generation. It's a nostalgic piece.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A reliable backup for emergencies</h3>
                    <p className="nameOfUser">by Ethan P. on Jul 27, 2022</p>
                    <p className="longComment">Having a Zippo lighter as a backup in emergencies provides peace of mind knowing I can always start a fire if needed.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A symbol of personal freedom</h3>
                    <p className="nameOfUser">by Emma S. on Jul 25, 2022</p>
                    <p className="longComment">My Zippo lighter represents personal freedom and self-expression. It's a small item that carries a big message.</p>
                </div>
                <div className="comentar">
                    <Stars1/>
                    <h3 className="shortComment">A lighter that fails when you need it most</h3>
                    <p className="nameOfUser">by Benjamin L. on Dec 14, 2021</p>
                    <p className="longComment">The Zippo lighter has a knack for failing at crucial moments, leaving you without a reliable source of fire when you need it the most.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A reliable companion for smokers</h3>
                    <p className="nameOfUser">by Samuel G. on Jul 22, 2022</p>
                    <p className="longComment">As a smoker, my Zippo lighter is a trusty companion that never fails to light my cigarettes with a satisfying flame.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A stylish accessory for collectors</h3>
                    <p className="nameOfUser">by Mia T. on Jul 20, 2022</p>
                    <p className="longComment">For collectors of unique and stylish items, Zippo lighters are a must-have addition to their collection.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">A symbol of craftsmanship</h3>
                    <p className="nameOfUser">by Lily G. on Feb 23, 2022</p>
                    <p className="longComment">The intricate details and precision craftsmanship of my Zippo lighter showcase the dedication and skill of its makers.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A reliable tool for outdoor enthusiasts</h3>
                    <p className="nameOfUser">by Benjamin S. on Jul 18, 2022</p>
                    <p className="longComment">Outdoor enthusiasts trust Zippo lighters for their reliability and durability in various outdoor activities.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A conversation piece</h3>
                    <p className="nameOfUser">by Sophia G. on Jul 15, 2022</p>
                    <p className="longComment">Whenever I take out my Zippo lighter, it sparks conversations and allows me to connect with others.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A stylish accessory for musicians</h3>
                    <p className="nameOfUser">by Daniel P. on Jul 12, 2022</p>
                    <p className="longComment">As a musician, my Zippo lighter adds a touch of style to my performances and complements my artistic persona.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A reliable flame for outdoor lighting</h3>
                    <p className="nameOfUser">by Emily S. on Jul 10, 2022</p>
                    <p className="longComment">When I need outdoor lighting, my Zippo lighter provides a strong and steady flame that illuminates the surroundings.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A symbol of resilience</h3>
                    <p className="nameOfUser">by Alexander T. on Jul 8, 2022</p>
                    <p className="longComment">The durability and long lifespan of my Zippo lighter symbolize resilience and the ability to withstand challenges.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A reliable tool for survivalists</h3>
                    <p className="nameOfUser">by Lily G. on Jul 5, 2022</p>
                    <p className="longComment">Survivalists rely on their Zippo lighters for fire-making, signaling, and other essential tasks in emergency situations.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A stylish gift for loved ones</h3>
                    <p className="nameOfUser">by Noah S. on Jul 2, 2022</p>
                    <p className="longComment">I've gifted Zippo lighters to my loved ones, and they appreciate the combination of style and functionality.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A symbol of craftsmanship</h3>
                    <p className="nameOfUser">by Olivia J. on Jun 30, 2022</p>
                    <p className="longComment">The attention to detail and meticulous craftsmanship of my Zippo lighter make it a true work of art.</p>
                </div>
                <div className="comentar">
                    <Stars1/>
                    <h3 className="shortComment">Extremely poor durability</h3>
                    <p className="nameOfUser">by Sophia R. on Dec 12, 2021</p>
                    <p className="longComment">The Zippo lighter is shockingly fragile, breaking easily and showing signs of wear and tear even with minimal use.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A reliable flame for candles</h3>
                    <p className="nameOfUser">by Chloe P. on Jun 27, 2022</p>
                    <p className="longComment">When I want to create a cozy atmosphere with candles, my Zippo lighter ensures a steady and even flame.</p>
                </div>
                <div className="comentar">
                    <Stars2/>
                    <h3 className="shortComment">A lighter with a short lifespan</h3>
                    <p className="nameOfUser">by Daniel M. on Jan 2, 2022</p>
                    <p className="longComment">The Zippo lighter tends to have a shorter lifespan compared to higher-quality lighters on the market.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A symbol of adventure</h3>
                    <p className="nameOfUser">by Ethan S. on Jun 25, 2022</p>
                    <p className="longComment">My Zippo lighter is a symbol of my adventurous spirit and the desire to explore the unknown.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A reliable tool for hunters</h3>
                    <p className="nameOfUser">by Emma G. on Jun 22, 2022</p>
                    <p className="longComment">Hunters rely on their Zippo lighters for various tasks, from lighting campfires to melting rifle wax.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">A lightweight and portable lighter</h3>
                    <p className="nameOfUser">by Emily T. on Jan 25, 2022</p>
                    <p className="longComment">The Zippo lighter is lightweight and easy to carry, making it convenient for on-the-go situations.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A stylish accessory for bikers</h3>
                    <p className="nameOfUser">by Samuel P. on Jun 20, 2022</p>
                    <p className="longComment">Bikers appreciate the rugged and stylish design of Zippo lighters, making them a perfect accessory for their rides.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A symbol of personal identity</h3>
                    <p className="nameOfUser">by Mia G. on Jun 18, 2022</p>
                    <p className="longComment">My Zippo lighter reflects my individuality and serves as a personal statement wherever I go.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A reliable flame for pipe smokers</h3>
                    <p className="nameOfUser">by Benjamin T. on Jun 15, 2022</p>
                    <p className="longComment">As a pipe smoker, my Zippo lighter provides a consistent and gentle flame for an enjoyable smoking experience.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A collectible item for enthusiasts</h3>
                    <p className="nameOfUser">by Sophia P. on Jun 12, 2022</p>
                    <p className="longComment">Zippo lighters have a rich history and are highly prized collectibles among enthusiasts around the world.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A reliable tool for backpackers</h3>
                    <p className="nameOfUser">by Daniel B. on Jun 10, 2022</p>
                    <p className="longComment">Backpackers rely on their Zippo lighters for cooking, warmth, and signaling during their outdoor adventures.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A stylish accessory for night owls</h3>
                    <p className="nameOfUser">by Emily T. on Jun 8, 2022</p>
                    <p className="longComment">Night owls appreciate the convenience and style of using a Zippo lighter when venturing out in the dark.</p>
                </div>
                <div className="comentar">
                    <Stars1/>
                    <h3 className="shortComment">A lighter that constantly requires repairs</h3>
                    <p className="nameOfUser">by Daniel L. on Dec 9, 2021</p>
                    <p className="longComment">Using the Zippo lighter has become a never-ending cycle of repairs and frustration, making it more of a hassle than a convenience.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A symbol of strength</h3>
                    <p className="nameOfUser">by Alexander A. on Jun 5, 2022</p>
                    <p className="longComment">The solid construction and robust flame of my Zippo lighter symbolize strength and resilience.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A reliable tool for anglers</h3>
                    <p className="nameOfUser">by Lily P. on Jun 2, 2022</p>
                    <p className="longComment">Anglers use their Zippo lighters to start campfires for cooking and to cauterize fishing lines.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A stylish accessory for photographers</h3>
                    <p className="nameOfUser">by Noah T. on May 30, 2022</p>
                    <p className="longComment">Photographers appreciate the vintage appeal and unique aesthetic of Zippo lighters as props in their shoots.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A symbol of independence</h3>
                    <p className="nameOfUser">by Olivia S. on May 28, 2022</p>
                    <p className="longComment">My Zippo lighter represents my independence and self-reliance in any situation.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A reliable flame for DIY projects</h3>
                    <p className="nameOfUser">by Chloe G. on May 25, 2022</p>
                    <p className="longComment">When working on DIY projects, my Zippo lighter provides a steady flame for various tasks, such as sealing ends of ropes.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A stylish accessory for hikers</h3>
                    <p className="nameOfUser">by Ethan J. on May 23, 2022</p>
                    <p className="longComment">Hikers appreciate the compact size and stylish design of Zippo lighters, making them a convenient accessory on the trails.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A symbol of reliability</h3>
                    <p className="nameOfUser">by Emma S. on May 20, 2022</p>
                    <p className="longComment">The consistent performance and durability of my Zippo lighter make it a symbol of reliability in my life.</p>
                </div>
                <div className="comentar">
                    <Stars2/>
                    <h3 className="shortComment">A mediocre option for smokers</h3>
                    <p className="nameOfUser">by Emily B. on Dec 31, 2021</p>
                    <p className="longComment">While the Zippo lighter can be used by smokers, it may not provide the best experience or longevity.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A reliable flame for campers</h3>
                    <p className="nameOfUser">by Samuel G. on May 18, 2022</p>
                    <p className="longComment">Campers trust their Zippo lighters for lighting campfires, lanterns, and other essential equipment.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A stylish accessory for fashionistas</h3>
                    <p className="nameOfUser">by Mia T. on May 15, 2022</p>
                    <p className="longComment">Fashion-conscious individuals consider Zippo lighters as stylish accessories that elevate their overall look.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A symbol of determination</h3>
                    <p className="nameOfUser">by Benjamin S. on May 12, 2022</p>
                    <p className="longComment">My Zippo lighter symbolizes my determination to overcome challenges and ignite the fire within me.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A reliable flame for outdoor events</h3>
                    <p className="nameOfUser">by Sophia G. on May 10, 2022</p>
                    <p className="longComment">During outdoor events, my Zippo lighter provides a reliable flame for lighting candles, torches, or campfires.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A stylish accessory for urban explorers</h3>
                    <p className="nameOfUser">by Daniel P. on May 7, 2022</p>
                    <p className="longComment">Urban explorers appreciate the sleek and urban design of Zippo lighters, reflecting their adventurous spirit.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A reliable tool for barbecues</h3>
                    <p className="nameOfUser">by Emily S. on May 5, 2022</p>
                    <p className="longComment">When it's time for a barbecue, my Zippo lighter ensures a steady flame for lighting the grill or a fire pit.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A symbol of authenticity</h3>
                    <p className="nameOfUser">by Alexander T. on May 2, 2022</p>
                    <p className="longComment">The genuine craftsmanship and timeless design of my Zippo lighter symbolize authenticity and true quality.</p>
                </div>
                <div className="comentar">
                    <Stars1/>
                    <h3 className="shortComment">Avoid this lighter at all costs</h3>
                    <p className="nameOfUser">by Emily R. on Dec 7, 2021</p>
                    <p className="longComment">I cannot emphasize enough how much you should steer clear of the Zippo lighter. It is a complete disappointment in every aspect.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A reliable flame for adventurers</h3>
                    <p className="nameOfUser">by Lily G. on Apr 30, 2022</p>
                    <p className="longComment">Adventurers rely on their Zippo lighters for fire-making, signaling, and survival situations in the great outdoors.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A stylish accessory for collectors</h3>
                    <p className="nameOfUser">by Noah S. on Apr 27, 2022</p>
                    <p className="longComment">Collectors of unique and vintage items consider Zippo lighters as valuable additions to their curated collections.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A symbol of elegance</h3>
                    <p className="nameOfUser">by Olivia J. on Apr 25, 2022</p>
                    <p className="longComment">My Zippo lighter exudes elegance and sophistication, making it a perfect accessory for special occasions.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A reliable flame for bonfires</h3>
                    <p className="nameOfUser">by Chloe P. on Apr 22, 2022</p>
                    <p className="longComment">When gathering around a bonfire, my Zippo lighter provides a consistent flame for warmth and ambiance.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A symbol of passion</h3>
                    <p className="nameOfUser">by Ethan S. on Apr 20, 2022</p>
                    <p className="longComment">My Zippo lighter represents my passion for adventure, freedom, and the pursuit of my dreams.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A reliable tool for outdoor cooking</h3>
                    <p className="nameOfUser">by Emma G. on Apr 18, 2022</p>
                    <p className="longComment">When camping or picnicking, my Zippo lighter ensures a reliable flame for cooking delicious outdoor meals.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A stylish accessory for gentlemen</h3>
                    <p className="nameOfUser">by Samuel P. on Apr 15, 2022</p>
                    <p className="longComment">Gentlemen appreciate the timeless and sophisticated design of Zippo lighters, adding a touch of class to their style.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A symbol of memories</h3>
                    <p className="nameOfUser">by Mia G. on Apr 13, 2022</p>
                    <p className="longComment">My Zippo lighter holds precious memories and experiences, reminding me of meaningful moments in my life.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A reliable flame for camping</h3>
                    <p className="nameOfUser">by Benjamin T. on Apr 10, 2022</p>
                    <p className="longComment">Campers rely on their Zippo lighters for various tasks, from lighting stoves to starting campfires.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A collectible item for history enthusiasts</h3>
                    <p className="nameOfUser">by Sophia P. on Apr 8, 2022</p>
                    <p className="longComment">Zippo lighters hold historical significance and are prized collectibles among history enthusiasts.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A reliable tool for survival situations</h3>
                    <p className="nameOfUser">by Daniel B. on Apr 5, 2022</p>
                    <p className="longComment">In survival situations, a Zippo lighter can be a crucial tool for fire-making and providing warmth.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A stylish accessory for trendsetters</h3>
                    <p className="nameOfUser">by Emily T. on Apr 3, 2022</p>
                    <p className="longComment">Trendsetters appreciate the fashionable and iconic design of Zippo lighters, setting new trends wherever they go.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A symbol of resilience</h3>
                    <p className="nameOfUser">by Alexander A. on Mar 31, 2022</p>
                    <p className="longComment">The enduring flame and sturdy construction of my Zippo lighter embody resilience and the ability to overcome challenges.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A reliable tool for backpacking</h3>
                    <p className="nameOfUser">by Lily P. on Mar 28, 2022</p>
                    <p className="longComment">Backpackers rely on their Zippo lighters for cooking meals, providing light, and staying warm during their adventures.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A stylish accessory for cigar connoisseurs</h3>
                    <p className="nameOfUser">by Noah T. on Mar 26, 2022</p>
                    <p className="longComment">Cigar connoisseurs consider Zippo lighters as the perfect complement to their cigar-smoking rituals.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A symbol of freedom</h3>
                    <p className="nameOfUser">by Olivia S. on Mar 23, 2022</p>
                    <p className="longComment">My Zippo lighter represents freedom, independence, and the ability to ignite my own path in life.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A reliable flame for musicians</h3>
                    <p className="nameOfUser">by Chloe G. on Mar 21, 2022</p>
                    <p className="longComment">Musicians rely on their Zippo lighters for lighting stage props, candles, or creating a dramatic effect during performances.</p>
                </div>
            </div>}
            {lang === "FR" && <div className={showReviews ? "reviewsContainerTS show" : "reviewsContainerTS"} onClick={(e)=> e.stopPropagation()}>
                <img className="closeGuide" src="https://i.pinimg.com/originals/52/e3/86/52e38681b082f94f2917624bb56edf42.png" alt="" onClick={()=> setShowReviews(false)}/>
                <h2>Commentaires</h2>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Adoré le design</h3>
                    <p className="nameOfUser">par Kristin D. le 1 juin 2023</p>
                    <p className="longComment">J'ai adoré le design.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Trans Chairs rocks</h3>
                    <p className="nameOfUser">par Debra le 30 mai 2023</p>
                    <p className="longComment">J'adore l'art et le t-shirt, et il se lave très bien. En prime, il est arrivé plus vite que prévu. Merci !</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Grande qualité, fortement recommandé</h3>
                    <p className="nameOfUser">par John S. le 28 mai 2023</p>
                    <p className="longComment">Je suis extrêmement satisfait de mon briquet Zippo. La qualité de fabrication est excellente et il fonctionne parfaitement. Fortement recommandé !</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Artisanat impressionnant</h3>
                    <p className="nameOfUser">par Sarah J. le 25 mai 2023</p>
                    <p className="longComment">Les détails de ce briquet Zippo sont incroyables. Il est solide en main et s'allume facilement. Très impressionnant !</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Élégant et fiable</h3>
                    <p className="nameOfUser">par Mark W. le 20 mai 2023</p>
                    <p className="longComment">J'adore le design épuré de ce briquet Zippo. Il s'allume toujours sans faillir et la flamme est constante. Un compagnon fiable !</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">Un briquet correct pour une utilisation quotidienne</h3>
                    <p className="nameOfUser">par Olivia J. le 18 février 2022</p>
                    <p className="longComment">Le briquet Zippo est une option correcte pour une utilisation quotidienne, offrant une flamme fiable pour différents besoins d'allumage.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Le meilleur briquet que j'ai jamais possédé</h3>
                    <p className="nameOfUser">par Emily G. le 15 mai 2023</p>
                    <p className="longComment">J'ai possédé de nombreux briquets par le passé, mais ce Zippo est de loin le meilleur. Il est robuste, rechargeable et a un charme classique. Je l'adore absolument !</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Un compagnon fiable pour les voyages</h3>
                    <p className="nameOfUser">par Emma S. le 15 mars 2022</p>
                    <p className="longComment">Pendant les voyages, mon briquet Zippo ne me déçoit jamais en offrant une flamme fiable pour allumer des cigarettes ou des feux de camp en chemin.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Parfait pour les aventures en plein air</h3>
                    <p className="nameOfUser">par Robert L. le 12 mai 2023</p>
                    <p className="longComment">J'emmène mon briquet Zippo avec moi lors de mes séjours en camping, et il ne me déçoit jamais. Il est coupe-vent et fiable, ce qui en fait un outil indispensable pour tout amateur de plein air.</p>
                </div>
                <div className="comentar">
                    <Stars2/>
                    <h3 className="shortComment">Un briquet moyen pour une utilisation occasionnelle</h3>
                    <p className="nameOfUser">par Olivia M. le 23 janvier 2022</p>
                    <p className="longComment">Le briquet Zippo fonctionne de manière adéquate pour une utilisation occasionnelle, mais il peut ne pas répondre aux attentes des utilisateurs fréquents.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Un artisanat exquis</h3>
                    <p className="nameOfUser">par Jessica M. le 10 mai 2023</p>
                    <p className="longComment">Les détails de ce briquet Zippo sont remarquables. C'est comme posséder une œuvre d'art. Je suis ravi de mon achat !</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Très fiable</h3>
                    <p className="nameOfUser">par Michael B. le 8 mai 2023</p>
                    <p className="longComment">J'ai mon briquet Zippo depuis des mois maintenant, et il ne m'a jamais déçu. C'est mon briquet de prédilection pour toutes les occasions. Très fiable !</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">Un choix abordable</h3>
                    <p className="nameOfUser">par Chloe P. le 15 février 2022</p>
                    <p className="longComment">Pour ceux qui ont un budget limité, le briquet Zippo offre une qualité et des performances correctes à un prix abordable.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Excellent choix de cadeau</h3>
                    <p className="nameOfUser">par Laura K. le 5 mai 2023</p>
                    <p className="longComment">J'ai acheté ce briquet Zippo comme cadeau pour mon mari, et il l'adore absolument. La gravure ajoute une touche personnelle, en faisant un présent mémorable.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Élégant et raffiné</h3>
                    <p className="nameOfUser">par Christopher R. le 2 mai 2023</p>
                    <p className="longComment">Le design de ce briquet Zippo est élégant et raffiné. C'est un accessoire parfait qui ajoute une touche de sophistication à mon quotidien.</p>
                </div>

                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Un accessoire stylé pour les amateurs de rock</h3>
                    <p className="nameOfUser">par Samuel G. le 12 mars 2022</p>
                    <p className="longComment">Les amateurs de rock et de musique adorent le design edgy des briquets Zippo, ajoutant une touche cool à leurs expériences de concert.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Expédition rapide, excellent produit</h3>
                    <p className="nameOfUser">par Jennifer H. le 30 avril 2023</p>
                    <p className="longComment">J'ai reçu mon briquet Zippo plus tôt que prévu, et c'est exactement ce que je voulais. La qualité est excellente, et je suis très satisfait de mon achat.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Durable et fiable</h3>
                    <p className="nameOfUser">par David M. le 28 avril 2023</p>
                    <p className="longComment">J'utilise mon briquet Zippo depuis des années, et il fonctionne toujours parfaitement. Il a survécu aux chutes et aux conditions difficiles, prouvant sa durabilité et sa fiabilité.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Design classique</h3>
                    <p className="nameOfUser">par Amanda L. le 25 avril 2023</p>
                    <p className="longComment">Le design classique de ce briquet Zippo est intemporel. C'est une véritable icône qui ne se démode jamais. Je suis fier d'en posséder un !</p>
                </div>

                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Un symbole de nostalgie

                    </h3>
                    <p className="nameOfUser">par Mia T. le 10 mars 2022</p>
                    <p className="longComment">Mon briquet Zippo évoque des souvenirs nostalgiques du passé, me rappelant des moments précieux et des êtres chers.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Facile à utiliser</h3>
                    <p className="nameOfUser">par Richard K. le 22 avril 2023</p>
                    <p className="longComment">Utiliser ce briquet Zippo est un jeu d'enfant. La molette de silex allume la flamme sans effort, et le remplissage est simple. Grande commodité !</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Fiable par tous les temps</h3>
                    <p className="nameOfUser">par Michelle P. le 20 avril 2023</p>
                    <p className="longComment">J'ai testé mon briquet Zippo dans différentes conditions météorologiques, du vent à la pluie, et il ne me déçoit jamais. Un compagnon fiable pour les aventures en plein air !</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Objet de collection unique</h3>
                    <p className="nameOfUser">par Thomas S. le 18 avril 2023</p>
                    <p className="longComment">Je collectionne les briquets Zippo, et celui-ci se démarque dans ma collection. Le design est unique, et c'est un excellent sujet de conversation.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Parfait pour les fumeurs</h3>
                    <p className="nameOfUser">par Jennifer M. le 15 avril 2023</p>
                    <p className="longComment">En tant que fumeur, avoir un briquet fiable est essentiel. Ce briquet Zippo ne déçoit jamais, offrant une flamme constante à chaque fois.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Compact et portable</h3>
                    <p className="nameOfUser">par Andrew B. le 12 avril 2023</p>
                    <p className="longComment">La taille compacte de ce briquet Zippo le rend facile à transporter dans ma poche. Il est toujours à portée de main quand j'en ai besoin.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Excellent service client</h3>
                    <p className="nameOfUser">par Lisa C. le 10 avril 2023</p>
                    <p className="longComment">J'ai eu un problème avec mon briquet Zippo, mais l'équipe du service client a été incroyablement serviable et l'a résolu rapidement. Félicitations pour leur excellent soutien !</p>
                </div>

                <div className="comentar">
                    <Stars1/>
                    <h3 className="shortComment">Un briquet décevant avec de mauvaises performances</h3>
                    <p className="nameOfUser">par Olivia L. le 29 décembre 2021</p>
                    <p className="longComment">Le briquet Zippo a été une déception, avec des problèmes fréquents tels que des difficultés à l'allumer et une flamme inconsistante.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Flamme durable</h3>
                    <p className="nameOfUser">par Daniel R. le 8 avril 2023</p>
                    <p className="longComment">La flamme de ce briquet Zippo dure longtemps, me permettant d'allumer sans précipitation. C'est parfait pour les moments de détente.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Construction solide</h3>
                    <p className="nameOfUser">par Sarah M. le 5 avril 2023</p>
                    <p className="longComment">J'ai fait tomber mon briquet Zippo plusieurs fois par accident, mais il reste en excellent état. La construction solide peut supporter des manipulations brusques.</p>
                </div>

                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Une flamme fiable pour les repas en plein air</h3>
                    <p className="nameOfUser">par Benjamin S. le 7 mars 2022</p>
                    <p className="longComment">Lorsque je profite d'un repas en plein air, mon briquet Zippo offre une flamme stable pour allumer des bougies ou un gril portable.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Attrait intemporel</h3>
                    <p className="nameOfUser">par Brian H. le 3 avril 2023</p>
                    <p className="longComment">Le design classique de ce briquet Zippo lui confère un attrait intemporel. C'est un morceau d'histoire qui ne se démode jamais.</p>
                </div>

                <div className="comentar">
                    <Stars2/>
                    <h3 className="shortComment">Une option basique avec une durabilité limitée</h3>
                    <p className="nameOfUser">par Chloe

                        B. le 20 janvier 2022</p>
                    <p className="longComment">Le briquet Zippo est un choix basique, mais il peut ne pas résister à une utilisation intensive ou à une manipulation brutale.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Superbe ajout à ma collection</h3>
                    <p className="nameOfUser">par Elizabeth D. le 30 mars 2023</p>
                    <p className="longComment">En tant que collectionneur, ajouter ce briquet Zippo à ma collection était une évidence. C'est un must pour tout passionné.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Cadeau parfait pour les fumeurs</h3>
                    <p className="nameOfUser">par Kevin P. le 28 mars 2023</p>
                    <p className="longComment">Si vous recherchez un cadeau pour un fumeur, vous ne pouvez pas vous tromper avec un briquet Zippo. Il est pratique, élégant et d'excellente qualité.</p>
                </div>

                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">Un symbole de simplicité</h3>
                    <p className="nameOfUser">par Ethan S. le 12 février 2022</p>
                    <p className="longComment">La simplicité du design du briquet Zippo attire ceux qui apprécient l'esthétique minimaliste.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Facile à entretenir</h3>
                    <p className="nameOfUser">par Laura B. le 25 mars 2023</p>
                    <p className="longComment">Entretenir ce briquet Zippo est un jeu d'enfant. Avec les bons soins et un remplissage occasionnel, il durera toute une vie.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Parfait pour les sorties camping</h3>
                    <p className="nameOfUser">par Matthew T. le 22 mars 2023</p>
                    <p className="longComment">J'emporte mon briquet Zippo avec moi chaque fois que je vais en camping. Il est fiable, facile à utiliser et indispensable pour allumer les feux de camp.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Qualité inégalée</h3>
                    <p className="nameOfUser">par Jessica L. le 20 mars 2023</p>
                    <p className="longComment">La qualité de ce briquet Zippo est inégalée. Il est conçu pour durer et fonctionne à la perfection à chaque fois.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Idéal pour les amateurs de plein air</h3>
                    <p className="nameOfUser">par Benjamin S. le 18 mars 2023</p>
                    <p className="longComment">Si vous aimez les activités de plein air comme le camping ou la randonnée, posséder un briquet Zippo est essentiel. Il est fiable et peut résister à des conditions difficiles.</p>
                </div>

                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Un accessoire élégant pour les poètes</h3>
                    <p className="nameOfUser">par Sophia G. le 5 mars 2022</p>
                    <p className="longComment">Les poètes apprécient les vibrations artistiques et poétiques que les briquets Zippo apportent à leurs séances d'écriture et moments créatifs.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Design impressionnant</h3>
                    <p className="nameOfUser">par Samantha H. le 15 mars 2023</p>
                    <p className="longComment">Le design de ce briquet Zippo est impressionnant. Les détails complexes en font une véritable œuvre d'art.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Rapide et facile à utiliser</h3>
                    <p className="nameOfUser">par Andrew C. le 12 mars 2023</p>
                    <p className="longComment">Utiliser ce briquet Zippo est rapide et sans tracas. Il est prêt à s'allumer en quelques secondes, ce qui en fait un choix pratique.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Artisanat de première qualité</h3>
                    <p className="nameOfUser">par Melissa R. le 10 mars 2023</p>
                    <p className="longComment">L'artisanat de ce briquet Zippo est exceptionnel. Chaque détail est exécuté avec minutie, créant une belle pièce.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Parfait pour une utilisation quotidienne</h3>
                    <p className="nameOfUser">par Ryan W. le 8 mars 2023</p>
                    <p className="longComment">J'utilise mon briquet Zippo tous les jours et il ne me déçoit jamais. Il est fiable, facile à transporter et un accessoire indispensable pour tout fumeur.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Service client exceptionnel</h3>
                    <p className="nameOfUser">par Megan L. le 5 mars 2023</p>
                    <p className="longComment">J'avais une question concernant mon briquet Zippo et l'équipe du service client a été exceptionnelle. Ils ont fourni une assistance rapide et utile.</p>
                </div>

                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">Une flamme fiable pour une utilisation occasionnelle</h3>
                    <p className="nameOfUser">par

                        Emma G. le 10 février 2022</p>
                    <p className="longComment">Pour des occasions occasionnelles, le briquet Zippo offre une flamme satisfaisante pour allumer des cigarettes ou de petits feux.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Solide et fiable</h3>
                    <p className="nameOfUser">par Robert G. le 2 mars 2023</p>
                    <p className="longComment">Ce briquet Zippo est solide en main et fonctionne de manière fiable à chaque fois. C'est un outil fiable pour allumer des bougies, des réchauds, et plus encore.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Une icône classique</h3>
                    <p className="nameOfUser">par Stephanie M. le 28 février 2023</p>
                    <p className="longComment">Posséder un briquet Zippo, c'est comme posséder un morceau d'histoire. C'est une icône classique qui ne se démode jamais.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Parfait pour les collectionneurs</h3>
                    <p className="nameOfUser">par William T. le 25 février 2023</p>
                    <p className="longComment">Si vous êtes collectionneur, ajouter un briquet Zippo à votre collection est indispensable. La gamme de designs et d'éditions limitées le rend passionnant à collectionner.</p>
                </div>

                <div className="comentar">
                    <Stars1/>
                    <h3 className="shortComment">Un gaspillage d'argent</h3>
                    <p className="nameOfUser">par Chloe R. le 27 décembre 2021</p>
                    <p className="longComment">L'achat du briquet Zippo s'est révélé être un gaspillage d'argent, car il n'a pas réussi à répondre aux exigences de base d'un briquet fiable.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Idéal pour offrir en cadeau</h3>
                    <p className="nameOfUser">par Jennifer R. le 22 février 2023</p>
                    <p className="longComment">Que ce soit pour un anniversaire, un anniversaire ou toute autre occasion, un briquet Zippo est un excellent choix de cadeau. Il est pratique et a une valeur sentimentale.</p>
                </div>

                <div className="comentar">
                    <Stars2/>
                    <h3 className="shortComment">Un briquet économique avec des performances moyennes</h3>
                    <p className="nameOfUser">par Ethan M. le 18 janvier 2022</p>
                    <p className="longComment">Le briquet Zippo offre un bon rapport qualité-prix, mais ses performances et sa durabilité peuvent ne pas être à la hauteur des options haut de gamme.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Une marque de confiance depuis des générations</h3>
                    <p className="nameOfUser">par Ryan P. le 2 décembre 2022</p>
                    <p className="longComment">Zippo est une marque de confiance depuis des générations. Mon grand-père en avait un, mon père en a un, et maintenant j'en ai un. C'est une tradition.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Un accessoire pour toutes les occasions</h3>
                    <p className="nameOfUser">par Grace L. le 30 novembre 2022</p>
                    <p className="longComment">Que ce soit pour une occasion formelle ou une sortie décontractée, mon briquet Zippo ajoute une touche de style et de sophistication à toutes les occasions.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Une ingénierie de précision à son meilleur</h3>
                    <p className="nameOfUser">par Samuel C. le 28 novembre 2022</p>
                    <p className="longComment">L'ingénierie précise de mon briquet Zippo garantit une ouverture et une fermeture en douceur à chaque fois, sans accrocs.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Un symbole d'identité personnelle</h3>
                    <p className="nameOfUser">par Madison B. le 25 novembre 2022</p>
                    <p className="longComment">Mon briquet Zippo est plus qu'un simple outil, c'est un symbole de mon identité personnelle et le reflet de mon individualité.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Une tradition à transmettre</h3>
                    <p className="nameOfUser">par Jacob S. le 22 novembre 2022</p>
                    <p className="longComment">J'ai reçu mon briquet Zippo en cadeau de mon père, qui l'a reçu de son père. C'est une tradition que je compte transmettre aux générations futures.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Un symbole d'aventure</h3>
                    <p className="nameOfUser">par Daniel P. le 2 mars 2022</p>
                    <p className="longComment">Mon briquet Zippo symbolise l'esprit d'aventure et d'exploration, éveillant mon désir de découvrir de nouveaux endroits et de vivre de nouvelles expériences.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Une durabilité inégalée</h3>
                    <p className="nameOfUser">par Hailey K. le 20 novembre 2022</p>
                    <p className="longComment">Mon briquet Zippo a été échappé, exposé à des conditions difficiles, et pourtant il fonctionne toujours parfaitement. Sa durabilité est inégalée.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Un symbole d'indépendance</h3>
                    <p className="nameOfUser">par Christopher D. le 18 novembre 2022</p>
                    <p className="longComment">Le briquet Zippo représente l'indépendance et l'autonomie. C'est un rappel que j'ai le pouvoir de créer du feu au bout de mes doigts.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Un outil fiable pour les fumeurs</h3>
                    <p className="nameOfUser">par Olivia W. le 15 novembre 2022</p>
                    <p className="longComment">En tant que fumeuse, mon briquet Zippo ne m'a jamais laissé tomber. Il fournit toujours une flamme puissante pour allumer mes cigarettes.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Une œuvre d'art</h3>
                    <p className="nameOfUser">par Andrew R. le 12 novembre 2022</p>
                    <p className="longComment">Le design et l'artisanat de mon briquet Zippo en font une véritable œuvre d'art. C'est quelque chose dont je suis fier de posséder.</p>
                </div>
                <div className="comentar">
                    <Stars1/>
                    <h3 className="shortComment">Peu fiable et frustrant à utiliser</h3>
                    <p className="nameOfUser">par Emma R. le 22 décembre 2021</p>
                    <p className="longComment">L'utilisation du briquet Zippo a été une source de frustration, avec ses performances peu fiables et son besoin constant d'entretien.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Un morceau d'histoire</h3>
                    <p className="nameOfUser">par Victoria M. le 10 novembre 2022</p>
                    <p className="longComment">Les briquets Zippo existent depuis des décennies, et en posséder un, c'est comme posséder un morceau d'histoire.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Un symbole d'aventure</h3>
                    <p className="nameOfUser">par Daniel H. le 8 novembre 2022</p>
                    <p className="longComment">Pour moi, mon briquet Zippo est un symbole d'aventure et d'exploration. C'est un outil qui m'accompagne dans mes escapades en plein air.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Le cadeau parfait</h3>
                    <p className="nameOfUser">par Sophia L. le 5 novembre 2022</p>
                    <p className="longComment">J'ai offert des briquets Zippo à des amis et à ma famille, et c'est toujours un cadeau bien accueilli. C'est un cadeau polyvalent adapté à toutes les occasions.</p>
                </div>
                <div className="comentar">
                    <Stars2/>
                    <h3 className="shortComment">Un briquet d'entrée de gamme avec une qualité moyenne</h3>
                    <p className="nameOfUser">par Mia B. le 10 janvier 2022</p>
                    <p className="longComment">Le briquet Zippo sert d'option d'entrée de gamme décente, offrant des fonctionnalités de base sans une qualité exceptionnelle.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Un symbole intemporel d'élégance</h3>
                    <p className="nameOfUser">par Samuel B. le 2 novembre 2022</p>
                    <p className="longComment">Le design intemporel et l'élégance du briquet Zippo en font un accessoire précieux pour ceux qui apprécient le savoir-faire raffiné.</p>
                </div>

                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Un morceau de luxe quotidien</h3>
                    <p className="nameOfUser">par Emma K. le 30 octobre 2022</p>
                    <p className="longComment">Mon briquet Zippo ajoute une touche de luxe quotidien à ma vie. C'est un petit plaisir qui me procure de la joie.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Un outil fiable pour les urgences à domicile</h3>
                    <p className="nameOfUser">par Emily S. le 28 février 2022</p>
                    <p className="longComment">En cas de panne de courant ou d'urgence, mon briquet Zippo est un outil fiable pour allumer des bougies ou des lanternes.</p>
                </div>
            </div>}
        </div>
    );
};


export default ReviewsZippo;
import React from 'react';
import './Reviews.css'
import {Stars5, Stars2, Stars4, Stars1, Stars3} from "../Stars/Stars";

const Reviews = ({setShowReviews, showReviews}) => {
    return (
        <div className={showReviews ? "reviewsTS show" : "reviewsTS"} onClick={()=> setShowReviews(false)}>
            <div className={showReviews ? "reviewsContainerTS show" : "reviewsContainerTS"} onClick={(e)=> e.stopPropagation()}>
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
                    <p className="longComment">Love the art and the shirt, and it washes like a dream. Arrived quicker than expected, to boot. Thanks!!
                    </p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Top shelf Great Quality. Fast</h3>
                    <p className="nameOfUser">by Ralph C. on May 27, 2023</p>
                    <p className="longComment">Top shelf Great Quality. Fast Service. The Best</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Great price and amazing quality</h3>
                    <p className="nameOfUser">by thomas F. on May 26, 2023</p>
                    <p className="longComment">Absolutely love my top 🤙🏽🤙🏽</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">As described. Perfect condition and</h3>
                    <p className="nameOfUser">by Sandra B. on May 26, 2023</p>
                    <p className="longComment">As described. Perfect condition and fast delivery. Recommend!</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Great t-shit, fits perfectly. Will</h3>
                    <p className="nameOfUser">by Daniel S. on May 25, 2023</p>
                    <p className="longComment">Great t-shit, fits perfectly. Will definitely order more.</p>
                </div>
                <div className="comentar">
                    <Stars2/>
                    <h3 className="shortComment">Not the quality that I</h3>
                    <p className="nameOfUser">by Philippe S. on May 22, 2023</p>
                    <p className="longComment">Not the quality that I expected!</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Beautiful t-shirt</h3>
                    <p className="nameOfUser">by Meredith on May 21, 2023</p>
                    <p className="longComment">Great t-shirt! Nice clear graphics, well designed (as pictured by seller) and soft material, well-stitched. Reasonable postage cost and quick dispatch. Very pleased.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">Beautiful artwork on t-shirt.</h3>
                    <p className="nameOfUser">by Valerie on May 20, 2023</p>
                    <p className="longComment">Beautiful artwork on t-shirt.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">Shrinking</h3>
                    <p className="nameOfUser">by Eileen on May 19, 2023</p>
                    <p className="longComment">The shirt shrunk a lot. The printing was great, but it's now a crop top.</p>
                </div>
                <div className="comentar">
                    <Stars1/>
                    <h3 className="shortComment">Never received parcel and no answer! Terrible</h3>
                    <p className="nameOfUser">by Fleur on May 19, 2023</p>
                    <p className="longComment">I've never received my t-shirt. I wrote several times to customer service and never received an answer. I will now go on a legal way.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">🫶</h3>
                    <p className="nameOfUser">by Sonja on May 18, 2023</p>
                    <p className="longComment">🫶</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Always good quality and great</h3>
                    <p className="nameOfUser">by Glenn W. on May 17, 2023</p>
                    <p className="longComment">Always good quality and great designs!</p>
                </div>
                <div className="comentar">
                    <Stars2/>
                    <h3 className="shortComment">Poor quality of imprint on</h3>
                    <p className="nameOfUser">by JOHN c. on May 17, 2023</p>
                    <p className="longComment">Poor quality of imprint on the t-shirt. Not the same as advertised.</p>
                </div>
                <div className="comentar">
                    <Stars1/>
                    <h3 className="shortComment">Decal is peeling already after</h3>
                    <p className="nameOfUser">by John G. on May 15, 2023</p>
                    <p className="longComment">Decal is peeling already after 4 washes and no dryer.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Awesome shirt I love it</h3>
                    <p className="nameOfUser">by Claudia on May 13, 2023</p>
                    <p className="longComment">Awesome shirt I love it ✨️</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A worthwhile item for any</h3>
                    <p className="nameOfUser">by Thomas on May 13, 2023</p>
                    <p className="longComment">A worthwhile item for any fan of GuP. Good to have. Item as advertised, received in good time.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Looks great, love the artwork,</h3>
                    <p className="nameOfUser">by Cherie S. on May 12, 2023</p>
                    <p className="longComment">Looks great, love the artwork, generous sizing.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">High quality!</h3>
                    <p className="nameOfUser">by Vanessa R. on May 11, 2023</p>
                    <p className="longComment">I simply love it! High-quality model and leather, comfortable and beautiful design. I put my shoes on and almost sleep with them :) The 2 colors leather gave me the right effect I was looking for and it matches all my outfits.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">T-shirt</h3>
                    <p className="nameOfUser">by Stephen on May 10, 2023</p>
                    <p className="longComment">Good artwork. Quality material for the clothing. Decent fit.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">All of the products I</h3>
                    <p className="nameOfUser">by Donna P. on May 9, 2023</p>
                    <p className="longComment">All of the products I have purchased from Redbubble are of excellent quality. I receive compliments on all of the t-shirts I have purchased from Redbubble. I would and have recommended your company to everyone. It's very enjoyable to browse through the different designs and themes and then finally pick out a new design for a t-shirt, cup, tote bag, etc. Love this website!</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Fits right, love the logo.</h3>
                    <p className="nameOfUser">by Paul O. on May 8, 2023</p>
                    <p className="longComment">Fits right, love the logo. And yes, I worked on The Midnight Special.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Quality is no more than</h3>
                    <p className="nameOfUser">by Steve on May 7, 2023</p>
                    <p className="longComment">Quality is no more than average. Print is similar. Way overpriced.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Love it</h3>
                    <p className="nameOfUser">by Joanne C. on May 5, 2023</p>
                    <p className="longComment">Love it.</p>
                </div>
                <div className="comentar">
                    <Stars1/>
                    <h3 className="shortComment">I ordered 3 shirts and</h3>
                    <p className="nameOfUser">by David A. on May 5, 2023</p>
                    <p className="longComment">I ordered 3 shirts, and after one wash, all 3 were unwearable. One also had 2 small holes in it. They did give a full refund, but I would have preferred the shirts. I ordered 4 others before this, and those were fine and held up well. So the quality isn't consistent at all.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Reasonable good quality, size slightly</h3>
                    <p className="nameOfUser">by Anu on May 3, 2023</p>
                    <p className="longComment">Reasonable good quality, size slightly too big even measured before ordering. Arrived on time.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">Print quality was pretty poor</h3>
                    <p className="nameOfUser">by Richard on May 3, 2023</p>
                    <p className="longComment">The quality of the shirt material was great; however, the print quality was pretty poor, and the image was not clear. I do not wear the shirt out in public because it does not look professional.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Oasis T shirt</h3>
                    <p className="nameOfUser">by Sarah on May 2, 2023</p>
                    <p className="longComment">Fabulous t-shirt! Very unique and received lots of compliments when I wore it. Would definitely recommend.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Very nice product</h3>
                    <p className="nameOfUser">by james a. on May 2, 2023</p>
                    <p className="longComment">Very nice product.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">Its Ok, but the quality</h3>
                    <p className="nameOfUser">by Katarzyna K. on May 2, 2023</p>
                    <p className="longComment">It's Ok, but the quality of the material is not satisfactory.</p>
                </div>
                <div className="comentar">
                    <Stars1/>
                    <h3 className="shortComment">Poor material quality. I didn't</h3>
                    <p className="nameOfUser">by Χρόνης on May 2, 2023</p>
                    <p className="longComment">Poor material quality. I didn't use them. Too bad the money I gave you.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">The print had a mistake</h3>
                    <p className="nameOfUser">by Matthew M. on May 1, 2023</p>
                    <p className="longComment">The print had a mistake on it so I can't say it was a good experience, but the return policy was easy and I'm happy with the replacement shirt I received.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Great</h3>
                    <p className="nameOfUser">by Ronald on Apr 26, 2023</p>
                    <p className="longComment">Great</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Thank you very much for</h3>
                    <p className="nameOfUser">by Rodney i. on Apr 26, 2023</p>
                    <p className="longComment">Thank you very much for the t-shirt it fits great</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Ok, but won't last lots of washes</h3>
                    <p className="nameOfUser">by Pamela W. on Apr 26, 2023</p>
                    <p className="longComment">Shirt fits good as indicated in size chart. Picture printed on looked really great however after a few washes already starting to fade and break apart. That is a little disappointing.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Exactly what I wanted 👍</h3>
                    <p className="nameOfUser">by Bruce S. on Apr 25, 2023</p>
                    <p className="longComment">Exactly what I wanted 👍</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Nice Shirt</h3>
                    <p className="nameOfUser">by John on Apr 25, 2023</p>
                    <p className="longComment">Colors are nice. Fit is good.</p>
                </div>
                <div className="comentar">
                    <Stars1/>
                    <h3 className="shortComment">good</h3>
                    <p className="nameOfUser">by Damon B. on Apr 25, 2023</p>
                    <p className="longComment">good</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">My hubby loved it and</h3>
                    <p className="nameOfUser">by Leanne S. on Apr 24, 2023</p>
                    <p className="longComment">My hubby loved it and it fitted great. Awesome quality too.</p>
                </div>
                <div className="comentar">
                    <Stars1/>
                    <h3 className="shortComment">Very cheap fabric , not</h3>
                    <p className="nameOfUser">by Tammy on Apr 24, 2023</p>
                    <p className="longComment">Very cheap fabric , not worth the price</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Nice price, good quality and</h3>
                    <p className="nameOfUser">by Hans on Apr 22, 2023</p>
                    <p className="longComment">Nice price, good quality and great designs</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Good quality, great graphics, well</h3>
                    <p className="nameOfUser">by Desley on Apr 21, 2023</p>
                    <p className="longComment">Good quality, great graphics, well made and comfortable, a bit on the large size but so am I so still good to wear.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">Cute, but Wasn’t for me</h3>
                    <p className="nameOfUser">by Megan M. on Apr 19, 2023</p>
                    <p className="longComment">Shirt itself is cute. But the material was stiff, boxy, and uncomfortable. I wish it was offered in a range of material styles. I was going to exchange for a larger size; however, customer service was rather unhelpful and couldn’t provide me with any information needed. The exchange process is overly complicated, so I ended up just keeping the shirt even though it doesn’t fit. It breaks my heart that the website and “customer services” are not user-friendly.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Fits and looks great.</h3>
                    <p className="nameOfUser">by Kenneth on Apr 15, 2023</p>
                    <p className="longComment">Fits and looks great.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">So stinking cute</h3>
                    <p className="nameOfUser">by Yesenia S. on Apr 12, 2023</p>
                    <p className="longComment">This is my new favorite shirt. I love love love it. It’s perfect and looks just like the picture 💕</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Great design and quality material.</h3>
                    <p className="nameOfUser">by Andrea D. on Apr 10, 2023</p>
                    <p className="longComment">Great design and quality material.</p>
                </div>
                <div className="comentar">
                    <Stars1/>
                    <h3 className="shortComment">N/A</h3>
                    <p className="nameOfUser">by Rachel P. on Apr 10, 2023</p>
                    <p className="longComment">N/A</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Great purchase</h3>
                    <p className="nameOfUser">by Teri on Apr 8, 2023</p>
                    <p className="longComment">Love my new bowling t-shirts. They are awesome. Have recommended Redbubble to all my friends because they like my shirts too.</p>
                </div>
                <div className="comentar">
                    <Stars1/>
                    <h3 className="shortComment">Shirts not true to size,</h3>
                    <p className="nameOfUser">by Keith on Apr 4, 2023</p>
                    <p className="longComment">Shirts not true to size, large shirts are really short. Scratchy uncomfortable material.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Good quality,, very well done,,</h3>
                    <p className="nameOfUser">by Carolyn M. on Apr 3, 2023</p>
                    <p className="longComment">Good quality, very well done, love my shirts 💕</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Perfect</h3>
                    <p className="nameOfUser">by Michel-André on Apr 2, 2023</p>
                    <p className="longComment">Perfect</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">My son loved his t-shirts.</h3>
                    <p className="nameOfUser">by Riria on Apr 2, 2023</p>
                    <p className="longComment">My son loved his t-shirts. Thanks.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Each time... your shirts are</h3>
                    <p className="nameOfUser">by Sandrine p. on Apr 2, 2023</p>
                    <p className="longComment">Each time... your shirts are wonderful!! Thank you so much</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">.</h3>
                    <p className="nameOfUser">by Paul S. on Apr 2, 2023</p>
                    <p className="longComment">.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">All alright… It fits perfectly,</h3>
                    <p className="nameOfUser">by Daniela T. on Apr 1, 2023</p>
                    <p className="longComment">All alright… It fits perfectly, the quality is really great</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Up Helly Aa T-shirt</h3>
                    <p className="nameOfUser">by George M. on Mar 30, 2023</p>
                    <p className="longComment">I was looking for a t-shirt as a wearable souvenir of the Up Helly Aa fire festival in Shetland. The t-shirt I bought through Redbubble was the best I found. It fits as expected, was a good price, and the artwork was brilliant. Very happy with the purchase.</p>
                </div>
                <div className="comentar">
                    <Stars1/>
                    <h3 className="shortComment">Cheaply made</h3>
                    <p className="nameOfUser">by Nino on Mar 30, 2023</p>
                    <p className="longComment">Cheaply made</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Great T-Shirt</h3>
                    <p className="nameOfUser">by Jan F. on Mar 28, 2023</p>
                    <p className="longComment">Both the fabric as well as the print seem to be of good quality. Fit is fine as well.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Exactly as described. Perfect</h3>
                    <p className="nameOfUser">by Angel on Mar 27, 2023</p>
                    <p className="longComment">Exactly as described. Perfect fit and soft fabric. The design is amazing.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Love it</h3>
                    <p className="nameOfUser">by Mari C. on Mar 26, 2023</p>
                    <p className="longComment">Love it</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">👌🏽</h3>
                    <p className="nameOfUser">by Nikolas on Mar 26, 2023</p>
                    <p className="longComment">👌🏽</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">As described. Perfect condition and</h3>
                    <p className="nameOfUser">by Sandra B. on May 26, 2023</p>
                    <p className="longComment">As described. Perfect condition and fast delivery. Recommend!</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Great t-shit, fits perfectly. Will</h3>
                    <p className="nameOfUser">by Daniel S. on May 25, 2023</p>
                    <p className="longComment">Great t-shit, fits perfectly. Will definitely order more.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Quality of tshirt wasnt what</h3>
                    <p className="nameOfUser">by Rebecca B. on Mar 15, 2023</p>
                    <p className="longComment">Quality of tshirt wasnt what we expected. The color was fine but the printing wasnt seen very well at all because shirt too dark to see print.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Excellent Shirts !!</h3>
                    <p className="nameOfUser">by Derek on Mar 14, 2023</p>
                    <p className="longComment">Excellent Shirts !!</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Always satisfied with the service</h3>
                    <p className="nameOfUser">by James M. on Mar 13, 2023</p>
                    <p className="longComment">Always satisfied with the service and t-shirt designs are great and also fast delivery.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Great shirt, just a bit</h3>
                    <p className="nameOfUser">by Joseph E. on Mar 13, 2023</p>
                    <p className="longComment">Great shirt, just a bit short</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">I like that you can</h3>
                    <p className="nameOfUser">by Stephen on Mar 11, 2023</p>
                    <p className="longComment">I like that you can choose the image on the front or back. I prefer on the back. Good shirts. I'll order again.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Terrible quality</h3>
                    <p className="nameOfUser">by Julia Z. on Mar 8, 2023</p>
                    <p className="longComment">Really cute design, but unfortunately the print is extremely low quality. After washing it (following instructions, of course) the print has kind of crumbled and faded. So now I have a shirt with half the print left. Very disappointed!</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">These 3 shirts are a</h3>
                    <p className="nameOfUser">by Judy C. on Mar 6, 2023</p>
                    <p className="longComment">These 3 shirts are a great addition to my wardrobe. The designs are unique and the fabric is comfortable to wear. I've received compliments whenever I wear them. Highly recommended!</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Fast shipping and good quality</h3>
                    <p className="nameOfUser">by Michael T. on Mar 3, 2023</p>
                    <p className="longComment">Fast shipping and good quality shirts. I'm satisfied with my purchase. Will buy again.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Love the design and the</h3>
                    <p className="nameOfUser">by Samantha R. on Feb 28, 2023</p>
                    <p className="longComment">Love the design and the fit of the shirt. The material is soft and comfortable. Will definitely order more in the future.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Great customer service and fast</h3>
                    <p className="nameOfUser">by Kevin W. on Feb 27, 2023</p>
                    <p className="longComment">Great customer service and fast delivery. The shirt looks exactly as advertised. Very satisfied with my purchase.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">The shirt arrived on time</h3>
                    <p className="nameOfUser">by Jennifer L. on Feb 25, 2023</p>
                    <p className="longComment">The shirt arrived on time and the print quality is excellent. It fits well and is comfortable to wear. I'm happy with my purchase.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Good quality, but a bit small</h3>
                    <p className="nameOfUser">by Emily S. on Feb 20, 2023</p>
                    <p className="longComment">The shirt is made of good quality material, but it runs a bit small. I recommend ordering a size up for a more comfortable fit.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Nice design, but wrinkles easily</h3>
                    <p className="nameOfUser">by Jason B. on Feb 18, 2023</p>
                    <p className="longComment">The design of the shirt is nice, but it wrinkles easily. I have to iron it every time before wearing. It would be better if the fabric was less prone to wrinkles.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">Average quality, not worth the price</h3>
                    <p className="nameOfUser">by Lisa M. on Feb 15, 2023</p>
                    <p className="longComment">I expected better quality for the price. The shirt feels average and the print is not as vibrant as I thought it would be. Disappointed with the purchase.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Awesome quality</h3>
                    <p className="nameOfUser">by Michelle G. on Feb 14, 2023</p>
                    <p className="longComment">Awesome quality</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">The quality is good as</h3>
                    <p className="nameOfUser">by JOHN P. on Feb 14, 2023</p>
                    <p className="longComment">The quality is good as is the print</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Good quality but postage was</h3>
                    <p className="nameOfUser">by Madeleine W. on Feb 14, 2023</p>
                    <p className="longComment">Good quality but postage was expensive</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Awesome designs!</h3>
                    <p className="nameOfUser">by Edward T. on Feb 13, 2023</p>
                    <p className="longComment">Awesome designs!</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A very good quality product</h3>
                    <p className="nameOfUser">by Stefano on Feb 12, 2023</p>
                    <p className="longComment">I was positively surprised of the high quality of the print. The design is clear, and the cotton of the t-shirt is good quality. I'm totally satisfied.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">While the print on the</h3>
                    <p className="nameOfUser">by Kate on Feb 12, 2023</p>
                    <p className="longComment">While the print on the tshirts is exactly as pictured..the quality of the material is not so good. It's stiff, and scratchy..far too thick.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Great fit, love it .</h3>
                    <p className="nameOfUser">by Julie T. on Feb 10, 2023</p>
                    <p className="longComment">Great fit, love it . Quick delivery . Would highly recommend this seller</p>
                </div>
                <div className="comentar">
                    <Stars2/>
                    <h3 className="shortComment">3 Shirts. 2 great. 1 just a mess.</h3>
                    <p className="nameOfUser">by Kelley M. on Feb 10, 2023</p>
                    <p className="longComment">Ordered 3 T shirts with band decals. 2 were great. One, purple shirt with black decal just looks a mess. Can’t tell what the decal is. Black blob. Very disappointed in this shirt.</p>
                </div>
                <div className="comentar">
                    <Stars1/>
                    <h3 className="shortComment">👍</h3>
                    <p className="nameOfUser">by Kevin H. on Feb 9, 2023</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">great</h3>
                    <p className="nameOfUser">by Elie P. on Feb 9, 2023</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Nice</h3>
                    <p className="nameOfUser">by C k. on Feb 8, 2023</p>
                    <p className="longComment">Nice quality t-shirt, and I received it sooner than expected. Too bad Bills didn’t make it to Super Bowl. Maybe next year.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">alles OK!</h3>
                    <p className="nameOfUser">by Stéphane on Feb 8, 2023</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">The shirt looks, fits, and</h3>
                    <p className="nameOfUser">by Gracie O. on Feb 7, 2023</p>
                    <p className="longComment">The shirt looks, fits, and feels great! The color and graphic held up even after being washed.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Cool stuff but long shippment</h3>
                    <p className="nameOfUser">by Raphael D. on Feb 6, 2023</p>
                    <p className="longComment">Needed 6 weeks for delivery:-)</p>
                </div>
                <div className="comentar">
                    <Stars2/>
                    <h3 className="shortComment">Holes in shirt</h3>
                    <p className="nameOfUser">by Christopher C. on Feb 6, 2023</p>
                    <p className="longComment">Ordered two shirts. One of them came out fine, the other one came with two holes in it.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Kenny do it tshirt</h3>
                    <p className="nameOfUser">by kenneth on Feb 5, 2023</p>
                    <p className="longComment">Love the tshirt got as a present as Kenny is brilliant on storage wars.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Same</h3>
                    <p className="nameOfUser">by André L. on Feb 4, 2023</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Loved</h3>
                    <p className="nameOfUser">by Shanice on Feb 4, 2023</p>
                    <p className="longComment">The shirt was beautifully made; the print was just like the image online. The shirt did have a strong smell upon arrival but that's fixable.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Great quality print!</h3>
                    <p className="nameOfUser">by Parker B. on Feb 4, 2023</p>
                    <p className="longComment">Great quality print!</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Alles bestens, super Service</h3>
                    <p className="nameOfUser">by Anja H. on Feb 3, 2023</p>
                    <p className="longComment">Alles bestens, super Service</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Blue Oyster T-Shirt by episodicDrawing</h3>
                    <p className="nameOfUser">by Cathy K. on Feb 2, 2023</p>
                    <p className="longComment">This was a gift, and the person (male) has worn it several times. It laundered well. I liked the design so much that I also purchased it on a tote-bag for a young lady. The design pleased them both.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Super T-shrit! Great quality</h3>
                    <p className="nameOfUser">by William D. on Feb 2, 2023</p>
                    <p className="longComment">Super T-shrit! Great quality</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Perfect !</h3>
                    <p className="nameOfUser">by Amélie L. on Feb 1, 2023</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Good quality shirt with nice</h3>
                    <p className="nameOfUser">by Brendan on Feb 1, 2023</p>
                    <p className="longComment">Good quality shirt with nice crisp printing.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Mavic</h3>
                    <p className="nameOfUser">by Meg B. on Feb 1, 2023</p>
                    <p className="longComment">Great design!</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">.</h3>
                    <p className="nameOfUser">by Jakub E. on Feb 1, 2023</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Great fit and design</h3>
                    <p className="nameOfUser">by Cheryl C. on Jan 31, 2023</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Brilliant services would differely recommend</h3>
                    <p className="nameOfUser">by Mrs B. on Jan 31, 2023</p>
                    <p className="longComment">Brilliant services would differely recommend to my friends</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Excellent</h3>
                    <p className="nameOfUser">by Michael D. on Jan 30, 2023</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Product arrived in perfect condition.</h3>
                    <p className="nameOfUser">by João F. on Jan 29, 2023</p>
                    <p className="longComment">Product arrived in perfect condition.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Fit well, looked great. OK?</h3>
                    <p className="nameOfUser">by Denny M. on Jan 28, 2023</p>
                    <p className="longComment">Fit well, looked great. OK? 😎👌</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">The only place to find</h3>
                    <p className="nameOfUser">by Philip J. on Jan 27, 2023</p>
                    <p className="longComment">The only place to find t-shirts of a kind. Great quality, fantastic images and unique. Thanks.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Tshirt</h3>
                    <p className="nameOfUser">by Karen L. on Jan 27, 2023</p>
                    <p className="longComment">Great tshirt and fit really well. I’d definitely buy from you guys again</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Very nice an loved the</h3>
                    <p className="nameOfUser">by Pamela F. on Jan 27, 2023</p>
                    <p className="longComment">Very nice an loved the artwork!</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">Pretty pissed off right now....I'm</h3>
                    <p className="nameOfUser">by Rick M. on Jan 27, 2023</p>
                    <p className="longComment">Pretty pissed off right now....I'm sure I'm not your best customer but I have bought many many items from you....and the one time that it mattered to get to me on time you failed. I checked when delivery was estimated if I pay the up-charge....and you folks quoted me Jan 19....in plenty of time to wear my new BigHeadTodd Tshirt to his concert on the 22nd....and yup it arrived Jan 23....so yeah...thanx for the up-charge and dismal service👍</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Definitely a stiffer shirt, print</h3>
                    <p className="nameOfUser">by Krystal on Jan 26, 2023</p>
                    <p className="longComment">Definitely a stiffer shirt, print washes well, true to size! I prefer the essential type shirt though as it's softer.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">I was very pleased with</h3>
                    <p className="nameOfUser">by Cynthia G. on Jan 26, 2023</p>
                    <p className="longComment">I was very pleased with the t-shirt. It is good quality fabric and the design looked just like the one advertised ((actually a little better). Will definitley order again in future! Thank you, Happy Customer</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Great quality t</h3>
                    <p className="nameOfUser">by Katarzyna on Jan 26, 2023</p>
                    <p className="longComment">Greta unique design purchased as a gift for DnD DM. High quality. Great fit, true to size.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Love thé artwork</h3>
                    <p className="nameOfUser">by Joyce on Jan 26, 2023</p>
                    <p className="longComment">Love thé artwork</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">it's nice. 👍 it's cool.</h3>
                    <p className="nameOfUser">by Mr. b. on Jan 25, 2023</p>
                    <p className="longComment">it's nice. 👍 it's cool. 😎 and it's expensive 🧐🎩</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Great quality, great shipping process,</h3>
                    <p className="nameOfUser">by Marianne N. on Jan 25, 2023</p>
                    <p className="longComment">Great quality, great shipping process, fits perfect, no worries about it getting to me on time. Love Redbubble!</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Daughter loves it thank you</h3>
                    <p className="nameOfUser">by Tom A. on Jan 25, 2023</p>
                </div>
                <div className="comentar">
                    <Stars2/>
                    <h3 className="shortComment">Bad quality</h3>
                    <p className="nameOfUser">by MR J. on Jan 25, 2023</p>
                    <p className="longComment">Poor quality t-shirt, only washed and worn once, logo looks like it’s already faded and the fabric has baubles on it.</p>
                </div>
                <div className="comentar">
                    <Stars2/>
                    <h3 className="shortComment">Graphic much darker than pictured</h3>
                    <p className="nameOfUser">by Frank C. on Jan 25, 2023</p>
                    <p className="longComment">RE: 1964 New York World's Fair Monorail Graphic much darker than pictured Would not recommend</p>
                </div>
                <div className="comentar">
                    <Stars1/>
                    <h3 className="shortComment">The fabric is raw and</h3>
                    <p className="nameOfUser">by Elena on Jan 25, 2023</p>
                    <p className="longComment">The fabric is raw and transparent. The graphic design is blurry. Terrible t-shirt, it had to be a gift but I didn’t have the courage to give it.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Cool print, good material -</h3>
                    <p className="nameOfUser">by Aline S. on Jan 24, 2023</p>
                    <p className="longComment">Cool print, good material - absolutely satisfied! Thank you!</p>
                </div>
            </div>
        </div>
    );
};


export default Reviews;
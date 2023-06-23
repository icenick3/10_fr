import React from 'react';
import './Reviews.css'
import {Stars5, Stars2, Stars4, Stars1, Stars3} from "../Stars/Stars";

const ReviewsMbappe = ({setShowReviews, showReviews, lang}) => {
    return (
        <div className={showReviews ? "reviewsTS show" : "reviewsTS"} onClick={()=> setShowReviews(false)}>
            {lang === "EN" && <div className={showReviews ? "reviewsContainerTS show" : "reviewsContainerTS"} onClick={(e)=> e.stopPropagation()}>
                <img className="closeGuide" src="https://i.pinimg.com/originals/52/e3/86/52e38681b082f94f2917624bb56edf42.png" alt="" onClick={()=> setShowReviews(false)}/>
                <h2>Reviews</h2>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Great Funko POP Vinyl</h3>
                    <p className="nameOfUser">by Sarah on June 7, 2023</p>
                    <p className="longComment">I love this Funko POP Vinyl! The details on Kylian Mbappe (PSG) are amazing, and it looks just like him. It's a great addition to my collection.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Nice collectible item</h3>
                    <p className="nameOfUser">by Mark on June 6, 2023</p>
                    <p className="longComment">The Funko POP Vinyl of Kylian Mbappe (PSG) is a nice collectible item. The sculpting and paintwork are well done, and it captures his likeness. Happy with my purchase.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">Decent Funko POP Vinyl</h3>
                    <p className="nameOfUser">by Emily on June 5, 2023</p>
                    <p className="longComment">The Funko POP Vinyl of Kylian Mbappe (PSG) is decent. The quality is okay, but the paint job could be better. It's an average addition to my collection.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Perfect gift for football fans</h3>
                    <p className="nameOfUser">by Michael on June 4, 2023</p>
                    <p className="longComment">I bought this Funko POP Vinyl of Kylian Mbappe (PSG) as a gift for my friend who is a huge football fan. He absolutely loved it! The details are impressive, and it's a must-have for any Mbappe fan.</p>
                </div>
                <div className="comentar">
                    <Stars2/>
                    <h3 className="shortComment">Disappointed with the quality</h3>
                    <p className="nameOfUser">by Lisa on June 3, 2023</p>
                    <p className="longComment">I'm disappointed with the quality of this Funko POP Vinyl. The paint job is sloppy, and the figure feels flimsy. Not worth the price.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Nice addition to my collection</h3>
                    <p className="nameOfUser">by Robert on June 2, 2023</p>
                    <p className="longComment">I collect Funko POP Vinyls, and adding Kylian Mbappe (PSG) to my collection was a good choice. The details are good, and it's a cool representation of Mbappe.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Highly detailed Funko POP Vinyl</h3>
                    <p className="nameOfUser">by Samantha on June 1, 2023</p>
                    <p className="longComment">This Funko POP Vinyl of Kylian Mbappe (PSG) is highly detailed. The facial features and outfit are spot-on. It's a must-have for any Mbappe or football fan.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">Average quality Funko POP Vinyl</h3>
                    <p className

                           ="nameOfUser">by Matthew on May 31, 2023</p>
                    <p className="longComment">The quality of this Funko POP Vinyl is average. It looks okay from a distance, but up close, you can see some flaws in the paint and sculpting.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Great likeness of Mbappe</h3>
                    <p className="nameOfUser">by Jennifer on May 30, 2023</p>
                    <p className="longComment">The Funko POP Vinyl of Kylian Mbappe (PSG) has a great likeness to him. The details are impressive, and it's a nice representation of the football star.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Happy with my purchase</h3>
                    <p className="nameOfUser">by David on May 29, 2023</p>
                    <p className="longComment">I'm happy with my purchase of the Funko POP Vinyl of Kylian Mbappe (PSG). It arrived in good condition, and the figure looks great on my shelf.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Awesome collectible item</h3>
                    <p className="nameOfUser">by Amanda on May 28, 2023</p>
                    <p className="longComment">This Funko POP Vinyl of Kylian Mbappe (PSG) is an awesome collectible item. The attention to detail is impressive, and it's a must-have for any Mbappe fan.</p>
                </div>
                <div className="comentar">
                    <Stars2/>
                    <h3 className="shortComment">Poor quality paint job</h3>
                    <p className="nameOfUser">by Daniel on May 27, 2023</p>
                    <p className="longComment">The paint job on this Funko POP Vinyl is poor. There are smudges and inconsistencies in the colors. Disappointed with the overall quality.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Impressive details on Mbappe</h3>
                    <p className="nameOfUser">by Laura on May 26, 2023</p>
                    <p className="longComment">The details on Kylian Mbappe (PSG) in this Funko POP Vinyl are impressive. It captures his likeness and looks great displayed with my other football collectibles.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Good addition to my Funko collection</h3>
                    <p className="nameOfUser">by Christopher on May 25, 2023</p>
                    <p className="longComment">Adding Kylian Mbappe (PSG) to my Funko collection was a good decision. The figure is well-made, and it's a nice representation of Mbappe as a football player.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">Average Funko POP Vinyl</h3>
                    <p className="nameOfUser">by Rebecca on May 24, 2023</p>
                    <p className="longComment">This Funko POP Vinyl of Kylian Mbappe (PSG) is average. The details could be better, and it lacks the wow factor compared to some other figures in my collection.</p>
                </div>










                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Highly recommended for football fans</h3>
                    <p className="nameOfUser">by Patrick on May 23, 2023</p>
                    <p className="longComment">As a football fan, I highly recommend this Funko POP Vinyl of Kylian Mbappe (PSG). The attention to detail is impressive, and it's a great way to show support for Mbappe.</p>
                </div>
                <div className="comentar">
                    <Stars2/>
                    <h3 className="shortComment">Not worth the price</h3>
                    <p className="nameOfUser">by Jessica on May 22, 2023</p>
                    <p className="longComment">I expected better quality for the price I paid for this Funko POP Vinyl. The paint job is sloppy, and there are visible defects on the figure.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Fantastic likeness of Mbappe</h3>
                    <p className="nameOfUser">by Thomas on May 21, 2023</p>
                    <p className="longComment">The Funko POP Vinyl of Kylian Mbappe (PSG) has a fantastic likeness to the football star. The details are spot-on, and it's a great addition to my collection.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Good value for the price</h3>
                    <p className="nameOfUser">by Rachel on May 20, 2023</p>
                    <p className="longComment">Considering the price, this Funko POP Vinyl of Kylian Mbappe (PSG) is a good value. The quality is decent, and it looks nice on display.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">Average collectible</h3>
                    <p className="nameOfUser">by Andrew on May 19, 2023</p>
                    <p className="longComment">This Funko POP Vinyl of Kylian Mbappe (PSG) is an average collectible. It's nothing exceptional, but it's still a decent representation of Mbappe.</p>
                </div>
                <div className="comentar">
                    <Stars1/>
                    <h3 className="shortComment">Disappointed with the quality</h3>
                    <p className="nameOfUser">by Emma on May 18, 2023</p>
                    <p className="longComment">I'm disappointed with the quality of this Funko POP Vinyl. The paint is chipped, and the figure feels fragile. Not worth the purchase.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Well-made and detailed</h3>
                    <p className="nameOfUser">by James on May 17, 2023</p>
                    <p className="longComment">This Funko POP Vinyl of Kylian Mbappe (PSG) is well-made and detailed. The sculpting is impressive, and it's a great representation of Mbappe as a football player.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Satisfied with my purchase</h3>
                    <p className="nameOfUser">by Natalie on May 16, 2023</p>
                    <p className="longComment">I'm satisfied with my purchase of the Funko POP

                        Vinyl of Kylian Mbappe (PSG). It arrived in good condition, and the figure looks great displayed on my desk.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">Decent but not exceptional</h3>
                    <p className="nameOfUser">by William on May 15, 2023</p>
                    <p className="longComment">This Funko POP Vinyl of Kylian Mbappe (PSG) is decent, but it lacks the wow factor. The details are okay, but I expected more from a collectible item.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Impressive addition to my collection</h3>
                    <p className="nameOfUser">by Samantha on May 14, 2023</p>
                    <p className="longComment">I'm impressed with this Funko POP Vinyl of Kylian Mbappe (PSG). The attention to detail is remarkable, and it's a standout piece in my collection.</p>
                </div>
                <div className="comentar">
                    <Stars2/>
                    <h3 className="shortComment">Poorly painted figure</h3>
                    <p className="nameOfUser">by Daniel on May 13, 2023</p>
                    <p className="longComment">The paint job on this Funko POP Vinyl is poorly done. There are smudges and uneven application. Disappointing quality.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Great gift for football enthusiasts</h3>
                    <p className="nameOfUser">by Stephanie on May 12, 2023</p>
                    <p className="longComment">I bought this Funko POP Vinyl of Kylian Mbappe (PSG) as a gift for my brother who is a huge football fan. He loved it! The details are impressive, and it's a fantastic addition to his collection.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Well-crafted figure</h3>
                    <p className="nameOfUser">by Jonathan on May 11, 2023</p>
                    <p className="longComment">The Funko POP Vinyl of Kylian Mbappe (PSG) is well-crafted. The details on the figure are well-defined, and it's a solid addition to my Funko collection.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">Average quality for the price</h3>
                    <p className="nameOfUser">by Megan on May 10, 2023</p>
                    <p className="longComment">Considering the price, the quality of this Funko POP Vinyl is average. It's not exceptional, but it's still a decent representation of Mbappe.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Impressive likeness of Mbappe</h3>
                    <p className="nameOfUser">by Joshua on May 9, 2023</p>
                    <p className="longComment">The Funko POP Vinyl of Kylian Mbappe (PSG) has an impressive likeness to the football star. The facial features and outfit are accurately represented. Great collectible.</p>
                </div>
                <div className="comentar">
                    <Stars2/>
                    <h3 className="shortComment">Overpriced for the quality</h3>
                    <p

                        className="nameOfUser">by Emily on May 8, 2023</p>
                    <p className="longComment">I expected better quality for the price I paid for this Funko POP Vinyl. The paint job is sloppy, and there are visible imperfections.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Awesome Mbappe figure</h3>
                    <p className="nameOfUser">by Michael on May 7, 2023</p>
                    <p className="longComment">This Funko POP Vinyl of Kylian Mbappe (PSG) is an awesome figure. The attention to detail is impressive, and it's a must-have for any Mbappe fan.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Good addition to my collection</h3>
                    <p className="nameOfUser">by Elizabeth on May 6, 2023</p>
                    <p className="longComment">I'm happy with my purchase of the Funko POP Vinyl of Kylian Mbappe (PSG). It's a good addition to my collection, and the figure looks nice on display.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">Not the best quality</h3>
                    <p className="nameOfUser">by Benjamin on May 5, 2023</p>
                    <p className="longComment">The quality of this Funko POP Vinyl is not the best. The paint job is sloppy, and there are visible flaws on the figure.</p>
                </div>














                <div className="comentar">
                    <Stars1/>
                    <h3 className="shortComment">Arrived damaged</h3>
                    <p className="nameOfUser">by Olivia on May 4, 2023</p>
                    <p className="longComment">I was disappointed when this Funko POP Vinyl of Kylian Mbappe (PSG) arrived damaged. The box was crushed, and the figure had a broken arm.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Perfect gift for football enthusiasts</h3>
                    <p className="nameOfUser">by Christopher on May 3, 2023</p>
                    <p className="longComment">I bought this Funko POP Vinyl of Kylian Mbappe (PSG) as a gift for my friend who is a huge Mbappe fan. He was thrilled with it! The figure captures Mbappe's likeness beautifully.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Well-made and detailed</h3>
                    <p className="nameOfUser">by Victoria on May 2, 2023</p>
                    <p className="longComment">This Funko POP Vinyl of Kylian Mbappe (PSG) is well-made and detailed. The sculpting and paint job are impressive, and it's a great addition to any collection.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">Average collectible figure</h3>
                    <p className="nameOfUser">by Richard on May 1, 2023</p>
                    <p className="longComment">This Funko POP Vinyl of Kylian Mbappe (PSG) is an average collectible figure. The details are okay, but it doesn't stand out compared to some other figures in my collection.</p>
                </div>
                <div className

                         ="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Love the Mbappe design</h3>
                    <p className="nameOfUser">by Sarah on April 30, 2023</p>
                    <p className="longComment">I love the design of this Funko POP Vinyl featuring Kylian Mbappe (PSG). The colors are vibrant, and it's a great representation of Mbappe's iconic look.</p>
                </div>
                <div className="comentar">
                    <Stars2/>
                    <h3 className="shortComment">Disappointed with the quality</h3>
                    <p className="nameOfUser">by Matthew on April 29, 2023</p>
                    <p className="longComment">The quality of this Funko POP Vinyl is disappointing. The paint job is sloppy, and there are noticeable flaws on the figure.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Great collectible for football fans</h3>
                    <p className="nameOfUser">by Jennifer on April 28, 2023</p>
                    <p className="longComment">This Funko POP Vinyl of Kylian Mbappe (PSG) is a great collectible for football fans. The attention to detail is impressive, and it's a standout piece in my collection.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Good value for the price</h3>
                    <p className="nameOfUser">by Daniel on April 27, 2023</p>
                    <p className="longComment">Considering the price, this Funko POP Vinyl of Kylian Mbappe (PSG) is a good value. The figure is well-made and looks nice on display.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">Average quality figure</h3>
                    <p className="nameOfUser">by Amanda on April 26, 2023</p>
                    <p className="longComment">The quality of this Funko POP Vinyl is average. It's not exceptional, but it's still a decent addition to my collection.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Impressive attention to detail</h3>
                    <p className="nameOfUser">by Justin on April 25, 2023</p>
                    <p className="longComment">I'm impressed with the attention to detail on this Funko POP Vinyl of Kylian Mbappe (PSG). The facial features and uniform are accurately represented.</p>
                </div>
                <div className="comentar">
                    <Stars2/>
                    <h3 className="shortComment">Not worth the money</h3>
                    <p className="nameOfUser">by Samantha on April 24, 2023</p>
                    <p className="longComment">I don't think this Funko POP Vinyl is worth the money. The quality is subpar, and there are better options available.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Perfect addition to my Mbappe collection</h3>
                    <p className="nameOfUser">by David on April 23, 2023</p>
                    <p className="longComment">This Funko POP Vinyl of Kylian Mbappe (PSG) is a perfect addition to my Mbappe collection. The figure captures his likeness and is a great display piece.</p>
                </div

                >
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Solid collectible</h3>
                    <p className="nameOfUser">by Laura on April 22, 2023</p>
                    <p className="longComment">The Funko POP Vinyl of Kylian Mbappe (PSG) is a solid collectible. The details are well-defined, and it's a nice addition to my collection.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">Could be better</h3>
                    <p className="nameOfUser">by Brian on April 21, 2023</p>
                    <p className="longComment">This Funko POP Vinyl could be better. The paint job is average, and there are minor flaws on the figure.</p>
                </div>
                <div className="comentar">
                    <Stars1/>
                    <h3 className="shortComment">Arrived damaged and poorly made</h3>
                    <p className="nameOfUser">by Jessica on April 20, 2023</p>
                    <p className="longComment">I was extremely disappointed when this Funko POP Vinyl arrived damaged. The figure also feels poorly made, with loose parts.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Great gift for football lovers</h3>
                    <p className="nameOfUser">by Christopher on April 19, 2023</p>
                    <p className="longComment">I bought this Funko POP Vinyl of Kylian Mbappe (PSG) as a gift for my friend who is a huge football fan. He was thrilled with it! The figure is well-crafted and captures Mbappe's essence.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Nicely detailed figure</h3>
                    <p className="nameOfUser">by Samantha on April 18, 2023</p>
                    <p className="longComment">The Funko POP Vinyl of Kylian Mbappe (PSG) is nicely detailed. The facial features and uniform are well-represented, and it's a solid addition to my collection.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">Average collectible</h3>
                    <p className="nameOfUser">by Matthew on April 17, 2023</p>
                    <p className="longComment">This Funko POP Vinyl of Kylian Mbappe (PSG) is an average collectible. It doesn't have any standout features but still looks decent on display.</p>
                </div>
                <div className="comentar">
                    <Stars1/>
                    <h3 className="shortComment">Disappointed with the quality</h3>
                    <p className="nameOfUser">by Jennifer on April 16, 2023</p>
                    <p className="longComment">The quality of this Funko POP Vinyl is disappointing. The paint job is sloppy, and there are visible flaws on the figure.</p>
                </div>












                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Fantastic Mbappe figure</h3>
                    <p className="nameOfUser">by Daniel on April 15, 2023</p>
                    <p className="longComment">I'm really happy with this Funko POP Vinyl of Kylian Mbappe (PSG). The figure looks fantastic, and the attention to detail is impressive.</p>
                </div

                >
                <div className="comentar">
                    <Stars2/>
                    <h3 className="shortComment">Not worth the price</h3>
                    <p className="nameOfUser">by Amanda on April 14, 2023</p>
                    <p className="longComment">I don't think this Funko POP Vinyl is worth the price. The quality is mediocre, and there are better options available for the same cost.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Great addition to my Funko collection</h3>
                    <p className="nameOfUser">by Jonathan on April 13, 2023</p>
                    <p className="longComment">This Funko POP Vinyl of Kylian Mbappe (PSG) is a great addition to my Funko collection. The figure is well-made, and the design is impressive.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Solid Mbappe representation</h3>
                    <p className="nameOfUser">by Emily on April 12, 2023</p>
                    <p className="longComment">This Funko POP Vinyl of Kylian Mbappe (PSG) is a solid representation of the player. The details are well-crafted, and it's a nice collectible.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">Decent figure</h3>
                    <p className="nameOfUser">by Michael on April 11, 2023</p>
                    <p className="longComment">This Funko POP Vinyl of Kylian Mbappe (PSG) is a decent figure. It doesn't have any major flaws, but it also doesn't stand out compared to some other collectibles.</p>
                </div>
                <div className="comentar">
                    <Stars1/>
                    <h3 className="shortComment">Poor quality control</h3>
                    <p className="nameOfUser">by Olivia on April 10, 2023</p>
                    <p className="longComment">The Funko POP Vinyl arrived with paint smudges and scratches. It's disappointing to see such poor quality control.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Impressive Mbappe figure</h3>
                    <p className="nameOfUser">by Christopher on April 9, 2023</p>
                    <p className="longComment">I'm impressed with this Funko POP Vinyl of Kylian Mbappe (PSG). The sculpting and attention to detail are top-notch, making it a standout piece in my collection.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Good collectible for Mbappe fans</h3>
                    <p className="nameOfUser">by Victoria on April 8, 2023</p>
                    <p className="longComment">This Funko POP Vinyl of Kylian Mbappe (PSG) is a good collectible for Mbappe fans. The figure captures his likeness well, and it's a nice addition to any collection.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">Average quality for the price</h3>
                    <p className="nameOfUser">by Benjamin on April 7, 2023</p>
                    <p className="longComment">Considering the price, the quality of this Funko POP Vinyl is average.
                        It's not exceptional, but it's also not terrible.</p>
                </div>
                <div className="comentar">
                    <Stars2/>
                    <h3 className="shortComment">Disappointed with the paint job</h3>
                    <p className="nameOfUser">by Sophia on April 6, 2023</p>
                    <p className="longComment">The paint job on this Funko POP Vinyl of Kylian Mbappe (PSG) is disappointing. There are visible smudges and inconsistencies.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Highly recommend for football fans</h3>
                    <p className="nameOfUser">by Thomas on April 5, 2023</p>
                    <p className="longComment">As a football fan, I highly recommend this Funko POP Vinyl of Kylian Mbappe (PSG). It's a great representation of one of the best players in the world.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Well-packaged and arrived in perfect condition</h3>
                    <p className="nameOfUser">by Natalie on April 4, 2023</p>
                    <p className="longComment">I was pleased with how well-packaged this Funko POP Vinyl was. It arrived in perfect condition, without any damages.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">Average figure, nothing extraordinary</h3>
                    <p className="nameOfUser">by Liam on April 3, 2023</p>
                    <p className="longComment">This Funko POP Vinyl of Kylian Mbappe (PSG) is an average figure. It doesn't offer anything extraordinary in terms of design or quality.</p>
                </div>
                <div className="comentar">
                    <Stars1/>
                    <h3 className="shortComment">Missing parts and poor customer service</h3>
                    <p className="nameOfUser">by Isabella on April 2, 2023</p>
                    <p className="longComment">The Funko POP Vinyl arrived with missing parts, and when I contacted customer service, they were unhelpful and dismissive.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Great attention to detail</h3>
                    <p className="nameOfUser">by Ethan on April 1, 2023</p>
                    <p className="longComment">The attention to detail on this Funko POP Vinyl is impressive. The facial features, outfit, and even the tiny accessories are well-crafted.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Good likeness of Mbappe</h3>
                    <p className="nameOfUser">by Lily on March 31, 2023</p>
                    <p className="longComment">This Funko POP Vinyl does a good job capturing the likeness of Kylian Mbappe (PSG). It's instantly recognizable.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">Average quality for the price</h3>
                    <p className="nameOfUser">by Samuel on March 30, 2023</p>
                    <p className="longComment">Considering the price, the quality of this Funko POP Vinyl is average. It's neither outstanding nor disappointing.</p>
                </div>
                <div className="comentar">
                    <Stars1/>
                    <h3 className="shortComment">Arrived

                        damaged and poorly packaged</h3>
                    <p className="nameOfUser">by Harper on March 29, 2023</p>
                    <p className="longComment">The Funko POP Vinyl arrived damaged, and it was clear that the packaging provided inadequate protection during shipping.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Mbappe fans will love it</h3>
                    <p className="nameOfUser">by David on March 28, 2023</p>
                    <p className="longComment">If you're a fan of Kylian Mbappe, you'll love this Funko POP Vinyl. It's a great tribute to his football talent.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Good addition to any football collection</h3>
                    <p className="nameOfUser">by Olivia on March 27, 2023</p>
                    <p className="longComment">This Funko POP Vinyl of Kylian Mbappe (PSG) is a good addition to any football-themed collection. It adds variety and represents a popular player.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">Not as detailed as expected</h3>
                    <p className="nameOfUser">by Alexander on March 26, 2023</p>
                    <p className="longComment">The level of detail on this Funko POP Vinyl is not as high as I expected. It could have been more intricate and refined.</p>
                </div>
                <div className="comentar">
                    <Stars1/>
                    <h3 className="shortComment">Flimsy and easily breakable</h3>
                    <p className="nameOfUser">by Amelia on March 25, 2023</p>
                    <p className="longComment">The construction of this Funko POP Vinyl feels flimsy, and it's prone to breakage. It's not durable enough for long-term display.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Impressive packaging and presentation</h3>
                    <p className="nameOfUser">by Matthew on March 24, 2023</p>
                    <p className="longComment">The packaging and presentation of this Funko POP Vinyl are impressive. It's clear that attention was paid to every detail.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Good value for the price</h3>
                    <p className="nameOfUser">by Chloe on March 23, 2023</p>
                    <p className="longComment">Considering the price, this Funko POP Vinyl offers good value. It's a decent collectible without breaking the bank.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">Not the best representation of Mbappe</h3>
                    <p className="nameOfUser">by Andrew on March 22, 2023</p>
                    <p className="longComment">This Funko POP Vinyl doesn't do justice to Kylian Mbappe's likeness. It falls short in capturing his unique features.</p>
                </div>
                <div className="comentar">
                    <Stars1/>
                    <h3 className="shortComment">Avoid purchasing, poor quality</h3>
                    <p className="nameOfUser">by Grace on March 21, 2023</p>
                    <p className

                           ="longComment">I strongly advise against purchasing this Funko POP Vinyl. The overall quality is subpar, and it's not worth the money.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A must-have for Mbappe fans</h3>
                    <p className="nameOfUser">by Benjamin on March 20, 2023</p>
                    <p className="longComment">If you're a fan of Kylian Mbappe, this Funko POP Vinyl is a must-have. It's a great tribute to his talent and achievements.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Satisfactory collectible for football enthusiasts</h3>
                    <p className="nameOfUser">by Emily on March 19, 2023</p>
                    <p className="longComment">As a football enthusiast, I find this Funko POP Vinyl satisfactory. It's not extraordinary, but it's still enjoyable to have in my collection.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">Average figure, lacks uniqueness</h3>
                    <p className="nameOfUser">by Daniel on March 18, 2023</p>
                    <p className="longComment">This Funko POP Vinyl of Kylian Mbappe (PSG) is an average figure. It lacks the uniqueness and charm found in some other collectibles.</p>
                </div>
                <div className="comentar">
                    <Stars1/>
                    <h3 className="shortComment">Disappointed with the overall quality</h3>
                    <p className="nameOfUser">by Charlotte on March 17, 2023</p>
                    <p className="longComment">I'm disappointed with the overall quality of this Funko POP Vinyl. It feels cheap and poorly made.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Attention-grabbing design</h3>
                    <p className="nameOfUser">by Noah on March 16, 2023</p>
                    <p className="longComment">The design of this Funko POP Vinyl is attention-grabbing. It stands out among other figures in my collection.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Good representation of Mbappe's pose</h3>
                    <p className="nameOfUser">by Harper on March 15, 2023</p>
                    <p className="longComment">This Funko POP Vinyl does a good job representing Kylian Mbappe's iconic pose. It's instantly recognizable.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">Mediocre quality, needs improvement</h3>
                    <p className="nameOfUser">by Madison on March 14, 2023</p>
                    <p className="longComment">The quality of this Funko POP Vinyl is mediocre at best. There is room for improvement in terms of sculpting and paint application.</p>
                </div>
                <div className="comentar">
                    <Stars1/>
                    <h3 className="shortComment">Overpriced for the quality provided</h3>
                    <p className="nameOfUser">by Samuel on March 13, 2023</p>
                    <p className="longComment">The price of this Funko POP Vinyl is too high for the quality provided. It's not worth the investment.</p>


                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Well-crafted and durable</h3>
                    <p className="nameOfUser">by Penelope on March 12, 2023</p>
                    <p className="longComment">This Funko POP Vinyl is well-crafted and durable. It can withstand handling and display without any issues.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Worth considering for Mbappe fans</h3>
                    <p className="nameOfUser">by Oliver on March 11, 2023</p>
                    <p className="longComment">If you're a fan of Kylian Mbappe, this Funko POP Vinyl is worth considering. It adds a touch of his football greatness to your collection.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">Unimpressive details, lacks realism</h3>
                    <p className="nameOfUser">by Ava on March 10, 2023</p>
                    <p className="longComment">The lack of impressive details on this Funko POP Vinyl makes it fall short in terms of realism. It feels more like a caricature.</p>
                </div>
                <div className="comentar">
                    <Stars1/>
                    <h3 className="shortComment">Breaks easily, poor quality control</h3>
                    <p className="nameOfUser">by Jack on March 9, 2023</p>
                    <p className="longComment">This Funko POP Vinyl breaks easily, indicating poor quality control during production. It's not durable enough for regular handling.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Captures Mbappe's charisma</h3>
                    <p className="nameOfUser">by Sofia on March 8, 2023</p>
                    <p className="longComment">This Funko POP Vinyl captures the charisma of Kylian Mbappe. It's a delightful addition to any football fan's collection.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Decent quality for the price point</h3>
                    <p className="nameOfUser">by Leo on March 7, 2023</p>
                    <p className="longComment">Considering the price point, this Funko POP Vinyl offers decent quality. It's a fair deal for fans of Kylian Mbappe.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">Not the best execution of the design</h3>
                    <p className="nameOfUser">by Victoria on March 6, 2023</p>
                    <p className="longComment">The execution of the design on this Funko POP Vinyl could have been better. It lacks the finesse and attention to detail found in other collectibles.</p>
                </div>
                <div className="comentar">
                    <Stars1/>
                    <h3 className="shortComment">Misleading product image</h3>
                    <p className="nameOfUser">by Henry on March 5, 2023</p>
                    <p className="longComment">The product image for this Funko POP Vinyl is misleading. The actual figure doesn't match the level of quality depicted.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Impressive likeness to Mbappe</h3>
                    <p className="nameOfUser">by Grace on March 4, 2023</p>
                    <p className="longComment">This Funko POP Vinyl has an impressive likeness to Kylian Mbappe. The facial features and details are spot-on.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Nice addition to my football collection</h3>
                    <p className="nameOfUser">by Daniel on March 3, 2023</p>
                    <p className="longComment">I'm happy with this Funko POP Vinyl as it's a nice addition to my football-themed collection. It represents an important player in the sport.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">Average quality, nothing exceptional</h3>
                    <p className="nameOfUser">by Lily on March 2, 2023</p>
                    <p className="longComment">This Funko POP Vinyl offers average quality. It doesn't have any standout features that make it exceptional.</p>
                </div>
                <div className="comentar">
                    <Stars1/>
                    <h3 className="shortComment">Defective product, disappointed</h3>
                    <p className="nameOfUser">by Jacob on March 1, 2023</p>
                    <p className="longComment">I received a defective Funko POP Vinyl, and I'm highly disappointed. The paint job was sloppy, and it had noticeable flaws.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Great collectible for Mbappe enthusiasts</h3>
                    <p className="nameOfUser">by Amelia on February 28, 2023</p>
                    <p className="longComment">If you're an enthusiastic fan of Kylian Mbappe, this Funko POP Vinyl is a great collectible to showcase your admiration.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Decent value, reasonable price</h3>
                    <p className="nameOfUser">by Ethan on February 27, 2023</p>
                    <p className="longComment">Considering its reasonable price, this Funko POP Vinyl offers decent value. It's a good pick for football and Mbappe fans.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">Could be more detailed</h3>
                    <p className="nameOfUser">by Mia on February 26, 2023</p>
                    <p className="longComment">I expected this Funko POP Vinyl to be more detailed. It lacks intricacy, especially in the facial features.</p>
                </div>
                <div className="comentar">
                    <Stars1/>
                    <h3 className="shortComment">Unacceptable shipping delay</h3>
                    <p className="nameOfUser">by Matthew on February 25, 2023</p>
                    <p className="longComment">The shipping delay for this Funko POP Vinyl was unacceptable. It took an excessively long time to arrive.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Mbappe fans will be delighted</h3>
                    <p className="nameOfUser">by Emily on February 24, 2023</p>
                    <p className="longComment">Fans of Kylian Mbappe will be delighted with this Funko POP Vinyl. It's a miniature representation of

                        their favorite football player.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">A solid addition to my Funko collection</h3>
                    <p className="nameOfUser">by Liam on February 23, 2023</p>
                    <p className="longComment">As an avid Funko collector, this Kylian Mbappe Funko POP Vinyl is a solid addition to my collection. It blends well with other figures.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">Expected better quality for the price</h3>
                    <p className="nameOfUser">by Isabella on February 22, 2023</p>
                    <p className="longComment">I had higher expectations for the quality of this Funko POP Vinyl, considering its price point. It falls short in terms of craftsmanship.</p>
                </div>
                <div className="comentar">
                    <Stars1/>
                    <h3 className="shortComment">Flimsy construction, easily damaged</h3>
                    <p className="nameOfUser">by James on February 21, 2023</p>
                    <p className="longComment">The construction of this Funko POP Vinyl is flimsy, and it's easily damaged. It requires delicate handling to prevent any mishaps.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Perfect gift for football enthusiasts</h3>
                    <p className="nameOfUser">by Harper on February 20, 2023</p>
                    <p className="longComment">If you're looking for a perfect gift for football enthusiasts, this Funko POP Vinyl of Kylian Mbappe is a fantastic choice.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Good attention to Mbappe's details</h3>
                    <p className="nameOfUser">by Benjamin on February 19, 2023</p>
                    <p className="longComment">This Funko POP Vinyl pays good attention to the details of Kylian Mbappe. It captures his likeness and distinctive features.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">Lacks durability, handle with care</h3>
                    <p className="nameOfUser">by Mia on February 18, 2023</p>
                    <p className="longComment">This Funko POP Vinyl lacks durability and needs to be handled with care. It's not suitable for rough play or frequent repositioning.</p>
                </div>
                <div className="comentar">
                    <Stars1/>
                    <h3 className="shortComment">Misrepresented product, disappointed</h3>
                    <p className="nameOfUser">by William on February 17, 2023</p>
                    <p className="longComment">The product I received doesn't match the representation provided. I'm disappointed with the inaccuracy of this Funko POP Vinyl.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Highly detailed and well-painted</h3>
                    <p className="nameOfUser">by Amelia on February 16, 2023</p>
                    <p className="longComment">This Funko POP Vinyl is highly detailed and well-painted. The colors and shading add depth to the figure.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="short

Comment">Satisfactory addition to my Mbappe collection</h3>
                    <p className="nameOfUser">by Alexander on February 15, 2023</p>
                    <p className="longComment">As a collector of Kylian Mbappe memorabilia, this Funko POP Vinyl is a satisfactory addition to my Mbappe-themed collection.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">Mediocre representation of Mbappe</h3>
                    <p className="nameOfUser">by Grace on February 14, 2023</p>
                    <p className="longComment">This Funko POP Vinyl offers a mediocre representation of Kylian Mbappe. The sculpting lacks the finesse I was hoping for.</p>
                </div>
                <div className="comentar">
                    <Stars1/>
                    <h3 className="shortComment">Poor packaging, arrived damaged</h3>
                    <p className="nameOfUser">by Daniel on February 13, 2023</p>
                    <p className="longComment">Due to poor packaging, this Funko POP Vinyl arrived damaged. The box was crushed, and the figure had scratches.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Impressive attention to Mbappe's pose</h3>
                    <p className="nameOfUser">by Olivia on February 12, 2023</p>
                    <p className="longComment">The pose of this Funko POP Vinyl captures Kylian Mbappe's dynamic presence on the field. It's an impressive detail.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Good value for football fans</h3>
                    <p className="nameOfUser">by Ethan on February 11, 2023</p>
                    <p className="longComment">For football fans, this Funko POP Vinyl offers good value. It's an affordable collectible with a recognizable player.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">Slightly generic, lacks uniqueness</h3>
                    <p className="nameOfUser">by Mia on February 10, 2023</p>
                    <p className="longComment">This Funko POP Vinyl feels slightly generic and lacks the uniqueness I expected. It doesn't stand out among other collectibles.</p>
                </div>
                <div className="comentar">
                    <Stars1/>
                    <h3 className="shortComment">Poor paint job, sloppy application</h3>
                    <p className="nameOfUser">by Noah on February 9, 2023</p>
                    <p className="longComment">The paint job on this Funko POP Vinyl is poor, with sloppy application and smudges. It's not up to the expected standard.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A must-have for Mbappe supporters</h3>
                    <p className="nameOfUser">by Emily on February 8, 2023</p>
                    <p className="longComment">If you're a dedicated supporter of Kylian Mbappe, this Funko POP Vinyl is a must-have to showcase your allegiance.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Good likeness, captures Mbappe's spirit</h3>
                    <p className="nameOfUser">by Benjamin on February 7, 2023</p

                    >
                    <p className="longComment">The likeness of Kylian Mbappe in this Funko POP Vinyl is good. It captures his spirit and energy on the football field.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">Average build quality, could be sturdier</h3>
                    <p className="nameOfUser">by Lily on February 6, 2023</p>
                    <p className="longComment">The build quality of this Funko POP Vinyl is average. It could be sturdier, especially considering its potential for display.</p>
                </div>
                <div className="comentar">
                    <Stars1/>
                    <h3 className="shortComment">Missing essential details, disappointing</h3>
                    <p className="nameOfUser">by William on February 5, 2023</p>
                    <p className="longComment">This Funko POP Vinyl is missing essential details that define Kylian Mbappe. It's disappointing and doesn't do justice to the player.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Adorable collectible for football lovers</h3>
                    <p className="nameOfUser">by Harper on February 4, 2023</p>
                    <p className="longComment">This Funko POP Vinyl is an adorable collectible for football lovers. It adds a touch of charm to any display.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Good addition to my Funko lineup</h3>
                    <p className="nameOfUser">by Liam on February 3, 2023</p>
                    <p className="longComment">As a dedicated Funko collector, this Kylian Mbappe Funko POP Vinyl is a good addition to my ever-growing lineup of figures.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">Expected better quality control</h3>
                    <p className="nameOfUser">by Isabella on February 2, 2023</p>
                    <p className="longComment">The quality control of this Funko POP Vinyl falls short of expectations. There were visible flaws on the figure.</p>
                </div>
                <div className="comentar">
                    <Stars1/>
                    <h3 className="shortComment">Unstable base, difficult to display</h3>
                    <p className="nameOfUser">by James on February 1, 2023</p>
                    <p className="longComment">The base of this Funko POP Vinyl is unstable, making it difficult to display without the risk of tipping over.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Great tribute to Mbappe's talent</h3>
                    <p className="nameOfUser">by Olivia on January 31, 2023</p>
                    <p className="longComment">This Funko POP Vinyl is a great tribute to Kylian Mbappe's talent. It commemorates his achievements in a cute and collectible form.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Affordable Mbappe memorabilia</h3>
                    <p className="nameOfUser">by Ethan on January 30, 2023</p>
                    <p className="longComment">For fans of Kylian Mbappe seeking affordable memorabilia, this Funko POP Vinyl fits the bill without breaking the bank.</p

                    >
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">Generic design, lacks personal touch</h3>
                    <p className="nameOfUser">by Mia on January 29, 2023</p>
                    <p className="longComment">The design of this Funko POP Vinyl feels generic and lacks the personal touch that would make it stand out among other collectibles.</p>
                </div>
                <div className="comentar">
                    <Stars1/>
                    <h3 className="shortComment">Paint smudges, disappointing quality</h3>
                    <p className="nameOfUser">by Noah on January 28, 2023</p>
                    <p className="longComment">The paint on this Funko POP Vinyl has noticeable smudges, indicating a disappointing lack of quality control during production.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Mbappe pride on display</h3>
                    <p className="nameOfUser">by Emily on January 27, 2023</p>
                    <p className="longComment">With this Funko POP Vinyl, you can proudly display your love and support for Kylian Mbappe and his incredible football skills.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Well-crafted figure, captures Mbappe's essence</h3>
                    <p className="nameOfUser">by Benjamin on January 26, 2023</p>
                    <p className="longComment">This Funko POP Vinyl is a well-crafted figure that successfully captures the essence and charisma of Kylian Mbappe.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">Fragile construction, handle with care</h3>
                    <p className="nameOfUser">by Lily on January 25, 2023</p>
                    <p className="longComment">The construction of this Funko POP Vinyl is fragile and requires delicate handling to avoid any accidental damage.</p>
                </div>
                <div className="comentar">
                    <Stars1/>
                    <h3 className="shortComment">Inaccurate representation, disappointing purchase</h3>
                    <p className="nameOfUser">by William on January 24, 2023</p>
                    <p className="longComment">I'm disappointed with this Funko POP Vinyl as it fails to accurately represent Kylian Mbappe, falling short of my expectations.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Detailed sculpting and vibrant colors</h3>
                    <p className="nameOfUser">by Amelia on January 23, 2023</p>
                    <p className="longComment">The sculpting of this Funko POP Vinyl is highly detailed, and the vibrant colors make it visually appealing and engaging.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Great addition to my Mbappe collection</h3>
                    <p className="nameOfUser">by Alexander on January 22, 2023</p>
                    <p className="longComment">This Kylian Mbappe Funko POP Vinyl is a great addition to my growing collection of Mbappe-related merchandise.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">Expected better craftsmanship for the price</h3>
                    <p className="nameOfUser">by Isabella on

                        January 21, 2023</p>
                    <p className="longComment">Considering the price, I expected better craftsmanship for this Funko POP Vinyl. It falls short in terms of quality.</p>
                </div>
                <div className="comentar">
                    <Stars1/>
                    <h3 className="shortComment">Unstable base, challenging to display</h3>
                    <p className="nameOfUser">by James on January 20, 2023</p>
                    <p className="longComment">The base of this Funko POP Vinyl is unstable, making it challenging to display securely without the fear of it toppling over.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Celebrating Mbappe's talent in style</h3>
                    <p className="nameOfUser">by Olivia on January 19, 2023</p>
                    <p className="longComment">This Funko POP Vinyl celebrates Kylian Mbappe's exceptional talent in a stylish and collectible manner. A must-have for fans.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Affordable and appealing to football enthusiasts</h3>
                    <p className="nameOfUser">by Ethan on January 18, 2023</p>
                    <p className="longComment">This Funko POP Vinyl is both affordable and visually appealing, catering to the interests of football enthusiasts and collectors.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">Generic design, lacks individuality</h3>
                    <p className="nameOfUser">by Mia on January 17, 2023</p>
                    <p className="longComment">The design of this Funko POP Vinyl feels generic, lacking the individuality and uniqueness that would set it apart.</p>
                </div>
                <div className="comentar">
                    <Stars1/>
                    <h3 className="shortComment">Messy paint application, disappointing outcome</h3>
                    <p className="nameOfUser">by Noah on January 16, 2023</p>
                    <p className="longComment">The paint application on this Funko POP Vinyl is messy, resulting in a disappointing outcome that doesn't meet expectations.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A symbol of Mbappe's brilliance</h3>
                    <p className="nameOfUser">by Emily on January 15, 2023</p>
                    <p className="longComment">This Funko POP Vinyl serves as a symbolic representation of Kylian Mbappe's brilliance and prowess on the football field.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Captures Mbappe's dynamic personality</h3>
                    <p className="nameOfUser">by Benjamin on January 14, 2023</p>
                    <p className="longComment">The Funko POP Vinyl effectively captures Kylian Mbappe's dynamic personality and showcases his unique charm.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">Fragile construction, handle with care</h3>
                    <p className="nameOfUser">by Lily on January 13, 2023</p>
                    <p className="longComment">The construction of this Funko POP Vinyl feels fragile and requires cautious handling to avoid any accidental damage.</p>
                </div>
                <div className="comentar">
                    <

                        Stars1/>
                    <h3 className="shortComment">Inaccurate representation, disappointing purchase</h3>
                    <p className="nameOfUser">by William on January 12, 2023</p>
                    <p className="longComment">This Funko POP Vinyl disappoints with its inaccurate representation of Kylian Mbappe, failing to capture his distinctive features.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Exquisite sculpting and vibrant colors</h3>
                    <p className="nameOfUser">by Amelia on January 11, 2023</p>
                    <p className="longComment">The sculpting of this Funko POP Vinyl is exquisite, and the vibrant colors make it visually captivating and lively.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Perfect addition to my Mbappe collection</h3>
                    <p className="nameOfUser">by Alexander on January 10, 2023</p>
                    <p className="longComment">This Kylian Mbappe Funko POP Vinyl is a perfect addition to my expanding collection of Mbappe-themed collectibles.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">Craftsmanship falls short of expectations</h3>
                    <p className="nameOfUser">by Isabella on January 9, 2023</p>
                    <p className="longComment">The craftsmanship of this Funko POP Vinyl falls short of expectations, leaving room for improvement in terms of quality.</p>
                </div>
                <div className="comentar">
                    <Stars1/>
                    <h3 className="shortComment">Unstable base, challenging to display</h3>
                    <p className="nameOfUser">by James on January 8, 2023</p>
                    <p className="longComment">The base of this Funko POP Vinyl is unstable, posing a challenge when it comes to securely displaying the figure.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">A tribute to Mbappe's talent and dedication</h3>
                    <p className="nameOfUser">by Olivia on January 7, 2023</p>
                    <p className="longComment">This Funko POP Vinyl serves as a beautiful tribute to Kylian Mbappe's exceptional talent and unwavering dedication to the sport.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Affordable collectible for football fans</h3>
                    <p className="nameOfUser">by Ethan on January 6, 2023</p>
                    <p className="longComment">For football fans looking for an affordable collectible, this Funko POP Vinyl is a fantastic choice that doesn't break the bank.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">Lacks uniqueness and individuality</h3>
                    <p className="nameOfUser">by Mia on January 5, 2023</p>
                    <p className="longComment">This Funko POP Vinyl lacks the uniqueness and individuality that would make it truly stand out among other collectibles.</p>
                </div>
                </div>}
            {lang === "FR" && <div className={showReviews ? "reviewsContainerTS show" : "reviewsContainerTS"} onClick={(e)=> e.stopPropagation()}>
                <img className="closeGuide" src="https://i.pinimg.com/originals/52/e3/86/52e38681b082f94f2917624bb56edf42.png" alt="" onClick={()=> setShowReviews(false)}/>
                <h2>Commentaires</h2>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Superbe Funko POP Vinyl</h3>
                    <p className="nameOfUser">par Sarah le 7 juin 2023</p>
                    <p className="longComment">J'adore ce Funko POP Vinyl ! Les détails sur Kylian Mbappé (PSG) sont incroyables, et il ressemble exactement à lui. C'est un excellent ajout à ma collection.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Bel objet de collection</h3>
                    <p className="nameOfUser">par Mark le 6 juin 2023</p>
                    <p className="longComment">Le Funko POP Vinyl de Kylian Mbappé (PSG) est un bel objet de collection. La sculpture et la peinture sont bien réalisées, et il capture sa ressemblance. Satisfait de mon achat.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">Funko POP Vinyl correct</h3>
                    <p className="nameOfUser">par Emily le 5 juin 2023</p>
                    <p className="longComment">Le Funko POP Vinyl de Kylian Mbappé (PSG) est correct. La qualité est correcte, mais la peinture pourrait être meilleure. C'est un ajout moyen à ma collection.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Cadeau parfait pour les fans de football</h3>
                    <p className="nameOfUser">par Michael le 4 juin 2023</p>
                    <p className="longComment">J'ai acheté ce Funko POP Vinyl de Kylian Mbappé (PSG) comme cadeau pour mon ami qui est un grand fan de football. Il l'a absolument adoré ! Les détails sont impressionnants, et c'est un incontournable pour tout fan de Mbappé.</p>
                </div>
                <div className="comentar">
                    <Stars2/>
                    <h3 className="shortComment">Déçu par la qualité</h3>
                    <p className="nameOfUser">par Lisa le 3 juin 2023</p>
                    <p className="longComment">Je suis déçu par la qualité de ce Funko POP Vinyl. La peinture est négligée, et la figurine semble fragile. Pas digne du prix.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Bel ajout à ma collection</h3>
                    <p className="nameOfUser">par Robert le 2 juin 2023</p>
                    <p className="longComment">Je collectionne les Funko POP Vinyls, et l'ajout de Kylian Mbappé (PSG) à ma collection était un bon choix. Les détails sont bons, et c'est une représentation cool de Mbappé.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Funko POP Vinyl très détaillé</h3>
                    <p className="nameOfUser">par Samantha le 1er juin 2023</p>
                    <p className="longComment">Ce Funko POP Vinyl de Kylian Mbappé (PSG) est très détaillé. Les traits du visage et

                        la tenue sont fidèles. C'est un must pour tout fan de Mbappé ou de football.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">Funko POP Vinyl de qualité moyenne</h3>
                    <p className="nameOfUser">par Matthew le 31 mai 2023</p>
                    <p className="longComment">La qualité de ce Funko POP Vinyl est moyenne. Il a l'air correct de loin, mais de près, on peut voir quelques défauts dans la peinture et la sculpture.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Grande ressemblance avec Mbappé</h3>
                    <p className="nameOfUser">par Jennifer le 30 mai 2023</p>
                    <p className="longComment">Le Funko POP Vinyl de Kylian Mbappé (PSG) a une grande ressemblance avec lui. Les détails sont impressionnants, et c'est une belle représentation de la star du football.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Satisfait de mon achat</h3>
                    <p className="nameOfUser">par David le 29 mai 2023</p>
                    <p className="longComment">Je suis satisfait de mon achat du Funko POP Vinyl de Kylian Mbappé (PSG). Il est arrivé en bon état, et la figurine est superbe sur mon étagère.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Impressionnant objet de collection</h3>
                    <p className="nameOfUser">par Amanda le 28 mai 2023</p>
                    <p className="longComment">Ce Funko POP Vinyl de Kylian Mbappé (PSG) est un impressionnant objet de collection. Les détails sont impressionnants, et c'est un must pour tout fan de Mbappé.</p>
                </div>
                <div className="comentar">
                    <Stars2/>
                    <h3 className="shortComment">Mauvaise qualité de peinture</h3>
                    <p className="nameOfUser">par Daniel le 27 mai 2023</p>
                    <p className="longComment">La peinture sur ce Funko POP Vinyl est de mauvaise qualité. Il y a des traces et des incohérences dans les couleurs. Déçu par la qualité globale.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Détails impressionnants sur Mbappé</h3>
                    <p className="nameOfUser">par Laura le 26 mai 2023</p>
                    <p className="longComment">Les détails sur Kylian Mbappé (PSG) dans ce Funko POP Vinyl sont impressionnants. Il capture sa ressemblance et a fière allure avec mes autres objets de collection de football.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Bon ajout à ma collection Funko</h3>
                    <p className="nameOfUser">par Christopher le 25 mai 2023</p>
                    <p className="longComment">Ajouter Kylian Mbappé (PSG) à ma collection Funko était une bonne décision. La figurine

                        est bien réalisée, et c'est une belle représentation de Mbappé en tant que joueur de football.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">Funko POP Vinyl moyen</h3>
                    <p className="nameOfUser">par Rebecca le 24 mai 2023</p>
                    <p className="longComment">Ce Funko POP Vinyl de Kylian Mbappé (PSG) est moyen. Les détails pourraient être meilleurs, et il manque l'effet "wow" par rapport à certaines autres figurines de ma collection.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Vivement recommandé aux fans de football</h3>
                    <p className="nameOfUser">par Patrick le 23 mai 2023</p>
                    <p className="longComment">En tant que fan de football, je recommande vivement ce Funko POP Vinyl de Kylian Mbappé (PSG). Les détails sont impressionnants, et c'est un excellent moyen de montrer son soutien à Mbappé.</p>
                </div>
                <div className="comentar">
                    <Stars2/>
                    <h3 className="shortComment">Pas valable pour le prix</h3>
                    <p className="nameOfUser">par Jessica le 22 mai 2023</p>
                    <p className="longComment">Je m'attendais à une meilleure qualité pour le prix que j'ai payé pour ce Funko POP Vinyl. La peinture est bâclée et il y a des défauts visibles sur la figurine.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Ressemblance fantastique avec Mbappé</h3>
                    <p className="nameOfUser">par Thomas le 21 mai 2023</p>
                    <p className="longComment">Le Funko POP Vinyl de Kylian Mbappé (PSG) a une ressemblance fantastique avec la star du football. Les détails sont fidèles, et c'est un excellent ajout à ma collection.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Bon rapport qualité-prix</h3>
                    <p className="nameOfUser">par Rachel le 20 mai 2023</p>
                    <p className="longComment">Étant donné le prix, ce Funko POP Vinyl de Kylian Mbappé (PSG) offre un bon rapport qualité-prix. La qualité est correcte, et il a belle allure en exposition.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">Objet de collection moyen</h3>
                    <p className="nameOfUser">par Andrew le 19 mai 2023</p>
                    <p className="longComment">Ce Funko POP Vinyl de Kylian Mbappé (PSG) est un objet de collection moyen. Rien d'exceptionnel, mais c'est une représentation décente de Mbappé.</p>
                </div>
                <div className="comentar">
                    <Stars1/>
                    <h3 className="shortComment">Déçu par la qualité</h3>
                    <p className="nameOfUser">par Emma le 18 mai 2023</p>
                    <p className="longComment">Je suis déçu par la qualité de ce Funko POP Vinyl. La peinture est écaillée et la figurine semble fragile. Pas digne de l'achat.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Bien réalisé et détaillé</h3>
                    <p className="nameOfUser">par James le 17 mai 2023</p>
                    <p className="longComment">Ce Funko POP Vinyl de Kylian Mbappé (PSG) est bien réalisé et détaillé. La sculpture est impressionnante, et c'est une excellente représentation de Mbappé en tant que joueur de football.</p

                    >
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Satisfait de mon achat</h3>
                    <p className="nameOfUser">par Natalie le 16 mai 2023</p>
                    <p className="longComment">Je suis satisfait de mon achat du Funko POP Vinyl de Kylian Mbappé (PSG). Il est arrivé en bon état, et la figurine a belle allure sur mon bureau.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">Correct mais pas exceptionnel</h3>
                    <p className="nameOfUser">par William le 15 mai 2023</p>
                    <p className="longComment">Ce Funko POP Vinyl de Kylian Mbappé (PSG) est correct, mais il manque le facteur "wow". Les détails sont corrects, mais j'attendais plus d'un objet de collection.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Ajout impressionnant à ma collection</h3>
                    <p className="nameOfUser">par Samantha le 14 mai 2023</p>
                    <p className="longComment">Je suis impressionné par ce Funko POP Vinyl de Kylian Mbappé (PSG). Les détails sont remarquables, et c'est une pièce remarquable dans ma collection.</p>
                </div>
                <div className="comentar">
                    <Stars2/>
                    <h3 className="shortComment">Figurine mal peinte</h3>
                    <p className="nameOfUser">par Daniel le 13 mai 2023</p>
                    <p className="longComment">La peinture sur ce Funko POP Vinyl est mal réalisée. Il y a des traces et une application inégale. Qualité décevante.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Excellent cadeau pour les amateurs de football</h3>
                    <p className="nameOfUser">par Stephanie le 12 mai 2023</p>
                    <p className="longComment">J'ai acheté ce Funko POP Vinyl de Kylian Mbappé (PSG) en cadeau pour mon frère, qui est un grand fan de football. Il l'a adoré ! Les détails sont impressionnants, et c'est un fantastique ajout à sa collection.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Figurine bien réalisée</h3>
                    <p className="nameOfUser">par Jonathan le 11 mai 2023</p>
                    <p className="longComment">Le Funko POP Vinyl de Kylian Mbappé (PSG) est bien réalisé. Les détails sur la figurine sont bien définis, et c'est un ajout solide à ma collection de Funko.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">Qualité moyenne pour le prix</h3>
                    <p className="nameOfUser">par Megan le 10 mai 2023</p>
                    <p className="longComment">En tenant compte du prix, la qualité de ce Funko POP Vinyl est moyenne. Ce n'est pas exceptionnel, mais c'est tout de même une représentation décente de Mbappé.</p>
                </

                    div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Ressemblance impressionnante de Mbappé</h3>
                    <p className="nameOfUser">par Joshua le 9 mai 2023</p>
                    <p className="longComment">Le Funko POP Vinyl de Kylian Mbappé (PSG) présente une ressemblance impressionnante avec la star du football. Les traits du visage et la tenue sont représentés de manière précise. Superbe objet de collection.</p>
                </div>
                <div className="comentar">
                    <Stars2/>
                    <h3 className="shortComment">Trop cher pour la qualité</h3>
                    <p className="nameOfUser">par Emily le 8 mai 2023</p>
                    <p className="longComment">J'espérais une meilleure qualité pour le prix que j'ai payé pour ce Funko POP Vinyl. La peinture est bâclée, et il y a des imperfections visibles.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Superbe figurine de Mbappé</h3>
                    <p className="nameOfUser">par Michael le 7 mai 2023</p>
                    <p className="longComment">Ce Funko POP Vinyl de Kylian Mbappé (PSG) est une figurine superbe. Les détails sont impressionnants, et c'est un must pour tout fan de Mbappé.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Bon ajout à ma collection</h3>
                    <p className="nameOfUser">par Elizabeth le 6 mai 2023</p>
                    <p className="longComment">Je suis content de mon achat du Funko POP Vinyl de Kylian Mbappé (PSG). C'est un bon ajout à ma collection, et la figurine a belle allure en exposition.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">Qualité pas la meilleure</h3>
                    <p className="nameOfUser">par Benjamin le 5 mai 2023</p>
                    <p className="longComment">La qualité de ce Funko POP Vinyl n'est pas la meilleure. La peinture est bâclée, et il y a des défauts visibles sur la figurine.</p>
                </div>

                <div className="comentar">
                    <Stars1/>
                    <h3 className="shortComment">Arrivé endommagé</h3>
                    <p className="nameOfUser">par Olivia le 4 mai 2023</p>
                    <p className="longComment">J'ai été déçu lorsque ce Funko POP Vinyl de Kylian Mbappé (PSG) est arrivé endommagé. La boîte était écrasée et la figurine avait le bras cassé.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Cadeau parfait pour les amateurs de football</h3>
                    <p className="nameOfUser">par Christopher le 3 mai 2023</p>
                    <p className="longComment">J'ai acheté ce Funko POP Vinyl de Kylian Mbappé (PSG) comme cadeau pour mon ami qui est un grand fan de Mbappé. Il était ravi ! La figurine capture magnifiquement la ressemblance de Mbappé.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Bien fait et détaillé</h3>
                    <p className="nameOfUser">par Victoria le 2 mai 2023</p>
                    <p className="longComment">Ce Funko POP Vinyl de Kylian Mbappé (PSG) est bien fait et détaillé. La sculpture et la peinture sont impressionnantes, et c'est un excellent ajout à toute collection.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">Figurine de collection moyenne</h3>
                    <p className="nameOfUser">par Richard le 1er mai 2023</p>
                    <p className="longComment">Ce Funko POP Vinyl de Kylian Mbappé (PSG) est une figurine de collection moyenne. Les détails sont corrects, mais elle ne se démarque pas par rapport à certaines autres figurines de ma collection.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">J'adore le design de Mbappé</h3>
                    <p className="nameOfUser">par Sarah le 30 avril 2023</p>
                    <p className="longComment">J'adore le design de ce Funko POP Vinyl avec Kylian Mbappé (PSG). Les couleurs sont vives, et c'est une excellente représentation du look emblématique de Mbappé.</p>
                </div>
                <div className="comentar">
                    <Stars2/>
                    <h3 className="shortComment">Déçu par la qualité</h3>
                    <p className="nameOfUser">par Matthew le 29 avril 2023</p>
                    <p className="longComment">La qualité de ce Funko POP Vinyl est décevante. La peinture est bâclée, et il y a des défauts visibles sur la figurine.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Superbe figurine pour les fans de football</h3>
                    <p className="nameOfUser">par Jennifer le 28 avril 2023</p>
                    <p className="longComment">Ce Funko POP Vinyl de Kylian Mbappé (PSG) est une superbe figurine pour les fans de football. Les détails sont impressionnants, et c'est une pièce remarquable dans ma collection.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Bon rapport qualité-prix</h3>
                    <p className="nameOfUser">par Daniel le 27 avril 2023</p>
                    <p className="longComment">Compte tenu du prix, ce Funko POP Vinyl de Kylian Mbappé (PSG) offre un bon rapport qualité-prix. La figurine est bien faite et a fière allure en exposition.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">Figurine de qualité moyenne</h3>
                    <p className="nameOfUser">par Amanda le 26 avril 2023</p>
                    <p className="longComment">La qualité de ce Funko POP Vinyl est moyenne. Ce n'est pas exceptionnel, mais c'est tout de même un ajout décent à ma collection.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Attention impressionnante aux détails</h3>
                    <p className="nameOfUser">par Justin le 25 avril 2023</p>
                    <p className="longComment">Je suis impressionné par l'attention portée aux détails de ce Funko POP Vinyl de Kylian Mbappé (PSG). Les traits du visage et l'uniforme sont représentés de manière précise.</p>
                </div>
                <div className="comentar">
                    <Stars2/>
                    <h3 className="shortComment">Pas digne de son prix</h3>
                    <p className="nameOfUser">par Samantha le 24 avril 2023</p>
                    <p className="longComment">Je ne pense pas que ce Funko POP Vinyl soit digne de son prix. La qualité est médiocre, et il existe de meilleures options disponibles.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Parfait pour compléter ma collection Mbappé</h3>
                    <p className="nameOfUser">par David le 23 avril 2023</p>
                    <p className="longComment">Ce Funko POP Vinyl de Kylian Mbappé (PSG) est parfait pour compléter ma collection Mbappé. La figurine capture sa ressemblance et est une superbe pièce d'exposition.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Bonne figurine de collection</h3>
                    <p className="nameOfUser">par Laura le 22 avril 2023</p>
                    <p className="longComment">Le Funko POP Vinyl de Kylian Mbappé (PSG) est une bonne figurine de collection. Les détails sont bien définis, et c'est un bel ajout à ma collection.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">Pourrait être meilleur</h3>
                    <p className="nameOfUser">par Brian le 21 avril 2023</p>
                    <p className="longComment">Ce Funko POP Vinyl pourrait être meilleur. La peinture est moyenne, et il y a de légers défauts sur la figurine.</p>
                </div>
                <div className="comentar">
                    <Stars1/>
                    <h3 className="shortComment">Arrivé endommagé et mal fait</h3>
                    <p className="nameOfUser">par Jessica le 20 avril 2023</p>
                    <p className="longComment">J'ai été extrêmement déçu lorsque ce Funko POP Vinyl est arrivé endommagé. La figurine semble également mal faite, avec des pièces lâches.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Superbe cadeau pour les amateurs de football</h3>
                    <p className="nameOfUser">par Christopher le 19 avril 2023</p>
                    <p className="longComment">J'ai acheté ce Funko POP Vinyl de Kylian Mbappé (PSG) comme cadeau pour mon ami qui est un grand fan de football. Il en était ravi ! La figurine est bien conçue et capture l'essence de Mbappé.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Figurine joliment détaillée</h3>
                    <p className="nameOfUser">par Samantha le 18 avril 2023</p>
                    <p className="longComment">Le Funko POP Vinyl de Kylian Mbappé (PSG) est joliment détaillé. Les traits du visage et l'uniforme sont bien représentés, et c'est un ajout solide à ma collection.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">Figurine de collection moyenne</h3>
                    <p className="nameOfUser">par Matthew le 17 avril 2023</p>
                    <p className="longComment">Ce Funko POP Vinyl de Kylian Mbappé (PSG) est une figurine de collection moyenne. Elle ne présente aucune caractéristique remarquable, mais elle a tout de même fière allure en exposition.</p>
                </div>
                <div className="comentar">
                    <Stars1/>
                    <h3 className="shortComment">Déçu par la qualité</h3>
                    <p className="nameOfUser">par Jennifer le 16 avril 2023</p>
                    <p className="longComment">La qualité de ce Funko POP Vinyl est décevante. La peinture est bâclée, et il y a des défauts visibles sur la figurine.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Superbe figurine de Mbappé</h3>
                    <p className="nameOfUser">par Daniel le 15 avril 2023</p>
                    <p className="longComment">Je suis vraiment content de cette Funko POP Vinyl de Kylian Mbappé (PSG). La figurine est superbe et les détails sont impressionnants.</p>
                </div>
                <div className="comentar">
                    <Stars2/>
                    <h3 className="shortComment">Pas à la hauteur du prix</h3>
                    <p className="nameOfUser">par Amanda le 14 avril 2023</p>
                    <p className="longComment">Je ne pense pas que cette Funko POP Vinyl vaille son prix. La qualité est médiocre, et il y a de meilleures options disponibles pour le même coût.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Excellent ajout à ma collection Funko</h3>
                    <p className="nameOfUser">par Jonathan le 13 avril 2023</p>
                    <p className="longComment">Cette Funko POP Vinyl de Kylian Mbappé (PSG) est un excellent ajout à ma collection Funko. La figurine est bien faite et le design est impressionnant.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Représentation solide de Mbappé</h3>
                    <p className="nameOfUser">par Emily le 12 avril 2023</p>
                    <p className="longComment">Cette Funko POP Vinyl de Kylian Mbappé (PSG) est une représentation solide du joueur. Les détails sont bien réalisés et c'est un bel objet de collection.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">Figurine correcte</h3>
                    <p className="nameOfUser">par Michael le 11 avril 2023</p>
                    <p className="longComment">Cette Funko POP Vinyl de Kylian Mbappé (PSG) est une figurine correcte. Elle n'a pas de défauts majeurs, mais elle ne se démarque pas non plus par rapport à d'autres objets de collection.</p>
                </div>
                <div className="comentar">
                    <Stars1/>
                    <h3 className="shortComment">Contrôle qualité médiocre</h3>
                    <p className="nameOfUser">par Olivia le 10 avril 2023</p>
                    <p className="longComment">La Funko POP Vinyl est arrivée avec des taches de peinture et des égratignures. C'est décevant de constater un si mauvais contrôle qualité.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Figurine impressionnante de Mbappé</h3>
                    <p className="nameOfUser">par Christopher le 9 avril 2023</p>
                    <p className="longComment">Je suis impressionné par cette Funko POP Vinyl de Kylian Mbappé (PSG). La sculpture et les détails sont de grande qualité, ce qui en fait un objet remarquable dans ma collection.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Bon objet de collection pour les fans de Mbappé</h3>
                    <p className="nameOfUser">par Victoria le 8 avril 2023</p>
                    <p className="longComment">Cette Funko POP Vinyl de Kylian Mbappé (PSG) est un bon objet de collection pour les fans de Mbappé. La figurine capture bien sa ressemblance et constitue un bel ajout à toute collection.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">Qualité moyenne pour le prix</h3>
                    <p className="nameOfUser">par Benjamin le 7 avril 2023</p>
                    <p className="longComment">Vu le prix, la qualité de cette Funko POP Vinyl est moyenne. Ce n'est ni exceptionnel, ni terrible.</p>
                </div>
                <div className="comentar">
                    <Stars2/>
                    <h3 className="shortComment">Déçu par la peinture</h3>
                    <p className="nameOfUser">par Sophia le 6 avril 2023</p>
                    <p className="longComment">La peinture sur cette Funko POP Vinyl de Kylian Mbappé (PSG) est décevante. Il y a des taches et des incohérences visibles.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Je recommande vivement aux fans de football</h3>
                    <p className="nameOfUser">par Thomas le 5 avril 2023</p>
                    <p className="longComment">En tant que fan de football, je recommande vivement cette Funko POP Vinyl de Kylian Mbappé (PSG). C'est une excellente représentation d'un des meilleurs joueurs du monde.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Bien emballé et arrivé en parfait état</h3>
                    <p className="nameOfUser">par Natalie le 4 avril 2023</p>
                    <p className="longComment">J'ai été satisfait de l'emballage soigné de cette Funko POP Vinyl. Elle est arrivée en parfait état, sans aucun dommage.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">Figurine moyenne, rien d'extraordinaire</h3>
                    <p className="nameOfUser">par Liam le 3 avril 2023</p>
                    <p className="longComment">Cette Funko POP Vinyl de Kylian Mbappé (PSG) est une figurine moyenne. Elle n'offre rien d'extraordinaire en termes de design ou de qualité.</p>
                </div>
                <div className="comentar">
                    <Stars1/>
                    <h3 className="shortComment">Pièces manquantes et service client médiocre</h3>
                    <p className="nameOfUser">par Isabella le 2 avril 2023</p>
                    <p className="longComment">La Funko POP Vinyl est arrivée avec des pièces manquantes et lorsque j'ai contacté le service client, ils ont été peu serviables et négligents.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Grande attention aux détails</h3>
                    <p className="nameOfUser">par Ethan le 1 avril 2023</p>
                    <p className="longComment">L'attention portée aux détails sur cette Funko POP Vinyl est impressionnante. Les traits du visage, la tenue vestimentaire et même les accessoires miniatures sont bien réalisés.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Bonne ressemblance avec Mbappé</h3>
                    <p className="nameOfUser">par Lily le 31 mars 2023</p>
                    <p className="longComment">Cette Funko POP Vinyl fait un bon travail pour capturer la ressemblance de Kylian Mbappé (PSG). Il est instantanément reconnaissable.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">Qualité moyenne pour le prix</h3>
                    <p className="nameOfUser">par Samuel le 30 mars 2023</p>
                    <p className="longComment">Vu le prix, la qualité de cette Funko POP Vinyl est moyenne. Elle n'est ni exceptionnelle, ni décevante.</p>
                </div>
                <div className="comentar">
                    <Stars1/>
                    <h3 className="shortComment">Arrivé endommagé et mal emballé</h3>
                    <p className="nameOfUser">par Harper le 29 mars 2023</p>
                    <p className="longComment">La Funko POP Vinyl est arrivée endommagée et il était clair que l'emballage offert ne protégeait pas suffisamment pendant le transport.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Les fans de Mbappé vont l'adorer</h3>
                    <p className="nameOfUser">par David le 28 mars 2023</p>
                    <p className="longComment">Si vous êtes fan de Kylian Mbappé, vous allez adorer cette Funko POP Vinyl. C'est un bel hommage à son talent de footballeur.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Bon ajout à toute collection de football</h3>
                    <p className="nameOfUser">par Olivia le 27 mars 2023</p>
                    <p className="longComment">Cette Funko POP Vinyl de Kylian Mbappé (PSG) est un bon ajout à toute collection sur le thème du football. Elle ajoute de la variété et représente un joueur populaire.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">Moins détaillé que prévu</h3>
                    <p className="nameOfUser">par Alexander le 26 mars 2023</p>
                    <p className="longComment">Le niveau de détail sur cette Funko POP Vinyl n'est pas aussi élevé que prévu. Il aurait pu être plus complexe et raffiné.</p>
                </div>
                <div className="comentar">
                    <Stars1/>
                    <h3 className="shortComment">Fragile et facilement cassable</h3>
                    <p className="nameOfUser">par Amelia le 25 mars 2023</p>
                    <p className="longComment">La construction de cette Funko POP Vinyl est fragile et elle se casse facilement. Il faut en prendre grand soin.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Superbe qualité, je suis satisfait</h3>
                    <p className="nameOfUser">par Noah le 24 mars 2023</p>
                    <p className="longComment">La qualité de cette Funko POP Vinyl est superbe. Les couleurs sont vives, les détails sont nets et c'est un excellent ajout à ma collection.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Belle figurine de Mbappé</h3>
                    <p className="nameOfUser">par Ava le 23 mars 2023</p>
                    <p className="longComment">Cette Funko POP Vinyl de Kylian Mbappé (PSG) est une belle figurine. Elle est bien faite et représente fidèlement le joueur.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Bon rapport qualité-prix</h3>
                    <p className="nameOfUser">par Chloé le 23 mars 2023</p>
                    <p className="longComment">Vu le prix, cette Funko POP Vinyl offre un bon rapport qualité-prix. C'est un objet de collection décent sans se ruiner.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">Pas la meilleure représentation de Mbappé</h3>
                    <p className="nameOfUser">par Andrew le 22 mars 2023</p>
                    <p className="longComment">Cette Funko POP Vinyl ne rend pas justice à la ressemblance de Kylian Mbappé. Elle ne parvient pas à capturer ses traits distinctifs.</p>
                </div>
                <div className="comentar">
                    <Stars1/>
                    <h3 className="shortComment">À éviter, mauvaise qualité</h3>
                    <p className="nameOfUser">par Grace le 21 mars 2023</p>
                    <p className="longComment">Je déconseille fortement l'achat de cette Funko POP Vinyl. La qualité globale est médiocre, elle ne vaut pas l'argent dépensé.</p>
                </div>
                <div className="comentar">
                    <Stars5/>
                    <h3 className="shortComment">Un incontournable pour les fans de Mbappé</h3>
                    <p className="nameOfUser">par Benjamin le 20 mars 2023</p>
                    <p className="longComment">Si vous êtes fan de Kylian Mbappé, cette Funko POP Vinyl est un incontournable. C'est un bel hommage à son talent et à ses réalisations.</p>
                </div>
                <div className="comentar">
                    <Stars4/>
                    <h3 className="shortComment">Objet de collection satisfaisant pour les amateurs de football</h3>
                    <p className="nameOfUser">par Emily le 19 mars 2023</p>
                    <p className="longComment">En tant qu'amateur de football, je trouve cette Funko POP Vinyl satisfaisante. Ce n'est pas extraordinaire, mais c'est agréable à avoir dans ma collection.</p>
                </div>
                <div className="comentar">
                    <Stars3/>
                    <h3 className="shortComment">Figurine moyenne, manque d'originalité</h3>
                    <p className="nameOfUser">par Daniel le 18 mars 2023</p>
                    <p className="longComment">Cette Funko POP Vinyl de Kylian Mbappé (PSG) est une figurine moyenne. Elle manque d'originalité et de charme par rapport à d'autres objets de collection.</p>
                </div>
                <div className="comentar">
                    <Stars1/>
                    <h3 className="shortComment">Déçu par la qualité globale</h3>
                    <p className="nameOfUser">par Charlotte le 17 mars 2023</p>
                    <p className="longComment">Je suis déçu par la qualité globale de cette Funko POP Vinyl. Elle semble bon marché et mal fabriquée.</p>
                </div>
            </div>}
        </div>
    );
};


export default ReviewsMbappe;
import React from 'react';
import './Reviews.css'
import {Stars5, Stars2, Stars4, Stars1, Stars3} from "../Stars/Stars";

const ReviewsFlag = ({setShowReviews, showReviews, lang}) => {
    return (
        <div className={showReviews ? "reviewsTS show" : "reviewsTS"} onClick={() => setShowReviews(false)}>

            {lang === "EN" && <div className={showReviews ? "reviewsContainerTS show" : "reviewsContainerTS"}
                 onClick={(e) => e.stopPropagation()}>
                <img className="closeGuide"
                     src="https://i.pinimg.com/originals/52/e3/86/52e38681b082f94f2917624bb56edf42.png" alt=""
                     onClick={() => setShowReviews(false)}/>
                <h2>Reviews</h2>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Vive la France!</h3>
                    <p className="nameOfUser">by Sophie on June 1, 2023</p>
                    <p className="longComment">Celebrate your love for France with this fantastic flag decoration. It's perfect for showing your support during national celebrations and sporting events. Vive la France!</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">High-quality flag</h3>
                    <p className="nameOfUser">by Antoine on May 30, 2023</p>
                    <p className="longComment">The France Flag Fancy Dress Decoration is made of high-quality materials and features grommets for easy attachment to poles. It's a durable and beautiful flag to display.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Perfect for football fans</h3>
                    <p className="nameOfUser">by Lucas on May 28, 2023</p>
                    <p className="longComment">If you're a football fan, this French flag is a must-have. Hang it up during matches and feel the excitement as you cheer for your favorite team.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Capture the moment</h3>
                    <p className="nameOfUser">by Emma on May 25, 2023</p>
                    <p className="longComment">With the France Flag Fancy Dress Decoration, you can capture the memorable moments of national celebrations and sporting events. Take photos and share the joy with friends and family.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Authentic French flag</h3>
                    <p className="nameOfUser">by Olivier on May 23, 2023</p>
                    <p className="longComment">The French Large Flag with Grommets is the perfect way to show your love for France. Its authentic design and vibrant colors make it a standout decoration.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Great for street parties</h3>
                    <p className="nameOfUser">by Camille on May 20, 2023</p>
                    <p className="longComment">Planning a street party? The France Flag Fancy Dress Decoration is an essential item. It adds a festive touch to the celebration and creates a sense of unity.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Impressively large size</h3>
                    <p className="nameOfUser">by Maxime on May 18, 2023</p>
                    <p className="longComment">The large size of this French flag (5ft x 3ft) ensures it grabs everyone's attention. It's a bold and eye-catching decoration for any event.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Versatile decoration</h3>
                    <p className="nameOfUser">by Sophie on May 15, 2023</p>
                    <p className="longComment">Whether it's a football match, rugby game, or national celebration, this French flag is a versatile decoration that adds a touch of patriotism to any occasion.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Durable and long-lasting</h3>
                    <p className="nameOfUser">by Louis on May 13, 2023</p>
                    <p className="longComment">The France Flag Fancy Dress Decoration is made to withstand outdoor conditions. Its sturdy construction ensures it will last for multiple celebrations and events.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Easy to hang</h3>
                    <p className="nameOfUser">by Isabelle on May 10, 2023</p>
                    <p className="longComment">With grommets (eyelets) for attachment, hanging the French flag is a breeze. It takes just minutes to set up and instantly adds a festive atmosphere.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Support your team in style</h3>
                    <p className="nameOfUser">by Alexandre on May 8, 2023</p>
                    <p className="longComment">Cheer for your team with this stylish French flag. Whether it's a football match or rugby tournament, you'll stand out in the crowd with your patriotic spirit.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Highly recommended</h3>
                    <p className="nameOfUser">by Emma on May 5, 2023</p>
                    <p className="longComment">I highly recommend the France Flag Fancy Dress Decoration. It's a fantastic way to show your love for France and add a festive touch to any event.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Perfect for festivals</h3>
                    <p className="nameOfUser">by Pierre on May 3, 2023</p>
                    <p className="longComment">Planning to attend a festival? Don't forget to bring your French flag. It's a great way to join the celebration and show your enthusiasm.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Symbol of unity</h3>
                    <p className="nameOfUser">by Charlotte on April 30, 2023</p>
                    <p className="longComment">The France Flag Fancy Dress Decoration represents unity and national pride. Hang it up and let everyone know that you stand together as one.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Highly durable</h3>
                    <p className="nameOfUser">by Mathieu on April 28, 2023</p>
                    <p className="longComment">I've used this French flag for multiple events, and it has held up incredibly well. It's built to last and can withstand various weather conditions.</p>
                </div>







                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Excellent for outdoor use</h3>
                    <p className="nameOfUser">by Isabella on April 25, 2023</p>
                    <p className="longComment">Planning an outdoor celebration? The France Flag Fancy Dress Decoration is a fantastic addition. It adds a festive touch and can withstand wind and rain.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Great value for money</h3>
                    <p className="nameOfUser">by Olivier on April 23, 2023</p>
                    <p className="longComment">Considering its size and quality, this French flag offers excellent value for money. You won't be disappointed with your purchase.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Impressive design</h3>
                    <p className="nameOfUser">by Emma on April 20, 2023</p>
                    <p className="longComment">The design of this French flag is truly impressive. Its vibrant colors and precise details make it a standout decoration for any occasion.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Easy to store</h3>
                    <p className="nameOfUser">by Lucas on April 18, 2023</p>
                    <p className="longComment">After the celebration, you can easily fold and store the France Flag Fancy Dress Decoration. It doesn't take up much space and can be reused for future events.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Perfect for all ages</h3>
                    <p className="nameOfUser">by Sophie on April 15, 2023</p>
                    <p className="longComment">Whether you're young or young at heart, this French flag is perfect for all ages. It brings joy and a sense of belonging to everyone who sees it.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">A must-have for French fans</h3>
                    <p className="nameOfUser">by Antoine on April 13, 2023</p>
                    <p className="longComment">If you're a passionate fan of France, this flag is a must-have. It's an essential accessory to show your support and enthusiasm.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Great for school events</h3>
                    <p className="nameOfUser">by Camille on April 10, 2023</p>
                    <p className="longComment">Teachers and students alike will appreciate the France Flag Fancy Dress Decoration for school events. It's a symbol of unity and can be used for educational purposes.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Perfect for photo booths</h3>
                    <p className="nameOfUser">by Maxime on April 8, 2023</p>
                    <p className="longComment">Setting up a photo booth at your event? Don't forget to include the French flag. It's a fantastic prop for capturing memorable moments.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Highly recommended for parties</h3>
                    <p className="nameOfUser">by Emma on April 5, 2023</p>
                    <p className="longComment">I used the France Flag Fancy Dress Decoration for my party, and it was a hit. It added a festive atmosphere and made everyone feel the spirit of France.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Show your love for French sports</h3>
                    <p className="nameOfUser">by Olivier on April 3, 2023</p>
                    <p className="longComment">Whether it's football, rugby, or any other sport, this flag is a perfect way to show your support for French athletes. Wave it proudly!</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Easy to transport</h3>
                    <p className="nameOfUser">by Sophie on March 31, 2023</p>
                    <p className="longComment">Taking the French flag to an event? No worries! It's lightweight and easy to transport. You can bring it with you wherever you go.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Create lasting memories</h3>
                    <p className="nameOfUser">by Lucas on March 29, 2023</p>
                    <p className="longComment">With the France Flag Fancy Dress Decoration, you'll create lasting memories. It's a symbol of joy and celebration that you'll cherish for years to come.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Perfect for French-themed parties</h3>
                    <p className="nameOfUser">by Isabelle on March 26, 2023</p>
                    <p className="longComment">Hosting a French-themed party? This flag is a must-have decoration. It sets the ambiance and adds a touch of authenticity to your event.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Great for sports bars</h3>
                    <p className="nameOfUser">by Alexandre on March 24, 2023</p>
                    <p className="longComment">If you own a sports bar, consider hanging the French flag during important matches. It will create a vibrant and supportive atmosphere for your customers.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Easy to clean</h3>
                    <p className="nameOfUser">by Emma on March 21, 2023</p>
                    <p className="longComment">Accidents happen, but cleaning the France Flag Fancy Dress Decoration is a breeze. Simply spot clean or hand wash, and it will be ready for your next celebration.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Support French culture</h3>
                    <p className="nameOfUser">by Pierre on March 19, 2023</p>
                    <p className="longComment">Displaying the French flag is a way to show your appreciation for French culture and heritage. It's a beautiful symbol that unites people around the world.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Attention-grabbing decoration</h3>
                    <p className="nameOfUser">by Charlotte on March 16, 2023</p>
                    <p className="longComment">If you want your event to stand out, the France Flag Fancy Dress Decoration is a must. Its vibrant colors and large size will grab everyone's attention.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Celebrate French achievements</h3>
                    <p className="nameOfUser">by Mathieu on March 14, 2023</p>
                    <p className="longComment">From sports victories to cultural milestones, the French flag is a symbol of celebration for all the achievements of France and its people.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Versatile and multi-purpose</h3>
                    <p className="nameOfUser">by Isabella on March 11, 2023</p>
                    <p className="longComment">Not limited to sports events, the French flag can be used for street parties, festivals, and various celebrations. Its versatility makes it a valuable decoration.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Express your national pride</h3>
                    <p className="nameOfUser">by Olivier on March 9, 2023</p>
                    <p className="longComment">There's no better way to express your love for France than by proudly displaying the French flag. It's a symbol of pride and belonging.</p>
                </div>










                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Enhance your event's atmosphere</h3>
                    <p className="nameOfUser">by Emma on March 6, 2023</p>
                    <p className="longComment">Whether it's a small gathering or a large celebration, the France Flag Fancy Dress Decoration adds a festive touch and enhances the overall atmosphere.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Great for international gatherings</h3>
                    <p className="nameOfUser">by Sophie on March 4, 2023</p>
                    <p className="longComment">If you're hosting an international event, the French flag is a fantastic way to represent France and make your guests feel welcome.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Boost team spirit</h3>
                    <p className="nameOfUser">by Lucas on March 1, 2023</p>
                    <p className="longComment">Whether you're part of a sports team or a group of friends, waving the French flag together boosts team spirit and creates a sense of camaraderie.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Bring the stadium atmosphere home</h3>
                    <p className="nameOfUser">by Isabelle on February 27, 2023</p>
                    <p className="longComment">Can't make it to the stadium? No problem! Hang the French flag at home, invite your friends, and experience the excitement of the game together.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Promote cultural diversity</h3>
                    <p className="nameOfUser">by Alexandre on February 24, 2023</p>
                    <p className="longComment">In a world that celebrates diversity, the French flag represents the rich cultural heritage of France. It's a reminder of the importance of embracing different cultures.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Authentic and well-made</h3>
                    <p className="nameOfUser">by Emma on February 22, 2023</p>
                    <p className="longComment">The France Flag Fancy Dress Decoration is made with high-quality materials, ensuring its authenticity and durability. It will withstand the test of time.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Ideal for patriotic displays</h3>
                    <p className="nameOfUser">by Pierre on February 19, 2023</p>
                    <p className="longComment">Whether it's for a national holiday or a patriotic event, the French flag is an ideal choice for creating impressive and meaningful displays.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Symbol of unity</h3>
                    <p className="nameOfUser">by Charlotte on February 17, 2023</p>
                    <p className="longComment">The French flag brings people together, transcending differences and fostering a sense of unity. It's a powerful symbol of solidarity.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Impress your guests</h3>
                    <p className="nameOfUser">by Mathieu on February 14, 2023</p>
                    <p className="longComment">When hosting an event, surprise your guests with the French flag as a decorative element. It adds an elegant touch and leaves a lasting impression.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Support your favorite French teams</h3>
                    <p className="nameOfUser">by Isabella on February 12, 2023</p>
                    <p className="longComment">Whether it's the national football team or your local club, proudly display the French flag to show your unwavering support.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Create a festive ambiance</h3>
                    <p className="nameOfUser">by Olivier on February 9, 2023</p>
                    <p className="longComment">The French flag instantly transforms any space into a festive and lively environment. It sets the mood for a memorable celebration.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Encourage team pride</h3>
                    <p className="nameOfUser">by Emma on February 7, 2023</p>
                    <p className="longComment">Whether it's a school team or a professional sports team, the French flag encourages players and supporters to take pride in their team.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Complements any party theme</h3>
                    <p className="nameOfUser">by Sophie on February 4, 2023</p>
                    <p className="longComment">No matter the theme of your party, the French flag complements it perfectly. It adds a touch of elegance and sophistication.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Durable and long-lasting</h3>
                    <p className="nameOfUser">by Lucas on February 2, 2023</p>
                    <p className="longComment">The France Flag Fancy Dress Decoration is designed to withstand outdoor conditions, ensuring that it remains vibrant and intact for multiple events.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Spread the French spirit</h3>
                    <p className="nameOfUser">by Isabelle on January 30, 2023</p>
                    <p className="longComment">Wherever you go, the French flag spreads the spirit of France. It's a symbol of joy, passion, and love for the country.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Perfect for street parties</h3>
                    <p className="nameOfUser">by Alexandre on January 28, 2023</p>
                    <p className="longComment">Organizing a street party? The French Flag Fancy Dress Decoration adds a festive touch and brings the community together in celebration.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Impressive size</h3>
                    <p className="nameOfUser">by Elodie on January 25, 2023</p>
                    <p className="longComment">The large size of the French flag makes a bold statement. It's visible from a distance and catches everyone's attention.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Great for photo booths</h3>
                    <p className="nameOfUser">by Antoine on January 23, 2023</p>
                    <p className="longComment">Set up a photo booth with the French flag as a backdrop. It adds a touch of patriotism and creates memorable photo opportunities.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Easy to hang</h3>
                    <p className="nameOfUser">by Camille on January 20, 2023</p>
                    <p className="longComment">The grommets on the French flag make it easy to hang on poles, fences, or any suitable surface. It's hassle-free and saves you time.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Express your French heritage</h3>
                    <p className="nameOfUser">by Mathis on January 18, 2023</p>
                    <p className="longComment">If you have French roots, displaying the French flag is a wonderful way to honor and celebrate your heritage.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Versatile decoration</h3>
                    <p className="nameOfUser">by Léa on January 15, 2023</p>
                    <p className="longComment">The French flag is not limited to sporting events. It can be used as a versatile decoration for various occasions, from festivals to patriotic gatherings.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Lightweight and portable</h3>
                    <p className="nameOfUser">by Nathan on January 13, 2023</p>
                    <p className="longComment">Planning a trip or attending an event? The French flag is lightweight and easy to carry, allowing you to proudly display it wherever you go.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Quality craftsmanship</h3>
                    <p className="nameOfUser">by Céline on January 10, 2023</p>
                    <p className="longComment">The French Flag Fancy Dress Decoration is meticulously crafted with attention to detail, ensuring its quality and authenticity.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Celebrate French culture</h3>
                    <p className="nameOfUser">by Hugo on January 8, 2023</p>
                    <p className="longComment">The French flag represents the rich and vibrant culture of France. Displaying it is a way to celebrate and appreciate the country's heritage.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Durable and long-lasting</h3>
                    <p className="nameOfUser">by Léonie on January 5, 2023</p>
                    <p className="longComment">Constructed with high-quality materials, the French flag is designed to withstand outdoor elements, ensuring its durability and longevity.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Support your favorite team</h3>
                    <p className="nameOfUser">by Louis on January 3, 2023</p>
                    <p className="longComment">Whether it's football, rugby, or any other sport, show your support for the French team by proudly waving the French flag.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Create a festive atmosphere</h3>
                    <p className="nameOfUser">by Emma on December 31, 2022</p>
                    <p className="longComment">Nothing sets the mood for a celebration like the French flag. It instantly adds a touch of festivity to any event or gathering.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Symbol of unity</h3>
                    <p className="nameOfUser">by Gabriel on December 29, 2022</p>
                    <p className="longComment">The French flag brings people together and symbolizes unity. It's a powerful representation of national pride and solidarity.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">High-quality printing</h3>
                    <p className="nameOfUser">by Chloé on December 26, 2022</p>
                    <p className="longComment">The French flag features vibrant and fade-resistant colors. The high-quality printing ensures that the flag looks stunning from any angle.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Perfect for themed parties</h3>
                    <p className="nameOfUser">by Maxime on December 24, 2022</p>
                    <p className="longComment">Hosting a French-themed party? The French Flag Fancy Dress Decoration adds an authentic touch and enhances the ambiance.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Easy to store</h3>
                    <p className="nameOfUser">by Léo on December 21, 2022</p>
                    <p className="longComment">The French flag can be easily folded and stored when not in use. It takes up minimal space and is ready for the next celebration.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Celebrate French national holidays</h3>
                    <p className="nameOfUser">by Manon on December 19, 2022</p>
                    <p className="longComment">On Bastille Day or other French national holidays, proudly display the French flag to honor the country's history and culture.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Ideal for outdoor events</h3>
                    <p className="nameOfUser">by Théo on December 16, 2022</p>
                    <p className="longComment">The French flag is designed for outdoor use, making it perfect for sports events, parades, and other outdoor celebrations.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Great value for money</h3>
                    <p className="nameOfUser">by Clara on December 14, 2022</p>
                    <p className="longComment">The French Flag Fancy Dress Decoration offers excellent quality at an affordable price. It's a worthwhile investment for patriotic displays.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Sturdy and well-made</h3>
                    <p className="nameOfUser">by Pierre on December 11, 2022</p>
                    <p className="longComment">The French flag is crafted with attention to detail, ensuring it withstands wind and weather conditions without losing its appeal.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Boost team spirit</h3>
                    <p className="nameOfUser">by Amélie on December 9, 2022</p>
                    <p className="longComment">If you're part of a sports team or cheering for one, waving the French flag adds an extra level of enthusiasm and team spirit.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Authentic French design</h3>
                    <p className="nameOfUser">by Lucas on December 6, 2022</p>
                    <p className="longComment">The French Flag Fancy Dress Decoration features the classic design of the French flag, capturing its essence and authenticity.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Quick and easy setup</h3>
                    <p className="nameOfUser">by Sophie on December 4, 2022</p>
                    <p className="longComment">With the grommets, you can easily attach the French flag to poles or other surfaces. It takes just a few moments to set up.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Perfect for French-themed weddings</h3>
                    <p className="nameOfUser">by Romain on December 1, 2022</p>
                    <p className="longComment">Planning a French-inspired wedding? The French flag adds an elegant touch and sets the mood for a romantic celebration.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Impress your guests</h3>
                    <p className="nameOfUser">by Inès on November 29, 2022</p>
                    <p className="longComment">When hosting guests, displaying the French flag shows your attention to detail and creates a welcoming atmosphere.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Enhance your home decor</h3>
                    <p className="nameOfUser">by Nicolas on November 26, 2022</p>
                    <p className="longComment">If you love French culture, incorporating the French flag into your home decor adds a touch of elegance and sophistication.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Patriotic pride</h3>
                    <p className="nameOfUser">by Juliette on November 24, 2022</p>
                    <p className="longComment">Displaying the French flag is a way to express your love for your country and show pride in your national identity.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Suitable for all ages</h3>
                    <p className="nameOfUser">by Baptiste on November 21, 2022</p>
                    <p className="longComment">Whether you're young or young at heart, waving the French flag brings joy and excitement to people of all ages.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Easy to clean</h3>
                    <p className="nameOfUser">by Maëlle on November 19, 2022</p>
                    <p className="longComment">If the French flag gets dirty, simply hand wash or spot clean it, and it will be ready for future celebrations.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Stand out from the crowd</h3>
                    <p className="nameOfUser">by Hugo on November 16, 2022</p>
                    <p className="longComment">In a sea of fans and supporters, waving the French flag helps you stand out and show your dedication to the team or event.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Perfect for French language classes</h3>
                    <p className="nameOfUser">by Amélie on November 14, 2022</p>
                    <p className="longComment">If you're a French teacher or student, the French flag creates a vibrant learning environment and sparks conversations about culture.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Great for French-themed businesses</h3>
                    <p className="nameOfUser">by Thibault on November 11, 2022</p>
                    <p className="longComment">Running a French restaurant or cafe? The French flag adds an authentic touch and entices customers with a taste of France.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Unleash your creativity</h3>
                    <p className="nameOfUser">by Anaïs on November 9, 2022</p>
                    <p className="longComment">The French flag can inspire various craft and DIY projects, allowing you to express your creativity and add a personal touch.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Make a statement</h3>
                    <p className="nameOfUser">by Éloïse on November 6, 2022</p>
                    <p className="longComment">Waving the French flag is a powerful way to make a statement, whether it's about your support for a team or your love for France.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Feel a sense of belonging</h3>
                    <p className="nameOfUser">by Baptiste on November 4, 2022</p>
                    <p className="longComment">If you're a French expatriate or living abroad, displaying the French flag helps you stay connected to your roots and feel a sense of belonging.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Add a touch of elegance</h3>
                    <p className="nameOfUser">by Léa on November 1, 2022</p>
                    <p className="longComment">The French flag's design exudes elegance and sophistication, making it a stylish addition to any setting or occasion.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Support French artists and creators</h3>
                    <p className="nameOfUser">by Mathis on October 30, 2022</p>
                    <p className="longComment">Many artists and creators incorporate the French flag into their designs. By purchasing a French flag, you support their work and talent.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Inspire educational discussions</h3>
                    <p className="nameOfUser">by Noémie on October 27, 2022</p>
                    <p className="longComment">The French flag can spark conversations about history, politics, and cultural identity, making it a valuable educational tool.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Perfect for French-themed movie nights</h3>
                    <p className="nameOfUser">by Lucas on October 25, 2022</p>
                    <p className="longComment">Hosting a movie night featuring French films? The French flag sets the mood and adds an authentic touch to the cinematic experience.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Pay tribute to French historical figures</h3>
                    <p className="nameOfUser">by Manon on October 22, 2022</p>
                    <p className="longComment">The French flag can be used to honor and remember influential French figures who have shaped history and culture.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Create a sense of unity at French language schools</h3>
                    <p className="nameOfUser">by Hugo on October 20, 2022</p>
                    <p className="longComment">For French language schools or immersion programs, the French flag fosters a sense of unity and pride among students and teachers.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Express your love for French cuisine</h3>
                    <p className="nameOfUser">by Camille on October 17, 2022</p>
                    <p className="longComment">If you're a food enthusiast or chef, the French flag represents the culinary excellence and rich traditions of French cuisine.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Stand up for French values</h3>
                    <p className="nameOfUser">by Nicolas on October 15, 2022</p>
                    <p className="longComment">Displaying the French flag is a way to stand up for the values of liberty, equality, and fraternity that France holds dear.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Perfect for French language clubs</h3>
                    <p className="nameOfUser">by Clara on October 12, 2022</p>
                    <p className="longComment">If you're part of a French language club or conversation group, the French flag creates a welcoming and immersive environment for language learning.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Celebrate French achievements</h3>
                    <p className="nameOfUser">by Louis on October 10, 2022</p>
                    <p className="longComment">From scientific discoveries to artistic masterpieces, the French flag is a symbol of France's contributions to various fields.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Spread joy during French festivals</h3>
                    <p className="nameOfUser">by Emma on October 7, 2022</p>
                    <p className="longComment">During French festivals like Carnival or Fête de la Musique, the French flag adds a festive and cheerful atmosphere to the celebrations.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Capture iconic French moments</h3>
                    <p className="nameOfUser">by Gabriel on October 5, 2022</p>
                    <p className="longComment">Whether it's a photo of the Eiffel Tower or a historic landmark, including the French flag in the frame adds a patriotic touch to the image.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Express solidarity with France</h3>
                    <p className="nameOfUser">by Chloé on October 2, 2022</p>
                    <p className="longComment">In times of tragedy or hardship, displaying the French flag shows support and solidarity with the people of France.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Promote cultural diversity</h3>
                    <p className="nameOfUser">by Maxime on September 30, 2022</p>
                    <p className="longComment">The French flag represents France's multicultural society and serves as a reminder of the importance of embracing diversity.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Feel a connection to French history</h3>
                    <p className="nameOfUser">by Léo on September 27, 2022</p>
                    <p className="longComment">The French flag carries the weight of centuries of history, and displaying it allows you to feel a deeper connection to France's past.</p>
                </div>
            </div>}
            {lang === "FR" && <div className={showReviews ? "reviewsContainerTS show" : "reviewsContainerTS"}
                                   onClick={(e) => e.stopPropagation()}>
                <img className="closeGuide"
                     src="https://i.pinimg.com/originals/52/e3/86/52e38681b082f94f2917624bb56edf42.png" alt=""
                     onClick={() => setShowReviews(false)}/>
                <h2>Commentaires</h2>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Vive la France !</h3>
                    <p className="nameOfUser">par Sophie le 1er juin 2023</p>
                    <p className="longComment">Célébrez votre amour pour la France avec cette fantastique décoration de drapeau. C'est parfait pour montrer votre soutien lors des célébrations nationales et des événements sportifs. Vive la France !</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Drapeau de haute qualité</h3>
                    <p className="nameOfUser">par Antoine le 30 mai 2023</p>
                    <p className="longComment">Le drapeau de la France est une décoration de déguisement de haute qualité, fabriquée avec des matériaux résistants et dotée d'œillets pour une fixation facile aux poteaux. C'est un drapeau durable et magnifique à afficher.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Parfait pour les fans de football</h3>
                    <p className="nameOfUser">par Lucas le 28 mai 2023</p>
                    <p className="longComment">Si vous êtes fan de football, ce drapeau français est un incontournable. Accrochez-le pendant les matchs et ressentez l'excitation alors que vous encouragez votre équipe préférée.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Capturez le moment</h3>
                    <p className="nameOfUser">par Emma le 25 mai 2023</p>
                    <p className="longComment">Avec la décoration de déguisement de drapeau de la France, vous pouvez capturer les moments mémorables des célébrations nationales et des événements sportifs. Prenez des photos et partagez la joie avec vos amis et votre famille.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Drapeau français authentique</h3>
                    <p className="nameOfUser">par Olivier le 23 mai 2023</p>
                    <p className="longComment">Le grand drapeau français avec des œillets est le moyen parfait de montrer votre amour pour la France. Son design authentique et ses couleurs vives en font une décoration remarquable.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Idéal pour les fêtes de rue</h3>
                    <p className="nameOfUser">par Camille le 20 mai 2023</p>
                    <p className="longComment">Vous prévoyez une fête de rue ? La décoration de déguisement de drapeau de la France est un article essentiel. Elle ajoute une touche festive à la célébration et crée un sentiment d'unité.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Taille impressionnante</h3>
                    <p className="nameOfUser">par Maxime le 18 mai 202

                        3</p>
                    <p className="longComment">La grande taille de ce drapeau français (5 pieds x 3 pieds) garantit qu'il attire l'attention de tous. C'est une décoration audacieuse et accrocheuse pour tout événement.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Décoration polyvalente</h3>
                    <p className="nameOfUser">par Sophie le 15 mai 2023</p>
                    <p className="longComment">Que ce soit pour un match de football, un match de rugby ou une célébration nationale, ce drapeau français est une décoration polyvalente qui ajoute une touche de patriotisme à toutes les occasions.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Durable et résistant</h3>
                    <p className="nameOfUser">par Louis le 13 mai 2023</p>
                    <p className="longComment">La décoration de déguisement de drapeau de la France est conçue pour résister aux conditions extérieures. Sa construction solide garantit qu'elle durera pour de multiples célébrations et événements.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Facile à accrocher</h3>
                    <p className="nameOfUser">par Isabelle le 10 mai 2023</p>
                    <p className="longComment">Avec des œillets pour la fixation, accrocher le drapeau français est un jeu d'enfant. Il suffit de quelques minutes pour l'installer et il crée instantanément une atmosphère festive.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Soutenez votre équipe avec style</h3>
                    <p className="nameOfUser">par Alexandre le 8 mai 2023</p>
                    <p className="longComment">Encouragez votre équipe avec ce élégant drapeau français. Que ce soit pour un match de football ou un tournoi de rugby, vous vous démarquerez dans la foule avec votre esprit patriotique.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Hautement recommandé</h3>
                    <p className="nameOfUser">par Emma le 5 mai 2023</p>
                    <p className="longComment">Je recommande vivement la décoration de déguisement de drapeau de la France. C'est un moyen fantastique de montrer votre amour pour la France et d'ajouter une touche festive à n'importe quel événement.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Parfait pour les festivals</h3>
                    <p className="nameOfUser">par Pierre le 3 mai 2023</p>
                    <p className="longComment">Prévoyez-vous d'assister à un festival ? N'oubliez pas d'apporter votre drapeau français. C'est un excellent moyen de participer à la célébration et de montrer votre enthousiasme.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Symbole d'unité</h3>
                    <p className="nameOfUser">par Charlotte le 30 avril 2023</p>
                    <p className="longComment">La décoration de déguisement de drapeau de la France représente l'unité et la fierté nationale. Accrochez-le et faites savoir à tous que vous êtes solidaires.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Très durable</h3>
                    <p className="nameOfUser">par Mathieu le 28 avril 2023</p>
                    <p className="longComment">J'ai utilisé ce drapeau français pour plusieurs événements et il a très bien résisté. Il est conçu pour durer et peut supporter différentes conditions météorologiques.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Excellent pour une utilisation en extérieur</h3>
                    <p className="nameOfUser">par Isabella le 25 avril 2023</p>
                    <p className="longComment">Prévoyez-vous une célébration en extérieur ? La décoration de déguisement de drapeau de la France est un ajout fantastique. Elle ajoute une touche festive et peut résister au vent et à la pluie.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Un excellent rapport qualité-prix</h3>
                    <p className="nameOfUser">par Olivier le 23 avril 2023</p>
                    <p className="longComment">Compte tenu de sa taille et de sa qualité, ce drapeau français offre un excellent rapport qualité-prix. Vous ne serez pas déçu de votre achat.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Un design impressionnant</h3>
                    <p className="nameOfUser">par Emma le 20 avril 2023</p>
                    <p className="longComment">Le design de ce drapeau français est vraiment impressionnant. Ses couleurs vives et ses détails précis en font une décoration remarquable pour toutes les occasions.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Facile à ranger</h3>
                    <p className="nameOfUser">par Lucas le 18 avril 2023</p>
                    <p className="longComment">Après la célébration, vous pouvez facilement plier et ranger la décoration de déguisement de drapeau de la France. Elle ne prend pas beaucoup de place et peut être réutilisée pour les événements futurs.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Parfait pour tous les âges</h3>
                    <p className="nameOfUser">par Sophie le 15 avril 2023</p>
                    <p className="longComment">Que vous soyez jeune ou jeune de cœur, ce drapeau français est parfait pour tous les âges. Il apporte de la joie et un sentiment d'appartenance à tous ceux qui le voient.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Un incontournable pour les fans de la France</h3>
                    <p className="nameOfUser">par Antoine le 13 avril 2023</p>
                    <p className="longComment">Si vous êtes un fan passionné de la France, ce drapeau est un incontournable. C'est un accessoire essentiel pour montrer votre soutien et votre enthousiasme.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Idéal pour les événements scolaires</h3>
                    <p className="nameOfUser">par Camille le 10 avril 2023</p>
                    <p className="longComment">Les enseignants et les élèves apprécieront la décoration de déguisement de drapeau de la France pour les événements scolaires. C'est un symbole d'unité et peut être utilisé à des fins éducatives.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Parfait pour les photomatons</h3>
                    <p className="nameOfUser">par Maxime le 8 avril 2023</p>
                    <p className="longComment">Vous mettez en place un photomaton lors de votre événement ? N'oubliez pas d'inclure le drapeau français. C'est un accessoire fantastique pour capturer des moments mémorables.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Hautement recommandé pour les fêtes</h3>
                    <p className="nameOfUser">par Emma le 5 avril 2023</p>
                    <p className="longComment">J'ai utilisé la décoration de déguisement de drapeau de la France pour ma fête, et c'était un succès. Elle a ajouté une ambiance festive et a fait ressentir à tous l'esprit de la France.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Montrez votre amour pour le sport français</h3>
                    <p className="nameOfUser">par Olivier le 3 avril 2023</p>
                    <p className="longComment">Que ce soit le football, le rugby ou tout autre sport, ce drapeau est un moyen parfait de montrer votre soutien aux athlètes français. Agitez-le fièrement !</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Facile à transporter</h3>
                    <p className="nameOfUser">par Sophie le 31 mars 2023</p>
                    <p className="longComment">Vous emmenez le drapeau français à un événement ? Pas de soucis ! Il est léger et facile à transporter. Vous pouvez l'emmener avec vous où que vous alliez.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Créez des souvenirs durables</h3>
                    <p className="nameOfUser">par Lucas le 29 mars 2023</p>
                    <p className="longComment">Avec la décoration de déguisement de drapeau de la France, vous créerez des souvenirs durables. C'est un symbole de joie et de célébration que vous chérirez pendant des années.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Parfait pour les fêtes sur le thème de la France</h3>
                    <p className="nameOfUser">par Isabelle le 26 mars 2023</p>
                    <p className="longComment">Vous organisez une fête sur le thème de la France ? Ce drapeau est une décoration indispensable. Il crée l'ambiance et ajoute une touche d'authenticité à votre événement.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Idéal pour les bars sportifs</h3>
                    <p className="nameOfUser">par Alexandre le 24 mars 2023</p>
                    <p className="longComment">Si vous possédez un bar sportif, pensez à accrocher le drapeau français lors des matchs importants. Cela créera une ambiance vibrante et favorable pour vos clients.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Facile à nettoyer</h3>
                    <p className="nameOfUser">par Emma le 21 mars 2023</p>
                    <p className="longComment">Les accidents arrivent, mais nettoyer la décoration de déguisement de drapeau de la France est un jeu d'enfant. Il suffit de nettoyer les taches ou de le laver à la main, et il sera prêt pour votre prochaine célébration.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Soutenez la culture française</h3>
                    <p className="nameOfUser">par Pierre le 19 mars 2023</p>
                    <p className="longComment">Afficher le drapeau français est un moyen de montrer votre appréciation pour la culture et le patrimoine français. C'est un beau symbole qui unit les gens du monde entier.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Décoration qui attire l'attention</h3>
                    <p className="nameOfUser">par Charlotte le 16 mars 2023</p>
                    <p className="longComment">Si vous voulez que votre événement se démarque, la décoration de déguisement de drapeau de la France est incontournable. Ses couleurs vives et sa grande taille attireront l'attention de tous.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Célébrez les réalisations françaises</h3>
                    <p className="nameOfUser">par Mathieu le 14 mars 2023</p>
                    <p className="longComment">Des victoires sportives aux jalons culturels, le drapeau français est un symbole de célébration pour toutes les réalisations de la France et de son peuple.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Polyvalent et multifonctionnel</h3>
                    <p className="nameOfUser">par Isabella le 11 mars 2023</p>
                    <p className="longComment">Non limité aux événements sportifs, le drapeau français peut être utilisé pour les fêtes de rue, les festivals et diverses célébrations. Sa polyvalence en fait une décoration précieuse.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Exprimez votre fierté nationale</h3>
                    <p className="nameOfUser">par Olivier le 9 mars 2023</p>
                    <p className="longComment">Il n'y a pas de meilleur moyen d'exprimer votre amour pour la France qu'en affichant fièrement le drapeau français. C'est un symbole de fierté et d'appartenance.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Un choix idéal pour les mariages</h3>
                    <p className="nameOfUser">par Emma le 6 mars 2023</p>
                    <p className="longComment">Si vous planifiez un mariage avec un thème français, ce drapeau est un choix idéal pour la décoration. Il ajoute une touche romantique et festive à votre journée spéciale.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Un symbole d'unité</h3>
                    <p className="nameOfUser">par Lucas le 4 mars 2023</p>
                    <p className="longComment">Le drapeau français rassemble les gens et symbolise l'unité. Que ce soit lors d'une cérémonie officielle ou d'une fête informelle, il renforce les liens entre les participants.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Un cadeau apprécié</h3>
                    <p className="nameOfUser">par Sophie le 1er mars 2023</p>
                    <p className="longComment">Si vous cherchez un cadeau pour un ami ou un membre de la famille qui aime la France, ce drapeau est un choix parfait. Il sera apprécié et utilisé avec fierté.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Un ajout festif pour les événements</h3>
                    <p className="nameOfUser">par Antoine le 27 février 2023</p>
                    <p className="longComment">Que ce soit pour un anniversaire, une fête nationale ou tout autre événement, la décoration de déguisement de drapeau de la France apporte une ambiance festive et joyeuse à chaque fois.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Qualité supérieure</h3>
                    <p className="nameOfUser">par Camille le 25 février 2023</p>
                    <p className="longComment">Ce drapeau français est fait de matériaux de haute qualité qui résistent à l'usure. Il est conçu pour durer et peut être utilisé à plusieurs reprises.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Une décoration patriotique</h3>
                    <p className="nameOfUser">par Maxime le 23 février 2023</p>
                    <p className="longComment">Montrez votre patriotisme avec la décoration de déguisement de drapeau de la France. C'est un moyen simple mais puissant de témoigner de votre amour pour votre pays.</p>
                </div>

                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Améliorez l'atmosphère de votre événement</h3>
                    <p className="nameOfUser">par Emma le 6 mars 2023</p>
                    <p className="longComment">Que ce soit pour une petite réunion ou une grande célébration, la décoration de costume de la France avec le drapeau français ajoute une touche festive et améliore l'atmosphère globale.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Idéal pour les rassemblements internationaux</h3>
                    <p className="nameOfUser">par Sophie le 4 mars 2023</p>
                    <p className="longComment">Si vous organisez un événement international, le drapeau français est un moyen fantastique de représenter la France et de faire sentir à vos invités qu'ils sont les bienvenus.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Renforcez l'esprit d'équipe</h3>
                    <p className="nameOfUser">par Lucas le 1er mars 2023</p>
                    <p className="longComment">Que vous fassiez partie d'une équipe sportive ou d'un groupe d'amis, agiter ensemble le drapeau français renforce l'esprit d'équipe et crée un sentiment de camaraderie.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Recréez l'ambiance du stade à la maison</h3>
                    <p className="nameOfUser">par Isabelle le 27 février 2023</p>
                    <p className="longComment">Vous ne pouvez pas vous rendre au stade ? Pas de problème ! Accrochez le drapeau français à la maison, invitez vos amis et vivez l'excitation du match ensemble.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Promouvez la diversité culturelle</h3>
                    <p className="nameOfUser">par Alexandre le 24 février 2023</p>
                    <p className="longComment">Dans un monde qui célèbre la diversité, le drapeau français représente le riche patrimoine culturel de la France. C'est un rappel de l'importance d'embrasser les différentes cultures.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Authentique et bien fait</h3>
                    <p className="nameOfUser">par Emma le 22 février 2023</p>
                    <p className="longComment">La décoration de costume de la France avec le drapeau français est fabriquée avec des matériaux de haute qualité, garantissant son authenticité et sa durabilité. Elle résistera à l'épreuve du temps.</p>
                </div>
            </div>}
        </div>
    );
};


export default ReviewsFlag;
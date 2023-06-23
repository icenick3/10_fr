import React from 'react';
import './Reviews.css'
import {Stars5, Stars2, Stars4, Stars1, Stars3} from "../Stars/Stars";

const ReviewsPillow = ({setShowReviews, showReviews, lang}) => {
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
                    <h3 className="shortComment">A deliciously cozy and adorable neck pillow</h3>
                    <p className="nameOfUser">by Sarah on May 1, 2023</p>
                    <p className="longComment">The Heated Croissant Giant Pillow is not only incredibly comfortable but also absolutely adorable. Its giant croissant shape and chocolate-like heat pad pocket add a touch of whimsy to any space while providing a cozy and relaxing experience.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Warm cherry stone heat bag for ultimate relaxation</h3>
                    <p className="nameOfUser">by Ethan on April 30, 2023</p>
                    <p className="longComment">The inclusion of a microwavable cherry stone heat bag in the Heated Croissant Giant Pillow is a game-changer. Its gentle warmth soothes tired muscles and helps create a relaxing atmosphere. It's like having a mini spa session right at home.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">The perfect novelty pillow for a cozy and fun ambiance</h3>
                    <p className="nameOfUser">by Mia on April 29, 2023</p>
                    <p className="longComment">Adding the Heated Croissant Giant Pillow to your bedroom or living room instantly brings a cozy and fun ambiance. Its unique design and huggable nature make it a delightful decorative pillow that sparks joy and invites relaxation.</p>
                </div>
                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">The heat pad pocket could be larger for better placement</h3>
                    <p className="nameOfUser">by Liam on April 28, 2023</p>
                    <p className="longComment">While the Heated Croissant Giant Pillow's heat pad pocket is a charming feature, it could be slightly larger to ensure better placement and stability of the heat pad. Adjusting the size would enhance the overall experience and convenience.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Travel in comfort and style with this versatile pillow</h3>
                    <p className="nameOfUser">by Emma on April 27, 2023</p>
                    <p className="longComment">The Heated Croissant Giant Pillow is not only a cozy addition to your home but also a perfect travel companion. Its comfortable design and travel headrest functionality ensure a relaxing nap during long journeys, making travel much more enjoyable.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">An eye-catching and huggable gift for croissant lovers</h3>
                    <p className="nameOfUser">by Noah on April 26, 2023</p>
                    <p className="longComment">If you're looking for a unique gift for a croissant lover, the Heated Croissant Giant Pillow is a fantastic choice. Its huggable nature, combined with the chocolate-like heat pad pocket, makes it a delightful and eye-catching present.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Relaxation and style in one package</h3>
                    <p className="nameOfUser">by Olivia on April 25, 2023</p>
                    <p className="longComment">The Heated Croissant Giant Pillow combines relaxation and style effortlessly. Its plush material and heat pad pocket offer a cozy experience, while the croissant design adds a touch of whimsical charm to any space.</p>
                </div>
                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">Heat pad pocket could use additional insulation</h3>
                    <p className="nameOfUser">by William on April 24, 2023</p>
                    <p className="longComment">While the Heated Croissant Giant Pillow's heat pad pocket is a convenient feature, it could benefit from additional insulation to ensure the heat is retained for longer periods. This enhancement would maximize the pillow's warmth and comfort.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Naptime has never been this delightful</h3>
                    <p className="nameOfUser">by Sophia on April 23, 2023</p>
                    <p className="longComment">With the Heated Croissant Giant Pillow, naptime becomes an absolute delight. The pillow's soft and huggable nature, combined with the soothing warmth of the cherry stone heat bag, creates the perfect environment for a restful and rejuvenating nap.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">A creative and functional addition to any home</h3>
                    <p className="nameOfUser">by James on April 22, 2023</p>
                    <p className="longComment">The Heated Croissant Giant Pillow is not just a decorative piece; it's also a functional addition to any home. Its combination of creativity and practicality brings joy and comfort to your space, making it a standout item.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Cozy up with this irresistible giant croissant pillow</h3>
                    <p className="nameOfUser">by Harper on April 21, 2023</p>
                    <p className="longComment">The Heated Croissant Giant Pillow is absolutely irresistible. Its giant croissant shape, plush material, and warm cherry stone heat bag make it the perfect cuddle companion for cozy nights in or lazy Sunday mornings.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Conveniently sized for comfort and portability</h3>
                    <p className="nameOfUser">by Benjamin on April 20, 2023</p>
                    <p className="longComment">The Heated Croissant Giant Pillow strikes the right balance between comfort and portability. Its size is generous enough for optimal relaxation, yet compact enough to be easily carried on trips, allowing you to enjoy its comfort wherever you go.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">A charming addition to any croissant lover's collection</h3>
                    <p className="nameOfUser">by Charlotte on April 19, 2023</p>
                    <p className="longComment">For croissant enthusiasts, the Heated Croissant Giant Pillow is an absolute must-have. Its attention to detail, from the chocolate-like heat pad pocket to the fluffy texture, makes it a charming and delightful addition to any croissant lover's collection.</p>
                </div>
                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">Heat pad could retain warmth longer</h3>
                    <p className="nameOfUser">by Daniel on April 18, 2023</p>
                    <p className="longComment">While the Heated Croissant Giant Pillow provides a comforting warmth, the heat pad could benefit from better heat retention properties. Extending the duration of warmth would enhance the overall experience and ensure longer relaxation sessions.</p>
                </div>







                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">The perfect treat for yourself or a loved one</h3>
                    <p className="nameOfUser">by Amelia on April 17, 2023</p>
                    <p className="longComment">Indulge yourself or surprise a loved one with the Heated Croissant Giant Pillow. Its delightful design, coupled with the comforting warmth it provides, makes it a unique and thoughtful gift that brings joy and relaxation.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Enhance your lounging experience with this cozy pillow</h3>
                    <p className="nameOfUser">by Henry on April 16, 2023</p>
                    <p className="longComment">Whether you're reading, watching movies, or simply unwinding, the Heated Croissant Giant Pillow enhances your lounging experience. Its plush material, combined with the soothing warmth of the cherry stone heat bag, creates a cozy and inviting atmosphere.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Travel in style with this delightful neck pillow</h3>
                    <p className="nameOfUser">by Grace on April 15, 2023</p>
                    <p className="longComment">Why settle for a standard neck pillow when you can travel in style with the Heated Croissant Giant Pillow? Its charming design and comfortable support make it a fashionable and functional accessory for your travels, ensuring you arrive rested and refreshed.</p>
                </div>
                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">Heat pad pocket could be more secure</h3>
                    <p className="nameOfUser">by Samuel on April 14, 2023</p>
                    <p className="longComment">Although the Heated Croissant Giant Pillow's heat pad pocket is a nice addition, it could be more secure to prevent the heat pad from shifting during use. Reinforcing the pocket would provide added stability and ensure optimal placement.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">An absolute conversation starter</h3>
                    <p className="nameOfUser">by Lily on April 13, 2023</p>
                    <p className="longComment">The Heated Croissant Giant Pillow is not just a pillow; it's a conversation starter. Its whimsical design and attention to detail make it a unique and delightful piece that sparks curiosity and brings smiles to anyone who sees it.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">A charming addition to a cozy reading nook</h3>
                    <p className="nameOfUser">by Sebastian on April 12, 2023</p>
                    <p className="longComment">Create a cozy reading nook with the Heated Croissant Giant Pillow as your companion. Its soft and huggable nature, combined with the subtle warmth from the cherry stone heat bag, transforms your reading sessions into a truly relaxing and enjoyable experience.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Unwind and decompress with this croissant delight</h3>
                    <p className="nameOfUser">by Ava on April 11, 2023</p>
                    <p className="longComment">After a long and tiring day, the Heated Croissant Giant Pillow offers the perfect opportunity to unwind and decompress. Embrace its softness, embrace its warmth, and let the stresses of the day melt away as you sink into pure relaxation.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">A cozy gift for any occasion</h3>
                    <p className="nameOfUser">by Leo on April 10, 2023</p>
                    <p className="longComment">Looking for a unique and cozy gift? The Heated Croissant Giant Pillow fits the bill perfectly. Whether it's a birthday, anniversary, or simply a gesture of care, this pillow is sure to bring comfort and smiles to your loved ones.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Relax and snuggle with this croissant dream</h3>
                    <p className="nameOfUser">by Isabella on April 9, 2023</p>
                    <p className="longComment">The Heated Croissant Giant Pillow is a dream come true for those who appreciate comfort and cuteness. It's the perfect companion for relaxation, allowing you to snuggle up and enjoy a warm and cozy moment of pure bliss.</p>
                </div>
                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">Heat pad could distribute warmth more evenly</h3>
                    <p className="nameOfUser">by Jack on April 8, 2023</p>
                    <p className="longComment">While the Heated Croissant Giant Pillow provides warmth, the heat pad could distribute the warmth more evenly. This adjustment would ensure a consistent and comfortable temperature throughout the pillow, enhancing the overall experience.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">A croissant you can cuddle</h3>
                    <p className="nameOfUser">by Emily on April 7, 2023</p>
                    <p className="longComment">Who wouldn't want to cuddle a giant croissant? The Heated Croissant Giant Pillow combines the joy of comfort and the whimsy of a croissant in one adorable package. It's a delightful addition to any snuggle session.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">A unique way to bring warmth and relaxation</h3>
                    <p className="nameOfUser">by Alexander on April 6, 2023</p>
                    <p className="longComment">The Heated Croissant Giant Pillow offers a unique and playful way to bring warmth and relaxation into your life. Its clever design and cozy nature make it a standout item that is sure to bring a smile to your face.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Napping has never been more delightful</h3>
                    <p className="nameOfUser">by Victoria on April 5, 2023</p>
                    <p className="longComment">The Heated Croissant Giant Pillow transforms napping into a delightful experience. With its softness, warmth, and charming croissant shape, it creates the perfect cocoon for a rejuvenating and peaceful nap, leaving you refreshed and ready to take on the day.</p>
                </div>
                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">Heat pad could have adjustable temperature settings</h3>
                    <p className="nameOfUser">by Max on April 4, 2023</p>
                    <p className="longComment">While the Heated Croissant Giant Pillow provides a pleasant warmth, having adjustable temperature settings for the heat pad would allow users to customize the level of warmth according to their preferences, providing a more personalized experience.</p>
                </div>












                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">A deliciously cozy gift for yourself or a loved one</h3>
                    <p className="nameOfUser">by Zoe on April 3, 2023</p>
                    <p className="longComment">Treat yourself or surprise someone special with the Heated Croissant Giant Pillow. Its scrumptious design and comforting warmth make it a truly delightful gift that wraps you in a cozy embrace and brings a smile to your face.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">The perfect companion for lazy movie marathons</h3>
                    <p className="nameOfUser">by Jacob on April 2, 2023</p>
                    <p className="longComment">Make your movie marathons even cozier with the Heated Croissant Giant Pillow. Its generous size and soft texture provide the ideal support for lounging on the couch, allowing you to relax and enjoy your favorite films in ultimate comfort.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">A whimsical touch to brighten your living space</h3>
                    <p className="nameOfUser">by Chloe on April 1, 2023</p>
                    <p className="longComment">The Heated Croissant Giant Pillow adds a whimsical touch to any living space. Its unique design and playful appearance bring a sense of joy and lightheartedness, instantly brightening the room and inviting relaxation.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Heat pad pocket could be more discreet</h3>
                    <p className="nameOfUser">by Andrew on March 31, 2023</p>
                    <p className="longComment">While the Heated Croissant Giant Pillow's heat pad pocket is convenient, it could be designed to be more discreet to maintain the seamless appearance of the pillow. This minor adjustment would further enhance the overall aesthetic.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">The perfect snuggle buddy for a chilly evening</h3>
                    <p className="nameOfUser">by Harper on March 30, 2023</p>
                    <p className="longComment">When the evenings turn chilly, the Heated Croissant Giant Pillow becomes the perfect snuggle buddy. Its warmth and comforting embrace create a cozy sanctuary, allowing you to relax and unwind in the most delightful way.</p>
                </div>
                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">Heat pad could have a longer heat retention period</h3>
                    <p className="nameOfUser">by Olivia on March 29, 2023</p>
                    <p className="longComment">Although the Heated Croissant Giant Pillow provides a soothing warmth, extending the heat retention period of the cherry stone heat bag would allow for longer and more enjoyable relaxation sessions. This improvement would be greatly appreciated.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">The epitome of cuteness and comfort</h3>
                    <p className="nameOfUser">by Ethan on March 28, 2023</p>
                    <p className="longComment">The Heated Croissant Giant Pillow is the epitome of cuteness and comfort. Its adorable design and plush material make it a must-have item for anyone seeking a delightful combination of coziness and charm.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">A croissant-inspired dream for your living room</h3>
                    <p className="nameOfUser">by Mia on March 27, 2023</p>
                    <p className="longComment">Elevate your living room decor with the Heated Croissant Giant Pillow. Its croissant-inspired design adds a touch of whimsy and personality to any space, creating a cozy and inviting atmosphere that is sure to impress.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">A delightful way to relax during travel</h3>
                    <p className="nameOfUser">by Liam on March 26, 2023</p>
                    <p className="longComment">Say goodbye to uncomfortable travels with the Heated Croissant Giant Pillow. Its travel-friendly size and plush texture provide much-needed comfort and support, allowing you to relax and enjoy your journey to the fullest.</p>
                </div>
                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">Heat pad could have longer heating time</h3>
                    <p className="nameOfUser">by Emily on March 25, 2023</p>
                    <p className="longComment">While the Heated Croissant Giant Pillow offers warmth, extending the heating time of the cherry stone heat bag would be beneficial for extended periods of relaxation. A longer-lasting heat would enhance the overall experience.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">A croissant that brings warmth and joy</h3>
                    <p className="nameOfUser">by Noah on March 24, 2023</p>
                    <p className="longComment">The Heated Croissant Giant Pillow is not just a croissant; it's a source of warmth and joy. Its delightful design and cozy embrace create a sense of comfort and happiness, making it a truly special item to cherish.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Perfect for those who love all things croissant</h3>
                    <p className="nameOfUser">by Grace on March 23, 2023</p>
                    <p className="longComment">If you're a croissant enthusiast, the Heated Croissant Giant Pillow is a must-have addition to your collection. Its charming croissant shape, coupled with its comforting warmth, celebrates your love for all things croissant in the most delightful way.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">A cozy retreat from the outside world</h3>
                    <p className="nameOfUser">by Benjamin on March 22, 2023</p>
                    <p className="longComment">Step into a cozy retreat with the Heated Croissant Giant Pillow. It's like wrapping yourself in a warm and comforting hug, providing a sanctuary from the outside world and allowing you to relax and recharge.</p>
                </div>







                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Heat pad could warm up more quickly</h3>
                    <p className="nameOfUser">by Mia on March 21, 2023</p>
                    <p className="longComment">While the Heated Croissant Giant Pillow offers warmth, a quicker heating time for the cherry stone heat bag would be advantageous, especially when in need of immediate comfort. Rapid warmth would enhance the overall experience.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">A whimsical touch to your bedtime routine</h3>
                    <p className="nameOfUser">by Oliver on March 20, 2023</p>
                    <p className="longComment">Say goodnight to ordinary pillows and embrace the whimsy of the Heated Croissant Giant Pillow. Its playful design adds a touch of magic to your bedtime routine, making it a joyous and cozy experience every night.</p>
                </div>
                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">Heat pad could be more evenly distributed</h3>
                    <p className="nameOfUser">by Sophia on March 19, 2023</p>
                    <p className="longComment">While the Heated Croissant Giant Pillow offers warmth, ensuring that the heat pad is evenly distributed throughout the pillow would provide a consistent and balanced warmth. This adjustment would improve the overall comfort level.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">A delightful conversation starter for guests</h3>
                    <p className="nameOfUser">by William on March 18, 2023</p>
                    <p className="longComment">Welcome your guests with the Heated Croissant Giant Pillow, and watch as it becomes an instant conversation starter. Its unique and charming design captivates the attention of visitors and adds a touch of whimsy to your home.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Perfect for cozy mornings and lazy Sundays</h3>
                    <p className="nameOfUser">by Charlotte on March 17, 2023</p>
                    <p className="longComment">Start your mornings on a cozy note or spend lazy Sundays wrapped in the warmth of the Heated Croissant Giant Pillow. Its inviting embrace and gentle heat create the perfect atmosphere for relaxation and indulgence.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">A croissant that brings comfort wherever you go</h3>
                    <p className="nameOfUser">by James on March 16, 2023</p>
                    <p className="longComment">With the Heated Croissant Giant Pillow, you can carry the comfort of a croissant wherever you go. Its travel-friendly size and soothing warmth make it the ideal companion for your adventures, ensuring comfort and relaxation wherever you may be.</p>
                </div>
                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">Heat pad could have a more secure pocket</h3>
                    <p className="nameOfUser">by Amelia on March 15, 2023</p>
                    <p className="longComment">While the Heated Croissant Giant Pillow provides warmth, ensuring a more secure pocket for the heat pad would prevent it from shifting inside the pillow. This adjustment would maintain the optimal placement and enhance the overall experience.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Indulge in a cozy moment with this croissant gem</h3>
                    <p className="nameOfUser">by Daniel on March 14, 2023</p>
                    <p className="longComment">The Heated Croissant Giant Pillow is a gem that allows you to indulge in a cozy moment of pure bliss. Its inviting warmth and plush texture create a soothing oasis where you can relax, unwind, and forget about the outside world.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">A croissant pillow that satisfies your craving for comfort</h3>
                    <p className="nameOfUser">by Mia on March 13, 2023</p>
                    <p className="longComment">Craving comfort? The Heated Croissant Giant Pillow is here to satisfy that craving. Its mouthwatering design and heavenly warmth provide a comforting experience that is sure to leave you feeling cozy, content, and utterly relaxed.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">The perfect cuddle buddy on chilly nights</h3>
                    <p className="nameOfUser">by Emma on March 12, 2023</p>
                    <p className="longComment">When the nights turn chilly, the Heated Croissant Giant Pillow becomes the perfect cuddle buddy. Its warmth and comforting embrace create a cozy haven where you can snuggle up, relax, and drift off to sleep with ease.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">An adorable addition to any decor</h3>
                    <p className="nameOfUser">by Noah on March 11, 2023</p>
                    <p className="longComment">Add a touch of cuteness to your living space with the Heated Croissant Giant Pillow. Its adorable design and inviting warmth make it a delightful addition to any decor, bringing charm and coziness to your home.</p>
                </div>
                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">Heat pad could retain warmth longer</h3>
                    <p className="nameOfUser">by Olivia on March 10, 2023</p>
                    <p className="longComment">While the Heated Croissant Giant Pillow provides initial warmth, extending the heat retention of the cherry stone heat pad would enhance the overall experience. A longer-lasting warmth would be greatly appreciated for prolonged relaxation.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">A unique gift for croissant enthusiasts</h3>
                    <p className="nameOfUser">by William on March 9, 2023</p>
                    <p className="longComment">Searching for a gift for a croissant lover? Look no further than the Heated Croissant Giant Pillow. Its novelty design and comforting warmth make it a unique and thoughtful gift that is sure to bring joy and smiles.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Relaxation and warmth in one delightful package</h3>
                    <p className="nameOfUser">by Sophia on March 8, 2023</p>
                    <p className="longComment">The Heated Croissant Giant Pillow combines the best of both worlds – relaxation and warmth. It's like receiving a comforting hug from a croissant, enveloping you in a cocoon of coziness and allowing you to unwind and recharge.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">The ultimate companion for movie nights</h3>
                    <p className="nameOfUser">by Oliver on March 7, 2023</p>
                    <p className="longComment">Make movie nights even better with the Heated Croissant Giant Pillow. Its plushness and gentle warmth create the perfect snuggling companion as you enjoy your favorite films. It's like having your own personal cinema comfort.</p>
                </div>
                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">Heat pad could be more customizable</h3>
                    <p className="nameOfUser">by Charlotte on March 6, 2023</p>
                    <p className="longComment">While the Heated Croissant Giant Pillow offers warmth, having adjustable heat settings on the cherry stone heat pad would provide a customizable experience. This flexibility would cater to individual preferences and needs.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">A delightful conversation starter</h3>
                    <p className="nameOfUser">by Ethan on March 5, 2023</p>
                    <p className="longComment">The Heated Croissant Giant Pillow is not only a cozy accessory but also a delightful conversation starter. Its unique design and irresistible charm will capture the attention of guests and ignite interesting discussions.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Perfect for snuggling up with a good book</h3>
                    <p className="nameOfUser">by Mia on March 4, 2023</p>
                    <p className="longComment">Combine your love for reading and comfort with the Heated Croissant Giant Pillow. Its soothing warmth and plush support make it the ideal companion for snuggling up with a good book, creating a cozy reading nook.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">The epitome of warmth and cuteness</h3>
                    <p className="nameOfUser">by Liam on March 3, 2023</p>
                    <p className="longComment">The Heated Croissant Giant Pillow is the epitome of warmth and cuteness. Its toasty embrace and adorable croissant shape make it a must-have for anyone seeking comfort and a touch of whimsy in their lives.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">A cozy treat for relaxation enthusiasts</h3>
                    <p className="nameOfUser">by Ava on March 2, 2023</p>
                    <p className="longComment">Indulge in a cozy treat with the Heated Croissant Giant Pillow. Its inviting warmth and softness create a tranquil oasis where you can unwind, destress, and escape from the demands of the day.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Bring a touch of bakery charm to your home</h3>
                    <p className="nameOfUser">by Noah on March 1, 2023</p>
                    <p className="longComment">With the Heated Croissant Giant Pillow, you can bring a touch of bakery charm to your home. Its delightful design and comforting warmth evoke the feeling of a French patisserie, adding a whimsical flair to your living space.</p>
                </div>
                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">Heat pad could distribute warmth more evenly</h3>
                    <p className="nameOfUser">by Isabella on February 28, 2023</p>
                    <p className="longComment">While the Heated Croissant Giant Pillow provides warmth, ensuring an even distribution of heat throughout the cherry stone heat pad would enhance the overall experience. This adjustment would optimize the pillow's cozy effect.</p>
                </div>
                <div className="comment">








                    <Stars5/>
                    <h3 className="shortComment">A comforting companion for relaxation sessions</h3>
                    <p className="nameOfUser">by Oliver on February 27, 2023</p>
                    <p className="longComment">The Heated Croissant Giant Pillow is the perfect companion for your relaxation sessions. Its soothing warmth, combined with its inviting softness, creates an atmosphere of tranquility where you can unwind and rejuvenate.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Ideal for adding a touch of whimsy to any room</h3>
                    <p className="nameOfUser">by Sophia on February 26, 2023</p>
                    <p className="longComment">Looking to infuse your space with whimsy? The Heated Croissant Giant Pillow is the answer. Its playful design and comforting warmth make it an ideal decorative accessory that adds a dash of joy to any room.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">A tasty treat for your senses</h3>
                    <p className="nameOfUser">by Lucas on February 25, 2023</p>
                    <p className="longComment">The Heated Croissant Giant Pillow is like a tasty treat for your senses. Its chocolate-like appearance and soothing warmth create a sensory experience that delights both your sight and touch, making relaxation even more enjoyable.</p>
                </div>
                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">Heat pad could have a longer-lasting warmth</h3>
                    <p className="nameOfUser">by Lily on February 24, 2023</p>
                    <p className="longComment">While the Heated Croissant Giant Pillow provides initial warmth, extending the heat retention of the cherry stone heat pad would prolong the cozy experience. A longer-lasting warmth would enhance the pillow's overall functionality.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Perfect for a quick nap or power nap</h3>
                    <p className="nameOfUser">by Jack on February 23, 2023</p>
                    <p className="longComment">When you need a quick nap or power nap, the Heated Croissant Giant Pillow is there to provide the ultimate comfort. Its plushness and gentle warmth create a soothing environment, allowing you to recharge and wake up refreshed.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">A delightful surprise for croissant lovers</h3>
                    <p className="nameOfUser">by Emily on February 22, 2023</p>
                    <p className="longComment">Surprise the croissant lover in your life with the Heated Croissant Giant Pillow. Its charming design and cozy warmth will undoubtedly bring a smile to their face, making it a truly delightful and unexpected gift.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">A soothing remedy for stressful days</h3>
                    <p className="nameOfUser">by Noah on February 21, 2023</p>
                    <p className="longComment">After a long and stressful day, the Heated Croissant Giant Pillow offers a soothing remedy. Its comforting warmth and softness provide solace and relaxation, helping to melt away the tension and restore a sense of calm.</p>
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
                    <h3 className="shortComment">Un oreiller de cou délicieusement confortable et adorable</h3>
                    <p className="nameOfUser">par Sarah le 1 mai 2023</p>
                    <p className="longComment">Le Heated Croissant Giant Pillow est non seulement incroyablement confortable, mais aussi absolument adorable. Sa forme de croissant géant et sa poche pour bouillotte ressemblant à du chocolat ajoutent une touche de fantaisie à n'importe quel espace tout en offrant une expérience douillette et relaxante.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Bouillotte aux noyaux de cerise chaude pour une détente ultime</h3>
                    <p className="nameOfUser">par Ethan le 30 avril 2023</p>
                    <p className="longComment">L'inclusion d'une bouillotte aux noyaux de cerise réchauffable dans le Heated Croissant Giant Pillow est un véritable atout. Sa chaleur douce apaise les muscles fatigués et crée une atmosphère relaxante. C'est comme avoir une mini séance de spa chez soi.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">L'oreiller fantaisie parfait pour une ambiance douillette et amusante</h3>
                    <p className="nameOfUser">par Mia le 29 avril 2023</p>
                    <p className="longComment">Ajouter le Heated Croissant Giant Pillow à votre chambre ou votre salon apporte instantanément une ambiance douillette et amusante. Son design unique et son caractère câlin en font un coussin décoratif délicieux qui suscite la joie et invite à la détente.</p>
                </div>
                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">La poche pour bouillotte pourrait être plus grande pour un meilleur placement</h3>
                    <p className="nameOfUser">par Liam le 28 avril 2023</p>
                    <p className="longComment">Bien que la poche pour bouillotte du Heated Croissant Giant Pillow soit une caractéristique charmante, elle pourrait être légèrement plus grande pour assurer un meilleur placement et une meilleure stabilité de la bouillotte. Ajuster la taille améliorerait l'expérience globale et la commodité.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Voyagez confortablement et avec style avec ce coussin polyvalent</h3>
                    <p className="nameOfUser">par Emma le 27 avril 2023</p>
                    <p className="longComment">Le Heated Croissant Giant Pillow n'est pas seulement un ajout douillet à votre maison, mais aussi un compagnon de voyage parfait. Son design confortable et sa fonction d'appuie-tête de voyage garantissent une sieste relaxante pendant les longs trajets, rendant les voyages beaucoup plus agréables.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Un cadeau attrayant et câlin pour les amateurs de croissants</h3>
                    <p className="nameOfUser">par Noah le 26

                        avril 2023</p>
                    <p className="longComment">Si vous recherchez un cadeau unique pour un amateur de croissants, le Heated Croissant Giant Pillow est un choix fantastique. Son caractère câlin, associé à la poche pour bouillotte ressemblant à du chocolat, en fait un cadeau délicieux et accrocheur.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Détente et style réunis en un seul produit</h3>
                    <p className="nameOfUser">par Olivia le 25 avril 2023</p>
                    <p className="longComment">Le Heated Croissant Giant Pillow combine détente et style avec une grande aisance. Son matériau moelleux et sa poche pour bouillotte offrent une expérience douillette, tandis que le design du croissant ajoute une touche de charme fantaisiste à n'importe quel espace.</p>
                </div>
                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">La poche pour bouillotte pourrait bénéficier d'une isolation supplémentaire</h3>
                    <p className="nameOfUser">par William le 24 avril 2023</p>
                    <p className="longComment">Bien que la poche pour bouillotte du Heated Croissant Giant Pillow soit une fonctionnalité pratique, elle pourrait bénéficier d'une isolation supplémentaire pour garantir une meilleure rétention de la chaleur pendant de plus longues périodes. Cette amélioration maximiserait la chaleur et le confort de l'oreiller.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">La sieste n'a jamais été aussi délicieuse</h3>
                    <p className="nameOfUser">par Sophia le 23 avril 2023</p>
                    <p className="longComment">Avec le Heated Croissant Giant Pillow, la sieste devient un pur délice. La texture douce et câline de l'oreiller, associée à la chaleur apaisante de la bouillotte aux noyaux de cerise, crée l'environnement parfait pour une sieste reposante et revigorante.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Un ajout créatif et fonctionnel à toute maison</h3>
                    <p className="nameOfUser">par James le 22 avril 2023</p>
                    <p className="longComment">Le Heated Croissant Giant Pillow n'est pas seulement un objet décoratif, c'est aussi un ajout fonctionnel à toute maison. Sa combinaison de créativité et de praticité apporte joie et confort à votre espace, en en faisant un article remarquable.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Câlinez-vous avec ce coussin géant croissant irrésistible</h3>
                    <p className="nameOfUser">par Harper le 21 avril 2023</p>
                    <p className="longComment">Le Heated Croissant Giant Pillow est absolument irrésistible. Sa forme de croissant géant, son matériau moelleux et sa bouillotte aux noyaux de cerise chaude en font le compagnon parfait pour les soirées douillettes ou

                        les dimanches matins paresseux.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Taille pratique pour le confort et la portabilité</h3>
                    <p className="nameOfUser">par Benjamin le 20 avril 2023</p>
                    <p className="longComment">Le Heated Croissant Giant Pillow trouve le bon équilibre entre confort et portabilité. Sa taille est suffisamment généreuse pour une détente optimale, mais suffisamment compacte pour être facilement transportée lors de voyages, vous permettant ainsi de profiter de son confort où que vous alliez.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Un ajout charmant à la collection de tout amateur de croissants</h3>
                    <p className="nameOfUser">par Charlotte le 19 avril 2023</p>
                    <p className="longComment">Pour les passionnés de croissants, le Heated Croissant Giant Pillow est un incontournable absolu. Son souci du détail, de la poche pour bouillotte ressemblant à du chocolat à la texture moelleuse, en fait un ajout charmant et délicieux à la collection de tout amateur de croissants.</p>
                </div>
                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">La bouillotte pourrait conserver la chaleur plus longtemps</h3>
                    <p className="nameOfUser">par Daniel le 18 avril 2023</p>
                    <p className="longComment">Bien que le Heated Croissant Giant Pillow procure une chaleur réconfortante, la bouillotte pourrait bénéficier de meilleures propriétés de rétention de chaleur. Prolonger la durée de chaleur améliorerait l'expérience globale et garantirait des sessions de détente plus longues.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Le plaisir parfait pour vous-même ou un être cher</h3>
                    <p className="nameOfUser">par Amelia le 17 avril 2023</p>
                    <p className="longComment">Faites-vous plaisir ou surprenez un être cher avec le Heated Croissant Giant Pillow. Son design ravissant, associé à la chaleur réconfortante qu'il procure, en fait un cadeau unique et réfléchi qui apporte joie et détente.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Améliorez votre expérience de détente avec ce coussin douillet</h3>
                    <p className="nameOfUser">par Henry le 16 avril 2023</p>
                    <p className="longComment">Que vous lisiez, regardiez des films ou simplement vous détendiez, le Heated Croissant Giant Pillow améliore votre expérience de détente. Son matériau moelleux, associé à la chaleur apaisante de la bouillotte aux noyaux de cerise, crée une atmosphère douillette et invitante.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Voyagez avec style avec ce charmant coussin de voyage</h3>
                    <p className="nameOfUser">par Grace le 15 avril 2023</p>
                    <p className="longComment">Pourquoi se contenter d'un oreiller de voyage ordinaire lorsque vous pouvez voyager avec style grâce au Heated Croissant Giant Pillow ? Son design charmant et son soutien confortable en font un accessoire à la fois tendance et fonctionnel pour vos déplacements, vous garantissant d'arriver reposé et rafraîchi.</p>
                </div>
                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">La poche pour bouillotte pourrait être plus sécurisée</h3>
                    <p className="nameOfUser">par Samuel le 14 avril 2023</p>
                    <p className="longComment">Bien que la poche pour bouillotte du Heated Croissant Giant Pillow soit un ajout agréable, elle pourrait être plus sécurisée pour éviter que la bouillotte ne bouge pendant l'utilisation. Renforcer la poche assurerait une stabilité supplémentaire et garantirait un positionnement optimal.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Un véritable sujet de conversation</h3>
                    <p className="nameOfUser">par Lily le 13 avril 2023</p>
                    <p className="longComment">Le Heated Croissant Giant Pillow n'est pas seulement un oreiller, c'est un véritable sujet de conversation. Son design fantaisiste et son souci du détail en font une pièce unique et charmante qui suscite la curiosité et fait sourire quiconque le voit.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Un ajout charmant à un coin lecture confortable</h3>
                    <p className="nameOfUser">par Sebastian le 12 avril 2023</p>
                    <p className="longComment">Créez un coin lecture confortable avec le Heated Croissant Giant Pillow comme compagnon.

                        Sa douceur et son côté câlin, combinés à la chaleur subtile de la bouillotte aux noyaux de cerise, transforment vos séances de lecture en moments vraiment relaxants et agréables.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Détendez-vous et câlinez-vous avec cette délicieuse croissant</h3>
                    <p className="nameOfUser">par Ava le 11 avril 2023</p>
                    <p className="longComment">Après une longue journée épuisante, le Heated Croissant Giant Pillow offre une occasion parfaite de se détendre et de se relaxer. Enveloppez-vous de sa douceur, de sa chaleur et laissez les soucis de la journée fondre alors que vous vous plongez dans une détente pure.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Un cadeau confortable pour toutes les occasions</h3>
                    <p className="nameOfUser">par Leo le 10 avril 2023</p>
                    <p className="longComment">Vous cherchez un cadeau unique et confortable ? Le Heated Croissant Giant Pillow est parfait. Que ce soit pour un anniversaire, un anniversaire de mariage ou simplement pour témoigner de votre affection, cet oreiller est sûr d'apporter confort et sourires à vos proches.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Détendez-vous et câlinez-vous avec ce rêve de croissant</h3>
                    <p className="nameOfUser">par Isabella le 9 avril 2023</p>
                    <p className="longComment">Le Heated Croissant Giant Pillow est un rêve devenu réalité pour ceux qui apprécient le confort et la mignonnerie. C'est le compagnon idéal pour la détente, vous permettant de vous blottir et de profiter d'un moment chaud et douillet de pur bonheur.</p>
                </div>
                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">La bouillotte pourrait répartir la chaleur de manière plus homogène</h3>
                    <p className="nameOfUser">par Jack le 8 avril 2023</p>
                    <p className="longComment">Bien que le Heated Croissant Giant Pillow procure de la chaleur, la bouillotte pourrait répartir la chaleur de manière plus homogène. Cet ajustement garantirait une température constante et confortable dans tout l'oreiller, améliorant ainsi l'expérience globale.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Un croissant que vous pouvez câliner</h3>
                    <p className="nameOfUser">par Emily le 7 avril 2023</p>
                    <p className="longComment">Qui ne voudrait pas câliner un énorme croissant ? Le Heated Croissant Giant Pillow associe le confort et l'espièglerie d'un croissant en un seul package adorable. C'est un ajout charmant à toute séance de câlins.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Une façon unique d'apporter ch

                        aleur et détente</h3>
                    <p className="nameOfUser">par Alexander le 6 avril 2023</p>
                    <p className="longComment">Le Heated Croissant Giant Pillow offre une façon unique et ludique d'apporter chaleur et détente dans votre vie. Son design astucieux et sa nature douillette en font un article remarquable qui ne manquera pas de vous faire sourire.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">La sieste n'a jamais été aussi délicieuse</h3>
                    <p className="nameOfUser">par Victoria le 5 avril 2023</p>
                    <p className="longComment">Le Heated Croissant Giant Pillow transforme la sieste en une expérience délicieuse. Avec sa douceur, sa chaleur et sa forme de croissant charmante, il crée le cocon parfait pour une sieste revigorante et paisible, vous laissant frais et prêt à affronter la journée.</p>
                </div>
                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">La bouillotte pourrait avoir des réglages de température ajustables</h3>
                    <p className="nameOfUser">par Max le 4 avril 2023</p>
                    <p className="longComment">Bien que le Heated Croissant Giant Pillow procure une chaleur agréable, des réglages de température ajustables pour la bouillotte permettraient aux utilisateurs de personnaliser le niveau de chaleur en fonction de leurs préférences, offrant ainsi une expérience plus personnalisée.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Un cadeau délicieusement confortable pour vous-même ou un être cher</h3>
                    <p className="nameOfUser">par Zoe le 3 avril 2023</p>
                    <p className="longComment">Faites-vous plaisir ou surprenez quelqu'un de spécial avec le Heated Croissant Giant Pillow. Son design appétissant et sa chaleur réconfortante en font un cadeau vraiment délicieux qui vous enveloppe d'une étreinte douillette et vous fait sourire.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Le compagnon parfait pour les marathons de films paresseux</h3>
                    <p className="nameOfUser">par Jacob le 2 avril 2023</p>
                    <p className="longComment">Rendez vos marathons de films encore plus confortables avec le Heated Croissant Giant Pillow. Sa taille généreuse et sa texture douce offrent un soutien idéal pour se prélasser sur le canapé, vous permettant de vous détendre et de profiter de vos films préférés dans un confort ultime.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Une touche fantaisiste pour égayer votre espace de vie</h3>
                    <p className="nameOfUser">par Chloe le 1er avril 2023</p>
                    <p className="longComment">Le Heated Croissant Giant Pillow apporte une touche fantaisiste à n'importe quel espace de vie. Son design unique et son apparence ludique apportent joie et légèreté, illuminant instantanément la pièce et invitant à la détente.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">La poche pour la bouillotte pourrait être plus discrète</h3>
                    <p className="nameOfUser">par Andrew le 31 mars 2023</p>
                    <p className="longComment">Bien que la poche pour la bouillotte du Heated Croissant Giant Pillow soit pratique, elle pourrait être conçue de manière plus discrète afin de maintenir l'apparence homogène de l'oreiller. Ce petit ajustement améliorerait encore l'esthétique globale.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Le compagnon idéal pour une soirée fraîche et câline</h3>
                    <p className="nameOfUser">par Harper le 30 mars 2023</p>
                    <p className="longComment">Quand les soirées deviennent fraîches, le Heated Croissant Giant Pillow devient le compagnon idéal pour se blottir. Sa chaleur et son étreinte réconfortante créent un refuge douillet, vous permettant de vous détendre et de vous relaxer de la manière la plus délicieuse qui soit.</p>
                </div>
                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">La bouillotte pourrait avoir une période de rétention de chaleur plus longue</h3>
                    <p className="nameOfUser">par Olivia le 29 mars 2023</p>
                    <p className="

longComment">Bien que le Heated Croissant Giant Pillow procure une chaleur apaisante, prolonger la période de rétention de chaleur du coussin chauffant en noyaux de cerise permettrait des sessions de relaxation plus longues et plus agréables. Cette amélioration serait grandement appréciée.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">L'incarnation de la mignonnerie et du confort</h3>
                    <p className="nameOfUser">par Ethan le 28 mars 2023</p>
                    <p className="longComment">Le Heated Croissant Giant Pillow est l'incarnation de la mignonnerie et du confort. Son design adorable et son matériau moelleux en font un article indispensable pour tous ceux qui recherchent un mélange délicieux de douceur et de charme.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Un rêve inspiré d'un croissant pour votre salon</h3>
                    <p className="nameOfUser">par Mia le 27 mars 2023</p>
                    <p className="longComment">Rehaussez votre décoration de salon avec le Heated Croissant Giant Pillow. Son design inspiré d'un croissant ajoute une touche d'originalité et de personnalité à n'importe quel espace, créant une atmosphère chaleureuse et accueillante qui ne manquera pas d'impressionner.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Une manière délicieuse de se détendre en voyage</h3>
                    <p className="nameOfUser">par Liam le 26 mars 2023</p>
                    <p className="longComment">Dites adieu aux voyages inconfortables avec le Heated Croissant Giant Pillow. Sa taille adaptée aux voyages et sa texture moelleuse offrent un confort et un soutien indispensables, vous permettant de vous détendre et de profiter pleinement de votre voyage.</p>
                </div>
                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">La bouillotte pourrait avoir une durée de chauffage plus longue</h3>
                    <p className="nameOfUser">par Emily le 25 mars 2023</p>
                    <p className="longComment">Bien que le Heated Croissant Giant Pillow offre de la chaleur, prolonger la durée de chauffage du coussin chauffant en noyaux de cerise serait bénéfique pour des périodes de relaxation plus longues. Une chaleur plus durable améliorerait l'expérience globale.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Un croissant qui apporte chaleur et joie</h3>
                    <p className="nameOfUser">par Noah le 24 mars 2023</p>
                    <p className="longComment">Le Heated Croissant Giant Pillow n'est pas seulement un croissant ; c'est une source de chaleur et de joie. Son design adorable et son étreinte réconfortante créent une sensation de confort et de bonheur, en faisant un objet vraiment spécial à chérir.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="short

Comment">Parfait pour ceux qui adorent tout ce qui concerne les croissants</h3>
                    <p className="nameOfUser">par Grace le 23 mars 2023</p>
                    <p className="longComment">Si vous êtes un passionné de croissants, le Heated Croissant Giant Pillow est un ajout indispensable à votre collection. Sa forme de croissant charmante, associée à sa chaleur réconfortante, célèbre votre amour pour tout ce qui concerne les croissants de la manière la plus délicieuse qui soit.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Une retraite douillette loin du monde extérieur</h3>
                    <p className="nameOfUser">par Benjamin le 22 mars 2023</p>
                    <p className="longComment">Plongez dans une retraite douillette avec le Heated Croissant Giant Pillow. C'est comme si vous vous enveloppiez dans une étreinte chaleureuse et réconfortante, créant un sanctuaire loin du monde extérieur et vous permettant de vous détendre et de vous ressourcer.</p>
                </div>

                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Le coussin chauffant pourrait chauffer plus rapidement</h3>
                    <p className="nameOfUser">par Mia le 21 mars 2023</p>
                    <p className="longComment">Bien que le Heated Croissant Giant Pillow procure de la chaleur, un temps de chauffe plus rapide pour le coussin chauffant aux noyaux de cerise serait avantageux, surtout lorsque l'on a besoin d'un réconfort immédiat. Une chaleur rapide améliorerait l'expérience globale.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Une touche whimsique à votre rituel du coucher</h3>
                    <p className="nameOfUser">par Oliver le 20 mars 2023</p>
                    <p className="longComment">Dites au revoir aux oreillers ordinaires et adoptez la fantaisie du Heated Croissant Giant Pillow. Son design ludique ajoute une touche de magie à votre rituel du coucher, en faisant de chaque nuit une expérience joyeuse et confortable.</p>
                </div>
                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">Le coussin chauffant pourrait être mieux réparti</h3>
                    <p className="nameOfUser">par Sophia le 19 mars 2023</p>
                    <p className="longComment">Bien que le Heated Croissant Giant Pillow procure de la chaleur, s'assurer que le coussin chauffant est réparti de manière uniforme dans tout le coussin permettrait d'obtenir une chaleur constante et équilibrée. Cet ajustement améliorerait le niveau de confort global.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Un point de départ de conversation enchanteur pour les invités</h3>
                    <p className="nameOfUser">par William le 18 mars 2023</p>
                    <p className="longComment">Accueillez vos invités avec le Heated Croissant Giant Pillow et observez comment il devient instantanément un point de départ de conversation. Son design unique et charmant captive l'attention des visiteurs et ajoute une touche de fantaisie à votre maison.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Parfait pour les matins douillets et les dimanches paresseux</h3>
                    <p className="nameOfUser">par Charlotte le 17 mars 2023</p>
                    <p className="longComment">Commencez vos matins avec une note douillette ou passez des dimanches paresseux enveloppé dans la chaleur du Heated Croissant Giant Pillow. Son étreinte accueillante et sa chaleur douce créent l'atmosphère parfaite pour la détente et l'indulgence.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Un croissant qui apporte du confort où que vous alliez</h3>
                    <p className="nameOfUser">par James le 16 mars 2023</p>
                    <p className="longComment">Avec le Heated Croissant Giant Pillow, vous pouvez emporter le confort d'un croissant partout où vous allez. Sa taille pratique pour les déplacements et sa chaleur apaisante en font le compagnon idéal pour vos aventures, garantissant confort et relaxation où que vous soyez.</p>
                </div>
                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">Le coussin chauffant pourrait avoir une poche plus sécurisée</h3>
                    <p className="nameOfUser">par Amelia le 15 mars 2023</p>
                    <p className="longComment">Bien que le Heated Croissant Giant Pillow procure de la chaleur, s'assurer d'une poche plus sécurisée pour le coussin chauffant éviterait qu'il ne se déplace à l'intérieur du coussin. Cet ajustement maintiendrait le positionnement optimal et améliorerait l'expérience globale.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Plongez dans un moment douillet avec ce joyau en forme de croissant</h3>
                    <p className="nameOfUser">par Daniel le 14 mars 2023</p>
                    <p className="longComment">Le Heated Croissant Giant Pillow est un joyau qui vous permet de vous plonger dans un moment douillet de pur bonheur. Sa chaleur accueillante et sa texture moelleuse créent une oasis apaisante où vous pouvez vous détendre, vous relaxer et oublier le monde extérieur.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Un oreiller en forme de croissant qui satisfait votre envie de confort</h3>
                    <p className="nameOfUser">par Mia le 13 mars 2023</p>
                    <p className="longComment">Envie de confort ? Le Heated Croissant Giant Pillow est là pour satisfaire cette envie. Son design appétissant et sa chaleur divine offrent une expérience réconfortante qui ne manquera pas de vous procurer une sensation de douceur, de satisfaction et de relaxation totale.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Le compagnon idéal pour les nuits fraîches</h3>
                    <p className="nameOfUser">par Emma le 12 mars 2023</p>
                    <p className="longComment">Lorsque les nuits se rafraîchissent, le Heated Croissant Giant Pillow devient le compagnon idéal pour les câlins. Sa chaleur et son étreinte réconfortante créent un havre douillet où vous pouvez vous blottir, vous détendre et vous endormir en toute tranquillité.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Un ajout adorable à tout décor</h3>
                    <p className="nameOfUser">par Noah le 11 mars 2023</p>
                    <p className="longComment">Ajoutez une touche de mignonnerie à votre espace de vie avec le Heated Croissant Giant Pillow. Son design adorable et sa chaleur invitante en font un ajout charmant à tout décor, apportant charme et confort à votre maison.</p>
                </div>
                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">Le coussin chauffant pourrait conserver la chaleur plus longtemps</h3>
                    <p className="nameOfUser">par Olivia le 10 mars 2023</p>
                    <p className="longComment">Bien que le Heated Croissant Giant Pillow procure une chaleur initiale, prolonger la rétention de chaleur du coussin chauffant en noyaux de cerise améliorerait l'expérience globale. Une chaleur qui dure plus longtemps serait grandement appréciée pour une relaxation prolongée.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Un cadeau unique pour les amateurs de croissants</h3>
                    <p className="nameOfUser">par William le 9 mars 2023</p>
                    <p className="longComment">À la recherche d'un cadeau pour un amateur de croissants ? Ne cherchez pas plus loin que le Heated Croissant Giant Pillow. Son design novateur et sa chaleur réconfortante en font un cadeau unique et attentionné qui ne manquera pas de procurer joie et sourires.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Détente et chaleur dans un seul et même emballage ravissant</h3>
                    <p className="nameOfUser">par Sophia le 8 mars 2023</p>
                    <p className="longComment">Le Heated Croissant Giant Pillow combine le meilleur des deux mondes - détente et chaleur. C'est comme recevoir une étreinte réconfortante d'un croissant, vous enveloppant dans un cocon de douceur et vous permettant de vous détendre et de vous ressourcer.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Le compagnon ultime pour les soirées cinéma</h3>
                    <p className="nameOfUser">par Oliver le 7 mars 2023</p>
                    <p className="longComment">Rendez vos soirées cinéma encore meilleures avec le Heated Croissant Giant Pillow. Sa douceur et sa chaleur légère en font le compagnon idéal pour les câlins pendant que vous profitez de vos films préférés. C'est comme avoir votre propre confort de cinéma personnel.</p>
                </div>
                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">Le coussin chauffant pourrait être plus personnalisable</h3>
                    <p className="nameOfUser">par Charlotte le 6 mars 2023</p>
                    <p className="longComment">Bien que le Heated Croissant Giant Pillow procure de la chaleur, avoir des réglages de chaleur ajustables sur le coussin chauffant en noyaux de cerise offrirait une expérience personnalisable. Cette flexibilité répondrait aux préférences et aux besoins individuels.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Un délicieux sujet de conversation</h3>
                    <p className="nameOfUser">par Ethan le 5 mars 2023</p>
                    <p className="longComment">Le Heated Croissant Giant Pillow n'est pas seulement un accessoire confortable, mais aussi un délicieux sujet de conversation. Son design unique et son charme irrésistible attirent l'attention et suscitent l'envie de connaître l'histoire derrière ce croissant magique.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Un régal pour les sens</h3>
                    <p className="nameOfUser">par Amelia le 4 mars 2023</p>
                    <p className="longComment">Le Heated Croissant Giant Pillow est un régal pour les sens. Son apparence appétissante, sa texture moelleuse et sa chaleur réconfortante créent une expérience sensorielle agréable qui ravit à la fois le corps et l'esprit.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Le compagnon parfait pour les nuits froides</h3>
                    <p className="nameOfUser">par Noah le 3 mars 2023</p>
                    <p className="longComment">Lorsque les températures chutent et que les nuits deviennent froides, le Heated Croissant Giant Pillow devient votre compagnon idéal. Sa chaleur réconfortante vous enveloppe de douceur et vous permet de passer des nuits chaudes et agréables.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Un oreiller délicieusement confortable</h3>
                    <p className="nameOfUser">par James le 2 mars 2023</p>
                    <p className="longComment">Le Heated Croissant Giant Pillow est un oreiller délicieusement confortable qui vous permet de vous détendre et de vous reposer avec style. Son design unique en forme de croissant et sa chaleur apaisante en font une expérience de sommeil luxueuse et agréable.</p>
                </div>
                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">Le coussin chauffant pourrait être plus puissant</h3>
                    <p className="nameOfUser">par Emily le 1er mars 2023</p>
                    <p className="longComment">Bien que le Heated Croissant Giant Pillow procure de la chaleur, une puissance accrue pour le coussin chauffant en noyaux de cerise permettrait d'obtenir une chaleur plus intense et plus rapidement. Cette amélioration satisferait ceux qui recherchent une chaleur plus intense.</p>
                </div>
            </div>}
        </div>
    );
};


export default ReviewsPillow;
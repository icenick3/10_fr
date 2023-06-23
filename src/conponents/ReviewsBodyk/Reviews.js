import React from 'react';
import './Reviews.css'
import {Stars5, Stars2, Stars4, Stars1, Stars3} from "../Stars/Stars";

const ReviewsBodyk = ({setShowReviews, showReviews, lang}) => {
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
                    <h3 className="shortComment">Adorable and practical!</h3>
                    <p className="nameOfUser">by Sophie on June 1, 2023</p>
                    <p className="longComment">This baby onesie is simply adorable! The round neckline and openings make
                        dressing and undressing easy. The short sleeves are perfect for hot days. Moreover, the snap
                        button closure is very practical. I also love the decorative print. My baby looks so cute in
                        it!</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Comfortable and cute</h3>
                    <p className="nameOfUser">by Emma on May 30, 2023</p>
                    <p className="longComment">This baby onesie is both comfortable and cute. The round neckline is
                        gentle on my baby's delicate skin. The openings allow for easy dressing and undressing. The
                        short sleeves are ideal for summer. I also appreciate the snap button closure, which makes
                        diaper changes easier. The decorative print adds a touch of style. I recommend it!</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Exceptional quality</h3>
                    <p className="nameOfUser">by Lucas on May 28, 2023</p>
                    <p className="longComment">This baby onesie is of exceptional quality. The round neckline is
                        well-finished, and the openings are sturdy and easy to use. The short sleeves are convenient for
                        hot days. The snap button closure works perfectly. The decorative print is also very lovely. I
                        am very satisfied with this purchase.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Original design</h3>
                    <p className="nameOfUser">by Léa on May 25, 2023</p>
                    <p className="longComment">This baby onesie has an original design that sets it apart from others. I
                        really like the round neckline, which adds a touch of style. The openings for easy dressing and
                        undressing are very practical, especially during diaper changes. The short sleeves are perfect
                        for the season. And the snap button closure makes life so much easier. The decorative print is
                        adorable. I highly recommend it!</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Cozy and cute</h3>
                    <p className="nameOfUser">by Noah on May 23, 2023</p>
                    <p className="longComment">This baby onesie is both cozy and cute. The round neckline is comfortable
                        for my baby, and the openings make dressing and undressing much easier. The short sleeves are
                        perfect for sunny days. The snap button closure is very convenient, especially during diaper
                        changes. And the decorative print adds a touch of uniqueness. I'm delighted with this
                        purchase!</p>
                </div>


                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Practical and comfortable</h3>
                    <p className="nameOfUser">by Camille on May 20, 2023</p>
                    <p className="longComment">This baby bodysuit is both practical and comfortable. The round neckline
                        doesn't tighten around my baby's neck, and the openings make it easy to dress and undress him in
                        a snap. The short sleeves are perfect for hot days. The snap button closure is very convenient
                        during diaper changes. The decorative print is also very cute. I highly recommend it!</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Perfect for summer</h3>
                    <p className="nameOfUser">by Gabriel on May 18, 2023</p>
                    <p className="longComment">This baby bodysuit is perfect for summer. The round neckline is
                        comfortable and doesn't squeeze my baby's neck. The openings make dressing and undressing easy,
                        even when my baby is fussy. The short sleeves allow for good ventilation. The snap button
                        closure is very practical and secure. And the decorative print is really cute. I am very
                        satisfied with this purchase!</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Very cute and practical</h3>
                    <p className="nameOfUser">by Emma on May 15, 2023</p>
                    <p className="longComment">This baby bodysuit is both very cute and practical. The round neckline is
                        gentle on my baby's skin, and the openings make it easy to dress and undress him. The short
                        sleeves are perfect for the season. The snap button closure is sturdy and easy to use. And the
                        decorative print is adorable. I recommend it!</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Comfortable and stylish</h3>
                    <p className="nameOfUser">by Louis on May 13, 2023</p>
                    <p className="longComment">This baby bodysuit is both comfortable and stylish. The round neckline is
                        gentle and doesn't squeeze my baby's neck. The openings for easy dressing and undressing are
                        very practical, especially during diaper changes. The short sleeves are ideal for sunny days.
                        The snap button closure is sturdy and works perfectly. And the decorative print adds a touch of
                        style. I am really satisfied with this purchase!</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Superb quality</h3>
                    <p className="nameOfUser">by Clara on May 10, 2023</p>
                    <p className="longComment">This baby bodysuit is of superb quality. The round neckline is
                        well-finished and doesn't cause any irritation to my baby's sensitive skin. The openings make it
                        easy to dress and undress him, even when my baby wiggles. The short sleeves are lightweight and
                        breathable. The snap button closure is sturdy and resistant. And the decorative print is really
                        cute. I am very satisfied with this purchase!</p>
                </div>


                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Lovely and practical</h3>
                    <p className="nameOfUser">by Emma on May 8, 2023</p>
                    <p className="longComment">This baby bodysuit is lovely and practical. The round neckline is gentle
                        on my baby's skin, and the openings for easy dressing and undressing are very practical during
                        diaper changes. The short sleeves are perfect for the hot season. The snap button closure works
                        well and is resistant. And the decorative print adds a touch of style. I highly recommend this
                        baby bodysuit to all parents!</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Superior quality</h3>
                    <p className="nameOfUser">by Hugo on May 5, 2023</p>
                    <p className="longComment">This baby bodysuit is of superior quality. The round neckline is soft and
                        doesn't cause any irritation to my baby's skin. The openings for easy dressing and undressing
                        are practical and sturdy. The short sleeves are lightweight and perfect for hot days. The snap
                        button closure is sturdy and durable. And the decorative print is very cute. I am extremely
                        satisfied with this purchase!</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Adorable and practical</h3>
                    <p className="nameOfUser">by Camille on May 3, 2023</p>
                    <p className="longComment">This baby bodysuit is adorable and practical. The round neckline is soft
                        and doesn't squeeze my baby's neck. The openings for easy dressing and undressing make life so
                        much easier, especially during diaper changes. The short sleeves are perfect for hot days. The
                        snap button closure is sturdy and reliable. And the decorative print is really cute. I highly
                        recommend this baby bodysuit without hesitation!</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Charming design</h3>
                    <p className="nameOfUser">by Léa on May 1, 2023</p>
                    <p className="longComment">This baby bodysuit has a charming design that sets it apart from others.
                        The round neckline is comfortable and doesn't squeeze my baby's neck. The openings for easy
                        dressing and undressing are practical and sturdy. The short sleeves are perfect for sunny days.
                        The snap button closure works well. And the decorative print adds a touch of style. I am very
                        satisfied with this purchase!</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Comfortable and resistant</h3>
                    <p className="nameOfUser">by Gabriel on April 29, 2023</p>
                    <p className="longComment">This baby bodysuit is both comfortable and resistant. The round neckline
                        is gentle on my baby's delicate skin. The openings for easy dressing and undressing are very
                        practical, especially when my baby is restless. The short sleeves allow for good ventilation.
                        The snap button closure is sturdy and durable. And the decorative print is adorable. I am very
                        satisfied with this purchase and highly recommend it!</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Beautiful finish</h3>
                    <p className="nameOfUser">by Louis on April 27, 2023</p>
                    <p className="longComment">This baby bodysuit has a beautiful finish. The round neckline is
                        well-designed and doesn't rub against my baby's skin. The openings for easy dressing and
                        undressing work perfectly. The short sleeves are lightweight and comfortable. The snap button
                        closure is sturdy and convenient. And the decorative print is really cute. I am very satisfied
                        with this purchase and highly recommend it!</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Super cute</h3>
                    <p className="nameOfUser">by Clara on April 25, 2023</p>
                    <p className="longComment">This baby bodysuit is super cute. The round neckline is gentle on my
                        baby's sensitive skin. The openings for easy dressing and undressing make life so much more
                        convenient. The short sleeves are perfect for hot days. The snap button closure is sturdy and
                        easy to use. And the decorative print is absolutely adorable. I am very satisfied with my
                        purchase!</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Good quality</h3>
                    <p className="nameOfUser">by Hugo on April 22, 2023</p>
                    <p className="longComment">This baby bodysuit is of good quality. The round neckline is
                        well-finished and doesn't cause any irritation on my baby's delicate skin. The openings for easy
                        dressing and undressing are practical, especially during diaper changes. The short sleeves are
                        lightweight and suitable for warm temperatures. The snap button closure is sturdy and secure.
                        And the decorative print is really cute. I recommend this baby bodysuit to all parents!</p>
                </div>


                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Practical and comfortable</h3>
                    <p className="nameOfUser">by Léa on April 20, 2023</p>
                    <p className="longComment">This baby bodysuit is both practical and comfortable. The round neckline is soft and doesn't squeeze my baby's neck. The openings for easy dressing and undressing are very convenient, especially when my baby is restless. The short sleeves provide good freedom of movement. The snap button closure is sturdy and durable. And the decorative print is really lovely. I am thrilled with this purchase!</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Superb for summer</h3>
                    <p className="nameOfUser">by Emma on April 18, 2023</p>
                    <p className="longComment">This baby bodysuit is superb for summer. The round neckline is comfortable and doesn't squeeze my baby's neck. The openings for easy dressing and undressing are very practical, especially during diaper changes. The short sleeves are perfect for hot days. The snap button closure is sturdy and secure. And the decorative print is really cute. I highly recommend this baby bodysuit!</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Comfortable and stylish</h3>
                    <p className="nameOfUser">by Gabriel on April 16, 2023</p>
                    <p className="longComment">This baby bodysuit is both comfortable and stylish. The round neckline is soft and doesn't squeeze my baby's neck. The openings for easy dressing and undressing are very convenient, especially during diaper changes. The short sleeves allow for good ventilation. The snap button closure works perfectly. And the decorative print adds a touch of style. I am very satisfied with this purchase!</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Soft material</h3>
                    <p className="nameOfUser">by Louis on April 14, 2023</p>
                    <p className="longComment">This baby bodysuit is made of a soft and comfortable material. The round neckline is well-finished and doesn't cause any irritation on my baby's sensitive skin. The openings for easy dressing and undressing are very practical, especially when my baby is restless. The short sleeves allow for good ventilation. The snap button closure is sturdy and durable. And the decorative print is absolutely adorable. I highly recommend this baby bodysuit!</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Excellent value for money</h3>
                    <p className="nameOfUser">by Camille on April 12, 2023</p>
                    <p className="longComment">This baby bodysuit offers excellent value for money. The round neckline is gentle on my baby's skin. The openings for easy dressing and undressing are very practical, especially during diaper changes. The short sleeves are lightweight and suitable for hot days. The snap button closure is sturdy and resistant. And the decorative print is really cute. I am very satisfied with this purchase!</p>
                </div>
                </div>
            </div>
            );
            };


            export default ReviewsBodyk;
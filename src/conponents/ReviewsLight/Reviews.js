import React from 'react';
import './Reviews.css'
import {Stars5, Stars2, Stars4, Stars1, Stars3} from "../Stars/Stars";

const ReviewsLight = ({setShowReviews, showReviews, lang}) => {
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
                    <h3 className="shortComment">Bright and versatile flashlight</h3>
                    <p className="nameOfUser">by John on June 7, 2023</p>
                    <p className="longComment">The Blukar Flashlight is incredibly bright and versatile. It's perfect
                        for camping, hiking, and any outdoor adventure. The adjustable brightness and zoomable feature
                        provide excellent lighting options in various situations.</p>
                </div>

                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Great value for the price</h3>
                    <p className="nameOfUser">by Emily on June 6, 2023</p>
                    <p className="longComment">I'm pleasantly surprised by the Blukar Flashlight's performance given its
                        affordable price. It's bright, durable, and the adjustable brightness levels come in handy. It's
                        definitely a great value for the money.</p>
                </div>

                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Compact and lightweight</h3>
                    <p className="nameOfUser">by Michael on June 5, 2023</p>
                    <p className="longComment">The Blukar Flashlight is the perfect size for carrying in my backpack.
                        It's compact and lightweight, making it easy to take on camping trips or hikes. Despite its
                        small size, the brightness and beam distance are impressive.</p>
                </div>

                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">Decent flashlight, but average battery life</h3>
                    <p className="nameOfUser">by Sarah on June 4, 2023</p>
                    <p className="longComment">The Blukar Flashlight provides decent illumination, but I've noticed that
                        the battery life could be better. It's still a reliable option for shorter outdoor activities,
                        but for longer trips, it may require extra batteries or a power source.</p>
                </div>

                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Impressive durability and water resistance</h3>
                    <p className="nameOfUser">by Jessica on June 3, 2023</p>
                    <p className="longComment">I accidentally dropped my Blukar Flashlight in a puddle, but to my
                        surprise, it was completely unaffected. The durability and water resistance of this flashlight
                        are truly impressive. It's a reliable choice for any weather condition.</p>
                </div>

                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Good grip and comfortable to hold</h3>
                    <p className="nameOfUser">by Robert on June 2, 2023</p>
                    <p className="longComment">The Blukar Flashlight features a textured grip that feels secure in my
                        hand. It's comfortable to hold, even for extended periods. The adjustable brightness settings
                        allow me to customize the light output to my preference.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Great flashlight for camping</h3>
                    <p className="nameOfUser">by John on June 1, 2023</p>
                    <p className="longComment">The Blukar Flashlight is perfect for camping trips. It's super bright,
                        and the adjustable brightness allows you to conserve battery when needed. Highly
                        recommended!</p>
                </div>
                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">Average beam distance</h3>
                    <p className="nameOfUser">by Lisa on June 1, 2023</p>
                    <p className="longComment">The Blukar Flashlight provides decent brightness, but the beam distance
                        is average compared to some other flashlights I've used. It's suitable for general use, but if
                        you need a longer reach, you might want to consider a different option.</p>
                </div>

                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Excellent for emergency situations</h3>
                    <p className="nameOfUser">by Matthew on May 31, 2023</p>
                    <p className="longComment">I keep the Blukar Flashlight in my emergency kit, and it has proven to be
                        a reliable tool during power outages and other emergencies. The adjustable brightness and
                        long-lasting battery ensure that I'm prepared for any situation.</p>
                </div>

                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Versatile flashlight for everyday use</h3>
                    <p className="nameOfUser">by Olivia on May 30, 2023</p>
                    <p className="longComment">The Blukar Flashlight is my go-to tool for various everyday tasks.
                        Whether it's finding something in a dark corner or working on a DIY project, the adjustable
                        brightness and compact size make it a versatile flashlight to have around the house.</p>
                </div>

                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Solid construction and reliable performance</h3>
                    <p className="nameOfUser">by William on May 29, 2023</p>
                    <p className="longComment">The Blukar Flashlight is well-built with a sturdy construction. It feels
                        durable and capable of withstanding rough handling. I've used it on multiple camping trips, and
                        it has consistently provided reliable performance.</p>
                </div>

                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">Lacks advanced features</h3>
                    <p className="nameOfUser">by Ashley on May 28, 2023</p>
                    <p className="longComment">While the Blukar Flashlight gets the job done, it lacks some of the
                        advanced features found in higher-end flashlights. However, if you're looking for a basic and
                        reliable option without breaking the bank, it's worth considering.</p>
                </div>

                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Great for night walks</h3>
                    <p className="nameOfUser">by Daniel on May 27, 2023</p>
                    <p className="longComment">I frequently take night walks, and the Blukar Flashlight has become an
                        essential companion. It illuminates the path ahead with a bright and focused beam, ensuring I
                        can see any potential obstacles along the way.</p>
                </div>

                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Convenient size for everyday carry</h3>
                    <p className="nameOfUser">by Elizabeth on May 26, 2023</p>
                    <p className="longComment">The Blukar Flashlight is compact enough to fit in my pocket, making it a
                        convenient everyday carry item. The adjustable brightness levels come in handy in different
                        situations, whether I'm searching for something in the dark or navigating through dimly lit
                        areas.</p>
                </div>















                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">A reliable tool for camping</h3>
                    <p className="nameOfUser">by Andrew on May 25, 2023</p>
                    <p className="longComment">The Blukar Flashlight has been my trusted companion on camping trips.
                        It's bright enough to light up the entire campsite, and the adjustable brightness allows for a
                        softer light when needed. The compact size makes it easy to pack and carry.</p>
                </div>

                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">Battery drains quickly on high brightness</h3>
                    <p className="nameOfUser">by Samantha on May 24, 2023</p>
                    <p className="longComment">I've noticed that the Blukar Flashlight's battery drains relatively
                        quickly when using the highest brightness setting. It's still functional, but it's important to
                        keep spare batteries on hand for extended use.</p>
                </div>

                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Handy tool for car emergencies</h3>
                    <p className="nameOfUser">by Benjamin on May 23, 2023</p>
                    <p className="longComment">The compact size of the Blukar Flashlight makes it a perfect tool to keep
                        in the car for emergencies. Whether it's changing a tire at night or inspecting the engine, this
                        flashlight provides ample light and peace of mind.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Handy tool for car emergencies</h3>
                    <p className="nameOfUser">by Benjamin on May 23, 2023</p>
                    <p className="longComment">The compact size of the Blukar Flashlight makes it a perfect tool to keep
                        in the car for emergencies. Whether it's changing a tire at night or inspecting the engine, this
                        flashlight provides ample light and peace of mind.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Bright and efficient</h3>
                    <p className="nameOfUser">by Emily on May 22, 2023</p>
                    <p className="longComment">The Blukar Flashlight is incredibly bright and efficient. It's impressive
                        how such a compact flashlight can produce such a powerful beam of light. It's my go-to choice
                        for outdoor activities and emergencies.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Great value for the price</h3>
                    <p className="nameOfUser">by David on May 21, 2023</p>
                    <p className="longComment">The Blukar Flashlight offers excellent value for its price. It performs
                        exceptionally well, and the build quality is top-notch. I've compared it to more expensive
                        flashlights, and the Blukar holds its own without breaking the bank.</p>
                </div>
                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">Average battery life</h3>
                    <p className="nameOfUser">by Sophia on May 20, 2023</p>
                    <p className="longComment">The Blukar Flashlight has an average battery life. It lasts for a decent
                        amount of time on a single charge, but it's not the longest-lasting flashlight I've used. It's
                        still reliable enough for everyday use.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Perfect for power outages</h3>
                    <p className="nameOfUser">by Matthew on May 19, 2023</p>
                    <p className="longComment">I keep the Blukar Flashlight handy for power outages, and it has never
                        let me down. The brightness is enough to light up an entire room, and the adjustable beam comes
                        in handy when you need to focus the light on specific areas.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Durable and water-resistant</h3>
                    <p className="nameOfUser">by Isabella on May 18, 2023</p>
                    <p className="longComment">The Blukar Flashlight is built to last. It has a rugged design and is
                        water-resistant, making it suitable for various outdoor activities. I've accidentally dropped it
                        a few times, but it still works perfectly fine.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Must-have for camping enthusiasts</h3>
                    <p className="nameOfUser">by James on May 17, 2023</p>
                    <p className="longComment">If you're a camping enthusiast like me, the Blukar Flashlight is a
                        must-have gear. It provides exceptional illumination in the darkest of nights, and the
                        adjustable brightness allows you to customize the light according to your needs.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Comfortable grip and easy to use</h3>
                    <p className="nameOfUser">by Mia on May 16, 2023</p>
                    <p className="longComment">The Blukar Flashlight has a comfortable grip, and the buttons are easy to
                        operate even with gloves on. It's a user-friendly flashlight that doesn't require much effort to
                        use, which is important during emergencies or stressful situations.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Impressive beam distance</h3>
                    <p className="nameOfUser">by Michael on May 15, 2023</p>
                    <p className="longComment">I'm amazed by the beam distance of the Blukar Flashlight. It can reach a
                        considerable distance, which is great for outdoor activities like hiking or searching for lost
                        items in large open areas. Definitely exceeded my expectations!</p>
                </div>
                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">Limited battery indicator</h3>
                    <p className="nameOfUser">by Chloe on May 14, 2023</p>
                    <p className="longComment">The Blukar Flashlight has a battery indicator, but it's quite basic. It
                        only provides a general idea of the remaining battery level, so it's a good idea to keep track
                        of how long you've been using the flashlight to avoid sudden battery depletion.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Versatile and lightweight</h3>
                    <p className="nameOfUser">by Alexander on May 13, 2023</p>
                    <p className="longComment">The Blukar Flashlight is a versatile tool that I take with me on outdoor
                        adventures. It's lightweight, so it doesn't add much weight to my backpack, and the adjustable
                        brightness settings are useful in various scenarios.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Decent battery performance</h3>
                    <p className="nameOfUser">by Natalie on May 12, 2023</p>
                    <p className="longComment">The Blukar Flashlight's battery performance is decent. It lasts long
                        enough for most tasks, but if you're planning an extended camping trip, it's advisable to carry
                        spare batteries or have a backup charging option.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">A reliable companion in the dark</h3>
                    <p className="nameOfUser">by Joseph on May 11, 2023</p>
                    <p className="longComment">The Blukar Flashlight has become my trusted companion when I venture into
                        the darkness. Its powerful beam and long-lasting battery give me peace of mind, whether I'm
                        exploring caves or simply walking my dog at night.</p>
                </div>














                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">Average build quality</h3>
                    <p className="nameOfUser">by Lily on May 10, 2023</p>
                    <p className="longComment">The build quality of the Blukar Flashlight is average. It's not as
                        durable as some higher-end flashlights, but it still holds up well under normal use. I recommend
                        being cautious with rough handling to ensure its longevity.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Compact and easy to carry</h3>
                    <p className="nameOfUser">by Christopher on May 9, 2023</p>
                    <p className="longComment">The Blukar Flashlight's compact size makes it incredibly easy to carry.
                        Whether I'm going on a hike or just running errands at night, I can slip it into my pocket or
                        attach it to my keychain without any hassle.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Good value for money</h3>
                    <p className="nameOfUser">by Evelyn on May 8, 2023</p>
                    <p className="longComment">Considering its affordable price, the Blukar Flashlight offers good value
                        for money. It's not the most advanced flashlight out there, but it gets the job done and is
                        reliable for everyday use or emergencies.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Excellent customer service</h3>
                    <p className="nameOfUser">by Samuel on May 7, 2023</p>
                    <p className="longComment">I had an issue with my Blukar Flashlight, but the customer service team
                        was fantastic. They promptly addressed my concern and provided a replacement. It's reassuring to
                        know that the company stands behind its product.</p>
                </div>
                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">Slightly heavy for prolonged use</h3>
                    <p className="nameOfUser">by Victoria on May 6, 2023</p>
                    <p className="longComment">The Blukar Flashlight, while compact, feels slightly heavy when used for
                        an extended period. It's not a major issue for short tasks, but if you anticipate using it for
                        long durations, you might want to consider a lighter option.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Reliable performance in all weather conditions</h3>
                    <p className="nameOfUser">by Jonathan on May 5, 2023</p>
                    <p className="longComment">The Blukar Flashlight has proven its reliability in various weather
                        conditions. I've used it in rain, snow, and extreme heat, and it has never failed me. It's a
                        durable and dependable flashlight.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Handy for power outages</h3>
                    <p className="nameOfUser">by Grace on May 4, 2023</p>
                    <p className="longComment">Living in an area prone to power outages, the Blukar Flashlight has been
                        a lifesaver. It provides ample light to navigate through the dark and helps me feel more secure
                        during those unexpected situations.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Impressive battery longevity</h3>
                    <p className="nameOfUser">by Benjamin on May 3, 2023</p>
                    <p className="longComment">The battery of the Blukar Flashlight lasts impressively long. I've used
                        it extensively on camping trips, and it has consistently provided reliable performance without
                        needing frequent battery changes. It's a great convenience.</p>
                </div>
                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">Slightly bulky for pocket carry</h3>
                    <p className="nameOfUser">by Penelope on May 2, 2023</p>
                    <p className="longComment">The Blukar Flashlight is a bit bulkier than I expected for pocket carry.
                        While it's still manageable, it's worth noting if you prefer a slimmer and more streamlined
                        flashlight for everyday use.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Versatile and reliable</h3>
                    <p className="nameOfUser">by Daniel on May 1, 2023</p>
                    <p className="longComment">The Blukar Flashlight is a versatile and reliable tool for various tasks.
                        Whether I'm camping, working on DIY projects, or simply need a flashlight around the house, it
                        consistently delivers excellent performance.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Decent beam distance</h3>
                    <p className="nameOfUser">by Hannah on April 30, 2023</p>
                    <p className="longComment">The Blukar Flashlight offers a decent beam distance. It's suitable for
                        most everyday tasks and outdoor activities. However, if you require an exceptionally long reach,
                        you might want to explore flashlights with more specialized optics.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Sturdy construction for outdoor use</h3>
                    <p className="nameOfUser">by Samuel on April 29, 2023</p>
                    <p className="longComment">The Blukar Flashlight has a sturdy construction that can withstand
                        outdoor adventures. I've taken it camping, hiking, and fishing, and it has endured rough
                        handling and exposure to various elements without any issues.</p>
                </div>
                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">Limited brightness levels</h3>
                    <p className="nameOfUser">by Stella on April 28, 2023</p>
                    <p className="longComment">The Blukar Flashlight has a limited number of brightness levels. While it
                        covers most basic lighting needs, it would be nice to have more options, especially for
                        situations that require subtle or extremely bright lighting.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Great for outdoor adventures</h3>
                    <p className="nameOfUser">by Liam on April 27, 2023</p>
                    <p className="longComment">If you love outdoor adventures like hiking, camping, or night
                        photography, the Blukar Flashlight is a great companion. Its powerful beam and long battery life
                        ensure you're always prepared and can focus on enjoying the experience.</p>
                </div>












                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Comfortable to hold for extended periods</h3>
                    <p className="nameOfUser">by Emily on April 26, 2023</p>
                    <p className="longComment">The ergonomic design of the Blukar Flashlight makes it comfortable to
                        hold, even for extended periods. Whether I'm working on repairs or exploring outdoors, I don't
                        experience hand fatigue or discomfort.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Excellent value for the price</h3>
                    <p className="nameOfUser">by Oliver on April 25, 2023</p>
                    <p className="longComment">The Blukar Flashlight offers excellent value for its price. It provides
                        reliable performance, durability, and versatile functionality without breaking the bank. It's a
                        smart choice for those looking for a budget-friendly flashlight.</p>
                </div>
                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">Switch feels slightly flimsy</h3>
                    <p className="nameOfUser">by Mia on April 24, 2023</p>
                    <p className="longComment">The switch on the Blukar Flashlight feels slightly flimsy. It hasn't
                        caused any functional issues so far, but I'm cautious when using it to avoid any potential
                        damage or failure in the future.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Dependable during power outages</h3>
                    <p className="nameOfUser">by Noah on April 23, 2023</p>
                    <p className="longComment">The Blukar Flashlight has proven its dependability during power outages.
                        It has been my go-to source of light when the electricity goes out, providing bright and
                        consistent illumination to navigate my home.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Useful for night photography</h3>
                    <p className="nameOfUser">by Sofia on April 22, 2023</p>
                    <p className="longComment">As a photographer, I find the Blukar Flashlight incredibly useful for
                        night photography. It offers a focused and adjustable beam that helps me illuminate specific
                        subjects or create interesting lighting effects.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">An essential tool for emergencies</h3>
                    <p className="nameOfUser">by Lucas on April 21, 2023</p>
                    <p className="longComment">The Blukar Flashlight is an essential tool to have in case of
                        emergencies. Whether it's a power outage, car breakdown, or natural disaster, it provides the
                        necessary light and reassurance to navigate challenging situations.</p>
                </div>
                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">Limited waterproofing</h3>
                    <p className="nameOfUser">by Harper on April 20, 2023</p>
                    <p className="longComment">The Blukar Flashlight has some degree of water resistance, but it's not
                        fully waterproof. It can handle splashes and light rain, but I wouldn't submerge it or expose it
                        to heavy downpours without protection.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Versatile and user-friendly</h3>
                    <p className="nameOfUser">by Alexander on April 19, 2023</p>
                    <p className="longComment">The Blukar Flashlight is a versatile and user-friendly tool. Its simple
                        interface and adjustable brightness levels make it accessible for anyone, whether you're an
                        outdoor enthusiast or simply need a reliable flashlight at home.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Good balance of throw and flood</h3>
                    <p className="nameOfUser">by Chloe on April 18, 2023</p>
                    <p className="longComment">The Blukar Flashlight strikes a good balance between throw and flood. It
                        offers a focused beam for long-distance visibility while also providing a wider illumination for
                        closer tasks. It's suitable for a variety of lighting needs.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Impressive durability for the price</h3>
                    <p className="nameOfUser">by Matthew on April 17, 2023</p>
                    <p className="longComment">Considering its affordable price, the Blukar Flashlight offers impressive
                        durability. I've accidentally dropped it multiple times, and it has remained intact without any
                        noticeable damage. It's a reliable companion for everyday use.</p>
                </div>
                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">Average battery life</h3>
                    <p className="nameOfUser">by Aria on April 16, 2023</p>
                    <p className="longComment">The Blukar Flashlight has an average battery life. It lasts sufficiently
                        for most tasks, but if you plan to use it extensively or for extended periods, it's wise to have
                        spare batteries or a backup power source.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Perfect for camping adventures</h3>
                    <p className="nameOfUser">by James on April 15, 2023</p>
                    <p className="longComment">If you're into camping, the Blukar Flashlight is a perfect companion. Its
                        compact size, bright output, and adjustable settings make it ideal for illuminating campsites,
                        navigating trails, and finding your way in the dark.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Decent battery efficiency</h3>
                    <p className="nameOfUser">by Harper on April 14, 2023</p>
                    <p className="longComment">The Blukar Flashlight exhibits decent battery efficiency. It doesn't
                        drain power excessively, even on higher brightness settings. This feature ensures that you can
                        rely on it for extended use without constantly worrying about battery replacement.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">A reliable companion for night fishing</h3>
                    <p className="nameOfUser">by Sebastian on April 13, 2023</p>
                    <p className="longComment">The Blukar Flashlight has become an indispensable tool for my night
                        fishing trips. Its bright and focused beam helps me see the water surface and navigate my gear
                        effortlessly. It's durable enough to withstand occasional water splashes.</p>
                </div>
                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">Slightly limited beam distance</h3>
                    <p className="nameOfUser">by Penelope on April 12, 2023</p>
                    <p className="longComment">While the Blukar Flashlight offers adequate brightness, the beam distance
                        falls slightly short of my expectations. It's sufficient for most tasks, but if you require a
                        longer reach, you may want to explore alternatives with more powerful beams.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">A reliable tool for power outages</h3>
                    <p className="nameOfUser">by Noah on April 11, 2023</p>
                    <p className="longComment">During power outages, the Blukar Flashlight has been a reliable tool for
                        me and my family. It provides bright and consistent light, allowing us to move around safely and
                        comfortably until the electricity is restored.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Ideal for outdoor adventures</h3>
                    <p className="nameOfUser">by Sophia on April 10, 2023</p>
                    <p className="longComment">If you love outdoor adventures like hiking or camping, the Blukar
                        Flashlight is an ideal companion. Its compact size and reliable performance make it a valuable
                        tool for exploring nature and navigating through various terrains.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Excellent value for the price</h3>
                    <p className="nameOfUser">by Michael on April 9, 2023</p>
                    <p className="longComment">The Blukar Flashlight offers excellent value for its price. It delivers
                        reliable performance, durability, and adjustable brightness levels that rival more expensive
                        options on the market. It's a cost-effective choice for your lighting needs.</p>
                </div>
                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">Slightly bulky for pocket carry</h3>
                    <p className="nameOfUser">by Lily on April 8, 2023</p>
                    <p className="longComment">While the Blukar Flashlight is portable, it may be slightly bulky for
                        pocket carry. It fits well in larger pockets or bags, but if you prefer a more compact and
                        lightweight option, you might want to explore slimmer alternatives.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Versatile beam adjustment</h3>
                    <p className="nameOfUser">by Ethan on April 7, 2023</p>
                    <p className="longComment">The Blukar Flashlight's adjustable beam is incredibly versatile. Whether
                        you need a wide floodlight for area illumination or a narrow spotlight for long-distance
                        visibility, this flashlight allows you to customize the beam according to your specific
                        needs.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Sturdy build for rugged use</h3>
                    <p className="nameOfUser">by Mia on April 6, 2023</p>
                    <p className="longComment">The Blukar Flashlight's sturdy build ensures it can withstand rugged use.
                        I've taken it on outdoor excursions, and it has survived accidental drops and minor impacts
                        without any noticeable damage. It's a reliable tool for active lifestyles.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">An excellent addition to any emergency kit</h3>
                    <p className="nameOfUser">by Liam on April 5, 2023</p>
                    <p className="longComment">The Blukar Flashlight is an excellent addition to any emergency kit. In
                        times of power outages or natural disasters, having a reliable source of light is crucial, and
                        this flashlight delivers with its brightness, durability, and ease of use.</p>
                </div>
                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">Inconsistent beam focus</h3>
                    <p className="nameOfUser">by Harper on April 4, 2023</p>
                    <p className="longComment">While the Blukar Flashlight generally performs well, I've noticed some
                        inconsistencies in the beam focus. At times, the focus may shift slightly, affecting the clarity
                        of the projected light. It's a minor drawback to an otherwise functional flashlight.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">A trusty companion for dog walks</h3>
                    <p className="nameOfUser">by Oliver on April 3, 2023</p>
                    <p className="longComment">As a dog owner, the Blukar Flashlight has become a trusty companion
                        during evening walks. Its bright beam helps keep my dog visible and safe, while the adjustable
                        brightness ensures I can adjust the light intensity to different environments.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Good battery life for extended use</h3>
                    <p className="nameOfUser">by Ava on April 2, 2023</p>
                    <p className="longComment">The Blukar Flashlight's battery life is impressive, allowing for extended
                        use without frequent battery changes. It's a reliable choice for longer outdoor activities or
                        situations where you need sustained illumination for an extended period.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Highly recommended for night fishing</h3>
                    <p className="nameOfUser">by Lucas on April 1, 2023</p>
                    <p className="longComment">If you enjoy night fishing, the Blukar Flashlight is a highly recommended
                        tool to have. Its brightness and adjustable beam provide excellent visibility in dark
                        conditions, helping you navigate, set up your gear, and identify catches with ease.</p>
                </div>
                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">Average waterproof performance</h3>
                    <p className="nameOfUser">by Grace on March 31, 2023</p>
                    <p className="longComment">While the Blukar Flashlight claims to be waterproof, its performance in
                        wet conditions is average. It can handle light rain or splashes, but submerging it or exposing
                        it to heavy downpours may compromise its functionality. Exercise caution when using it in wet
                        environments.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Practical for power outage preparedness</h3>
                    <p className="nameOfUser">by Henry on March 30, 2023</p>
                    <p className="longComment">Having the Blukar Flashlight as part of your power outage preparedness
                        kit is a practical choice. It provides reliable and bright illumination, allowing you to
                        navigate your home, find essential items, and ensure the safety of your family during unexpected
                        outages.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Decent throw distance for its size</h3>
                    <p className="nameOfUser">by Sofia on March 29, 2023</p>
                    <p className="longComment">Considering its compact size, the Blukar Flashlight offers a decent throw
                        distance. While it may not match the reach of larger flashlights, it can still illuminate
                        objects at a reasonable distance, making it suitable for various tasks and activities.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Handy for nighttime photography</h3>
                    <p className="nameOfUser">by Jack on March 28, 2023</p>
                    <p className="longComment">The Blukar Flashlight is a handy tool for nighttime photography. Whether
                        you're capturing stunning light trails or illuminating subjects in low-light conditions, this
                        flashlight's adjustable brightness and focused beam assist in achieving the desired shot.</p>
                </div>
                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">Limited battery indicator</h3>
                    <p className="nameOfUser">by Emily on March 27, 2023</p>
                    <p className="longComment">The Blukar Flashlight's battery indicator is limited, often providing a
                        vague indication of remaining battery life. It's advisable to keep spare batteries on hand or
                        periodically check the battery level to avoid unexpected power depletion.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Versatile attachment options</h3>
                    <p className="nameOfUser">by Benjamin on March 26, 2023</p>
                    <p className="longComment">The Blukar Flashlight offers versatile attachment options, allowing you
                        to mount it on various surfaces or secure it to a backpack or belt. This flexibility ensures you
                        can keep your hands free while having easy access to reliable illumination.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">A practical tool for power outages</h3>
                    <p className="nameOfUser">by Amelia on March 25, 2023</p>
                    <p className="longComment">During power outages, the Blukar Flashlight proves to be a practical
                        tool. Its long battery life, durable construction, and bright beam help create a sense of
                        security and enable you to carry out essential tasks until power is restored.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Reliable and consistent performance</h3>
                    <p className="nameOfUser">by Noah on March 24, 2023</p>
                    <p className="longComment">One thing you can count on with the Blukar Flashlight is its reliable and
                        consistent performance. It delivers the same level of brightness and functionality each time you
                        use it, ensuring you're never left in the dark when you need it most.</p>
                </div>
                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">Buttons can be a bit stiff</h3>
                    <p className="nameOfUser">by Charlotte on March 23, 2023</p>
                    <p className="longComment">The buttons on the Blukar Flashlight can be a bit stiff and require some
                        force to operate. While this may not be an issue for occasional use, it can become slightly
                        inconvenient during situations that require frequent adjustments or quick changes in
                        brightness.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Essential for outdoor enthusiasts</h3>
                    <p className="nameOfUser">by Logan on March 22, 2023</p>
                    <p className="longComment">If you're an outdoor enthusiast, the Blukar Flashlight is an essential
                        tool to include in your gear. From camping and hiking to night-time exploration, this
                        flashlight's durability, brightness, and ease of use make it a valuable asset for your
                        adventures.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Good grip for secure handling</h3>
                    <p className="nameOfUser">by Avery on March 21, 2023</p>
                    <p className="longComment">The Blukar Flashlight features a textured grip that ensures secure
                        handling, even in wet or slippery conditions. It's comfortable to hold, and the grip helps
                        prevent accidental drops, providing you with added confidence during outdoor activities.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Excellent customer service</h3>
                    <p className="nameOfUser">by William on March 20, 2023</p>
                    <p className="longComment">I had a positive experience with Blukar's customer service team. They
                        were responsive, helpful, and resolved my query efficiently. It's reassuring to know that they
                        stand behind their product and are committed to ensuring customer satisfaction.</p>
                </div>
                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">Bulky packaging</h3>
                    <p className="nameOfUser">by Harper on March 19, 2023</p>
                    <p className="longComment">While the Blukar Flashlight itself is compact, the packaging it comes in
                        is unnecessarily bulky. It would be more environmentally friendly and convenient if they opted
                        for a more streamlined packaging design without compromising product protection.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">A reliable tool for car emergencies</h3>
                    <p className="nameOfUser">by Evelyn on March 18, 2023</p>
                    <p className="longComment">The Blukar Flashlight is a reliable tool to have in your car for
                        emergencies. Whether changing a tire at night or signaling for help, its brightness and
                        durability ensure you're equipped with a dependable light source during unexpected roadside
                        situations.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Convenient size for everyday carry</h3>
                    <p className="nameOfUser">by Daniel on March 17, 2023</p>
                    <p className="longComment">The Blukar Flashlight's size is convenient for everyday carry. It easily
                        fits in pockets, bags, or glove compartments without taking up much space. You can have reliable
                        illumination readily available whenever you need it, wherever you go.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Great for outdoor movie nights</h3>
                    <p className="nameOfUser">by Sophia on March 16, 2023</p>
                    <p className="longComment">If you enjoy hosting outdoor movie nights, the Blukar Flashlight is a
                        great companion. Its adjustable brightness and wide beam help create a comfortable viewing
                        experience, allowing you to set up the perfect ambiance for a memorable movie night under the
                        stars.</p>
                </div>
                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">Average battery compartment design</h3>
                    <p className="nameOfUser">by Michael on March 15, 2023</p>
                    <p className="longComment">The battery compartment design of the Blukar Flashlight is average. It
                        can be slightly challenging to insert or remove batteries, especially if you have larger hands.
                        A more user-friendly design would enhance the overall experience of using this flashlight.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Dependable performance in extreme temperatures</h3>
                    <p className="nameOfUser">by Lily on March 14, 2023</p>
                    <p className="longComment">I've tested the Blukar Flashlight in extreme temperatures, and it has
                        proven to be a dependable performer. Whether in freezing cold or scorching heat, this flashlight
                        continues to deliver reliable illumination without any noticeable performance issues.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Handy for DIY projects</h3>
                    <p className="nameOfUser">by Ethan on March 13, 2023</p>
                    <p className="longComment">If you're into DIY projects, the Blukar Flashlight comes in handy. Its
                        focused beam and adjustable brightness assist in precise work and provide additional light in
                        dimly lit areas, making it a useful tool for various home improvement or crafting tasks.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Reliable source of light during blackouts</h3>
                    <p className="nameOfUser">by Mia on March 12, 2023</p>
                    <p className="longComment">The Blukar Flashlight proves to be a reliable source of light during
                        blackouts. With its long battery life and bright output, it ensures you're not left in the dark
                        during power disruptions, providing a sense of comfort and functionality in challenging
                        situations.</p>
                </div>
                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">Slightly uncomfortable button placement</h3>
                    <p className="nameOfUser">by Liam on March 11, 2023</p>
                    <p className="longComment">The button placement on the Blukar Flashlight can be slightly
                        uncomfortable, especially if you need to operate it for an extended period. The button's
                        position could be improved to ensure a more ergonomic and user-friendly experience.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">An excellent gift for outdoor enthusiasts</h3>
                    <p className="nameOfUser">by Harper on March 10, 2023</p>
                    <p className="longComment">If you're looking for a gift for outdoor enthusiasts, the Blukar
                        Flashlight is an excellent choice. Its practicality, durability, and performance make it a
                        thoughtful and useful present for hikers, campers, and anyone who loves spending time in
                        nature.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Convenient wrist strap</h3>
                    <p className="nameOfUser">by Ava on March 9, 2023</p>
                    <p className="longComment">The Blukar Flashlight comes with a convenient wrist strap that allows for
                        easy carrying and added security. It prevents accidental drops and provides quick access to the
                        flashlight when your hands are occupied with other tasks.</p>
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
                    <h3 className="shortComment">Lampe de poche lumineuse et polyvalente</h3>
                    <p className="nameOfUser">par John le 7 juin 2023</p>
                    <p className="longComment">La lampe de poche Blukar est incroyablement lumineuse et polyvalente. Elle est parfaite pour le camping, la randonnée et toutes les aventures en plein air. La luminosité réglable et la fonction de zoom offrent d'excellentes options d'éclairage dans différentes situations.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Excellent rapport qualité-prix</h3>
                    <p className="nameOfUser">par Emily le 6 juin 2023</p>
                    <p className="longComment">Je suis agréablement surpris par les performances de la lampe de poche Blukar compte tenu de son prix abordable. Elle est lumineuse, durable et les niveaux de luminosité réglables sont très pratiques. C'est définitivement un excellent rapport qualité-prix.</p>
                </div>

                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Compacte et légère</h3>
                    <p className="nameOfUser">par Michael le 5 juin 2023</p>
                    <p className="longComment">La lampe de poche Blukar est de taille parfaite pour la transporter dans mon sac à dos. Elle est compacte et légère, ce qui la rend facile à emporter lors de voyages de camping ou de randonnée. Malgré sa petite taille, sa luminosité et sa portée sont impressionnantes.</p>
                </div>

                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">Lampe de poche correcte, mais autonomie moyenne de la batterie</h3>
                    <p className="nameOfUser">par Sarah le 4 juin 2023</p>
                    <p className="longComment">La lampe de poche Blukar offre une illumination correcte, mais j'ai remarqué que l'autonomie de la batterie pourrait être meilleure. C'est toujours une option fiable pour les activités de plein air plus courtes, mais pour les voyages plus longs, il peut être nécessaire d'avoir des piles supplémentaires ou une source d'alimentation.</p>
                </div>

                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Durabilité impressionnante et résistance à l'eau</h3>
                    <p className="nameOfUser">par Jessica le 3 juin 2023</p>
                    <p className="longComment">J'ai accidentellement laissé tomber ma lampe de poche Blukar dans une flaque d'eau, mais à ma grande surprise, elle n'a pas été affectée du tout. La durabilité et la résistance à l'eau de cette lampe de poche sont vraiment impressionnantes. C'est un choix fiable pour toutes les conditions météorologiques.</p>
                </div>

                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Bonne prise en main et confortable à tenir</h3>
                    <p className="nameOfUser">par Robert le 2 juin 2023</p>
                    <p className="longComment">La lampe de poche Blukar dispose d'une poignée texturée qui offre une prise en main sécurisée. Elle est confortable à tenir, même pendant de longues périodes. Les réglages de luminosité réglables me permettent d'adapter la sortie lumineuse à ma préférence.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Excellente lampe de poche pour le camping</h3>
                    <p className="nameOfUser">par John le 1er juin 2023</p>
                    <p className="longComment">La lampe de poche Blukar est parfaite pour les voyages de camping. Elle est super lumineuse, et la luminosité réglable vous permet d'économiser la batterie lorsque nécessaire. Hautement recommandée !</p>
                </div>
                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">Portée du faisceau moyenne</h3>
                    <p className="nameOfUser">par Lisa le 1er juin 2023</p>
                    <p className="longComment">La lampe de poche Blukar offre une luminosité décente, mais la portée du faisceau est moyenne par rapport à d'autres lampes de poche que j'ai utilisées. Elle convient à une utilisation générale, mais si vous avez besoin d'une plus grande portée, vous voudrez peut-être envisager une autre option.</p>
                </div>

                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Excellent pour les situations d'urgence</h3>
                    <p className="nameOfUser">par Matthew le 31 mai 2023</p>
                    <p className="longComment">Je garde la lampe de poche Blukar dans ma trousse d'urgence, et elle s'est avérée être un outil fiable lors des pannes de courant et autres situations d'urgence. La luminosité réglable et la batterie longue durée assurent que je suis prêt pour toutes les situations.</p>
                </div>

                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Lampe de poche polyvalente pour une utilisation quotidienne</h3>
                    <p className="nameOfUser">par Olivia le 30 mai 2023</p>
                    <p className="longComment">La lampe de poche Blukar est mon outil de choix pour diverses tâches quotidiennes. Que ce soit pour trouver quelque chose dans un coin sombre ou travailler sur un projet DIY, la luminosité réglable et la taille compacte en font une lampe de poche polyvalente à avoir chez soi.</p>
                </div>

                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Construction solide et performances fiables</h3>
                    <p className="nameOfUser">par William le 29 mai 2023</p>
                    <p className="longComment">La lampe de poche Blukar est bien construite avec une construction solide. Elle donne une impression de durabilité et est capable de résister aux manipulations brusques. Je l'ai utilisée lors de plusieurs voyages de camping et elle a toujours offert des performances fiables.</p>
                </div>

                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">Manque de fonctionnalités avancées</h3>
                    <p className="nameOfUser">par Ashley le 28 mai 2023</p>
                    <p className="longComment">Bien que la lampe de poche Blukar fasse le travail, elle manque de certaines des fonctionnalités avancées que l'on trouve dans des lampes de poche haut de gamme. Cependant, si vous recherchez une option de base et fiable sans vous ruiner, elle vaut la peine d'être considérée.</p>
                </div>

                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Idéale pour les promenades nocturnes</h3>
                    <p className="nameOfUser">par Daniel le 27 mai 2023</p>
                    <p className="longComment">Je fais régulièrement des promenades nocturnes, et la lampe de poche Blukar est devenue un compagnon indispensable. Elle éclaire le chemin devant moi avec un faisceau lumineux et concentré, ce qui me permet de voir tous les obstacles potentiels sur mon chemin.</p>
                </div>

                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Taille pratique pour un transport quotidien</h3>
                    <p className="nameOfUser">par Elizabeth le 26 mai 2023</p>
                    <p className="longComment">La lampe de poche Blukar est suffisamment compacte pour tenir dans ma poche, ce qui en fait un objet pratique à transporter tous les jours. Les niveaux de luminosité réglables sont pratiques dans différentes situations, que ce soit pour chercher quelque chose dans l'obscurité ou se déplacer dans des zones faiblement éclairées.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Un outil fiable pour le camping</h3>
                    <p className="nameOfUser">par Andrew le 25 mai 2023</p>
                    <p className="longComment">La lampe de poche Blukar a été mon compagnon de confiance lors de mes voyages de camping. Elle est suffisamment lumineuse pour éclairer tout le camping, et la luminosité réglable permet d'obtenir une lumière plus douce lorsque nécessaire. Sa taille compacte la rend facile à emballer et à transporter.</p>
                </div>
                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">La batterie se décharge rapidement à haute luminosité</h3>
                    <p className="nameOfUser">par Samantha le 24 mai 2023</p>
                    <p className="longComment">J'ai remarqué que la batterie de la lampe de poche Blukar se décharge relativement rapidement lorsque j'utilise le réglage de luminosité le plus élevé. Elle fonctionne toujours, mais il est important d'avoir des piles de rechange à portée de main pour une utilisation prolongée.</p>
                </div>

                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Outil pratique pour les urgences en voiture</h3>
                    <p className="nameOfUser">par Benjamin le 23 mai 2023</p>
                    <p className="longComment">La taille compacte de la lampe de poche Blukar en fait un outil parfait à garder dans la voiture pour les urgences. Que ce soit pour changer un pneu la nuit ou inspecter le moteur, cette lampe de poche offre une lumière abondante et une tranquillité d'esprit.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Outil pratique pour les urgences en voiture</h3>
                    <p className="nameOfUser">par Benjamin le 23 mai 2023</p>
                    <p className="longComment">La taille compacte de la lampe de poche Blukar en fait un outil parfait à garder dans la voiture pour les urgences. Que ce soit pour changer un pneu la nuit ou inspecter le moteur, cette lampe de poche offre une lumière abondante et une tranquillité d'esprit.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Lumineuse et efficace</h3>
                    <p className="nameOfUser">par Emily le 22 mai 2023</p>
                    <p className="longComment">La lampe de poche Blukar est incroyablement lumineuse et efficace. C'est impressionnant de voir comment une lampe de poche aussi compacte peut produire un faisceau de lumière puissant. C'est mon choix préféré pour les activités de plein air et les urgences.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Excellent rapport qualité-prix</h3>
                    <p className="nameOfUser">par David le 21 mai 2023</p>
                    <p className="longComment">La lampe de poche Blukar offre un excellent rapport qualité-prix. Elle fonctionne exceptionnellement bien et la qualité de fabrication est excellente. Je l'ai comparée à des lampes de poche plus chères, et la Blukar s'en tire très bien sans vider votre porte-monnaie.</p>
                </div>
                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">Autonomie moyenne de la batterie</h3>
                    <p className="nameOfUser">par Sophia le 20 mai 2023</p>
                    <p className="longComment">La lampe de poche Blukar a une autonomie moyenne de la batterie. Elle dure un temps décent avec une seule charge, mais ce n'est pas la lampe de poche la plus durable que j'ai utilisée. Elle reste néanmoins suffisamment fiable pour une utilisation quotidienne.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Parfaite pour les pannes de courant</h3>
                    <p className="nameOfUser">par Matthew le 19 mai 2023</p>
                    <p className="longComment">J'ai toujours la lampe de poche Blukar à portée de main en cas de pannes de courant, et elle ne m'a jamais laissé tomber. La luminosité est suffisante pour éclairer toute une pièce, et le faisceau réglable est pratique lorsque vous avez besoin de concentrer la lumière sur des zones spécifiques.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Robuste et résistante à l'eau</h3>
                    <p className="nameOfUser">par Isabella le 18 mai 2023</p>
                    <p className="longComment">La lampe de poche Blukar est conçue pour durer. Elle a un design robuste et est résistante à l'eau, ce qui la rend adaptée à différentes activités de plein air. Je l'ai accidentellement fait tomber quelques fois, mais elle fonctionne toujours parfaitement bien.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Indispensable pour les amateurs de camping</h3>
                    <p className="nameOfUser">par James le 17 mai 2023</p>
                    <p className="longComment">Si vous êtes un amateur de camping comme moi, la lampe de poche Blukar est un équipement indispensable. Elle offre un éclairage exceptionnel dans les nuits les plus sombres, et la luminosité réglable vous permet de personnaliser la lumière selon vos besoins.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Prise en main confortable et facile à utiliser</h3>
                    <p className="nameOfUser">par Mia le 16 mai 2023</p>
                    <p className="longComment">La lampe de poche Blukar a une prise en main confortable, et les boutons sont faciles à utiliser même avec des gants. C'est une lampe de poche conviviale qui ne nécessite pas beaucoup d'efforts pour être utilisée, ce qui est important en cas d'urgence ou de situations stressantes.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Distance du faisceau impressionnante</h3>
                    <p className="nameOfUser">par Michael le 15 mai 2023</p>
                    <p className="longComment">Je suis impressionné par la distance du faisceau de la lampe de poche Blukar. Elle peut atteindre une distance considérable, ce qui est idéal pour les activités de plein air comme la randonnée ou la recherche d'objets perdus dans de grandes zones ouvertes. Elle a vraiment dépassé mes attentes !</p>
                </div>
                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">Indicateur de batterie limité</h3>
                    <p className="nameOfUser">par Chloe le 14 mai 2023</p>
                    <p className="longComment">La lampe de poche Blukar a un indicateur de batterie, mais il est assez basique. Il ne donne qu'une idée générale du niveau de batterie restant, il est donc conseillé de surveiller le temps d'utilisation de la lampe de poche pour éviter une décharge soudaine de la batterie.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Polyvalente et légère</h3>
                    <p className="nameOfUser">par Alexander le 13 mai 2023</p>
                    <p className="longComment">La lampe de poche Blukar est un outil polyvalent que j'emporte avec moi lors de mes aventures en plein air. Elle est légère, donc elle n'ajoute pas beaucoup de poids à mon sac à dos, et les réglages de luminosité réglables sont utiles dans différentes situations.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Autonomie de la batterie correcte</h3>
                    <p className="nameOfUser">par Natalie le 12 mai 2023</p>
                    <p className="longComment">L'autonomie de la batterie de la lampe de poche Blukar est correcte. Elle dure suffisamment longtemps pour la plupart des tâches, mais si vous prévoyez un long voyage de camping, il est conseillé d'avoir des piles de rechange ou une option de charge de secours.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Un compagnon fiable dans l'obscurité</h3>
                    <p className="nameOfUser">par Joseph le 11 mai 2023</p>
                    <p className="longComment">La lampe de poche Blukar est devenue mon compagnon de confiance lorsque je m'aventure dans l'obscurité. Son faisceau puissant et sa batterie longue durée me donnent la tranquillité d'esprit, que j'explore des grottes ou que je promène simplement mon chien la nuit.</p>
                </div>
                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">Qualité de fabrication moyenne</h3>
                    <p className="nameOfUser">par Lily le 10 mai 2023</p>
                    <p className="longComment">La qualité de fabrication de la lampe de poche Blukar est moyenne. Elle n'est pas aussi durable que certaines lampes de poche haut de gamme, mais elle résiste bien à une utilisation normale. Je recommande de faire attention à une manipulation brutale pour garantir sa longévité.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Compacte et facile à transporter</h3>
                    <p className="nameOfUser">par Christopher le 9 mai 2023</p>
                    <p className="longComment">La taille compacte de la lampe de poche Blukar la rend incroyablement facile à transporter. Que je fasse une randonnée ou que je fasse des courses la nuit, je peux la glisser dans ma poche ou l'attacher à mon porte-clés sans aucun problème.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Bon rapport qualité-prix</h3>
                    <p className="nameOfUser">par Evelyn le 8 mai 2023</p>
                    <p className="longComment">Compte tenu de son prix abordable, la lampe de poche Blukar offre un bon rapport qualité-prix. Ce n'est pas la lampe de poche la plus avancée, mais elle fait le travail et est fiable pour une utilisation quotidienne ou en cas d'urgence.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Excellent service client</h3>
                    <p className="nameOfUser">par Samuel le 7 mai 2023</p>
                    <p className="longComment">J'ai eu un problème avec ma lampe de poche Blukar, mais l'équipe du service client a été fantastique. Ils ont rapidement résolu mon problème et m'ont fourni un remplacement. C'est rassurant de savoir que l'entreprise soutient son produit.</p>
                </div>
                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">Légèrement lourde pour une utilisation prolongée</h3>
                    <p className="nameOfUser">par Victoria le 6 mai 2023</p>
                    <p className="longComment">La lampe de poche Blukar, bien qu'elle soit compacte, semble légèrement lourde lorsqu'elle est utilisée pendant une longue période. Ce n'est pas un problème majeur pour les tâches courtes, mais si vous prévoyez de l'utiliser pendant de longues durées, vous voudrez peut-être envisager une option plus légère.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Performances fiables par tous les temps</h3>
                    <p className="nameOfUser">par Jonathan le 5 mai 2023</p>
                    <p className="longComment">La lampe de poche Blukar a fait ses preuves en termes de fiabilité dans différentes conditions météor

                        ologiques. Je l'ai utilisée sous la pluie, la neige et une chaleur extrême, et elle ne m'a jamais laissé tomber. C'est une lampe de poche durable et fiable.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Pratique lors des pannes de courant</h3>
                    <p className="nameOfUser">par Grace le 4 mai 2023</p>
                    <p className="longComment">Vivant dans une région sujette aux pannes de courant, la lampe de poche Blukar a été d'une grande utilité. Elle fournit une lumière suffisante pour se déplacer dans l'obscurité et me permet de me sentir plus en sécurité lors de ces situations inattendues.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Longévité impressionnante de la batterie</h3>
                    <p className="nameOfUser">par Benjamin le 3 mai 2023</p>
                    <p className="longComment">La batterie de la lampe de poche Blukar dure étonnamment longtemps. Je l'ai utilisée intensivement lors de voyages de camping et elle a toujours fourni des performances fiables sans nécessiter de changements de batterie fréquents. C'est très pratique.</p>
                </div>
                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">Légèrement encombrante pour un transport dans la poche</h3>
                    <p className="nameOfUser">par Penelope le 2 mai 2023</p>
                    <p className="longComment">La lampe de poche Blukar est un peu plus encombrante que ce à quoi je m'attendais pour un transport dans la poche. Bien qu'elle reste gérable, il est bon de noter que si vous préférez une lampe de poche plus fine et plus compacte pour une utilisation quotidienne.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Polyvalente et fiable</h3>
                    <p className="nameOfUser">par Daniel le 1er mai 2023</p>
                    <p className="longComment">La lampe de poche Blukar est un outil polyvalent et fiable pour diverses tâches. Que je fasse du camping, que je bricole ou que j'aie simplement besoin d'une lampe de poche à la maison, elle offre systématiquement d'excellentes performances.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Distance du faisceau décente</h3>
                    <p className="nameOfUser">par Hannah le 30 avril 2023</p>
                    <p className="longComment">La lampe de poche Blukar offre une distance de faisceau décente. Elle convient à la plupart des tâches quotidiennes et des activités de plein air. Cependant, si vous avez besoin d'une portée exceptionnellement longue, il serait peut-être préférable de vous tourner vers des lampes de poche avec des optiques plus spécialisées.</p>
                </div>


                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Construction solide pour une utilisation en extérieur</h3>
                    <p className="nameOfUser">par Samuel le 29 avril 2023</p>
                    <p className="longComment">La lampe de poche Blukar a une construction solide qui peut résister aux aventures en plein air. Je l'ai emmenée en camping, en randonnée et en pêche, et elle a supporté une manipulation brutale et une exposition à différents éléments sans aucun problème.</p>
                </div>
                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">Niveaux de luminosité limités</h3>
                    <p className="nameOfUser">par Stella le 28 avril 2023</p>
                    <p className="longComment">La lampe de poche Blukar a un nombre limité de niveaux de luminosité. Bien qu'elle couvre la plupart des besoins de base en éclairage, il serait agréable d'avoir plus d'options, surtout pour les situations nécessitant un éclairage subtil ou extrêmement lumineux.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Excellent pour les aventures en plein air</h3>
                    <p className="nameOfUser">par Liam le 27 avril 2023</p>
                    <p className="longComment">Si vous aimez les aventures en plein air comme la randonnée, le camping ou la photographie de nuit, la lampe de poche Blukar est un excellent compagnon. Son faisceau puissant et sa longue durée de batterie vous assurent d'être toujours prêt et de pouvoir vous concentrer sur votre expérience.</p>
                </div>

                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Confortable à tenir pendant de longues périodes</h3>
                    <p className="nameOfUser">par Emily le 26 avril 2023</p>
                    <p className="longComment">La conception ergonomique de la lampe de poche Blukar la rend confortable à tenir, même pendant de longues périodes. Que je fasse des réparations ou que j'explore l'extérieur, je n'éprouve pas de fatigue ou d'inconfort au niveau de la main.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Excellent rapport qualité-prix</h3>
                    <p className="nameOfUser">par Oliver le 25 avril 2023</p>
                    <p className="longComment">La lampe de poche Blukar offre un excellent rapport qualité-prix. Elle offre des performances fiables, une durabilité et une fonctionnalité polyvalente sans se ruiner. C'est un choix judicieux pour ceux qui recherchent une lampe de poche abordable.</p>
                </div>
                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">L'interrupteur semble légèrement fragile</h3>
                    <p className="nameOfUser">par Mia le 24 avril 2023</p>
                    <p className="longComment">L'interrupteur de la lampe de poche Blukar semble légèrement fragile. Jusqu'à présent, il n'a pas causé de problèmes fonctionnels, mais je suis prudente lorsque je l'utilise afin d'éviter tout dommage ou dysfonctionnement éventuel à l'avenir.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Fiable lors des pannes de courant</h3>
                    <p className="nameOfUser">par Noah le 23 avril 2023</p>
                    <p className="longComment">La lampe de poche Blukar a fait ses preuves en termes de fiabilité lors des pannes de courant. C'est ma source de lumière de prédilection lorsque l'électricité est coupée, fournissant un éclairage vif et constant pour naviguer dans ma maison.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Utile pour la photographie de nuit</h3>
                    <p className="nameOfUser">par Sofia le 22 avril 2023</p>
                    <p className="longComment">En tant que photographe, je trouve la lampe de poche Blukar incroyablement utile pour la photographie de nuit. Elle offre un faisceau focalisé et réglable qui m'aide à éclairer des sujets spécifiques ou à créer des effets d'éclairage intéressants.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Un outil essentiel en cas d'urgence</h3>
                    <p className="nameOfUser">par Lucas le 21 avril 2023</p>
                    <p className="longComment">La lampe de poche Blukar est un outil essentiel à avoir en cas d'urgence. Que ce soit lors d'une panne de courant, d'une panne de voiture ou d'une catastrophe naturelle, elle fournit la lumière nécessaire et la tranquillité d'esprit pour naviguer dans des situations difficiles.</p>
                </div>
                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">Étanchéité limitée</h3>
                    <p className="nameOfUser">par Harper le 20 avril 2023</p>
                    <p className="longComment">La lampe de poche Blukar offre une certaine résistance à l'eau, mais elle n'est pas entièrement étanche. Elle peut résister aux éclaboussures et à une légère pluie, mais je ne la plongerais pas ou ne l'exposerais pas à de fortes averses sans protection.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Polyvalente et facile à utiliser</h3>
                    <p className="nameOfUser">par Alexander le 19 avril 2023</p>
                    <p className="longComment">La lampe de poche Blukar est un outil polyvalent et facile à utiliser. Son interface simple et ses niveaux de luminosité réglables la rendent accessible à tous, que vous soyez un amateur de plein air ou que vous ayez simplement besoin d'une lampe de poche fiable à la maison.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Bon équilibre entre portée et éclairage diffus</h3>
                    <p className="nameOfUser">par Chloe le 18 avril 2023</p>
                    <p className="longComment">La lampe de poche Blukar trouve un bon équilibre entre portée et éclairage diffus. Elle offre un faisceau concentré pour une visibilité à longue distance tout en fournissant une illumination plus large pour les tâches rapprochées. Elle convient à une variété de besoins d'éclairage.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Une durabilité impressionnante pour le prix</h3>
                    <p className="nameOfUser">par Matthew le 17 avril 2023</p>
                    <p className="longComment">Compte tenu de son prix abordable, la lampe de poche Blukar offre une durabilité impressionnante. Je l'ai fait tomber plusieurs fois par accident, et elle est restée intacte sans aucun dommage visible. C'est un compagnon fiable pour une utilisation quotidienne.</p>
                </div>
                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">Autonomie moyenne de la batterie</h3>
                    <p className="nameOfUser">par Aria le 16 avril 2023</p>
                    <p className="longComment">La lampe de poche Blukar a une autonomie moyenne de la batterie. Elle dure suffisamment longtemps pour la plupart des tâches, mais si vous prévoyez de l'utiliser intensivement ou pendant de longues périodes, il est préférable d'avoir des piles de rechange ou une source d'alimentation de secours.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Parfaite pour les aventures en camping</h3>
                    <p className="nameOfUser">par James le 15 avril 2023</p>
                    <p className="longComment">Si vous aimez le camping, la lampe de poche Blukar est un compagnon parfait. Sa taille compacte, sa luminosité élevée et ses réglages ajustables en font l'outil idéal pour éclairer les emplacements de camping, naviguer sur les sentiers et trouver votre chemin dans l'obscurité.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Efficacité de la batterie décente</h3>
                    <p className="nameOfUser">par Harper le 14 avril 2023</p>
                    <p className="longComment">La lampe de poche Blukar présente une efficacité de la batterie décente. Elle ne consomme pas excessivement d'énergie, même aux réglages de luminosité plus élevés. Cette fonctionnalité vous permet de compter sur elle pour une utilisation prolongée sans vous soucier constamment du remplacement des piles.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Un compagnon fiable pour la pêche de nuit</h3>
                    <p className="nameOfUser">par Sebastian le 13 avril 2023</p>
                    <p className="longComment">La lampe de poche Blukar est devenue un outil indispensable pour mes sorties de pêche de nuit. Son faisceau lumineux et concentré m'aide à voir la surface de l'eau et à naviguer dans mon équipement sans effort. Elle est suffisamment résistante pour supporter les éclaboussures occasionnelles d'eau.</p>
                </div>
                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">Portée du faisceau légèrement limitée</h3>
                    <p className="nameOfUser">par Penelope le 12 avril 2023</p>
                    <p className="longComment">Bien que la lampe de poche Blukar offre une luminosité adéquate, la portée du faisceau est légèrement inférieure à mes attentes. Elle est suffisante pour la plupart des tâches, mais si vous avez besoin d'une portée plus longue, vous voudrez peut-être explorer d'autres options offrant des faisceaux plus puissants.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Un outil fiable pour les pannes de courant</h3>
                    <p className="nameOfUser">par Noah le 11 avril 2023</p>
                    <p className="longComment">Pendant les pannes de courant, la lampe de poche Blukar a été un outil fiable pour moi et ma famille. Elle offre une lumière vive et constante, nous permettant de nous déplacer en toute sécurité et confortablement jusqu'à ce que l'électricité soit rétablie.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Compacte et facile à transporter</h3>
                    <p className="nameOfUser">par Emily le 10 avril 2023</p>
                    <p className="longComment">La lampe de poche Blukar est compacte et facile à transporter. Elle se glisse facilement dans une poche ou un sac à dos sans prendre beaucoup de place. Je l'emmène avec moi lors de mes randonnées et de mes voyages, et elle se révèle toujours utile en cas de besoin d'éclairage supplémentaire.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Une construction solide et robuste</h3>
                    <p className="nameOfUser">par Oliver le 9 avril 2023</p>
                    <p className="longComment">La lampe de poche Blukar est construite avec solidité et robustesse. Sa coque en alliage d'aluminium résiste aux chocs, aux chutes et aux rayures. Je n'ai aucune inquiétude quant à sa durabilité, ce qui en fait un choix fiable pour une utilisation en extérieur et dans des conditions difficiles.</p>
                </div>
                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">L'interrupteur est un peu rigide</h3>
                    <p className="nameOfUser">par Mia le 8 avril 2023</p>
                    <p className="longComment">J'ai remarqué que l'interrupteur de la lampe de poche Blukar est un peu rigide. Il faut appuyer fermement pour l'allumer ou l'éteindre, ce qui peut être gênant, surtout dans l'obscurité. J'aurais préféré un interrupteur plus facile à utiliser et plus réactif.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Polyvalente pour différentes utilisations</h3>
                    <p className="nameOfUser">par Sofia le 7 avril 2023</p>
                    <p className="longComment">La lampe de poche Blukar est polyvalente et peut être utilisée dans différentes situations. Que ce soit pour le camping, la randonnée, les travaux domestiques ou les urgences, elle offre une luminosité réglable qui s'adapte à vos besoins spécifiques. Je l'ai utilisée dans de nombreuses occasions et elle ne m'a jamais déçu.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Légère et facile à manipuler</h3>
                    <p className="nameOfUser">par Lucas le 6 avril 2023</p>
                    <p className="longComment">La lampe de poche Blukar est légère et facile à manipuler. Son poids léger la rend confortable à tenir pendant de longues périodes sans fatiguer la main. Cela en fait un choix idéal pour les projets de bricolage, les sorties nocturnes et les situations où vous avez besoin d'une source d'éclairage portable.</p>
                </div>
                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">La dragonne est fragile</h3>
                    <p className="nameOfUser">par Harper le 5 avril 2023</p>
                    <p className="longComment">Le seul inconvénient que j'ai trouvé avec la lampe de poche Blukar est que la dragonne fournie est fragile. Elle s'est cassée après quelques utilisations, ce qui est décevant. J'ai dû acheter une dragonne de rechange pour pouvoir la transporter plus facilement.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Excellent rapport qualité-prix</h3>
                    <p className="nameOfUser">par Ethan le 4 avril 2023</p>
                    <p className="longComment">Dans l'ensemble, la lampe de poche Blukar offre un excellent rapport qualité-prix. Elle est abordable et offre des fonctionnalités solides. Si vous recherchez une lampe de poche fiable sans dépenser une fortune, je vous recommande vivement d'essayer celle-ci.</p>
                </div>
            </div>}
        </div>
    );
};


export default ReviewsLight;
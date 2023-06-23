import React from 'react';
import './Reviews.css'
import {Stars5, Stars2, Stars4, Stars1, Stars3} from "../Stars/Stars";

const ReviewsCork = ({setShowReviews, showReviews, lang}) => {
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
                    <h3 className="shortComment">Effortless and efficient wine opening</h3>
                    <p className="nameOfUser">by Emily on June 8, 2023</p>
                    <p className="longComment">The Oster Electric Wine Opener makes opening wine bottles effortless and efficient. With just a simple push of a button, it removes the cork in seconds, allowing you to enjoy your favorite wines without any hassle.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Conveniently opens multiple bottles on a single charge</h3>
                    <p className="nameOfUser">by Ethan on June 7, 2023</p>
                    <p className="longComment">With the Oster Electric Wine Opener, you can open up to 30 bottles on a single charge. The cordless design and long-lasting battery ensure that you can effortlessly open multiple bottles without interruption, making it perfect for gatherings and parties.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Easy-to-use push button operation</h3>
                    <p className="nameOfUser">by Mia on June 6, 2023</p>
                    <p className="longComment">Say goodbye to manual corkscrews and hello to the Oster Electric Wine Opener. Its simple push button operation makes it incredibly easy to use. Just press the button, and let the opener do the work for you.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Efficient foil cutter for hassle-free opening</h3>
                    <p className="nameOfUser">by Liam on June 5, 2023</p>
                    <p className="longComment">The Oster Electric Wine Opener comes with a convenient foil cutter that allows you to easily remove seals from wine bottles. This feature ensures a hassle-free opening experience, saving you time and effort.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Comfortable soft grip handle for easy handling</h3>
                    <p className="nameOfUser">by Ava on June 4, 2023</p>
                    <p className="longComment">The Oster Electric Wine Opener features a comfortable soft grip handle that provides a secure and ergonomic grip. It ensures easy handling, allowing you to open wine bottles with confidence and ease.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Sleek and sophisticated design</h3>
                    <p className="nameOfUser">by Noah on June 3, 2023</p>
                    <p className="longComment">Enhance your wine experience with the sleek and sophisticated design of the Oster Electric Wine Opener. Its silver finish adds a touch of elegance to any kitchen or bar, making it a stylish addition to your wine accessories.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Convenient recharging base included</h3>
                    <p className="nameOfUser">by Isabella on June 2, 2023</p>
                    <p className="longComment">The Oster Electric Wine Opener comes with a recharging base, providing a convenient and organized storage solution. Simply place the opener on the base to recharge, ensuring it's always ready for your next wine-opening occasion.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">UL approved for safety and reliability</h3>
                    <p className="nameOfUser">by Oliver on June 1, 2023</p>
                    <p className="longComment">Rest assured that the Oster Electric Wine Opener is UL approved for 110-120 voltage, meeting the highest safety standards. You can enjoy your wine with peace of mind, knowing that you're using a reliable and safe product.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Easy care and maintenance</h3>
                    <p className="nameOfUser">by Mia on May 31, 2023</p>
                    <p className="longComment">Maintaining the Oster Electric Wine Opener is a breeze. Simply turn the appliance off and unplug it when not in use. Before cleaning or handling parts, ensure it is unplugged. This product is designed for household use, making it convenient and user-friendly.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Powerful wattage for efficient operation</h3>
                    <p className="nameOfUser">by Ethan on May 30, 2023</p>
                    <p className="longComment">With a wattage of 14.4, the Oster Electric Wine Opener delivers powerful performance for efficient and quick operation. Say goodbye to struggling with manual corkscrews and enjoy the ease and convenience of this electric opener.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Perfect for wine enthusiasts and entertainers</h3>
                    <p className="nameOfUser">by Ava on May 29, 2023</p>
                    <p className="longComment">Whether you're a wine enthusiast or love hosting gatherings, the Oster Electric Wine Opener is a must-have tool. Its seamless operation, long-lasting battery, and sleek design make it an essential accessory for wine lovers and entertainers alike.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Effortlessly opens stubborn corks</h3>
                    <p className="nameOfUser">by Liam on May 28, 2023</p>
                    <p className="longComment">Stubborn corks are no match for the Oster Electric Wine Opener. Its powerful motor and reliable mechanism effortlessly remove even the toughest corks, allowing you to enjoy your wine without any frustrating moments.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">A great gift for wine enthusiasts</h3>
                    <p className="nameOfUser">by Emily on May 27, 2023</p>
                    <p className="longComment">Looking for a thoughtful gift for a wine enthusiast? Look no further than the Oster Electric Wine Opener. Its sleek design, convenient functionality, and impressive performance make it a perfect gift choice that will be appreciated and enjoyed.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Quiet operation for a peaceful wine experience</h3>
                    <p className="nameOfUser">by Noah on May 26, 2023</p>
                    <p className="longComment">The Oster Electric Wine Opener operates quietly, ensuring a peaceful wine experience. No more loud popping sounds or struggling with stubborn corks. Simply press the button, and let the opener work its magic silently.</p>
                </div>











                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Compact size for easy storage</h3>
                    <p className="nameOfUser">by Isabella on May 25, 2023</p>
                    <p className="longComment">The Oster Electric Wine Opener features a compact size that takes up minimal counter or drawer space. Its sleek and slim design allows for convenient storage, making it a practical addition to any kitchen or bar area.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Efficient charging for uninterrupted performance</h3>
                    <p className="nameOfUser">by Mia on May 24, 2023</p>
                    <p className="longComment">The Oster Electric Wine Opener's charging base ensures efficient charging, providing uninterrupted performance when you need it. Simply place the opener on the base, and it will be ready for action, opening your favorite bottles with ease.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Enhance your wine tasting experience</h3>
                    <p className="nameOfUser">by Ethan on May 23, 2023</p>
                    <p className="longComment">The Oster Electric Wine Opener enhances your wine tasting experience by removing the hassle of manual corkscrews. Its smooth operation and sleek design add a touch of sophistication to your wine rituals, making each pour a delight.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Ideal for individuals with limited hand strength</h3>
                    <p className="nameOfUser">by Liam on May 22, 2023</p>
                    <p className="longComment">For individuals with limited hand strength, the Oster Electric Wine Opener provides a convenient solution. Its easy push button operation requires minimal effort, allowing everyone to enjoy their favorite wines without struggling with traditional corkscrews.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Long-lasting battery for extended use</h3>
                    <p className="nameOfUser">by Ava on May 21, 2023</p>
                    <p className="longComment">The Oster Electric Wine Opener's long-lasting battery ensures extended use. You can confidently open multiple bottles without worrying about running out of power. It's a reliable companion for wine enthusiasts and those who love to entertain.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Versatile and suitable for various wine bottle sizes</h3>
                    <p className="nameOfUser">by Noah on May 20, 2023</p>
                    <p className="longComment">The Oster Electric Wine Opener is designed to accommodate various wine bottle sizes. From standard bottles to larger ones, this versatile opener can handle them all with ease, providing a seamless opening experience every time.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">A must-have accessory for wine connoisseurs</h3>
                    <p className="nameOfUser">by Emily on May 19, 2023</p>
                    <p className="longComment">If you consider yourself a wine connoisseur, the Oster Electric Wine Opener is a must-have accessory. Its efficient and effortless operation ensures that you can focus on the wine itself, enhancing your overall tasting experience.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Sturdy construction for long-lasting durability</h3>
                    <p className="nameOfUser">by Isabella on May 18, 2023</p>
                    <p className="longComment">The Oster Electric Wine Opener is built with a sturdy construction that guarantees long-lasting durability. You can rely on its consistent performance, knowing that it will serve you well for many wine-filled occasions to come.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Saves time and effort</h3>
                    <p className="nameOfUser">by Mia on May 17, 2023</p>
                    <p className="longComment">Gone are the days of struggling with traditional corkscrews. The Oster Electric Wine Opener saves you time and effort with its quick and efficient operation. Spend less time opening bottles and more time enjoying your favorite wines.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Elegant addition to your wine accessories</h3>
                    <p className="nameOfUser">by Ethan on May 16, 2023</p>
                    <p className="longComment">The Oster Electric Wine Opener adds an elegant touch to your wine accessories collection. Its sleek silver design complements any setting, whether it's a formal dinner party or a casual evening at home, making it a stylish and functional choice.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">User-friendly and intuitive</h3>
                    <p className="nameOfUser">by Liam on May 15, 2023</p>
                    <p className="longComment">The Oster Electric Wine Opener is incredibly user-friendly and intuitive. Its simple push button operation and ergonomic design make it easy to handle, even for those who are new to using electric wine openers.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Great for wine tastings and events</h3>
                    <p className="nameOfUser">by Ava on May 14, 2023</p>
                    <p className="longComment">If you frequently host wine tastings or events, the Oster Electric Wine Opener is a valuable tool to have. Its efficient operation and ability to open multiple bottles on a single charge make it a reliable companion for entertaining guests.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">No more broken corks or spills</h3>
                    <p className="nameOfUser">by Noah on May 13, 2023</p>
                    <p className="longComment">With the Oster Electric Wine Opener, you can say goodbye to broken corks or spills. Its gentle yet powerful cork removal ensures a clean and smooth extraction, eliminating the risk of cork breakage or wine spills.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Portable and cordless for on-the-go wine enjoyment</h3>
                    <p className="nameOfUser">by Emily on May 12, 2023</p>
                    <p className="longComment">Take the Oster Electric Wine Opener with you wherever you go. Its cordless design and compact size make it portable and perfect for picnics, camping trips, or any outdoor adventures where you want to enjoy wine on-the-go.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Effortlessly removes synthetic and natural corks</h3>
                    <p className="nameOfUser">by Isabella on May 11, 2023</p>
                    <p className="longComment">The Oster Electric Wine Opener is versatile and can effortlessly remove both synthetic and natural corks. No matter what type of wine you prefer, this opener ensures a seamless and hassle-free uncorking experience.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Saves space with its all-in-one design</h3>
                    <p className="nameOfUser">by Mia on May 10, 2023</p>
                    <p className="longComment">The Oster Electric Wine Opener's all-in-one design saves valuable space in your kitchen or bar area. With the foil cutter conveniently integrated, you won't need to search for additional tools, making it a space-saving and efficient choice.</p>
                </div>

                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Makes a satisfying gift-opening experience</h3>
                    <p className="nameOfUser">by Ethan on May 9, 2023</p>
                    <p className="longComment">The Oster Electric Wine Opener adds a touch of excitement to gift-opening moments. Whether it's unwrapping a bottle of wine or presenting someone with this sleek opener, the experience is satisfying and memorable.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Effortless cleanup with no drips or stains</h3>
                    <p className="nameOfUser">by Liam on May 8, 2023</p>
                    <p className="longComment">Cleaning up after using the Oster Electric Wine Opener is a breeze. Its smooth and precise operation ensures no drips or stains, keeping your countertop or table clean and free from wine spills.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Stress-free wine opening for all occasions</h3>
                    <p className="nameOfUser">by Ava on May 7, 2023</p>
                    <p className="longComment">No matter the occasion, the Oster Electric Wine Opener provides a stress-free wine opening experience. From intimate dinners to festive celebrations, you can rely on this opener to effortlessly and elegantly open your favorite bottles.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Quick and consistent performance</h3>
                    <p className="nameOfUser">by Noah on May 6, 2023</p>
                    <p className="longComment">The Oster Electric Wine Opener delivers quick and consistent performance every time. Its reliable motor ensures a smooth and efficient operation, allowing you to open multiple bottles effortlessly and enjoy your wine without any delays.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">A time-saving solution for busy wine lovers</h3>
                    <p className="nameOfUser">by Emily on May 5, 2023</p>
                    <p className="longComment">For busy wine lovers who appreciate convenience, the Oster Electric Wine Opener is a time-saving solution. With its rapid cork removal and easy-to-use design, you can indulge in a glass of wine without wasting time on manual uncorking.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Perfect for individuals with arthritis or hand mobility issues</h3>
                    <p className="nameOfUser">by Isabella on May 4, 2023</p>
                    <p className="longComment">The Oster Electric Wine Opener is a game-changer for individuals with arthritis or hand mobility issues. Its ergonomic handle and effortless operation provide a comfortable and accessible way to enjoy wine without any discomfort or strain.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Elevate your wine-drinking experience</h3>
                    <p className="nameOfUser">by Mia on May 3, 2023</p>
                    <p className="longComment">With the Oster Electric Wine Opener, you can elevate your wine-drinking experience. Its sleek and sophisticated design, coupled with its efficient performance, adds a touch of luxury and convenience to every pour.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Minimal effort, maximum enjoyment</h3>
                    <p className="nameOfUser">by Ethan on May 2, 2023</p>
                    <p className="longComment">The Oster Electric Wine Opener allows you to savor every sip with minimal effort. Instead of struggling with traditional corkscrews, this electric opener takes care of the hard work, leaving you with more time to relax and enjoy your wine.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Reliable and consistent performance</h3>
                    <p className="nameOfUser">by Liam on May 1, 2023</p>
                    <p className="longComment">The Oster Electric Wine Opener delivers reliable and consistent performance with each use. Its sturdy construction and efficient mechanism ensure that you can rely on it to open your favorite bottles effortlessly, time and time again.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Convenient foil cutter included</h3>
                    <p className="nameOfUser">by Ava on April 30, 2023</p>
                    <p className="longComment">The Oster Electric Wine Opener comes with a convenient foil cutter, making it easy to remove seals before uncorking. No need for additional tools or searching through drawers—the foil cutter is always at your fingertips.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Designed for effortless one-handed operation</h3>
                    <p className="nameOfUser">by Noah on April 29, 2023</p>
                    <p className="longComment">The Oster Electric Wine Opener is thoughtfully designed for effortless one-handed operation. Whether you're holding the bottle or enjoying a glass of wine, you can easily and smoothly uncork bottles with just a simple push of a button.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">UL approved for safety and peace of mind</h3>
                    <p className="nameOfUser">by Emily on April 28, 2023</p>
                    <p className="longComment">The Oster Electric Wine Opener is UL approved, ensuring safety and peace of mind. You can confidently use this opener knowing that it meets the strict safety standards for household electrical appliances.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Effortless cork removal for stress-free entertaining</h3>
                    <p className="nameOfUser">by Isabella on April 27, 2023</p>
                    <p className="longComment">The Oster Electric Wine Opener takes the stress out of entertaining by providing effortless cork removal. Impress your guests with seamless bottle opening and enjoy the party without worrying about cork mishaps.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Charging base keeps the opener within reach</h3>
                    <p className="nameOfUser">by Mia on April 26, 2023</p>
                    <p className="longComment">The Oster Electric Wine Opener's charging base ensures that the opener is always within reach. It keeps the opener neatly organized and fully charged, ready to uncork your favorite bottles at any moment.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Enjoy a quiet and seamless opening experience</h3>
                    <p className="nameOfUser">by Ethan on April 25, 2023</p>
                    <p className="longComment">The Oster Electric Wine Opener operates quietly, ensuring a peaceful and seamless opening experience. Say goodbye to noisy corkscrews and hello to the smooth and quiet operation of this electric opener.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Effortless and mess-free wine pouring</h3>
                    <p className="nameOfUser">by Liam on April 24, 2023</p>
                    <p className="longComment">With the Oster Electric Wine Opener, pouring wine becomes effortless and mess-free. Its precise cork removal ensures a clean and controlled pour, allowing you to enjoy every drop without worrying about spills or drips.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Ideal for both personal and professional use</h3>
                    <p className="nameOfUser">by Ava on April 23, 2023</p>
                    <p className="longComment">Whether you're a wine enthusiast at home or a professional in the hospitality industry, the Oster Electric Wine Opener is an ideal choice. Its reliable performance and sleek design make it suitable for both personal and professional use.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">A stylish and practical addition to any bar</h3>
                    <p className="nameOfUser">by Noah on April 22, 2023</p>
                    <p className="longComment">The Oster Electric Wine Opener adds a touch of style and practicality to any bar setup. Its silver finish and sleek design make it an eye-catching accessory that complements the overall aesthetics of your bar area.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Enjoy wine with confidence and convenience</h3>
                    <p className="nameOfUser">by Emily on April 21, 2023</p>
                    <p className="longComment">The Oster Electric Wine Opener allows you to enjoy wine with confidence and convenience. Its reliable performance and ease of use ensure that you can effortlessly indulge in your favorite wines whenever the mood strikes.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Impress your guests with a professional-grade opener</h3>
                    <p className="nameOfUser">by Isabella on April 20, 2023</p>
                    <p className="longComment">With the Oster Electric Wine Opener, you can impress your guests with a professional-grade opener. Its sleek design and efficient operation give off an air of sophistication, making it a stylish addition to your wine service.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Effortlessly open wine bottles with style</h3>
                    <p className="nameOfUser">by Sophia on April 19, 2023</p>
                    <p className="longComment">The Oster Electric Wine Opener allows you to effortlessly open wine bottles with style. Its sleek silver design and smooth operation make it a must-have accessory for wine lovers and enthusiasts.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Convenient foil cutter for easy access</h3>
                    <p className="nameOfUser">by Ethan on April 18, 2023</p>
                    <p className="longComment">The Oster Electric Wine Opener comes with a convenient foil cutter, ensuring easy access to your favorite bottles. Simply remove the foil seal with ease and enjoy hassle-free uncorking.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Perfect gift for wine enthusiasts</h3>
                    <p className="nameOfUser">by Olivia on April 17, 2023</p>
                    <p className="longComment">Looking for the perfect gift for a wine enthusiast? Look no further than the Oster Electric Wine Opener. Its stylish design and practical functionality make it an excellent choice for anyone who appreciates a good bottle of wine.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Long-lasting battery for extended use</h3>
                    <p className="nameOfUser">by Noah on April 16, 2023</p>
                    <p className="longComment">The Oster Electric Wine Opener features a long-lasting battery that allows for extended use. You can open up to 30 bottles on a single charge, making it perfect for both intimate gatherings and larger events.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Sleek and sophisticated addition to any kitchen</h3>
                    <p className="nameOfUser">by Mia on April 15, 2023</p>
                    <p className="longComment">The Oster Electric Wine Opener adds a sleek and sophisticated touch to any kitchen. Its silver finish and elegant design make it a stylish countertop accessory that blends seamlessly with any decor.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Enjoy wine without the hassle of traditional corkscrews</h3>
                    <p className="nameOfUser">by Liam on April 14, 2023</p>
                    <p className="longComment">Say goodbye to the hassle of traditional corkscrews with the Oster Electric Wine Opener. Its simple push-button operation removes the cork in seconds, allowing you to enjoy your favorite wines without the effort.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Easy maintenance and cleaning</h3>
                    <p className="nameOfUser">by Ava on April 13, 2023</p>
                    <p className="longComment">The Oster Electric Wine Opener is easy to maintain and clean. Simply turn off the appliance, unplug it, and wipe it clean with a damp cloth. It's a hassle-free solution for wine lovers.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">A must-have tool for wine tasting events</h3>
                    <p className="nameOfUser">by Benjamin on April 12, 2023</p>
                    <p className="longComment">If you frequently host wine tasting events, the Oster Electric Wine Opener is a must-have tool. Its efficient operation and sleek design make it a reliable companion for uncorking multiple bottles with ease.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Efficient and quick uncorking</h3>
                    <p className="nameOfUser">by Harper on April 11, 2023</p>
                    <p className="longComment">The Oster Electric Wine Opener ensures efficient and quick uncorking of your favorite bottles. With just a simple push of a button, you can enjoy hassle-free access to your desired wine selection.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Compact size for easy storage</h3>
                    <p className="nameOfUser">by James on April 10, 2023</p>
                    <p className="longComment">The Oster Electric Wine Opener features a compact size that allows for easy storage. Its sleek design doesn't take up much counter space, making it a convenient addition to any kitchen.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Saves time and effort</h3>
                    <p className="nameOfUser">by Grace on April 9, 2023</p>
                    <p className="longComment">The Oster Electric Wine Opener saves you time and effort when opening wine bottles. Say goodbye to struggling with traditional corkscrews and enjoy the convenience of this electric opener.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Ideal for individuals with limited hand strength</h3>
                    <p className="nameOfUser">by Henry on April 8, 2023</p>
                    <p className="longComment">The Oster Electric Wine Opener is an ideal choice for individuals with limited hand strength. Its easy push-button operation requires minimal effort, making it accessible for everyone.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">A stylish addition to any wine bar</h3>
                    <p className="nameOfUser">by Scarlett on April 7, 2023</p>
                    <p className="longComment">The Oster Electric Wine Opener adds a touch of style to any wine bar. Its sleek silver finish and sophisticated design make it a standout accessory that complements your wine collection.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Perfect for both casual and formal occasions</h3>
                    <p className="nameOfUser">by Sebastian on April 6, 2023</p>
                    <p className="longComment">Whether it's a casual gathering or a formal dinner party, the Oster Electric Wine Opener is the perfect companion. Its elegant appearance and efficient operation make it suitable for any occasion.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Great value for the price</h3>
                    <p className="nameOfUser">by Lily on April 5, 2023</p>
                    <p className="longComment">The Oster Electric Wine Opener offers great value for its price. With its reliable performance and durable construction, it's a worthwhile investment for any wine lover.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Sturdy construction for long-lasting use</h3>
                    <p className="nameOfUser">by Oliver on April 4, 2023</p>
                    <p className="longComment">The Oster Electric Wine Opener features a sturdy construction that ensures long-lasting use. It's built to withstand regular uncorking and promises to be a reliable companion for years to come.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">A favorite among wine connoisseurs</h3>
                    <p className="nameOfUser">by Penelope on April 3, 2023</p>
                    <p className="longComment">The Oster Electric Wine Opener is a favorite among wine connoisseurs. Its effortless operation and sleek design make it a go-to tool for opening wine bottles with precision and ease.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Safe and reliable for everyday use</h3>
                    <p className="nameOfUser">by Max on April 2, 2023</p>
                    <p className="longComment">The Oster Electric Wine Opener is designed with safety and reliability in mind. Its UL approval for 110-120 voltage ensures peace of mind, making it suitable for everyday use.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">No more broken corks</h3>
                    <p className="nameOfUser">by Isabella on April 1, 2023</p>
                    <p className="longComment">With the Oster Electric Wine Opener, you'll never have to worry about broken corks again. Its smooth and controlled operation ensures a clean and effortless removal of the cork.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Convenient charging base for easy storage</h3>
                    <p className="nameOfUser">by Jacob on March 31, 2023</p>
                    <p className="longComment">The Oster Electric Wine Opener comes with a convenient charging base that allows for easy storage and accessibility. Simply place it on the base after use, and it will be ready for the next uncorking adventure.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Effortless cork removal</h3>
                    <p className="nameOfUser">by Emma on March 30, 2023</p>
                    <p className="longComment">The Oster Electric Wine Opener effortlessly removes corks, saving you time and effort. Say goodbye to struggling with traditional corkscrews and enjoy the convenience of this electric opener.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Great gift for wine enthusiasts</h3>
                    <p className="nameOfUser">by Noah on March 29, 2023</p>
                    <p className="longComment">If you're looking for a gift for a wine enthusiast, the Oster Electric Wine Opener is a fantastic choice. Its sleek design and practicality make it a thoughtful and appreciated present.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Easy-to-use foil cutter</h3>
                    <p className="nameOfUser">by Ava on March 28, 2023</p>
                    <p className="longComment">The Oster Electric Wine Opener comes with an easy-to-use foil cutter that makes removing seals a breeze. It's a convenient addition that enhances the overall uncorking experience.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Ideal for parties and gatherings</h3>
                    <p className="nameOfUser">by Ethan on March 27, 2023</p>
                    <p className="longComment">If you frequently host parties or gatherings, the Oster Electric Wine Opener is a must-have tool. Its efficient operation and ability to open multiple bottles on a single charge ensure smooth and enjoyable events.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Quiet and discreet operation</h3>
                    <p className="nameOfUser">by Mia on March 26, 2023</p>
                    <p className="longComment">The Oster Electric Wine Opener operates quietly and discreetly, allowing you to enjoy your wine without any unnecessary noise. It's perfect for intimate dinners or quiet evenings at home.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">A stylish addition to any kitchen</h3>
                    <p className="nameOfUser">by Liam on March 25, 2023</p>
                    <p className="longComment">With its sleek silver design, the Oster Electric Wine Opener adds a touch of style to any kitchen. It's a functional and aesthetically pleasing tool that elevates your wine-drinking experience.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Hassle-free maintenance</h3>
                    <p className="nameOfUser">by Charlotte on March 24, 2023</p>
                    <p className="longComment">The Oster Electric Wine Opener requires minimal maintenance. Simply turn it off, unplug it, and wipe it clean for long-lasting performance. It's a hassle-free addition to your kitchen arsenal.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Portable and convenient for outdoor activities</h3>
                    <p className="nameOfUser">by Henry on March 23, 2023</p>
                    <p className="longComment">Planning a picnic or camping trip? The Oster Electric Wine Opener is portable and convenient, allowing you to enjoy your favorite bottle of wine even in outdoor settings.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">An essential tool for wine tastings</h3>
                    <p className="nameOfUser">by Grace on March 22, 2023</p>
                    <p className="longComment">Wine tastings require precision and efficiency when opening multiple bottles. The Oster Electric Wine Opener delivers on both fronts, making it an essential tool for wine enthusiasts and professionals alike.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Versatile and user-friendly</h3>
                    <p className="nameOfUser">by Samuel on March 21, 2023</p>
                    <p className="longComment">The Oster Electric Wine Opener is a versatile and user-friendly tool. Its simple push-button operation and comfortable grip handle make it accessible to users of all experience levels.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Perfectly removes both synthetic and natural corks</h3>
                    <p className="nameOfUser">by Harper on March 20, 2023</p>
                    <p className="longComment">No matter the type of cork, the Oster Electric Wine Opener effortlessly removes it with precision. Whether it's a synthetic or natural cork, you can rely on this opener to do the job perfectly.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Quick and efficient uncorking</h3>
                    <p className="nameOfUser">by Owen on March 19, 2023</p>
                    <p className="longComment">The Oster Electric Wine Opener ensures quick and efficient uncorking, allowing you to focus on enjoying your wine. No more struggling with stubborn corks or waiting for traditional corkscrews to do the job.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">A must-have tool for wine lovers</h3>
                    <p className="nameOfUser">by Sofia on March 18, 2023</p>
                    <p className="longComment">If you're a wine lover, the Oster Electric Wine Opener is a must-have tool in your kitchen. Its convenience, reliability, and stylish design make it an essential accessory for enjoying your favorite bottles of wine.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Excellent value for money</h3>
                    <p className="nameOfUser">by Jack on March 17, 2023</p>
                    <p className="longComment">The Oster Electric Wine Opener offers excellent value for its price. Its performance, durability, and sleek design make it a worthwhile investment for any wine enthusiast.</p>
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
                    <h3 className="shortComment">Ouverture du vin sans effort et efficace</h3>
                    <p className="nameOfUser">par Emily le 8 juin 2023</p>
                    <p className="longComment">L'ouvre-bouteille électrique Oster rend l'ouverture des bouteilles de vin sans effort et efficace. Avec une simple pression sur un bouton, il retire le bouchon en quelques secondes, vous permettant de savourer vos vins préférés sans aucune difficulté.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Ouverture pratique de plusieurs bouteilles avec une seule charge</h3>
                    <p className="nameOfUser">par Ethan le 7 juin 2023</p>
                    <p className="longComment">Avec l'ouvre-bouteille électrique Oster, vous pouvez ouvrir jusqu'à 30 bouteilles avec une seule charge. Sa conception sans fil et sa batterie longue durée vous permettent d'ouvrir plusieurs bouteilles sans interruption, ce qui en fait l'accessoire parfait pour les rassemblements et les fêtes.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Utilisation facile avec un simple bouton-poussoir</h3>
                    <p className="nameOfUser">par Mia le 6 juin 2023</p>
                    <p className="longComment">Dites adieu aux tire-bouchons manuels et bonjour à l'ouvre-bouteille électrique Oster. Son utilisation simple avec un bouton-poussoir le rend incroyablement facile à utiliser. Appuyez simplement sur le bouton et laissez l'ouvre-bouteille faire le travail pour vous.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Décapsuleur efficace pour une ouverture sans tracas</h3>
                    <p className="nameOfUser">par Liam le 5 juin 2023</p>
                    <p className="longComment">L'ouvre-bouteille électrique Oster est livré avec un décapsuleur pratique qui permet de retirer facilement les capsules des bouteilles de vin. Cette fonctionnalité garantit une ouverture sans tracas, vous faisant gagner du temps et des efforts.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Poignée confortable pour une manipulation facile</h3>
                    <p className="nameOfUser">par Ava le 4 juin 2023</p>
                    <p className="longComment">L'ouvre-bouteille électrique Oster est doté d'une poignée confortable qui offre une prise en main sûre et ergonomique. Elle garantit une manipulation facile, vous permettant d'ouvrir les bouteilles de vin avec confiance et facilité.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Design élégant et sophistiqué</h3>
                    <p className="nameOfUser">par Noah le 3 juin 2023</p>
                    <p className="longComment">Améliorez votre expérience du vin avec le

                        design élégant et sophistiqué de l'ouvre-bouteille électrique Oster. Sa finition argentée ajoute une touche d'élégance à toutes les cuisines ou bars, en en faisant un ajout stylé à vos accessoires pour le vin.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Base de recharge pratique incluse</h3>
                    <p className="nameOfUser">par Isabella le 2 juin 2023</p>
                    <p className="longComment">L'ouvre-bouteille électrique Oster est livré avec une base de recharge, offrant une solution de rangement pratique et organisée. Il vous suffit de placer l'ouvre-bouteille sur la base pour le recharger, en vous assurant qu'il est toujours prêt pour votre prochaine occasion d'ouverture de vin.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Homologué UL pour la sécurité et la fiabilité</h3>
                    <p className="nameOfUser">par Oliver le 1er juin 2023</p>
                    <p className="longComment">Soyez assuré que l'ouvre-bouteille électrique Oster est homologué UL pour une tension de 110-120 volts, répondant ainsi aux normes de sécurité les plus élevées. Vous pouvez savourer votre vin en toute tranquillité, en sachant que vous utilisez un produit fiable et sûr.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Entretien facile</h3>
                    <p className="nameOfUser">par Mia le 31 mai 2023</p>
                    <p className="longComment">L'entretien de l'ouvre-bouteille électrique Oster est un jeu d'enfant. Il suffit de l'éteindre et de le débrancher lorsqu'il n'est pas utilisé. Avant de le nettoyer ou de manipuler les pièces, assurez-vous qu'il est débranché. Ce produit est conçu pour un usage domestique, ce qui le rend pratique et convivial.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Puissance élevée pour un fonctionnement efficace</h3>
                    <p className="nameOfUser">par Ethan le 30 mai 2023</p>
                    <p className="longComment">Avec une puissance de 14,4, l'ouvre-bouteille électrique Oster offre des performances puissantes pour un fonctionnement efficace et rapide. Dites adieu aux difficultés avec les tire-bouchons manuels et profitez de la facilité et de la commodité de cet ouvre-bouteille électrique.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Parfait pour les amateurs de vin et les hôtes</h3>
                    <p className="nameOfUser">par Ava le 29 mai 2023</p>
                    <p className="longComment">Que vous soyez un amateur de vin ou que vous aimiez recevoir, l'ouvre-bouteille électrique Oster est un outil indispensable. Son fonctionnement sans faille, sa batterie

                        longue durée et son design élégant en font un accessoire essentiel pour les amateurs de vin et les hôtes.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Ouverture sans effort des bouchons tenaces</h3>
                    <p className="nameOfUser">par Liam le 28 mai 2023</p>
                    <p className="longComment">Les bouchons tenaces ne font pas le poids face à l'ouvre-bouteille électrique Oster. Son moteur puissant et son mécanisme fiable retirent sans effort même les bouchons les plus résistants, vous permettant de savourer votre vin sans aucune frustration.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Un excellent cadeau pour les amateurs de vin</h3>
                    <p className="nameOfUser">par Emily le 27 mai 2023</p>
                    <p className="longComment">Vous cherchez un cadeau attentionné pour un amateur de vin ? Ne cherchez plus, l'ouvre-bouteille électrique Oster est parfait. Son design élégant, sa fonctionnalité pratique et ses performances impressionnantes en font un choix de cadeau parfait qui sera apprécié et utilisé.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Fonctionnement silencieux pour une expérience de vin paisible</h3>
                    <p className="nameOfUser">par Noah le 26 mai 2023</p>
                    <p className="longComment">L'ouvre-bouteille électrique Oster fonctionne silencieusement, garantissant une expérience de vin paisible. Fini les bruits forts de débouchage ou les difficultés avec les bouchons tenaces. Appuyez simplement sur le bouton et laissez l'ouvre-bouteille travailler silencieusement.</p>
                </div>

                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Taille compacte pour un rangement facile</h3>
                    <p className="nameOfUser">par Isabella le 25 mai 2023</p>
                    <p className="longComment">L'ouvre-bouteille électrique Oster présente une taille compacte qui occupe un minimum d'espace sur le comptoir ou dans le tiroir. Son design élégant et fin permet un rangement pratique, en en faisant un ajout pratique à toutes les cuisines ou bars.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Recharge efficace pour des performances ininterrompues</h3>
                    <p className="nameOfUser">par Mia le 24 mai 2023</p>
                    <p className="longComment">La base de recharge de l'ouvre-bouteille électrique Oster garantit une recharge efficace, offrant des performances ininterrompues lorsque vous en avez besoin. Il suffit de placer l'ouvre-bouteille sur la base, et il sera prêt à l'action, ouvrant vos bouteilles préférées en toute simplicité.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Améliorez votre expérience de dégustation de vin</h3>
                    <p className="nameOfUser">par Ethan le 23 mai 2023</p>
                    <p className="longComment">L'ouvre-bouteille électrique Oster améliore votre expérience de dégustation de vin en éliminant les tracas des tire-bouchons manuels. Son fonctionnement fluide et son design élégant ajoutent une touche de sophistication à vos rituels vinicoles, rendant chaque versement un délice.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Idéal pour les personnes ayant une force limitée dans les mains</h3>
                    <p className="nameOfUser">par Liam le 22 mai 2023</p>
                    <p className="longComment">Pour les personnes ayant une force limitée dans les mains, l'ouvre-bouteille électrique Oster offre une solution pratique. Son fonctionnement facile avec un simple bouton-poussoir nécessite un effort minimal, permettant à tous de profiter de leurs vins préférés sans difficulté avec les tire-bouchons traditionnels.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Batterie longue durée pour une utilisation prolongée</h3>
                    <p className="nameOfUser">par Ava le 21 mai 2023</p>
                    <p className="longComment">La batterie longue durée de l'ouvre-bouteille électrique Oster garantit une utilisation prolongée. Vous pouvez ouvrir plusieurs bouteilles en toute confiance, sans craindre de manquer de batterie. C'est un compagnon fiable pour les amateurs de vin et ceux qui aiment recevoir.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Polyvalent et adapté à différentes tailles de bouteilles de vin</h3>
                    <p className="nameOfUser">par Noah le 20 mai 2023</p>
                    <p className="longComment">L'ouvre-bouteille électrique Oster est conçu pour s'adapter à différentes tailles de bouteilles de vin. Des bouteilles standard aux plus grandes, cet ouvre-bouteille polyvalent peut les manipuler toutes avec facilité, offrant une expérience d'ouverture sans faille à chaque fois.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Un accessoire indispensable pour les amateurs de vin</h3>
                    <p className="nameOfUser">par Emily le 19 mai 2023</p>
                    <p className="longComment">Si vous vous considérez comme un amateur de vin, l'ouvre-bouteille électrique Oster est un accessoire indispensable. Son fonctionnement efficace et sans effort vous permet de vous concentrer sur le vin lui-même, améliorant votre expérience de dégustation globale.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Construction robuste pour une durabilité à long terme</h3>
                    <p className="nameOfUser">par Isabella le 18 mai 2023</p>
                    <p className="longComment">L'ouvre-bouteille électrique Oster est fabriqué avec une construction robuste qui garantit une durabilité à long terme. Vous pouvez compter sur ses performances constantes, sachant qu'il vous servira bien lors de nombreuses occasions remplies de vin à venir.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Économisez du temps et des efforts</h3>
                    <p className="nameOfUser">par Mia le 17 mai 2023</p>
                    <p className="longComment">Finis les jours où vous vous battiez avec des tire-bouchons traditionnels. L'ouvre-bouteille électrique Oster vous fait gagner du temps et des efforts grâce à son fonctionnement rapide et efficace. Passez moins de temps à ouvrir des bouteilles et plus de temps à savourer vos vins préférés.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Une addition élégante à vos accessoires de vin</h3>
                    <p className="nameOfUser">par Ethan le 16 mai 2023</p>
                    <p className="longComment">L'ouvre-bouteille électrique Oster ajoute une touche élégante à votre collection d'accessoires de vin. Son design argenté élégant complète tous les décors, que ce soit lors d'un dîner formel ou d'une soirée décontractée à la maison, en en faisant un choix élégant et fonctionnel.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Convivial et intuitif</h3>
                    <p className="nameOfUser">par Liam le 15 mai 2023</p>
                    <p className="longComment">L'ouvre-bouteille électrique Oster est incroyablement convivial et intuitif. Son fonctionnement simple avec un bouton-poussoir et son design ergonomique le rendent facile à manipuler, même pour ceux qui découvrent les ouvre-bouteilles électriques.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Idéal pour les dégustations de vin et les événements</h3>
                    <p className="nameOfUser">par Ava le 14 mai 2023</p>
                    <p className="longComment">Si vous organisez fréquemment des dégustations de vin ou des événements, l'ouvre-bouteille électrique Oster est un outil précieux à avoir. Son fonctionnement efficace et sa capacité à ouvrir plusieurs bouteilles sur une seule charge en font un compagnon fiable pour recevoir des invités.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Plus de bouchons cassés ni de déversements</h3>
                    <p className="nameOfUser">par Noah le 13 mai 2023</p>
                    <p className="longComment">Avec l'ouvre-bouteille électrique Oster, vous pouvez dire adieu aux bouchons cassés et aux déversements. Son extraction douce mais puissante du bouchon assure un retrait propre et lisse, éliminant le risque de casse du bouchon ou de déversement de vin.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Portable et sans fil pour profiter du vin en déplacement</h3>
                    <p className="nameOfUser">par Emily le 12 mai 2023</p>
                    <p className="longComment">Emportez l'ouvre-bouteille électrique Oster avec vous où que vous alliez. Sa conception sans fil et sa taille compacte le rendent portable et parfait pour les pique-niques, les séjours en camping ou toutes les aventures en plein air où vous souhaitez déguster du vin en déplacement.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Retire sans effort les bouchons synthétiques et naturels</h3>
                    <p className="nameOfUser">par Isabella le 11 mai 2023</p>
                    <p className="longComment">L'ouvre-bouteille électrique Oster est polyvalent et peut retirer sans effort les bouchons synthétiques et naturels. Peu importe le type de vin que vous préférez, cet ouvre-bouteille garantit une expérience de débouchage fluide et sans tracas.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Économisez de l'espace avec sa conception tout-en-un</h3>
                    <p className="nameOfUser">par Mia le 10 mai 2023</p>
                    <p className="longComment">La conception tout-en-un de l'ouvre-bouteille électrique Oster permet de gagner de l'espace précieux dans votre cuisine ou votre bar. Avec le coupe-capsule intégré de manière pratique, vous n'aurez pas besoin de chercher d'outils supplémentaires, ce qui en fait un choix pratique et efficace.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Rend l'ouverture des cadeaux excitante</h3>
                    <p className="nameOfUser">par Ethan le 9 mai 2023</p>
                    <p className="longComment">L'ouvre-bouteille électrique Oster ajoute une touche d'excitation aux moments d'ouverture des cadeaux. Que ce soit pour déballer une bouteille de vin ou offrir cet ouvre-bouteille élégant à quelqu'un, l'expérience est satisfaisante et mémorable.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Nettoyage sans effort sans éclaboussures ni taches</h3>
                    <p className="nameOfUser">par Liam le 8 mai 2023</p>
                    <p className="longComment">Le nettoyage après utilisation de l'ouvre-bouteille électrique Oster est un jeu d'enfant. Son fonctionnement fluide et précis évite les éclaboussures et les taches, gardant votre plan de travail ou votre table propre et exempt de déversements de vin.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Ouverture de vin sans stress pour toutes les occasions</h3>
                    <p className="nameOfUser">par Ava le 7 mai 2023</p>
                    <p className="longComment">Peu importe l'occasion, l'ouvre-bouteille électrique Oster offre une expérience d'ouverture de vin sans stress. Des dîners intimes aux célébrations festives, vous pouvez compter sur cet ouvre-bouteille pour ouvrir vos bouteilles préférées avec aisance et élégance.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Performance rapide et constante</h3>
                    <p className="nameOfUser">par Noah le 6 mai 2023</p>
                    <p className="longComment">L'ouvre-bouteille électrique Oster offre une performance rapide et constante à chaque utilisation. Son moteur fiable garantit un fonctionnement fluide et efficace, vous permettant d'ouvrir plusieurs bouteilles sans effort et de savourer votre vin sans aucun retard.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Une solution gain de temps pour les amateurs de vin occupés</h3>
                    <p className="nameOfUser">par Emily le 5 mai 2023</p>
                    <p className="longComment">Pour les amateurs de vin occupés qui apprécient la commodité, l'ouvre-bouteille électrique Oster est une solution gain de temps. Avec son ouverture rapide des bouchons et sa conception facile à utiliser, vous pouvez déguster un verre de vin sans perdre de temps à déboucher manuellement.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Parfait pour les personnes atteintes d'arthrite ou de problèmes de mobilité des mains</h3>
                    <p className="nameOfUser">par Isabella le 4 mai 2023</p>
                    <p className="longComment">L'ouvre-bouteille électrique Oster est une innovation pour les personnes atteintes d'arthrite ou de problèmes de mobilité des mains. Sa poignée ergonomique et son fonctionnement sans effort offrent un moyen confortable et accessible de savourer du vin sans aucune gêne ni effort.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Rehaussez votre expérience de dégustation de vin</h3>
                    <p className="nameOfUser">par Mia le 3 mai 2023</p>
                    <p className="longComment">Avec l'ouvre-bouteille électrique Oster, vous pouvez rehausser votre expérience de dégustation de vin. Son design élégant et raffiné, associé à sa performance efficace, ajoute une touche de luxe et de commodité à chaque service.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Un minimum d'effort pour un maximum de plaisir</h3>
                    <p className="nameOfUser">par Ethan le 2 mai 2023</p>
                    <p className="longComment">L'ouvre-bouteille électrique Oster vous permet de savourer chaque gorgée avec un minimum d'effort. Au lieu de vous battre avec les tire-bouchons traditionnels, cet ouvre-bouteille électrique se charge du travail difficile, vous laissant plus de temps pour vous détendre et profiter de votre vin.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Performance fiable et constante</h3>
                    <p className="nameOfUser">par Liam le 1er mai 2023</p>
                    <p className="longComment">L'ouvre-bouteille électrique Oster offre une performance fiable et constante à chaque utilisation. Sa construction solide et son mécanisme efficace font en sorte que vous pouvez compter sur lui pour ouvrir vos bouteilles préférées sans effort, encore et encore.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Coupe-feuille pratique inclus</h3>
                    <p className="nameOfUser">par Ava le 30 avril 2023</p>
                    <p className="longComment">L'ouvre-bouteille électrique Oster est livré avec un coupe-feuille pratique, ce qui facilite l'enlèvement des scellés avant le débouchage. Pas besoin d'outils supplémentaires ou de fouiller dans les tiroirs - le coupe-feuille est toujours à portée de main.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Conçu pour une utilisation sans effort à une main</h3>
                    <p className="nameOfUser">par Noah le 29 avril 2023</p>
                    <p className="longComment">L'ouvre-bouteille électrique Oster est pensé pour une utilisation sans effort à une main. Que vous teniez la bouteille ou que vous savouriez un verre de vin, vous pouvez déboucher facilement et en douceur les bouteilles d'un simple pression sur un bouton.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Homologué UL pour la sécurité et la tranquillité d'esprit</h3>
                    <p className="nameOfUser">par Emily le 28 avril 2023</p>
                    <p className="longComment">L'ouvre-bouteille électrique Oster est homologué UL, garantissant sécurité et tranquillité d'esprit. Vous pouvez utiliser cet ouvre-bouteille en toute confiance, sachant qu'il répond aux normes de sécurité strictes des appareils électriques domestiques.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Retrait du bouchon sans effort pour des réceptions sans stress</h3>
                    <p className="nameOfUser">par Isabella le 27 avril 2023</p>
                    <p className="longComment">L'ouvre-bouteille électrique Oster élimine le stress des réceptions en offrant un retrait du bouchon sans effort. Impressionnez vos invités avec l'ouverture sans faille des bouteilles et profitez de la fête sans vous soucier des problèmes de bouchon.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">La base de chargement garde l'ouvre-bouteille à portée de main</h3>
                    <p className="nameOfUser">par Mia le 26 avril 2023</p>
                    <p className="longComment">La base de chargement de l'ouvre-bouteille électrique Oster garantit que l'ouvre-bouteille est toujours à portée de main. Elle garde l'ouvre-bouteille soigneusement organisé et complètement chargé, prêt à déboucher vos bouteilles préférées à tout moment.</p>
                </div>
            </div>}
        </div>
    );
};


export default ReviewsCork;
import React from 'react';
import './Reviews.css'
import {Stars5, Stars2, Stars4, Stars1, Stars3} from "../Stars/Stars";

const ReviewsMill = ({setShowReviews, showReviews, lang}) => {
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
                    <h3 className="shortComment">Efficient and convenient</h3>
                    <p className="nameOfUser">by Olivia on March 30, 2023</p>
                    <p className="longComment">The COOL KNIGHT Herb Grinder is an efficient and convenient tool for grinding herbs and spices. With its large capacity and high rotating speed, it quickly grinds a generous amount of herbs within seconds, saving you time and effort.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Perfect grinding control</h3>
                    <p className="nameOfUser">by Ethan on March 29, 2023</p>
                    <p className="longComment">The COOL KNIGHT Herb Grinder's visual-lid design allows for perfect grinding control. Whether you prefer a coarse or fine grind, you can easily adjust it with just one hand. It provides versatility and convenience in achieving the desired texture.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Multi-functional and time-saving</h3>
                    <p className="nameOfUser">by Emma on March 28, 2023</p>
                    <p className="longComment">This electric spice grinder is not only suitable for herbs and spices but also for grinding coffee beans, pollen, and more. It saves you time by quickly grinding a large quantity of ingredients, allowing you to focus on other tasks.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">User-friendly one-button operation</h3>
                    <p className="nameOfUser">by Noah on March 27, 2023</p>
                    <p className="longComment">With its simple one-button operation, the COOL KNIGHT Herb Grinder is incredibly easy to use. Just press down the lid, and the grinder starts grinding. The blade only rotates when the lid is securely pressed, ensuring safety and convenience.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Durable and efficient blade</h3>
                    <p className="nameOfUser">by Ava on March 26, 2023</p>
                    <p className="longComment">The electric grinder's blade is made of high-quality 304 stainless steel, ensuring durability and efficient grinding performance. Its unique shape allows for grinding in all 360-degree directions, ensuring consistent results.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">High-speed rotation for quick results</h3>
                    <p className="nameOfUser">by Liam on March 25, 2023</p>
                    <p className="longComment">With a speed of 30,000 rotations per minute, the COOL KNIGHT Herb Grinder completes its work quickly and efficiently. It's designed to save you time and provide fast results, so you can enjoy freshly ground herbs and spices in no time.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Convenient and safe design</h3>
                    <p className="nameOfUser">by Mia on March 24, 2023</p>
                    <p className="longComment">The COOL KNIGHT Herb Grinder features a convenient and safe design. The lid acts as a switch, ensuring the grinder only operates when the lid is securely in place. It provides peace of mind and prevents accidents.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Easy to clean and maintain</h3>
                    <p className="nameOfUser">by Henry on March 23, 2023</p>
                    <p className="longComment">Cleaning the COOL KNIGHT Herb Grinder is a breeze with the included brush. The stainless steel grinder is easy to wipe clean, ensuring hygienic usage. Additionally, the detachable power cord makes storage and maintenance hassle-free.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Automatic power off protection</h3>
                    <p className="nameOfUser">by Grace on March 22, 2023</p>
                    <p className="longComment">The COOL KNIGHT Herb Grinder is designed with safety in mind. It has automatic power-off protection, shutting off when there is a short circuit, overheating, or when the outer lid is open. You can use it with peace of mind.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Sleek and stylish design</h3>
                    <p className="nameOfUser">by Samuel on March 21, 2023</p>
                    <p className="longComment">Featuring a wood grain design, the COOL KNIGHT Herb Grinder adds a touch of elegance to your kitchen. Its sleek and stylish appearance complements any countertop or kitchen decor.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Effortlessly grinds a variety of ingredients</h3>
                    <p className="nameOfUser">by Harper on March 20, 2023</p>
                    <p className="longComment">Whether it's herbs, spices, coffee beans, or pollen, the COOL KNIGHT Herb Grinder effortlessly grinds a variety of ingredients. It's a versatile tool that caters to all your grinding needs.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">A time-saving kitchen essential</h3>
                    <p className="nameOfUser">by Owen on March 19, 2023</p>
                    <p className="longComment">The COOL KNIGHT Herb Grinder is a must-have kitchen essential for anyone who values efficiency. Its fast grinding speed and large capacity allow you to save time and effortlessly prepare your favorite ingredients.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Perfect consistency every time</h3>
                    <p className="nameOfUser">by Sofia on March 18, 2023</p>
                    <p className="longComment">With the COOL KNIGHT Herb Grinder, you can achieve the perfect consistency every time. Whether you prefer a coarse or fine grind, this grinder gives you full control over the texture of your herbs and spices.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Ideal for culinary enthusiasts</h3>
                    <p className="nameOfUser">by Jack on March 17, 2023</p>
                    <p className="longComment">If you're a culinary enthusiast who loves experimenting with flavors, the COOL KNIGHT Herb Grinder is a valuable tool to have in your kitchen. It allows you to explore a wide range of freshly ground herbs and spices.</p>
                </div>







                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Quick and hassle-free grinding</h3>
                    <p className="nameOfUser">by Stella on March 16, 2023</p>
                    <p className="longComment">The COOL KNIGHT Herb Grinder provides quick and hassle-free grinding. Say goodbye to the tedious and time-consuming process of manually grinding herbs and spices. This electric grinder gets the job done in seconds.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Quiet operation for a peaceful kitchen</h3>
                    <p className="nameOfUser">by Benjamin on March 15, 2023</p>
                    <p className="longComment">Despite its powerful performance, the COOL KNIGHT Herb Grinder operates quietly. You can enjoy the convenience of electric grinding without disturbing the tranquility of your kitchen.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">An essential tool for coffee lovers</h3>
                    <p className="nameOfUser">by Lily on March 14, 2023</p>
                    <p className="longComment">Coffee lovers will appreciate the COOL KNIGHT Herb Grinder's ability to grind coffee beans to perfection. It ensures a consistent grind size, allowing you to extract the full flavor potential from your favorite beans.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Sturdy and reliable construction</h3>
                    <p className="nameOfUser">by Oliver on March 13, 2023</p>
                    <p className="longComment">Crafted with high-quality materials, the COOL KNIGHT Herb Grinder is built to last. Its sturdy construction and reliable performance ensure that it will be a long-lasting addition to your kitchen arsenal.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">A versatile grinder for all occasions</h3>
                    <p className="nameOfUser">by Emily on March 12, 2023</p>
                    <p className="longComment">From everyday cooking to special occasions, the COOL KNIGHT Herb Grinder is a versatile companion. It effortlessly grinds herbs and spices, adding flavor and aroma to your culinary creations.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Compact size for easy storage</h3>
                    <p className="nameOfUser">by William on March 11, 2023</p>
                    <p className="longComment">The COOL KNIGHT Herb Grinder's compact size makes it easy to store in your kitchen cabinets or drawers. It doesn't take up much space, allowing you to keep your countertop clutter-free.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Perfect for herbal remedies</h3>
                    <p className="nameOfUser">by Amelia on March 10, 2023</p>
                    <p className="longComment">If you're into herbal remedies or enjoy making your own herbal blends, the COOL KNIGHT Herb Grinder is an essential tool. It grinds herbs quickly and efficiently, ensuring you get the most out of their medicinal properties.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Impressive grinding speed</h3>
                    <p className="nameOfUser">by Daniel on March 9, 2023</p>
                    <p className="longComment">The COOL KNIGHT Herb Grinder's high rotating speed delivers impressive grinding performance. It shaves off minutes from your prep time, allowing you to spend more time enjoying your delicious dishes.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Great gift for cooking enthusiasts</h3>
                    <p className="nameOfUser">by Victoria on March 8, 2023</p>
                    <p className="longComment">If you're looking for a practical and thoughtful gift for a cooking enthusiast, the COOL KNIGHT Herb Grinder is an excellent choice. They'll appreciate the convenience and versatility it brings to their kitchen.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Enhance the flavor of your dishes</h3>
                    <p className="nameOfUser">by Christopher on March 7, 2023</p>
                    <p className="longComment">Freshly ground herbs and spices can elevate the flavor of your dishes. With the COOL KNIGHT Herb Grinder, you can easily incorporate that extra burst of flavor into your cooking.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Versatile and user-friendly</h3>
                    <p className="nameOfUser">by Penelope on March 6, 2023</p>
                    <p className="longComment">The COOL KNIGHT Herb Grinder is designed to be versatile and user-friendly. It caters to various grinding needs and ensures a seamless experience for both experienced cooks and beginners.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Efficient and time-saving</h3>
                    <p className="nameOfUser">by Gabriel on March 5, 2023</p>
                    <p className="longComment">With the COOL KNIGHT Herb Grinder, grinding herbs and spices becomes a quick and effortless task. Its efficient performance saves you valuable time in the kitchen.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Reliable and consistent results</h3>
                    <p className="nameOfUser">by Isabella on March 4, 2023</p>
                    <p className="longComment">You can rely on the COOL KNIGHT Herb Grinder to deliver consistent results every time. Its powerful motor and sharp blade ensure a uniform grind, enhancing the overall quality of your dishes.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Easy and precise grinding control</h3>
                    <p className="nameOfUser">by Sebastian on March 3, 2023</p>
                    <p className="longComment">The COOL KNIGHT Herb Grinder's one-hand control allows for easy and precise grinding. You can choose between coarse and fine grinding with a simple press, achieving the desired texture effortlessly.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Quality construction for long-lasting use</h3>
                    <p className="nameOfUser">by Abigail on March 2, 2023</p>
                    <p className="longComment">Crafted with high-quality materials, the COOL KNIGHT Herb Grinder is built to withstand daily use. Its durable construction ensures it will be a reliable companion in your kitchen for years to come.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Convenient and time-efficient</h3>
                    <p className="nameOfUser">by Liam on March 1, 2023</p>
                    <p className="longComment">The COOL KNIGHT Herb Grinder streamlines your cooking process, making it more convenient and time-efficient. Say goodbye to manual grinding and hello to effortless preparation.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Grinds herbs and spices to perfection</h3>
                    <p className="nameOfUser">by Harper on February 28, 2023</p>
                    <p className="longComment">When it comes to achieving the perfect grind, the COOL KNIGHT Herb Grinder excels. It allows you to customize the texture of your herbs and spices, ensuring optimal flavor extraction.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">A reliable addition to your kitchen</h3>
                    <p className="nameOfUser">by Olivia on February 27, 2023</p>
                    <p className="longComment">The COOL KNIGHT Herb Grinder is a reliable tool that simplifies your kitchen tasks. Its efficient performance and durable design make it a valuable addition to any culinary setup.</p>
                </div>















                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Grind your own coffee for a flavorful brew</h3>
                    <p className="nameOfUser">by Noah on February 26, 2023</p>
                    <p className="longComment">Coffee enthusiasts will appreciate the COOL KNIGHT Herb Grinder's ability to grind coffee beans to their preferred consistency. Treat yourself to a flavorful cup of freshly ground coffee every morning.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Safe and user-friendly design</h3>
                    <p className="nameOfUser">by Emily on February 25, 2023</p>
                    <p className="longComment">The COOL KNIGHT Herb Grinder prioritizes safety with its user-friendly design. The blade only starts rotating when the lid is securely placed, ensuring a safe grinding experience.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Effortless control over coarseness</h3>
                    <p className="nameOfUser">by William on February 24, 2023</p>
                    <p className="longComment">Achieving the perfect coarseness is a breeze with the COOL KNIGHT Herb Grinder. You can easily control the grinding time to achieve the desired texture for your recipes.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Grind herbs in seconds</h3>
                    <p className="nameOfUser">by Mia on February 23, 2023</p>
                    <p className="longComment">Gone are the days of spending precious minutes grinding herbs manually. The COOL KNIGHT Herb Grinder completes the task in a matter of seconds, saving you time and effort.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Sleek design adds style to your kitchen</h3>
                    <p className="nameOfUser">by Benjamin on February 22, 2023</p>
                    <p className="longComment">Not only is the COOL KNIGHT Herb Grinder highly functional, but it also boasts a sleek design that adds a touch of style to your kitchen countertop.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Grind a variety of ingredients</h3>
                    <p className="nameOfUser">by Amelia on February 21, 2023</p>
                    <p className="longComment">The versatility of the COOL KNIGHT Herb Grinder allows you to grind various ingredients, from herbs and spices to coffee beans. It's a true all-in-one grinder.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Easy to clean and maintain</h3>
                    <p className="nameOfUser">by Ethan on February 20, 2023</p>
                    <p className="longComment">Cleaning the COOL KNIGHT Herb Grinder is a breeze. The included brush helps you remove any residue, ensuring that it stays in pristine condition.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Compact and portable</h3>
                    <p className="nameOfUser">by Charlotte on February 19, 2023</p>
                    <p className="longComment">Whether you're cooking at home or on the go, the COOL KNIGHT Herb Grinder's compact size and portable design make it a convenient companion for all your culinary adventures.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Grinds with precision</h3>
                    <p className="nameOfUser">by Henry on February 18, 2023</p>
                    <p className="longComment">The COOL KNIGHT Herb Grinder's sharp blade and high rotating speed ensure precise grinding. Say goodbye to uneven textures and hello to consistently ground herbs and spices.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Efficient motor for quick results</h3>
                    <p className="nameOfUser">by Sofia on February 17, 2023</p>
                    <p className="longComment">The COOL KNIGHT Herb Grinder's powerful motor works efficiently to deliver quick grinding results. It's perfect for busy individuals who want to save time in the kitchen.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Grind spices for homemade blends</h3>
                    <p className="nameOfUser">by James on February 16, 2023</p>
                    <p className="longComment">Create your own custom spice blends with the COOL KNIGHT Herb Grinder. It effortlessly grinds spices, allowing you to experiment and add unique flavors to your dishes.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Great for small kitchens</h3>
                    <p className="nameOfUser">by Isabella on February 15, 2023</p>
                    <p className="longComment">If you have limited counter space, the COOL KNIGHT Herb Grinder is a fantastic choice. Its compact size ensures it won't take up too much room in your small kitchen.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Enhance the aroma of your ingredients</h3>
                    <p className="nameOfUser">by Alexander on February 14, 2023</p>
                    <p className="longComment">By grinding herbs and spices with the COOL KNIGHT Herb Grinder, you release their aromatic oils, intensifying the flavors and aromas in your dishes.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Sturdy and well-built</h3>
                    <p className="nameOfUser">by Grace on February 13, 2023</p>
                    <p className="longComment">The COOL KNIGHT Herb Grinder is constructed with durability in mind. Its sturdy build ensures it can withstand regular use without losing its performance.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Suitable for professional chefs</h3>
                    <p className="nameOfUser">by Samuel on February 12, 2023</p>
                    <p className="longComment">Professional chefs can benefit from the COOL KNIGHT Herb Grinder's reliable performance and efficient grinding. It's a valuable tool in any culinary setting.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Grind with minimal effort</h3>
                    <p className="nameOfUser">by Lily on February 11, 2023</p>
                    <p className="longComment">Say goodbye to manual grinding that requires significant effort. The COOL KNIGHT Herb Grinder takes the hard work out of the process, allowing you to grind with ease.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Saves space in your kitchen</h3>
                    <p className="nameOfUser">by Daniel on February 10, 2023</p>
                    <p className="longComment">The compact design of the COOL KNIGHT Herb Grinder ensures it won't clutter your kitchen countertops. It's a space-saving solution for efficient herb and spice grinding.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Grind your favorite herbs on demand</h3>
                    <p className="nameOfUser">by Victoria on February 9, 2023</p>
                    <p className="longComment">With the COOL KNIGHT Herb Grinder, you can grind your favorite herbs whenever you need them. Enjoy the freshness and aroma of freshly ground herbs in your recipes.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Effortless grinding experience</h3>
                    <p className="nameOfUser">by Oliver on February 8, 2023</p>
                    <p className="longComment">The COOL KNIGHT Herb Grinder provides an effortless grinding experience. Its powerful motor and sharp blade make grinding herbs and spices a breeze.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Convenient and user-friendly</h3>
                    <p className="nameOfUser">by Emily on February 7, 2023</p>
                    <p className="longComment">The COOL KNIGHT Herb Grinder is designed with convenience in mind. Its one-button operation and easy-to-use features make it accessible for users of all skill levels.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Grind large quantities at once</h3>
                    <p className="nameOfUser">by David on February 6, 2023</p>
                    <p className="longComment">The large-capacity design of the COOL KNIGHT Herb Grinder allows you to grind significant quantities of herbs and spices at once, saving you time and effort.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Perfectly ground spices every time</h3>
                    <p className="nameOfUser">by Mia on February 5, 2023</p>
                    <p className="longComment">Say goodbye to unevenly ground spices. The COOL KNIGHT Herb Grinder ensures consistent grinding results, delivering perfectly ground spices every time.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Versatile and practical</h3>
                    <p className="nameOfUser">by Benjamin on February 4, 2023</p>
                    <p className="longComment">The COOL KNIGHT Herb Grinder is a versatile tool that offers practicality in the kitchen. Its ability to grind various ingredients makes it a must-have for any cooking enthusiast.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Silent operation</h3>
                    <p className="nameOfUser">by Amelia on February 3, 2023</p>
                    <p className="longComment">Unlike traditional grinders, the COOL KNIGHT Herb Grinder operates silently. Enjoy a peaceful cooking experience without the loud noise of grinding.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Durable and long-lasting</h3>
                    <p className="nameOfUser">by Ethan on February 2, 2023</p>
                    <p className="longComment">Invest in the COOL KNIGHT Herb Grinder for its durability and long-lasting performance. It's built to withstand regular use and serve you for years to come.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">An essential kitchen accessory</h3>
                    <p className="nameOfUser">by Charlotte on February 1, 2023</p>
                    <p className="longComment">The COOL KNIGHT Herb Grinder is an essential accessory for any kitchen. Its ability to quickly grind herbs and spices adds convenience and flavor to your cooking.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Safe and reliable</h3>
                    <p className="nameOfUser">by Noah on January 31, 2023</p>
                    <p className="longComment">The COOL KNIGHT Herb Grinder prioritizes safety with its automatic power-off protection. You can use it with peace of mind, knowing that it's designed with your safety in mind.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Easy to assemble and disassemble</h3>
                    <p className="nameOfUser">by Sophia on January 30, 2023</p>
                    <p className="longComment">The COOL KNIGHT Herb Grinder can be easily assembled and disassembled, making it a breeze to clean and maintain. Enjoy hassle-free grinding and cleaning.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">A time-saving kitchen tool</h3>
                    <p className="nameOfUser">by Liam on January 29, 2023</p>
                    <p className="longComment">Save time in the kitchen with the COOL KNIGHT Herb Grinder. Its high-speed grinding capabilities ensure you can prepare your ingredients quickly and efficiently.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Sleek and stylish design</h3>
                    <p className="nameOfUser">by Harper on January 28, 2023</p>
                    <p className="longComment">The COOL KNIGHT Herb Grinder features a sleek and stylish design that adds a touch of elegance to your kitchen. It's a functional and aesthetically pleasing addition to your countertop.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Grind with precision</h3>
                    <p className="nameOfUser">by Lucas on January 27, 2023</p>
                    <p className="longComment">Achieve precise grinding results with the COOL KNIGHT Herb Grinder. Its control options allow you to adjust the coarseness of the grind to suit your preferences.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Conserve energy with its efficient operation</h3>
                    <p className="nameOfUser">by Zoe on January 26, 2023</p>
                    <p className="longComment">The COOL KNIGHT Herb Grinder is designed to be energy-efficient. It maximizes its grinding power while minimizing power consumption, helping you save on electricity.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Grind with precision</h3>
                    <p className="nameOfUser">by Lucas on January 27, 2023</p>
                    <p className="longComment">Achieve precise grinding results with the COOL KNIGHT Herb Grinder. Its control options allow you to adjust the coarseness of the grind to suit your preferences.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Conserve energy with its efficient operation</h3>
                    <p className="nameOfUser">by Zoe on January 26, 2023</p>
                    <p className="longComment">The COOL KNIGHT Herb Grinder is designed to be energy-efficient. It maximizes its grinding power while minimizing power consumption, helping you save on electricity.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">A must-have for herb enthusiasts</h3>
                    <p className="nameOfUser">by Benjamin on January 25, 2023</p>
                    <p className="longComment">If you're an herb enthusiast, the COOL KNIGHT Herb Grinder is a must-have tool for your kitchen. It enhances the flavors and aromas of your herbs, elevating your culinary experience.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Perfectly ground coffee beans</h3>
                    <p className="nameOfUser">by Ava on January 24, 2023</p>
                    <p className="longComment">In addition to herbs and spices, the COOL KNIGHT Herb Grinder is great for grinding coffee beans. Enjoy a fresh cup of coffee with perfectly ground beans.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Quiet and efficient operation</h3>
                    <p className="nameOfUser">by Liam on January 23, 2023</p>
                    <p className="longComment">Grind your herbs and spices without disturbing the peace. The COOL KNIGHT Herb Grinder operates quietly, allowing you to enjoy a serene cooking experience.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Great gift for cooking enthusiasts</h3>
                    <p className="nameOfUser">by Emily on January 22, 2023</p>
                    <p className="longComment">If you know someone who loves cooking, the COOL KNIGHT Herb Grinder makes an excellent gift. It's a practical and thoughtful present that will be appreciated.</p>
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
                    <h3 className="shortComment">Efficace et pratique</h3>
                    <p className="nameOfUser">par Olivia le 30 mars 2023</p>
                    <p className="longComment">Le broyeur d'herbes COOL KNIGHT est un outil efficace et pratique pour moudre des herbes et des épices. Avec sa grande capacité et sa vitesse de rotation élevée, il broie rapidement une quantité généreuse d'herbes en quelques secondes, vous faisant gagner du temps et des efforts.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Contrôle parfait de la mouture</h3>
                    <p className="nameOfUser">par Ethan le 29 mars 2023</p>
                    <p className="longComment">La conception du broyeur d'herbes COOL KNIGHT avec son couvercle transparent permet un contrôle parfait de la mouture. Que vous préfériez une mouture grossière ou fine, vous pouvez facilement l'ajuster d'une seule main. Il offre polyvalence et praticité pour obtenir la texture désirée.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Polyvalent et gain de temps</h3>
                    <p className="nameOfUser">par Emma le 28 mars 2023</p>
                    <p className="longComment">Ce broyeur d'épices électrique convient non seulement aux herbes et aux épices, mais également au broyage des grains de café, du pollen, et plus encore. Il vous fait gagner du temps en broyant rapidement une grande quantité d'ingrédients, vous permettant de vous concentrer sur d'autres tâches.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Utilisation facile avec un seul bouton</h3>
                    <p className="nameOfUser">par Noah le 27 mars 2023</p>
                    <p className="longComment">Avec sa simple utilisation d'un seul bouton, le broyeur d'herbes COOL KNIGHT est incroyablement facile à utiliser. Il vous suffit d'appuyer sur le couvercle et le broyeur se mettra en marche. La lame ne tourne que lorsque le couvercle est fermement en place, garantissant ainsi la sécurité et la praticité.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Lame durable et efficace</h3>
                    <p className="nameOfUser">par Ava le 26 mars 2023</p>
                    <p className="longComment">La lame du broyeur électrique est fabriquée en acier inoxydable de haute qualité (304), assurant ainsi durabilité et performance de broyage efficace. Sa forme unique permet un broyage dans toutes les directions à 360 degrés, garantissant des résultats constants.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Rotation à haute vitesse pour des résultats rapides</h3>
                    <p className="nameOfUser">par Liam le 25 mars 2023</p

                    >
                    <p className="longComment">Avec une vitesse de rotation de 30 000 tours par minute, le broyeur d'herbes COOL KNIGHT termine rapidement et efficacement son travail. Il est conçu pour vous faire gagner du temps et obtenir rapidement des herbes et des épices fraîchement moulues.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Design pratique et sûr</h3>
                    <p className="nameOfUser">par Mia le 24 mars 2023</p>
                    <p className="longComment">Le broyeur d'herbes COOL KNIGHT présente un design pratique et sûr. Le couvercle fait office d'interrupteur, garantissant que le broyeur ne fonctionne que lorsque le couvercle est correctement en place. Il offre une tranquillité d'esprit et prévient les accidents.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Facile à nettoyer et à entretenir</h3>
                    <p className="nameOfUser">par Henry le 23 mars 2023</p>
                    <p className="longComment">Nettoyer le broyeur d'herbes COOL KNIGHT est un jeu d'enfant avec la brosse incluse. Le broyeur en acier inoxydable est facile à essuyer, garantissant une utilisation hygiénique. De plus, le cordon d'alimentation amovible facilite le rangement et l'entretien.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Protection automatique contre les coupures de courant</h3>
                    <p className="nameOfUser">par Grace le 22 mars 2023</p>
                    <p className="longComment">Le broyeur d'herbes COOL KNIGHT est conçu en pensant à la sécurité. Il dispose d'une protection automatique contre les coupures de courant, s'éteignant en cas de court-circuit, de surchauffe ou lorsque le couvercle extérieur est ouvert. Vous pouvez l'utiliser en toute tranquillité.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Design élégant et stylé</h3>
                    <p className="nameOfUser">par Samuel le 21 mars 2023</p>
                    <p className="longComment">Avec son design en grain de bois, le broyeur d'herbes COOL KNIGHT ajoute une touche d'élégance à votre cuisine. Son apparence élégante et stylée complète tous les plans de travail et décors de cuisine.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Moud sans effort une variété d'ingrédients</h3>
                    <p className="nameOfUser">par Harper le 20 mars 2023</p>
                    <p className="longComment">Que ce soit des herbes, des épices, des grains de café ou du pollen, le broyeur d'herbes COOL KNIGHT moud sans effort une variété d'ingrédients. C'est un outil polyvalent qui répond à tous vos besoins de broyage

                        .</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Un essentiel de cuisine qui vous fait gagner du temps</h3>
                    <p className="nameOfUser">par Owen le 19 mars 2023</p>
                    <p className="longComment">Le broyeur d'herbes COOL KNIGHT est un essentiel de cuisine incontournable pour tous ceux qui apprécient l'efficacité. Sa vitesse de broyage rapide et sa grande capacité vous permettent de gagner du temps et de préparer facilement vos ingrédients préférés.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Consistance parfaite à chaque fois</h3>
                    <p className="nameOfUser">par Sofia le 18 mars 2023</p>
                    <p className="longComment">Avec le broyeur d'herbes COOL KNIGHT, vous pouvez obtenir la consistance parfaite à chaque fois. Que vous préfériez une mouture grossière ou fine, ce broyeur vous donne un contrôle total sur la texture de vos herbes et épices.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Idéal pour les passionnés de cuisine</h3>
                    <p className="nameOfUser">par Jack le 17 mars 2023</p>
                    <p className="longComment">Si vous êtes un passionné de cuisine qui aime expérimenter les saveurs, le broyeur d'herbes COOL KNIGHT est un outil précieux à avoir dans votre cuisine. Il vous permet d'explorer toute une gamme d'herbes et d'épices fraîchement moulues.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Broyage rapide et sans tracas</h3>
                    <p className="nameOfUser">par Stella le 16 mars 2023</p>
                    <p className="longComment">Le broyeur d'herbes COOL KNIGHT offre un broyage rapide et sans tracas. Dites adieu au processus fastidieux et chronophage du broyage manuel des herbes et des épices. Ce broyeur électrique fait le travail en quelques secondes seulement.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Fonctionnement silencieux pour une cuisine paisible</h3>
                    <p className="nameOfUser">par Benjamin le 15 mars 2023</p>
                    <p className="longComment">Malgré sa puissance, le broyeur d'herbes COOL KNIGHT fonctionne silencieusement. Vous pouvez profiter de la commodité du broyage électrique sans perturber la tranquillité de votre cuisine.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Un outil indispensable pour les amateurs de café</h3>
                    <p className="nameOfUser">par Lily le 14 mars 2023</p>
                    <p className="longComment">Les amateurs de café apprécieront la capacité du broyeur d'herbes COOL KNIGHT à broyer les grains de café à la perfection. Il garantit une mouture uniforme, vous permettant d'extraire tout le potentiel de saveur de vos grains préférés.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Construction solide et fiable</h3>
                    <p className="nameOfUser">par Oliver le 13 mars 2023</p>
                    <p className="longComment">Fabriqué avec des matériaux de haute qualité, le broyeur d'herbes COOL KNIGHT est conçu pour durer. Sa construction solide et sa performance fiable en font un ajout durable à votre arsenal de cuisine.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Un broyeur polyvalent pour toutes les occasions</h3>
                    <p className="nameOfUser">par Emily le 12 mars 2023</p>
                    <p className="longComment">De la cuisine de tous les jours aux occasions spéciales, le broyeur d'herbes COOL KNIGHT est un compagnon polyvalent. Il broie facilement les herbes et les épices, ajoutant saveur et arôme à vos créations culinaires.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Taille compacte pour un rangement facile</h3>
                    <p className="nameOfUser">par William le 11 mars 2023</p>
                    <p className="longComment">La taille compacte du broyeur d'herbes COOL KNIGHT facilite son rangement dans vos armoires ou tiroirs de cuisine. Il ne prend pas beaucoup de place, vous permettant de garder votre plan de travail dégagé.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Parfait pour les remèdes à base de plantes</h3>
                    <p className="nameOfUser">par Amelia le 10 mars 2023</p>
                    <p className="longComment">Si vous vous intéressez aux remèdes à base de plantes ou si vous aimez créer vos propres mélanges à base de plantes, le broyeur d'herbes COOL KNIGHT est un outil indispensable. Il broie les herbes rapidement et efficacement, vous permettant de profiter au maximum de leurs propriétés médicinales.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Vitesse de broyage impressionnante</h3>
                    <p className="nameOfUser">par Daniel le 9 mars 2023</p>
                    <p className="longComment">La vitesse de rotation élevée du broyeur d'herbes COOL KNIGHT offre une performance de broyage impressionnante. Il vous fait gagner des minutes lors de la préparation, vous permettant de passer plus de temps à savourer vos délicieux plats.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Excellent cadeau pour les passionnés de cuisine</h3>
                    <p className="nameOfUser">par Victoria le 8 mars 2023</p>
                    <p className="longComment">Si vous recherchez un cadeau pratique et réfléchi pour un passionné de cuisine, le broyeur d'herbes COOL KNIGHT est un excellent choix. Ils apprécieront la commodité et la polyvalence qu'il apporte à leur cuisine.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Rehaussez la saveur de vos plats</h3>
                    <p className="nameOfUser">par Christopher le 7 mars 2023</p>
                    <p className="longComment">Les herbes et les épices fraîchement moulues peuvent rehausser la saveur de vos plats. Avec le broyeur d'herbes COOL KNIGHT, vous pouvez facilement ajouter cette explosion de saveur supplémentaire à votre cuisine.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Polyvalent et convivial</h3>
                    <p className="nameOfUser">par Penelope le 6 mars 2023</p>
                    <p className="longComment">Le broyeur d'herbes COOL KNIGHT est conçu pour être polyvalent et convivial. Il répond à différents besoins en matière de broyage et garantit une expérience fluide tant pour les cuisiniers expérimentés que pour les débutants.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Efficace et gain de temps</h3>
                    <p className="nameOfUser">par Gabriel le 5 mars 2023</p>
                    <p className="longComment">Avec le broyeur d'herbes COOL KNIGHT, le broyage des herbes et des épices devient une tâche rapide et sans effort. Sa performance efficace vous fait gagner un temps précieux dans la cuisine.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Résultats fiables et uniformes</h3>
                    <p className="nameOfUser">par Isabella le 4 mars 2023</p>
                    <p className="longComment">Vous pouvez compter sur le broyeur d'herbes COOL KNIGHT pour obtenir des résultats uniformes à chaque fois. Son moteur puissant et sa lame tranchante garantissent un broyage uniforme, améliorant la qualité globale de vos plats.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Contrôle du broyage facile et précis</h3>
                    <p className="nameOfUser">par Sebastian le 3 mars 2023</p>
                    <p className="longComment">Le contrôle à une main du broyeur d'herbes COOL KNIGHT permet un broyage facile et précis. Vous pouvez choisir entre un broyage grossier et fin d'une simple pression, obtenant ainsi la texture souhaitée sans effort.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Construction de qualité pour une utilisation durable</h3>
                    <p className="nameOfUser">par Abigail le 2 mars 2023</p>
                    <p className="longComment">Fabriqué avec des matériaux de haute qualité, le broyeur d'herbes COOL KNIGHT est conçu pour résister à une utilisation quotidienne. Sa construction robuste en fait un compagnon fiable dans votre cuisine pendant de nombreuses années.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Pratique et économie de temps</h3>
                    <p className="nameOfUser">par Liam le 1er mars 2023</p>
                    <p className="longComment">Le broyeur d'herbes COOL KNIGHT simplifie votre processus de cuisson, le rendant plus pratique et économique en temps. Dites adieu au broyage manuel et bonjour à une préparation sans effort.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Moud les herbes et les épices à la perfection</h3>
                    <p className="nameOfUser">par Harper le 28 février 2023</p>
                    <p className="longComment">Quand il s'agit d'obtenir une mouture parfaite, le broyeur d'herbes COOL KNIGHT excelle. Il vous permet de personnaliser la texture de vos herbes et épices, assurant une extraction optimale de la saveur.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Un ajout fiable à votre cuisine</h3>
                    <p className="nameOfUser">par Olivia le 27 février 2023</p>
                    <p className="longComment">Le broyeur d'herbes COOL KNIGHT est un outil fiable qui simplifie vos tâches de cuisine. Sa performance efficace et sa conception durable en font un ajout précieux à tout aménagement culinaire.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Facile à utiliser et à nettoyer</h3>
                    <p className="nameOfUser">par Henry le 26 février 2023</p>
                    <p className="longComment">Le broyeur d'herbes COOL KNIGHT est conçu pour une utilisation facile et un nettoyage sans tracas. Ses pièces amovibles et son design ergonomique facilitent grandement la préparation et l'entretien.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Un excellent rapport qualité-prix</h3>
                    <p className="nameOfUser">par Sophia le 25 février 2023</p>
                    <p className="longComment">Pour sa qualité de construction et ses performances, le broyeur d'herbes COOL KNIGHT offre un excellent rapport qualité-prix. C'est un investissement qui en vaut la peine pour les amateurs de cuisine et les chefs passionnés.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Un must-have dans votre cuisine</h3>
                    <p className="nameOfUser">par Alexander le 24 février 2023</p>
                    <p className="longComment">Que vous soyez un cuisinier amateur ou professionnel, le broyeur d'herbes COOL KNIGHT est un must-have dans votre cuisine. Il simplifie la préparation des herbes et des épices, ajoutant une touche de saveur à toutes vos créations culinaires.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Polyvalent et performant</h3>
                    <p className="nameOfUser">par Ava le 23 février 2023</p>
                    <p className="longComment">Le broyeur d'herbes COOL KNIGHT est polyvalent et performant. Que vous ayez besoin de moudre des herbes, des épices, du café ou même des noix, il répondra à tous vos besoins de broyage avec facilité.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Design élégant et moderne</h3>
                    <p className="nameOfUser">par Noah le 22 février 2023</p>
                    <p className="longComment">Le broyeur d'herbes COOL KNIGHT présente un design élégant et moderne qui s'intègre parfaitement à n'importe quelle cuisine. Sa finition de haute qualité ajoute une touche de style à votre espace de cuisson.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Facile à ranger et à transporter</h3>
                    <p className="nameOfUser">par Mia le 21 février 2023</p>
                    <p className="longComment">La taille compacte et le design léger du broyeur d'herbes COOL KNIGHT le rendent facile à ranger et à transporter. Que vous l'utilisiez à la maison, en voyage ou en camping, vous pouvez profiter de la commodité du broyage électrique partout où vous allez.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Améliorez vos compétences culinaires</h3>
                    <p className="nameOfUser">par Charlotte le 20 février 2023</p>
                    <p className="longComment">Avec le broyeur d'herbes COOL KNIGHT, vous pouvez améliorer vos compétences culinaires en ajoutant des saveurs fraîchement moulues à vos plats. Expérimentez et découvrez de nouvelles combinaisons d'herbes et d'épices pour créer des plats délicieux.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Idéal pour les amateurs de thé</h3>
                    <p className="nameOfUser">par Benjamin le 19 février 2023</p>
                    <p className="longComment">Si vous êtes un amateur de thé, le broyeur d'herbes COOL KNIGHT est un outil précieux. Il vous permet de broyer finement les herbes et les feuilles de thé pour une infusion parfaite et une libération maximale des saveurs.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Une cuisson plus créative</h3>
                    <p className="nameOfUser">par Grace le 18 février 2023</p>
                    <p className="longComment">Le broyeur d'herbes COOL KNIGHT ouvre de nouvelles possibilités culinaires et vous permet d'explorer des saveurs uniques. Libérez votre créativité en mélangeant différentes herbes et épices pour des plats savoureux et originaux.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Silencieux et puissant</h3>
                    <p className="nameOfUser">par David le 17 février 2023</p>
                    <p className="longComment">Le broyeur d'herbes COOL KNIGHT fonctionne de manière silencieuse tout en étant puissant. Vous pouvez broyer vos herbes et épices sans déranger les autres et profiter d'une expérience de cuisine paisible.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Un compagnon pratique pour les repas en famille</h3>
                    <p className="nameOfUser">par Emily le 16 février 2023</p>
                    <p className="longComment">Le broyeur d'herbes COOL KNIGHT est un compagnon pratique lors des repas en famille. Il vous permet de préparer rapidement des herbes fraîches pour agrémenter vos plats et de profiter de moments de qualité avec vos proches.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Un incontournable pour les amateurs de pesto</h3>
                    <p className="nameOfUser">par Michael le 15 février 2023</p>
                    <p className="longComment">Si vous êtes un amateur de pesto fait maison, le broyeur d'herbes COOL KNIGHT est un incontournable. Il vous permet de broyer facilement les ingrédients frais pour créer un pesto délicieux et authentique.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Un outil polyvalent pour les smoothies</h3>
                    <p className="nameOfUser">par Victoria le 14 février 2023</p>
                    <p className="longComment">En plus de moudre les herbes et les épices, le broyeur d'herbes COOL KNIGHT est également idéal pour préparer des smoothies. Vous pouvez broyer des fruits congelés et des ingrédients pour créer des smoothies sains et délicieux en un rien de temps.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Un cadeau parfait pour les amateurs de cuisine</h3>
                    <p className="nameOfUser">par Oliver le 13 février 2023</p>
                    <p className="longComment">Si vous recherchez un cadeau pour un amateur de cuisine, le broyeur d'herbes COOL KNIGHT est un choix parfait. Il allie fonctionnalité, qualité et style, et fera le bonheur de tout passionné de cuisine.</p>
                </div>
            </div>}
        </div>
    );
};


export default ReviewsMill;
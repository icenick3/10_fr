import React from 'react';
import './Reviews.css'
import {Stars5, Stars2, Stars4, Stars1, Stars3} from "../Stars/Stars";

const ReviewsMicro = ({setShowReviews, showReviews, lang}) => {
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
                    <h3 className="shortComment">Unleash your inner superstar</h3>
                    <p className="nameOfUser">by Sarah on November 5, 2022</p>
                    <p className="longComment">With the Ankuka Karaoke Wireless Microphone, you can channel your inner superstar and enjoy singing your favorite songs like a pro.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Versatile and multifunctional</h3>
                    <p className="nameOfUser">by Michael on November 2, 2022</p>
                    <p className="longComment">This microphone is not just for karaoke. It can also be used as a Bluetooth speaker, loudspeaker, and even a recorder, making it a versatile and multifunctional device.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Professional audio quality</h3>
                    <p className="nameOfUser">by Emily on October 30, 2022</p>
                    <p className="longComment">The Ankuka Karaoke Wireless Microphone delivers professional audio sound with its advanced audio processor and tuning system, creating a stunning live-sound environment.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Endless fun with magic sounds</h3>
                    <p className="nameOfUser">by David on October 27, 2022</p>
                    <p className="longComment">The microphone features four magic sounds, including children's voice, female voice, male voice, and old male voice, adding a touch of fun and excitement to your karaoke sessions.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Long-lasting battery life</h3>
                    <p className="nameOfUser">by Sophia on October 25, 2022</p>
                    <p className="longComment">You can sing your heart out for up to 8 hours thanks to the long-lasting battery life of the Ankuka Karaoke Wireless Microphone, ensuring uninterrupted fun.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Easy Bluetooth connectivity</h3>
                    <p className="nameOfUser">by Daniel on October 22, 2022</p>
                    <p className="longComment">Connecting to your favorite devices is a breeze with the Ankuka Karaoke Wireless Microphone. Simply enable Bluetooth and pair it with your Android, iOS, or PC.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Perfect for karaoke parties</h3>
                    <p className="nameOfUser">by Olivia on October 20, 2022</p>
                    <p className="longComment">Bring the party to life with this microphone's glowing dancing LED lights. It's the ideal addition to any karaoke party, creating a vibrant and energetic atmosphere.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Great gift for all ages</h3>
                    <p className="nameOfUser">by Ethan on October 17, 2022</p>
                    <p className="longComment">Whether you're buying it for a child or an adult, the Ankuka Karaoke Wireless Microphone is a fantastic gift that guarantees hours of entertainment and fun.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Record your amazing performances</h3>
                    <p className="nameOfUser">by Ava on October 15, 2022</p>
                    <p className="longComment">Not only can you sing along to your favorite songs, but you can also record your performances with the built-in recording function of this microphone.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Portable and convenient</h3>
                    <p className="nameOfUser">by Noah on October 12, 2022</p>
                    <p className="longComment">Take the party with you wherever you go. This handheld and portable microphone allows you to enjoy karaoke fun on the move.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Impressive echo reverberation</h3>
                    <p className="nameOfUser">by Lily on October 10, 2022</p>
                    <p className="longComment">Experience an immersive karaoke environment with the Ankuka Karaoke Wireless Microphone's wonderful echo reverberation, adding depth to your singing.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Easy to use for all ages</h3>
                    <p className="nameOfUser">by Benjamin on October 7, 2022</p>
                    <p className="longComment">The user-friendly design of this microphone makes it suitable for both kids and adults. Everyone can join in the karaoke fun.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Enhance your singing experience</h3>
                    <p className="nameOfUser">by Mia on October 5, 2022</p>
                    <p className="longComment">With its high-quality audio output and customizable sound effects, the Ankuka Karaoke Wireless Microphone takes your singing experience to the next level.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Create lasting memories</h3>
                    <p className="nameOfUser">by Oliver on October 2, 2022</p>
                    <p className="longComment">Gather your friends and family, and create unforgettable memories with this karaoke machine that brings joy and laughter to any gathering.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Compatible with popular karaoke apps</h3>
                    <p className="nameOfUser">by Charlotte on September 30, 2022</p>
                    <p className="longComment">Sing along to your favorite songs on apps like YouTube and Smule, as this microphone seamlessly connects to various karaoke platforms.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Fun and engaging for kids</h3>
                    <p className="nameOfUser">by Lucas on September 27, 2022</p>
                    <p className="longComment">Kids will love the Ankuka Karaoke Wireless Microphone's colorful LED lights and the ability to transform their voices with the magic sound effects.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Durable and well-built</h3>
                    <p className="nameOfUser">by Amelia on September 25, 2022</p>
                    <p className="longComment">Designed to withstand the rigors of karaoke parties, this microphone is made with quality materials to ensure durability and longevity.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Easy to clean and maintain</h3>
                    <p className="nameOfUser">by Henry on September 22, 2022</p>
                    <p className="longComment">Cleaning this microphone is a breeze. Simply wipe it down with a soft cloth to keep it looking and sounding its best.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Customer support you can rely on</h3>
                    <p className="nameOfUser">by Victoria on September 20, 2022</p>
                    <p className="longComment">Ankuka provides excellent customer support. If you have any issues or questions, their team is always ready to assist you.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Great value for the price</h3>
                    <p className="nameOfUser">by William on September 17, 2022</p>
                    <p className="longComment">Considering its features and performance, the Ankuka Karaoke Wireless Microphone offers great value for its affordable price.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Ankuka never disappoints</h3>
                    <p className="nameOfUser">by Emma on September 15, 2022</p>
                    <p className="longComment">I have used Ankuka products before, and they always deliver high-quality and reliable devices. This microphone is no exception.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Portable entertainment on the go</h3>
                    <p className="nameOfUser">by Alexander on September 12, 2022</p>
                    <p className="longComment">Take the party wherever you want with this portable microphone. It's perfect for road trips, picnics, and outdoor gatherings.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Stunning LED light display</h3>
                    <p className="nameOfUser">by Grace on September 10, 2022</p>
                    <p className="longComment">The dancing LED lights on this microphone create a mesmerizing light show that adds excitement and visual appeal to your karaoke sessions.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Encourage creativity and confidence</h3>
                    <p className="nameOfUser">by Samuel on September 7, 2022</p>
                    <p className="longComment">Karaoke is not just about singing. It helps build confidence, encourages self-expression, and fosters creativity, especially for children.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Party like a rockstar</h3>
                    <p className="nameOfUser">by Chloe on September 5, 2022</p>
                    <p className="longComment">Transform any gathering into a rocking party with the Ankuka Karaoke Wireless Microphone. Get ready to sing, dance, and have a blast.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Perfect for family karaoke nights</h3>
                    <p className="nameOfUser">by Ryan on September 2, 2022</p>
                    <p className="longComment">Gather the whole family and have a fun-filled karaoke night at home. This microphone is suitable for all ages and ensures enjoyable moments for everyone.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Impressive sound projection</h3>
                    <p className="nameOfUser">by Harper on August 30, 2022</p>
                    <p className="longComment">Despite its compact size, this microphone delivers clear and powerful sound projection, filling the room with your melodious voice.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Stay connected with your favorite songs</h3>
                    <p className="nameOfUser">by Leo on August 27, 2022</p>
                    <p className="longComment">Never miss a beat. With Bluetooth connectivity, you can easily access your music library and sing along to your beloved tunes.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Unleash your creativity</h3>
                    <p className="nameOfUser">by Penelope on August 25, 2022</p>
                    <p className="longComment">The Ankuka Karaoke Wireless Microphone allows you to experiment with different vocal styles, sound effects, and song interpretations, giving you the freedom to express yourself.</p>
                </div>
                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">Host karaoke competitions</h3>
                    <p className="nameOfUser">by Matthew on August 22, 2022</p>
                    <p className="longComment">Challenge your friends and family to a friendly karaoke battle. This microphone is the perfect tool to spark healthy competition and laughter.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Sing your heart out</h3>
                    <p className="nameOfUser">by Zoe on August 20, 2022</p>
                    <p className="longComment">Release your inner diva or rockstar and let your voice soar with the Ankuka Karaoke Wireless Microphone. It's your time to shine.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Portable party in your pocket</h3>
                    <p className="nameOfUser">by Elijah on August 17, 2022</p>
                    <p className="longComment">This compact microphone allows you to carry the party with you wherever you go. It's like having a mini karaoke machine in your pocket.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Sing duets with your friends</h3>
                    <p className="nameOfUser">by Stella on August 15, 2022</p>
                    <p className="longComment">Connect two microphones simultaneously and sing duets with your friends, creating harmonies and unforgettable moments.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">A gift that brings joy</h3>
                    <p className="nameOfUser">by Daniel on August 12, 2022</p>
                    <p className="longComment">Surprise your loved ones with the Ankuka Karaoke Wireless Microphone. It's a gift that guarantees smiles, laughter, and cherished memories.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Host karaoke parties anywhere</h3>
                    <p className="nameOfUser">by Bella on August 10, 2022</p>
                    <p className="longComment">With its built-in speaker, you can host karaoke parties in any location. No need for additional sound systems or complicated setups.</p>
                </div>
                <div className="comment">
                    <Stars2/>
                    <h3 className="shortComment">Immerse yourself in the music</h3>
                    <p className="nameOfUser">by Nathan on August 7, 2022</p>
                    <p className="longComment">With the Ankuka Karaoke Wireless Microphone, you'll feel like you're performing on a big stage, captivating the audience with your powerful vocals.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Fun for all occasions</h3>
                    <p className="nameOfUser">by Violet on August 5, 2022</p>
                    <p className="longComment">Whether it's a birthday party, a family gathering, or a spontaneous karaoke night, this microphone adds a dose of excitement and entertainment to any event.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Enjoy karaoke in the comfort of your home</h3>
                    <p className="nameOfUser">by Gabriel on August 2, 2022</p>
                    <p className="longComment">No need to go to a crowded karaoke bar. With this microphone, you can create your own karaoke atmosphere and sing your heart out at home.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Amp up the energy with magic sound effects</h3>
                    <p className="nameOfUser">by Scarlett on July 30, 2022</p>
                    <p className="longComment">Transform your voice with the magic sound effects of the Ankuka Karaoke Wireless Microphone and add an extra element of fun to your performances.</p>
                </div>
                <div className="comment">
                    <Stars2/>
                    <h3 className="shortComment">Easy to connect, easy to sing</h3>
                    <p className="nameOfUser">by Samuel on July 27, 2022</p>
                    <p className="longComment">Pairing this microphone with your devices is a breeze. Just connect via Bluetooth, choose your song, and let the singing begin.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">An audio upgrade for your karaoke sessions</h3>
                    <p className="nameOfUser">by Maya on July 25, 2022</p>
                    <p className="longComment">Say goodbye to low-quality karaoke systems. This microphone enhances the audio experience and takes your singing performances to the next level.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Record your favorite moments</h3>
                    <p className="nameOfUser">by Oliver on July 22, 2022</p>
                    <p className="longComment">Capture your singing moments and create lasting memories. This microphone allows you to record your performances and listen to them later.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Easy to operate for all ages</h3>
                    <p className="nameOfUser">by Lily on July 20, 2022</p>
                    <p className="longComment">From kids to adults, everyone can easily operate this microphone. Its user-friendly design ensures a hassle-free karaoke experience.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Bring out your inner DJ</h3>
                    <p className="nameOfUser">by Ethan on July 17, 2022</p>
                    <p className="longComment">With the Ankuka Karaoke Wireless Microphone, you can take charge of the music and become the DJ of your karaoke party.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">A versatile entertainment companion</h3>
                    <p className="nameOfUser">by Mia on July 15, 2022</p>
                    <p className="longComment">Beyond karaoke, this microphone can be used for speeches, presentations, and as a portable speaker for listening to your favorite tunes.</p>
                </div>
                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">Long-lasting battery life</h3>
                    <p className="nameOfUser">by Noah on July 12, 2022</p>
                    <p className="longComment">The built-in rechargeable battery ensures extended singing and playing time, allowing you to enjoy hours of non-stop entertainment.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Amp up the party with echo reverberation</h3>
                    <p className="nameOfUser">by Ava on July 10, 2022</p>
                    <p className="longComment">The echo reverberation feature of this microphone adds depth and richness to your voice, making you feel like a professional singer.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Convenient USB charging</h3>
                    <p className="nameOfUser">by James on July 7, 2022</p>
                    <p className="longComment">No need to worry about running out of batteries. Simply connect the microphone to a USB power source for convenient charging.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Make your own music videos</h3>
                    <p className="nameOfUser">by Sophia on July 5, 2022</p>
                    <p className="longComment">Combine the Ankuka Karaoke Wireless Microphone with your smartphone and create fun and memorable music videos to share with your friends.</p>
                </div>
                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">An affordable karaoke solution</h3>
                    <p className="nameOfUser">by Benjamin on July 2, 2022</p>
                    <p className="longComment">Enjoy the thrill of karaoke without breaking the bank. This microphone offers great value for its price, delivering hours of entertainment.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Perfect for parties and gatherings</h3>
                    <p className="nameOfUser">by Emily on June 29, 2022</p>
                    <p className="longComment">Bring the party to life with this karaoke microphone. It's a must-have for any social gathering or celebration.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Portable and lightweight</h3>
                    <p className="nameOfUser">by Daniel on June 27, 2022</p>
                    <p className="longComment">Take the karaoke fun wherever you go. This microphone is compact and lightweight, making it easy to carry and transport.</p>
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
                    <h3 className="shortComment">Libérez votre superstar intérieure</h3>
                    <p className="nameOfUser">par Sarah le 5 novembre 2022</p>
                    <p className="longComment">Avec le microphone sans fil Ankuka Karaoke, vous pouvez libérer votre superstar intérieure et chanter vos chansons préférées comme un professionnel.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Polyvalent et multifonctionnel</h3>
                    <p className="nameOfUser">par Michael le 2 novembre 2022</p>
                    <p className="longComment">Ce microphone n'est pas seulement pour le karaoké. Il peut également être utilisé comme haut-parleur Bluetooth, haut-parleur et même comme enregistreur, en faisant un appareil polyvalent et multifonctionnel.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Qualité audio professionnelle</h3>
                    <p className="nameOfUser">par Emily le 30 octobre 2022</p>
                    <p className="longComment">Le microphone sans fil Ankuka Karaoke offre une qualité audio professionnelle grâce à son processeur audio avancé et son système d'accord, créant un environnement sonore en direct impressionnant.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Un plaisir sans fin avec des sons magiques</h3>
                    <p className="nameOfUser">par David le 27 octobre 2022</p>
                    <p className="longComment">Le microphone propose quatre sons magiques, dont la voix d'enfant, la voix féminine, la voix masculine et la voix d'homme âgé, ajoutant une touche de plaisir et d'excitation à vos sessions de karaoké.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Autonomie de batterie longue durée</h3>
                    <p className="nameOfUser">par Sophia le 25 octobre 2022</p>
                    <p className="longComment">Vous pouvez chanter pendant jusqu'à 8 heures grâce à l'autonomie de batterie longue durée du microphone sans fil Ankuka Karaoke, garantissant un plaisir ininterrompu.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Connexion Bluetooth facile</h3>
                    <p className="nameOfUser">par Daniel le 22 octobre 2022</p>
                    <p className="longComment">La connexion à vos appareils préférés est un jeu d'enfant avec le microphone sans fil Ankuka Karaoke. Activez simplement le Bluetooth et associez-le à votre appareil Android, iOS ou PC.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Parfait pour les soirées karaoké</h3>
                    <p className="nameOfUser">par Olivia le 20 octobre 2022</p>
                    <p className="longComment">Animez la soirée avec les lumières LED dansantes de ce microphone. C'est l'ajout idéal à toute soirée karaoké, créant une atmosphère vibrante et énergique.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Un excellent cadeau pour tous les âges</h3>
                    <p className="nameOfUser">par Ethan le 17 octobre 2022</p>
                    <p className="longComment">Que vous l'achetiez pour un enfant ou un adulte, le microphone sans fil Ankuka Karaoke est un cadeau fantastique garantissant des heures de divertissement et de plaisir.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Enregistrez vos performances incroyables</h3>
                    <p className="nameOfUser">par Ava le 15 octobre 2022</p>
                    <p className="longComment">Non seulement vous pouvez chanter vos chansons préférées, mais vous pouvez également enregistrer vos performances avec la fonction d'enregistrement intégrée de ce microphone.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Portable et pratique</h3>
                    <p className="nameOfUser">par Noah le 12 octobre 2022</p>
                    <p className="longComment">Emportez la fête avec vous où que vous alliez. Ce microphone portable et facile à tenir vous permet de profiter du karaoké en déplacement.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Impressionnante réverbération d'écho</h3>
                    <p className="nameOfUser">par Lily le 10 octobre 2022</p>
                    <p className="longComment">Vivez une expérience de karaoké immersive avec la merveilleuse réverbération d'écho du microphone sans fil Ankuka Karaoke, ajoutant de la profondeur à votre chant.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Facile à utiliser pour tous les âges</h3>
                    <p className="nameOfUser">par Benjamin le 7 octobre 2022</p>
                    <p className="longComment">La conception conviviale de ce microphone le rend adapté aux enfants comme aux adultes. Tout le monde peut participer à la fête du karaoké.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Améliorez votre expérience de chant</h3>
                    <p className="nameOfUser">par Mia le 5 octobre 2022</p>
                    <p className="longComment">Avec sa sortie audio de haute qualité et ses effets sonores personnalisables, le microphone sans fil Ankuka Karaoke améliore votre expérience de chant.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Créez des souvenirs durables</h3>
                    <p className="nameOfUser">par Oliver le 2 octobre 2022</p>
                    <p className="longComment">Réunissez vos amis et votre famille et créez des souvenirs inoubliables avec cette machine à karaoké qui apporte joie et rires à chaque rassemblement.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Compatible avec les applications karaoké populaires</h3>
                    <p className="nameOfUser">par Charlotte le 30 septembre 2022</p>
                    <p className="longComment">Chantez vos chansons préférées sur des applications telles que YouTube et Smule, car ce microphone se connecte parfaitement à différentes plateformes de karaoké.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Amusant et captivant pour les enfants</h3>
                    <p className="nameOfUser">par Lucas le 27 septembre 2022</p>
                    <p className="longComment">Les enfants adoreront les lumières LED colorées du microphone sans fil Ankuka Karaoke et la possibilité de transformer leur voix avec les effets sonores magiques.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Robuste et bien construit</h3>
                    <p className="nameOfUser">par Amelia le 25 septembre 2022</p>
                    <p className="longComment">Conçu pour résister aux rigueurs des soirées karaoké, ce microphone est fabriqué avec des matériaux de qualité pour assurer durabilité et longévité.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Facile à nettoyer et à entretenir</h3>
                    <p className="nameOfUser">par Henry le 22 septembre 2022</p>
                    <p className="longComment">Nettoyer ce microphone est un jeu d'enfant. Il vous suffit de l'essuyer avec un chiffon doux pour qu'il conserve son aspect et sa qualité sonore.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Un support client sur lequel vous pouvez compter</h3>
                    <p className="nameOfUser">par Victoria le 20 septembre 2022</p>
                    <p className="longComment">Ankuka offre un excellent support client. Si vous rencontrez des problèmes ou avez des questions, leur équipe est toujours prête à vous aider.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Un excellent rapport qualité-prix</h3>
                    <p className="nameOfUser">par William le 17 septembre 2022</p>
                    <p className="longComment">Compte tenu de ses fonctionnalités et de ses performances, le microphone sans fil Ankuka Karaoke offre un excellent rapport qualité-prix.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Ankuka ne déçoit jamais</h3>
                    <p className="nameOfUser">par Emma le 15 septembre 2022</p>
                    <p className="longComment">J'ai déjà utilisé des produits Ankuka, et ils offrent toujours des appareils de haute qualité et fiables. Ce microphone ne fait pas exception.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Design attrayant et élégant</h3>
                    <p className="nameOfUser">par James le 12 septembre 2022</p>
                    <p className="longComment">Ce microphone a un design moderne et accrocheur qui ajoutera une touche d'élégance à votre expérience de karaoké.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Élimination efficace du bruit</h3>
                    <p className="nameOfUser">par Grace le 10 septembre 2022</p>
                    <p className="longComment">Le microphone sans fil Ankuka Karaoke est doté d'une fonction d'élimination du bruit qui garantit un son clair et net, même dans des environnements bruyants.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Instructions claires et faciles à suivre</h3>
                    <p className="nameOfUser">par Benjamin le 7 septembre 2022</p>
                    <p className="longComment">L'utilisation de ce microphone est très simple grâce aux instructions détaillées fournies. Vous pouvez le configurer et le commencer à utiliser en un rien de temps.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Une expérience de chant de première classe</h3>
                    <p className="nameOfUser">par Lily le 5 septembre 2022</p>
                    <p className="longComment">Si vous recherchez une expérience de karaoké de haute qualité, le microphone sans fil Ankuka Karaoke est un choix parfait. Vous ne serez pas déçu.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Livraison rapide et service fiable</h3>
                    <p className="nameOfUser">par Noah le 2 septembre 2022</p>
                    <p className="longComment">J'ai été impressionné par la rapidité de la livraison et par le service fiable d'Ankuka. Mon microphone est arrivé en parfait état.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Lumineux et amusant</h3>
                    <p className="nameOfUser">par Mia le 30 août 2022</p>
                    <p className="longComment">Les lumières LED colorées de ce microphone ajoutent une dimension amusante et excitante à vos performances de karaoké.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Fonctionne parfaitement sans fil</h3>
                    <p className="nameOfUser">par Oliver le 27 août 2022</p>
                    <p className="longComment">La connectivité sans fil de ce microphone est fiable et solide. Je n'ai rencontré aucun problème de latence ou de perte de signal.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Un moyen idéal pour se détendre et s'amuser</h3>
                    <p className="nameOfUser">par Charlotte le 25 août 2022</p>
                    <p className="longComment">Chanter avec le microphone sans fil Ankuka Karaoke est un excellent moyen de se détendre, de libérer le stress et de passer du bon temps avec des amis.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Idéal pour les fêtes à la maison</h3>
                    <p className="nameOfUser">par Lucas le 22 août 2022</p>
                    <p className="longComment">Si vous organisez une fête à la maison, ce microphone ajoutera une dimension de plaisir et d'interaction à l'événement.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Un cadeau parfait pour les amateurs de musique</h3>
                    <p className="nameOfUser">par Amelia le 20 août 2022</p>
                    <p className="longComment">Si vous connaissez quelqu'un qui aime chanter, ce microphone sans fil Ankuka Karaoke fera un cadeau parfait qui sera apprécié pendant des années.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Bonne qualité sonore</h3>
                    <p className="nameOfUser">par Henry le 17 août 2022</p>
                    <p className="longComment">Le son produit par ce microphone est clair et de bonne qualité. Vous pourrez profiter d'une expérience de chant agréable et immersive.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Des heures de divertissement</h3>
                    <p className="nameOfUser">par Victoria le 15 août 2022</p>
                    <p className="longComment">Ce microphone vous fournira des heures de divertissement. Vous ne vous lasserez jamais de chanter avec lui.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Un must pour les fêtes de karaoké</h3>
                    <p className="nameOfUser">par William le 12 août 2022</p>
                    <p className="longComment">Si vous organisez régulièrement des fêtes de karaoké, ce microphone est un must. Il apportera une nouvelle vie à vos soirées.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Polyvalent et multifonctionnel</h3>
                    <p className="nameOfUser">par Emma le 10 août 2022</p>
                    <p className="longComment">En plus du karaoké, ce microphone peut également être utilisé pour des présentations, des discours et d'autres activités nécessitant un amplificateur vocal.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Un cadeau qui apporte de la joie</h3>
                    <p className="nameOfUser">par Daniel le 12 août 2022</p>
                    <p className="longComment">Surprenez vos proches avec le microphone sans fil Ankuka Karaoke. C'est un cadeau qui garantit des sourires, des rires et des souvenirs précieux.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Organisez des soirées karaoké n'importe où</h3>
                    <p className="nameOfUser">par Bella le 10 août 2022</p>
                    <p className="longComment">Avec son haut-parleur intégré, vous pouvez organiser des soirées karaoké n'importe où. Pas besoin de systèmes audio supplémentaires ou de configurations compliquées.</p>
                </div>
                <div className="comment">
                    <Stars2/>
                    <h3 className="shortComment">Plongez-vous dans la musique</h3>
                    <p className="nameOfUser">par Nathan le 7 août 2022</p>
                    <p className="longComment">Avec le microphone sans fil Ankuka Karaoke, vous aurez l'impression de vous produire sur une grande scène, captivant le public avec votre voix puissante.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Amusant pour toutes les occasions</h3>
                    <p className="nameOfUser">par Violet le 5 août 2022</p>
                    <p className="longComment">Que ce soit pour une fête d'anniversaire, une réunion de famille ou une soirée karaoké spontanée, ce microphone ajoute une dose d'excitation et de divertissement à tout événement.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Profitez du karaoké dans le confort de votre maison</h3>
                    <p className="nameOfUser">par Gabriel le 2 août 2022</p>
                    <p className="longComment">Pas besoin de vous rendre dans un bar karaoké bondé. Avec ce microphone, vous pouvez créer votre propre ambiance karaoké et chanter à cœur joie chez vous.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Ajoutez de l'énergie avec des effets sonores magiques</h3>
                    <p className="nameOfUser">par Scarlett le 30 juillet 2022</p>
                    <p className="longComment">Transformez votre voix avec les effets sonores magiques du microphone sans fil Ankuka Karaoke et ajoutez une touche supplémentaire de plaisir à vos performances.</p>
                </div>
                <div className="comment">
                    <Stars2/>
                    <h3 className="shortComment">Facile à connecter, facile à chanter</h3>
                    <p className="nameOfUser">par Samuel le 27 juillet 2022</p>
                    <p className="longComment">Associer ce microphone à vos appareils est un jeu d'enfant. Il vous suffit de le connecter via Bluetooth, de choisir votre chanson et de commencer à chanter.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Une amélioration audio pour vos sessions de karaoké</h3>
                    <p className="nameOfUser">par Maya le 25 juillet 2022</p>
                    <p className="longComment">Dites adieu aux systèmes karaoké de mauvaise qualité. Ce microphone améliore l'expérience audio et élève vos performances de chant à un niveau supérieur.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Enregistrez vos moments préférés</h3>
                    <p className="nameOfUser">par Oliver le 22 juillet 2022</p>
                    <p className="longComment">Capturez vos moments de chant et créez des souvenirs durables. Ce microphone vous permet d'enregistrer vos performances et de les écouter ultérieurement.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Facile à utiliser pour tous les âges</h3>
                    <p className="nameOfUser">par Lily le 20 juillet 2022</p>
                    <p className="longComment">Des enfants aux adultes, tout le monde peut utiliser facilement ce microphone. Sa conception conviviale garantit une expérience karaoké sans tracas.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Faites ressortir votre DJ intérieur</h3>
                    <p className="nameOfUser">par Ethan le 17 juillet 2022</p>
                    <p className="longComment">Avec le microphone sans fil Ankuka Karaoke, vous pouvez prendre le contrôle de la musique et devenir le DJ de votre soirée karaoké.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Un compagnon de divertissement polyvalent</h3>
                    <p className="nameOfUser">par Mia le 15 juillet 2022</p>
                    <p className="longComment">Au-delà du karaoké, ce microphone peut être utilisé pour des discours, des présentations et comme haut-parleur portable pour écouter vos morceaux préférés.</p>
                </div>
                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">Batterie longue durée</h3>
                    <p className="nameOfUser">par Noah le 12 juillet 2022</p>
                    <p className="longComment">La batterie rechargeable intégrée offre une durée de chant et de jeu prolongée, vous permettant de profiter d'heures de divertissement sans interruption.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Ambiance de fête avec réverbération d'écho</h3>
                    <p className="nameOfUser">par Ava le 10 juillet 2022</p>
                    <p className="longComment">La fonction de réverbération d'écho de ce microphone ajoute de la profondeur et de la richesse à votre voix, vous donnant l'impression d'être un chanteur professionnel.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Recharge pratique via USB</h3>
                    <p className="nameOfUser">par James le 7 juillet 2022</p>
                    <p className="longComment">Plus besoin de vous inquiéter de tomber à court de batteries. Il vous suffit de connecter le microphone à une source d'alimentation USB pour une recharge pratique.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Créez vos propres vidéoclips musicaux</h3>
                    <p className="nameOfUser">par Sophia le 5 juillet 2022</p>
                    <p className="longComment">Associez le microphone sans fil Ankuka Karaoke à votre smartphone et créez des vidéoclips musicaux amusants et mémorables à partager avec vos amis.</p>
                </div>
                <div className="comment">
                    <Stars3/>
                    <h3 className="shortComment">Une solution karaoké abordable</h3>
                    <p className="nameOfUser">par Benjamin le 2 juillet 2022</p>
                    <p className="longComment">Profitez du frisson du karaoké sans vous ruiner. Ce microphone offre un excellent rapport qualité-prix et offre des heures de divertissement.</p>
                </div>
                <div className="comment">
                    <Stars5/>
                    <h3 className="shortComment">Parfait pour les fêtes et les rassemblements</h3>
                    <p className="nameOfUser">par Emily le 29 juin 2022</p>
                    <p className="longComment">Animez la fête avec ce microphone karaoké. C'est un incontournable pour toutes les réunions sociales ou les célébrations.</p>
                </div>
                <div className="comment">
                    <Stars4/>
                    <h3 className="shortComment">Portable et léger</h3>
                    <p className="nameOfUser">par Daniel le 27 juin 2022</p>
                    <p className="longComment">Emportez le plaisir du karaoké partout où vous allez. Ce microphone est compact et léger, ce qui le rend facile à transporter.</p>
                </div>
            </div>}
        </div>
    );
};


export default ReviewsMicro;
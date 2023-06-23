import React from 'react';
import './AboutUsPopup.css'

const AboutUsPopup = ({setAbout, about, lang}) => {
    return (
        <div className={about ? "returnPolicy2 show404" : "returnPolicy2"} onClick={() => setAbout(false)}>
            <div className={about ? "returnBlock2 show404" : "returnBlock2"} onClick={(e) => e.stopPropagation()}>
                <img className="closeGuide"
                     src="https://i.pinimg.com/originals/52/e3/86/52e38681b082f94f2917624bb56edf42.png" alt=""
                     onClick={() => setAbout(false)}/>
                <div className="title col-md-12 col-lg-10">
                    <h3 className="mbr-section-title mbr-fonts-style align-center mb-4 display-2 "><strong>PRIVACY
                        POLICY</strong>
                        <div><strong><br/></strong></div>
                    </h3>
                    <h4 className="mbr-section-subtitle align-center mbr-fonts-style mb-4 display-5">Effective date:
                        20-01-2023
                        <div><br/></div>
                        <div>Hepdrive Limited ("us", "we", or "our") operates the website (the "Service").</div>
                        <div><br/></div>
                        <div>This page informs you of our policies regarding the collection, use, and disclosure of
                            personal data when you use our Service and the choices you have associated with that data.
                        </div>
                        <div><br/></div>
                        <div>We use your data to provide and improve the Service. By using the Service, you agree to the
                            collection and use of information in accordance with this policy. Unless otherwise defined
                            in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our
                            Terms and Conditions, accessible here Terms and Conditions
                        </div>
                        <div><br/></div>
                        <div>DEFINITIONS</div>
                        <div>SERVICE</div>
                        <div>Service is the website operated by Hepdrive Limited.</div>
                        <div>PERSONAL DATA</div>
                        <div>Personal Data means data about a living individual who can be identified from those data
                            (or from those and other information either in our possession or likely to come into our
                            possession).
                        </div>
                        <div>USAGE DATA</div>
                        <div>Usage Data is data collected automatically either generated by the use of the Service or
                            from the Service infrastructure itself (for example, the duration of a page visit).
                        </div>
                        <div>COOKIES</div>
                        <div>Cookies are small pieces of data stored on your device (computer or mobile device).</div>
                        <div>DATA CONTROLLER</div>
                        <div>Data Controller means the natural or legal person who (either alone or jointly or in common
                            with other persons) determines the purposes for which and the manner in which any personal
                            information are, or are to be, processed.
                        </div>
                        <div>For the purpose of this Privacy Policy, we are a Data Controller of your Personal Data.
                        </div>
                        <div>DATA PROCESSORS (OR SERVICE PROVIDERS)</div>
                        <div>Data Processor (or Service Provider) means any natural or legal person who processes the
                            data on behalf of the Data Controller. We may use the services of various Service Providers
                            in order to process your data more effectively.
                        </div>
                        <div>DATA SUBJECT (OR USER)</div>
                        <div>Data Subject is any living individual who is using our Service and is the subject of
                            Personal Data.
                        </div>
                        <div>INFORMATION COLLECTION AND USE</div>
                        <div>We collect several different types of information for various purposes to provide and
                            improve our Service to you.
                        </div>
                        <div><br/></div>
                        <div>TYPES OF DATA COLLECTED</div>
                        <div>PERSONAL DATA</div>
                        <div>While using our Service, we may ask you to provide us with certain personally identifiable
                            information that can be used to contact or identify you ("Personal Data"). Personally
                            identifiable information may include, but is not limited to:
                        </div>
                        <div><br/></div>
                        <div>Email address</div>
                        <div>First name and last name</div>
                        <div>Phone number</div>
                        <div>Address, State, Province, ZIP/Postal code, City</div>
                        <div>Cookies and Usage Data</div>
                        <div>USAGE DATA</div>
                        <div>We may also collect information how the Service is accessed and used ("Usage Data"). This
                            Usage Data may include information such as your computer's Internet Protocol address (e.g.
                            IP address), browser type, browser version, the pages of our Service that you visit, the
                            time and date of your visit, the time spent on those pages, unique device identifiers and
                            other diagnostic data.
                        </div>
                        <div><br/></div>
                        <div>TRACKING &amp; COOKIES DATA</div>
                        <div>We use cookies and similar tracking technologies to track the activity on our Service and
                            hold certain information.
                        </div>
                        <div><br/></div>
                        <div>Cookies are files with small amount of data which may include an anonymous unique
                            identifier. Cookies are sent to your browser from a website and stored on your device.
                            Tracking technologies also used are beacons, tags, and scripts to collect and track
                            information and to improve and analyze our Service.
                        </div>
                        <div><br/></div>
                        <div>You can instruct your browser to refuse all cookies or to indicate when a cookie is being
                            sent. However, if you do not accept cookies, you may not be able to use some portions of our
                            Service.
                        </div>
                        <div><br/></div>
                        <div>Examples of Cookies we use:</div>
                        <div><br/></div>
                        <div>SESSION COOKIES.</div>
                        <div>&nbsp; We use Session Cookies to operate our Service.</div>
                        <div>PREFERENCE COOKIES.</div>
                        <div>&nbsp; We use Preference Cookies to remember your preferences and various settings.</div>
                        <div>SECURITY COOKIES.</div>
                        <div>&nbsp; We use Security Cookies for security purposes.</div>
                        <div><br/></div>
                        <div><br/></div>
                        <div>USE OF DATA</div>
                        <div>Hepdrive Limited uses the collected data for various purposes:</div>
                        <div><br/></div>
                        <div>To provide and maintain our Service</div>
                        <div>To notify you about changes to our Service</div>
                        <div>To allow you to participate in interactive features of our Service when you choose to do
                            so
                        </div>
                        <div>To provide customer support</div>
                        <div>To gather analysis or valuable information so that we can improve our Service</div>
                        <div>To monitor the usage of our Service</div>
                        <div>To detect, prevent and address technical issues</div>
                        <div><br/></div>
                        <div><br/></div>
                        <div>LEGAL BASIS FOR PROCESSING PERSONAL DATA UNDER GENERAL DATA PROTECTION REGULATION (GDPR)
                        </div>
                        <div>If you are from the European Economic Area (EEA), Hepdrive Limited legal basis for
                            collecting and using the personal information described in this Privacy Policy depends on
                            the Personal Data we collect and the specific context in which we collect it.
                        </div>
                        <div><br/></div>
                        <div>Hepdrive Limited may process your Personal Data because:</div>
                        <div><br/></div>
                        <div>We need to perform a contract with you</div>
                        <div>You have given us permission to do so</div>
                        <div>The processing is in our legitimate interests and it's not overridden by your rights</div>
                        <div>For payment processing purposes</div>
                        <div>To comply with the law</div>
                        <div><br/></div>
                        <div><br/></div>
                        <div>RETENTION OF DATA</div>
                        <div>Hepdrive Limited will retain your Personal Data only for as long as is necessary for the
                            purposes set out in this Privacy Policy. We will retain and use your Personal Data to the
                            extent necessary to comply with our legal obligations (for example, if we are required to
                            retain your data to comply with applicable laws), resolve disputes, and enforce our legal
                            agreements and policies.
                        </div>
                        <div><br/></div>
                        <div>Hepdrive Limited will also retain Usage Data for internal analysis purposes. Usage Data is
                            generally retained for a shorter period of time, except when this data is used to strengthen
                            the security or to improve the functionality of our Service, or we are legally obligated to
                            retain this data for longer time periods.
                        </div>
                        <div><br/></div>
                        <div>TRANSFER OF DATA</div>
                        <div>Your information, including Personal Data, may be transferred to — and maintained on —
                            computers located outside of your state, province, country or other governmental
                            jurisdiction where the data protection laws may differ than those from your jurisdiction.
                        </div>
                        <div><br/></div>
                        <div>If you are located outside and choose to provide information to us, please note that we
                            transfer the data, including Personal Data, to and process it there.
                        </div>
                        <div><br/></div>
                        <div>Your consent to this Privacy Policy followed by your submission of such information
                            represents your agreement to that transfer.
                        </div>
                        <div><br/></div>
                        <div>Hepdrive Limited will take all steps reasonably necessary to ensure that your data is
                            treated securely and in accordance with this Privacy Policy and no transfer of your Personal
                            Data will take place to an organization or a country unless there are adequate controls in
                            place including the security of your data and other personal information.
                        </div>
                        <div><br/></div>
                        <div>DISCLOSURE OF DATA</div>
                        <div>BUSINESS TRANSACTION</div>
                        <div>If Hepdrive Limited is involved in a merger, acquisition or asset sale, your Personal Data
                            may be transferred. We will provide notice before your Personal Data is transferred and
                            becomes subject to a different Privacy Policy.
                        </div>
                        <div><br/></div>
                        <div>DISCLOSURE FOR LAW ENFORCEMENT</div>
                        <div>Under certain circumstances, Hepdrive Limited may be required to disclose your Personal
                            Data if required to do so by law or in response to valid requests by public authorities
                            (e.g. a court or a government agency).
                        </div>
                        <div><br/></div>
                        <div>LEGAL REQUIREMENTS</div>
                        <div>Hepdrive Limited may disclose your Personal Data in the good faith belief that such action
                            is necessary to:
                        </div>
                        <div><br/></div>
                        <div>To comply with a legal obligation</div>
                        <div>To protect and defend the rights or property of Hepdrive Limited</div>
                        <div>To prevent or investigate possible wrongdoing in connection with the Service</div>
                        <div>To protect the personal safety of users of the Service or the public</div>
                        <div>To protect against legal liability</div>
                        <div><br/></div>
                        <div><br/></div>
                        <div>SECURITY OF DATA</div>
                        <div>The security of your data is important to us, but remember that no method of transmission
                            over the Internet, or method of electronic storage is 100% secure. While we strive to use
                            commercially acceptable means to protect your Personal Data, we cannot guarantee its
                            absolute security.
                        </div>
                        <div><br/></div>
                        <div>YOUR DATA PROTECTION RIGHTS UNDER GENERAL DATA PROTECTION REGULATION (GDPR)</div>
                        <div>If you are a resident of the European Economic Area (EEA), you have certain data protection
                            rights. Hepdrive Limited aims to take reasonable steps to allow you to correct, amend,
                            delete, or limit the use of your Personal Data.
                        </div>
                        <div><br/></div>
                        <div>If you wish to be informed what Personal Data we hold about you and if you want it to be
                            removed from our systems, please contact us.
                        </div>
                        <div><br/></div>
                        <div>In certain circumstances, you have the following data protection rights:</div>
                        <div><br/></div>
                        <div>The right to access, update or to delete the information we have on you.</div>
                        <div>Whenever made possible, you can access, update or request deletion of your Personal Data
                            directly within your account settings section. If you are unable to perform these actions
                            yourself, please contact us to assist you.
                        </div>
                        <div>The right of rectification.</div>
                        <div>&nbsp; You have the right to have your information rectified if that information is
                            inaccurate or incomplete.
                        </div>
                        <div>The right to object.</div>
                        <div>&nbsp; You have the right to object to our processing of your Personal Data.</div>
                        <div>The right of restriction.</div>
                        <div>&nbsp; You have the right to request that we restrict the processing of your personal
                            information.
                        </div>
                        <div>The right to data portability.</div>
                        <div>&nbsp; You have the right to be provided with a copy of the information we have on you in a
                            structured, machine-readable and commonly used format.
                        </div>
                        <div>The right to withdraw consent.</div>
                        <div>&nbsp; You also have the right to withdraw your consent at any time where Hepdrive Limited
                            relied on your consent to process your personal information.
                        </div>
                        <div>Please note that we may ask you to verify your identity before responding to such
                            requests.
                        </div>
                        <div><br/></div>
                        <div>You have the right to complain to a Data Protection Authority about our collection and use
                            of your Personal Data. For more information, please contact your local data protection
                            authority in the European Economic Area (EEA).
                        </div>
                        <div><br/></div>
                        <div>SERVICE PROVIDERS</div>
                        <div>We may employ third party companies and individuals to facilitate our Service ("Service
                            Providers"), to provide the Service on our behalf, to perform Service-related services or to
                            assist us in analyzing how our Service is used.
                        </div>
                        <div><br/></div>
                        <div>These third parties have access to your Personal Data only to perform these tasks on our
                            behalf and are obligated not to disclose or use it for any other purpose.
                        </div>
                        <div><br/></div>
                        <div>ANALYTICS</div>
                        <div>We may use third-party Service Providers to monitor and analyze the use of our Service.
                        </div>
                        <div><br/></div>
                        <div>Google Analytics</div>
                        <div>Google Analytics is a web analytics service offered by Google that tracks and reports
                            website traffic. Google uses the data collected to track and monitor the use of our Service.
                            This data is shared with other Google services. Google may use the collected data to
                            contextualize and personalize the ads of its own advertising network.
                        </div>
                        <div>You can opt-out of having made your activity on the Service available to Google Analytics
                            by installing the Google Analytics opt-out browser add-on. The add-on prevents the Google
                            Analytics JavaScript (ga.js, analytics.js, and dc.js) from sharing information with Google
                            Analytics about visits activity.
                        </div>
                        <div>For more information on the privacy practices of Google, please visit the Google
                            Privacy &amp; Terms web page: https://policies.google.com/privacy?hl=en
                        </div>
                        <div>PAYMENTS</div>
                        <div>We may provide paid products and/or services within the Service. In that case, we use
                            third-party services for payment processing (e.g. payment processors).
                        </div>
                        <div><br/></div>
                        <div>We will not store or collect your payment card details. That information is provided
                            directly to our third-party payment processors whose use of your personal information is
                            governed by their Privacy Policy. These payment processors adhere to the standards set by
                            PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands
                            like Visa, Mastercard, American Express and Discover. PCI-DSS requirements help ensure the
                            secure handling of payment information.
                        </div>
                        <div><br/></div>
                        <div>LINKS TO OTHER SITES</div>
                        <div>Our Service may contain links to other sites that are not operated by us. If you click on a
                            third party link, you will be directed to that third party's site. We strongly advise you to
                            review the Privacy Policy of every site you visit.
                        </div>
                        <div><br/></div>
                        <div>We have no control over and assume no responsibility for the content, privacy policies or
                            practices of any third party sites or services.
                        </div>
                        <div><br/></div>
                        <div>CHILDREN'S PRIVACY</div>
                        <div>Our Service does not address anyone under the age of 18 ("Children").</div>
                        <div><br/></div>
                        <div>We do not knowingly collect personally identifiable information from anyone under the age
                            of 18. If you are a parent or guardian and you are aware that your child has provided us
                            with Personal Data, please contact us. If we become aware that we have collected Personal
                            Data from children without verification of parental consent, we take steps to remove that
                            information from our servers.
                        </div>
                        <div><br/></div>
                        <div>SCOPE OF THIS PRIVACY POLICY</div>
                        <div>This privacy policy applies to your use of our services owned or operated by the Hepdrive
                            Limited on this website. This policy does not apply to your use of unaffiliated sites to
                            which we only link to.
                        </div>
                        <div><br/></div>
                        <div>GENERAL DIGITAL CONTENT POLICY</div>
                        <div>Hepdrive Limited is legally authorized to offer this service on this website. The content
                            offered on this website does not contain any sexually-oriented adult (pornographic) content.
                            This website does not include software that would damage anyone’s computer, which could be
                            used for malicious purposes like sending spam emails or spreading a computer virus, or would
                            violate anyone’s privacy (spyware or cookies, for example).
                        </div>
                        <div><br/></div>
                        <div>CHANGES TO THIS PRIVACY POLICY</div>
                        <div>We may update our Privacy Policy from time to time. We will notify you of any changes by
                            posting the new Privacy Policy on this page.
                        </div>
                        <div><br/></div>
                        <div>We will update the "effective date" at the top of this Privacy Policy.</div>
                        <div><br/></div>
                        <div>You are advised to review this Privacy Policy periodically for any changes. Changes to this
                            Privacy Policy are effective when they are posted on this page.
                        </div>
                        <div><br/></div>
                        <div>CONTACT US</div>
                        <div>If you have any questions about this Privacy Policy, please contact us
                            support@smartcart.info
                        </div>
                    </h4>
                </div>
            </div>

        </div>
    );
};

export default AboutUsPopup;
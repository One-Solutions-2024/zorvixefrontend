import React, { useEffect } from 'react';
const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.AOS) {
      window.AOS.init({ duration: 800 });
    }
  }, []);
      useEffect(() => {
        document.title = "Privacy Policy | Zorvixe";
    }, []);

  return (
    <section id="privacy-policy" className="hero section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="container">
          <div className="row card p-4">
            <div className="col-lg-12 col-12">
              <div className="text-center mb-5">
                <h1 className="display-5 fw-bold text-primary">Privacy Policy</h1>
              </div>
              <div className="section-heading mb-5">
                <p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
                <p>We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.</p>

                <h4>Interpretation and Definitions</h4>
                <h5>Interpretation</h5>
                <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>

                <h5>Definitions</h5>
                <p>For the purposes of this Privacy Policy:</p>
                <ul>
                  {[
                    { term: "Account", definition: "means a unique account created for You to access our Service or parts of our Service." },
                    { term: "Affiliate", definition: "means an entity that controls, is controlled by or is under common control with a party, where \"control\" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority." },
                    { term: "Company", definition: "(referred to as either \"the Company\", \"We\", \"Us\" or \"Our\" in this Agreement) refers to Zorvixe." },
                    { term: "Cookies", definition: "are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses." },
                    { term: "Country", definition: "refers to: Karnataka, India" },
                    { term: "Device", definition: "means any device that can access the Service such as a computer, a cellphone or a digital tablet." },
                    { term: "Personal Data", definition: "is any information that relates to an identified or identifiable individual." },
                    { term: "Service", definition: "refers to the Website." },
                    { term: "Service Provider", definition: "means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used." },
                    { term: "Usage Data", definition: "refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit)." },
                    { term: "Website", definition: "refers to Zorvixe, accessible from ", link: "https://www.zorvixetechnologies.com/" },
                    { term: "You", definition: "means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable." }
                  ].map((item, index) => (
                    <li key={index}>
                      <p><strong>{item.term}</strong> {item.definition}
                        {item.link && (
                          <a href={item.link} rel="noreferrer" target="_blank">
                            {item.link}
                          </a>
                        )}
                      </p>
                    </li>
                  ))}
                </ul>

                <h5>Our Data Collection Policy</h5>
                <p>When you contact us via email or fill out a form on our site, we collect and store your information to respond to your inquiry.</p>

                <h4>Information We Collect</h4>
                <p>We collect the following information when you:</p>
                <ul>
                  {["Register on our site", "Fill out a form on our site"].map((item, index) => (
                    <li key={index}><p>{item}</p></li>
                  ))}
                </ul>
                <p>This information may include:</p>
                <ul>
                  {["Name", "Email address", "Phone number"].map((item, index) => (
                    <li key={index}><p>{item}</p></li>
                  ))}
                </ul>

                <h4>Anonymous Visits</h4>
                <p>You can visit our site anonymously if you prefer.</p>

                <h4>Contact and Marketing</h4>
                <p>If you submit your personal information and contact details, we reserve the right to contact you via:</p>
                <ul>
                  {["Phone call", "SMS", "Email", "WhatsApp"].map((item, index) => (
                    <li key={index}><p>{item}</p></li>
                  ))}
                </ul>

                <h4>Tracking Technologies and Cookies</h4>
                <p>We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:</p>
                <ul>
                  <li>
                    <p><strong>Cookies or Browser Cookies.</strong> A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service. Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use Cookies.</p>
                  </li>
                  <li>
                    <p><strong>Web Beacons.</strong> Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).</p>
                  </li>
                </ul>
                <p>Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser. You can learn more about cookies on <a href="https://www.termsfeed.com/blog/cookies/#What_Are_Cookies" target="_blank" rel="noopener noreferrer">TermsFeed website</a> article.</p>

                <p>We use both Session and Persistent Cookies for the purposes set out below:</p>
                <ul>
                  {[
                    {
                      type: "Necessary / Essential Cookies",
                      details: "Type: Session Cookies\nAdministered by: Us\nPurpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services."
                    },
                    {
                      type: "Cookies Policy / Notice Acceptance Cookies",
                      details: "Type: Persistent Cookies\nAdministered by: Us\nPurpose: These Cookies identify if users have accepted the use of cookies on the Website."
                    },
                    {
                      type: "Functionality Cookies",
                      details: "Type: Persistent Cookies\nAdministered by: Us\nPurpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website."
                    }
                  ].map((item, index) => (
                    <li key={index}>
                      <p><strong>{item.type}</strong></p>
                      {item.details.split('\n').map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </li>
                  ))}
                </ul>
                <p>For more information about the cookies we use and your choices regarding cookies, please visit our Cookies Policy or the Cookies section of our Privacy Policy.</p>

                <h5>Use of Your Personal Data</h5>
                <p>The Company may use Personal Data for the following purposes:</p>
                <ul>
                  {[
                    "To provide and maintain our Service, including to monitor the usage of our Service.",
                    "To manage Your Account: to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.",
                    "For the performance of a contract: the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.",
                    "To contact You: To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.",
                    "To provide You with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.",
                    "To manage Your requests: To attend and manage Your requests to Us.",
                    "For business transfers: We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.",
                    "For other purposes: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience."
                  ].map((item, index) => (
                    <li key={index}><p><strong>{item.split(':')[0]}:</strong>{item.split(':').slice(1).join(':')}</p></li>
                  ))}
                </ul>

                <p>We may share Your personal information in the following situations:</p>
                <ul>
                  {[
                    "With Service Providers: We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You.",
                    "For business transfers: We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.",
                    "With Affiliates: We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.",
                    "With business partners: We may share Your information with Our business partners to offer You certain products, services or promotions.",
                    "With other users: when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.",
                    "With Your consent: We may disclose Your personal information for any other purpose with Your consent."
                  ].map((item, index) => (
                    <li key={index}><strong>{item.split(':')[0]}:</strong> {item.split(':').slice(1).join(':')}</li>
                  ))}
                </ul>

                <h5>Retention of Your Personal Data</h5>
                <p>The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.</p>
                <p>The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.</p>

                <h5>Transfer of Your Personal Data</h5>
                <p>Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.</p>
                <p>Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.</p>
                <p>The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.</p>

                <h5>Delete Your Personal Data</h5>
                <p>You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.</p>
                <p>Our Service may give You the ability to delete certain information about You from within the Service.</p>
                <p>You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the account settings section that allows you to manage Your personal information. You may also contact Us to request access to, correct, or delete any personal information that You have provided to Us.</p>
                <p>Please note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so.</p>

                <h5>Disclosure of Your Personal Data</h5>
                <h4>Business Transactions</h4>
                <p>If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.</p>

                <h4>Law enforcement</h4>
                <p>Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).</p>

                <h4>Other legal requirements</h4>
                <p>The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:</p>
                <ul>
                  {[
                    "Comply with a legal obligation",
                    "Protect and defend the rights or property of the Company",
                    "Prevent or investigate possible wrongdoing in connection with the Service",
                    "Protect the personal safety of Users of the Service or the public",
                    "Protect against legal liability"
                  ].map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <h5>Security of Your Personal Data</h5>
                <p>The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.</p>

                <h4>Children's Privacy</h4>
                <p>Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.</p>
                <p>If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.</p>

                <h4>Links to Other Websites</h4>
                <p>Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.</p>
                <p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>

                <h4>Changes to this Privacy Policy</h4>
                <p>We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.</p>
                <p>We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the \"Last updated\" date at the top of this Privacy Policy.</p>
                <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>

                <h4>Contact Us</h4>
                <p>If you have any questions about this Privacy Policy, You can contact us:</p>
                <ul>
                  <li>By email: <a href="mailto:zorvixe@gmail.com">zorvixe@gmail.com</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
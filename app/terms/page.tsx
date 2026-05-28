import Link from 'next/link';

export const metadata = {
  title: 'Terms of Use – mySkiin',
  description: 'Terms of Use governing access to and use of the mySkiin app and services.',
};

const toc = [
  '1. Our Services',
  '2. Intellectual Property Rights',
  '3. User Representations',
  '4. User Registration',
  '5. Purchases and Payment',
  '6. Software',
  '7. Prohibited Activities',
  '8. User Generated Contributions',
  '9. Contribution License',
  '10. Mobile Application License',
  '11. Advertisers',
  '12. Services Management',
  '13. Privacy Policy',
  '14. Copyright Infringements',
  '15. Term and Termination',
  '16. Modifications and Interruptions',
  '17. Governing Law',
  '18. Dispute Resolution',
  '19. Corrections',
  '20. Disclaimer',
  '21. Limitations of Liability',
  '22. Indemnification',
  '23. User Data',
  '24. Electronic Communications, Transactions, and Signatures',
  '25. California Users and Residents',
  '26. Miscellaneous',
  '27. Medical / Dermatology Disclaimer',
  '28. AI Chatbot and AI-Powered Features',
  '29. Contact Us',
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-stone-50 to-zinc-100 pt-24 pb-20 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <p className="text-sm text-slate-500 mb-2">Last updated January 20, 2026</p>
          <h1 className="heading-font text-5xl font-light text-slate-900 tracking-tight mb-6">Terms of Use</h1>

          {/* Agreement preamble */}
          <div className="bg-white rounded-2xl border border-slate-200/60 shadow-lg shadow-slate-900/5 p-8 space-y-4 text-slate-600 leading-relaxed text-sm">
            <p className="font-semibold text-slate-900 text-base">AGREEMENT TO OUR LEGAL TERMS</p>
            <p>We are <strong>mySkiin</strong> ("Company," "we," "us," "our"). We operate the mobile application <strong>mySkiin</strong> (the "App"), as well as any other related products and services that refer or link to these legal terms (the "Legal Terms") (collectively, the "Services").</p>
            <p>mySkiin is your all-in-one skincare companion designed to help you understand your skin, build effective routines, and stay consistent without confusion or guesswork.</p>
            <p>You can contact us by email at <a href="mailto:tryskincare.ai@gmail.com" className="text-slate-800 underline underline-offset-2">tryskincare.ai@gmail.com</a>.</p>
            <p>These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you"), and mySkiin, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. <strong>IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.</strong></p>
            <p>We will provide you with prior notice of any scheduled changes to the Services you are using. Changes to these Legal Terms will become effective one (1) day after the notice is given, except if the changes apply to new functionality, security updates, and bug fixes, in which case the changes will be effective immediately. By continuing to use the Services after the effective date of any changes, you agree to be bound by the modified terms.</p>
            <p>The Services are intended for users who are at least 13 years of age. All users who are minors in the jurisdiction in which they reside (generally under the age of 18) must have the permission of, and be directly supervised by, their parent or guardian to use the Services. If you are a minor, you must have your parent or guardian read and agree to these Legal Terms prior to you using the Services.</p>
            <p>We recommend that you print a copy of these Legal Terms for your records.</p>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="bg-white rounded-2xl border border-slate-200/60 shadow-lg shadow-slate-900/5 p-8 mb-8">
          <h2 className="heading-font text-2xl font-semibold text-slate-900 mb-4">Table of Contents</h2>
          <ol className="space-y-1">
            {toc.map((item) => (
              <li key={item} className="text-sm text-slate-600">
                {item}
              </li>
            ))}
          </ol>
        </div>

        {/* Sections */}
        <div className="bg-white rounded-2xl shadow-lg shadow-slate-900/5 border border-slate-200/60 divide-y divide-slate-100">

          {/* 1 */}
          <Section title="1. Our Services">
            <p>The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.</p>
            <p>The Services are not tailored to comply with industry-specific regulations (Health Insurance Portability and Accountability Act (HIPAA), Federal Information Security Management Act (FISMA), etc.), so if your interactions would be subjected to such laws, you may not use the Services. You may not use the Services in a way that would violate the Gramm-Leach-Bliley Act (GLBA).</p>
          </Section>

          {/* 2 */}
          <Section title="2. Intellectual Property Rights">
            <SubHeading>Our intellectual property</SubHeading>
            <p>We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the "Content"), as well as the trademarks, service marks, and logos contained therein (the "Marks").</p>
            <p>Our Content and Marks are protected by copyright and trademark laws (and various other intellectual property rights and unfair competition laws) and treaties in the United States and around the world.</p>
            <p>The Content and Marks are provided in or through the Services "AS IS" for your personal, non-commercial use only.</p>
            <SubHeading>Your use of our Services</SubHeading>
            <p>Subject to your compliance with these Legal Terms, including the "Prohibited Activities" section below, we grant you a non-exclusive, non-transferable, revocable license to: (a) access the Services; and (b) download or print a copy of any portion of the Content to which you have properly gained access, solely for your personal, non-commercial use.</p>
            <p>Except as set out in this section or elsewhere in our Legal Terms, no part of the Services and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.</p>
            <p>If you wish to make any use of the Services, Content, or Marks other than as set out in this section, please address your request to: <a href="mailto:tryskincare.ai@gmail.com" className="text-slate-800 underline underline-offset-2">tryskincare.ai@gmail.com</a>. We reserve all rights not expressly granted to you in and to the Services, Content, and Marks. Any breach of these Intellectual Property Rights will constitute a material breach of our Legal Terms and your right to use our Services will terminate immediately.</p>
            <SubHeading>Your submissions and contributions</SubHeading>
            <p>Submissions: By directly sending us any question, comment, suggestion, idea, feedback, or other information about the Services ("Submissions"), you agree to assign to us all intellectual property rights in such Submission. You agree that we shall own this Submission and be entitled to its unrestricted use and dissemination for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you.</p>
            <p>Contributions: The Services may invite you to chat, contribute to, or participate in blogs, message boards, online forums, and other functionality during which you may create, submit, post, display, transmit, publish, distribute, or broadcast content and materials to us or through the Services ("Contributions"). Any Submission that is publicly posted shall also be treated as a Contribution.</p>
            <p>By posting any Contributions, you grant us an unrestricted, unlimited, irrevocable, perpetual, non-exclusive, transferable, royalty-free, fully-paid, worldwide right and license to use, copy, reproduce, distribute, sell, resell, publish, broadcast, retitle, store, publicly perform, publicly display, reformat, translate, excerpt (in whole or in part), and exploit your Contributions for any purpose. This license includes our use of your name, company name, and franchise name, as applicable, and any of the trademarks, service marks, trade names, logos, and personal and commercial images you provide.</p>
            <p>You are solely responsible for your Submissions and/or Contributions and you expressly agree to reimburse us for any and all losses that we may suffer because of your breach of (a) this section, (b) any third party's intellectual property rights, or (c) applicable law. Although we have no obligation to monitor any Contributions, we shall have the right to remove or edit any Contributions at any time without notice if in our reasonable opinion we consider such Contributions harmful or in breach of these Legal Terms.</p>
          </Section>

          {/* 3 */}
          <Section title="3. User Representations">
            <p>By using the Services, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Legal Terms; (4) you are not under the age of 13; (5) you are not a minor in the jurisdiction in which you reside, or if a minor, you have received parental permission to use the Services; (6) you will not access the Services through automated or non-human means, whether through a bot, script or otherwise; (7) you will not use the Services for any illegal or unauthorized purpose; and (8) your use of the Services will not violate any applicable law or regulation.</p>
            <p>If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Services (or any portion thereof).</p>
          </Section>

          {/* 4 */}
          <Section title="4. User Registration">
            <p>You may be required to register to use the Services. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.</p>
          </Section>

          {/* 5 */}
          <Section title="5. Purchases and Payment">
            <p>We accept the following forms of payment: Visa, Mastercard, American Express, Discover, and PayPal.</p>
            <p>You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Services. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed. Sales tax will be added to the price of purchases as deemed required by us. We may change prices at any time. All payments shall be in Euros.</p>
            <p>You agree to pay all charges at the prices then in effect for your purchases and any applicable shipping fees, and you authorize us to charge your chosen payment provider for any such amounts upon placing your order. We reserve the right to correct any errors or mistakes in pricing, even if we have already requested or received payment.</p>
            <p>We reserve the right to refuse any order placed through the Services. We may, in our sole discretion, limit or cancel quantities purchased per person, per household, or per order. These restrictions may include orders placed by or under the same customer account, the same payment method, and/or orders that use the same billing or shipping address.</p>
          </Section>

          {/* 6 */}
          <Section title="6. Software">
            <p>We may include software for use in connection with our Services. If such software is accompanied by an end user license agreement ("EULA"), the terms of the EULA will govern your use of the software. If such software is not accompanied by a EULA, then we grant to you a non-exclusive, revocable, personal, and non-transferable license to use such software solely in connection with our services and in accordance with these Legal Terms. Any software and any related documentation is provided "AS IS" without warranty of any kind, either express or implied. You accept any and all risk arising out of use or performance of any software. You may not reproduce or redistribute any software except in accordance with the EULA or these Legal Terms.</p>
          </Section>

          {/* 7 */}
          <Section title="7. Prohibited Activities">
            <p>You may not access or use the Services for any purpose other than that for which we make the Services available. As a user of the Services, you agree not to:</p>
            <ul className="list-disc list-outside ml-5 space-y-2 text-slate-600">
              {[
                'Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.',
                'Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.',
                'Circumvent, disable, or otherwise interfere with security-related features of the Services.',
                'Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.',
                'Use any information obtained from the Services in order to harass, abuse, or harm another person.',
                'Make improper use of our support services or submit false reports of abuse or misconduct.',
                'Use the Services in a manner inconsistent with any applicable laws or regulations.',
                'Engage in unauthorized framing of or linking to the Services.',
                'Upload or transmit viruses, Trojan horses, or other material that interferes with any party\'s uninterrupted use and enjoyment of the Services.',
                'Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.',
                'Delete the copyright or other proprietary rights notice from any Content.',
                'Attempt to impersonate another user or person or use the username of another user.',
                'Interfere with, disrupt, or create an undue burden on the Services or the networks or services connected to the Services.',
                'Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Services to you.',
                'Attempt to bypass any measures of the Services designed to prevent or restrict access to the Services, or any portion of the Services.',
                'Copy or adapt the Services\' software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.',
                'Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Services.',
                'Use a buying agent or purchasing agent to make purchases on the Services.',
                'Make any unauthorized use of the Services, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email.',
                'Use the Services as part of any effort to compete with us or otherwise use the Services and/or the Content for any revenue-generating endeavor or commercial enterprise.',
              ].map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Section>

          {/* 8 */}
          <Section title="8. User Generated Contributions">
            <p>The Services may invite you to chat, contribute to, or participate in blogs, message boards, online forums, and other functionality, and may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Services (collectively, "Contributions"). Contributions may be viewable by other users of the Services and through third-party websites. When you create or make available any Contributions, you thereby represent and warrant that:</p>
            <ul className="list-disc list-outside ml-5 space-y-2 text-slate-600">
              {[
                'The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights of any third party.',
                'You are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and to authorize us to use your Contributions.',
                'Your Contributions are not false, inaccurate, or misleading.',
                'Your Contributions are not unsolicited or unauthorized advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation.',
                'Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libelous, slanderous, or otherwise objectionable (as determined by us).',
                'Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.',
                'Your Contributions do not violate any applicable law, regulation, or rule.',
                'Your Contributions do not violate the privacy or publicity rights of any third party.',
                'Your Contributions do not violate any applicable law concerning child pornography, or otherwise intended to protect the health or well-being of minors.',
                'Your Contributions do not include any offensive comments that are connected to race, national origin, gender, sexual preference, or physical handicap.',
              ].map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p>Any use of the Services in violation of the foregoing violates these Legal Terms and may result in, among other things, termination or suspension of your rights to use the Services.</p>
          </Section>

          {/* 9 */}
          <Section title="9. Contribution License">
            <p>By posting your Contributions to any part of the Services, you automatically grant, and you represent and warrant that you have the right to grant, to us an unrestricted, unlimited, irrevocable, perpetual, non-exclusive, transferable, royalty-free, fully-paid, worldwide right and license to host, use, copy, reproduce, disclose, sell, resell, publish, broadcast, retitle, archive, store, cache, publicly perform, publicly display, reformat, translate, transmit, excerpt (in whole or in part), and distribute such Contributions for any purpose, commercial, advertising, or otherwise.</p>
            <p>This license will apply to any form, media, or technology now known or hereafter developed, and includes our use of your name, company name, and franchise name, as applicable, and any of the trademarks, service marks, trade names, logos, and personal and commercial images you provide. You waive all moral rights in your Contributions, and you warrant that moral rights have not otherwise been asserted in your Contributions.</p>
            <p>We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area on the Services. You are solely responsible for your Contributions to the Services.</p>
            <p>We have the right, in our sole and absolute discretion, (1) to edit, redact, or otherwise change any Contributions; (2) to re-categorize any Contributions to place them in more appropriate locations on the Services; and (3) to pre-screen or delete any Contributions at any time and for any reason, without notice. We have no obligation to monitor your Contributions.</p>
          </Section>

          {/* 10 */}
          <Section title="10. Mobile Application License">
            <SubHeading>Use License</SubHeading>
            <p>If you access the Services via the App, then we grant you a revocable, non-exclusive, non-transferable, limited right to install and use the App on wireless electronic devices owned or controlled by you, and to access and use the App on such devices strictly in accordance with these Legal Terms. You shall not: (1) decompile, reverse engineer, disassemble, attempt to derive the source code of, or decrypt the App; (2) make any modification, adaptation, improvement, enhancement, translation, or derivative work from the App; (3) violate any applicable laws, rules, or regulations in connection with your access or use of the App; (4) remove, alter, or obscure any proprietary notice posted by us or the licensors of the App; (5) use the App for any revenue-generating endeavor, commercial enterprise, or other purpose for which it is not designed or intended; (6) make the App available over a network or other environment permitting access or use by multiple devices or users at the same time; (7) use the App for creating a product, service, or software that is, directly or indirectly, competitive with or in any way a substitute for the App; or (8) use the App to send automated queries to any website or to send any unsolicited commercial email.</p>
            <SubHeading>Apple and Android Devices</SubHeading>
            <p>The following terms apply when you use the App obtained from either the Apple Store or Google Play (each an "App Distributor"): (1) the license granted to you for our App is limited to a non-transferable license to use the application on a device that utilizes the Apple iOS or Android operating systems; (2) we are responsible for providing any maintenance and support services with respect to the App, and you acknowledge that each App Distributor has no obligation whatsoever to furnish any maintenance and support services with respect to the App; (3) in the event of any failure of the App to conform to any applicable warranty, you may notify the applicable App Distributor, and the App Distributor may refund the purchase price, if any, paid for the App; (4) you represent and warrant that (i) you are not located in a country that is subject to a US government embargo and (ii) you are not listed on any US government list of prohibited or restricted parties; and (5) you must comply with applicable third-party terms of agreement when using the App.</p>
          </Section>

          {/* 11 */}
          <Section title="11. Advertisers">
            <p>We allow advertisers to display their advertisements and other information in certain areas of the Services, such as sidebar advertisements or banner advertisements. We simply provide the space to place such advertisements, and we have no other relationship with advertisers.</p>
          </Section>

          {/* 12 */}
          <Section title="12. Services Management">
            <p>We reserve the right, but not the obligation, to: (1) monitor the Services for violations of these Legal Terms; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Legal Terms, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Services or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Services in a manner designed to protect our rights and property and to facilitate the proper functioning of the Services.</p>
          </Section>

          {/* 13 */}
          <Section title="13. Privacy Policy">
            <p>We care about data privacy and security. Please review our Privacy Policy at <Link href="/privacy" className="text-slate-800 underline underline-offset-2">myskiin.com/privacy</Link>. By using the Services, you agree to be bound by our Privacy Policy, which is incorporated into these Legal Terms.</p>
            <p>Please be advised the Services are hosted in Ghana. If you access the Services from any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable laws in Ghana, then through your continued use of the Services, you are transferring your data to Ghana, and you expressly consent to have your data transferred to and processed in Ghana.</p>
            <p>Further, we do not knowingly accept, request, or solicit information from children or knowingly market to children. Therefore, in accordance with the U.S. Children's Online Privacy Protection Act, if we receive actual knowledge that anyone under the age of 13 has provided personal information to us without the requisite and verifiable parental consent, we will delete that information from the Services as quickly as is reasonably practical.</p>
          </Section>

          {/* 14 */}
          <Section title="14. Copyright Infringements">
            <p>We respect the intellectual property rights of others. If you believe that any material available on or through the Services infringes upon any copyright you own or control, please immediately notify us using the contact information provided below (a "Notification"). A copy of your Notification will be sent to the person who posted or stored the material addressed in the Notification. Please be advised that pursuant to applicable law you may be held liable for damages if you make material misrepresentations in a Notification. Thus, if you are not sure that material located on or linked to by the Services infringes your copyright, you should consider first contacting an attorney.</p>
          </Section>

          {/* 15 */}
          <Section title="15. Term and Termination">
            <p>These Legal Terms shall remain in full force and effect while you use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SERVICES OR DELETE YOUR ACCOUNT AND ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.</p>
            <p>If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.</p>
          </Section>

          {/* 16 */}
          <Section title="16. Modifications and Interruptions">
            <p>We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Services. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Services.</p>
            <p>We cannot guarantee the Services will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Services, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Services at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Services during any downtime or discontinuance of the Services.</p>
          </Section>

          {/* 17 */}
          <Section title="17. Governing Law">
            <p>These Legal Terms shall be governed by and defined following the laws of the applicable jurisdiction. mySkiin and yourself irrevocably consent that the courts of the applicable jurisdiction shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these Legal Terms.</p>
          </Section>

          {/* 18 */}
          <Section title="18. Dispute Resolution">
            <SubHeading>Informal Negotiations</SubHeading>
            <p>To expedite resolution and control the cost of any dispute, controversy, or claim related to these Legal Terms (each a "Dispute"), the Parties agree to first attempt to negotiate any Dispute informally for at least thirty (30) days before initiating arbitration. Such informal negotiations commence upon written notice from one Party to the other Party.</p>
            <SubHeading>Binding Arbitration</SubHeading>
            <p>Any dispute arising out of or in connection with these Legal Terms, including any question regarding its existence, validity, or termination, shall be referred to and finally resolved by the International Commercial Arbitration Court under the European Arbitration Chamber (Belgium, Brussels, Avenue Louise, 146) according to the Rules of this ICAC. The governing law of these Legal Terms shall be the substantive law of the applicable jurisdiction.</p>
            <SubHeading>Restrictions</SubHeading>
            <p>The Parties agree that any arbitration shall be limited to the Dispute between the Parties individually. To the full extent permitted by law: (a) no arbitration shall be joined with any other proceeding; (b) there is no right or authority for any Dispute to be arbitrated on a class-action basis or to utilize class action procedures; and (c) there is no right or authority for any Dispute to be brought in a purported representative capacity on behalf of the general public or any other persons.</p>
            <SubHeading>Exceptions to Informal Negotiations and Arbitration</SubHeading>
            <p>The Parties agree that the following Disputes are not subject to the above provisions concerning informal negotiations and binding arbitration: (a) any Disputes seeking to enforce or protect, or concerning the validity of, any of the intellectual property rights of a Party; (b) any Dispute related to, or arising from, allegations of theft, piracy, invasion of privacy, or unauthorized use; and (c) any claim for injunctive relief.</p>
          </Section>

          {/* 19 */}
          <Section title="19. Corrections">
            <p>There may be information on the Services that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Services at any time, without prior notice.</p>
          </Section>

          {/* 20 */}
          <Section title="20. Disclaimer">
            <p className="uppercase text-xs leading-relaxed">THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SERVICES' CONTENT OR THE CONTENT OF ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE SERVICES AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SERVICES, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SERVICES, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SERVICES BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SERVICES.</p>
          </Section>

          {/* 21 */}
          <Section title="21. Limitations of Liability">
            <p className="uppercase text-xs leading-relaxed">IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE LESSER OF THE AMOUNT PAID, IF ANY, BY YOU TO US DURING THE ONE (1) MONTH PERIOD PRIOR TO ANY CAUSE OF ACTION ARISING OR $0.00 USD. CERTAIN US STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.</p>
          </Section>

          {/* 22 */}
          <Section title="22. Indemnification">
            <p>You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys' fees and expenses, made by any third party due to or arising out of: (1) your Contributions; (2) use of the Services; (3) breach of these Legal Terms; (4) any breach of your representations and warranties set forth in these Legal Terms; (5) your violation of the rights of a third party, including but not limited to intellectual property rights; or (6) any overt harmful act toward any other user of the Services with whom you connected via the Services.</p>
          </Section>

          {/* 23 */}
          <Section title="23. User Data">
            <p>We will maintain certain data that you transmit to the Services for the purpose of managing the performance of the Services, as well as data relating to your use of the Services. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Services. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.</p>
          </Section>

          {/* 24 */}
          <Section title="24. Electronic Communications, Transactions, and Signatures">
            <p>Visiting the Services, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Services, satisfy any legal requirement that such communication be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SERVICES.</p>
          </Section>

          {/* 25 */}
          <Section title="25. California Users and Residents">
            <p>If any complaint with us is not satisfactorily resolved, you can contact the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs in writing at 1625 North Market Blvd., Suite N 112, Sacramento, California 95834 or by telephone at (800) 952-5210 or (916) 445-1254.</p>
          </Section>

          {/* 26 */}
          <Section title="26. Miscellaneous">
            <p>These Legal Terms and any policies or operating rules posted by us on the Services or in respect to the Services constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Legal Terms shall not operate as a waiver of such right or provision. These Legal Terms operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision or part of a provision of these Legal Terms is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Legal Terms and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Legal Terms or use of the Services.</p>
          </Section>

          {/* 27 */}
          <Section title="27. Medical / Dermatology Disclaimer">
            <div className="bg-amber-50 border border-amber-200/60 rounded-xl p-5 space-y-2">
              <p className="font-semibold text-amber-900">Please read this section carefully:</p>
              <ul className="list-disc list-outside ml-5 space-y-1.5 text-amber-800 text-sm">
                <li>The app provides skincare information, routines, and product suggestions for informational and educational purposes only.</li>
                <li>The content is NOT medical advice and is NOT provided by a dermatologist or licensed healthcare professional.</li>
                <li>The app does not diagnose, treat, cure, or prevent any medical or skin condition.</li>
                <li>Always consult a qualified dermatologist or healthcare provider before starting new skincare products or routines.</li>
              </ul>
            </div>
          </Section>

          {/* 28 — NEW AI CHATBOT SECTION */}
          <Section title="28. AI Chatbot and AI-Powered Features">
            <p>mySkiin includes an AI-powered chatbot feature (the "AI Assistant") designed to help you with skincare questions, routine suggestions, and product guidance. By using the AI Assistant, you acknowledge and agree to the following:</p>
            <SubHeading>Nature of AI Responses</SubHeading>
            <p>The AI Assistant generates responses based on machine learning models and skincare-related information. Responses are automated and not reviewed by a human before delivery. We do not guarantee the accuracy, completeness, or suitability of any AI-generated content for your specific situation. AI-generated responses may occasionally be inaccurate, outdated, or inapplicable to your particular skin type or condition.</p>
            <SubHeading>Not Medical Advice</SubHeading>
            <p>The AI Assistant does not provide medical or dermatological advice. Any information provided by the AI Assistant is for general informational and educational purposes only and should not be relied upon as a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified dermatologist or licensed healthcare provider before making any changes to your skincare regimen, particularly if you have a diagnosed skin condition, allergy, or are taking prescription medications.</p>
            <SubHeading>Data Processing</SubHeading>
            <p>Your conversations with the AI Assistant may be processed, stored, and reviewed by us or our third-party AI service providers for the purposes of delivering the service, improving the AI system, ensuring safety, and complying with applicable laws. Please do not share sensitive personal information, financial information, or detailed medical history in your conversations with the AI Assistant.</p>
            <SubHeading>Third-Party AI Providers</SubHeading>
            <p>The AI Assistant may be powered in whole or in part by third-party artificial intelligence services. Your use of the AI Assistant may therefore be subject to the terms, conditions, and privacy policies of such third-party providers in addition to these Legal Terms. We are not responsible for the practices of any third-party AI providers.</p>
            <SubHeading>No Guarantee of Availability</SubHeading>
            <p>The AI Assistant feature is provided "as is" and may be modified, suspended, or discontinued at any time without notice. We make no warranty that the AI Assistant will be available, uninterrupted, or error-free.</p>
            <SubHeading>Prohibited Use of AI Features</SubHeading>
            <p>You agree not to use the AI Assistant to: (a) generate harmful, misleading, defamatory, or illegal content; (b) attempt to manipulate, abuse, or exploit the AI system through adversarial prompting, jailbreaking, or similar techniques; (c) extract proprietary model information or system instructions; or (d) use AI-generated output for any commercial purpose without our express written consent.</p>
          </Section>

          {/* 29 */}
          <Section title="29. Contact Us">
            <p>In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:</p>
            <div className="mt-4 bg-slate-50 rounded-xl p-5 text-slate-700">
              <p className="font-semibold text-slate-900 mb-1">mySkiin</p>
              <p>
                <a href="mailto:tryskincare.ai@gmail.com" className="text-slate-800 underline underline-offset-2">
                  tryskincare.ai@gmail.com
                </a>
              </p>
            </div>
          </Section>

        </div>
      </div>
    </div>
  );
}

// ─── Helper components ───────────────────────────────────────────────────────

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="p-8 space-y-4">
      <h2 className="heading-font text-2xl font-semibold text-slate-900">{title}</h2>
      <div className="space-y-3 text-slate-600 leading-relaxed text-sm">
        {children}
      </div>
    </div>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return <p className="font-semibold text-slate-800 mt-4 mb-1">{children}</p>;
}

import React from 'react';
import NavigationBar from './navigationBar';
import Layout from './layout';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .layout {
    background-color: red;
  }

  .container{
      margin-top: 30px;
      border-radius: 15px;
  }

  
`;

function PrivacyPolicy() {
    return (
        <Styles>
            <React.Fragment>
                <NavigationBar />
                <Container className="container">
                    <Layout className="layout">
                        <h1>SemiProGames Privacy Policy & Terms of Service</h1>
                        <h2>Last updated: August 5, 2020</h2>
                        <p>SemiProGames.com and its affiliates (collectively “SemiProGames”) provide a marketplace for “Micro-tournaments” which are tournaments comprising games of skill where players compete against players. No fans or betting is permitted. Void where prohibited by law. You must be 18 or older to join and play. The winners of all matches will be verified and judged at the sole discretion of SPG. Refunds of any kind will be issued at the sole discretion of SPG. By agreeing to these terms of service, players agree not to take any legal action whatsoever against SPG, and that SPG is not to be held liable for any damage or liabilities associated with any activities related to or provided by SPG.

We know that you care how information about you is used and shared, and we appreciate your trust that we will do so carefully and sensibly. This Privacy Notice describes how SPG collects and processes your personal information through SemiProGames websites, devices, products, services, online and physical stores, and applications that reference this Privacy Notice (together “SemiProGames Services”). By using SemiProGames Services, you are consenting to the practices described in this Privacy Notice.</p>
                        <p>We know that you care how information about you is used and shared, and we appreciate your trust that we will do so carefully and sensibly. This Privacy Notice describes how SPG collects and processes your personal information through SemiProGames websites, devices, products, services, online and physical stores, and applications that reference this Privacy Notice (together “SemiProGames Services”). By using SemiProGames Services, you are consenting to the practices described in this Privacy Notice.

                        What are the types of personal information we collect?

                        Information You Give Us: We receive and store any information you provide in relation to SemiProGames Services. You can choose not to provide certain information, but then you might not be able to take advantage of many of our SemiProGames features.

                        Automatic Information: We automatically collect and store certain types of information about your use of SemiProGames Services, including information about your interaction with content and services available through SemiProGames Services. Like many websites, we use "cookies" and other unique identifiers, and we obtain certain types of information when your web browser or device accesses SemiProGames Services and other content served by or on behalf of SemiProGames on other websites.

                        For What Purposes Does SemiProGames Use Your Personal Information?

                        We use your personal information to operate, provide, develop, and improve the products and services that we offer our players. These purposes include:

                        Purchase and delivery of products and services. We use your personal information to take and handle orders, deliver products and services, process payments, and communicate with you about orders, products and services, and promotional offers.

                        Provide, troubleshoot, and improve SemiProGames Services. We use your personal information to provide functionality, analyze performance, fix errors, and improve the usability and effectiveness of the SemiProGames Services.

                        Recommendations and personalization. We use your personal information to recommend features, products, and services that might be of interest to you, identify your preferences, and personalize your experience with SemiProGames Services.

                        Provide voice, image and camera services. When you use our voice, image and camera services, we use your voice input, images, videos, and other personal information to respond to your requests, provide the requested service to you, and improve our services.

                        Comply with legal obligations. In certain cases, we collect and use your personal information to comply with laws.

                        Communicate with you. We use your personal information to communicate with you in relation to SemiProGames Services via different channels (e.g., by phone, e-mail, chat).

                        Advertising. We use your personal information to display interest-based ads for features, products, and services that might be of interest to you. We do not use information that personally identifies you to display

                        Fraud Prevention and Credit Risks. We use personal information to prevent and detect fraud and abuse in order to protect the security of our players, SemiProGames, and others. We may also use scoring methods to assess and manage credit risks.

                        What About Cookies and Other Identifiers?

                        To enable our systems to recognize your browser or device and to provide and improve SemiProGames Services, we use cookies and other identifiers.

                        Does SemiProGames Share Your Personal Information?

                        Information about our players is an important part of our business, and we are not in the business of selling our players’ personal information to others. We share players’ personal information only as described below and with subsidiaries of SemiProGames.com that either are subject to this Privacy Notice or follow practices at least as protective as those described in this Privacy Notice.

                        Transactions involving Third Parties: We make available to you services, products, applications, or skills provided by third parties for use on or through SemiProGames Services. For example, you can order products from third parties through our stores, download applications from third-party application providers. We also offer services or sell product lines jointly with third-party businesses co-branded. You can tell when a third party is involved in your transactions, and we share players’ personal information related to those transactions with that third party.

                        Third-Party Service Providers: We employ other companies and individuals to perform functions on our behalf. Examples include fulfilling orders for products or services, delivering packages, sending postal mail and e-mail, removing repetitive information from player lists, analyzing data, providing marketing assistance, providing search results and links (including paid listings and links), processing payments, transmitting content, scoring, assessing and managing credit risk, and providing player service. These third-party service providers have access to personal information needed to perform their functions, but may not use it for other purposes.

Business Transfers: As we continue to develop our business, we might sell or buy other businesses or services. In such transactions, player information generally is one of the transferred business assets but remains subject to the promises made in any pre-existing Privacy Notice (unless, of course, the player consents otherwise). Also, in the unlikely event that SemiProGames.com, Inc. or substantially all of its assets are acquired, player information will of course be one of the transferred assets.</p>
                    </Layout>
                </Container>
            </React.Fragment>
        </Styles>
    )
};

export default PrivacyPolicy;
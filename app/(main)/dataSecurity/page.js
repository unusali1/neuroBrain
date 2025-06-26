import React from 'react'

const DataSecurity = () => {
  return (
    <div className="sm:mt-16 mt-8 px-6 sm:px-28 mb-16">
        <h2 className="text-4xl font-bold text-cyan-400 mb-12">
            Data Security
        </h2>

        <p className="text-gray-700 mb-6 text-justify">
            At Congent AI, we take the security of your data seriously. Your trust in our services is important to us, which is why we implement robust measures to ensure that your personal data remains safe and secure.
        </p>

        <h3 className="text-2xl font-semibold text-cyan-600 mb-4">
            1. Secure Communication Channels
        </h3>
        <p className="text-gray-700 mb-6 text-justify">
            All interactions with our chatbot and voice assistant are secured using HTTPS (SSL/TLS), ensuring that your communications with our services are encrypted and cannot be intercepted by unauthorized third parties.
        </p>

        <h3 className="text-2xl font-semibold text-cyan-600 mb-4">
            2. Data Anonymization and Pseudonymization
        </h3>
        <p className="text-gray-700 mb-6 text-justify">
            We utilize anonymization techniques to ensure that any personal data shared during conversations is stripped of identifiable information. In cases where anonymization is not possible, we apply pseudonymization to keep personal information separate from other data.
        </p>

        <h3 className="text-2xl font-semibold text-cyan-600 mb-4">
            3. Multi-Layer Authentication
        </h3>
        <p className="text-gray-700 mb-6 text-justify">
            For accounts with sensitive information, we enforce multi-layer authentication procedures, including two-factor authentication (2FA). This provides an additional layer of security to ensure that unauthorized individuals cannot access your account.
        </p>

        <h3 className="text-2xl font-semibold text-cyan-600 mb-4">
            4. User Data Segmentation
        </h3>
        <p className="text-gray-700 mb-6 text-justify">
            To further enhance security, we segment user data into different levels of access. Sensitive data is stored in a separate, more secure database with additional access control measures, reducing the potential for unauthorized access.
        </p>

        <h3 className="text-2xl font-semibold text-cyan-600 mb-4">
            5. Real-Time Monitoring and Alerts
        </h3>
        <p className="text-gray-700 mb-6 text-justify">
            Our infrastructure is constantly monitored for any suspicious activity. We employ real-time threat detection systems to identify and block potential threats before they can affect your data.
        </p>

        <h3 className="text-2xl font-semibold text-cyan-600 mb-4">
            6. Secure API Integration
        </h3>
        <p className="text-gray-700 mb-6 text-justify">
            We ensure that all third-party integrations, such as APIs used for payment processing or external services, are secured using encryption and authentication mechanisms. This minimizes the risks associated with external service providers accessing user data.
        </p>

        <h3 className="text-2xl font-semibold text-cyan-600 mb-4">
            7. Compliance with Industry Standards
        </h3>
        <p className="text-gray-700 mb-6 text-justify">
            We follow industry standards and comply with various regulatory frameworks, such as GDPR (General Data Protection Regulation) and CCPA (California Consumer Privacy Act). We also ensure that we are in alignment with other regional data protection laws.
        </p>

        <h3 className="text-2xl font-semibold text-cyan-600 mb-4">
            8. Automatic Data Purging and Deletion
        </h3>
        <p className="text-gray-700 mb-6 text-justify">
            We implement automatic data purging protocols, which ensure that user data is deleted or anonymized after a set period of inactivity. This minimizes the risk of holding outdated or unnecessary data and further protects user privacy.
        </p>

        <h3 className="text-2xl font-semibold text-cyan-600 mb-4">
            9. Access Control and Role-Based Permissions
        </h3>
        <p className="text-gray-700 mb-6 text-justify">
            Access to sensitive data is strictly controlled. Only authorized personnel with specific roles are granted access to user data. We use role-based access controls (RBAC) to ensure that employees or system administrators can only access the data necessary for their job function.
        </p>

        <h3 className="text-2xl font-semibold text-cyan-600 mb-4">
            10. User Consent and Transparency
        </h3>
        <p className="text-gray-700 mb-6 text-justify">
            We provide clear and concise information about the data we collect, how it is used, and the security measures we implement. We ensure that user consent is obtained prior to collecting or processing any personal data, and users are given the option to revoke their consent at any time.
        </p>

        <h3 className="text-2xl font-semibold text-cyan-600 mb-4">
            11. Third-Party Service Providers
        </h3>
        <p className="text-gray-700 mb-6 text-justify">
            Any third-party service providers that we collaborate with are carefully vetted for their security practices. We ensure that they meet the same high standards of data protection as Congent AI, and that they comply with privacy laws to safeguard your data.
        </p>

        <h3 className="text-2xl font-semibold text-cyan-600 mb-4">
            12. Data Breach Response Plan
        </h3>
        <p className="text-gray-700 mb-6 text-justify">
            In the event of a data breach, we have a well-defined response plan to quickly mitigate the damage. This includes notifying affected users, taking corrective action, and working with legal authorities to handle the situation appropriately.
        </p>

        <h3 className="text-2xl font-semibold text-cyan-600 mb-4">
            13. User Education on Security Best Practices
        </h3>
        <p className="text-gray-700 mb-6 text-justify">
            We believe that user education is key to overall data security. We provide resources and guidance on how you can protect your personal information, such as setting strong passwords and recognizing phishing attempts.
        </p>

        <h3 className="text-2xl font-semibold text-cyan-600 mb-4">
            14. Contact Information
        </h3>
        <p className="text-gray-700 mb-6 text-justify">
            If you have any questions about our data security practices or need assistance with your privacy settings, feel free to reach out to us. You can contact our support team at <a href="mailto:hi.neurobrains@gmail.com" className="text-cyan-600">hi.neurobrains@gmail.com</a> for further assistance.
        </p>
    </div>
  )
}

export default DataSecurity

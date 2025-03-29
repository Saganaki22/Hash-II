# Hash-II

<div align="center">
  <img src="public/android-chrome-192x192.png" alt="Hash-II Logo" width="120" />
  <h3>A modern, secure Base64 & AES-256 encoder/decoder</h3>
  <p>Educating users about encryption while providing practical cryptographic tools</p>
</div>

<div align="center">
  <a href="https://github.com/Saganaki22/Hash-II/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/Saganaki22/Hash-II" alt="License" />
  </a>
  <img src="https://img.shields.io/badge/Next.js-14-black" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-5-blue" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind-3-38bdf8" alt="Tailwind" />
  <img src="https://img.shields.io/badge/Web%20Crypto%20API-Native-green" alt="Web Crypto API" />
</div>

## 📋 Table of Contents

- [About Hash-II](#-about-hash-ii)
- [Why Encryption Matters](#-why-encryption-matters)
- [Features](#-features)
- [Technologies](#-technologies)
- [Security Implementation](#-security-implementation)
- [Installation](#-installation)
- [Usage Guide](#-usage-guide)
- [Educational Resources](#-educational-resources)
- [Contributing](#-contributing)
- [Roadmap](#-roadmap)
- [Frequently Asked Questions](#-frequently-asked-questions)
- [License](#-license)
- [Contact & Support](#-contact--support)
- [Acknowledgements](#-acknowledgements)

## 🔐 About Hash-II

Hash-II is a modern, educational web application designed to demonstrate the principles of secure data encoding and encryption. I created this tool to help people understand the importance of encryption in our digital world and to provide a practical, hands-on way to learn about cryptographic concepts.

Unlike many online tools that simply perform encoding/encryption without explanation, Hash-II includes comprehensive educational content about the underlying technologies, making it both a practical tool and a learning resource.

The project aims to bridge the gap between theoretical cryptography knowledge and practical application, making these essential security concepts accessible to everyone from students to professionals.

## 🌍 Why Encryption Matters

In today's digital landscape, encryption is not just a technical feature—it's a fundamental necessity:

- **Privacy Protection**: Encryption safeguards your personal communications, financial data, and sensitive information from unauthorized access
- **Data Security**: It ensures that even if data is intercepted, it remains unreadable without the proper decryption keys
- **Digital Rights**: Encryption supports freedom of speech and protects journalists, activists, and ordinary citizens
- **Regulatory Compliance**: Many industries require encryption to comply with regulations like GDPR, HIPAA, and PCI DSS
- **Trust Foundation**: It forms the backbone of trust for online transactions, communications, and data storage

Hash-II was created to educate users about these critical aspects of digital security while providing practical tools to implement them.

## ✨ Features

- **Base64 Encoding/Decoding**:
  - Convert text to and from Base64 format
  - Support for UTF-8 character encoding
  - Real-time processing with character and byte count statistics

- **AES-256 Encryption/Decryption**:
  - Military-grade encryption using the Advanced Encryption Standard
  - Galois/Counter Mode (GCM) for authenticated encryption
  - Secure initialization vector (IV) generation for each encryption

- **Advanced Security Features**:
  - **PBKDF2 Key Derivation**: Implements 100,000 iterations for enhanced security against brute-force attacks
  - **Custom Salt Support**: Add an extra layer of security with user-defined or randomly generated salts
  - **Secure Random Generation**: Cryptographically secure random values for all security parameters

- **User Experience**:
  - **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
  - **Dark Mode**: Easy on the eyes for late-night security work
  - **Copy/Paste Functionality**: Quick copy buttons for all fields
  - **Real-time Processing**: See results as you type with debounced processing
  - **Input/Output Statistics**: Character and byte count for both input and output

- **Educational Content**:
  - Comprehensive explanations of Base64, AES-256, PBKDF2, and salting
  - Visual representations of security strength
  - Practical examples and use cases
  - Security best practices and recommendations

- **Privacy-Focused**:
  - **Client-Side Processing**: All operations happen in your browser
  - **No Data Transmission**: Your data never leaves your device
  - **No Analytics**: No tracking or usage monitoring

## 🛠️ Technologies

Hash-II leverages a modern technology stack to provide a secure, responsive, and educational experience:

### Frontend Framework
- **Next.js 14**: React framework with App Router for optimized rendering and routing
- **React 18**: Component-based UI library with hooks for state management
- **TypeScript 5**: Strongly-typed JavaScript for improved developer experience and code quality

### Styling and UI
- **Tailwind CSS 3**: Utility-first CSS framework for rapid UI development
- **shadcn/ui**: High-quality UI components built with Radix UI and Tailwind
- **Lucide Icons**: Consistent and accessible icon set

### Cryptography
- **Web Crypto API**: Native browser cryptography for secure operations
  - **AES-GCM**: Advanced Encryption Standard with Galois/Counter Mode
  - **PBKDF2**: Password-Based Key Derivation Function (SHA-256)
  - **Secure Random**: Cryptographically secure random number generation

### Performance Optimization
- **Next.js App Router**: For optimized page loading and navigation
- **React Server Components**: For improved initial page load performance
- **Debounced Processing**: To prevent excessive computation during user input

### Development Tools
- **ESLint**: JavaScript and TypeScript linting
- **Prettier**: Code formatting
- **PostCSS**: CSS processing for Tailwind

## 🔒 Security Implementation

Hash-II implements several security best practices to ensure the highest level of protection:

### AES-256 Implementation
- **Key Size**: 256-bit keys for maximum security
- **Mode of Operation**: Galois/Counter Mode (GCM) providing both confidentiality and authenticity
- **Initialization Vector**: Unique 12-byte IV generated for each encryption operation
- **Authentication**: GCM provides built-in authentication to detect tampering

### Key Derivation
- **Algorithm**: PBKDF2 (Password-Based Key Derivation Function 2)
- **Iterations**: 100,000 rounds to increase computational cost for attackers
- **Hash Function**: SHA-256 for the underlying pseudorandom function
- **Salt Usage**: Unique salts (user-provided or randomly generated) to prevent rainbow table attacks

### Client-Side Security
- **No Server Transmission**: All cryptographic operations occur entirely in the browser
- **No Key Storage**: Keys are derived on-demand and never stored
- **Memory Management**: Sensitive data is not unnecessarily persisted

### Data Format
- **Structured Storage**: Encrypted data is stored in a structured format including:
  - Initialization Vector (IV)
  - Encrypted data
  - Algorithm information
  - Salt usage flag (without storing the actual salt)

### Security Limitations
- **Browser Security**: Relies on the security of the user's browser and device
- **Password Strength**: Ultimate security depends on the strength of user-provided passwords
- **Memory Exposure**: Data exists in browser memory during processing

## 💻 Installation

### Prerequisites
- Node.js 18.17 or later
- npm or yarn package manager

### Local Development

```bash
# Clone the repository
git clone https://github.com/Saganaki22/Hash-II.git

# Navigate to the project directory
cd Hash-II

# Install dependencies
npm install
# or
yarn install

# Start the development server
npm run dev
# or
yarn dev
```

### Production Deployment

```bash
# Build the application
npm run build
# or
yarn build

# Start the production server
npm start
# or
yarn start
```

### Docker Deployment

```bash
# Build the Docker image
docker build -t hash-ii .

# Run the container
docker run -p 3000:3000 hash-ii
```

## 📖 Usage Guide

### Base64 Encoding/Decoding

1. **Encoding Text to Base64**:
   - Navigate to the Base64 section
   - Enter your text in the input field
   - The encoded Base64 output will appear automatically
   - Use the copy button to copy the encoded result

2. **Decoding Base64 to Text**:
   - Navigate to the Base64 section
   - Toggle to "Decode" mode
   - Paste your Base64 string in the input field
   - The decoded text will appear automatically
   - Use the copy button to copy the decoded result

### AES-256 Encryption/Decryption

1. **Encrypting Data**:
   - Navigate to the AES-256 section
   - Enter the text you want to encrypt
   - Provide a strong password
   - (Optional) Add a custom salt or use the auto-generated one
   - The encrypted output will appear in the result field
   - Save both the encrypted data and your password securely

2. **Decrypting Data**:
   - Navigate to the AES-256 section
   - Toggle to "Decrypt" mode
   - Paste the encrypted data in the input field
   - Enter the original password used for encryption
   - If a custom salt was used, provide the same salt
   - The decrypted output will appear in the result field

### Security Best Practices

- **Use Strong Passwords**: Aim for at least 12 characters with a mix of letters, numbers, and symbols
- **Secure Your Passwords**: Store your encryption passwords in a password manager
- **Share Securely**: When sharing encrypted data, never send the password through the same channel
- **Custom Salts**: For enhanced security, use custom salts and keep them separate from your encrypted data
- **Data Backups**: Always have backups of important data before encryption
- **Secret Splitting**: For critical secrets, consider splitting them across different encrypted files

## 📚 Educational Resources

Hash-II includes comprehensive educational content to help users understand the cryptographic concepts behind the tools:

### Interactive Tutorials

- **Cryptography Basics**: Introduction to key cryptographic concepts
- **How Base64 Works**: Visual explanation of the Base64 encoding process
- **AES-256 Deep Dive**: Step-by-step breakdown of the AES encryption algorithm
- **Password Security**: Guidelines for creating and managing strong passwords

### Security Learning Modules

- **Threat Models**: Understanding different security threats and appropriate protections
- **Key Derivation**: How PBKDF2 turns passwords into cryptographic keys
- **Initialization Vectors**: Why IVs are critical for secure encryption
- **Authentication in GCM**: How Galois/Counter Mode provides data authenticity

### External Resources

- [NIST Cryptographic Standards](https://www.nist.gov/cryptography)
- [Mozilla Developer Network - Web Crypto API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API)
- [Stanford University Cryptography Course](https://crypto.stanford.edu/~dabo/courses/OnlineCrypto/)
- [Electronic Frontier Foundation - Encryption Basics](https://ssd.eff.org/en/module/deep-dive-end-end-encryption)

## 🤝 Contributing

Contributions to Hash-II are welcome and appreciated! Here's how you can contribute:

### Contribution Process

1. **Fork the Repository**:
   - Create your own fork of the project

2. **Create a Feature Branch**:
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make Your Changes**:
   - Implement your feature or bug fix
   - Add or update tests as necessary
   - Update documentation to reflect your changes

4. **Run Tests**:
   ```bash
   npm run test
   ```

5. **Lint Your Code**:
   ```bash
   npm run lint
   ```

6. **Commit Your Changes**:
   ```bash
   git commit -m 'Add some amazing feature'
   ```

7. **Push to Your Branch**:
   ```bash
   git push origin feature/amazing-feature
   ```

8. **Open a Pull Request**:
   - Submit a PR against the main branch
   - Describe your changes in detail
   - Reference any related issues

### Contribution Guidelines

- **Code Style**: Follow the project's coding style (enforced by ESLint and Prettier)
- **Commit Messages**: Use clear, descriptive commit messages
- **Documentation**: Update documentation for any changed functionality
- **Testing**: Add tests for new features and ensure all tests pass
- **Issue First**: For major changes, open an issue first to discuss your approach

### Development Setup

```bash
# Install development dependencies
npm install --include=dev

# Run tests
npm test

# Run linting
npm run lint

# Format code
npm run format
```

## 🚀 Roadmap

Our vision for Hash-II includes several planned enhancements and new features:

### Short-term Goals (Next 3 Months)

- **File Encryption**: Support for encrypting and decrypting files directly in the browser
- **Password Strength Meter**: Interactive feedback on password security
- **Extended Character Set Support**: Improved handling of international characters
- **Accessibility Improvements**: Enhanced keyboard navigation and screen reader support
- **Progressive Web App**: Offline functionality and potentially installable application

### Mid-term Goals (6-12 Months)

- **Additional Encryption Algorithms**: Support for ChaCha20-Poly1305 and RSA
- **Public Key Cryptography Tutorial**: Educational content on asymmetric encryption
- **Key Management Tool**: Generate and manage cryptographic keys
- **Secure Notes Feature**: Encrypted notepad with auto-save functionality
- **Command-Line Interface**: CLI version for developers and power users

### Long-term Vision

- **Browser Extension**: Direct integration with browsers for quick encryption/decryption
- **Secure Sharing Protocol**: Method for securely sharing encrypted content
- **Hardware Security Module Integration**: Support for hardware security keys

### Community Input

We welcome suggestions for new features! Please submit your ideas through:
- GitHub Issues
- Discussions board
- Direct contact with the maintainers

## ❓ Frequently Asked Questions

### General Questions

**Q: Is Hash-II completely free to use?**  
A: Yes, Hash-II is completely free and open-source under the Apache 2.0 license.

**Q: Do I need an internet connection to use Hash-II?**  
A: After initial loading, Hash-II can function offline as all processing happens in your browser.

**Q: Is my data sent to any server when I use Hash-II?**  
A: No, all operations occur entirely in your browser. Your data never leaves your device.

### Technical Questions

**Q: How secure is AES-256 encryption?**  
A: AES-256 is considered highly secure and is used by governments and organizations worldwide for protecting classified information. With proper implementation (as in Hash-II), it's resistant to known attacks.

**Q: What happens if I forget my encryption password?**  
A: There is no way to recover encrypted data if you forget the password. This is a fundamental security feature of strong encryption—not even the creator of Hash-II can recover your data.

**Q: Why use Base64 encoding?**  
A: Base64 encoding converts binary data to text format, making it easier to transmit in text-based systems (like email or JSON) that might not handle binary data well. It's not encryption and doesn't provide security.

**Q: What's the difference between encoding and encryption?**  
A: Encoding (like Base64) is a reversible transformation to change data format without any security intent. Encryption specifically aims to secure data by making it unreadable without the correct key.

### Troubleshooting

**Q: Why am I getting strange characters when decoding Base64?**  
A: This typically happens when trying to decode an invalid Base64 string or when the original data contained binary content. Ensure you're using the correct encoding/decoding mode.

**Q: Why won't my encrypted text decrypt properly?**  
A: Decryption failures usually indicate one of these issues:
- Incorrect password
- Different salt used than during encryption
- Modified/corrupted ciphertext
- Incorrect copy/paste of the encrypted content

**Q: The app seems slow with large amounts of text. Why?**  
A: Cryptographic operations, especially key derivation with 100,000 iterations, are intentionally computationally intensive to resist attacks. For very large data, consider breaking it into smaller chunks.

## 📄 License

Hash-II is released under the Apache License 2.0. See the [LICENSE](LICENSE) file for details.

```
                                 Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   Copyright (c) 2024 Saganaki22

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
```

## 📞 Contact & Support

### Getting Help

- **GitHub Issues**: For bug reports and feature requests
- **GitHub Discussions**: For questions and community discussions
- **Documentation**: Check the [Wiki](https://github.com/Saganaki22/Hash-II/wiki) for detailed guidance

### Contact Information

- **Developer**: Saganaki22
- **Email**: [contact@hash-ii.dev](mailto:contact@hash-ii.dev)
- **Twitter**: [@Hash_II_App](https://twitter.com/Hash_II_App)

### Support the Project

If you find Hash-II valuable, consider supporting its development:

- **Star** the repository on GitHub
- **Share** the tool with others who might benefit
- **Contribute** code, documentation, or translations
- **Sponsor** the project through GitHub Sponsors
- **Report** bugs and suggest improvements

### Projects & Libraries

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - UI component collection
- [Web Crypto API](https://www.w3.org/TR/WebCryptoAPI/) - Browser cryptography standard

### Resources & Inspirations

- [Mozilla Developer Network](https://developer.mozilla.org/) - Web technology documentation
- [NIST Cryptographic Standards](https://www.nist.gov/cryptography) - Security guidelines
- [Electronic Frontier Foundation](https://www.eff.org/) - Digital rights advocacy
- [Stanford University Cryptography Course](https://crypto.stanford.edu/~dabo/courses/OnlineCrypto/) - Educational materials

### Community & Contributors

Thanks to all the contributors who have helped improve Hash-II through code, feedback, testing, and suggestions. Special thanks to:

- Early adopters and testers
- The cybersecurity education community
- Open-source cryptography experts who provided guidance
- Everyone who reported bugs or suggested improvements

---

<div align="center">
  <p>Made with ❤️ for a more secure and private digital world</p>
  <p>
    <a href="https://github.com/Saganaki22/Hash-II">GitHub</a> •
    <a href="https://hash-ii.vercel.app">Live Demo</a> •
    <a href="https://github.com/Saganaki22/Hash-II/issues">Report Bug</a> •
    <a href="https://github.com/Saganaki22/Hash-II/discussions">Discussions</a>
  </p>
</div>

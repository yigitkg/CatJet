# CatJet: A Next.js Cat Image Viewer

![CatJet Banner](https://raw.githubusercontent.com/yigitkg/CatJet/main/CatJetDisplayImage.png?token=GHSAT0AAAAAACGDIZBVNZF2NROZIFNUGJCKZG3YZWA)

CatJet is a beautifully crafted web application powered by Next.js. Aimed at providing cat enthusiasts with a dose of feline beauty whenever they need it, the app fetches and displays random cat images on demand.

## 🚀 Features

- **Effortless Cat Viewing**: With just a click, indulge in a visual treat of random cat images.
- **Modular Design**: Uses a custom hook (`useCatImage`) for fetching and managing cat images.
- **Modern Styling**: Integrated with Tailwind CSS, the app boasts a modern and responsive design.
- **State-of-the-Art State Management**: Uses Recoil for managing application state, offering a predictable and consistent experience.
- **Strongly Typed**: The application is built using TypeScript, guaranteeing type safety and ease of debugging.

## 🔧 Setup & Installation

### Prerequisites

- Node.js (v14 or newer)
- npm (v6 or newer)

### Installation Steps

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yigitkg/CatJet.git
   ```

2. **Environment Setup**:

   Copy the example environment file and make the necessary configurations:
   Copy code
   cp .env.local.example .env.local

   Then, edit .env.local and add your API Key:

   ```bash
   NEW_CAT_API_KEY = [Your API Key]
   ```

   Launch the Development Server

   ```bash
   npm i
   npm run dev
   ```

   Now, open your browser and navigate to http://localhost:3000 to see CatJet in action!

## 📘 Documentation

    Copy the example environment file and make the necessary configurations:
    Copy code
    cp .env.local.example .env.local

## 🙌 Contributing

    Fork the repository.
    Make your changes.
    Submit a pull request with a detailed description of the changes.
    For significant modifications, it's always a good idea to open an issue first to discuss potential enhancements.

## 📜 License

    CatJet is open-source software licensed under the MIT License.

## 📞 Contact & Support

    Should you have any inquiries, issues, or suggestions, feel free to open an issue, or reach out to us directly at yigitkg@gmail.com.

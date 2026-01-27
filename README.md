# Reviews Slider

A modern, responsive React slider component built with TypeScript and Vite, showcasing customer reviews with smooth transitions and navigation controls.

## Features

- **Smooth Transitions**: Automatic sliding every 5 seconds with manual navigation.
- **Responsive Design**: Works seamlessly across different screen sizes.
- **TypeScript Support**: Fully typed for better development experience.
- **Customizable**: Easy to integrate and style according to your needs.
- **DRY Principles**: Code follows Don't Repeat Yourself principles for maintainability.

## Technologies Used

- **React 19**: Latest version for building the user interface.
- **TypeScript**: For type safety and better code quality.
- **Vite**: Fast build tool and development server.
- **React Icons**: For navigation buttons and quote icon.
- **ESLint**: For code linting and consistency.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/HamedSadim1/slider.git
   cd slider
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in the terminal).

## Usage

The slider displays a series of customer reviews. It automatically transitions between slides every 5 seconds. Users can also manually navigate using the previous and next buttons.

### Key Components

- **App.tsx**: Main component managing state and rendering the slider.
- **ReviewCard.tsx**: Individual review card component for better modularity.
- **Data**: Review data stored in `src/data/index.ts`.
- **Types**: TypeScript interfaces in `src/types/index.ts`.

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the project for production.
- `npm run preview`: Preview the production build locally.
- `npm run lint`: Run ESLint for code quality checks.

## Project Structure

```bash
slider/
├── public/
│   ├── sidebar.png
├── src/
│   ├── components/
│   │   └── ReviewCard.tsx
│   ├── data/
│   │   └── index.ts
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Hamed Sadim - [GitHub](https://github.com/HamedSadim1)

---

Built with ❤️ using React and TypeScript.

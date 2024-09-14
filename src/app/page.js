"use client";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {/* Header */}
      <header className="w-full py-4 shadow-md text-center bg-primary text-primary-content">
        <h1 className="text-4xl font-bold">Welcome to the Theme Switcher</h1>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-grow px-4">
        <p className="text-lg mb-4">
          This is a simple homepage to test the light and dark themes.
        </p>

        {/* Theme Switcher Button */}
        <ThemeSwitcher />

        {/* Example Content */}
        <div className="mt-8 p-6 shadow-lg rounded-lg bg-base-200 text-base-content">
          <h2 className="text-2xl font-semibold">Themed Section</h2>
          <p className="mt-2">
            This section changes appearance based on the selected theme.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-4 text-center bg-base-300 text-base-content">
        <p>&copy; 2024 Theme Switcher App</p>
      </footer>
    </div>
  );
};

export default HomePage;

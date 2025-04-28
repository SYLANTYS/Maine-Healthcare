import LeftSidebar from "@/components/LeftSidebar";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <LeftSidebar />

      {/* Main + Footer */}
      <div className="flex flex-col flex-1">
        {/* Main content */}
        <main className="flex-1 p-8 bg-white">
          <h1 className="text-3xl font-bold mb-6 text-black">
            Maine Healthcare
          </h1>
          <p className="mb-4 text-black">
            Welcome to the project page! Use the navigation to explore our
            research.
          </p>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

import Sidebar from "../components/SideBar/SideBar";
import Navbar from "../components/NavBar/NavBar";

export default function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Navbar />

        <div className="flex-1 bg-gray-50 p-6">
          {children}
        </div>
      </div>
    </div>
  );
}

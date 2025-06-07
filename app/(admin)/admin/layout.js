import Header from "../../../components/Header";
import Sidebar from "./components/Sidebar";
import AdminWrapper from "./components/AdminWrapper"; // create this below

export default function AdminLayout({ children }) {
  return ( 
    <AdminWrapper>
      <Header isAdminPage={true} />
      <div className="flex h-full w-56 flex-col top-20 fixed inset-y-0 z-50">
        <Sidebar />
      </div>
      <main className="md:pl-56 pt-[80px] h-full">{children}</main>
    </AdminWrapper>
  );
}

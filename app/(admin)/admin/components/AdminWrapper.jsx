import { getAdmin } from "../../../../actions/admin";
import { notFound } from "next/navigation";

export default async function AdminWrapper({ children }) {
  const admin = await getAdmin();
  console.log("ADMIN CHECK:", admin);

  if (!admin?.authorized) {
    notFound();  
  }

  return <>{children}</>;
}

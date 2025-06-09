import "../../../components/style.css";
import { ContactUsForm } from "../../../components/ContactUs";
import ReelCard from "../../../components/ReelCard";
import ApplyNow from "../../../components/ApplyNow";
import { Metadata } from "next";



export const metadata: Metadata = {
  title: 'Contact Inframe School | Admissions, Queries & Support | Get in Touch',
  description: 'Contact Inframe School for admissions, inquiries, or support. Our team is here to assist you with all your questions and provide the information you need.',
};




export default function page() {
  return (
    <>
      <div>
        <ContactUsForm />
        <ReelCard />
        <section>
          <div className="bg bg1  "></div>

          <ApplyNow />
        </section>
      </div>
    </>
  );
}

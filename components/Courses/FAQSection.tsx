import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { ChevronDown } from "lucide-react";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-yellow-400/20">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-4 text-left"
      >
        <span className="text-lg hover:text-yellow-400 transition-colors">
          {title}
        </span>
        <ChevronDown
          className={`w-5 h-5 transition-transform duration-200 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? "max-h-96 mb-4" : "max-h-0"
        }`}
      >
        <div className="text-black pt-2 pb-4">{children}</div>
      </div>
    </div>
  );
};

const FAQSection = () => (
  <Card className="bg-zinc-100 text-black border-none my-12">
    <CardHeader>
      <CardTitle className="text-3xl text-yellow-400">
        Frequently Asked Questions
      </CardTitle>
    </CardHeader>
    <CardContent className="text-black">
      <div className="space-y-4 text-black">
        <AccordionItem title="What undergraduate programs does Inframe offer?">
          <p>Inframe offers a variety of undergraduate programs, including:</p>
          <ul>
            <li>
              <strong>Art:</strong> Bachelor of Fine Arts (B.FA) in Painting,
              Applied Arts, Visual Communication, Sculpture.
            </li>
            <li>
              <strong>Design:</strong> Bachelor of Design (B.Des) with
              specializations in Fashion Design, Interior Design, Graphic
              Design, UI/UX Design, Animation, and VFX.
            </li>
            <li>
              <strong>Business:</strong> Bachelor of Business Administration
              (BBA) and related programs such as Entrepreneurship Skills, Media,
              and Advertisement.
            </li>
          </ul>
        </AccordionItem>
        <AccordionItem title="What are the eligibility criteria for the Degree programs?">
          <p>
            To be eligible for the Degree program at Inframe, candidates must:
          </p>
          <ul>
            <li>• Have completed Class 12 with any stream.</li>
            <li>
              • Secure a minimum aggregate score of 45% (40% for candidates from
              reserved categories).
            </li>
          </ul>
        </AccordionItem>
        <AccordionItem title="What are the eligibility criteria for the diploma and professional programs?">
          <p>
            To be eligible for the diploma and professional programs at Inframe,
            candidates must:
          </p>
          <ul>
            <li>• Have completed Class 10</li>
            <li>
              • Secure a minimum aggregate score of 45% (40% for candidates from
              reserved categories)
            </li>
          </ul>
        </AccordionItem>
        <AccordionItem title="How can I apply for admission to Inframe?">
          <p>The admission process at Inframe involves the following steps:</p>
          <ul>
            <li>
              1.<strong> Fill in the application form: </strong> Complete the
              online application form available on the Inframe website.
            </li>
            <li>
              2.<strong> Pay registration fees: </strong> Submit the required
              registration fee for the selected program.
            </li>
            <li>
              3.<strong> Confirm your seat:</strong> Secure provisional
              admission to confirm your seat.
            </li>
            <li>
              4.<strong> Submit documents: </strong>Provide necessary documents
              as per the program requirements.
            </li>
            <li>
              5.<strong> Select and pay for the hostel:</strong> If opting for
              on-campus accommodation, select and pay for the hostel.
            </li>
            <li>
              6.<strong> Pay academic fees:</strong> Complete the payment of
              academic fees to finalize the admission process.
            </li>
          </ul>
        </AccordionItem>

        <AccordionItem title="Does Inframe offer scholarships?">
          Yes, Inframe offers various scholarships based on academic
          performance, entrance exam scores, and other criteria. Details about
          available scholarships and the application process can be found on the
          brochure or Inframe website.
        </AccordionItem>
        <AccordionItem title="What is the placement record of Inframe?">
          Inframe provides 100% placement assurance in writing to students.
        </AccordionItem>
        <AccordionItem title="Which companies are involved in the placement process?">
          Inframe has tied up with several prominent brands across cities like
          Jodhpur, Delhi, Bangalore, Mumbai, Pune, etc., for student placements.
        </AccordionItem>
        <AccordionItem title="Does Inframe offer online programs?">
          Yes, Inframe offers online programs through its Centre for Distance
          and Online Education. These programs are designed to provide flexible
          learning options for working professionals and students who prefer
          distance learning.
        </AccordionItem>
        <AccordionItem title="What is the campus infrastructure like?">
          <p>Inframe`s campus boasts modern facilities, including:</p>
          <ul>
            <li>• Laboratories and workshops</li>
            <li>• Sports complexes and recreational areas</li>
            <li>• Dream Hostels with comfortable accommodations</li>
            <li>• Cafeterias offering a variety of cuisines</li>
          </ul>
        </AccordionItem>
        <AccordionItem title="How do I prepare for exams?">
          Inframe provides sample papers for the DAT exams to help students
          prepare effectively.
        </AccordionItem>
        <AccordionItem title="Can I work while attending college?">
          Yes, many students work part-time while attending college. Colleges
          often offer on-campus jobs that are flexible with your schedule.
        </AccordionItem>
        <AccordionItem title="What is a typical college schedule like?">
          College schedules are flexible and may vary. Students usually have a
          mix of lectures, seminars, labs, and study time. Classes are typically
          1-2 hours long.
        </AccordionItem>
        <AccordionItem title="Inframe is affiliated with which institutions?">
          Inframe is affiliated with Career Point Institute of Skill Development
          (Kota), Glocal University (Saharanpur, Uttar Pradesh), and Sikkim
          Skill University.
        </AccordionItem>
        <AccordionItem title="Who owns Inframe?">
          Inframe is run by the Inframe Educational Society, which is registered
          under the Rajasthan Society Act.
        </AccordionItem>
        <AccordionItem title="Does Inframe have branches?">
          No, Inframe does not have any branches. It operates exclusively from
          Jodhpur.
        </AccordionItem>
        <AccordionItem title="What is the lowest and highest package offered by Inframe?">
          The lowest package offered by Inframe is 3 lakhs per annum, and the
          highest package is 12 lakhs per annum.
        </AccordionItem>
        <AccordionItem title="Does Inframe have global university tie-ups?">
          Yes, Inframe has tie-ups with global universities.
        </AccordionItem>
        <AccordionItem title="How many seats are available in one course at Inframe?">
          Seat availability varies depending on the course. For degree programs,
          the minimum batch size is 15 students. For diploma and professional
          courses, the batch size ranges from 5 to 10 students.
        </AccordionItem>
        <AccordionItem title="Does Inframe provide internships?">
          Yes, Inframe provides 100% internships with companies.
        </AccordionItem>
        <AccordionItem title="Does Inframe have hostel facilities?">
          Yes, Inframe owns the Dream Hostel, which has a capacity of 50
          students, located just 200 meters from the campus. Additionally,
          Inframe has partnered with nearby hostels for additional
          accommodation.
        </AccordionItem>
        <AccordionItem title="What extracurricular clubs and activities are available for students at Inframe?">
          Inframe offers various clubs and activities, including cultural clubs,
          sports teams, photography clubs, and more, allowing students to
          explore their interests outside of academics.
        </AccordionItem>
        <AccordionItem title="What are the career opportunities after completing a degree at Inframe?">
          Graduates of Inframe can pursue careers in various sectors such as
          art, design, business administration, fashion, interior design, and
          more. Inframe also offers placement support to help students secure
          jobs in their chosen fields.
        </AccordionItem>
        <AccordionItem title="How can I get more information about the programs offered by Inframe?">
          You can visit the Inframe website or contact their admissions team for
          detailed information about the programs, specializations, and other
          course-related queries.
        </AccordionItem>
        <AccordionItem title="Is there any entrance exam required for admission?">
          Inframe may require candidates to take an entrance exam for some of
          its programs, especially for degree and professional courses. Please
          check the specific program details on the website for more
          information.
        </AccordionItem>
        <AccordionItem title="Can I change my program after admission?">
          Inframe allows students to change programs under certain
          circumstances, but it is subject to availability and academic
          requirements. It’s best to discuss with an academic advisor for
          guidance.
        </AccordionItem>
        <AccordionItem title="How are the faculty and teaching quality at Inframe?">
          Inframe boasts a team of qualified and experienced faculty who are
          dedicated to providing quality education and helping students succeed
          in their respective fields.
        </AccordionItem>
        <AccordionItem title="How is the campus safety at Inframe?">
          Inframe covered with cameras security in classrooms. For girls safety
          we have majority of female teaching and admin staff.
        </AccordionItem>
        <AccordionItem title="Can I pursue a part-time course while studying at Inframe?">
          Inframe offers flexible learning options, including online and
          distance learning programs, which may allow students to pursue
          part-time courses alongside their regular degree programs.
        </AccordionItem>
        <AccordionItem title="What types of extracurricular activities are available at Inframe?">
          Inframe offers a range of extracurricular activities, including
          sports, cultural events, and clubs, allowing students to develop their
          skills beyond academics
        </AccordionItem>
        <AccordionItem title="What makes Inframe different from other educational institutions?">
          Inframe offers personalized learning, industry connections, a variety
          of internships, and a flexible course structure, all backed by its
          strategic affiliations with leading universities and companies.
        </AccordionItem>
        <AccordionItem title="Does Inframe provide career counseling and guidance?">
          Yes, Inframe offers career counseling and guidance services to help
          students choose the right career path and prepare for job placements.
        </AccordionItem>

        <AccordionItem title="Are there any networking opportunities with professionals and alumni?">
          Yes, Inframe encourages networking through events, seminars, and
          interactions with alumni and industry professionals, helping students
          build valuable connections for their future careers.
        </AccordionItem>
      </div>
    </CardContent>
  </Card>
);

export default FAQSection;

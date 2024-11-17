import { poppins } from "../../fonts";
import Winter24ReviewsLayout from "@/components/winter-layout";
import reviewData from "./review-info.json"
import WinterReviewCard from "@/components/review-card";

export default function Winter24Reviews() {

  return (
    <Winter24ReviewsLayout>
      <main style={poppins.style} className="bg-gradient-to-b  text-[#6868FF] from-[#B3E8FF] to-[#D9D9D9] flex min-h-screen flex-col p-24 mt-24">
        <div>
          <h2 className="font-bold text-3xl">ENGR 102</h2>
          <h1 className="font-bold text-6xl">Final Exam Review</h1>
          <p className="font-light text-lg">We&apos;ll be holding review sessions from
          November 16th to November 25th.</p>
        </div>

        <section className="mt-10">
          <h2 className="font-bold text-4xl mb-2">Schedule</h2>

          {reviewData.map(date => (
            <div key={date.date} className="mb-8">
              <h3 className="text-3xl my-2 font-light">{date.date}</h3>
              <div className="flex flex-wrap justify-start gap-x-10 gap-y-2">
                {date.events.map((event, index) => <WinterReviewCard key={index} review={event} />)}
              </div>
            </div>
          ))}
        </section>
      </main>
    </Winter24ReviewsLayout>
  );
}

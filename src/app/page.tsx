import { IntroSection } from "./intro-section";
import { TimelineSection } from "./timeline-section";

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      <IntroSection />
      <TimelineSection />
    </main>
  );
}

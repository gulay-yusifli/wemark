import { getXSchoolData } from "@/lib/api";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import About from "@/components/About";
import Founder from "@/components/Founder";
import Programs from "@/components/Programs";
import Marquee from "@/components/Marquee";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import { cleanHtml } from "@/lib/html";

export const revalidate = 3600;

export default async function Page() {
  const data = await getXSchoolData();

  return (
    <>
      <Header />
      <main>
        <Banner title={data.banner_title} image={data.banner_image} />
        <About title={data.about_title} description={data.about_description} images={data.about_images} />
        <Founder founders={data.founders} />
        <Programs programs={data.programs} />
        <Marquee items={Object.entries(data.text_slider).sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true })).map(([, v]) => v)} />
        <Faq title={data.faq_title} items={data.xschool_faq.map((f) => ({ ...f, answer: cleanHtml(f.answer) }))} />
      </main>
      <Footer />
    </>
  );
}

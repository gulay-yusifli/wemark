export interface XSchoolData {
  banner_title: string;
  banner_image: string;
  about_title: string;
  about_description: string;
  about_images: { image: string }[];
  founders: Founder[];
  programs: { title: string; description: string }[];
  faq_title: string;
  xschool_faq: { question: string; answer: string }[];
  text_slider: Record<string, string>;
}

export interface Founder {
  title: string;
  description: string;
  name: string;
  position: string;
  image: string;
  linkedin_url?: string;
  instagram_url?: string;
}

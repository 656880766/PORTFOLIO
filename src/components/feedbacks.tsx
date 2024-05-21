import { motion } from "framer-motion";

import { TESTIMONIALS } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { cn } from "../utils/lib";
import { fadeIn, textVariant } from "../utils/motion";

type FeedbackCardProps = {
  index: number;
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
};

// Feedback Card
const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}: FeedbackCardProps) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >

    <div className="mt-1">
      {/* Testimonial */}
      <p className="text-white tracking-wider text-[18px]">
      <img
          src={testimonial}
          alt={`feedback-by-${testimonial}`}
          className="w-100 h-100 m-auto  object-cover"
        />
        </p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col ">
          {/* Name */}
          <p className="text-white font-medium text-[16px] text-center">
            <a href={designation}><span className="blue-text-gradient font-bold">{name}</span> </a>
            
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

// Feedbacks
export const Feedbacks = () => {
  return (
    <SectionWrapper>
      <div className="mt-12 bg-black-100 rounded-[20px]">
        <div
          className={cn(
            styles.padding,
            "bg-tertiary rounded-2xl min-h-[300px]"
          )}
        >
          {/* Title */}
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}></p>
            <h2 className={styles.sectionHeadText}>Certifications.</h2>
          </motion.div>
        </div>

        {/* Feedback Card */}
        <div
          className={cn(styles.paddingX, "-mt-20 pb-14 flex flex-wrap gap-7")}
        >
          {TESTIMONIALS.map((testimonial, i) => (
            <FeedbackCard key={testimonial.name} index={i} {...testimonial} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

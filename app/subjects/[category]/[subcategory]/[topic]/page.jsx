import TopicPageClient from "./TopicPageClient";
import { subjectsData } from "@/app/subjects/data";
import { basicMathematicsContent } from "@/app/subjects/content/basic-mathematics";
import { algebraContent } from "@/app/subjects/content/algebra";
import { geometryContent } from "@/app/subjects/content/geometry";
import { trigonometryContent } from "@/app/subjects/content/trigonometry";
import { calculusContent } from "@/app/subjects/content/calculus";
import { statisticsProbabilityContent } from "@/app/subjects/content/statistics-and-probability";
import { generalScienceContent } from "@/app/subjects/content/general-science";
import { physicsContent } from "@/app/subjects/content/physics";
import { biologyContent } from "@/app/subjects/content/biology";
import { chemistryContent } from "@/app/subjects/content/chemistry";
import { evsContent } from "@/app/subjects/content/environmental-science";
import { programmingContent } from "@/app/subjects/content/programming-for-beginners";
import { msOfficeContent } from "@/app/subjects/content/microsoft-office";
import { basicComputerContent } from "@/app/subjects/content/basic-computer-skills";
import { economicsContent } from "@/app/subjects/content/economics";
import { politicalScienceContent } from "@/app/subjects/content/political-science";
import { geographyContent } from "@/app/subjects/content/geography";
import { historyContent } from "@/app/subjects/content/history";
import { hindiContent } from "@/app/subjects/content/hindi";
import { englishContent } from "@/app/subjects/content/english";
import { arabicContent } from "@/app/subjects/content/arabic";
import { frenchContent } from "@/app/subjects/content/french";
import { spanishContent } from "@/app/subjects/content/spanish";
import { germanContent } from "@/app/subjects/content/german";
import { timeManagementStudySkillsContent} from "@/app/subjects/content/time-management-and-study-skills";
import { personalityDevelopmentContent } from "@/app/subjects/content/personality-development";
import { publicSpeakingContent } from "@/app/subjects/content/public-speaking";
import { neetJeeCoachingContent } from "@/app/subjects/content/neet-jee-coaching";
import { sscBankCoachingContent } from "@/app/subjects/content/ssc-bank-government-exams";
import { greGmatCoachingContent } from "@/app/subjects/content/gre-gmat";
import { satActCoachingContent } from "@/app/subjects/content/sat-act";
import { entrepreneurshipContent } from "@/app/subjects/content/entrepreneurship";
import { marketingContent } from "@/app/subjects/content/marketing-commerce";
import { financeContent } from "@/app/subjects/content/finance-commerce";
import { businessStudiesContent } from "@/app/subjects/content/business-studies";
import { economicsBusinessContent } from "@/app/subjects/content/economics-business";
import { accountingContent } from "@/app/subjects/content/accounting";
import { computerScienceContent  } from "@/app/subjects/content/computer-science-data-structures";
import { chemistryAdvanceContent  } from "@/app/subjects/content/advanced-chemistry";
import { physicsAdvanceContent } from "@/app/subjects/content/advanced-physics";
import { advancedStatisticsContent } from "@/app/subjects/content/advanced-statistics";
import { differentialEquationsContent } from "@/app/subjects/content/differential-equations";
import { linearAlgebraContent } from "@/app/subjects/content/linear-algebra";

const topicContentMap = {
    "economics-business":economicsBusinessContent,
    "business-studies":businessStudiesContent,
    "finance-commerce":financeContent,
    "ssc-bank-government-exams":sscBankCoachingContent,
    "gre-gmat":greGmatCoachingContent,
    "sat-act":satActCoachingContent,
    "entrepreneurship":entrepreneurshipContent,
    "marketing-commerce":marketingContent,
    "time-management-and-study-skills":timeManagementStudySkillsContent,
    "personality-development":personalityDevelopmentContent,
    "public-speaking":publicSpeakingContent,
    "neet-jee-coaching":neetJeeCoachingContent,
    "linear-algebra": linearAlgebraContent,
    "differential-equations":differentialEquationsContent,
    "advanced-statistics":advancedStatisticsContent,
    "advanced-physics":physicsAdvanceContent ,
    "computer-science-data-structures": computerScienceContent,
    "advanced-chemistry":chemistryAdvanceContent,
    "accounting":accountingContent,
    "basic-mathematics": basicMathematicsContent,
    "microsoft-office": msOfficeContent,
    "basic-computer-skills": basicComputerContent,
    "economics": economicsContent,
    "political-science": politicalScienceContent,
    "geography": geographyContent,
    "history": historyContent,
    "hindi": hindiContent,
    "english": englishContent,
    "arabic": arabicContent,
    "french": frenchContent,
    "spanish": spanishContent,
    "german": germanContent,
    "algebra": algebraContent,
    "geometry": geometryContent,
    "trigonometry": trigonometryContent,
    "calculus": calculusContent,
    "chemistry": chemistryContent,
    "biology": biologyContent,
    "environmental-science":evsContent,
    "physics": physicsContent,
    "general-science": generalScienceContent,
    "statistics-and-probability": statisticsProbabilityContent,
    "programming-for-beginners": programmingContent,
    
};

export async function generateMetadata({ params }) {
  const { topic } = await params;

  const content = topicContentMap[topic];

  return {
    title: content?.metaTitle || "Tutor4Study",
    description: content?.metaDesc || "Learning website",
  };
}

export default async function Page({ params }) {
  return <TopicPageClient params={params} />;
}
import {
  GithubFilled,
  LinkedinFilled,
  TwitterCircleFilled,
} from "@ant-design/icons";

const GITHUB_URL = "https://github.com/dubeyanant";
const LINKEDIN_URL = "https://www.linkedin.com/in/anantdubey/";
const TWITTER_URL = "https://twitter.com/_aanant";
const BOOKPICK_REPO_URL = "https://github.com/dubeyanant/BookPick";

const footerContent = {
  about: {
    title: "BookPick",
    description:
      "Discover your next favorite read with our curated list of the top 50 books. Or if you are looking for personalized recommendations? Input your preferences, and let our algorithm suggest books tailored just for you. Happy reading!",
  },
  madeBy: "Made with ❤️ by Anant Dubey",
  contribute: "Contribute here",
  contributeTo: "BookPick repo",
  contact: "Contact me",
};

const Footer = () => {
  return (
    <div className="bg-gray-100 mt-auto">
      <div className="flex flex-col lg:flex-row justify-between container mx-auto px-10 sm:px-16 py-3">
        <div className="max-w-xs flex flex-col mb-6 lg:mb-0">
          <h1 className="font-semibold text-2xl">
            {footerContent.about.title}
          </h1>
          <p className="italic font-normal mt-1">
            {footerContent.about.description}
          </p>
        </div>
        <p className="flex justify-center flex-col lg:ml-10 mb-2 lg:mb-0">
          {footerContent.madeBy}
        </p>
        <div className="flex flex-col justify-center lg:mr-10">
          <h1 className="text-xl">{footerContent.contribute}</h1>
          <a href={BOOKPICK_REPO_URL} className="mr-3">
            <p className="font-light">{footerContent.contributeTo}</p>
          </a>
          <h1 className="text-xl mt-4">{footerContent.contact}</h1>
          <div className="flex gap-2 lg:justify-between">
            <a href={GITHUB_URL}>
              <GithubFilled style={{ fontSize: "24px" }} />
            </a>
            <a href={LINKEDIN_URL}>
              <LinkedinFilled style={{ fontSize: "24px" }} />
            </a>
            <a href={TWITTER_URL}>
              <TwitterCircleFilled style={{ fontSize: "24px" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

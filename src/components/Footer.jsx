import {
  GithubFilled,
  LinkedinFilled,
  TwitterCircleFilled,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <div className="bg-gray-100 mt-auto">
      <div className="flex flex-col lg:flex-row justify-between container mx-auto px-10 py-3">
        <div className="max-w-xs flex flex-col mb-6 lg:mb-0">
          <h1 className="font-semibold text-2xl">BookPick</h1>
          <p className="italic font-normal mt-1">
            "Discover your next favorite read with our curated list of the top
            50 books. Or if you are looking for personalized recommendations?
            Input your preferences, and let our algorithm suggest books tailored
            just for you. Happy reading!"
          </p>
        </div>
        <p className="flex justify-center flex-col lg:ml-10 mb-2 lg:mb-0">
          Made with ❤️ by Anant Dubey
        </p>
        <div className="flex flex-col justify-center lg:mr-10">
          <h1 className="text-xl">Contribute here</h1>
          <a href="https://github.com/dubeyanant/BookPick" className="mr-3">
            <p className="font-light">BookPick repo</p>
          </a>
          <h1 className="text-xl mt-4">Contact me</h1>
          <div className="flex gap-2 lg:justify-between">
            <a href="https://github.com/dubeyanant">
              <GithubFilled style={{ fontSize: "24px" }} />
            </a>
            <a href="https://www.linkedin.com/in/anantdubey/">
              <LinkedinFilled style={{ fontSize: "24px" }} />
            </a>
            <a href="https://twitter.com/_aanant">
              <TwitterCircleFilled style={{ fontSize: "24px" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

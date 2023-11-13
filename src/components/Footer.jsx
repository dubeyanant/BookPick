import { GithubFilled, TwitterCircleFilled } from "@ant-design/icons";

const Footer = () => {
  return (
    <div className="flex justify-between">
      <p>Made with ❤️ by Anant Dubey</p>
      <div>
        <a href="https://github.com/dubeyanant/BookPick" className="mr-3">
          <GithubFilled style={{ fontSize: "24px" }} />
        </a>
        <a href="https://twitter.com/_aanant">
          <TwitterCircleFilled style={{ fontSize: "24px" }} />
        </a>
      </div>
    </div>
  );
};

export default Footer;

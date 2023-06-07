import invertocatLogo from '../../assets/github-invertocat-logo.svg';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full h-full flex justify-end py-2 bg-gray-700">
      <a
        href="https://github.com/ben-smith-dev/github-user-search"
        rel="noreferrer noopener"
        target="_blank"
        title="Opens this web apps GitHub Repository in a new tab."
      >
        <img
          className="max-w-full max-h-full object-contain"
          src={invertocatLogo}
          alt="GitHub invertocat logo."
        />
      </a>
    </footer>
  );
};

const Footer = () => {
  return (
    <footer className="bottom-0 left-0 w-full bg-[#091930] hover:text-[#5ceac9] text-center py-4">
      <div className="container mx-auto px-4">
        <p className="text-sm">
          Designed & Built by <span className="font-semibold text-[#5ceac9]">Ravi Sharma</span>{' '}
        </p>
        <p className="text-sm">© {new Date().getFullYear()} RS Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

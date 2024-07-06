import logo from "../images/logo.png";
const Header = () => {
  const navigation = [
    { title: "Services", link: "#services" },
    { title: "Works", link: "#works" },
    { title: "Resume", link: "#resume" },
    { title: "Skills", link: "#skills" },
    { title: "Testimonials", link: "#testimonials" },
    { title: "Contact", link: "#contact" },
  ];

  return (
    <div className="max-w-screen-xl mx-auto py-8">
      <header className="h-20 flex w-full items-center justify-between gap-x-10">
        <div className="h-full flex items-center gap-8">
          <img src={logo} alt="logo" className="w-14 h-14" />
          <p className="text-red hover:text-purpleDark duration-200">
            youremail@gmail.com
          </p>
        </div>
        <div className="h-full flex flex-1 items-center justify-end">
          <ul className="flex items-center gap-x-8">
            {navigation.map((item) => (
              <li
                key={item.title}
                className="text-base font-medium hover:text-purpleDark cursor-pointer duration-300 relative overflow-hidden group"
              >
                {item.title}
                <span className="w-full h-[1px] bg-purpleDark inline-block absolute bottom-0 left-0 -translate-x-[100%] group-hover:translate-x-0 duration-300" />
              </li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;

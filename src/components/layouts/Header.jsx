import logo from "../../assets/logo.png";
import hair from "../../assets/hairmahine.png";

const CONTAINER = "mx-auto flex max-w-[1280px] items-center justify-between px-4 lg:px-8";

const topLinks = ["About us", "Blog", "Contact us", "Help & support"];

const socials = [
  { label: "Instagram", icon: "fa-brands fa-square-instagram" },
  { label: "Facebook", icon: "fa-brands fa-facebook-f" },
  { label: "Telegram", icon: "fa-brands fa-telegram" },
];

const dropdowns = ["USD", "English"];

const userActions = [
  { label: "Sign in", icon: "fa-regular fa-user" },
  { label: "Favorites", icon: "fa-regular fa-heart" },
  { label: "Card", icon: "fa-solid fa-bag-shopping", badge: 3 },
];

const categories = [
  "Woman",
  "Male",
  "Mother-Child",
  "Home & Furniture",
  "Super market",
  "Cosmetics",
  "Shoe & Bag",
  "Electronic",
  "Sport & Outdoor",
  "Best seller",
];

const Header = ({ activeCategory = "Woman" }) => {
  return (
    <header className="w-full">
      {/* ===== TOP BAR ===== */}
      <div className="bg-white">
        <div className={`${CONTAINER} gap-6 py-6`}>
          {/* Logo */}
          <a href="/" className="flex shrink-0 items-center gap-1">
            <img src={logo} alt="Luminae logo" className="h-12 w-auto" />
            <span className="text-[32px] font-semibold leading-none text-[#111]">
              Luminae
            </span>
          </a>

          {/* Search */}
          <form
            className="hidden h-[34px] w-full max-w-[400px] items-center rounded border border-gray-300 bg-white md:flex"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Search Products"
              className="h-full min-w-0 flex-1 bg-transparent px-3 text-sm text-gray-700 placeholder-gray-400 outline-none"
            />
            <button
              type="button"
              className="flex h-full items-center gap-2 px-3 text-sm text-gray-700"
            >
              All categories
              <i className="fa-solid fa-chevron-down text-[10px]" />
            </button>
            <button
              type="submit"
              aria-label="Search"
              className="flex h-full w-10 items-center justify-center border-l border-gray-200 text-gray-800"
            >
              <i className="fa-solid fa-magnifying-glass" />
            </button>
          </form>

          {/* Links */}
          <nav className="hidden items-center gap-8 text-sm text-gray-600 xl:flex">
            {topLinks.map((text) => (
              <a key={text} href="#" className="hover:text-black">
                {text}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="hidden items-center gap-4 text-xl text-gray-400 lg:flex">
            {socials.map(({ label, icon }) => (
              <a key={label} href="#" aria-label={label} className="hover:text-gray-600">
                <i className={icon} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/*DARK BAR*/}
      <div className="bg-[#262626] text-white">
        <div className={`${CONTAINER} h-[60px]`}>
          {/* Left */}
          <div className="flex items-center gap-6 lg:gap-8">
            <button className="flex items-center gap-2 text-lg font-medium">
              <i className="fa-solid fa-list-ul" />
              Categories
            </button>
            {dropdowns.map((text) => (
              <button key={text} className="hidden items-center gap-1 text-sm sm:flex">
                {text}
                <i className="fa-solid fa-chevron-down text-[9px]" />
              </button>
            ))}
          </div>

          <div className="hidden items-center gap-4 self-stretch border-x border-white/20 px-10 lg:flex">
            <img src={hair} alt="Men's grooming set" className="h-12 w-12 object-contain" />
            <div className="leading-tight">
              <p className="text-sm font-semibold">Weekly Men's Toiletries Coupons.</p>
              <p className="mt-1 text-sm text-gray-300">
                We extend exclusive discounts to our male clientele
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-6 text-sm lg:gap-8">
            {userActions.map(({ label, icon, badge }) => (
              <a key={label} href="#" className="flex items-center gap-2">
                <i className={`${icon} text-lg`} />
                <span className="hidden sm:inline">{label}</span>
                {badge && (
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2ecc71] text-xs font-semibold">
                    {badge}
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* CATEGORY NAV  */}
      <nav className="bg-white">
        <ul className="mx-auto flex max-w-[1280px] items-center justify-between gap-6 overflow-x-auto px-4 py-6 text-[15px] text-gray-700 lg:px-8 [&>li]:whitespace-nowrap">
          {categories.map((text) => (
            <li key={text}>
              <a
                href="#"
                className={
                  text === activeCategory
                    ? "font-medium text-orange-500"
                    : "hover:text-black"
                }
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
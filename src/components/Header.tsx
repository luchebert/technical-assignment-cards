import { Logo } from "./Logo";

export const Header = () => {
  return (
    <div className="flex items-center justify-between py-4 border-b border-gray-300">
      <Logo />
      <h1 className="text-3xl font-bold text-gray-900">Retreats and Venues</h1>
    </div>
  );
};

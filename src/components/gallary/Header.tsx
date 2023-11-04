const Header = () => {
  return (
    <div className="flex flex-row items-center justify-between h-20 px-6 border-b-2">
      <div className="flex flex-row items-center gap-4">
        <input
          type="checkbox"
          name="checkSelectd"
          id="none"
          className="w-6 h-6 "
        />
        <p className="text-base font-bold">{`${3} files selected`}</p>
      </div>
      <div>
        <p className="text-base text-red-600"> Delete File</p>
      </div>
    </div>
  );
};

export default Header;

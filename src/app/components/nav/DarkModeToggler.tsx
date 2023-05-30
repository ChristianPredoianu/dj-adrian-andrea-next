import useDarkMode from '@/app/hooks/useDarkMode';

export default function DarkModeToggler() {
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  const handleToggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className='flex flex-col items-center gap-2 sm:flex-row'>
      <span className='mr-2 text-xs text-slate-200'>Dark Mode</span>
      <input
        type='checkbox'
        id='darkModeToggle'
        className='hidden'
        checked={isDarkMode}
        onChange={handleToggleDarkMode}
      />
      <label
        htmlFor='darkModeToggle'
        className='flex cursor-pointer select-none items-center'
      >
        <div className='flex flex-col items-center'>
          <div className='h-6 w-12 rounded-full bg-slate-300'>
            <div
              className={`h-6 w-6 rounded-full transition-transform duration-300 ${
                isDarkMode ? 'translate-x-6 transform   bg-red-800' : 'bg-white'
              }`}
            ></div>
          </div>
        </div>
      </label>
    </div>
  );
}

import useDarkMode from '@/app/hooks/useDarkMode';

export default function DarkModeToggler() {
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  const handleToggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className='items-center  flex '>
      <input
        type='checkbox'
        id='darkModeToggle'
        className='hidden'
        checked={isDarkMode}
        onChange={handleToggleDarkMode}
      />
      <label
        htmlFor='darkModeToggle'
        className='items-center flex cursor-pointer select-none'
      >
        <div className='items-center flex flex-col'>
          <div className='h-6 w-12 rounded-full bg-gray-300'>
            <div
              className={`h-6 w-6 rounded-full transition-transform duration-300 ${
                isDarkMode ? 'translate-x-6 transform  bg-red-400' : 'bg-white'
              }`}
            ></div>
          </div>
        </div>
      </label>
    </div>
  );
}

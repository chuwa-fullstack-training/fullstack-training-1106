/* eslint-disable react/prop-types */

const ShadowCheckbox = ({ children, onChange, checked }) => {
  return (
    <div className="flex flex-row w-1/4 gap-2">
      <input
        type="checkbox"
        id="done"
        className="relative w-4 h-4 mt-1 bg-white border-2 border-gray-400 rounded-sm appearance-none peer shrink-0 checked:bg-blue-800 checked:shadow-blue checked:border-0"
        onChange={onChange}
        checked={checked}
      />
      <label className="text-black rounded" htmlFor="done">
        <span>{children}</span>
      </label>
      <svg
        className="absolute hidden w-4 h-4 mt-1 pointer-events-none peer-checked:block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </div>
  );
};

export default ShadowCheckbox;

/* eslint-disable react/prop-types */
export default function Input({
  placeholder,
  type = "text",
  error,
  value,
  onChange,
  name,
}) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full px-3 py-1.5 border rounded-md focus:outline-none focus:ring-2 ${
          error
            ? "border-red-500 focus:ring-red-300"
            : "border-gray-300 focus:border-blue-500 focus:ring-blue-300"
        }`}
        value={value}
        onChange={onChange}
        name={name}
      />
      {error ? (
        <small className="text-red-500 opacity-100">{error}</small>
      ) : null}
    </>
  );
}
